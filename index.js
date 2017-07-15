var eos_sale_address_main = "0xd0a6e6c54dbc68db5db3a091b171a77407ff7ccf";
var eos_token_address_main = "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0";
let eos_sale_util_address_main = "0x860fd485f533b0348e413e65151f7ee993f93c02";

var eos_sale, eos_token, eos_sale_util

var state

var WAD = 1000000000000000000

// Wrapper for finally. When there is an error: show error
// else execute
var hopefully = $ => (error, result) => {
  if (error) {
    lament(error)
  } else {
    $(result)
  }
}

// Displays error message at end of page
function lament(error) {
  if (error) {
    document.querySelector(".before-error").outerHTML += `
      <div class="error pane">
        <h3>${error.message}</h3>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

// Switches between different information windows
function showPane(name) {
  hidePanes()
  show(`${name}-pane`)
  disable(`${name}-link`)
}

// Hides all information windows
function hidePanes() {
  for (var x of "generate transfer buy register".split(" ")) {
    try {
      enable(`${x}-link`)
      hide(`${x}-pane`)
    } catch (error) {}
  }
}

// Enables a button
function enable(id) {
  byId(id).classList.remove("disabled");
  byId(id).parentNode.classList.remove("disabled");
}

// Disables a button
function disable(id) {
  byId(id).classList.add("disabled");
  byId(id).parentNode.classList.add("disabled");
}




// Inital loading of the page
window.addEventListener('load', function() {
 setTimeout(() => {
  if (!window.web3) {
    byId("app").innerHTML = `
      <div>
        <div class="pane before-error">
          <h2>Could not connect to Ethereum</h2>
          <p>

            Consider installing <a href=https://metamask.io>MetaMask</a>,
            <a href=#>Mist</a> or another Ethereum client.

            If you&rsquo;re using MetaMask, you may need to unlock
            your account. You can also try disabling and re-enabling
            the MetaMask plugin by going to <a
            href=chrome://extensions>chrome://extensions</a>.

          </p>

          <p>Please reload this page and try again.</p>
        </div>
      </div>
    `
  } else {

      
  }
 }, 500)
})



var getCommonStatisticWithCallback = $ => {
  // Fetch common statistic from our server
    fetch('https://api.eos.io/eos-sales-statistic').then((result) => {
    return result.json();
    }).then((commonStatistic) => {
    $(null, commonStatistic)
        }).catch((error) => {

            byId("app").innerHTML = "\n      <div>\n        <div class=\"pane before-error\">\n          <h2>Could not connect to Ethereum</h2>\n          <p>\n\n            Consider installing <a href=https://metamask.io>MetaMask</a>,\n            <a href=#>Mist</a> or another Ethereum client.\n\n            If you&rsquo;re using MetaMask, you may need to unlock\n            your account. You can also try disabling and re-enabling\n            the MetaMask plugin by going to <a\n            href=chrome://extensions>chrome://extensions</a>.\n\n          </p>\n\n          <p>Please reload this page and try again.</p>\n        </div>\n      </div>\n    ";
            //document.getElementById('testerr').style.display = "block";

   // $(error)
  })
}

// Refresh the page
function refresh() {
  return new Promise((resolve, reject) => {
    async.parallel(Object.assign({
      // get Current Window Info
      commonStatistic: $ => getCommonStatisticWithCallback($),
    }, web3.eth.accounts[0] ? {
            // Get User Data
            eth_balance: $ =>  web3.eth.getBalance(web3.eth.accounts[0], $),
      eos_balance: $ => eos_token.balanceOf(web3.eth.accounts[0], $),
      publicKey: $ => eos_sale.keys(web3.eth.accounts[0], $),
      userBuys: $ => { eos_sale_util.userBuys(web3.eth.accounts[0], $) },
      userClaims: $ => eos_sale_util.userClaims(web3.eth.accounts[0], $),
    } : {}), hopefully(({
      commonStatistic, eth_balance, eos_balance, publicKey, userBuys, userClaims
    }) => {

      // Convert it to big number temporarily to ensure compability with old code
      var today = web3.toBigNumber(commonStatistic[0]["today"])
      // Convert it to big number temporarily to ensure compability with old code
      var numberOfDays = web3.toBigNumber(commonStatistic[0]["numberOfDays"])

      // Entropy for generating the EOS key.  The key could be added or changed.
      byId("app").addEventListener("mousemove", entropyEvent, {capture: false, passive: true})

      if (keyChange(publicKey)) {
        // The key was just changed
        if(byId("generate-link")) {
          enable("generate-link")
        }
        if(byId("register-pane")) {
          hide("register-pane")
        }
      }

      async.map(iota(Number(numberOfDays) + 1), (i, $) => {
        var day = { id: i }
        day.name = day.id
        // Convert it to big number temporarily to ensure compability with old code
        day.createOnDay = web3.toBigNumber(commonStatistic[i]["createOnDay"])
        // Convert it to big number temporarily to ensure compability with old code
        day.dailyTotal = web3.toBigNumber(commonStatistic[i]["dailyTotal"])
        // Convert it to big number temporarily to ensure compability with old code
        day.price = web3.toBigNumber(commonStatistic[i]["price"])
        day.userBuys = userBuys[i] && userBuys[i].div(WAD)
        day.received = day.dailyTotal.equals(0) ? web3.toBigNumber(0) : day.createOnDay.div(day.dailyTotal).times(day.userBuys)

        if (day.id == 0) {
          day.ends = moment(commonStatistic[i]["ends"])
        } else {
          day.begins = moment(commonStatistic[i]["begins"])
          day.ends = moment(commonStatistic[i]["ends"])
        }

        // Used for determining total unclaimed tokens. Marks windows where unclaimed tokens persist
        day.claimed = userClaims && userClaims[i]
        $(null, day)
      }, hopefully(days => {

        // Adds up all unclaimed tokens from the above marked windows
        var unclaimed = days.filter((x, i) => {
          return i < Number(today) && !x.claimed
        }).reduce((a, x) => x.received.plus(a), web3.toBigNumber(0))

        resolve(update({
          days, unclaimed, today, eth_balance, eos_balance, publicKey,
          ...(state ? { } : { buyWindow: today.toNumber() }),
        }))
      }))
    }))
  })
}

// Hardcoded Dropdow in the Get EOS Panel that shows windows from current Window till the end
var renderBuyWindowDropDown = (buyWindow, today) => {
  let dropdownOptions = [];

  for (let i = Number(today); i < 351; i++) {
    const dropdownOption = (
      <option key={i} value={i}>
        Period #{i}
      </option>
    );
    dropdownOptions.push(dropdownOption)
  }

  return (
    <select id="sale-window" value={buyWindow}
            onChange={e => update({ buyWindow: e.target.value })}>
      { dropdownOptions }
    </select>
  )
}

var render = ({
  time, days, unclaimed, today,
  eth_balance, eos_balance, publicKey, buyWindow,
}) => <div>
  { // ---------------------------------------------------
    // Top Panel
    // ---------------------------------------------------
    web3.eth.accounts[0] ? <div>
    <div className="account pane">
      <h2 style={{ textAlign: "center" }}>EOS Token Distribution</h2>
      <div className="info"><table><tbody>
        <tr>
          <th>Contract address</th>
          <td style={{ textAlign: "left" }}>
0xd0a6e266d02703f2a94706054c44ea6cc4a49d92
          </td>
        </tr>
        <tr>
          <th>Ethereum account</th>
          <td style={{ width: "50rem", textAlign: "left" }}>
           0xf0d601c3b5f09d29c067159454407c7fd1c5c509
          </td>
        </tr>
        <tr>
          <th>EOS public key</th>
          <td style={{ textAlign: "left" }}>
            {publicKey ?
              <span>
                <code>{publicKey}</code>
              </span>
              :
              <span>
                (no EOS key registered)
             </span>
            }
          </td>
        </tr>
        <tr>
          <th>Token balances</th>
          <td style={{ textAlign: "left" }}>
            {formatETH(eth_balance.div(WAD))} ETH
          </td>
        </tr>
        <tr>
          <th></th>
          <td style={{ textAlign: "left" }}>
            {formatEOS(unclaimed)} EOS (unclaimed)
          </td>
        </tr>
        <tr>
          <th></th>
          <td style={{ textAlign: "left" }}>
            {formatEOS(eos_balance.div(WAD))} EOS
          </td>
        </tr>
      </tbody></table></div>
      <div className="buttons">
        <div className="row" style={{ marginBottom: "1rem" }}>
          <div className="button">
            <a href="#" id="buy-link"
               onClick={event => (event.preventDefault(), showPane('buy'))}>
              Get EOS tokens
            </a>
          </div>
          <div className="button" style={{ marginLeft: "1rem" }}>
            <a href="#" id="generate-link"
               onClick={event => (generate(), event.preventDefault())}>
              { publicKey ? "Change your EOS key" : "Generate EOS key"}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="button">
            <a href="#" id="transfer-link"
               onClick={event => (event.preventDefault(), showPane('transfer'))}>
              Transfer EOS tokens
            </a>
          </div>
          <div className={ `button ${unclaimed.equals(0) ? 'disabled' : ''}` }
               style={{ marginLeft: "1rem" }}
          >
            { unclaimed.equals(0) &&
              <a href="#" id="claim-button" className="disabled"
                 onClick={event => event.preventDefault()}>
                Claim EOS tokens
              </a>
            }
            { !unclaimed.equals(0) &&
              <a href="#" id="claim-button"
                 onClick={event => (event.preventDefault(), claim())}>
                Claim EOS tokens
              </a>
            }
            <a href="#" id="claim-progress" className="disabled hidden"
               onClick={event => event.preventDefault()}>
              Claiming tokens...
            </a>
          </div>
        </div>
      </div>
    </div>
    {
      // ---------------------------------------------------
      // Generate EOS Key Panel
      // ---------------------------------------------------
    }
    <form className="hidden pane" id="generate-pane"
        onSubmit={event => (event.preventDefault(), generateConfirm())}>
      <span id="generate-progress">
        Generating key...
      </span>
      <div id="generate-confirm" className="hidden">
        <h3>{publicKey ? "Change" : "Register"} EOS key</h3>

        {publicKey ? <p>This will replace your EOS claim key:
          <table>
            <tbody>
              <tr>
                <th>Public key</th>
                <td style={{textAlign: 'left'}}>
                  <span style={{width: '30em'}}>{publicKey}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </p> : <span></span>}

        <p>Please back up the private key displayed below in multiple
        safe locations before continuing.  You should make more than
        one copy and keep all copies in separate secure locations.
        If you use an external storage device such as a USB stick,
        make sure to safely eject the device before continuing.</p>

        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <td style={{ textAlign: "left" }}>
                EOS Token Distribution Claim Key
              </td>
            </tr>
            <tr>
              <th>Public key</th>
              <td style={{textAlign: 'left'}}>
                <span id="generate-pubkey" style={{ width: "30em" }}></span>
              </td>
            </tr>
            <tr>
              <th>Private key</th>
              <td style={{ textAlign: "left" }}>
                <span id="generate-privkey" style={{ width: "30em" }}></span>
              </td>
            </tr>
            <tr>
              <th style={{ verticalAlign: "top" }}>Confirm private key</th>
              <td style={{ textAlign: "left" }}>
                <input name="wif" autoComplete="off"
                  id="generate-confirm-input" type="text"
                  style={{ width: "35em", fontFamily: "monospace" }}
                  />
                <p id="generate-unmatched" className="hidden">
                  <b style={{ color: "red" }}>
                    Private key does not match
                  </b>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>

          There is no way to recover your private key.  You must save
          it right now or you will be unable to access your EOS tokens
          when the sale ends.

        </p>

        <button id="generate-button">
          I have safely backed up my private key
        </button>
        <button onClick={generateCancel} style={{ marginLeft: "1rem" }}>
          Cancel
        </button>
      </div>
    </form>
    {
      // ---------------------------------------------------
      // Generate EOS Key Panel (after pressing "I have backed up my key" has been pressed)
      // ---------------------------------------------------
    }
    <div className="hidden pane" id="register-pane">
      <h3>{publicKey ? "Change" : "Register"} EOS public key</h3>
      <table>
        <tbody>
          <tr>
            <th>Public key</th>
            <td style={{textAlign: 'left'}}>
              <span id="generate-pubkey" style={{width: '30em'}}>&nbsp;</span>
            </td>
          </tr>
        </tbody>
      </table>
      <span style={{ marginLeft: "1rem" }}>
        <span id="register-progress" className="hidden">
          {publicKey ? "Changing" : "Registering"} key...
        </span>
      </span>
    </div>
    {
      // ---------------------------------------------------
      // Buy EOS Panel
      // ---------------------------------------------------
    }
    <form className="hidden pane" id="buy-pane"
          onSubmit={event => (event.preventDefault(), buy())}>
      <h3>Get EOS tokens</h3>
      <table><tbody>
        <tr>
          <th>Distribution period</th>
          <td style={{ textAlign: "left" }}>
            {
              renderBuyWindowDropDown(buyWindow, today)
            }
          </td>
        </tr>
        <tr>
          <th>Closing</th>
          <td style={{ textAlign: "left" }}>
            {days[buyWindow].ends.fromNow()}
          </td>
        </tr>
        <tr>
          <th>EOS Distributed</th>
          <td style={{ textAlign: "left" }}>
            {formatEOS(days[buyWindow].createOnDay)} EOS
          </td>
        </tr>
        <tr>
          <th>Total ETH</th>
          <td style={{ textAlign: "left" }}>
            {formatETH(days[buyWindow].dailyTotal)} ETH
          </td>
        </tr>
        <tr>
          <th>Your ETH</th>
          <td style={{ textAlign: "left" }}>
            {formatETH(days[buyWindow].userBuys)} ETH
          </td>
        </tr>
        <tr>
          <th>Effective price</th>
          <td style={{ textAlign: "left" }}>
            {days[buyWindow].price.toFormat(9)} ETH/EOS
          </td>
        </tr>
        <tr>
          <th>Send ETH</th>
          <td style={{ textAlign: "left" }}>
            <input type="text" required id="buy-input"
                   placeholder={formatETH(eth_balance.div(WAD))}/>
            {" ETH"}
            <span style={{ marginLeft: "1.5rem" }}>
              <button id="buy-button">
                Send ETH
              </button>
              <span id="buy-progress" className="hidden">
                Sending ETH...
              </span>
            </span>
          </td>
        </tr>
      </tbody></table>
    </form>
    {
      // ---------------------------------------------------
      // Transfer EOS Panel
      // ---------------------------------------------------
    }
    <form className="hidden pane before-error" id="transfer-pane"
          onSubmit={event => (event.preventDefault(), transfer())}>
      <h3>Transfer EOS tokens to another Ethereum account</h3>
      <table><tbody>
        <tr>
          <th>Recipient account</th>
          <td style={{ textAlign: "left" }}>
            <input placeholder="0x0123456789abcdef0123456789abcdef01234567"
                   id="transfer-address-input" required
                   type="text"
                   minLength={42} maxLength={42}
                   style={{ width: "100%" }}/>
          </td>
        </tr>
        <tr>
          <th>Transfer amount</th>
          <td style={{ textAlign: "left" }}>
            <input placeholder={formatEOS(eos_balance.div(WAD))}
                   id="transfer-amount-input" required
                   type="text"
                   style={{ width: "15em" }}/>
            {" EOS"}
            <span style={{ marginLeft: "1rem" }}>
              <button id="transfer-button">
                Transfer EOS tokens
              </button>
              <span id="transfer-progress" className="hidden">
                Transferring tokens...
              </span>
            </span>
          </td>
        </tr>
      </tbody></table>
    </form>
    {
      // ---------------------------------------------------
      // Window Table
      // ---------------------------------------------------
    }
    <div className="sales pane">
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Period</th>
          <th>EOS Distributed</th>
          <th>Total ETH</th>
          <th>Effective price</th>
          <th>Closing</th>
          <th>Your ETH</th>
          <th>Your EOS</th>
        </tr>
      </thead>
      <tbody>
        {days.map((day, i) =>
          <tr key={i} className={i == Number(today) ? "active" : i < Number(today) ? "closed" : ""}>
            <td>
              #{day.name}
              {i == Number(today) ? "" : ""}
            </td>
            <td>{formatEOS(day.createOnDay)} EOS</td>
            <td>{formatETH(day.dailyTotal)} ETH</td>
            <td>{day.dailyTotal == 0 ? "n/a" : (
              `${day.price.toFormat(9)} ETH/EOS`
            )}</td>
            <td>{day.ends.fromNow()}</td>
            <td>{formatETH(day.userBuys)} ETH</td>
            <td>
              {formatEOS(day.received)} EOS
              {i >= Number(today)
                && <span title="Pending EOS subject to change if additional funds received" style={{ cursor: "pointer" }}> *</span>}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  </div> : <div className="pane before-error">
    {
    // ---------------------------------------------------
    // Error Panel when no account has been retrieved from web3
    // ---------------------------------------------------
    }
    <h3>Ethereum account not found</h3>

    It looks like an Ethereum client is available in your
    browser, but I couldn&rsquo;t find any accounts.
    If you&rsquo;re using MetaMask, you may need to unlock
    your account. You can also try disabling and re-enabling
    the MetaMask plugin by going to <a
    href="chrome://extensions">chrome://extensions</a>.

  </div>}
</div>

// When "Send ETH" has been clicked in the Buy EOS Panel
function buy() {
  byId("buy-button").classList.add("hidden")
  byId("buy-progress").classList.remove("hidden")
  var amount = getValue("buy-input").replace(/,/g, "")

  
  web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: '0xd0a6e266d02703f2a94706054c44ea6cc4a49d92', data: '', value: web3.toWei(amount) }, function (err, transactionHash) {
  });

  hidePanes()
  byId("buy-input").value = ""
  byId("buy-button").classList.remove("hidden")
  byId("buy-progress").classList.add("hidden")
}

// When "Claim EOS Tokens" Button has been clicked in the Upper Panel
function claim() {
  byId("claim-button").classList.add("hidden")
  disable("claim-button")
  byId("claim-progress").classList.remove("hidden")
  eos_sale.claimAll({
    gas: 2000000,
  }, hopefully(result => ping(result).then(() => {
    byId("claim-button").classList.remove("hidden")
    byId("claim-progress").classList.add("hidden")
  })))
}

// When "Transfer EOS Token" Button has been clicked in the Transfer EOS Panel
function transfer() {
  byId("transfer-button").classList.add("hidden")
  byId("transfer-progress").classList.remove("hidden")
  var guy = getValue("transfer-address-input")
  var wad = getValue("transfer-amount-input").replace(/,/g, "") * WAD
  eos_token.transfer(guy, wad, hopefully(result => ping(result).then(() => {
    hidePanes()
    byId("transfer-button").classList.remove("hidden")
    byId("transfer-progress").classList.add("hidden")
  })))
}

// USed for generating a key by recording mouse mousemovements for random numbers
function entropyEvent(e) {
  var {key_utils} = eos_ecc
  if(e.type === 'mousemove')
      key_utils.addEntropy(e.pageX, e.pageY, e.screenX, e.screenY)
  else
      console.log('onEntropyEvent Unknown', e.type, e)
}

// When "Generate EOS KEY" in the top panel has been clicked
function generate() {
  showPane('generate')
  show("generate-progress")
  hide("generate-confirm")
  setTimeout(() => {
    privateKeyPair = genKeyPair()
    hide("generate-progress")
    byId("generate-pubkey").innerHTML = privateKeyPair.pubkey
    byId("generate-privkey").innerHTML = privateKeyPair.privkey
    byId("generate-confirm-input").value = ""
    show("generate-confirm")
  })
}

let privateKeyPair = null

// Helper function for generate() to actually generate public/private key pair
function genKeyPair() {
  var {PrivateKey} = eos_ecc
  var d = PrivateKey.randomKey()
  var privkey = d.toWif()
  var pubkey = d.toPublic().toString()
  return {pubkey, privkey}
}

// When "I have safely backed up my keys" in the Generate EOS Panel has been clicked
function generateConfirm() {
  const confirmPriv = getValue("generate-confirm-input")
  if(confirmPriv !== privateKeyPair.privkey) {
    show("generate-unmatched")
    return
  }
  hide("generate-unmatched")
  hide('generate-pane')
  byId("generate-pubkey").innerHTML = null
  byId("generate-privkey").innerHTML = null
  byId("generate-confirm-input").value = null
  show('register-pane')
  register()
}

// When "Cancel" in the Generate EOS Panel has been clicked
function generateCancel(e) {
  e.preventDefault()
  privateKeyPair = null
  hide('register-pane')
  enable("generate-link")
  hide('generate-pane')
  hide("generate-unmatched")
  byId("generate-pubkey").innerHTML = null
  byId("generate-privkey").innerHTML = null
  byId("generate-confirm-input").value = null
}

// Makes the actual request when registering Key (Called from generateConfirm)
function register() {
  const key = privateKeyPair.pubkey
  show("register-progress")
  eos_sale.register(key, {
    gas: 1000000,
  }, hopefully(result => ping(result).then(() => {
    hidePanes()
    hide("register-progress")
  })))
}

let lastPublicKey

// Checks if the public key that has been registered for that account has been changed
function keyChange(pubkey) {
  const changed = (lastPublicKey != pubkey)
  lastPublicKey = pubkey
  return changed
}

// Called after every transaction
// Checks every second for a receipt
// Refreshes the page after receipt has arrived
function ping(tx) {
  return new Promise((resolve, reject) => {
    function f() {
      web3.eth.getTransactionReceipt(
        tx, (err, x) => x ? refresh().then(() => resolve(x))
          : setTimeout(f, 1000))
    }
    f()
  })
}

var loaded

// setTimeout(() => loaded || location.reload(), 20000)

// Refresh the data and rerender the page
function poll() {
  refresh().then(() => ( loaded = true, setTimeout(poll, 20000 * 60)))
}

//Rerender the page
function update(x) {
  state = Object.assign({}, state, x)
  ReactDOM.render(render(state), byId("app"))
}

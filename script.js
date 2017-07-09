// function to create new cookie
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// function to read cookie by name
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// This is the only way I can do to manipulate the progress bar for now
function updateProgressBar(eosDistributedForPublic) {
  var totalEos = Math.pow(10, 9) // Total tokens available for sale is 1,000,000,000
  var eosDistributedForShareHolder = totalEos / 10 // 10% is received for sharedholder
  // We display the total eos distributed for shareholder and public
  var eosDistributed = eosDistributedForPublic // NOTE: As discussed, we don't need to include eos for shareholder for now
  var barPercentage = Math.floor(eosDistributed / totalEos * 100)

  var t = $('.progress-bar');
  t.data('percentage', barPercentage);

  // add some "gimme" percentage when data-percentage is <2
  if (parseInt((t.data('percentage')), 10) < 2) barPercentage = 2;
  // fill in bars and labels
  t.find('.label-text').text(eosDistributed + ' EOS');
  t.find(".label").css("right", -$('.label').width()/2)
  t.children('.bar').animate({
    width: barPercentage + '%'
  }, 500);
  t.find('.label').animate({
    opacity: 1
  }, 1000);
}

$(document).ready(function () {
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 100){
    $(".header").addClass("header-animate");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
      $(".header").addClass("header-animate");
    }else{
      $(".header").removeClass("header-animate");
    }
  });
  if(location.hash){
    $("body, html").animate({
      scrollTop: $(location.hash).offset().top - $('.header').height()
    },"ease-in");
  }
  $("a[data-scroll]").on("click", function (event) {
    event.preventDefault();
    if($(this).attr('data-scroll')){
      $("body, html").animate({
        scrollTop: $('#'+$(this).attr('data-scroll')).offset().top - $('.header').height()
      },"ease-in");
    }
  });

  $(".copy").on("click", function (event) {
    event.preventDefault();
      var copyTextarea = $(this).parents('li').find(".copy-area");
      copyTextarea.select();

      try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
      } catch (err) {
          console.log('Oops, unable to copy');
      }
  });

  $(document).on("click",".navigation.open a", function (event) {
    //event.preventDefault();
    //console.log($(this).parents('.navigation'));
    $(this).parents('.navigation').removeClass('open');
    $("#nav-icon").removeClass("open");
    $(".header").removeClass("open");
    $("body").removeClass("overflow-hidden");
  });

  $(document).on("click", "#nav-icon", function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
    $(".header").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });

    // Token distribution countdown
    // var tokenDistrubutionStart = moment.tz("2017-06-26 13:00:00", "UTC");
    // $('#presale-countdown').countdown(tokenDistrubutionStart.toDate(), function(event) {
    //     $(this).html(event.strftime('%D:%H:%M:%S'));
    // }).on('finish.countdown', function(event) {
    //     // Reload The Page
    //     console.log("Reload");
    //     top.location.reload(true);
    // });

    $('#buy-eos-tokens, #more-information').click(function (event) {
        event.preventDefault();
        var dataSoruce = this.id;
        $('#buy-token').modal('show');
        $("#token-purchase-agreement-continue").attr("data-source", dataSoruce);
    });

    // Buy EOS Terms and Conditions Check
    $(".accept").click(function (event) {
      var counter = 0;
      $(".accept").each(function(key, checkbox) {
        if(checkbox.checked == false) {
          $("#token-purchase-agreement-continue").attr("disabled", "disabled");
          return false;
        } else {
          counter++;
          if(counter == $(".accept").length) {
            $("#token-purchase-agreement-continue").attr("disabled", false);
          }
        }
      });
    });
    $('#buy-token').on($.modal.AFTER_CLOSE, function(event, modal) {
      $(".accept").prop('checked', false);
      $("#token-purchase-agreement-continue").attr("disabled", "disabled");
    });

    $("#token-purchase-agreement-continue").click(function() {
        switch($(this).attr("data-source")) {
            case "more-information":
                top.location.href = "information";
                break;

            case "buy-eos-tokens":
                top.location.href = "instructions";
                break;
        }
    });
});

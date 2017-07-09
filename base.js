var _yt_player={};(function(g){var window=this;var ba,da,fa,la,ka,ma,qa,ra,xa,ya,Ha,Ia,Ka,Ma,Na,Va,Wa,Xa,cb,fb,gb,ib,kb,pb,tb,ub,yb,Bb,Hb,Eb,Jb,Kb,Fb,Lb,Ob,Sb,Vb,Yb,bc,Xb,cc,ec,gc,hc,jc,mc,oc,nc,pc,sc,tc,uc,wc,xc,Dc,Ec,Fc,Ic,Jc,Kc,Mc,Nc,Qc,Rc,Pc,Vc,Yc,ad,cd,dd,fd,vd,zd,Jd,Td,Ud,Dd,jd,de,je,ke,ie,ee,ne,pe,me,qe,re,se,te,ue,ve,we,ze,Ae,Ce,De,Ee,Ge,Fe,He,Ie,Ne,Re,Se,Te,Ve,We,Ye,Ue,bf,ef,Ze,gf,pf,of,jf,af,sf,tf,uf,vf,wf,xf,yf,zf,Cf,Bf,Df,Ef,Gf,Lf,Mf,Nf,Qf,Sf,Tf,Uf,Wf,Xf,$f,cg,Zf,ag,Of,Vf,ig,fg,dg,eg,jg,hg,gg,ng,og,pg,qg,rg,vg,ug,xg,Ag,Bg,Ig,Jg,Kg,
Lg,Ng,Sg,Tg,Xg,Yg,$g,ih,jh,kh,lh,mh,oh,ph,qh,vh,Ah,Bh,Fh,Kh,Nh,Oh,Ph,Qh,Rh,Th,Uh,Vh,Wh,Xh,Yh,Zh,$h,bi,ei,fi,gi,hi,li,mi,ni,oi,pi,qi,ri,vi,ui,wi,xi,zi,yi,Ai,Ci,Bi,Di,Gi,Hi,Fi,Ii,Ki,Mi,Ji,Oi,Ni,Qi,Ri,Si,Ti,Ui,Xi,Yi,Zi,ej,hj,nj,jj,pj,sj,rj,qj,tj,uj,vj,yj,xj,wj,zj,Aj,Bj,Cj,Ej,Dj,Fj,Gj,Hj,Ij,Jj,Kj,Nj,Oj,Pj,Qj,Rj,Sj,Tj,Vj,Wj,ck,ek,Zj,ak,Yj,bk,fk,mk,jk,ik,Uj,Xj,nk,ok,rk,sk,tk,yk,pk,zk,qk,Ak,Bk,Dk,Ek,Fk,Ik,Jk,Hk,Kk,Lk,Mk,Nk,Gk,Ok,Pk,Tk,Sk,Uk,Qk,Vk,Wk,Xk,Yk,Zk,$k,al,cl,bl,fl,el,il,kl,ll,ml,nl,pl,ql,rl,sl,
tl,vl,xl,Bl,ul,gl,zl,yl,Fl,Gl,Dl,wl,Il,Jl,Hl,Al,Ll,Ml,Kl,Cl,Nl,Ol,Pl,Ql,Sl,Tl,Rl,Ul,Vl,Wl,Xl,em,Yl,am,$l,Zl,bm,cm,dm,gm,fm,lm,qm,rm,sm,tm,vm,um,ym,im,Am,zm,Dm,Cm,Em,Gm,Mm,Hm,Qm,Rm,Um,Sm,Vm,Wm,Xm,Ym,Zm,$m,cn,bn,an,dn,en,ln,mn,nn,on,gn,rn,sn,tn,vn,un,xn,zn,Bn,Cn,En,Dn,Fn,Gn,In,Ln,Tn,Un,Wn,Mn,Pn,Xn,Yn,$n,Sn,Zn,On,bo,co,go,ho,jo,ko,lo,io,no,oo,po,to,vo,qo,ro,so,xo,yo,wo,Ao,Do,Co,Eo,Io,Jo,Ko,No,Po,Qo,To,Ro,So,Uo,Wo,Xo,Yo,Zo,$o,bp,cp,dp,ep,hp,ip,kp,qp,up,vp,zp,Ep,Fp,Hp,Ip,Jp,Gp,Kp,Lp,Mp,Pp,Np,Up,Op,Vp,
Rp,Wp,Sp,bq,aq,cq,dq,eq,fq,gq,hq,jq,oq,iq,xq,qq,Aq,pq,Bq,Dq,wq,vq,uq,Fq,Eq,Gq,Hq,Jq,Lq,Mq,Nq,Oq,Pq,Qq,Uq,Wq,Rq,Yq,Vq,ar,$q,Sq,Zq,br,dr,Kq,Xq,cr,fr,er,Tq,Iq,Cq,sq,hr,kr,mr,nr,or,pr,sr,tr,ur,vr,wr,xr,zr,Ar,Br,Cr,Dr,Fr,Hr,Ir,Jr,Er,Gr,Mr,Lr,Nr,Or,Qr,Rr,as,bs,cs,es,fs,gs,is,js,ks,ls,ms,os,ps,qs,rs,ts,vs,xs,zs,Hs,Js,Ks,Ms,Ps,Qs,Ts,Xs,Vs,Ws,Ss,Zs,at,ct,dt,et,ft,gt,ht,lt,ot,nt,pt,qt,rt,tt,xt,ut,zt,Et,Ct,Dt,Gt,Ft,Ht,Mt,Ot,Pt,Rt,St,Tt,Vt,Xt,cu,du,eu,ju,nu,lu,pu,ou,uu,vu,wu,Ju,Ku,Iu,Vu,Uu,Zu,cv,ev,dv,hv,yv,
Bv,zv,Av,Ev,Dv,Fv,Gv,Hv,Iv,Jv,Ov,Lv,Qv,Nv,Pv,Wv,Yv,Zv,$v,bw,gw,hw,iw,jw,lw,mw,pw,rw,uw,yw,vw,xw,zw,Ew,Fw,Dw,Gw,Iw,Jw,Lw,Mw,Hw,Nw,Kw,Sw,Tw,Rw,Uw,Ow,Qw,Vw,Ww,Xw,Zw,$w,Yw,ax,bx,cx,dx,fx,gx,Kv,hx,ix,jx,qx,ux,xx,vx,yx,zx,Ax,Bx,Ex,Cx,Gx,Hx,Ix,Kx,Jx,Lx,Mx,Nx,Ox,Fx,Dx,Px,Sx,Tx,Qx,Xx,Wx,Yx,Zx,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ly,ny,oy,py,qy,ry,sy,ty,uy,wy,S,vy,zy,yy,By,Cy,Dy,Gy,Iy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,Ty,Uy,Vy,Wy,Xy,Zy,bz,Yy,$y,fz,gz,dz,az,hz,iz,cz,ez,jz,kz,lz,mz,nz,rz,sz,oz,tz,uz,vz,wz,xz,yz,zz,Az,Bz,
Cz,Dz,Ez,Fz,Gz,Hz,Jz,Lz,Mz,Oz,Nz,Pz,Qz,Rz,Sz,Tz,Vz,Uz,Wz,Xz,Yz,Zz,dA,fA,kA,aA,gA,iA,hA,eA,mA,oA,nA,$z,bA,cA,lA,jA,pA,qA,rA,sA,tA,uA,vA,wA,yA,AA,BA,CA,FA,HA,IA,JA,GA,EA,LA,MA,NA,OA,PA,QA,SA,TA,VA,UA,XA,YA,$A,aB,bB,cB,dB,fB,eB,gB,hB,iB,jB,kB,lB,mB,nB,oB,pB,tB,uB,qB,rB,sB,wB,yB,zB,AB,BB,CB,HB,EB,DB,IB,KB,JB,PB,NB,QB,RB,SB,TB,UB,VB,WB,XB,YB,MB,LB,$B,bC,cC,dC,aC,gC,iC,hC,lC,nC,mC,oC,pC,qC,sC,rC,tC,uC,vC,wC,yC,zC,AC,BC,CC,DC,EC,xC,FC,GC,HC,LC,MC,KC,TC,WC,xD,wD,vD,uD,SC,UC,FD,GD,LD,KD,MD,OD,PD,QD,RD,SD,
TD,VD,XD,sE,tE,vE,wE,xE,yE,zE,BE,kE,rE,iE,pE,GE,HE,jE,JE,LE,NE,OE,PE,QE,RE,SE,UE,TE,VE,WE,XE,$E,bF,aF,dF,cF,ZE,eF,YE,fF,gF,hF,iF,jF,mF,oF,rF,zF,AF,BF,CF,DF,FF,EF,GF,HF,IF,JF,NF,dG,gG,VF,hG,RF,lG,cG,TF,bG,XF,WF,ZF,pG,aG,eG,SF,fG,rG,KF,OF,MF,qG,sG,EG,FG,GG,HG,IG,KG,LG,OG,QG,RG,TG,UG,VG,WG,MG,XG,zG,AG,BG,yG,aH,bH,cH,uE,wG,CG,eH,hH,jH,kH,lH,mH,nH,oH,rH,sH,tH,uH,vH,wH,xH,yH,zH,AH,DH,EH,FH,GH,BH,IH,JH,KH,LH,MH,NH,PH,QH,RH,SH,TH,VH,WH,YH,$H,aI,bI,cI,dI,fI,fH,hI,kI,jI,lI,mI,nI,oI,pI,rI,sI,iI,tI,vI,uI,wI,
xI,yI,zI,AI,DI,EI,CI,BI,FI,GI,HI,II,QI,RI,SI,TI,KI,LI,MI,NI,OI,UI,VI,WI,XI,YI,ZI,$I,aJ,cJ,dJ,eJ,fJ,gJ,hJ,iJ,jJ,bJ,kJ,lJ,mJ,nJ,oJ,pJ,qJ,rJ,sJ,uJ,wJ,xJ,yJ,vJ,zJ,AJ,BJ,CJ,DJ,EJ,FJ,GJ,HJ,JJ,IJ,KJ,LJ,MJ,NJ,OJ,QJ,RJ,SJ,TJ,UJ,VJ,PJ,XJ,WJ,ZJ,YJ,aK,$J,bK,cK,dK,fK,eK,iK,lK,mK,nK,oK,hK,pK,qK,gK,rK,sK,tK,uK,kK,jK,vK,wK,xK,yK,zK,AK,BK,CK,HK,IK,JK,GK,LK,DK,MK,EK,FK,NK,KK,OK,PK,QK,RK,SK,TK,UK,WK,VK,XK,YK,ZK,$K,aL,bL,cL,dL,gL,jL,kL,lL,oL,pL,sL,rL,tL,uL,vL,xL,yL,wL,AL,mL,nL,BL,CL,eL,zL,DL,fL,iL,EL,FL,GL,HL,IL,JL,
KL,LL,ML,NL,PL,OL,QL,RL,TL,SL,VL,WL,XL,YL,ZL,aM,bM,dM,cM,eM,fM,gM,hM,iM,jM,kM,lM,oM,mM,nM,qM,pM,rM,CH,HH,sM,tM,uM,vM,wM,xM,AM,BM,JM,GM,DM,LM,NM,PM,OM,yM,FM,WM,UM,VM,aN,QM,eN,dN,bN,kN,mN,nN,oN,XM,pN,YM,EM,lN,rN,fN,sN,TM,tN,$M,RM,zM,wN,xN,yN,HM,cN,zN,vN,IM,AN,SM,jN,iN,BN,CM,uN,CN,hN,gN,DN,EN,HN,NN,RN,cO,jO,mO,oO,pO,qO,rO,sO,uO,vO,wO,xO,yO,zO,AO,CO,DO,FO,GO,HO,JO,KO,MO,NO,PO,TO,SO,VO,WO,UO,YO,XO,ZO,$O,aP,bP,cP,dP,eP,fP,gP,hP,jP,kP,iP,lP,nP,oP,pP,qP,rP,sP,tP,uP,yP,zP,xP,BP,vP,CP,DP,wP,FP,HP,KP,LP,MP,
GP,JP,IP,NP,OP,PP,RP,QP,SP,TP,UP,VP,WP,XP,YP,ZP,$P,aQ,bQ,cQ,dQ,gQ,fQ,eQ,hQ,jQ,iQ,kQ,lQ,mQ,oQ,pQ,sQ,qQ,rQ,uQ,vQ,wQ,xQ,yQ,CQ,DQ,zQ,EQ,AQ,BQ,FQ,GQ,HQ,IQ,KQ,MQ,NQ,OQ,PQ,QQ,SQ,RQ,TQ,UQ,WQ,tQ,nQ,$Q,aR,bR,XQ,dR,gR,hR,iR,lR,mR,nR,oR,rR,tR,uR,vR,wR,sR,xR,yR,BR,zR,AR,CR,GR,HR,IR,JR,KR,LR,NR,PR,QR,OR,SR,RR,WR,VR,XR,$R,YR,bS,UR,TR,cS,dS,fS,gS,eS,hS,jS,kS,mS,lS,nS,zS,MS,US,LS,XS,aT,$S,bT,cT,dT,eT,gT,hT,jT,kT,lT,mT,iT,nT,pT,oT,qT,rT,sT,uT,tT,vT,wT,xT,zT,yT,AT,BT,CT,DT,FT,ET,HT,IT,MT,OT,UT,VT,TT,ZT,$T,aU,bU,cU,
fU,gU,eU,dU,hU,jU,iU,kU,lU,nU,pU,mU,rU,tU,sU,uU,qU,vU,wU,xU,yU,zU,AU,BU,CU,DU,EU,FU,GU,HU,IU,KU,JU,MU,LU,NU,OU,PU,QU,UU,SU,RU,TU,XU,WU,YU,ZU,cV,eV,fV,dV,hV,iV,jV,kV,gV,mV,qV,lV,tV,uV,vV,oV,wV,nV,yV,sV,pV,xV,zV,rV,AV,DV,EV,FV,GV,HV,IV,JV,LV,KV,MV,NV,OV,PV,QV,RV,SV,TV,UV,VV,WV,XV,ZV,YV,$V,aW,bW,cW,eW,dW,hW,gW,jW,iW,kW,mW,GT,oW,nW,lW,pW,$U,rW,vW,tW,uW,wW,xW,qW,yW,zW,iO,FW,BW,AW,JW,LW,MW,VQ,YQ,HW,OW,ZQ,NW,PW,QW,RW,TW,DW,EW,XW,WW,IW,bX,cX,GW,eX,JN,fX,gX,VW,UW,jX,kX,aX,lX,nX,pX,$W,mX,qX,sX,rX,tX,wX,xX,
yX,iX,hX,zX,YN,AX,Ay,BX,ZW,DX,EX,$N,GX,oX,HX,IX,FX,JX,CW,dX,aa,ia,ea,ha,Qp,Ea,Fa;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=fa)};
fa=function(a){return"jscomp_symbol_"+(a||"")+ha++};
la=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});
la=function(){}};
ka=function(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ma=function(a){la();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.na=function(a){la();var b=a[window.Symbol.iterator];return b?b.call(a):ka(a)};
g.p=function(a,b){function c(){}
c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};
g.oa=function(a){if(!(a instanceof Array)){a=g.na(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
qa=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.r=function(a){return void 0!==a};
g.u=function(a){return"string"==typeof a};
g.sa=function(a){return"boolean"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.x=function(a,b,c){a=a.split(".");c=c||g.w;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.y=function(a,b){for(var c=a.split("."),d=b||g.w,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.va=function(){};
g.wa=function(a){a.Zb=void 0;a.getInstance=function(){return a.Zb?a.Zb:a.Zb=new a}};
xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
ya=function(a){return null!=a};
g.za=function(a){return"array"==xa(a)};
g.Ba=function(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ca=function(a){return"function"==xa(a)};
g.Da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return a[Ea]||(a[Ea]=++Fa)};
Ha=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.z=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.z=Ha:g.z=Ia;return g.z.apply(null,arguments)};
g.A=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.Ja=function(a,b){for(var c in b)a[c]=b[c]};
g.E=function(a,b){function c(){}
c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.DL=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
Ka=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.La=function(a,b){return 0==a.lastIndexOf(b,0)};
Ma=function(a){return/^[\s\xa0]*$/.test(a)};
Na=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
Va=function(a){if(!Oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Sa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ta,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ua,"&#0;"));return a};
Wa=function(a,b){a.length>b&&(a=a.substring(0,b-3)+"...");return a};
Xa=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Za=function(a,b){var c=g.r(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Ya("0",Math.max(0,b-d))+c};
g.$a=function(a){return null==a?"":String(a)};
g.ab=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.F)()).toString(36)};
g.db=function(a,b){for(var c=0,d=bb(String(a)).split("."),e=bb(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=cb(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||cb(0==l[2].length,0==m[2].length)||cb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
cb=function(a,b){return a<b?-1:a>b?1:0};
g.eb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
fb=function(a){var b=Number(a);return 0==b&&Ma(a)?window.NaN:b};
gb=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
ib=function(a){var b=g.u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};
g.jb=function(a){return a[a.length-1]};
kb=function(a,b){var c=0;(0,g.G)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);
return c};
g.nb=function(a,b,c){b=g.lb(a,b,c);return 0>b?null:g.u(a)?a.charAt(b):a[b]};
g.lb=function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
pb=function(a,b){var c=g.ob(a,b,void 0);return 0>c?null:g.u(a)?a.charAt(c):a[c]};
g.ob=function(a,b,c){for(var d=g.u(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1};
g.rb=function(a,b){return 0<=(0,g.qb)(a,b)};
g.sb=function(a){return 0==a.length};
tb=function(a){if(!g.za(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
ub=function(a,b){g.rb(a,b)||a.push(b)};
g.xb=function(a,b){var c=(0,g.qb)(a,b),d;(d=0<=c)&&g.vb(a,c);return d};
g.vb=function(a,b){Array.prototype.splice.call(a,b,1)};
yb=function(a,b){var c=g.lb(a,b,void 0);0<=c&&g.vb(a,c)};
g.zb=function(a){return Array.prototype.concat.apply([],arguments)};
g.Ab=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
Bb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Db=function(a,b,c,d){Array.prototype.splice.apply(a,g.Cb(arguments,1))};
g.Cb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.Gb=function(a,b,c){return Eb(a,c||Fb,!1,b)};
Hb=function(a,b){return Eb(a,b,!0,void 0,void 0)};
Eb=function(a,b,c,d,e){for(var f=0,k=a.length,l;f<k;){var m=f+k>>1,n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(k=m,l=!n)}return l?f:~f};
g.Ib=function(a,b){a.sort(b||Fb)};
Jb=function(a,b,c){var d=c||Fb;g.Ib(a,function(a,c){return d(b(a),b(c))})};
Kb=function(a,b){Jb(a,function(a){return a[b]},void 0)};
g.Mb=function(a,b){if(!g.Ba(a)||!g.Ba(b)||a.length!=b.length)return!1;for(var c=a.length,d=Lb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
Fb=function(a,b){return a>b?1:a<b?-1:0};
Lb=function(a,b){return a===b};
g.Nb=function(a,b,c){var d={};(0,g.G)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
Ob=function(a){for(var b=[],c=0;c<a;c++)b[c]=0;return b};
g.Pb=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(g.za(d))for(var e=0;e<d.length;e+=8192){var f=g.Cb(d,e,e+8192);f=g.Pb.apply(null,f);for(var k=0;k<f.length;k++)b.push(f[k])}else b.push(d)}return b};
Sb=function(a){return-1!=g.Rb.indexOf(a)};
g.Tb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ub=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Vb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Wb=function(a){var b=0,c;for(c in a)b++;return b};
Yb=function(a,b){return Xb(a,b)};
g.Zb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.$b=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.ac=function(a,b){var c=g.Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],g.r(a));c++);return a};
bc=function(a,b){return null!==a&&b in a};
Xb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
cc=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
ec=function(a){var b=dc;return(a=cc(b,a,void 0))&&b[a]};
g.fc=function(a){for(var b in a)return!1;return!0};
gc=function(a,b){b in a&&delete a[b]};
hc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.ic=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
jc=function(a){var b=xa(a);if("object"==b||"array"==b){if(g.Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=jc(a[c]);return b}return a};
g.lc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kc.length;f++)c=kc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
mc=function(a){var b=arguments.length;if(1==b&&g.za(arguments[0]))return mc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
oc=function(){return Sb("Safari")&&!(nc()||Sb("Coast")||Sb("Opera")||Sb("Edge")||Sb("Silk")||Sb("Android"))};
nc=function(){return(Sb("Chrome")||Sb("CriOS"))&&!Sb("Edge")};
pc=function(){return Sb("iPhone")&&!Sb("iPod")&&!Sb("iPad")};
sc=function(){return pc()||Sb("iPad")||Sb("iPod")};
tc=function(a){tc[" "](a);return a};
uc=function(a,b){try{return tc(a[b]),!0}catch(c){}return!1};
wc=function(a,b){var c=vc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
xc=function(){var a=g.w.document;return a?a.documentMode:void 0};
g.zc=function(a){return wc(a,function(){return 0<=g.db(yc,a)})};
g.Bc=function(a){return Number(Ac)>=a};
Dc=function(){this.g="";this.o=Cc};
Ec=function(a){return a instanceof Dc&&a.constructor===Dc&&a.o===Cc?a.g:"type_error:Const"};
Fc=function(a){var b=new Dc;b.g=a;return b};
Ic=function(){this.g="";this.o=Gc};
Jc=function(a){if(a instanceof Ic&&a.constructor===Ic&&a.o===Gc)return a.g;xa(a);return"type_error:TrustedResourceUrl"};
Kc=function(a){var b=new Ic;b.g=a;return b};
Mc=function(){this.g="";this.o=Lc};
Nc=function(a){if(a instanceof Mc&&a.constructor===Mc&&a.o===Lc)return a.g;xa(a);return"type_error:SafeUrl"};
Qc=function(a){if(a instanceof Mc)return a;a=a.Rf?a.Mf():String(a);Oc.test(a)||(a="about:invalid#zClosurez");return Pc(a)};
Rc=function(a){if(a instanceof Mc)return a;a=a.Rf?a.Mf():String(a);Oc.test(a)||(a="about:invalid#zClosurez");return Pc(a)};
Pc=function(a){var b=new Mc;b.g=a;return b};
g.Tc=function(){this.g="";this.A=Sc;this.o=null};
g.Uc=function(a){if(a instanceof g.Tc&&a.constructor===g.Tc&&a.A===Sc)return a.g;xa(a);return"type_error:SafeHtml"};
Vc=function(a,b){var c=new g.Tc;c.g=a;c.o=b;return c};
g.Wc=function(a,b){var c=b instanceof Mc?b:Rc(b);a.href=Nc(c)};
g.Xc=function(a,b){a.src=Jc(b)};
Yc=function(a,b){Ec(a);Ec(a);return Vc(b,null)};
g.Zc=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.$c=function(a,b){var c=a%b;return 0>c*b?c+b:c};
ad=function(a,b,c){return a+c*(b-a)};
cd=function(a){return bd(arguments,function(a,c){return a+c},0)};
dd=function(a){return cd.apply(null,arguments)/arguments.length};
g.ed=function(a,b){this.x=g.r(a)?a:0;this.y=g.r(b)?b:0};
fd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.gd=function(a,b){return new g.ed(a.x-b.x,a.y-b.y)};
g.hd=function(a,b){this.width=a;this.height=b};
g.id=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.md=function(a){return a?new jd(g.kd(a)):ld||(ld=new jd)};
g.nd=function(a){return g.u(a)?window.document.getElementById(a):a};
g.pd=function(a,b){var c=b||window.document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.od(window.document,"*",a,b)};
g.qd=function(a,b){var c=b||window.document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=window.document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):g.od(c,"*",a,b)[0]||null}return c||null};
g.od=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){d=a.getElementsByClassName(c);if(e){a={};for(var f=b=0,k;k=d[f];f++)e==k.nodeName&&(a[b++]=k);a.length=b;return a}return d}d=a.getElementsByTagName(e||"*");if(c){a={};for(f=b=0;k=d[f];f++)e=k.className,"function"==typeof e.split&&g.rb(e.split(/\s+/),c)&&(a[b++]=k);a.length=b;return a}return d};
g.sd=function(a,b){g.Tb(b,function(b,d){b&&b.Rf&&(b=b.Mf());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:rd.hasOwnProperty(d)?a.setAttribute(rd[d],b):g.La(d,"aria-")||g.La(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.ud=function(a){a=a.document;a=g.td(a)?a.documentElement:a.body;return new g.hd(a.clientWidth,a.clientHeight)};
g.xd=function(a){var b=vd(a);a=a.parentWindow||a.defaultView;return g.wd&&g.zc("10")&&a.pageYOffset!=b.scrollTop?new g.ed(b.scrollLeft,b.scrollTop):new g.ed(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
vd=function(a){return a.scrollingElement?a.scrollingElement:!g.yd&&g.td(a)?a.documentElement:a.body||a.documentElement};
zd=function(a){return a?a.parentWindow||a.defaultView:window};
g.Cd=function(a,b,c){var d=arguments,e=window.document,f=String(d[0]),k=d[1];if(!Ad&&k&&(k.name||k.type)){f=["<",f];k.name&&f.push(' name="',Va(k.name),'"');if(k.type){f.push(' type="',Va(k.type),'"');var l={};g.lc(l,k);delete l.type;k=l}f.push(">");f=f.join("")}f=e.createElement(f);k&&(g.u(k)?f.className=k:g.za(k)?f.className=k.join(" "):g.sd(f,k));2<d.length&&g.Bd(e,f,d,2);return f};
g.Bd=function(a,b,c,d){function e(c){c&&b.appendChild(g.u(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.Ba(f)||g.Da(f)&&0<f.nodeType?e(f):(0,g.G)(Dd(f)?g.Ab(f):f,e)}};
g.Ed=function(a){return window.document.createElement(String(a))};
g.Fd=function(a){return window.document.createTextNode(String(a))};
g.td=function(a){return"CSS1Compat"==a.compatMode};
g.Gd=function(a,b){a.appendChild(b)};
g.Hd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.Id=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
Jd=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Kd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Nd=function(a){return Ld&&void 0!=a.children?a.children:(0,g.Md)(a.childNodes,function(a){return 1==a.nodeType})};
g.Od=function(a){for(;a&&1!=a.nodeType;)a=a.nextSibling;return a};
g.Qd=function(a){var b;if(Pd&&!(g.wd&&g.zc("9")&&!g.zc("10")&&g.w.SVGElement&&a instanceof g.w.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Da(b)&&1==b.nodeType?b:null};
g.Rd=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.kd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Sd=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.Hd(a);var c=g.kd(a);a.appendChild(c.createTextNode(String(b)))}};
g.Vd=function(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Td(a)||Ud(a)):Td(a)&&Ud(a))&&g.wd){var c;!g.Ca(a.getBoundingClientRect)||g.wd&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Td=function(a){return g.wd&&!g.zc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Ud=function(a){a=a.tabIndex;return g.ta(a)&&0<=a&&32768>a};
Dd=function(a){if(a&&"number"==typeof a.length){if(g.Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ca(a))return"function"==typeof a.item}return!1};
g.Yd=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.Xd(a,function(a){return(!e||a.nodeName==e)&&(!c||g.u(a.className)&&g.rb(a.className.split(/\s+/),c))},!0,d)};
g.Zd=function(a,b){return g.Yd(a,null,b,void 0)};
g.Xd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
jd=function(a){this.g=a||g.w.document||window.document};
g.$d=function(a){a=a.g;return a.parentWindow||a.defaultView};
g.be=function(a){ae();return Kc(a)};
g.ce=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
de=function(a){return(0,g.H)(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
g.he=function(a,b){g.Ba(a);ee();for(var c=b?fe:ge,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,q=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,k||(l=64));d.push(c[q],c[f],c[l],c[n])}return d.join("")};
je=function(a){var b=[];ie(a,function(a){b.push(a)});
return b};
ke=function(a){!g.wd||g.zc("10");var b=new window.Uint8Array(Math.ceil(3*a.length/4)),c=0;ie(a,function(a){b[c++]=a});
return b.subarray(0,c)};
ie=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=le[c];if(null!=e)return e;if(!Ma(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
ee();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
ee=function(){if(!ge){ge={};le={};fe={};for(var a=0;65>a;a++)ge[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),le[ge[a]]=a,fe[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(le["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
ne=function(a,b,c){this.o=null;this.D=this.F=this.g=this.A=this.B=0;this.C=!1;a&&me(this,a,b,c)};
pe=function(a,b,c){if(oe.length){var d=oe.pop();a&&me(d,a,b,c);return d}return new ne(a,b,c)};
me=function(a,b,c,d){b=b.constructor===window.Uint8Array?b:b.constructor===window.ArrayBuffer?new window.Uint8Array(b):b.constructor===Array?new window.Uint8Array(b):b.constructor===String?ke(b):new window.Uint8Array(0);a.o=b;a.B=g.r(c)?c:0;a.A=g.r(d)?a.B+d:a.o.length;a.g=a.B};
qe=function(a){var b=a.o;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=10;return d};
re=function(a,b,c){this.g=pe(a,b,c);this.o=this.A=-1;this.B=!1};
se=function(a){var b=a.g;if(b.g==b.A||a.getError())return!1;b=qe(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.B=!0,!1;a.A=b>>>3;a.o=c;return!0};
te=function(a){switch(a.o){case 0:if(0!=a.o)te(a);else{for(a=a.g;a.o[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.o?te(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.o)te(a);else{var b=qe(a.g);a=a.g;a.g+=b}break;case 5:5!=a.o?te(a):(a=a.g,a.g+=4);break;case 3:b=[a.A];do{if(!se(a)){a.B=!0;break}if(3==a.o)b.push(a.A);else if(4==a.o&&a.A!=b.pop()){a.B=!0;break}}while(0<b.length)}};
ue=function(a){var b=qe(a.g);a=a.g;var c=a.o,d=a.g;b=d+b;for(var e=[],f="";d<b;){var k=c[d++];if(128>k)e.push(k);else if(192>k)continue;else if(224>k){var l=c[d++];e.push((k&31)<<6|l&63)}else if(240>k){l=c[d++];var m=c[d++];e.push((k&15)<<12|(l&63)<<6|m&63)}else if(248>k){l=c[d++];m=c[d++];var n=c[d++];m=(k&7)<<18|(l&63)<<12|(m&63)<<6|n&63;m-=65536;e.push((m>>10&1023)+55296,(m&1023)+56320)}8192<=e.length&&(f+=String.fromCharCode.apply(null,e),e.length=0)}f+=String.fromCharCode.apply(null,e);a.g=d;
return f};
ve=function(a){var b=qe(a.g);a=a.g;if(0>b||a.g+b>a.o.length)a.C=!0,b=new window.Uint8Array(0);else{var c=a.o.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
we=function(){};
ze=function(a,b,c){a.g=null;b||(b=[]);a.F=void 0;a.B=-1;a.o=b;a:{if(a.o.length){b=a.o.length-1;var d=a.o[b];if(d&&"object"==typeof d&&!g.za(d)&&!(xe&&d instanceof window.Uint8Array)){a.C=b-a.B;a.A=d;break a}}a.C=Number.MAX_VALUE}a.D={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.C?(d+=a.B,a.o[d]=a.o[d]||ye):a.A[d]=a.A[d]||ye};
Ae=function(a,b){if(b<a.C){var c=b+a.B;var d=a.o[c];return d===ye?a.o[c]=[]:d}d=a.A[b];return d===ye?a.A[b]=[]:d};
Ce=function(a,b){if(b<a.C){var c=b+a.B;var d=a.o[c];return d===ye?a.o[c]=[]:d}d=a.A[b];return d===ye?a.A[b]=[]:d};
De=function(a){if(null==a||a instanceof window.Uint8Array)return a;if(g.u(a))return ke(a);xa(a);return null};
Ee=function(a,b,c){b<a.C?a.o[b+a.B]=c:a.A[b]=c};
Ge=function(a){if(a.g)for(var b in a.g){var c=a.g[b];if(g.za(c))for(var d=0;d<c.length;d++)c[d]&&Fe(c[d]);else c&&Fe(c)}};
Fe=function(a){Ge(a);return a.o};
He=function(a){var b;if(g.za(a)){for(var c=Array(a.length),d=0;d<a.length;d++)null!=(b=a[d])&&(c[d]="object"==typeof b?He(b):b);return c}if(xe&&a instanceof window.Uint8Array)return new window.Uint8Array(a);c={};for(d in a)null!=(b=a[d])&&(c[d]="object"==typeof b?He(b):b);return c};
Ie=function(a){for(var b=[],c=a=zd(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};
g.I=function(){this.ib=this.ib;this.Ya=this.Ya};
g.J=function(a,b){g.Je(a,g.A(g.Ke,b))};
g.Je=function(a,b){a.ib?g.r(void 0)?b.call(void 0):b():(a.Ya||(a.Ya=[]),a.Ya.push(g.r(void 0)?(0,g.z)(b,void 0):b))};
g.Ke=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Le=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Ba(d)?g.Le.apply(null,d):g.Ke(d)}};
g.Me=function(a,b){this.type=a;this.currentTarget=this.target=b;this.g=!1;this.Ju=!0};
Ne=function(a,b){g.Me.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.o=this.state=null;a&&this.init(a,b)};
g.Pe=function(a){return!(!a||!a[g.Oe])};
Re=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.Cj=e;this.key=++Qe;this.Sg=this.Vi=!1};
Se=function(a){a.Sg=!0;a.listener=null;a.g=null;a.src=null;a.Cj=null};
Te=function(a){this.src=a;this.listeners={};this.g=0};
Ve=function(a,b,c,d,e,f){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.g++);var l=Ue(b,c,e,f);-1<l?(a=b[l],d||(a.Vi=!1)):(a=new Re(c,a.src,k,!!e,f),a.Vi=d,b.push(a));return a};
We=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.xb(a.listeners[c],b);d&&(Se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d};
g.Xe=function(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Se(d[e]);delete a.listeners[c];a.g--}};
Ye=function(a,b,c,d,e){a=a.listeners[b.toString()];b=-1;a&&(b=Ue(a,c,d,e));return-1<b?a[b]:null};
Ue=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sg&&f.listener==b&&f.capture==!!c&&f.Cj==d)return e}return-1};
g.$e=function(a,b,c,d,e){if(d&&d.once)return Ze(a,b,c,d,e);if(g.za(b)){for(var f=0;f<b.length;f++)g.$e(a,b[f],c,d,e);return null}c=af(c);return g.Pe(a)?a.ba(b,c,g.Da(d)?!!d.capture:!!d,e):bf(a,b,c,!1,d,e)};
bf=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Da(e)?!!e.capture:!!e,l=g.cf(a);l||(a[df]=l=new Te(a));c=Ve(l,b,c,d,k,f);if(c.g)return c;d=ef();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)ff||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(gf(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");hf++;return c};
ef=function(){var a=jf,b=kf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
Ze=function(a,b,c,d,e){if(g.za(b)){for(var f=0;f<b.length;f++)Ze(a,b[f],c,d,e);return null}c=af(c);return g.Pe(a)?Ve(a.xd,String(b),c,!0,g.Da(d)?!!d.capture:!!d,e):bf(a,b,c,!0,d,e)};
g.lf=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)g.lf(a,b[f],c,d,e);else d=g.Da(d)?!!d.capture:!!d,c=af(c),g.Pe(a)?a.Ma(b,c,d,e):a&&(a=g.cf(a))&&(b=Ye(a,b,c,d,e))&&g.mf(b)};
g.mf=function(a){if(g.ta(a)||!a||a.Sg)return!1;var b=a.src;if(g.Pe(b))return We(b.xd,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(gf(c),d);hf--;(c=g.cf(b))?(We(c,a),0==c.g&&(c.src=null,b[df]=null)):Se(a);return!0};
gf=function(a){return a in nf?nf[a]:nf[a]="on"+a};
pf=function(a,b,c,d){var e=!0;if(a=g.cf(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Sg&&(f=of(f,d),e=e&&!1!==f)}return e};
of=function(a,b){var c=a.listener,d=a.Cj||a.src;a.Vi&&g.mf(a);return c.call(d,b)};
jf=function(a,b){if(a.Sg)return!0;if(!kf){var c=b||g.y("window.event"),d=new Ne(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var k=a.type,l=c.length-1;!d.g&&0<=l;l--)d.currentTarget=c[l],f=pf(c[l],k,!0,d),e=e&&f;for(l=0;!d.g&&l<c.length;l++)d.currentTarget=c[l],f=pf(c[l],k,!1,d),e=e&&f}return e}return of(a,new Ne(b,this))};
g.cf=function(a){a=a[df];return a instanceof Te?a:null};
af=function(a){if(g.Ca(a))return a;a[qf]||(a[qf]=function(b){return a.handleEvent(b)});
return a[qf]};
g.rf=function(){g.I.call(this);this.xd=new Te(this);this.ca=this;this.K=null};
sf=function(a,b,c,d){b=a.xd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Sg&&k.capture==c){var l=k.listener,m=k.Cj||k.src;k.Vi&&We(a.xd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Ju};
tf=function(a,b,c){this.C=c;this.A=a;this.B=b;this.o=0;this.g=null};
uf=function(a,b){a.B(b);a.o<a.C&&(a.o++,b.next=a.g,a.g=b)};
vf=function(a){return function(){return a}};
wf=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
xf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
yf=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
zf=function(a){g.w.setTimeout(function(){throw a;},0)};
Cf=function(a,b){var c=a;b&&(c=(0,g.z)(a,b));!g.Ca(g.w.setImmediate)||g.w.Window&&g.w.Window.prototype&&!Sb("Edge")&&g.w.Window.prototype.setImmediate==g.w.setImmediate?(Af||(Af=Bf()),Af(c)):g.w.setImmediate(c)};
Bf=function(){var a=g.w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Sb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.z)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!Sb("Trident")&&!Sb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.r(c.next)){c=c.next;var a=c.up;c.up=null;a()}};
return function(a){d.next={up:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.w.setTimeout(a,0)}};
Df=function(){this.o=this.g=null};
Ef=function(){this.next=this.scope=this.te=null};
g.Kf=function(a,b){Ff||Gf();Hf||(Ff(),Hf=!0);var c=If,d=Jf.get();d.set(a,b);c.o?c.o.next=d:c.g=d;c.o=d};
Gf=function(){if(-1!=String(g.w.Promise).indexOf("[native code]")){var a=g.w.Promise.resolve(void 0);Ff=function(){a.then(Lf)}}else Ff=function(){Cf(Lf)}};
Lf=function(){for(var a;a=If.remove();){try{a.te.call(a.scope)}catch(b){zf(b)}uf(Jf,a)}Hf=!1};
Mf=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
Nf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Pf=function(a,b){this.g=0;this.F=void 0;this.B=this.o=this.A=null;this.C=this.D=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){Of(c,2,a)},function(a){Of(c,3,a)})}catch(d){Of(this,3,d)}};
Qf=function(){this.next=this.context=this.o=this.B=this.g=null;this.A=!1};
Sf=function(a,b,c){var d=Rf.get();d.B=a;d.o=b;d.context=c;return d};
Tf=function(a){if(a instanceof g.Pf)return a;var b=new g.Pf(g.va);Of(b,2,a);return b};
Uf=function(a){return new g.Pf(function(b,c){c(a)})};
Wf=function(a,b,c){Vf(a,b,c,null)||g.Kf(g.A(b,a))};
Xf=function(a){return new g.Pf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Wf(e,b,c)})};
g.Yf=function(a){return new g.Pf(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Wf(m,g.A(f,l),k);
else b(e)})};
$f=function(a,b){var c=Sf(b,b,void 0);c.A=!0;Zf(a,c);return a};
g.bg=function(a,b){return ag(a,null,b,void 0)};
cg=function(a,b){if(0==a.g)if(a.A){var c=a.A;if(c.o){for(var d=0,e=null,f=null,k=c.o;k&&(k.A||(d++,k.g==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?cg(c,b):(f?(d=f,d.next==c.B&&(c.B=d),d.next=d.next.next):dg(c),eg(c,e,3,b)))}a.A=null}else Of(a,3,b)};
Zf=function(a,b){a.o||2!=a.g&&3!=a.g||fg(a);a.B?a.B.next=b:a.o=b;a.B=b};
ag=function(a,b,c,d){var e=Sf(null,null,null);e.g=new g.Pf(function(a,k){e.B=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){k(n)}}:a;
e.o=c?function(b){try{var e=c.call(d,b);!g.r(e)&&b instanceof gg?k(b):a(e)}catch(n){k(n)}}:k});
e.g.A=a;Zf(a,e);return e.g};
Of=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Vf(c,a.J,a.K,a)||(a.F=c,a.g=b,a.A=null,fg(a),3!=b||c instanceof gg||hg(a,c)))};
Vf=function(a,b,c,d){if(a instanceof g.Pf)return Zf(a,Sf(b||g.va,c||null,d)),!0;if(Nf(a))return a.then(b,c,d),!0;if(g.Da(a))try{var e=a.then;if(g.Ca(e))return ig(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
ig=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
fg=function(a){a.D||(a.D=!0,g.Kf(a.H,a))};
dg=function(a){var b=null;a.o&&(b=a.o,a.o=b.next,b.next=null);a.o||(a.B=null);return b};
eg=function(a,b,c,d){if(3==c&&b.o&&!b.A)for(;a&&a.C;a=a.A)a.C=!1;if(b.g)b.g.A=null,jg(b,c,d);else try{b.A?b.B.call(b.context):jg(b,c,d)}catch(e){kg.call(null,e)}uf(Rf,b)};
jg=function(a,b,c){2==b?a.B.call(a.context,c):a.o&&a.o.call(a.context,c)};
hg=function(a,b){a.C=!0;g.Kf(function(){a.C&&kg.call(null,b)})};
gg=function(a){Ka.call(this,a)};
g.lg=function(a,b){g.rf.call(this);this.o=a||1;this.g=b||g.w;this.A=(0,g.z)(this.jy,this);this.B=(0,g.F)()};
g.mg=function(a,b,c){if(g.Ca(a))c&&(a=(0,g.z)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.w.setTimeout(a,b||0)};
ng=function(a,b){var c=null;return g.bg(new g.Pf(function(d,e){c=g.mg(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(a){g.w.clearTimeout(c);
throw a;})};
og=function(){return Math.round((0,g.F)()/1E3)};
pg=function(a){var b=window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;return null!=b?b:null!=a?a:og()};
qg=function(){this.o=-1};
rg=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.tg=function(a){try{return g.w.JSON.parse(a)}catch(d){var b=d}a=String(a);if(rg(a))try{var c=eval("("+a+")");b&&sg("Invalid JSON: "+a,b);return c}catch(d){}throw Error("Invalid JSON string: "+a);};
g.wg=function(a){var b=[];ug(new vg,a,b);return b.join("")};
vg=function(){};
ug=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ug(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xg(d,c),c.push(":"),ug(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xg(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
xg=function(a,b){b.push('"',a.replace(yg,function(a){var b=zg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zg[a]=b);return b}),'"')};
Ag=function(a){this.g=a||{cookie:""}};
Bg=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Cg=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Eg=function(a){return a.match(Dg)};
g.Fg=function(a){return a?(0,window.decodeURI)(a):a};
g.Gg=function(a){return g.Fg(g.Eg(a)[3]||null)};
g.Hg=function(a){return Number(g.Eg(a)[4]||null)||null};
Ig=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var k=c[d].substring(0,e);f=c[d].substring(e+1)}else k=c[d];b(k,f?Na(f):"")}};
Jg=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Kg=function(a,b,c){if(g.za(b))for(var d=0;d<b.length;d++)Kg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+(0,window.encodeURIComponent)(String(b))))};
Lg=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Kg(a[d],a[d+1],c);return c.join("&")};
g.Mg=function(a){var b=[],c;for(c in a)Kg(c,a[c],b);return b.join("&")};
Ng=function(a,b){var c=2==arguments.length?Lg(arguments[1],0):Lg(arguments,1);return Jg(a,c)};
g.Rg=function(a,b){var c=g.Mg(b);return Jg(a,c)};
Sg=function(a,b,c){c=null!=c?"="+(0,window.encodeURIComponent)(String(c)):"";return Jg(a,b+c)};
Tg=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Wg=function(a,b){for(var c=a.search(Ug),d=0,e,f=[];0<=(e=Tg(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Vg,"$1")};
Xg=function(){this.g={};return this};
Yg=function(a,b){a.g.eb=hc(a.g,"eb",0)|b};
g.Zg=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
$g=function(a,b,c){b instanceof g.ed?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,g.ta(c)&&(a.top+=c,a.bottom+=c));return a};
g.ch=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.dh=function(a){return new g.Zg(a.top,a.left+a.width,a.top+a.height,a.left)};
g.eh=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.fh=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.gh=function(a){return new g.hd(a.width,a.height)};
g.hh=function(a){return new g.ed(a.left,a.top)};
ih=function(){this.g={};this.o=0};
jh=function(a,b){this.C=a;this.A=!0;this.g=b};
kh=function(a,b){jh.call(this,String(a),b);this.B=a;this.g=!!b};
lh=function(a,b){jh.call(this,a,b)};
mh=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new lh("",new g.ch(c,b,Number(a[3])-c,Number(a[2])-b))}return new lh("",new g.ch(0,0,0,0))};
oh=function(){nh||(nh=new ih);return nh};
ph=function(a,b){a.g[b.C]=b};
g.rh=function(a,b,c){if(g.u(b))(b=qh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=qh(c,d);f&&(c.style[f]=e)}};
qh=function(a,b){var c=sh[b];if(!c){var d=gb(b);c=d;void 0===a.style[d]&&(d=(g.yd?"Webkit":g.th?"Moz":g.wd?"ms":g.uh?"O":null)+ib(d),void 0!==a.style[d]&&(c=d));sh[b]=c}return c};
vh=function(a,b){var c=a.style[gb(b)];return"undefined"!==typeof c?c:a.style[qh(a,b)]||""};
g.wh=function(a,b){var c=g.kd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
g.xh=function(a,b){return g.wh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.zh=function(a,b,c){if(b instanceof g.ed){var d=b.x;b=b.y}else d=b,b=c;a.style.left=g.yh(d,!1);a.style.top=g.yh(b,!1)};
Ah=function(a){return new g.ed(a.offsetLeft,a.offsetTop)};
Bh=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}g.wd&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
g.Ch=function(a){if(g.wd&&!g.Bc(8))return a.offsetParent;var b=g.kd(a),c=g.xh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=g.xh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.Eh=function(a){for(var b=new g.Zg(0,window.Infinity,window.Infinity,0),c=g.md(a),d=c.g.body,e=c.g.documentElement,f=vd(c.g);a=g.Ch(a);)if(!(g.wd&&0==a.clientWidth||g.yd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=g.xh(a,"overflow")){var k=g.Dh(a),l=new g.ed(a.clientLeft,a.clientTop);k.x+=l.x;k.y+=l.y;b.top=Math.max(b.top,k.y);b.right=Math.min(b.right,k.x+a.clientWidth);b.bottom=Math.min(b.bottom,k.y+a.clientHeight);b.left=Math.max(b.left,k.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,
d);b.top=Math.max(b.top,f);c=g.ud(g.$d(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
g.Dh=function(a){var b=g.kd(a),c=new g.ed(0,0);var d=b?g.kd(b):window.document;d=!g.wd||g.Bc(9)||g.td(g.md(d).g)?d.documentElement:d.body;if(a==d)return c;a=Bh(a);b=g.xd(g.md(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.Gh=function(a,b){var c=new g.ed(0,0),d=zd(g.kd(a));if(!uc(d,"parent"))return c;var e=a;do{var f=d==b?g.Dh(e):Fh(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.Ih=function(a,b){var c=g.Hh(a),d=g.Hh(b);return new g.ed(c.x-d.x,c.y-d.y)};
Fh=function(a){a=Bh(a);return new g.ed(a.left,a.top)};
g.Hh=function(a){if(1==a.nodeType)return Fh(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.ed(a.clientX,a.clientY)};
g.Jh=function(a,b,c){if(b instanceof g.hd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=g.yh(b,!0);a.style.height=g.yh(c,!0)};
g.yh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Lh=function(a){var b=Kh;if("none"!=g.xh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Kh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.yd&&!b&&!c;return g.r(b)&&!d||!a.getBoundingClientRect?new g.hd(b,c):(a=Bh(a),new g.hd(a.right-a.left,a.bottom-a.top))};
g.Mh=function(a,b){a.style.display=b?"":"none"};
Nh=function(a){var b=new g.ch(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new g.ch(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++)if(!g.fh(b,a[d]))return c;return b};
Oh=function(a,b){var c=a.getBoundingClientRect(),d=g.Gh(a,b);return new g.ch(Math.round(d.x),Math.round(d.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))};
Ph=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),k=Math.min(b.top+b.height,c.top+c.height);if(f<=k){d=new g.ch(d,f,e-d,k-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;ph(a,new jh("vp",d));d&&0<d?(e=g.dh(b),f=g.dh(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;ph(a,new kh(512,e));d&&0<d?(e=g.dh(b),f=g.dh(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;ph(a,new kh(1024,
e));d&&0<d?(e=g.dh(b),f=g.dh(c),e=e.left>=f.left&&e.left<f.right):e=!1;ph(a,new kh(2048,e));d&&0<d?(b=g.dh(b),c=g.dh(c),c=b.right<=c.right&&b.right>c.left):c=!1;ph(a,new kh(4096,c))}};
Qh=function(a,b){var c=0;g.ac(zd(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){var e=d;d=oh();d.g={};var f=new kh(32,!0);f.A=!1;ph(d,f);f=zd().document;f=f.webkitVisibilityState||f.mozVisibilityState||f.visibilityState||f.msVisibilityState||"";ph(d,new kh(64,"hidden"!=f.toLowerCase().substring(f.length-6)?!0:!1));try{var k=zd().top;try{var l=!!k.location.href||""===k.location.href}catch(t){l=!1}if(l){var m=Ie(e);var n=m&&0!=m.length?"1":"0"}else n="2"}catch(t){n="2"}ph(d,new kh(256,
"2"==n));ph(d,new kh(128,"1"==n));m=l=zd().top;"2"==n&&(m=zd());k=Oh(e,m);ph(d,new lh("er",k));try{var q=m.document&&!m.document.body?null:g.ud(m||window)}catch(t){q=null}q?(m=g.xd(g.md(m.document).g),ph(d,new kh(16384,!!m)),q=m?new g.ch(m.x,m.y,q.width,q.height):null):q=null;ph(d,new lh("vi",q));if(q&&"1"==n){n=Ie(e);e=[];for(m=0;m<n.length;m++)(f=Oh(n[m],l))&&e.push(f);e.push(q);q=Nh(e)}Ph(d,k,q);d.o&&(n=og()-d.o,ph(d,new jh("ts",n)));d.o=og()}else d=oh(),d.g={},d.o=og(),ph(d,new kh(32,!1));this.A=
d;this.g=new Xg;this.g.set("ve",4);c&&Yg(this.g,1);g.ac(zd(),"ima","video","client","crossdomainTag")&&Yg(this.g,4);g.ac(zd(),"ima","video","client","sdkTag")&&Yg(this.g,8);g.ac(zd(),"ima","video","client","jsTag")&&Yg(this.g,2);b&&hc(b,"fullscreen",!1)&&Yg(this.g,16);this.o=d=null;if(c&&(c=g.ac(zd(),"ima","video","client"),c.getEData)){this.o=c.getEData();if(c=g.ac(zd(),"ima","video","client","getLastSnapshotFromTop"))if(n=c())this.o.extendWithDataFromTopIframe(n.tagstamp,n.playstamp,n.lactstamp),
c=this.A,d=n.er,n=n.vi,d&&n&&(d=mh(d).getValue(),n=mh(n).getValue(),e=null,hc(c.g,"er",null)&&(e=hc(c.g,"er",null).getValue(),e.top+=d.top,e.left+=d.left,ph(c,new lh("er",e))),hc(c.g,"vi",null)&&(q=hc(c.g,"vi",null).getValue(),q.top+=d.top,q.left+=d.left,l=[],l.push(q),l.push(d),l.push(n),d=Nh(l),Ph(c,e,d),ph(c,new lh("vi",n))));a:{if(this.o){if(this.o.getTagLoadTimestamp){d=this.o.getTagLoadTimestamp();break a}if(this.o.getTimeSinceTagLoadSeconds){d=this.o.getTimeSinceTagLoadSeconds();break a}}d=
null}}this.g.set("td",og()-pg(d))};
Rh=function(a,b){try{var c=new Qh(a,b),d=[],e=Number(c.g.get("eb"));c.g.remove("eb");var f,k=c.g,l=[],m;for(m in k.g)l.push(m+k.g[m]);(f=l.join("_"))&&d.push(f);if(c.o){var n=c.o.serialize();n&&d.push(n)}var q,t=c.A;f=e;k=[];f||(f=0);for(var v in t.g){var D=t.g[v];if(D instanceof kh)D.getValue()&&(f|=D.B);else{var C,B=t.g[v];(C=B.A?B.o():"")&&k.push(v+C)}}k.push("eb"+String(f));(q=k.join("_"))&&d.push(q);c.g.set("eb",e);return d.join("_")}catch(U){return"tle;"+Wa(U.name,12)+";"+Wa(U.message,40)}};
g.Sh=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?(0,window.parseInt)(a[1],10):0};
Th=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))};
Uh=function(a,b,c){this.type=a;this.label=b;this.A=c};
Vh=function(a){new Uh(a,1,void 0)};
Wh=function(a){new Uh(a,2,void 0)};
Xh=function(a,b){new Uh(a,3,b)};
Yh=function(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?g.r(void 0)?Yh(a,b,void 0,d):a:c};
Zh=function(a){try{return!!a&&null!=a.location.href&&uc(a,"foo")}catch(b){return!1}};
$h=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
bi=function(){var a=ai;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
ei=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,ci?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)};
fi=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,ci?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};
gi=function(a){a=a||g.w;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null};
hi=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);fi(d,"load",e);fi(d,"error",e)};
ei(d,"load",e);ei(d,"error",e)}d.src=b;a.google_image_requests.push(d)};
li=function(){if(ii&&!Zh(ji)){var a="."+ki.domain;try{for(;2<a.split(".").length&&!Zh(ji);)ki.domain=a=a.substr(a.indexOf(".")+1),ji=window.parent}catch(b){}Zh(ji)||(ji=window)}return ji};
mi=function(a,b,c){b=b||K;a&&null!==b&&b!==b.top&&(b=b.top);try{return b.document&&!b.document.body?new g.hd(-1,-1):(void 0===c?0:c)?(new g.hd(b.innerWidth,b.innerHeight)).round():g.ud(b||window).round()}catch(d){return new g.hd(-12245933,-12245933)}};
ni=function(){this.g=!0};
oi=function(){this.A=this.B=this.g=this.o=this.C=0};
pi=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
qi=function(a,b){this.g=a;this.o=b};
ri=function(a,b,c){this.url=a;this.Zq=!!c;this.depth=g.ta(void 0)?void 0:null};
vi=function(a){a=a?a:ui();for(var b=new ri(g.w.location.href,g.w,!1),c=a.length-1,d=c;0<=d;--d){var e=a[d];if(e.url&&!e.Zq){b=e;break}}d=null;e=a.length&&a[c].url;0!=b.depth&&e&&(d=a[c]);return new qi(b,d)};
ui=function(){var a=g.w,b=[],c=null;do{var d=a;if(Zh(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new ri(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=g.w;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.Zq=!0);return b};
wi=function(a,b,c,d,e){this.D=c||4E3;this.A=a||"&";this.F=b||",$";this.B=g.r(d)?d:"trn";this.J=e||null;this.C=!1;this.o={};this.H=0;this.g=[]};
xi=function(a,b){var c={};c[a]=b;return[c]};
zi=function(a,b,c,d,e){var f=[];$h(a,function(a,l){var k=yi(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
yi=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(yi(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(zi(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
Ai=function(a,b,c,d){a.g.push(b);a.o[b]=xi(c,d)};
Ci=function(a,b,c,d){b=b+"//"+c+d;var e=Bi(a)-d.length-0;if(0>e)return"";a.g.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.g.length;f++)for(var k=a.g[f],l=a.o[k],m=0;m<l.length;m++){if(!e){d=null==d?k:d;break}var n=zi(l[m],a.A,a.F);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.A;break}else a.C&&(c=e,n[c-1]==a.A&&--c,b+=n.substr(0,c),c=a.A,e=0);d=null==d?k:d}}f="";a.B&&null!=d&&(f=c+a.B+"="+(a.J||d));return b+f+""};
Bi=function(a){if(!a.B)return a.D;var b=1,c;for(c in a.o)b=c.length>b?c.length:b;return a.D-a.B.length-b-a.A.length-1};
Di=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof wi)var e=c;else e=new wi,$h(c,function(a,b){var c=e,d=c.H++,f=xi(b,a);c.g.push(d);c.o[d]=f});
var f=Ci(e,a.B,a.o,a.A+b+"&");f&&hi(g.w,f)}catch(k){}};
g.Ei=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
Gi=function(a,b){var c=Fi();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
Hi=function(a,b){this.events=[];this.o=b||g.w;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.o||g.w).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(k){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.g=(this.g=null!=c?c:Math.random()<a)||f;c=this.o.performance;this.A=!!(c&&c.mark&&c.clearMarks&&f)};
Fi=function(){var a=g.w.performance;return a&&a.now?a.now():(0,g.F)()};
Ii=function(a,b,c,d){this.B=a;this.D=b;this.A=c;this.C=this.o;this.g=void 0===d?null:d};
Ki=function(a,b,c,d,e){try{if(a.g&&a.g.g){var f=a.g.start(b.toString(),3);var k=c();a.g.end(f)}else k=c()}catch(m){c=a.A;try{a.g&&f&&a.g.Gp(f);var l=Ji(m);c=(e||a.C).call(a,b,l,void 0,d)}catch(n){a.o(217,n)}if(!c)throw m;}return k};
Mi=function(a,b,c,d){var e=Li;return function(f){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];return Ki(e,a,function(){return b.apply(c,k)},d,void 0)}};
Ji=function(a){return new Ni(Oi(a),a.fileName,a.lineNumber)};
Oi=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Ni=function(a,b,c){pi.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
Qi=function(a,b){return Ki(Li,a,b,void 0,Pi)};
Ri=function(a,b,c,d){return Mi(a,b,c,d)};
Si=function(a,b){Li.o(a,b,void 0,void 0)};
Ti=function(a,b,c,d){c=Mi(d,c,void 0,void 0);ei(a,b,c,{capture:!1});return c};
Ui=function(){return{visible:1,hidden:2,prerender:3,preview:4}[ki.webkitVisibilityState||ki.mozVisibilityState||ki.visibilityState||""]||0};
Xi=function(){var a=K&&K.document;Vi.e=-1;Vi.i=6;Vi.n=7;Vi.t=8;if(!Wi){var b=[];$h(Vi,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];Wi=d&&function(b,c){return d.call(a,b,c)}}return Wi};
Yi=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
Zi=function(a){return(a=a.exec(g.Rb))?a[1]:""};
g.aj=function(a){return 0<=g.db($i,a)};
ej=function(){return g.wd&&9>yc||g.th||bj&&g.cj&&g.aj("6.0.1")?!1:0<=g.db(dj,"11")};
hj=function(a){a=void 0===a?!1:a;var b=fj&&0<=g.db(gj,9),c=g.cj&&g.zc(601);return!a&&(b||c)};
nj=function(a){var b=0<=ij?jj()-ij:-1,c=kj?jj()-lj:-1,d=0<=mj?jj()-mj:-1;if(79463068==a)return 500;if(947190538==a){a=[4E3];var e=[250,1E3]}else if(947190541==a)a=[4E3],e=[100,1E3];else{if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];e=[250,500,1E3]}var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var k=e[b];break}void 0===k&&(k=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:k};
jj=function(){return(new Date).getTime()-oj};
pj=function(){var a=g.Cd("DIV");a.style.cssText="position:relative;left:0px;top:0px;width:0;height:0;";return a};
sj=function(a){return qj(a,function(a,c){return!(!uc(c,"style")||!c.style||"none"!==vh(c,"display"))},function(a){return a},!1)?!0:rj(a)};
rj=function(a){var b=!g.wd||g.zc(8);return qj(a,function(a,d){var c=uc(d,"style")&&d.style&&vh(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(a){return a.hidden||a.visible},{hidden:!1,
visible:!1}).hidden};
qj=function(a,b,c,d){if(!a)return d;d=tj(a,b,c,d);if(!d.done)try{var e=g.kd(a),f=e&&zd(e);return qj(f&&f.frameElement,b,c,d.value)}catch(k){}return d.value};
tj=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&uc(a,"parentElement")?tj(g.Qd(a),b,c,d):{done:e,value:d}};
uj=function(a){return new g.Zg(a.top,a.right,a.bottom,a.left)};
vj=function(a){return null!=a&&0<=a&&1>=a};
yj=function(){var a=this.g=new oi,b=(0,g.F)();a.C=b;a=zd();wj(this,a,window.document);b=xj();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)wj(this,c,c.document);wj(this,a.top,a.top.document)}}catch(d){}};
xj=function(){var a=window.document.documentElement;try{if(!Zh(zd().top))return"2";var b=[],c=zd(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
wj=function(a,b,c){Ti(c,"mousedown",function(){var b=a.g;1E5<b.o||(b.o+=1)},301);
Ti(b,"scroll",function(){var b=a.g;1E5<b.g||(b.g+=1)},302);
Ti(c,"touchmove",function(){var b=a.g;1E5<b.g||(b.g+=1)},303);
Ti(c,"mousemove",function(){var b=a.g;1E5<b.B||(b.B+=1)},304);
Ti(c,"keydown",function(){var b=a.g;1E5<b.A||(b.A+=1)},305)};
zj=function(){this.g=0;this.B=!1;this.o=-1;this.C=0;this.od=!1};
Aj=function(){zj.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.A=-1};
Bj=function(a){return vj(a.volume)&&.1<=a.volume};
Cj=function(){var a={};this.A=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.cm=[128,128],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.o={};for(var b in this.A)0<this.A[b][1]&&(this.o[b]=0);this.B=0};
Ej=function(a){return Dj(a,g.$b(a.A))};
Dj=function(a,b){var c=0,d;for(d in a.o)g.rb(b,d)&&1==a.o[d]&&(c+=a.A[d][1],a.o[d]=2);return c};
Fj=function(a){var b=0,c;for(c in a.o){var d=a.o[c];if(1==d||2==d)b+=a.A[c][1]}return b};
Gj=function(){this.g=[]};
Hj=function(a){this.g=this.o=0;this.A=a};
Ij=function(){this.ib=[0,0,0,0,0];this.A=[0,0,0,0,0];this.ha=[0,0,0,0,0];this.N=this.pa=0;this.Ya=this.C=-1;this.Ka=1E3};
Jj=function(a,b,c){for(;0<=b&&4>=b;b++)a[b]+=c};
Kj=function(a){var b=-1;1<=a?b=0:.75<=a?b=1:.5<=a?b=2:.3<=a?b=3:0<a&&(b=4);return b};
Nj=function(){Ij.call(this);this.Aa=this.V=this.Z=this.aa=this.Y=this.o=0;this.D=-1;this.F=this.K=this.J=this.H=this.ca=this.wa=this.T=0;this.da=[0,0,0,0,0];this.B=this.g=-1;this.U=this.ka=0;this.Ka=2E3;this.xa=new Hj(32);this.Ja=new Hj(32);this.Ha=new Hj(32)};
Oj=function(a,b,c){var d=a.Aa;kj||c||-1==a.D||(d+=b-a.D);return d};
Pj=function(a,b){this.A=null;this.F=a;this.J=b||1;this.o="u"};
Qj=function(a,b){var c=b.right-b.left,d=b.bottom-b.top,e=Math.floor(c/2),f=Math.floor(d/2);switch(a.J){case 4:return a.F?(e=Math.floor(.3*c),f=Math.floor(.3*d),[new g.ed(e,f),new g.ed(c-e,f),new g.ed(e,d-f),new g.ed(c-e,d-f)]):[new g.ed(e,0),new g.ed(0,f),new g.ed(e,d-1),new g.ed(c-1,f)];case 3:return[new g.ed(c-1,0),new g.ed(e,f),new g.ed(0,d-1)];default:return[new g.ed(e,f)]}};
Rj=function(a,b){try{var c=b||a.A.getBoundingClientRect()}catch(e){c=new g.Zg(0,0,0,0)}var d=Qj(a,c);(0,g.G)(d,function(a){a.x+=c.left;a.y+=c.top});
return d};
Sj=function(a,b){Pj.call(this,a,b);this.g=[];this.H=!1;this.B=-1;this.C=this.D=0};
Tj=function(a,b,c){this.snapshot=a;this.o=b;this.g=c};
Vj=function(a){if(a.A&&a.H){var b=Rj(a);(0,g.G)(b,function(a,b){this.g[b]&&Uj(this.g[b],a)},a)}};
Wj=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[];a.o="d"};
ck=function(a){var b=(0,g.F)(),c=a.D?b-a.D:0,d=-1,e=(0,g.H)(a.g,function(a){return Xj(a,b)});
4==a.g.length?d=a.F?Yj(e):Zj(e):3==a.g.length?d=ak(e):1==a.g.length&&(d=[-1,0,1,2,3,5][Xj(a.g[0],b)+1]);a.C=d==a.B?a.C+c:0;c=new Tj(d,a.B,c);a.B=d;a.D=b;bk(a,d);Vj(a);return c};
ek=function(a){var b=Ob(g.Wb(dk));(0,g.G)(a,function(a){0<=a&&++b[a]});
return b};
Zj=function(a){a=ek(a);return 4==a[4]?6:3<=a[4]?5:0<a[4]?4:4==a[2]?2:4==a[1]?1:4==a[0]?0:3};
ak=function(a){var b=ek(a);return 4==a[0]&&4==a[2]?6:4==a[1]?5:0<b[4]?4:3==b[2]?2:3==b[1]?1:3==b[0]?0:3};
Yj=function(a){a=ek(a);return 3<=a[4]?5:2==a[4]?8:0<a[4]?7:4==a[2]?2:4==a[1]?1:4==a[0]?0:3};
bk=function(a,b){if(0==b&&fk(a))a.o="n";else switch(b){case -1:a.o="d";break;case 0:a.o="l";break;case 1:a.o="f";break;case 2:a.o="c";break;case 3:case 4:case 5:case 6:a.o="r"}};
fk=function(a){return"n"==a.o?!0:"l"==a.o&&3E3<=a.C};
mk=function(a,b,c,d){this.g=null;this.D=a;this.za="e"==a?String(c)+"~"+String(d):"";this.o=[];this.A=-1;this.C=0;this.B=Ob(g.Wb(gk));this.K=Ob(g.Wb(dk));"e"==this.D&&(hk[this.za]=(0,g.z)(this.J,this));g.wd?(a=b.createElement("div"),a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="'+ik(this,!0)+'"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>',
a=a.firstChild,a.id=String(Math.random())):a=jk(this,b);a.width=1;a.height=1;a.style.zIndex=-999999;this.g=a};
jk=function(a,b){function c(a,c,d){var e=b.createElement("param");e.name=c;e.value=d;a.appendChild(e)}
var d=ik(a),e=b.createElement("object");e.type="application/x-shockwave-flash";e.data=d;c(e,"movie",d);c(e,"allowscriptaccess","always");c(e,"wmode","opaque");e.style.visibility="hidden";e.style.opacity=0;return e};
ik=function(a,b){var c=Ng("//pagead2.googlesyndication.com/osd/hbe.swf","id",a.za);b&&(c=Ng(c,"delay","1"));return c};
Uj=function(a,b){a.g&&!fd(b,Ah(a.g))&&g.zh(a.g,b)};
Xj=function(a,b){if("e"==a.D){var c=null;try{c=a.g.it()}catch(f){}null===c?(c=0,0<a.A&&(c=2)):c=c?3:4;++a.K[c+1];a.A=c}else{var d=Number(b);c=null;try{c=a.g.fc()}catch(f){}var e=c;nk(a,e,d);c=a.o[a.o.length-1];if(null===e){if(e=d=0,0<a.A||g.ta(c.Ak))e=d=2}else null===c.Ak||c.timeMs>=d?(d=10<=e?4:0,e=0):e>c.Ak?(c=(e-c.Ak)/(d-c.timeMs)*1E3,d=10<=c?4:3,c=0==c?1:1>c?3:4>c?4:23>c?6:26>c?8:9,6==a.C&&6==c&&(c=7),e=c):e=d=1;6==a.C&&(--a.B[6],4==e||8==e?++a.B[5]:++a.B[7]);++a.B[e];a.A=d;a.C=e}return a.A};
nk=function(a,b,c){var d=c-1E3,e=a.o.length;(0,g.G)(a.o,function(a,b){a.timeMs<=d&&(e=Math.min(e,b+1))});
var f=a.o.length-e;0<f&&a.o.splice(e,f);a.o.unshift({Ak:b,timeMs:c})};
ok=function(a,b){Pj.call(this,a,b);this.g=[];this.D=!1;this.C=0;this.B=-1};
rk=function(a,b){var c=b.getBoundingClientRect();var d="DIV"==b.tagName||"INS"==b.tagName,e=g.kd(b),f=!0,k=a.g;if(d){var l=pj();c=Qj(a,c);Jd(b,l,0);(0,g.G)(c,function(a){var b=new pk(e);k.push(b);var c;if(c=f)if(b.g){b.g.style.position="absolute";qk(b,a);a=!0;try{l.appendChild(b.g)}catch(t){a=!1}c=a}else c=!1;f=c})}else c=Rj(a,c),(0,g.G)(c,function(a){var c=new pk(e);
k.push(c);var d;if(d=f)if(c.g&&b.parentNode){c.g.style.position="fixed";qk(c,a);a=!0;try{g.Id(c.g,b)}catch(t){a=!1}d=a}else d=!1;f=d});
f?(a.A=b,a.D=!d):((0,g.G)(k,function(a){a.remove()}),a.g=[]);
return f};
sk=function(a){if(a.A&&a.D){var b=Rj(a);(0,g.G)(b,function(a,b){this.g[b]&&qk(this.g[b],a)},a)}};
tk=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[]};
yk=function(a){var b=(0,g.F)(),c=a.C?b-a.C:0,d=kb(a.g,function(a){return a.isVisible(b)});
d=4==a.g.length?a.F?uk[d]:vk[d]:3==a.g.length?wk[d]:1==a.g.length?xk[d]:-1;c=new Tj(d,a.B,c);a.B=d;a.C=b;sk(a);return c};
pk=function(a){this.g=null;this.A=this.o=0;zk(this,a)};
zk=function(a,b){var c=b.createElement("iframe");c.srcdoc="";c.frameBorder=0;c.style.width="1px";c.style.height="1px";c.style.opacity="0";c.style.zIndex=-999999;a.g=c;var d=Mi(245,a.B,a,void 0);c.addEventListener("load",Ri(244,function(){c.contentWindow.requestAnimationFrame(d)}))};
qk=function(a,b){a.g&&!fd(b,Ah(a.g))&&g.zh(a.g,b)};
Ak=function(){};
Bk=function(){this.F=!1;this.J=void 0;this.o=!Zh(K.top);var a=ui();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.Gg(a[a.length-1].url)||"":"";this.A=this.H=this.D=this.g=null;this.N=0;this.B=!1;this.C=null;this.K=0;this.Za="geo";this.gq=new ni};
Dk=function(a,b,c){this.position=Ck.clone();this.Rb=0;this.Tm=this.uj();this.Qm=-2;this.CH=(0,g.F)();this.jv=-1;this.bf=b;this.Jf=-1!=b;this.Kk=null;this.opacity=-1;this.Fu=c;this.no=this.Um=g.va;this.Td=this.element=a;this.lg=this.Vb=null;this.di=1;this.so=this.af=this.pj=!1;this.Il=1;this.oi=!0;this.Dd=!1;this.wx=Bk.getInstance().N++;this.domain=null;this.Nm=0;this.Bb=this.Sl();this.hv=-1;this.Lk=new g.Zg(0,0,0,0);this.gq=new ni};
Ek=function(a,b){return null===a||null===b?Ck.clone():new g.Zg(Math.max(a.top,b.top),Math.min(a.right,b.right),Math.min(a.bottom,b.bottom),Math.max(a.left,b.left))};
Fk=function(a,b,c,d,e){if(a.Jf){var f=K.innerWidth,k=K.innerHeight,l=new g.Zg(Math.round(K.mozInnerScreenY),Math.round(K.mozInnerScreenX+f),Math.round(K.mozInnerScreenY+k),Math.round(K.mozInnerScreenX));c=new g.Zg(K.screenY+d,K.screenX+c.width,K.screenY+c.height,K.screenX);e||(d=new g.Zg(l.top-c.top,l.right-c.left,l.bottom-c.top,l.left-c.left),d.top>a.position.top?a.position=d:(a.position.right=a.position.left+f,a.position.bottom=a.position.top+k),a.Rb=f*k);a.he(l,c,b,e,!0,!0)}};
Ik=function(a,b,c){if(a.Jf){var d=Xi();if(d){c||Gk(a,K,!0);if(a.od()||a.so){var e=Hk(a,d);d=!0}else{e=Math.floor((a.position.left+a.position.right)/2);var f=Math.floor((a.position.top+a.position.bottom)/2),k=g.xd(window.document);e=d(e-k.x,f-k.y)?.5:0;d=!1}a.he(a.position,e,b,c,!0,d)}}};
Jk=function(a,b,c){if(c(b))return b;for(;;){var d=Math.floor((a+b)/2);if(d==a||d==b)return a;c(d)?a=d:b=d}};
Hk=function(a,b){var c=g.xd(window.document),d=a.Il,e=Math.floor(a.position.left-c.x)+1,f=Math.floor(a.position.top-c.y)+1,k=Math.floor(a.position.right-c.x)-d,l=Math.floor(a.position.bottom-c.y)-d;c=(l-f)*(k-e);if(f>l||e>k)return 0;d=!!b(e,f);var m=!!b(k,l);if(d&&m)return 1;var n=!!b(k,f),q=!!b(e,l);if(d)l=Jk(f,l,function(a){return!!b(e,a)}),k=Jk(e,k,function(a){return!!b(a,f)});
else if(n)l=Jk(f,l,function(a){return!!b(k,a)}),e=Jk(k,e,function(a){return!!b(a,f)});
else if(q)f=Jk(l,f,function(a){return!!b(e,a)}),k=Jk(e,k,function(a){return!!b(a,l)});
else if(m)f=Jk(l,f,function(a){return!!b(k,a)}),e=Jk(k,e,function(a){return!!b(a,l)});
else{var t=Math.floor((e+k)/2),v=Math.floor((f+l)/2);if(!b(t,v))return 0;f=Jk(v,f,function(a){return!!b(t,a)});
l=Jk(v,l,function(a){return!!b(t,a)});
e=Jk(t,e,function(a){return!!b(a,v)});
k=Jk(t,k,function(a){return!!b(a,v)})}return(l-f)*(k-e)/c};
Kk=function(a,b,c,d,e){a.Jf&&(d||Gk(a,K,e),a.he(a.position,c,b,d,!1,!0))};
Lk=function(a,b,c){if(a.Jf){var d=c?a.Bb.g:a.Nm,e;if(e=a.Lk){e=a.Lk;var f=new g.Zg(0,0,0,0);e=!(e==f||e&&f&&e.top==f.top&&e.right==f.right&&e.bottom==f.bottom&&e.left==f.left)}e&&(d=$g(a.Lk.clone(),a.position.left,a.position.top));a.he(a.position,d,b,c,!0,!0)}};
Mk=function(a,b){a.Za=b.create(K,a.gq,function(){return a.no(a)});
a.Td||Si(300,Error("Could not observe; element does not exist."))};
Nk=function(a,b,c){if(a.Jf&&a.Za){var d=li(),e=Bk.getInstance();Gk(a,d,e.o);d=a.Za.o();e=d.o()||d.A();a.he(a.position,d.g(),b,c,!0,e)}};
Gk=function(a,b,c,d){if(d)a.position=d;else{b=c?b:b.top;try{var e=Ck.clone(),f=new g.ed(0,0);if(a.Td){var k=1==a.Fu;!c&&k&&sj(a.Td)||(e=a.Td.getBoundingClientRect());f=g.Gh(a.Td,b)}c=f;var l=c.x,m=c.y;a.position=new g.Zg(Math.round(m),Math.round(l+(e.right-e.left)),Math.round(m+(e.bottom-e.top)),Math.round(l))}catch(n){a.position=Ck.clone()}}a.Rb=(a.position.bottom-a.position.top)*(a.position.right-a.position.left)};
Ok=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
Pk=function(a){a.Za||a.Vb&&Wj(a.Vb)};
Tk=function(a,b){var c=!1,d=a.Td;b.document&&b.document.body&&12==a.Fu&&(d=b.document.body);if(null===d)return!1;Qi(152,function(){var e=new b.IntersectionObserver(function(c){try{Qk(b,c,a)}catch(k){try{e.unobserve(d),Si("osd_adblock::nioc",k)}catch(l){}}},Rk);
e.observe(d);Sk(d);c=!0});
return c};
Sk=function(a){if(a&&(a=a.style)){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
Uk=function(a,b){var c=!1;Qi(151,function(){var d=gi(b).KL(function(c){try{Qk(b,c,a)}catch(f){try{d(),Si("osd_adblock::aioc",f)}catch(k){}}});
c=!0});
return c};
Qk=function(a,b,c){if(!b||!b.length||0>=b.length)b=null;else{for(var d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);b=d}if(d=b)b=uj(d.boundingClientRect),e=uj(d.intersectionRect),c.Bb.g=g.Zc(d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height),0,1),c.Nm=c.Bb.g,Gk(c,a,!0,b),a=Ek(b,e),c.Lk=0>=c.Rb||a.top>=a.bottom||a.left>=a.right?new g.Zg(0,0,0,0):$g(a,-b.left,-b.top)};
Vk=function(a,b,c,d){d&&(a.no=d);switch(c){case "nio":return Tk(a,b);case "aio":return Uk(a,b);case "swf":return a.ni();case "raf":return a.Zn();case "geo":case "xde":case "iem":return!0}return!1};
Wk=function(a,b,c,d){Dk.call(this,b,c,d);this.ca=0;this.B={};this.o=new Cj;this.tr={};this.Ob="";this.hg=null;this.Tg="";this.qv=!1;this.A=[];this.Sa=this.zv=this.Av=this.D=!1;this.Nd=void 0;this.C=-1;this.wa=void 0;this.da=!1;this.U=this.V=0;this.Y=1;this.Z=-1;this.Ya=this.Ka=!1;this.xf=this.fb=0;this.ib=!1;this.Ta=this.Va=-1;this.aa=this.N=this.g=0;this.qb=this.ka=-1;this.Wa=0;this.Qa=[0,0,0,0,0];this.H=this.Aa=this.ha=0;this.J=-1;this.Ha=0;this.T=!1;this.pa=null;this.Ja=this.yv=!1;this.xa=g.va;
this.K=[this.uj()];this.Xa=!1;this.so=!0;this.Il=2;b=Bk.getInstance();Gk(this,a,b.o);this.F={};this.F.pause="p";this.F.resume="r";this.F.skip="s";this.F.mute="m";this.F.unmute="um";this.F.exitfullscreen="ef"};
Xk=function(a,b,c){a.yv=!0;a.B={};a.B.firstquartile=!1;a.B.midpoint=!1;a.B.thirdquartile=!1;a.B.complete=!1;a.B.pause=!1;a.B.skip=!1;a.B.viewable_impression=!1;a.ca=0;c||(a.Tc().D=b)};
Yk=function(a){return g.r(a)?Number(a)?Ok(a,3):0:a};
Zk=function(a,b){if(-1==a.bf)return 0;var c=b-a.bf||1,d=1E4;g.r(a.C)&&-1!=a.C&&(d=Math.max(d,a.C/3));return c>d?1:c};
$k=function(a,b,c){return 15E3<=b?!0:a.Ka?(void 0===c?0:c)?!0:-1!=a.C?b>=a.C/2:-1!=a.Z?b>=a.Z:!1:!1};
al=function(a){var b={},c=Bk.getInstance();b.insideIframe=c.o;b.unmeasurable=a.af;b.position=a.position;b.coverage=a.Bb.g;b.documentSize=c.A;b.viewportSize=c.g;return b};
cl=function(a,b){bl(a.A,b,function(){return{TH:0,Gj:void 0}});
a.A[b]={viewableArea:Ok(a.Bb.g,2),instantaneousState:a.o.B}};
bl=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
fl=function(a,b){var c=a.tr[b];if(null!=c)return c;g.rb(dl,b)?c=!0:(c=a.B[b],g.r(c)?(a.B[b]=!0,c=!c):c=!1);c=el(a,c,c);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=Dj(a.o,["gdr"]));return c};
el=function(a,b,c){if(a.af)return{"if":0};var d=a.position.clone();d.round();var e=(0,g.H)(a.A,function(a){return 100*a.TH|0}),f=Bk.getInstance(),k=a.Tc(),l={};
a.Xa&&(l.avms="raf");l["if"]=f.o?1:void 0;l.sdk=a.Nd?a.Nd:void 0;l.t=a.CH;l.p=[d.top,d.left,d.bottom,d.right];l.tos=k.ib;l.mtos=k.A;l.ps=void 0;l.pt=e;l.vht=Oj(k,jj(),!!a.D);l.mut=k.wa;l.a=Yk(a.Bb.volume);l.mv=Yk(k.B);l.fs=a.Dd?1:0;l.ft=k.ka;l.at=k.ca;l.as=.1<=k.g?1:0;l.atos=k.da;l.uac=a.fb;l.vpt=k.o;"nio"==f.Za&&(l.nio=1,l.avms="nio");l.gmm="4";l.gdr=$k(a,k.o,!0)?1:0;a.so&&(l.efpf=a.Il);a.Vb&&(l.swf=a.Vb.getStatus(),l.px=a.di,l.avms="swf");0<a.Ha&&(l.nnut=a.Ha);l.tcm=a.Y;l.nmt=a.Aa;l.bt=a.H;l.pst=
a.J;l.vpaid=a.wa;l.dur=a.C;l.vmtime=a.V;l.is=a.o.B;1<=a.A.length&&(l.i0=a.A[0].Gj);2<=a.A.length&&(l.i1=a.A[1].Gj);3<=a.A.length&&(l.i2=a.A[2].Gj);4<=a.A.length&&(l.i3=a.A[3].Gj);l.cs=Fj(a.o);b&&(l.ic=Ej(a.o),l.dvpt=k.Y,l.dvs=k.Z,l.dfvs=k.V,l.davs=k.K,l.dafvs=k.F,c&&(k.Y=0,k.Z=0,k.V=0,k.K=0,k.F=0),a.ye()&&(l.dtos=k.aa,l.dav=k.J,l.dtoss=a.ca+1,c&&(k.aa=0,k.J=0,a.ca++)),l.dat=k.H,l.dft=k.U,c&&(k.H=0,k.U=0));f.A&&(l.ps=[f.A.width,f.A.height]);f.g&&(l.bs=[f.g.width,f.g.height]);f.D&&(l.scs=[f.D.width,
f.D.height]);l.dom=f.domain;a.pj&&(l.fmf="1",l.px=a.di);a.xf&&(l.vds=a.xf);a.g&&(l.vmer=a.g);a.N&&(l.vmmk=a.N);a.aa&&(l.vmiec=a.aa);a.Za&&(l.avms=a.Za.A(),g.lc(l,a.Za.g()));"exc"==f.Za&&(l.femt=a.ka,l.femvt=a.qb,l.emc=a.Wa,l.emb=a.Qa,l.emuc=a.ha,l.avms="exc");gl(hl)?(l.c=Ok(a.Bb.g,2),l.ss=Ok(il(a),2)):l.tth=jj()-jl;l.mc=Ok(k.Ya,2);l.nc=Ok(k.C,2);l.mv=Yk(k.B);l.nv=Yk(k.g);l.lte=Ok(a.Qm,2);b=a.K[a.K.length-1];l.qmtos=b.A;l.qnc=Ok(b.C,2);l.qmv=Yk(b.B);l.qnv=Yk(b.g);l.qas=.1<=b.g?1:0;l.qi=a.Ob;null!==
a.pa&&(l.nvat=a.pa?1:0);l.avms||(l.avms="geo");l.psm=k.xa.g;l.psv=k.xa.getValue();l.psfv=k.Ja.getValue();l.psa=k.Ha.getValue();return l};
il=function(a){if(a.Dd)return 1;var b=K.screen.width*K.screen.height;return 0>=b?-1:Math.min(a.Rb*a.Bb.g/b,1)};
kl=function(a,b){this.o=a||0;this.g=b||""};
ll=function(a,b){a.o&&(b[4]=a.o);a.g&&(b[12]=a.g)};
ml=function(a){var b=[];g.Tb(a,function(a,d){var c=(0,window.encodeURIComponent)(d),f=a;g.u(f)&&(f=(0,window.encodeURIComponent)(f));b.push(c+"="+f)});
b.push("24="+(new Date).getTime());return b.join("\n")};
nl=function(a){var b=[],c=[];g.Tb(a,function(a,e){if(!(e in Object.prototype)&&"undefined"!=typeof a){g.za(a)&&(a=a.join(","));var d=[e,"=",a].join("");switch(e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":case "aio":case "nio":case "swf":case "iem":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}}});
return b.concat(c)};
g.ol=function(a,b,c){g.I.call(this);this.B=null!=c?(0,g.z)(a,c):a;this.A=b;this.o=(0,g.z)(this.kG,this);this.g=[]};
pl=function(a){a.Of=g.mg(a.o,a.A);a.B.apply(null,a.g)};
ql=function(){return Sb("iPad")||Sb("Android")&&!Sb("Mobile")||Sb("Silk")};
rl=function(){this.g=this.B=null;this.A=0;this.o=null};
sl=function(){this.g=[];this.A=[];this.done=!1;this.o={xx:0,kp:0,Rn:0,bq:0,Dm:-1};this.N=this.D=this.J=this.F=this.K=null;this.T=!1;this.C=null;this.za="";this.hj=null;this.H=0;this.B=ql()||!ql()&&(Sb("iPod")||Sb("iPhone")||Sb("Android")||Sb("IEMobile"));this.U=0};
tl=function(){var a=Bk.getInstance().Za;return"nio"==a||"aio"==a};
vl=function(){var a=hl;if(!a.T){a.T=!0;var b=g.w.requestAnimationFrame||g.w.webkitRequestAnimationFrame||g.w.mozRequestAnimationFrame||g.w.oRequestAnimationFrame||g.w.msRequestAnimationFrame;if(!a.K&&!tl()){if(b){var c=Ri(136,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.rm.apply(a,[].concat(g.oa(c)))});
var d=function(){b(function(){K.setTimeout(c,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.rm.apply(a,[].concat(g.oa(c)))};
a.F=new g.ol(Mi(137,d,void 0,void 0),100);a.K=Ti(K,"scroll",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.F.Ag.apply(a.F,[].concat(g.oa(c)))},138)}if(!a.J&&!tl()){if(b){var e=Ri(139,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.nr.apply(a,[].concat(g.oa(c)))});
d=function(){b(function(){K.setTimeout(e,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.nr.apply(a,[].concat(g.oa(c)))};
a.D=new g.ol(Mi(140,d,void 0,void 0),100);a.J=Ti(K,"resize",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.D.Ag.apply(a.D,[].concat(g.oa(c)))},141)}ul(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Lq.apply(a,[].concat(g.oa(c)))});
a.Lq()}};
xl=function(a){var b=a.B,c=Bk.getInstance();b&&!c.B&&"exc"!=c.Za&&(c.g=mi(!0,K,b));b=new rl;switch(c.Za){case "xde":var d=a.H;wl(a,!1);a=Bk.getInstance();var e=a.H,f=e.height-d;0>=f&&(f=e.height,d=0);a.g=new g.hd(e.width,f);f=new rl;f.B=a.g;f.g=e;f.A=d;return f;case "geo":a:{c=c.g;b=new rl;b.B=c;if(null!=c&&-1!=c.width&&-1!=c.height&&-12245933!=c.width&&-12245933!=c.height){var k=Bk.getInstance();if(k.B)d=k.C;else try{e=a.B;a=K||K;a=a.top;f=c||mi(!0,a,void 0===e?!1:e);var l=g.xd(g.md(a.document).g);
if(-1==f.width||-12245933==f.width){var m=f.width;var n=new g.Zg(m,m,m,m)}else n=new g.Zg(l.y,l.x+f.width,l.y+f.height,l.x);d=n}catch(q){a=b;break a}b.o=d}a=b}return a;default:return b}};
Bl=function(a,b,c,d){if(!a.done)if(yl(a),0==b.length)c||zl(a);else{a.hj=null;var e=xl(a),f=Bk.getInstance();try{var k=jj();if(null!=Ak.getInstance().g)for(d=0;d<b.length;d++)Nk(b[d],k,c);else switch(f.Za){case "exc":for(d=0;d<b.length;d++)Lk(b[d],k,c);break;case "nis":for(e=0;e<b.length;e++)g.r(d)?b[e].Gk(d):b[e].mr(k);break;case "gsv":for(e=0;e<b.length;e++)g.r(d)?b[e].Eq(d):b[e].lr(k);break;case "aio":case "nio":for(d=0;d<b.length;d++)Lk(b[d],k,c);break;case "xde":if(e.g)for(d=0;d<b.length;d++)Fk(b[d],
k,e.g,e.A,c);break;case "iem":for(d=0;d<b.length;d++)Ik(b[d],k,c);break;case "swf":(0,g.G)(b,function(a){if(c){if(a.Vb){var b=a.Vb;3<=b.B&&(b.B=3);a.Bb.g=0}}else if(a.Vb&&"d"!=a.Vb.getStatus()){b=ck(a.Vb);var d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[b.snapshot+1];a.Bb.g=d[b.o+1];a.he(a.position,e,a.bf+b.g,!1,!0,!1);a.ye()&&1!=a.zd()&&!a.oi&&a.Vb&&Wj(a.Vb);(b=2==b.snapshot||fk(a.Vb))||(b=a.Vb,b="f"==b.o&&3E3<=b.C);b&&(a.no(a),a.oi=!1,a.Vb&&Wj(a.Vb))}});
break;case "raf":(0,g.G)(b,function(a){if(c)a.lg&&(a.lg.B=3,a.Bb.g=0);else if(a.lg){var b=yk(a.lg),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[b.snapshot+1];a.Bb.g=d[b.o+1];a.he(a.position,e,a.bf+b.g,!1,!0,!1);a.ye()&&1!=a.zd()&&!a.oi&&a.lg&&tk(a.lg)}});
break;case "geo":if(e.o)for(d=0;d<b.length;d++)Kk(b[d],k,e.o,c,f.o)}a.o.Rn+=jj()-k;++a.o.bq;Al(a)}finally{c?(0,g.G)(b,function(a){a.Bb.g=0}):zl(a)}}};
ul=function(a,b){var c;ki.mozVisibilityState?c="mozvisibilitychange":ki.webkitVisibilityState?c="webkitvisibilitychange":ki.visibilityState&&(c="visibilitychange");c&&(a.N=a.N||Ti(ki,c,b,142))};
gl=function(a){if(Cl(a))return!0;var b=Ui();a=1===b;b=0===b;return Bk.getInstance(),a||b};
zl=function(a){K&&(a.C=K.setTimeout(Ri(143,function(){Bl(a,Dl(a),!1)}),nj(Bk.getInstance().J)))};
yl=function(a){window.clearTimeout(a.C);a.C=null};
Fl=function(a,b){return null!=b&&(0,g.El)(a.g,function(a){return a.element==b})};
Gl=function(a){return g.nb(hl.g,function(b){return b.Ob==a})};
Dl=function(a){return 0==a.g.length?a.A:0==a.A.length?a.g:g.zb(a.A,a.g)};
wl=function(a,b){var c=a.B,d=Bk.getInstance();d.g=d.B?d.C?(new g.hd(d.C.Ad(),d.C.getHeight())).round():new g.hd(0,0):mi(!0,K,c);if(!b){d.H=K&&K.outerWidth?new g.hd(K.outerWidth,K.outerHeight):new g.hd(-12245933,-12245933);var e=void 0===e?K:e;null!==e&&e!==e.top&&(e=e.top);var f=c=0,k=Bk.getInstance().g;try{var l=e.document,m=l.body,n=l.documentElement;if("CSS1Compat"==l.compatMode&&n.scrollHeight)c=n.scrollHeight!=k.height?n.scrollHeight:n.offsetHeight,f=n.scrollWidth!=k.width?n.scrollWidth:n.offsetWidth;
else{var q=n.scrollHeight,t=n.scrollWidth,v=n.offsetHeight,D=n.offsetWidth;n.clientHeight!=v&&(q=m.scrollHeight,t=m.scrollWidth,v=m.offsetHeight,D=m.offsetWidth);q>k.height?q>v?(c=q,f=t):(c=v,f=D):q<v?(c=q,f=t):(c=v,f=D)}var C=new g.hd(f,c)}catch(B){C=new g.hd(-12245933,-12245933)}d.A=C}};
Il=function(a,b,c){if(a=Hl(a,"swf",b,c))Bk.getInstance().Za="swf",Bk.getInstance().Za="swf",(0,g.G)(b,function(a){a.Vb||c(a)});
return a};
Jl=function(){var a=Hl(K,"raf",Dl(hl));a&&(Bk.getInstance().Za="raf");return a};
Hl=function(a,b,c,d){var e=!1;(0,g.G)(c,function(c){Vk(c,a,b,d)&&(e=!0)});
return e};
Al=function(a){if("osd"==a.za)for(var b=a.A,c=0;c<b.length;c++){var d=a;if(!d.hj){var e=d,f=d,k=K,l=k.document,m=0<=ij?jj()-ij:-1,n=jj();-1==f.o.Dm&&(m=n);var q={},t=Dl(f);try{if(0<t.length){var v=Bk.getInstance(),D=v.g;D&&(q.bs=[D.width,D.height]);var C=v.H;C&&(q.bos=[C.width,C.height]);var B=v.A;B&&(q.ps=[B.width,B.height]);k.screen&&(q.ss=[k.screen.width,k.screen.height])}else q.url=(0,window.encodeURIComponent)(k.location.href.substring(0,1024)),l.referrer&&(q.referrer=(0,window.encodeURIComponent)(l.referrer.substring(0,
512)));q.tt=m;q.pt=ij;switch(Bk.getInstance().Za){case "xde":q.xde=1;break;case "iem":q.iem=1;break;case "aio":q.aio=1;break;case "nio":q.nio=1}q.deb=[1,f.o.xx,f.o.kp,f.o.Rn,f.o.bq,f.o.Dm].join("-");q.tvt=Kl(f,n);if(null!==k&&k!==k.top){0<t.length&&(q.iframe_loc=(0,window.encodeURIComponent)(k.location.href.substring(0,512)));var U=mi(!1,k,f.B);q.is=[U.width,U.height]}}catch(Z){q.error=1}e.hj=q}b[c].A(g.ic(d.hj),"goog_update_data","u")}};
Ll=function(a){var b=hl,c=[];(0,g.G)(a,function(a){Fl(b,a.element)||(b.g.push(a),c.push(a))})};
Ml=function(a){var b=hl,c=[];(0,g.G)(a,function(a){null==g.nb(b.g,function(b){return b.element==a.element&&b.Tg==a.Tg})&&(b.g.push(a),c.push(a))})};
Kl=function(a,b){var c=a.U;kj&&(c+=b-lj);return c};
Cl=function(a){return(0,g.El)(Dl(a),function(a){return a.Dd})};
Nl=function(a){var b=[];g.Tb(a,function(a,d){d in Object.prototype||"undefined"==typeof a||(g.za(a)&&(a=a.join(",")),b.push([d,"=",a].join("")))});
return b.join("&")};
Ol=function(){var a=g.Rb;return a?(0,g.El)("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"),function(b){return Xa(a,b)})?!0:Xa(a,"Presto")&&Xa(a,"Linux")&&!Xa(a,"X11")&&!Xa(a,"Android")&&!Xa(a,"Mobi"):!1};
Pl=function(a){if(!a)return"";var b=a.document,c=[];c.push("url="+(0,window.encodeURIComponent)(a.location.href.substring(0,512)));b&&b.referrer&&c.push("referrer="+(0,window.encodeURIComponent)(b.referrer.substring(0,512)));return c.join("&")};
Ql=function(a){return function(b){return!g.r(b[a])&&g.r(0)?0:b[a]}};
Sl=function(){var a=[0,2,4];return function(b){b=b.tos;if(g.za(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return g.r(a)?Rl(c,a):c}}};
Tl=function(a,b){return function(c){c=c[a];if(g.za(c))return Rl(c,b)}};
Rl=function(a,b){return(0,g.Md)(a,function(a,d){return g.rb(b,d)})};
Ul=function(){this.A=new kl(0,"");this.J=4;this.g=[];this.o=[];this.H=!1;this.K=this.B=0;this.D=this.C="";this.T=0;this.F=new g.hd(0,0);this.N=new g.Zg(0,0,0,0)};
Vl=function(){var a=0,b=K;try{if(b&&b.Goog_AdSense_getAdAdapterInstance)return b}catch(c){}for(;b&&5>a;){try{if(b.google_osd_static_frame)return b}catch(c){}try{if(b.aswift_0&&b.aswift_0.google_osd_static_frame)return b.aswift_0}catch(c){}a++;b=b!=b.parent?b.parent:null}return null};
Wl=function(a,b,c,d,e,f){d=void 0===d?!1:d;e=void 0===e?"":e;f=void 0===f?!1:f;var k={};ll(b,k);k[0]="goog_request_monitoring";k[6]=a;k[27]=K.document.domain;k[16]=d;e&&e.length&&(k[19]=e);f&&(k[28]=f);try{var l=ml(k);c.postMessage(l,"*")}catch(m){}};
Xl=function(a,b,c,d,e,f){d=void 0===d?!1:d;e=void 0===e?"":e;f=void 0===f?function(){return null}:f;
var k=void 0===k?!1:k;10<a.K?(K.clearInterval(a.B),f()):(++a.K,K.postMessage&&c.ac()?(a=Vl())&&Wl(b,c,a,d,e,k):(K.clearInterval(a.B),f()))};
em=function(a){a.A.ac()||Yl(a);Ti(g.w,"message",function(b){if(null!=b&&b.data&&g.u(b.data)){var c=b.data;if(g.u(c)){var d={};c=c.split("\n");for(var e=0;e<c.length;e++){var f=c[e].indexOf("=");if(!(0>=f)){var k=Number(c[e].substr(0,f));f=c[e].substr(f+1);switch(k){case 5:case 8:case 11:case 15:case 16:case 18:case 26:f="true"==f;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:case 25:f=Number(f);break;case 3:case 19:if(g.Ca(window.decodeURIComponent))try{f=(0,window.decodeURIComponent)(f)}catch(m){throw Error("Error: URI malformed: "+
f);}break;case 17:f=(0,g.H)((0,window.decodeURIComponent)(f).split(","),Number)}d[k]=f}}d=d[0]?d:null}else d=null;if(d&&a.A.match(new kl(d[4],d[12]))&&(K.clearInterval(a.B),a.o.length||a.g.length))switch(c=d[0],e=100*d[25],g.ta(e)&&!(0,window.isNaN)(e)&&Zl(a,e),e=!1,(0,window.isNaN)(d[22])||(0,window.isNaN)(d[23])||(e=!0,a.F=new g.hd(d[22],d[23])),k=d[7],g.ta(k)&&(e=!0,a.T=k,d[9]&&(k=d[9].split("-"),4==k.length&&(a.N=new g.Zg(fb(k[0]),fb(k[3]),fb(k[2]),fb(k[1]))))),e&&$l(a,a.F,a.N),d[3]&&(a.C=d[3]),
e=!!d[5],k=!!d[11],c){case "goog_acknowledge_monitoring":am(a,!!d[8]);break;case "goog_get_mode":d={};ll(a.A,d);d[0]="goog_provide_mode";d[6]=a.J;d[19]=a.D;d[16]=a.H;try{var l=ml(d);b.source.postMessage(l,b.origin)}catch(m){}break;case "goog_image_request":bm(a,e,k,a.C);case "goog_update_data":b=!!d[15]&&"goog_update_data"==c,e&&cm(a,b,a.C),k&&dm(a,a.C)}}},118);
a.B=K.setInterval(Ri(197,function(){Xl(a,a.J,a.A,a.H,a.D,function(){Yl(a)})}),500)};
Yl=function(a){(0,g.G)(a.g,function(a){Bk.getInstance().B=!1;fm(a)})};
am=function(a,b){(0,g.G)(a.g,function(a){var c=Bk.getInstance();b?(c.B=!1,fm(a)):vl()})};
$l=function(a,b,c){(0,g.G)(a.g,function(){var a=Bk.getInstance();a.g=b;a.C=c})};
Zl=function(a,b){(0,g.G)(a.o,function(a){a.g(b)})};
bm=function(a,b,c,d){(0,g.G)(a.o,function(a){a.o(b,c,d)})};
cm=function(a,b,c){(0,g.G)(a.o,function(a){a.B(b,c)})};
dm=function(a,b){(0,g.G)(a.o,function(a){a.A(b)})};
gm=function(){this.o=this.F=!1;this.J="h";var a={};this.K=(a.start=this.Yy,a.firstquartile=this.My,a.midpoint=this.Ry,a.thirdquartile=this.Zy,a.complete=this.Iy,a.pause=this.Uy,a.resume=this.Wy,a.skip=this.Xy,a.viewable_impression=this.bz,a.mute=this.Sy,a.unmute=this.az,a.fullscreen=this.Ny,a.exitfullscreen=this.Ly,a.fully_viewable_audible_half_duration_impression=this.Oy,a.measurable_impression=this.Qy,a.abandon=this.Hy,a.engagedview=this.Ky,a.impression=this.Py,a.creativeview=this.Jy,a.progress=
this.Vy,a);a={};this.N=(a.overlay_resize=this.Ty,a.abandon=this.ym,a.close=this.ym,a.collapse=this.ym,a.overlay_unmeasurable_impression=function(a){return fl(a,"overlay_unmeasurable_impression")},a.overlay_viewable_immediate_impression=function(a){return fl(a,"overlay_viewable_immediate_impression")},a.overlay_unviewable_impression=function(a){return fl(a,"overlay_unviewable_impression")},a.overlay_viewable_end_of_session_impression=function(a){return fl(a,"overlay_viewable_end_of_session_impression")},
a);
Bk.getInstance().K=3};
fm=function(a){var b;if(b=null!=K.IntersectionObserver)if(b=Hl(K,"nio",Dl(hl)))Bk.getInstance().Za="nio";if(b)vl();else if(hj()&&Jl())vl();else{if(g.th&&g.ta(K.screenX)&&g.ta(K.mozInnerScreenX)&&g.ta(K.outerWidth)){b=hl;var c=K.navigator.userAgent;var d=c.indexOf("Firefox/");if(0<=d){d=Math.floor(c.substr(d+8))||-1;var e=c.indexOf("Mac OS X 10."),f=-1;0<=e&&(f=Number(c.substr(e+12,1))||-1);var k=0<f?-1:c.indexOf("Windows NT ");e=-1;0<=k&&(e={"6.0":0,"6.1":1,"6.2":2}[c.substr(k+11,3)]||-1);c=148;5<=
f?c=4<=d?108:3<=d?127:108:0<=e&&(16==d||17==d||18==d)&&(c=[[146,146,146],[148,147,148],[131,130,136]][e][d-16])}else c=null;null!==c&&(b.H=c,Bk.getInstance().Za="xde");b=!0}else b=!1;b?vl():(g.wd&&g.zc(8)&&g.Ca(Xi())?(Bk.getInstance().Za="iem",b=!0):b=!1,b?vl():ej()&&Il(K,hl.g,(0,g.z)(a.Mq,a))?vl():(yl(hl),hm="i",hl.done=!0))}};
lm=function(a,b){if(!a.qv){var c=fl(a,"start");c=im(c,jm);var d=km||K,e=[];e.push("v=603v");e.push("r="+b);var f=0;"swf"==Bk.getInstance().Za&&(f=1);e.push("efm="+f);e.push(c);e.push(Pl(d));hi(K,("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&"+e.join("&")).substring(0,2E3),void 0);a.qv=!0}};
qm=function(a,b,c,d){Bl(hl,[a],!gl(hl),d);cl(a,c);b=fl(a,b);4!=c&&bl(a.K,c,a.uj);return b};
rm=function(a,b,c){var d=a.Tc();d.Aa=Oj(d,jj(),!!a.D);Bl(hl,[a],!gl(hl),c);a.D=!0;return fl(a,b)};
sm=function(a,b,c){if(!b.yv){"i"!=hm&&(hl.done=!1);var d=Ak.getInstance();null!=d.g&&Mk(b,null!=d.g?d.g:null);Vk(b,K,Bk.getInstance().Za,function(b){return a.Mq(b)});
d=g.r(c)?c.opt_nativeTime:void 0;mj=d=g.ta(d)?d:jj();b.Jf=!0;var e=gl(hl);Xk(b,d,e);Bl(hl,[b],!e,c)}};
tm=function(a,b){if(g.u(b)){if(1==a)var c=hl.g;else if(2==a)c=hl.A;else return;var d=g.lb(c,function(c){return c.zd()!=a?!1:c.Ob==b});
0<=d&&(Pk(c[d]),g.vb(c,d))}};
vm=function(a,b,c,d){var e=g.nb(hl.g,function(a){return a.element==c});
null!==e&&e.Ob!=b&&(tm(1,e.Ob),e=null);e||(e=um(a,c),e.Ob=b,e.Nd=a.J,d&&(e.hg=d));return e};
um=function(a,b){var c=new Wk(K,b,-1,7);c.Um=(0,g.z)(a.Bj,a);Bk.getInstance().J=79463069;Ml([c]);vl();return c};
ym=function(a,b){var c=cc(wm,function(b){return b==a}),d={};
c=(d.sv="603",d.cb="j",d.e=xm[c],d);d=fl(b,a);g.lc(c,d);b.tr[a]=d;return 2==b.zd()?nl(c).join("&"):im(c,jm)};
im=function(a,b,c,d,e){var f={};if(g.r(a))if(null!=b)for(var k in b){var l=b[k];k in Object.prototype||null!=l&&(g.Ca(l)?f[k]=l(a):f[k]=a[l])}else g.lc(f,a);g.r(c)&&g.lc(f,c);a=Nl(f);0<a.length&&g.r(d)&&g.r(e)&&(e=e(a),a+="&"+d+"="+e);return a};
Am=function(a,b){var c={sv:"603",cb:"j"};c.nas=hl.g.length;c.msg=a;if(g.r(b)){var d=zm(b);d&&(c.e=xm[d])}return c};
zm=function(a){var b=a.toLowerCase();return cc(wm,function(a){return a==b})};
Dm=function(a,b){b.N=0;for(var c in Bm)null==a[c]&&(b.N|=Bm[c]);Cm(a,"currentTime");Cm(a,"duration")};
Cm=function(a,b){var c=a[b];g.r(c)&&(a[b]=Math.floor(1E3*c))};
Em=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
Gm=function(a){return!!(1<<a&Fm)};
Mm=function(){try{Hm()}catch(d){}var a="a=1&b="+Fm+"&",b=[],c=99;(0,g.G)(Im,function(a,c){var d=!1;try{d=a(K)}catch(k){}b[c/32>>>0]|=d<<c%32});
(0,g.G)(b,function(b,e){a+=String.fromCharCode(c+e)+"="+(b>>>0).toString(16)+"&"});
c=105;(0,g.G)(Jm,function(b){var d="false";try{d=b(K)}catch(f){}a+=String.fromCharCode(c++)+"="+d+"&"});
(0,g.G)(Lm,function(b){var d="";try{var f=b(K);d=g.he(g.ce(f),!0)}catch(k){}a+=String.fromCharCode(c++)+"="+d+"&"});
return a.slice(0,-1)};
Hm=function(){if(!Nm){var a=function(){Om=!0;K.document.removeEventListener("webdriver-evaluate",a,!0)};
K.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){Pm=!0;K.document.removeEventListener("webdriver-evaluate-response",b,!0)};
K.document.addEventListener("webdriver-evaluate-response",b,!0);Nm=!0}};
Qm=function(){this.o=64;this.g=Array(4);this.C=Array(this.o);this.B=this.A=0;this.reset()};
Rm=function(a,b,c){c||(c=0);var d=Array(16);if(g.u(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];e=a.g[2];var f=a.g[3];var k=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^
b))+d[3]+3250441966&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+
(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(k<<5&4294967295|
k>>>27);k=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=e+(k<<20&4294967295|
k>>>12);k=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[7]+1735328473&4294967295;e=f+(k<<14&4294967295|
k>>>18);k=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^
b^c)+d[7]+4139469664&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[12]+3873151461&4294967295;
f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[12]+1700485571&4294967295;b=c+
(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[13]+1309151649&4294967295;
c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(k<<21&4294967295|k>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295};
Um=function(a){var b=a||ui();a=b.length-1;var c=vi(b);b=c.g;var d=c.o;c=[];d?(b&&c.push(Sm(a,[d.url,2],0,[b.url,0],b.depth)),c.push(Sm(a,[d.url,2],0))):b.url&&(c.push(Sm(a,void 0,void 0,[b.url,0],b.depth)),(d=(d=Tm.exec(b.url))&&d[0]||"")&&c.push(Sm(a,[d,1],b.depth)));c.push(Sm(a));return c};
Sm=function(a,b,c,d,e){a=[a];if(g.r(b)&&g.r(c)){for(var f=0;f<c;f++)a.push("");a.push(b)}if(g.r(d)&&g.r(e)){b=e-a.length+1;for(f=0;f<b;f++)a.push("");a.push(d)}return a};
Vm=function(){var a=Um();return(0,g.H)(a,function(a){return yi(a)})};
Wm=function(){gm.call(this);this.A=void 0;this.B=this.H=this.C=null;this.g=!1;this.D={};var a=Gj.getInstance();g.rb(a.g,509445015)&&"exc"!=Bk.getInstance().Za&&(this.g=!0,this.H=new yj)};
Xm=function(a,b,c,d){d=new Wk(K,null,d,7);d.Nd=c;d.Um=function(b){a.Bj(b)};
Ll([d]);d.Ob=b;return d};
Ym=function(a,b,c){var d=Gl(b);d||(d=Xm(a,b,"m",c.opt_nativeTime||-1));return d};
Zm=function(a,b,c){var d=Gl(b);d||(d=Xm(a,b,"n",c.opt_nativeTime||-1),d.T=Bk.getInstance().F);return d};
$m=function(a,b){var c=Gl(b);c||(c=Xm(a,b,"h",-1));return c};
cn=function(a,b,c){var d=g.nb(hl.g,function(a){return a.element?an(a.element,c)==b&&a.Tg==c:!1});
null!==d&&d.Ob!=b&&(tm(1,d.Ob),d=void 0);if(d)return d;d=bn(c);if(d=g.nb(d,function(a){return an(a,c)==b}))return d=um(a,d),d.Nd="as",d.Ob=b,d.Tg=c,d};
bn=function(a){var b=K.document,c=g.Pb((0,g.H)(["embed","object"],function(a){return g.Ab(b.getElementsByTagName(a))})),d="metricID"+a;
return c=(0,g.Md)(c,function(a){if(!a||!g.Da(a)||1!=a.nodeType||!g.Ca(a.getBoundingClientRect))return!1;var b=a.getBoundingClientRect();return 0!=b.width&&0!=b.height&&a[d]&&g.Ca(a[d])?!0:!1})};
an=function(a,b){var c="metricID"+b;if(!a||!a[c]||!g.Ca(a[c]))return null;try{var d=a[c]()}catch(e){return null}return d.queryID};
dn=function(a,b,c){var d=Bk.getInstance();switch(b.Nd){case "b":var e=g.y("ytads.bulleit.triggerExternalActivityEvent");break;case "h":var f=Gj.getInstance();if("exc"==d.Za)e=g.y("ima.bridge.triggerExternalActivityEvent");else if(b.hg&&g.rb(f.g,495644004)){var k=a.D[b.hg];k?e=function(a,b,c){k.o(a,b,c)}:Si("lidar::missingPlayerCallback",Error())}else e=g.y("ima.common.triggerExternalActivityEvent");
break;case "m":e=g.y("ima.common.triggerExternalActivityEvent");break;case "n":e=g.y("ima.bridge.triggerExternalActivityEvent");break;case "as":var l="triggerExternalActivityEvent"+b.Tg;b.element&&g.Ca(b.element[l])&&(e=function(a,c,d){b.element[l](d)});
break;default:return b.xf|=4,!1}if(g.Ca(e)){a=ym(c,b);try{return e(b.Ob,a,c),!0}catch(m){b.xf|=2}}else b.xf|=1;return!1};
en=function(a){return g.Ub(g.ic(a||{}),function(a,c){return"qmtos"==c||"qnc"==c||"qmv"==c||"qnv"==c?!1:!0})};
ln=function(a,b,c){var d={};d.viewability=c?im(b,jm):im(en(b),jm);c=Fm=(new Date).getTime();var e=Gm(5);c=(Om?!e:e)?c|2:c&-3;e=Gm(2);c=(Pm?!e:e)?c|8:c&-9;c={s1:(c>>>0).toString(16)};a.C||(a.C=Mm());d.moatInit=a.C;d.moatViewability=im(b,fn,c,"h",gn("kArwaWEsTs"));d.integralAdsViewability=im(b,hn,{},"h",gn("b96YPMzfnx"));d.doubleVerifyViewability=im(b,jn,{},"h",gn("yb8Wev6QDg"));d.googleViewability=im(b,kn);return d};
mn=function(a,b,c){a=Bk.getInstance();if(a.F!=b){a.F=b;var d=(0,g.El)(hl.g,function(a){return a.Ja});
(0,g.G)(hl.g,function(a){b||d||(a.bf=c);a.T=b;a.Ja=!1})}};
nn=function(a,b){var c=Gj.getInstance(),d;if(b.hg&&g.rb(c.g,495644004)){var e=a.D[b.hg];e?d=function(a,b){e.A(a,b)}:Si("lidar::missingPlayerCallback",Error())}else d=g.y("ima.common.triggerViewabilityMeasurementUpdate");
g.Ca(d)&&(c=al(b),c.nativeVolume=a.A,a.g&&(c.userActivity=a.B),d(b.Ob,c))};
on=function(a){var b=a.B,c={};a.g&&b&&(b.o&&0<b.o&&(c.pnc=b.o),b.g&&0<b.g&&(c.pns=b.g),b.B&&0<b.B&&(c.pnmm=b.B),b.A&&0<b.A&&(c.pnk=b.A),c.ptlt=b.C);return c};
gn=function(a){return function(b){var c=new Qm;c.update(b+a);return de(c.digest()).slice(-8)}};
rn=function(a,b,c){var d=Wm.getInstance(),e={};g.lc(e,{opt_adElement:void 0,opt_fullscreen:void 0},c||{});if(e.opt_bounds)a=ln(d,Am("ol",a),!1);else{b:{if(zm(a)){if(pn){e=Am("ue",a);break b}b=d.wj(b,e);if(!b){e=Am("nf",a);break b}if(!d.F){d.F=!0;try{var f=jj(),k=Bk.getInstance();ij=f;for(var l=c=K,m=0;c&&c!=c.parent;)c=c.parent,m++,Zh(c)&&(l=c);km=l;wl(hl,!1);var n=Bk.getInstance();K.screen&&(n.D=new g.hd(K.screen.width,K.screen.height));if("nis"!=k.Za&&"gsv"!=k.Za)if(K.document.body&&K.document.body.getBoundingClientRect)if(hl.o.kp=
0,hl.o.Dm=jj()-f,Ak.getInstance(),!k.o&&hj()&&Jl())vl();else if(k.o&&"exc"!=k.Za)if(k.B){var q=Ul.getInstance();g.rb(q.g,d)||q.g.push(d);em(q)}else fm(d);else vl();else pn=!0}catch(v){throw hl.reset(),v;}}"i"==hm&&(b.af=!0,d.Tn(b));f=e.opt_fullscreen;g.r(f)&&(b.Dd=!!f);Xa(g.Rb,"CrKey")||Xa(g.Rb,"PlayStation")||Xa(g.Rb,"Roku")||Ol()||Xa(g.Rb,"Xbox")?f=!1:(f=Bk.getInstance().Za,f=K&&K.g||"nis"===f||"gsv"===f?!1:0===Ui());if(k=f)lm(b,"pvu"),yl(hl),hm="pvu",hl.done=!0;f=a.toLowerCase();!k&&g.rb(qn,f)&&
(sm(d,b,e),d.Iq(b));(k=b.F[f])&&b.o.g(k);switch(b.zd()){case 1:var t=d.K[f];break;case 2:t=d.N[f]}if(t&&(e=t.call(d,b,e),g.r(e))){t=Am(void 0,f);g.lc(t,e);e=t;break b}}e=void 0}e&&g.lc(e,on(d));a=ln(d,e,"firstquartile"==a||"midpoint"==a||"thirdquartile"==a||"complete"==a||"skip"==a||"abandon"==a?!0:!1)}return a};
sn=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
tn=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=n=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=l^d&(f^l);var q=1518500249}else n=d^f^l,q=1859775393;else 60>c?(n=d&f|l&(d|f),q=2400959708):(n=d^f^l,q=3395469782);n=((a<<5|a>>>27)&4294967295)+n+m+q+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64;for(;d<c;)if(f[n++]=a[d++],q++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64}
function d(){var a=[],d=8*q;56>n?c(l,56-n):c(l,64-(n-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var n,q;a();return{reset:a,update:c,digest:d,Mx:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vn=function(a,b,c){var d=[],e=[];if(1==(g.za(c)?2:1))return e=[b,a],(0,g.G)(d,function(a){e.push(a)}),un(e.join(" "));
var f=[],k=[];(0,g.G)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.sb(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.G)(d,function(a){e.push(a)});
a=un(e.join(" "));a=[c,a];g.sb(k)||a.push(k.join(""));return a.join("_")};
un=function(a){var b=tn();b.update(a);return b.Mx().toLowerCase()};
g.wn=function(){var a=[],b=sn(String(g.w.location.href)),c=g.w.__OVERRIDE_SID;null==c&&(c=(new Ag(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.w.__SAPISID:g.w.__APISID,null==b&&(b=(new Ag(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.w.location.href);return d&&b&&c?[c,vn(sn(d),b,a||null)].join(" "):null}return null};
xn=function(){};
zn=function(a){if(a instanceof xn)return a;if("function"==typeof a.qe)return a.qe(!1);if(g.Ba(a)){var b=0,c=new xn;c.next=function(){for(;;){if(b>=a.length)throw yn;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.An=function(a,b,c){if(g.Ba(a))try{(0,g.G)(a,b,c)}catch(d){if(d!==yn)throw d;}else{a=zn(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==yn)throw d;}}};
Bn=function(a){if(g.Ba(a))return g.Ab(a);a=zn(a);var b=[];g.An(a,function(a){b.push(a)});
return b};
Cn=function(a,b){this.o={};this.g=[];this.wf=this.ya=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Cn?(c=a.Sc(),d=a.Fb()):(c=g.$b(a),d=g.Zb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};
En=function(a){var b,c;if(a.ya!=a.g.length){for(b=c=0;c<a.g.length;){var d=a.g[c];Dn(a.o,d)&&(a.g[b++]=d);c++}a.g.length=b}if(a.ya!=a.g.length){var e={};for(b=c=0;c<a.g.length;)d=a.g[c],Dn(e,d)||(a.g[b++]=d,e[d]=1),c++;a.g.length=b}};
Dn=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Fn=function(a){if(a.Fb&&"function"==typeof a.Fb)return a.Fb();if(g.u(a))return a.split("");if(g.Ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Zb(a)};
Gn=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(g.Ba(a)||g.u(a))(0,g.G)(a,b,void 0);else{if(a.Sc&&"function"==typeof a.Sc)var c=a.Sc();else if(a.Fb&&"function"==typeof a.Fb)c=void 0;else if(g.Ba(a)||g.u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.$b(a);d=Fn(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};
g.Hn=function(a,b){this.g=this.H=this.B="";this.C=null;this.D=this.o="";this.F=!1;var c;a instanceof g.Hn?(this.F=g.r(b)?b:a.F,In(this,a.B),this.H=a.H,g.Jn(this,a.g),g.Kn(this,a.C),this.o=a.o,Ln(this,a.A.clone()),this.D=a.D):a&&(c=g.Eg(String(a)))?(this.F=!!b,In(this,c[1]||"",!0),this.H=Mn(c[2]||""),g.Jn(this,c[3]||"",!0),g.Kn(this,c[4]),this.o=Mn(c[5]||"",!0),Ln(this,c[6]||"",!0),this.D=Mn(c[7]||"")):(this.F=!!b,this.A=new g.Nn(null,0,this.F))};
In=function(a,b,c){a.B=c?Mn(b,!0):b;a.B&&(a.B=a.B.replace(/:$/,""))};
g.Jn=function(a,b,c){a.g=c?Mn(b,!0):b;return a};
g.Kn=function(a,b){if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null;return a};
Ln=function(a,b,c){b instanceof g.Nn?(a.A=b,On(a.A,a.F)):(c||(b=Pn(b,Qn)),a.A=new g.Nn(b,0,a.F))};
g.Rn=function(a,b,c){a.A.set(b,c);return a};
Tn=function(a,b,c){g.za(c)||(c=[String(c)]);Sn(a.A,b,c)};
Un=function(a){g.Rn(a,"zx",g.ab());return a};
g.Vn=function(a){return a instanceof g.Hn?a.clone():new g.Hn(a,void 0)};
Wn=function(a,b,c,d){var e=new g.Hn(null,void 0);a&&In(e,a);b&&g.Jn(e,b);c&&g.Kn(e,c);d&&(e.o=d);return e};
Mn=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
Pn=function(a,b,c){return g.u(a)?(a=(0,window.encodeURI)(a).replace(b,Xn),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Xn=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
g.Nn=function(a,b,c){this.ya=this.g=null;this.o=a||null;this.A=!!c};
Yn=function(a){a.g||(a.g=new Cn,a.ya=0,a.o&&Ig(a.o,function(b,c){var d=Na(b);Yn(a);a.o=null;d=Zn(a,d);var e=a.g.get(d);e||a.g.set(d,e=[]);e.push(c);a.ya=a.ya+1}))};
$n=function(a,b){Yn(a);b=Zn(a,b);return Dn(a.g.o,b)};
Sn=function(a,b,c){a.remove(b);0<c.length&&(a.o=null,a.g.set(Zn(a,b),g.Ab(c)),a.ya=a.ya+c.length)};
Zn=function(a,b){var c=String(b);a.A&&(c=c.toLowerCase());return c};
On=function(a,b){b&&!a.A&&(Yn(a),a.o=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),Sn(this,c,a))},a));
a.A=b};
g.ao=function(a){g.I.call(this);this.o=a;this.g={}};
bo=function(a){g.Tb(a.g,function(a,c){this.g.hasOwnProperty(c)&&g.mf(a)},a);
a.g={}};
co=function(){};
g.fo=function(a,b){return a.replace(eo,function(a,d){try{var c=hc(b,d);if(null==c)return a;c=c.toString();if(""==c||!Ma(g.$a(c)))return(0,window.encodeURIComponent)(c).replace(/%2C/g,",")}catch(f){}return a})};
go=function(a){g.Me.call(this,a)};
ho=function(a){this.g=a};
jo=function(){var a=io();a:{if(bc(a.g,"disableExperiments")&&(a=a.g.disableExperiments,g.sa(a)))break a;a=!1}return a};
ko=function(a){if(bc(a.g,"forceExperimentIds")){a=a.g.forceExperimentIds;var b=[],c=0;g.za(a)&&(0,g.G)(a,function(a){g.ta(a)&&(b[c++]=a)});
return b}return null};
lo=function(){this.o=null;try{Um(void 0)}catch(a){}};
io=function(){var a=mo;if(null==a.o){var b={},c=(new g.Hn(zd().location.href)).A;if($n(c,"tcnfp"))try{b=g.tg(c.get("tcnfp"))}catch(d){}a.o=new ho(b)}return a.o};
no=function(a,b,c,d){this.za=a;this.g=g.Zc(c||0,0,1);this.o=null!=d?d:!0};
oo=function(a){this.za=a;this.o=new Cn;this.ze=this.g=null};
po=function(a){var b=Math.random(),c=0,d=a.o.Fb();(0,g.G)(d,function(a){c+=a.g},a);
var e=1<c?c:1;a.g=null;for(var f=0,k=0;k<d.length;++k)if(f+=d[k].g,f/e>=b){a.g=d[k];break}};
to=function(){this.o=null!=g.w.G_testRunner;this.g=new Cn;mo.g()||(qo(this,"GvnExternalLayer",31061774,.01),qo(this,"GvnExternalLayer",31061775,.01),qo(this,"GvnExternalLayer",41351088,.01),qo(this,"GvnExternalLayer",41351089,.01),qo(this,"GvnExternalLayer",420706008,.05),qo(this,"GvnExternalLayer",420706009,.05),qo(this,"GvnExternalLayer",420706024,.01),qo(this,"GvnExternalLayer",420706025,.01),qo(this,"GvnExternalLayer",420706029,.01),qo(this,"GvnExternalLayer",41351073,.01),qo(this,"GvnExternalLayer",
41351074,.01),qo(this,"GvnExternalLayer",41351075,.01),qo(this,"GvnExternalLayer",634360101,0),qo(this,"GvnExternalLayer",634360102,0),qo(this,"GvnExternalLayer",21592080,.1),qo(this,"GvnExternalLayer",21592081,.1),qo(this,"GvnExternalLayer",21592082,.01),qo(this,"GvnExternalLayer",413051059,.05),qo(this,"GvnExternalLayer",413051060,.05),qo(this,"GvnExternalLayer",324123E3,.05),qo(this,"GvnExternalLayer",324123001,.05),qo(this,"GvnExternalLayer",420706068,.01),qo(this,"GvnExternalLayer",420706069,
.01),qo(this,"GvnExternalLayer",324123020,.01),qo(this,"GvnExternalLayer",324123021,.01),qo(this,"GvnExternalLayer",420706081,.01),qo(this,"GvnExternalLayer",420706082,.01),hj(!1)&&(Zh(K.top)?(qo(this,"ActiveViewExternalLayer",509445010,.01),qo(this,"ActiveViewExternalLayer",509445011,.01)):(qo(this,"ActiveViewExternalLayer",509445012,.01),qo(this,"ActiveViewExternalLayer",509445013,.01))));ro(this);var a=io();a=ko(a);null!=a&&(this.o=!1,so(this,a.map(String)))};
vo=function(){uo||(uo=new to);return uo};
qo=function(a,b,c,d){Ma(g.$a(b))||(0,window.isNaN)(c)||0>=c||(c=new no(c,0,d),wo(a,b).o.set(c.getId(),c))};
ro=function(a){jo()||(0,g.G)(a.g.Fb(),function(a){po(a)},a)};
so=function(a,b){(0,g.G)(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;(0,window.isNaN)(b)||0>=b||Ma(g.$a(a))||(wo(this,a).g=new no(b,0,0,!0))},a)};
xo=function(a,b){return a.o?!1:(0,g.El)(a.g.Fb(),function(a){return!!a.g&&a.g.getId()==b})};
yo=function(){var a=vo();if(a.o)return"";var b=[];(0,g.G)(a.g.Fb(),function(a){(a=a.g)&&a.o&&b.push(a.getId())});
return b.sort().join(",")};
wo=function(a,b){var c=a.g.get(b);null==c&&(c=new oo(b),a.g.set(b,c));return c};
Ao=function(){var a=[],b=vo();(0,g.G)(zo,function(c){(c=(c=wo(b,c))?c.g:null)&&a.push(c.getId())});
return a};
Do=function(a){try{var b=(new g.Hn(a)).g;b=b.replace(/^www./i,"");return(0,g.El)(Bo,function(a){return Co(a,b)})}catch(c){return!1}};
Co=function(a,b){if(Ma(g.$a(b)))return!1;a=a.toLowerCase();b=b.toLowerCase();return"*."==a.substr(0,2)?(a=a.substr(2),a.length>b.length?!1:b.substr(-a.length)==a&&(b.length==a.length||"."==b.charAt(b.length-a.length-1))):a==b};
Eo=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};
Io=function(a){try{a:{var b=a,c=void 0,d=b.length-11-2;if(!(-1==b.indexOf("URL_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray)){c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray();d={};for(var e=0;e<c.length;++e){d.URL_SIGNALS=c[e];var f=g.fo(b,d);if(2048>f.length){a=f;break a}}}a=b}}catch(n){}try{f=a;b=!1;Eo(f,Fo)?b=!1:null!=f&&Do(f)?b=!0:"https:"==window.location.protocol&&(Eo(f,Go)||mo.g())&&(b=!0);if(b){var k=new g.Hn(f);"https"==k.B?a=f:(In(k,"https"),a=k.toString())}else a=
f;var l=vo(),m=!mo.g()||xo(l,41351089);k=!1;mo.g()||!xo(vo(),634360102)||(k=!0);Ho.qH(a,m,k)}catch(n){}};
g.Lo=function(a,b,c){g.ta(a)?(this.date=Jo(a,b||0,c||1),Ko(this,c||1)):g.Da(a)?(this.date=Jo(a.getFullYear(),a.getMonth(),a.getDate()),Ko(this,a.getDate())):(this.date=new Date((0,g.F)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Ko(this,a))};
Jo=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
g.Mo=function(a){a=a.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b);b=60*(b-c);a=(0<a?"-":"+")+g.Za(c,2)+":"+g.Za(b,2)}return a};
Ko=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
No=function(){this.g=null;this.A="";this.o=null};
Po=function(){var a="h."+Oo.A;null!=Oo.o&&(a+="/n."+Oo.o,null!=Oo.g&&(a+="/"+Oo.g));return a};
Qo=function(){this.g=.01>Math.random();this.o=Math.floor(4503599627370496*Math.random())};
To=function(a,b,c){if(a.g||c){b=b||{};b.lid=43;b.sdkv=Po();c=yo();Ma(g.$a(c))||(b.e=c);b=Ro(a,b);var d=new g.Hn("http://pagead2.googlesyndication.com/pagead/gen_204");g.Tb(b,function(a,b){g.Rn(d,b,null!=a?"boolean"==typeof a?a?"t":"f":""+a:"")},a);
a=So();In(d,a.B);Io(d.toString())}};
Ro=function(a,b){b.id="ima_html5";var c=So();b.c=a.o;b.domain=c.g;return b};
So=function(){var a=zd(),b=window.document;return new g.Hn(a.parent==a?a.location.href:b.referrer)};
Uo=function(){g.rf.call(this);this.g=new Cn;this.o=null;this.A=new g.ao(this);g.J(this,this.A);this.C=null;this.B=-1};
Wo=function(){null!=Vo||(Vo=new Uo);return Vo};
Xo=function(){Wo().dispatchEvent(new go("measurable_impression"))};
Yo=function(){Wo().dispatchEvent(new go("viewable_impression"))};
Zo=function(){Wo().dispatchEvent(new go("externalActivityEvent"))};
$o=function(){g.rf.call(this);this.g=null;this.B=new g.ao(this);g.J(this,this.B);this.F=new Cn;this.D=new Cn;this.o=!1;this.A=null};
bp=function(){null!=ap||(ap=new $o);return ap};
cp=function(a){if(g.Ca(window.Goog_AdSense_Lidar_getUrlSignalsArray)){var b={};b.pageSignals=window.Goog_AdSense_Lidar_getUrlSignalsArray();a.g.send("activityMonitor","pageSignals",b)}};
dp=function(){if(!(g.w.ima&&g.w.ima.video&&g.w.ima.video.client&&g.w.ima.video.client.tagged)){g.x("ima.video.client.sdkTag",!0,void 0);var a=g.w.document,b=a.createElement("script"),c=a.location.protocol;"http:"!=c&&"https:"!=c&&(c="");b.src=c+"//s0.2mdn.net/instream/video/client.js";b.async=!0;b.type="text/javascript";a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}};
ep=function(a,b,c){var d=b?a.D.get(b):mo.A;a={};null!=c&&(a.fullscreen=c);c="";try{c=Rh(function(){return d},a)}catch(e){c="sdktle;"+Wa(e.name,12)+";"+Wa(e.message,40)}return c};
g.fp=function(a){this.g="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};
g.gp=function(a,b){var c=a.o(b);return-1==(0==c?a.g:c)?"rtl":"ltr"};
hp=function(){throw Error("Do not instantiate directly");};
ip=function(){hp.call(this)};
kp=function(a,b){var c="key_"+a+":"+b,d=jp[c];if(void 0===d||0>d)jp[c]=0;else if(0==d)throw Error('Encountered two active delegates with the same priority ("'+a+":"+b+'").');};
g.lp=function(a){if(a.classList)return a.classList;a=a.className;return g.u(a)&&a.match(/\S+/g)||[]};
g.mp=function(a,b){return a.classList?a.classList.contains(b):g.rb(g.lp(a),b)};
g.L=function(a,b){a.classList?a.classList.add(b):g.mp(a,b)||(a.className+=0<a.className.length?" "+b:b)};
g.np=function(a,b){if(a.classList)(0,g.G)(b,function(b){g.L(a,b)});
else{var c={};(0,g.G)(g.lp(a),function(a){c[a]=!0});
(0,g.G)(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}};
g.M=function(a,b){a.classList?a.classList.remove(b):g.mp(a,b)&&(a.className=(0,g.Md)(g.lp(a),function(a){return a!=b}).join(" "))};
g.op=function(a,b){a.classList?(0,g.G)(b,function(b){g.M(a,b)}):a.className=(0,g.Md)(g.lp(a),function(a){return!g.rb(b,a)}).join(" ")};
g.N=function(a,b,c){c?g.L(a,b):g.M(a,b)};
g.pp=function(a,b){var c=!g.mp(a,b);g.N(a,b,c)};
qp=function(){if(!g.wd)return!1;try{return new window.ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.sp=function(a){if("undefined"!=typeof window.DOMParser)return(new window.DOMParser).parseFromString(a,"application/xml");if(rp){var b=new window.ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.tp=function(a,b,c){g.I.call(this);this.za=null;this.A=!1;this.C=a;this.B=c;this.g=b||window;this.o=(0,g.z)(this.ky,this)};
up=function(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
vp=function(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.O=function(a,b,c){g.I.call(this);this.g=a;this.B=b||0;this.o=c;this.A=(0,g.z)(this.zq,this)};
g.wp=function(a){a.stop();a.zq()};
g.xp=function(a){a.isActive()&&g.wp(a)};
g.Ap=function(){g.yp||(g.yp=new g.O(function(){zp()},20));
var a=g.yp;a.isActive()||a.start()};
zp=function(){var a=(0,g.F)();g.Tb(g.Bp,function(b){b.sD(a)});
g.fc(g.Bp)||g.Ap()};
g.Cp=function(){};
g.Dp=function(a){g.rf.call(this);this.U=a||g.md();this.za=null;this.Sf=!1;this.o=null;this.C=void 0;this.D=this.H=this.J=null};
Ep=function(a,b){a.H&&(0,g.G)(a.H,b,void 0)};
Fp=function(){};
Hp=function(a){var b;(b=a.g)||(b={},Gp(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b};
Ip=function(){};
Jp=function(a){return(a=Gp(a))?new window.ActiveXObject(a):new window.XMLHttpRequest};
Gp=function(a){if(!a.o&&"undefined"==typeof window.XMLHttpRequest&&"undefined"!=typeof window.ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new window.ActiveXObject(d),a.o=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.o};
Kp=function(a){g.rf.call(this);this.headers=new Cn;this.U=a||null;this.o=!1;this.T=this.g=null;this.Z=this.J="";this.B=0;this.C="";this.A=this.aa=this.H=this.V=!1;this.D=0;this.F=null;this.da="";this.N=this.Y=!1};
Lp=function(a){return g.wd&&g.zc(9)&&g.ta(a.timeout)&&g.r(a.ontimeout)};
Mp=function(a){return"content-type"==a.toLowerCase()};
Pp=function(a,b){a.o=!1;a.g&&(a.A=!0,a.g.abort(),a.A=!1);a.C=b;a.B=5;Np(a);Op(a)};
Np=function(a){a.V||(a.V=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
Up=function(a){if(a.o&&"undefined"!=typeof Qp)if(a.T[1]&&4==Rp(a)&&2==a.getStatus())Sp(a,"Local request error detected and ignored");else if(a.H&&4==Rp(a))g.mg(a.Cq,0,a);else if(a.dispatchEvent("readystatechange"),4==Rp(a)){Sp(a,"Request complete");a.o=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Eg(String(a.J))[1]||null;if(!f&&g.w.self&&g.w.self.location){var k=g.w.self.location.protocol;
f=k.substr(0,k.length-1)}e=!Tp.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.B=6;try{var l=2<Rp(a)?a.g.statusText:""}catch(m){l=""}a.C=l+" ["+a.getStatus()+"]";Np(a)}}finally{Op(a)}}};
Op=function(a,b){if(a.g){Vp(a);var c=a.g,d=a.T[0]?g.va:null;a.g=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}};
Vp=function(a){a.g&&a.N&&(a.g.ontimeout=null);g.ta(a.F)&&(g.w.clearTimeout(a.F),a.F=null)};
Rp=function(a){return a.g?a.g.readyState:0};
Wp=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}};
Sp=function(a,b){return b+" ["+a.Z+" "+a.J+" "+a.getStatus()+"]"};
bq=function(a){var b=Xp++,c={Jz:{id:b,te:a.measure,context:void 0},fD:{id:b,te:a.eD,context:void 0},state:{},args:void 0,Kj:!1};return function(){0<arguments.length?(c.args||(c.args=[]),c.args.length=0,c.args.push.apply(c.args,arguments),c.args.push(c.state)):c.args&&0!=c.args.length?(c.args[0]=c.state,c.args.length=1):c.args=[c.state];c.Kj||(c.Kj=!0,Yp[Zp].push(c));$p||($p=!0,window.requestAnimationFrame(aq))}};
aq=function(){$p=!1;var a=Yp[Zp],b=a.length;Zp=(Zp+1)%2;for(var c,d=0;d<b;++d){c=a[d];var e=c.Jz;c.Kj=!1;e.te&&e.te.apply(e.context,c.args)}for(d=0;d<b;++d)c=a[d],e=c.fD,c.Kj=!1,e.te&&e.te.apply(e.context,c.args),c.state={};a.length=0};
cq=function(a,b){this.g=a;this.o=b};
dq=function(a,b,c,d,e,f,k,l){this.g=a;this.F=b;this.A=c;this.C=d;this.B=e;this.D=f;this.o=k;this.H=l};
eq=function(a,b){if(0==b)return a.g;if(1==b)return a.o;var c=ad(a.g,a.A,b),d=ad(a.A,a.B,b),e=ad(a.B,a.o,b);c=ad(c,d,b);d=ad(d,e,b);return ad(c,d,b)};
fq=function(a,b){var c=(b-a.g)/(a.o-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){f=eq(a,c);var l=(eq(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=eq(a,c);return c};
gq=function(a,b,c,d){this.B=a;this.C=b;this.g=this.A=a;this.D=c||0;this.F=d||2};
hq=function(a,b,c,d,e){this.g=a;this.A=c;this.H=d;this.F=e||1;this.C=45E3;this.B=new g.ao(this);a=this.o=new g.lg;a.o=250;a.md&&a.enabled?(a.stop(),a.start()):a.md&&a.stop()};
jq=function(a,b,c){a.Bg=1;a.We=Un(b.clone());a.ig=c;a.D=!0;iq(a,null)};
oq=function(a,b,c,d,e){a.Bg=1;a.We=Un(b.clone());a.ig=null;a.D=c;e&&(a.Ku=!1);iq(a,d)};
iq=function(a,b){a.li=(0,g.F)();pq(a);a.qf=a.We.clone();Tn(a.qf,"t",a.F);a.yi=0;a.Qb=a.g.Gl(a.g.pi()?b:null);0<a.gm&&(a.jk=new g.ol((0,g.z)(a.Cv,a,a.Qb),a.gm));a.B.ba(a.Qb,"readystatechange",a.bH);var c=a.Pf?g.ic(a.Pf):{};a.ig?(a.Ik="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Qb.send(a.qf,a.Ik,a.ig,c)):(a.Ik="GET",a.Ku&&!g.yd&&(c.Connection="close"),a.Qb.send(a.qf,a.Ik,null,c));a.g.Hd(1)};
xq=function(a,b,c){for(var d=!0;!a.Ff&&a.yi<c.length;){var e=qq(a,c);if(e==rq){4==b&&(a.Qf=4,sq(),d=!1);break}else if(e==tq){a.Qf=4;sq();d=!1;break}else uq(a,e)}4==b&&0==c.length&&(a.Qf=1,sq(),d=!1);a.Jd=a.Jd&&d;d||(vq(a),wq(a))};
qq=function(a,b){var c=a.yi,d=b.indexOf("\n",c);if(-1==d)return rq;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return tq;d+=1;if(d+c>b.length)return rq;var e=b.substr(d,c);a.yi=d+c;return e};
Aq=function(a,b){a.li=(0,g.F)();pq(a);var c=b?window.location.hostname:"";a.qf=a.We.clone();g.Rn(a.qf,"DOMAIN",c);g.Rn(a.qf,"t",a.F);try{a.Ld=new window.ActiveXObject("htmlfile")}catch(n){vq(a);a.Qf=7;sq();wq(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in yq)k=yq[l];else if(l in zq)k=yq[l]=zq[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k=
"\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=yq[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Yc(Fc("b/12014412"),d);a.Ld.open();a.Ld.write(g.Uc(c));a.Ld.close();a.Ld.parentWindow.m=(0,g.z)(a.qG,a);a.Ld.parentWindow.d=(0,g.z)(a.cu,a,!0);a.Ld.parentWindow.rpcClose=(0,g.z)(a.cu,a,!1);c=a.Ld.createElement("DIV");a.Ld.parentWindow.document.body.appendChild(c);d=Qc(a.qf.toString());d=Va(Nc(d));d=Yc(Fc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=
g.Uc(d);a.g.Hd(1)};
pq=function(a){a.uo=(0,g.F)()+a.C;Bq(a,a.C)};
Bq=function(a,b){if(null!=a.eh)throw Error("WatchDog timer not null");a.eh=Cq((0,g.z)(a.AG,a),b)};
Dq=function(a){a.eh&&(g.w.clearTimeout(a.eh),a.eh=null)};
wq=function(a){a.g.Aq()||a.Ff||a.g.ck(a)};
vq=function(a){Dq(a);g.Ke(a.jk);a.jk=null;a.o.stop();bo(a.B);if(a.Qb){var b=a.Qb;a.Qb=null;b.abort();b.dispose()}a.Ld&&(a.Ld=null)};
uq=function(a,b){try{a.g.Wt(a,b),a.g.Hd(4)}catch(c){}};
Fq=function(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Eq(a,b,function(e){e?c(!0):g.w.setTimeout(function(){Fq(a,b,c,d,f)},f)})}};
Eq=function(a,b,c){var d=new window.Image;d.onload=function(){try{Gq(d),c(!0)}catch(e){}};
d.onerror=function(){try{Gq(d),c(!1)}catch(e){}};
d.onabort=function(){try{Gq(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Gq(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a};
Gq=function(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null};
Hq=function(a){this.g=a;this.o=new cq};
Jq=function(a){var b=Iq(a.g,a.lh,"/mail/images/cleardot.gif");Un(b);Fq(b.toString(),5E3,(0,g.z)(a.Gx,a),3,2E3);a.Hd(1)};
Lq=function(a){var b=a.g.K;if(null!=b)sq(),b?(sq(),Kq(a.g,a,!1)):(sq(),Kq(a.g,a,!0));else if(a.bd=new hq(a,0,void 0,void 0,void 0),a.bd.Pf=a.Zl,b=a.g,b=Iq(b,b.pi()?a.Gh:null,a.fm),sq(),!g.wd||g.Bc(10))Tn(b,"TYPE","xmlhttp"),oq(a.bd,b,!1,a.Gh,!1);else{Tn(b,"TYPE","html");var c=a.bd;a=!!a.Gh;c.Bg=3;c.We=Un(b.clone());Aq(c,a)}};
Mq=function(a,b,c,d){this.H=a||null;this.g=1;this.o=[];this.B=[];this.C=new cq;this.J=b||null;this.K=null!=c?c:null;this.D=d||!1};
Nq=function(a,b){this.g=a;this.map=b;this.context=null};
Oq=function(a){g.Me.call(this,"statevent",a)};
Pq=function(a,b){g.Me.call(this,"timingevent",a);this.size=b};
Qq=function(a){g.Me.call(this,"serverreachability",a)};
Uq=function(a){Rq(a);if(3==a.g){var b=a.fi++,c=a.rj.clone();g.Rn(c,"SID",a.A);g.Rn(c,"RID",b);g.Rn(c,"TYPE","terminate");Sq(a,c);b=new hq(a,0,a.A,b,void 0);b.Bg=2;b.We=Un(c.clone());(new window.Image).src=b.We;b.li=(0,g.F)();pq(b)}Tq(a)};
Wq=function(a){a.Sx(1,0);a.rj=Iq(a,null,a.Yl);Vq(a)};
Rq=function(a){a.Re&&(a.Re.abort(),a.Re=null);a.Eb&&(a.Eb.cancel(),a.Eb=null);a.se&&(g.w.clearTimeout(a.se),a.se=null);Xq(a);a.Hc&&(a.Hc.cancel(),a.Hc=null);a.Te&&(g.w.clearTimeout(a.Te),a.Te=null)};
Yq=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");a.o.push(new Nq(a.iD++,b));2!=a.g&&3!=a.g||Vq(a)};
Vq=function(a){a.Hc||a.Te||(a.Te=Cq((0,g.z)(a.au,a),0),a.vh=0)};
ar=function(a,b){if(1==a.g){if(!b){a.fi=Math.floor(1E5*Math.random());var c=a.fi++,d=new hq(a,0,"",c,void 0);d.Pf=null;var e=Zq(a),f=a.rj.clone();g.Rn(f,"RID",c);a.H&&g.Rn(f,"CVER",a.H);Sq(a,f);jq(d,f,e);a.Hc=d;a.g=2}}else 3==a.g&&(b?$q(a,b):0==a.o.length||a.Hc||$q(a))};
$q=function(a,b){if(b)if(6<a.Gf){a.o=a.B.concat(a.o);a.B.length=0;var c=a.fi-1;var d=Zq(a)}else c=b.H,d=b.ig;else c=a.fi++,d=Zq(a);var e=a.rj.clone();g.Rn(e,"SID",a.A);g.Rn(e,"RID",c);g.Rn(e,"AID",a.Eg);Sq(a,e);c=new hq(a,0,a.A,c,a.vh+1);c.Pf=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Hc=c;jq(c,e,d)};
Sq=function(a,b){if(a.dc){var c=a.dc.mq(a);c&&g.Tb(c,function(a,c){g.Rn(b,c,a)})}};
Zq=function(a){var b=Math.min(a.o.length,1E3),c=["count="+b];if(6<a.Gf&&0<b){var d=a.o[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.o[e].g,k=a.o[e].map;f=6>=a.Gf?e:f-d;try{g.Tb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.B=a.B.concat(a.o.splice(0,b));
return c.join("&")};
br=function(a){a.Eb||a.se||(a.F=1,a.se=Cq((0,g.z)(a.Zt,a),0),a.vg=0)};
dr=function(a){if(a.Eb||a.se||3<=a.vg)return!1;a.F++;a.se=Cq((0,g.z)(a.Zt,a),cr(a,a.vg));a.vg++;return!0};
Kq=function(a,b,c){a.Hk=c;a.Bd=b.we;a.D||Wq(a)};
Xq=function(a){null!=a.If&&(g.w.clearTimeout(a.If),a.If=null)};
cr=function(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b};
fr=function(a,b){if(2==b||9==b){var c=null;a.dc&&(c=null);var d=(0,g.z)(a.AH,a);c||(c=new g.Hn("//www.google.com/images/cleardot.gif"),Un(c));Eq(c.toString(),1E4,d)}else sq();er(a,b)};
er=function(a,b){a.g=0;a.dc&&a.dc.xp(a,b);Tq(a);Rq(a)};
Tq=function(a){a.g=0;a.Bd=-1;if(a.dc)if(0==a.B.length&&0==a.o.length)a.dc.Cl(a);else{var b=g.Ab(a.B),c=g.Ab(a.o);a.B.length=0;a.o.length=0;a.dc.Cl(a,b,c)}};
Iq=function(a,b,c){var d=g.Vn(c);if(""!=d.g)b&&g.Jn(d,b+"."+d.g),g.Kn(d,d.C);else{var e=window.location;d=Wn(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.sh&&g.Tb(a.sh,function(a,b){g.Rn(d,b,a)});
g.Rn(d,"VER",a.Gf);Sq(a,d);return d};
Cq=function(a,b){if(!g.Ca(a))throw Error("Fn must not be null and must be a function");return g.w.setTimeout(function(){a()},b)};
sq=function(){gr.dispatchEvent(new Oq(gr))};
hr=function(){};
g.ir=function(a,b,c,d,e,f){a=a.clone();b=b.clone();var k=0;if(d||0!=c)c&4?a.x-=b.width+(d?d.right:0):c&2?a.x-=b.width/2:d&&(a.x+=d.left),c&1?a.y-=b.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){k=a;c=b;d=0;65==(f&65)&&(k.x<e.left||k.x>=e.right)&&(f&=-2);132==(f&132)&&(k.y<e.top||k.y>=e.bottom)&&(f&=-5);k.x<e.left&&f&1&&(k.x=e.left,d|=1);if(f&16){var l=k.x;k.x<e.left&&(k.x=e.left,d|=4);k.x+c.width>e.right&&(c.width=Math.min(e.right-k.x,l+c.width-e.left),c.width=Math.max(c.width,0),d|=4)}k.x+c.width>
e.right&&f&1&&(k.x=Math.max(e.right-c.width,e.left),d|=1);f&2&&(d|=(k.x<e.left?16:0)|(k.x+c.width>e.right?32:0));k.y<e.top&&f&4&&(k.y=e.top,d|=2);f&32&&(l=k.y,k.y<e.top&&(k.y=e.top,d|=8),k.y+c.height>e.bottom&&(c.height=Math.min(e.bottom-k.y,l+c.height-e.top),c.height=Math.max(c.height,0),d|=8));k.y+c.height>e.bottom&&f&4&&(k.y=Math.max(e.bottom-c.height,e.top),d|=2);f&8&&(d|=(k.y<e.top?64:0)|(k.y+c.height>e.bottom?128:0));e=d}else e=256;k=e}e=new g.ch(0,0,0,0);e.left=a.x;e.top=a.y;e.width=b.width;
e.height=b.height;return{rect:e,status:k}};
g.jr=function(a){g.I.call(this);this.Lc=1;this.A=[];this.B=0;this.g=[];this.o={};this.C=!!a};
kr=function(a,b,c){g.Kf(function(){a.apply(b,c)})};
g.lr=function(a){this.g=a};
mr=function(a){this.g=a};
nr=function(a){this.data=a};
or=function(a){return!g.r(a)||a instanceof nr?a:new nr(a)};
pr=function(a){this.g=a};
g.qr=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.F)()||!!b&&b>(0,g.F)()};
g.rr=function(a){this.g=a};
sr=function(){};
tr=function(){};
ur=function(a){this.g=a};
vr=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
wr=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
xr=function(a,b){this.o=a;this.g=b+"::"};
g.yr=function(a){var b=new vr;return b.isAvailable()?a?new xr(b,a):b:null};
zr=function(a,b){this.Lc=a;this.g=b};
Ar=function(a){this.g=[];if(a)a:{if(a instanceof Ar){var b=a.Sc();a=a.Fb();if(0>=this.yd()){for(var c=this.g,d=0;d<b.length;d++)c.push(new zr(b[d],a[d]));break a}}else b=g.$b(a),a=g.Zb(a);for(d=0;d<b.length;d++)Br(this,b[d],a[d])}};
Br=function(a,b,c){var d=a.g;d.push(new zr(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].Lc>c.Lc)a[b]=a[d],b=d;else break;a[b]=c};
Cr=function(){Ar.call(this)};
Dr=function(a,b){this.C=[];this.T=a;this.N=b||null;this.B=this.g=!1;this.A=void 0;this.J=this.U=this.F=!1;this.D=0;this.o=null;this.H=0};
Fr=function(a,b,c){a.g=!0;a.A=c;a.B=!b;Er(a)};
Hr=function(a){if(a.g){if(!a.J)throw new Gr;a.J=!1}};
Ir=function(a,b,c){a.C.push([b,c,void 0]);a.g&&Er(a)};
Jr=function(a){return(0,g.El)(a.C,function(a){return g.Ca(a[1])})};
Er=function(a){if(a.D&&a.g&&Jr(a)){var b=a.D,c=Kr[b];c&&(g.w.clearTimeout(c.za),delete Kr[b]);a.D=0}a.o&&(a.o.H--,delete a.o);b=a.A;for(var d=c=!1;a.C.length&&!a.F;){var e=a.C.shift(),f=e[0],k=e[1];e=e[2];if(f=a.B?k:f)try{var l=f.call(e||a.N,b);g.r(l)&&(a.B=a.B&&(l==b||a.isError(l)),a.A=b=l);if(Nf(b)||"function"===typeof g.w.Promise&&b instanceof g.w.Promise)d=!0,a.F=!0}catch(m){b=m,a.B=!0,Jr(a)||(c=!0)}}a.A=b;d&&(l=(0,g.z)(a.K,a,!0),d=(0,g.z)(a.K,a,!1),b instanceof Dr?(Ir(b,l,d),b.U=!0):b.then(l,
d));c&&(b=new Lr(b),Kr[b.za]=b,a.D=b.za)};
Gr=function(){Ka.call(this)};
Mr=function(){Ka.call(this)};
Lr=function(a){this.za=g.w.setTimeout((0,g.z)(this.o,this),0);this.g=a};
Nr=function(a){ze(this,a,null)};
Or=function(a,b){for(;se(b)&&4!=b.o;)switch(b.A){case 1:var c=ue(b);Ee(a,1,c);break;case 2:c=ve(b);Ee(a,2,c);break;default:te(b)}return a};
Qr=function(a){ze(this,a,Pr)};
Rr=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Tr=function(a){Rr(g.Sr,arguments)};
g.P=function(a,b){return a in g.Sr?g.Sr[a]:b};
g.Q=function(a,b,c){b=void 0===b?{}:b;a=(a=a in Ur?Ur[a]:c)||"";c={};for(var d in b)c.gk=d,a=a.replace(new RegExp("\\$"+c.gk,"gi"),function(a){return function(){return b[a.gk]}}(c)),c={gk:c.gk};
return a};
g.Vr=function(a){Rr(Ur,arguments)};
g.Wr=function(){g.Vr({YTP_TRANSLATE_MENU_ITEM:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b",YTP_CONTRIBUTE_MENU_ITEM:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b",YTP_ASR_SETTINGS_LABEL:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0438\u0442\u0440\u044b",YTP_LANGUAGE_OFF:"\u0412\u044b\u043a\u043b.",
YTP_FONT_FAMILY:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0448\u0440\u0438\u0444\u0442\u043e\u0432",YTP_FONT_SIZE:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",YTP_FONT_COLOR:"\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430",YTP_FONT_OPACITY:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u0430",YTP_BACKGROUND_COLOR:"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430",YTP_BACKGROUND_OPACITY:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0444\u043e\u043d\u0430",
YTP_WINDOW_COLOR:"\u0426\u0432\u0435\u0442 \u043e\u043a\u043d\u0430",YTP_WINDOW_OPACITY:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u043a\u043d\u0430",YTP_COLOR_WHITE:"\u0411\u0435\u043b\u044b\u0439",YTP_COLOR_YELLOW:"\u0416\u0435\u043b\u0442\u044b\u0439",YTP_COLOR_GREEN:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",YTP_COLOR_CYAN:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",YTP_COLOR_BLUE:"\u0421\u0438\u043d\u0438\u0439",YTP_COLOR_MAGENTA:"\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439",
YTP_COLOR_RED:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",YTP_COLOR_BLACK:"\u0427\u0435\u0440\u043d\u044b\u0439",YTP_FONT_FAMILY_MONO_SERIF:"\u041c\u043e\u043d\u043e\u0448\u0438\u0440\u0438\u043d\u043d\u044b\u0439 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438",YTP_FONT_FAMILY_PROP_SERIF:"\u041f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438",YTP_FONT_FAMILY_MONO_SANS:"\u041c\u043e\u043d\u043e\u0448\u0438\u0440\u0438\u043d\u043d\u044b\u0439 \u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043a",
YTP_FONT_FAMILY_PROP_SANS:"\u041f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043a",YTP_FONT_FAMILY_CASUAL:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439",YTP_FONT_FAMILY_CURSIVE:"\u041a\u0443\u0440\u0441\u0438\u0432",YTP_FONT_FAMILY_SMALL_CAPS:"\u041c\u0430\u043b\u044b\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u044b\u0435",YTP_CHAR_EDGE_STYLE:"\u0421\u0442\u0438\u043b\u044c \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
YTP_EDGE_STYLE_NONE:"\u0411\u0435\u0437 \u043a\u043e\u043d\u0442\u0443\u0440\u0430",YTP_EDGE_STYLE_RAISED:"\u041f\u0440\u0438\u043f\u043e\u0434\u043d\u044f\u0442\u044b\u0439",YTP_EDGE_STYLE_DEPRESSED:"\u0423\u0442\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439",YTP_EDGE_STYLE_OUTLINE:"\u0413\u0440\u0430\u043d\u0438\u0446\u044b",YTP_EDGE_STYLE_DROP_SHADOW:"\u0421 \u0442\u0435\u043d\u044c\u044e",YTP_CLICK_FOR_SETTINGS:"\u0414\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a $GEAR_ICON"})};
g.Yr=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-cast-desktop-on"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
g.Zr=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-chevron-back"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},I:[{G:"path",P:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.$r=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-chevron-forward"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},I:[{G:"path",P:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
as=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-clip-clear"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},I:[{G:"path",P:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{G:"path",P:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
bs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-clip-end"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
cs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-clip-start"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.ds=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-close"]}:{G:"svg",P:{height:"100%",viewBox:"0 0 24 24",width:"100%"},I:[{G:"path",P:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
es=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-forward-five-seconds"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}};
fs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-link"]}:{G:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",P:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
gs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-next"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.hs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-notifications-active"]}:{G:"svg",P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},I:[{G:"path",P:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
is=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-pause"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
js=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-play"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
ks=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-prev"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
ls=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-replay"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M17,9 C12,9 8,13 8,18 C8,23 12,27 17,27 C19.5,27 21.82,25.95 23.45,24.26 L22.04,22.85 C20.77,24.17 19,25 17,25 C13,25 10,21.86 10,18 C10,14.13 13.13,11 17,11 C20.86,11 24,14 24,18 L21,18 L25,22 L29,18 L26,18 C26,13 22,9 17,9 Z"}}]}};
ms=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}};
g.ns=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-settings"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
os=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-stop"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
ps=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-subtitles"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z",fill:"#fff"}}]}};
qs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-volume-high"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
rs=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-volume-low"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
ts=function(){return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-volume-muted"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
vs=function(a){a=a.split("");us.JR(a,77);us.km(a,70);us.km(a,7);us.JR(a,70);us.rf(a,2);us.JR(a,13);us.rf(a,3);return a.join("")};
g.ws=function(a,b){var c=g.y("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=g.P("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),g.Tr("ERRORS",c))};
xs=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.ws(b)}}:a};
zs=function(){if(!ys)return null;var a=ys();return"open"in a?a:null};
g.As=function(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Bs=function(a){window.clearInterval(a)};
g.Cs=function(a){window.clearTimeout(a)};
g.Ds=function(a,b){g.Ca(a)&&(a=xs(a));return window.setInterval(a,b)};
g.Es=function(a,b){g.Ca(a)&&(a=xs(a));return window.setTimeout(a,b)};
g.Fs=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=Na(e[0]||"");e=Na(e[1]||"");f in b?g.za(b[f])?Bb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Gs=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return g.Fs(a)};
Hs=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Gs(e[1]||"");for(var f in b)if(c||!bc(e,f))e[f]=b[f];return g.Rg(a,e)+d};
g.Is=function(a,b){return Hs(a,b||{},!1)};
Js=function(){if(!a)var a=window.document.location.href;a=g.Eg(a)[1]||null;return null!==a&&"https"==a};
Ks=function(a){if(!b)var b=window.location.href;var c=g.Eg(a)[1]||null,d=g.Gg(a);c&&d?(a=g.Eg(a),b=g.Eg(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Gg(b)==d&&g.Hg(b)==g.Hg(a):!0;return a};
g.Ls=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.Gs(1<a.length?a[1]:a[0])):{}};
Ms=function(a){a=a.split(",");return a=a.map(function(a){return g.Gs(a)})};
g.Ns=function(a,b){return Hs(a,b||{},!0)};
Ps=function(a,b){b=void 0===b?{}:b;var c=Ks(a),d;for(d in Os){var e=g.P(Os[d]),f;if((f=e)&&!(f=c)){var k=a;f=d;var l=g.P("CORS_HEADER_WHITELIST")||{};f=(k=g.Gg(k))?(l=l[k])?g.rb(l,f):!1:!0}f&&(b[d]=e)}return b};
Qs=function(a,b){var c=g.P("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.GL&&(!g.Gg(a)||b.withCredentials||g.Gg(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.kb&&b.kb[c])};
g.Us=function(a,b){var c=b.format||"JSON";b.HL&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.P("XSRF_FIELD_NAME",void 0),e=g.P("XSRF_TOKEN",void 0),f=b.Wb;f&&(f[d]&&delete f[d],a=g.Ns(a,f));f=b.postBody||"";var k=b.kb;Qs(a,b)&&(k||(k={}),k[d]=e);k&&g.u(f)&&(d=g.Gs(f),g.lc(d,k),f=b.lu&&"JSON"==b.lu?JSON.stringify(d):g.Mg(d));d=f||k&&!g.fc(k);!Rs&&d&&"POST"!=b.method&&(Rs=!0,g.ws(Error("AJAX request with postData should use POST")));
var l=!1,m,n=Ss(a,function(a){if(!l){l=!0;m&&g.Cs(m);var d=g.As(a),e=null;if(d||400<=a.status&&500>a.status)e=Ts(c,a,b.EL);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||g.w;d?b.rb&&b.rb.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Nc&&b.Nc.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.Oc&&0<b.timeout&&(m=g.Es(function(){l||(l=!0,n.abort(),g.Cs(m),b.Oc.call(b.context||g.w,n))},b.timeout));
return n};
Ts=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Vs(b):null)d={},(0,g.G)(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ws(a)})}c&&Xs(d);
return d};
Xs=function(a){if(g.Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Yc(Fc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Xs(a[b])}};
Vs=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Ws=function(a){var b="";(0,g.G)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Ys=function(a,b){b.method="POST";b.kb||(b.kb={});g.Us(a,b)};
Ss=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&xs(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=zs();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c;if(e=Ps(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
g.$s=function(){return Zs("cobalt")};
Zs=function(a){var b=g.Rb;return b?0<=b.toLowerCase().indexOf(a):!1};
at=function(){return Zs("android")&&Zs("chrome")&&!(Zs("trident/")||Zs("edge/"))};
ct=function(){return g.bt&&Zs("crkey")};
dt=function(){return Zs("(ps3; leanback shell)")||Zs("ps3")&&g.$s()};
et=function(){return Zs("(ps4; leanback shell)")||Zs("ps4")&&g.$s()};
ft=function(){var a=/WebKit\/([0-9]+)/.exec(g.Rb);return!!(a&&600<=(0,window.parseInt)(a[1],10))};
gt=function(){return Zs("iemobile")||Zs("windows phone")&&Zs("edge")};
g.it=function(a,b,c){a&&(c&&!g.$s()?a&&(a=g.Cd("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.kd(a).body.appendChild(a)):g.P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Ss(a,b):ht(a,b))};
ht=function(a,b){var c=new window.Image,d=""+jt++;kt[d]=c;c.onload=c.onerror=function(){b&&kt[d]&&b();delete kt[d]};
c.src=a};
lt=function(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.it(a,void 0)}catch(b){g.it(a,void 0)}};
g.mt=function(a){return g.P("EXPERIMENT_FLAGS",{})[a]};
ot=function(a,b){var c=g.ic(b);return new g.Pf(function(b,e){c.rb=function(a){g.As(a)?b(a):e(new nt("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){e(new nt("Unknown request error","net.unknown",a))};
c.Oc=function(a){e(new nt("Request timed out","net.timeout",a))};
g.Us(a,c)})};
nt=function(a,b,c){Ka.call(this,a+", errorCode="+b);this.errorCode=b;this.g=c;this.name="PromiseAjaxError"};
pt=function(a,b,c,d){function e(d,l,m){return g.bg(d,function(d){return 0>=l||403===d.g.status?Uf(new nt("Request retried too many times","net.retryexhausted",d.g)):f(m).then(function(){return e(ot(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(a){return new g.Pf(function(b){(0,window.setTimeout)(b,a)})}
return e(ot(a,b),c-1,d)};
qt=function(a){this.A=void 0===a?null:a;this.o=0;this.g=null};
rt=function(a){var b=new qt;a=void 0===a?null:a;b.o=2;b.g=void 0===a?null:a;return b};
tt=function(a){var b=new qt;a=void 0===a?null:a;b.o=1;b.g=void 0===a?null:a;return b};
xt=function(a){Ka.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ut;this.isTimeout=a instanceof vt&&a.errorCode==wt.TIMEOUT;this.isCanceled=a instanceof gg};
ut=function(){Ka.call(this,"Biscotti ID is missing from server")};
zt=function(){return g.ac(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||g.P("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||g.mt("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id"};
Et=function(){if("1"===g.ac(g.P("PLAYER_CONFIG",{}),"args","privembed"))return Uf(Error("Biscotti ID is not available in private embed mode"));At||(At=g.bg(ot(zt(),Bt).then(Ct),function(a){return Dt(2,a)}));
return At};
Ct=function(a){a=a.responseText;if(!g.La(a,")]}'"))throw new ut;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ut;a=a.id;Ft(a);At=tt(a);Gt(18E5,2);return a};
Dt=function(a,b){var c=new xt(b);Ft("");At=rt(c);0<a&&Gt(12E4,a-1);throw c;};
Gt=function(a,b){g.Es(function(){g.bg(ot(zt(),Bt).then(Ct,function(a){return Dt(b,a)}),g.va)},a)};
Ft=function(a){g.x("yt.ads.biscotti.lastId_",a,void 0)};
Ht=function(){try{var a=g.y("yt.ads.biscotti.getId_");return a?a():Et()}catch(b){return Uf(b)}};
g.Jt=function(a){return It[a]||(It[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Kt=function(a,b){return a?a.dataset?a.dataset[g.Jt(b)]:a.getAttribute("data-"+b):null};
g.Lt=function(a,b,c){a&&(a.dataset?a.dataset[g.Jt(b)]=String(c):a.setAttribute("data-"+b,c))};
Mt=function(a,b){var c;(0,g.El)(a,function(a){c=b[a];return!!c});
return c};
Ot=function(a,b){if(a in b)return b[a];var c=Nt+a.charAt(0).toUpperCase()+a.substr(1);if(c in b)return b[c]};
Pt=function(){return!!Mt(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],window.document)};
g.Qt=function(){var a=Mt(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],window.document);return a?a:null};
Rt=function(a){var b;Pt()?g.Qt()==a&&(b=window.document):b=a;b&&(a=Mt(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))&&a.call(b)};
St=function(){var a=window.document;return g.nb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
Tt=function(a){return g.nb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Vt=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ut||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?
b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}};
Xt=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return cc(Wt,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.Zt=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Xt(a,b,c,d);if(e)return e;e=++Yt.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new Vt(d);if(!g.Xd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Vt(b);
b.currentTarget=a;return c.call(a,b)};
k=xs(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Wt[e]=[a,b,c,k,d];return e};
g.$t=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.G)(a,function(a){if(a in Wt){var b=Wt[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Wt[a]}}))};
g.au=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
g.bu=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
cu=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;window.document.body&&window.document.documentElement&&(g.ta(b)||(b=a.clientX+window.document.body.scrollLeft+window.document.documentElement.scrollLeft),g.ta(c)||(c=a.clientY+window.document.body.scrollTop+window.document.documentElement.scrollTop));return new g.ed(b,c)};
du=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
eu=function(a){a=a||window.event;return a.path&&a.path.length?a.path[0]:g.au(a)};
g.fu=function(a){a=a||window.event;return!1===a.returnValue||a.Wq&&a.Wq()};
g.gu=function(a,b,c){var d;return d=g.Zt(a,b,function(){g.$t(d);c.apply(a,arguments)},!1)};
g.hu=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.iu=function(a){g.I.call(this);this.T=[];this.Cb=a||this};
ju=function(a,b,c,d){for(var e=0;e<c.length;e++)a.O(b,c[e],d)};
g.ku=function(a){for(;a.T.length;){var b=a.T.pop();b.target.removeEventListener(b.name,b.Xi)}};
g.R=function(){g.I.call(this);this.da=new g.jr;g.J(this,this.da)};
g.mu=function(a,b,c,d){g.R.call(this);this.A=!!b;this.D=a;this.J=c||a;this.H=!!d;this.g=new g.iu(this);g.J(this,this.g);this.C=this.F=null;this.B=this.o=!1;b&&(g.yd&&a.setAttribute("draggable","true"),a.style.touchAction="none");lu(this)};
nu=function(a,b,c){a.g.O(a.J,b,c,void 0,!a.A)};
lu=function(a){a.C=null;a.F=null;nu(a,ou("over"),a.xr);nu(a,"touchstart",a.Ym);a.A&&nu(a,ou("down"),a.aD)};
pu=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.F)return d}return null};
ou=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
uu=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.ic(qu);this.assets=a.assets||{};this.attrs=a.attrs||g.ic(ru);this.params=a.params||g.ic(tu);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
vu=function(a){a instanceof uu||(a=new uu(a));return a};
wu=function(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&g.it(c.data.follow_on_url)}};
g.xu=function(a,b,c){this.A=a;this.B=b;this.o=c;this.g=void 0};
g.Cu=function(a,b,c){var d=g.yu();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){g.zu[e]&&b.apply(c||window,d)};
try{Au[a]?k():g.Es(k,0)}catch(l){g.ws(l)}},c);
g.zu[e]=!0;g.Bu[a]||(g.Bu[a]=[]);g.Bu[a].push(e);return e}return 0};
g.Du=function(a){var b=g.yu();b&&(g.ta(a)?a=[a]:g.u(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete g.zu[a]}))};
g.yu=function(){return g.y("ytPubsubPubsubInstance")};
g.Eu=function(a,b){var c=g.yu();return c?c.publish.apply(c,arguments):!1};
g.Fu=function(a,b){Au[a]=!0;var c=g.yu();c&&c.publish.apply(c,arguments);Au[a]=!1};
g.Lu=function(a,b){Gu[a.endpoint]=b;if(a.gj){var c=a.gj;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Hu[a.gj.token]=d;c=Iu(a.endpoint,a.gj.token)}else c=Iu(a.endpoint);c.push(a.ku);d=g.mt("web_logging_max_batch");c.length>=(Number(d||0)||20)?Ju():Ku()};
Ju=function(){g.Cs(Mu);if(!g.fc(Nu)){for(var a in Nu){var b=Ou[a];if(!b){var c=Gu[a];if(!c)continue;b=new c;Ou[a]=b}c=void 0;var d=a,e=b,f=Pu[d],k=Qu[d]||{};Qu[d]=k;b=Math.round((0,g.Ru)());for(c in Nu[d]){var l={context:g.Su(e.g)};l[f]=Iu(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=Hu[c];if(m)a:{var n=l,q=c;if(m.videoId)var t="VIDEO";else if(m.playlistId)t="PLAYLIST";else break a;n.credentialTransferTokenTargetId=m;n.context=n.context||
{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:q,scope:t}]}delete Hu[c];g.Tu(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Nu[a]}g.fc(Nu)||Ku()}};
Ku=function(){g.Cs(Mu);Mu=g.Es(Ju,g.P("LOGGING_BATCH_TIMEOUT",1E4))};
Iu=function(a,b){b||(b="");Nu[a]=Nu[a]||{};Nu[a][b]=Nu[a][b]||[];return Nu[a][b]};
Vu=function(){if(null==g.y("_lact",window)){var a=(0,window.parseInt)(g.P("LACT"),10);a=(0,window.isFinite)(a)?(0,g.F)()-Math.max(a,0):-1;g.x("_lact",a,window);g.x("_fact",a,window);-1==a&&Uu();g.Zt(window.document,"keydown",Uu);g.Zt(window.document,"keyup",Uu);g.Zt(window.document,"mousedown",Uu);g.Zt(window.document,"mouseup",Uu);g.Cu("page-mouse",Uu);g.Cu("page-scroll",Uu);g.Cu("page-resize",Uu)}};
Uu=function(){null==g.y("_lact",window)&&(Vu(),g.y("_lact",window));var a=(0,g.F)();g.x("_lact",a,window);-1==g.y("_fact",window)&&g.x("_fact",a,window);g.Eu("USER_ACTIVE")};
g.Wu=function(){var a=g.y("_lact",window);return null==a?-1:Math.max((0,g.F)()-a,0)};
g.Yu=function(a,b,c,d){var e=g.Xu,f={};f.eventTimeMs=Math.round(c||(0,g.Ru)());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Wu())};a=g.mt("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";g.Lu({endpoint:a,ku:f,gj:d},e)};
g.Su=function(a){a={client:{hl:a.Gm,gl:a.Fm,clientName:a.Em,clientVersion:a.innertubeContextClientVersion}};g.P("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.P("DELEGATED_SESSION_ID")});return a};
Zu=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Xu=function(a){this.g=a||{apiaryHost:g.P("APIARY_HOST",void 0),Bx:g.P("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.P("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.P("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.P("INNERTUBE_API_VERSION",void 0),Em:g.P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Gm:g.P("INNERTUBE_CONTEXT_HL",void 0),Fm:g.P("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.P("XHR_APIARY_HOST",void 0)||"",Fj:g.P("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Tu=function(a,b,c,d){!g.P("VISITOR_DATA")&&.01>Math.random()&&g.ws(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.P("VISITOR_DATA","")},kb:c,lu:"JSON",Oc:d.Oc,rb:function(a,b){d.rb&&d.rb(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=g.wn();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.P("SESSION_INDEX",0));var k="",l=a.g.Fj;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);g.Ys(""+k+Zu(a.g.innertubeApiVersion,b,c)+"?alt=json&key="+a.g.innertubeApiKey,e)};
g.$u=function(){return!!g.y("yt.scheduler.instance")};
g.av=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Es(a,c||0)};
g.bv=function(a){if(!(0,window.isNaN)(a)){var b=g.y("yt.scheduler.instance.cancelJob");b?b(a):g.Cs(a)}};
cv=function(a){var b=g.y("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
ev=function(a,b){var c=Object.keys(a).join("");dv("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Yu("latencyActionInfo",a))};
dv=function(a){fv[a]=fv[a]||{count:0};var b=fv[a];b.count++;b.time=(0,g.Ru)();gv||(gv=g.av(hv,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);var c=void 0,d=void 0;c=void 0===c?"ERROR":c;d=void 0===d?!1:d;a={name:g.P("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:g.P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};c=void 0===c?"ERROR":c;d=window&&window.yterr||(void 0===d?!1:d)||!1;if(b&&d&&!(5<=iv)){d=b.stacktrace;var e=b.columnNumber;var f=g.y("window.location.href");
if(g.u(b))b={message:b,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var k=!1;try{var l=b.lineNumber||b.line||"Not available"}catch(t){l="Not available",k=!0}try{var m=b.fileName||b.filename||b.sourceURL||g.w.$googDebugFname||f}catch(t){m="Not available",k=!0}b=!k&&b.lineNumber&&b.fileName&&b.stack&&b.message&&b.name?b:{message:b.message||"Not available",name:b.name||"UnknownError",lineNumber:l,fileName:m,stack:b.stack||"Not available"}}d=d||b.stack;l=b.lineNumber.toString();
(0,window.isNaN)(l)||(0,window.isNaN)(e)||(l=l+":"+e);if(!(jv[b.message]||0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){m=b.fileName;l={Wb:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,1E3),line:l,level:c,"client.name":a.name},kb:{url:g.P("PAGE_NAME",window.location.href),file:m},method:"POST"};a.version&&(l["client.version"]=a.version);d&&(l.kb.stack=d);for(var n in a)l.kb["client."+n]=a[n];if(n=g.P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var q in n)l.kb[q]=
n[q];g.Us("/error_204",l);jv[b.message]=!0;iv++}}}return!0}return!1};
hv=function(){var a=(0,g.Ru)(),b;for(b in fv)6E4<a-fv[b].time&&delete fv[b];gv=0};
g.uv=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.F)()+1E3*d:0;if((d=d?g.nv:tv)&&window.JSON){g.u(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.vv=function(a){if(!tv&&!g.nv||!window.JSON)return null;try{var b=tv.get(a)}catch(c){}if(!g.u(b))try{b=g.nv.get(a)}catch(c){}if(!g.u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.wv=function(a){try{tv&&tv.remove(a),g.nv&&g.nv.remove(a)}catch(b){}};
g.xv=function(){var a=g.P("client-screen-nonce",void 0);a||(a=g.P("EVENT_ID",void 0));return a};
yv=function(a,b){this.action=a;this.params=b||{}};
Bv=function(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.A=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new Cn;this.g=this.o="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",zv(this,a.capabilities||""),Av(this,a.experiments||
""),this.o=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||"")};
zv=function(a,b){a.capabilities.clear();(0,g.Md)(b.split(","),g.A(Yb,Cv)).forEach(function(b){a.capabilities.add(b)})};
Av=function(a,b){a.experiments.clear();b.split(",").forEach(function(b){a.experiments.add(b)})};
Ev=function(a,b){g.I.call(this);this.o=new g.O(this.C,0,this);g.J(this,this.o);this.A=this.g=0;if(g.Ca(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ca(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;Dv(this)};
Dv=function(a){a.o.stop();a.g=5E3+2E4*Math.random()};
Fv=function(a,b,c){this.N=a;this.D=b;this.A=new g.jr;this.o=new Ev(this.dI,this);this.g=this.ze=null;this.K=!1;this.C=null;this.J="";this.H=this.B=0;this.F=[];this.T=c||!1};
Gv=function(a){return{firstTestResults:[""],secondTestResults:!a.g.Hk,sessionId:a.g.A,arrayId:a.g.Eg}};
Hv=function(a,b){a.H=b||0;a.o.stop();a.g&&(3==a.g.g&&ar(a.g),Uq(a.g));a.H=0};
Iv=function(a){return!!a.g&&3==a.g.g};
Jv=function(a,b){(a.D.loungeIdToken=b)||a.o.stop()};
Ov=function(){var a=Kv;Lv();Mv.push(a);Nv(Mv)};
g.Rv=function(a,b){Lv();var c=Mv,d=Pv(a,String(b));g.sb(c)?Qv(d):(Nv(c),(0,g.G)(c,function(a){a(d)}))};
Lv=function(){Mv||(Mv=g.y("yt.mdx.remote.debug.handlers_")||[],g.x("yt.mdx.remote.debug.handlers_",Mv,void 0))};
Qv=function(a){var b=(Sv+1)%50;Sv=b;Tv[b]=a;Uv||(Uv=49==b)};
Nv=function(a){var b=Tv;if(b[0]){var c=Sv,d=Uv?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.G)(a,function(a){a(e)})}while(d!=c);
Tv=Array(50);Sv=-1;Uv=!1}};
Pv=function(a,b){var c=((0,g.F)()-Vv)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")};
Wv=function(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""};
g.Xv=function(a,b){return!!b&&(a.id==b||a.uuid==b)};
Yv=function(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}};
Zv=function(a){return new Wv(a)};
$v=function(a){return g.za(a)?(0,g.H)(a,Zv):[]};
g.aw=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"};
bw=function(a){return g.za(a)?"["+g.H(a,g.aw).join(",")+"]":"null"};
g.cw=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};
g.dw=function(a,b){return g.nb(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})};
g.ew=function(a,b){return g.nb(a,function(a){return g.Xv(a,b)})};
g.fw=function(a){g.R.call(this);this.F=a;this.g=[]};
gw=function(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0};
hw=function(a,b){var c=a.g.length!=b.length;a.g=(0,g.Md)(a.g,function(a){return!!g.dw(b,a)});
for(var d=0,e=b.length;d<e;d++)c=gw(a,b[d])||c;return c};
iw=function(a,b){var c=a.g.length;a.g=(0,g.Md)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c};
jw=function(a,b,c,d){g.R.call(this);this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.g=null;this.o=window.NaN};
lw=function(a,b,c){kw.set(""+a,b,c,"/","youtube.com",!1)};
g.qw=function(){var a=mw(),b=g.nw();g.rb(a,b);if(g.ow()){var c=a,d=g.Gb(c,b,void 0);0>d&&g.Db(c,-(d+1),0,b)}a=pw(a);if(g.sb(a))try{kw.remove("remote_sid","/","youtube.com")}catch(e){}else try{lw("remote_sid",a.join(","),-1)}catch(e){}};
mw=function(){var a=g.vv("yt-remote-connected-devices")||[];g.Ib(a);return a};
pw=function(a){if(g.sb(a))return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.H)(a,function(a,b){return 0==b?a:a.substring(c.length)})};
rw=function(a){g.uv("yt-remote-connected-devices",a,86400)};
g.nw=function(){if(tw)return tw;var a=g.vv("yt-remote-device-id");a||(a=g.cw(),g.uv("yt-remote-device-id",a,31536E3));for(var b=mw(),c=1,d=a;g.rb(b,d);)c++,d=a+"#"+c;return tw=d};
uw=function(){return g.vv("yt-remote-session-browser-channel")};
g.ow=function(){return g.vv("yt-remote-session-screen-id")};
yw=function(a){5<a.length&&(a=a.slice(a.length-5));var b=(0,g.H)(vw(),function(a){return a.loungeToken}),c=(0,g.H)(a,function(a){return a.loungeToken});
(0,g.ww)(c,function(a){return!g.rb(b,a)})&&xw();
g.uv("yt-remote-local-screens",a,31536E3)};
vw=function(){return g.vv("yt-remote-local-screens")||[]};
xw=function(){g.uv("yt-remote-lounge-token-expiration",!0,86400)};
zw=function(a,b){g.uv("yt-remote-session-browser-channel",a);g.uv("yt-remote-session-screen-id",b);var c=mw(),d=g.nw();g.rb(c,d)||c.push(d);rw(c);g.qw()};
g.Aw=function(a){a||(g.wv("yt-remote-session-screen-id"),g.wv("yt-remote-session-video-id"));g.qw();a=mw();g.xb(a,g.nw());rw(a)};
g.Cw=function(){if(!Bw){var a=g.yr();a&&(Bw=new g.lr(a))}return Bw?!!Bw.get("yt-remote-use-staging-server"):!1};
Ew=function(a){g.fw.call(this,"LocalScreenService");this.A=a;this.o=window.NaN;Dw(this);this.info("Initializing with "+bw(this.g))};
Fw=function(a){if(a.g.length){var b=(0,g.H)(a.g,function(a){return a.id}),c=a.A.Nf("/pairing/get_lounge_token_batch");
a.A.vo(c,{screen_ids:b.join(",")},(0,g.z)(a.uy,a),(0,g.z)(a.ty,a))}};
Dw=function(a){var b=$v(vw());b=(0,g.Md)(b,function(a){return!a.uuid});
return hw(a,b)};
Gw=function(a,b){yw((0,g.H)(a.g,Yv));b&&xw()};
Iw=function(a,b){g.R.call(this);this.D=b;var c=g.vv("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.D(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.rb(c,l)}this.g=d;this.C=a;this.A=this.B=window.NaN;this.o=null;Hw("Initialized with "+g.wg(this.g))};
Jw=function(a,b,c){var d=a.C.Nf("/pairing/get_screen_availability");a.C.vo(d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))};
Lw=function(a,b){a:if(g.Wb(b)!=g.Wb(a.g))var c=!1;else{c=g.$b(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(Hw("Updated online screens: "+g.wg(a.g)),a.g=b,a.R("screenChange"));Kw(a)};
Mw=function(a){(0,window.isNaN)(a.A)||g.Cs(a.A);a.A=g.Es((0,g.z)(a.Pn,a),0<a.B&&a.B<(0,g.F)()?2E4:1E4)};
Hw=function(a){g.Rv("OnlineScreenService",a)};
Nw=function(a){var b={};(0,g.G)(a.D(),function(a){a.token?b[a.token]=a.id:this.xb("Requesting availability of screen w/o lounge token.")});
return b};
Kw=function(a){a=g.$b(g.Ub(a.g,function(a){return a}));
g.Ib(a);a.length?g.uv("yt-remote-online-screen-ids",a.join(","),60):g.wv("yt-remote-online-screen-ids")};
g.Pw=function(a){g.fw.call(this,"ScreenService");this.D=a;this.o=this.A=null;this.B=[];this.C={};Ow(this)};
Sw=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.C[b]);var k=a.Vc();if(k=(c?g.ew(k,c):null)||g.ew(k,b)){k.uuid=b;var l=Qw(a,k);Jw(a.o,l,function(a){e(a?l:null)})}else c?Rw(a,c,(0,g.z)(function(a){var f=Qw(this,new Wv({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Jw(this.o,f,function(a){e(a?f:null)})},a),f):e(null)};
Tw=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];return null};
Rw=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={kb:{screen_ids:b},method:"POST",context:a,rb:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Us(a.D.Nf("/pairing/get_lounge_token_batch"),e)};
Uw=function(a){a.g=a.A.Vc();var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+bw(a.g))};
Ow=function(a){Vw(a);a.A=new Ew(a.D);a.A.subscribe("screenChange",(0,g.z)(a.Ey,a));Uw(a);a.B=$v(g.vv("yt-remote-automatic-screen-cache")||[]);Vw(a);a.info("Initializing automatic screens: "+bw(a.B));a.o=new Iw(a.D,(0,g.z)(a.Vc,a,!0));a.o.subscribe("screenChange",(0,g.z)(function(){this.R("onlineScreenChange")},a))};
Qw=function(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=g.ew(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),g.uv("yt-remote-automatic-screen-cache",(0,g.H)(a.B,Yv)));Vw(a);a.C[b.uuid]=b.id;g.uv("yt-remote-device-id-map",a.C,31536E3);return b};
Vw=function(a){a.C=g.vv("yt-remote-device-id-map")||{}};
Ww=function(a,b,c){g.R.call(this);this.T=c;this.J=a;this.o=b;this.A=null};
Xw=function(a,b){g.Rv(a.T,b)};
Zw=function(a,b){Ww.call(this,a,b,"CastSession");this.g=null;this.B=0;this.D=(0,g.z)(this.mI,this);this.C=(0,g.z)(this.KG,this);this.B=g.Es((0,g.z)(function(){Yw(this,null)},this),12E4)};
$w=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.wg(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.va,(0,g.z)(function(){Xw(this,"Failed to send message: getMdxSessionStatus.")},a)):Xw(a,"Sending yt message without session: "+g.wg(b))};
Yw=function(a,b){g.Cs(a.B);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.A||a.A.id!=b){var c=(0,g.z)(a.dk,a),d=(0,g.z)(a.Zc,a);a.sq(b,c,d,5)}}else a.Zc(Error("Waiting for session status timed out."))};
ax=function(a,b){Ww.call(this,a,b,"DialSession");this.B=this.H=null;this.K="";this.C=null;this.F=g.va;this.D=window.NaN;this.N=(0,g.z)(this.pI,this);this.g=g.va};
bx=function(a){a.g=a.J.Iv(a.K,a.o.label,a.o.friendlyName,(0,g.z)(function(a){this.g=g.va;this.dk(a)},a),(0,g.z)(function(a){this.g=g.va;
this.Zc(a)},a))};
cx=function(a){var b={};b.pairingCode=a.K;if(a.C){var c=a.C.currentTime||0;b.v=a.C.videoId;b.t=c}g.Cw()&&(b.env_useStageMdx=1);return g.Mg(b)};
dx=function(a,b){Ww.call(this,a,b,"ManualSession");this.g=g.Es((0,g.z)(this.Fg,this,null),150)};
g.ex=function(a,b,c){g.R.call(this);this.o=a;this.D=b||"233637DE";this.F=c||!1;this.g=null;this.C=!1;this.A=[];this.B=(0,g.z)(this.CF,this)};
fx=function(a,b){return b?g.nb(a.A,function(a){return g.Xv(b,a.label)},a):null};
gx=function(a){g.Rv("Controller",a)};
Kv=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)};
hx=function(a){return a.C||!!a.A.length||!!a.g};
ix=function(a,b,c){b!=a.g&&(g.Ke(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.o):a.R("yt-remote-cast2-receiver-selected",b.o),b.subscribe("sessionScreen",(0,g.z)(a.Yt,a,b)),b.A?a.R("yt-remote-cast2-session-change",b.A):c&&a.g.Fg(null)):a.R("yt-remote-cast2-session-change",null))};
jx=function(a){var b=a.o.Hv(),c=a.g&&a.g.o;a=(0,g.H)(b,function(a){c&&g.Xv(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=fx(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a};
g.kx=function(a){this.index=-1;this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.A=this.H=0;this.o=null;this.hasNext=this.Yd=!1;this.K=this.J=this.B=this.D=0;this.C=window.NaN;this.F=!1;this.reset(a)};
g.lx=function(a){a.audioTrackId=null;a.o=null;a.g=-1;a.Yd=!1;a.hasNext=!1;a.H=0;a.A=(0,g.F)();a.D=0;a.B=0;a.J=0;a.K=0;a.C=window.NaN;a.F=!1};
g.mx=function(a,b){a.H=b;a.A=(0,g.F)()};
g.nx=function(a){switch(a.g){case 1:return((0,g.F)()-a.A)/1E3+a.H;case -1E3:return 0}return a.H};
g.ox=function(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&g.lx(a)};
g.px=function(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=jc(a.o);b.hasPrevious=a.Yd;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.A;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.J;b.loadedTime=a.K;b.liveIngestionTime=a.C;return b};
qx=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
g.rx=function(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.g=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1};
g.sx=function(a){a=void 0===a?{}:a;this.N=a.formats||"";this.A=a.format||1;if(1==this.A)for(var b=this.N.split(","),c=0;c<b.length;c++){var d=(0,window.parseInt)(b[c],10);(0,window.isNaN)(d)||(this.A=Math.max(d,this.A))}this.o=a.languageCode||"";this.D=a.languageName;this.B=a.kind||"";this.C=a.name;this.za=a.id;this.T=a.is_servable;this.H=a.is_translateable;this.J=a.url||null;this.F=a.vss_id||"";this.g=null;a.translationLanguage&&(this.g=new g.rx(a.translationLanguage))};
g.tx=function(a){var b=a.D||"",c=[b];"asr"==a.B&&-1==b.indexOf("(")&&c.push(" ("+g.Q("YTP_ASR_SETTINGS_LABEL")+")");a.C&&c.push(" - "+a.C);a.g&&c.push(" >> "+a.g.languageName);return c.join("")};
ux=function(a,b){this.id=a;this.Sb=b;this.captionTracks=[];this.uh=this.Hl=this.g=null;this.tp="UNKNOWN"};
g.wx=function(a,b,c){g.R.call(this);this.C=window.NaN;this.U=!1;this.K=this.J=this.N=this.T=window.NaN;this.V=[];this.B=this.F=this.A=this.Na=this.g=null;this.xa=a;this.V.push(g.Zt(window,"beforeunload",(0,g.z)(this.my,this)));this.o=[];this.Na=new g.kx;this.aa=b.id;this.g=vx(this,c);this.g.subscribe("handlerOpened",this.MD,this);this.g.subscribe("handlerClosed",this.JD,this);this.g.subscribe("handlerError",this.KD,this);this.g.subscribe("handlerMessage",this.LD,this);Jv(this.g,b.token);this.subscribe("remoteQueueChange",
function(){var a=this.Na.videoId;g.ow()&&g.uv("yt-remote-session-video-id",a)},this)};
xx=function(a){g.Rv("conn",a)};
vx=function(a,b){return new Fv(a.xa.Nf("/bc"),b)};
yx=function(a,b){a.R("proxyStateChange",b)};
zx=function(a){a.C=g.Es((0,g.z)(function(){xx("Connecting timeout");this.D(1)},a),2E4)};
Ax=function(a){g.Cs(a.C);a.C=window.NaN};
Bx=function(a){g.Cs(a.T);a.T=window.NaN};
Ex=function(a){Cx(a);a.N=g.Es((0,g.z)(function(){Dx(this,"getNowPlaying")},a),2E4)};
Cx=function(a){g.Cs(a.N);a.N=window.NaN};
Gx=function(a,b){b&&(Ax(a),Bx(a));b==(Iv(a.g)&&(0,window.isNaN)(a.C))?b&&(yx(a,1),Dx(a,"getSubtitlesTrack")):b?(a.Y()&&a.Na.reset(),yx(a,1),Dx(a,"getNowPlaying"),Fx(a)):a.D(1)};
Hx=function(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.Na.videoId&&(g.fc(b.params)?a.Na.o=null:a.Na.o=b.params,a.R("remotePlayerChange"))};
Ix=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);a.Na.listId=b.params.listId||a.Na.listId;g.ox(a.Na,c,d);a.R("remoteQueueChange")};
Kx=function(a,b){b.params=b.params||{};Ix(a,b);Jx(a,b);a.R("autoplayDismissed")};
Jx=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);g.mx(a.Na,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Na.g&&(c=-1E3);a.Na.g=c;c=Number(b.params.loadedTime);a.Na.K=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Na.J=(0,window.isNaN)(c)?0:c;c=a.Na;var d=Number(b.params.liveIngestionTime);c.C=d;c.F=(0,window.isNaN)(d)?!1:!0;c=a.Na;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);
c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.Na.g?Ex(a):Cx(a);a.R("remotePlayerChange")};
Lx=function(a,b){if(-1E3!=a.Na.g){var c=1083;switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1082}a.Na.g=c;a.R("remotePlayerChange")}};
Mx=function(a,b){var c="true"==b.params.muted;a.Na.volume=(0,window.parseInt)(b.params.volume,10);a.Na.muted=c;a.R("remotePlayerChange")};
Nx=function(a,b){a.F=b.params.videoId;a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))};
Ox=function(a,b){var c="true"==b.params.hasNext;a.Na.Yd="true"==b.params.hasPrevious;a.Na.hasNext=c;a.R("previousNextChange")};
Fx=function(a){g.Cs(a.K);a.K=g.Es((0,g.z)(a.D,a,1),864E5)};
Dx=function(a,b,c){c?xx("Sending: action="+b+", params="+g.wg(c)):xx("Sending: action="+b);a.g.sendMessage(b,c)};
Px=function(a,b){this.g=a||0;this.spatialAudioType=b||0};
Sx=function(a,b,c,d,e,f,k,l,m,n,q){this.width=a;this.height=b;this.quality=f||Qx(a,b);this.o=g.Rx[this.quality];this.isAccelerated=!!k;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(a=l)||(a=this.fps,b=this.projectionType,c=g.Rx[this.quality],a=0==c?g.Q("YTP_AUTO"):c+(2==b||3==b||4==b?"s":"p")+(55<a?"60":49<a?"50":39<a?"48":""));this.qualityLabel=a;this.g=m||"";this.primaries=n||"";this.A=!1!==q};
Tx=function(a){return"smpte2084"==a.g||"arib-std-b67"==a.g};
Qx=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Ux[0],f=0;f<Ux.length;f++){var k=Ux[f],l=g.Rx[k];if(c>=Math.floor(16*l/9)*Sx.prototype.B||d>=l*Sx.prototype.B)return e;e=k}return"tiny"};
Xx=function(a,b,c,d,e,f,k,l){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.g=k||0;this.A=l||0;this.audio=c||null;this.video=d||null;this.Sb=e||null;this.Yb=f||null;this.o=Vx[Wx(this)]||""};
Wx=function(a){return a.id.split(";",1)[0]};
Yx=function(a){return"9"==a.o||"("==a.o||"9h"==a.o||"(h"==a.o};
Zx=function(a){return"9h"==a.o||"(h"==a.o};
$x=function(a){return!(a.audio&&a.video)};
ay=function(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")};
by=function(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")};
cy=function(a,b,c,d,e,f,k){var l=new Px;b in g.Rx||(b="small");d&&e?(e=(0,window.parseInt)(e,10),d=(0,window.parseInt)(d,10)):(e=g.Rx[b],d=Math.round(16*e/9));b=new Sx(d,e,0,null,void 0,b,f,void 0,void 0,void 0,k);a=(0,window.unescape)(a.replace(/&quot;/g,'"'));return new Xx(c,a,l,b)};
dy=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=g.Fs(b||"");var c={};(0,g.G)(this.experimentIds,function(a){c[a]=!0});
this.experiments=c;this.B=!!c["9414740"]};
ey=function(a,b){this.g=a;this.o=!!b;this.A=!1};
fy=function(a){this.kd=a};
gy=function(a,b,c){this.o=a||0;this.g=b||0;this.A=c};
hy=function(a,b){return a.o==b.o&&a.g==b.g&&a.A==b.A};
iy=function(a,b,c){return new gy(g.Rx[a]||0,g.Rx[b]||0,c)};
jy=function(a){var b=g.Rx.auto;return a.o==b&&a.g==b};
ly=function(a,b){if(b.A&&jy(b))return ky;if(b.A||jy(a))return b;if(a.A||jy(b))return a;var c=a.o&&b.o?Math.max(a.o,b.o):a.o||b.o,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g;c=Math.min(c,d);return c==a.o&&d==a.g?a:new gy(c,d,!1)};
g.my=function(a){var b=a.g||a.o;return ec(function(a){return g.Rx[a]==b})||"auto"};
ny=function(a,b){var c=g.Rx[b];return a.o<=c&&(!a.g||a.g>=c)};
oy=function(){var a=g.vv("yt-player-volume")||{},b=a.volume;return{volume:(0,window.isNaN)(b)?100:g.Zc(Math.floor(b),0,100),muted:!!a.muted}};
py=function(a){g.uv("yt-player-bandwidth",a,2592E3)};
qy=function(){return g.vv("yt-player-quality")||"auto"};
ry=function(a){g.uv("yt-player-watch-later-pending",a)};
sy=function(){return g.vv("yt-player-performance-cap")||0};
ty=function(a,b,c){if(g.Da(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}};
uy=function(a,b,c){g.u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ty(a)};
wy=function(a,b){g.I.call(this);this.app=a;this.g=!0;this.o=null;this.B={};this.C={};this.F={};this.D={};this.A=null;this.H=new window.Set;this.playerType=b;S(this,"cueVideoById",this.Br);S(this,"loadVideoById",this.nA);S(this,"cueVideoByUrl",this.cA);S(this,"loadVideoByUrl",this.oA);S(this,"playVideo",this.gc);S(this,"pauseVideo",this.Ub);S(this,"stopVideo",this.Ae);S(this,"clearVideo",this.aA);S(this,"getVideoBytesLoaded",this.hA);S(this,"getVideoBytesTotal",this.iA);S(this,"getVideoLoadedFraction",
this.dn);S(this,"getVideoStartBytes",this.jA);S(this,"cuePlaylist",this.bA);S(this,"loadPlaylist",this.mA);S(this,"nextVideo",this.Jg);S(this,"previousVideo",this.Sh);S(this,"playVideoAt",this.Gr);S(this,"setShuffle",this.setShuffle);S(this,"setLoop",this.qA);S(this,"getPlaylist",this.ce);S(this,"getPlaylistIndex",this.Dr);S(this,"getPlaylistId",this.getPlaylistId);S(this,"loadModule",this.Rh);S(this,"unloadModule",this.Oj);S(this,"setOption",this.zc);S(this,"getOption",this.Gb);S(this,"getOptions",
this.Xf);S(this,"mute",this.mute);S(this,"unMute",this.ee);S(this,"isMuted",this.yc);S(this,"setVolume",this.setVolume);S(this,"getVolume",this.getVolume);S(this,"seekTo",this.Hb);S(this,"getPlayerState",this.Ig);S(this,"getPlaybackRate",this.Tb);S(this,"setPlaybackRate",this.de);S(this,"getAvailablePlaybackRates",this.Hg);S(this,"getPlaybackQuality",this.Qh);S(this,"setPlaybackQuality",this.Th);S(this,"getAvailableQualityLevels",this.cn);S(this,"getCurrentTime",this.getCurrentTime);S(this,"getDuration",
this.getDuration);S(this,"addEventListener",this.addEventListener);S(this,"removeEventListener",this.removeEventListener);S(this,"getVideoUrl",this.getVideoUrl);S(this,"getDebugText",this.Ph);S(this,"getVideoEmbedCode",this.Er);S(this,"getVideoData",this.getVideoData);S(this,"addCueRange",this.Ar);S(this,"removeCueRange",this.Hr);S(this,"setSize",this.setSize);S(this,"getApiInterface",this.dA);S(this,"destroy",this.destroy);S(this,"showVideoInfo",this.Kr);S(this,"hideVideoInfo",this.kA);S(this,"getMediaReferenceTime",
this.fA);vy(this,"getInternalApiInterface",this.eA);vy(this,"getAdState",this.Cr);vy(this,"isNotServable",this.lA);vy(this,"getUpdatedConfigurationData",this.gA);vy(this,"sendAbandonmentPing",this.pA);vy(this,"setAutonav",this.Ir);vy(this,"setAutonavState",this.Jr);vy(this,"startInteractionLogging",this.rA);vy(this,"channelSubscribed",this.Yz);vy(this,"channelUnsubscribed",this.Zz)};
S=function(a,b,c){a.B[b]=(0,g.z)(function(){yy(this,b);return c.apply(this,arguments)},a)};
vy=function(a,b,c){a.C[b]=(0,g.z)(function(){yy(this,b);return c.apply(this,arguments)},a)};
zy=function(a){a.A||(a.A=g.ic(a.B),a.A.addEventListener=(0,g.z)(a.Tx,a),a.A.removeEventListener=(0,g.z)(a.Ux,a));return a.A};
yy=function(a,b){var c=a.app.g;c.Ei&&!a.H.has(b)&&(a.H.add(b),c={callerUrl:c.aa,methodName:b},a.app.g.experiments.g("web_player_gel_logging_killswitch")||(a.app.g.experiments.g("web_player_gel_direct")?g.Yu("webPlayerApiCalled",c,void 0,void 0):a.app.Z.R("onLogToGel",{payload_name:"webPlayerApiCalled",payload:c})))};
By=function(a,b,c){b=g.Zc(Math.floor(b),0,100);(0,window.isFinite)(b)&&Ay(a.app,{volume:b,muted:a.yc()},c)};
Cy=function(a,b){Ay(a.app,{muted:!0,volume:a.getVolume()},b)};
Dy=function(a,b){Ay(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.Fy=function(a,b,c){this.start=a;this.end=b;this.A=Ey++;a=c||{};this.za=a.id||"";this.B=a.priority||7;this.active=!0;this.visible=a.visible||!1;this.style=a.style||"ytp-ad-progress";this.namespace=a.namespace||"";this.color="";a.color&&(b=a.color.toString(16),this.color="#"+Array(7-b.length).join("0")+b);this.g=null;this.tooltip=a.tooltip;this.visible=this.visible;this.style=this.style;this.start=this.start};
Gy=function(a){switch(a.style){case "ytp-chapter-marker":return 8;case "ytp-ad-progress":return 6;case "ytp-time-marker":return Number.POSITIVE_INFINITY;default:return 0}};
g.Hy=function(a,b){return a.start-b.start||a.B-b.B||a.A-b.A};
Iy=function(a,b,c,d,e,f,k,l){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.ra=a;this.sourceURL=e;this.startTime=b;this.o=k||0;this.range=f||null;this.g=l||!1};
g.Jy=function(){this.segments=[]};
Ky=function(a,b){if(b>a.Jb())a.segments=[];else{var c=g.lb(a.segments,function(a){return a.ra>=b},a);
0<c&&a.segments.splice(0,c)}};
Ly=function(a,b,c,d,e){this.data=a;this.offset=b;this.size=c;this.type=d;this.o=e?0:8;this.g=this.offset+this.o};
My=function(a){var b=a.data.getInt32(a.offset+a.o);a.o+=4;return b};
Ny=function(a){var b=a.data.getUint32(a.offset+a.o);a.o+=4;return b};
Oy=function(a){var b=a.data,c=a.offset+a.o;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.o+=8;return b};
Py=function(a){var b=[];do{var c=a.data.getUint8(a.offset+a.o);b.push(c);a.o++}while(0!=c);b.pop();return String.fromCharCode.apply(String,b)};
Qy=function(a){this.data=new window.DataView(new window.ArrayBuffer(a));this.g=0};
Ry=function(a,b){a.data.setInt32(a.g,b);a.g+=4};
Sy=function(a,b){for(var c=0;c+4<=b.size;)Ry(a,b.data.getUint32(b.offset+c)),c+=4;for(;c<b.size;)a.data.setUint8(a.g++,b.data.getUint8(b.offset+c++))};
Ty=function(a,b,c){for(var d=8,e=g.na(c),f=e.next();!f.done;f=e.next())d+=f.value.size;Ry(a,d);Ry(a,b);b=g.na(c);for(f=b.next();!f.done;f=b.next())Sy(a,f.value)};
Uy=function(a,b,c){this.Ee=a;this.durationSecs=b;this.context=c};
Vy=function(a,b){this.g=a;this.B=void 0===b?null:b;this.o=(0,window.parseInt)(this.g["Sequence-Number"],10)||0;this.ingestionTime=((0,window.parseInt)(this.g["Ingestion-Walltime-Us"],10)||0)/1E6;this.C=(((0,window.parseInt)(this.g["First-Frame-Time-Us"],10)||0)+((0,window.parseInt)(this.g["First-Frame-Uncertainty-Us"],10)||0))/1E6;this.H=((0,window.parseInt)(this.g["Target-Duration-Us"],10)||0)/1E6;this.F="T"==this.g["Overlayed-With-Slate"];this.A="T"==this.g["Stream-Finished"];this.D="T"==this.g.Streamable};
Wy=function(a,b,c){this.g=a||0;this.yaw=b||0;this.o=c;c.getUint32(4)};
Xy=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0==a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
Zy=function(a,b){var c=Yy(a.data,a.g,1952868452),d=Yy(a.data,a.g,1953658222),e=My(c);My(c);e&2&&My(c);c=e&8?My(c):0;var f=My(d),k=f&1;e=f&4;var l=f&256,m=f&512,n=f&1024;f&=2048;var q=Ny(d);k&&My(d);e&&My(d);for(var t=k=0;t<q;t++){var v=l?My(d):c;m&&My(d);e&&0==t||!n||My(d);f&&My(d);k+=v}return k/b};
bz=function(a){a=new window.DataView(a.buffer,a.byteOffset,a.byteLength);return(a=$y(a,1836476516))?az(a):window.NaN};
Yy=function(a,b,c){for(;cz(a,b);){var d=dz(a,b);if(d.type==c)return d;b+=d.size}return null};
$y=function(a,b){for(var c=0;cz(a,c);){var d=dz(a,c);if(d.type==b)return d;c=ez(d.type)?c+8:c+d.size}return null};
fz=function(a,b){if(a.data.getUint8(a.g)){var c=a.data,d=a.g+4;c.setUint32(d,Math.floor(b/4294967296));c.setUint32(d+4,b&4294967295)}else a.data.setUint32(a.g+4,b)};
gz=function(a){if(a.data.getUint8(a.g)){var b=a.data;a=a.g+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.g+4)};
dz=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new Ly(a,b,c,d)};
az=function(a){var b=a.data.getUint8(a.g)?20:12;return a.data.getUint32(a.g+b)};
hz=function(a){return a.data.getUint32(a.g+8)};
iz=function(a){var b=a.data.getUint8(a.g);a.data.getUint16(a.g+(0==b?22:30));return a.data.getUint32(a.g+(0==b?28:36))};
cz=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
ez=function(a){return 1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a};
jz=function(a,b){for(var c=[],d=b.g,e=b.offset+b.size;d<e&&cz(a,d);){var f=dz(a,d);c.push(f);d+=f.size}return c};
kz=function(a){var b=$y(a,1937011556);if(!b)return null;b=Yy(a,b.g+8,1635148593);if(!b)return null;var c=Yy(a,b.g+78,1936995172),d=Yy(a,b.g+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),b=c.data.getUint8(c.offset+c.o),c.o+=1,b){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}c=null;if(d=Yy(a,d.g,1886547818)){var e=Yy(a,d.g,1886546020),f=Yy(a,d.g,2037673328);if(!f&&(f=Yy(a,d.g,1836279920),!f))return null;e&&(My(e),c=My(e)/65536,My(e));a=new window.DataView(f.data.buffer,
f.g,f.size-8);return new Wy(b,c,a)}return null};
lz=function(a){return(a=Yy(a,0,1836019558))?a.offset+a.size:null};
mz=function(a,b){for(var c=Yy(a,0,b);c;){var d=c;d.type=1936419184;d.data.setUint32(d.offset+4,1936419184);c=Yy(a,c.offset+c.size,b)}};
nz=function(a,b,c,d){d=void 0===d?!1:d;var e=Yy(a,0,1836019558);if(!e)return null;var f=Yy(a,e.g,1835427940),k=Yy(a,e.g,1953653094),l=Yy(a,e.g,1886614376);if(!f||!k)return null;var m=Yy(a,k.g,1952868452),n=Yy(a,k.g,1953658222),q=Yy(a,k.g,1952867444);if(!m||!n||!q)return null;var t=Yy(a,k.g,1935763823),v=Yy(a,k.g,1935763834);if(t){var D=My(t);var C=My(t);if(0!=D||1!=C)return null;D=My(t)}C=Yy(a,k.g,1935828848);k=Yy(a,k.g,1936158820);var B=My(m),U=My(m),Z=B&2,Aa=B&1?Oy(m):0,pa=Z?My(m):0,ua=B&8?My(m):
0,Wd=B&16?My(m):0,Qb=B&32?My(m):0;B=My(n);var qc=B&1,Be=B&4,mm=B&256;m=B&512;var Lj=B&1024,Og=B&2048;B=My(n);var di=qc?My(n):0,Pg=Be?My(n):0;qc=[];for(var nm=[],wb=[],rc=[],om=0,Hc=0,Mj=0;Mj<B;Mj++){var FB=mm?My(n):ua;m&&qc.push(My(n));var Qg=Qb;Be&&0==Mj?Qg=Pg:Lj&&(Qg=My(n));nm.push(Qg);Qg=Og?My(n):0;0==Mj&&(om=Qg);wb.push(Hc+Qg);rc.push(Mj);Hc+=FB}1<=Math.abs(Hc-b)&&c({flaw:"segDurMismatch",dts:Hc.toFixed(),seg:b.toFixed()});g.Ib(rc,function(a,b){return wb[a]-wb[b]});
c=[];for(Hc=0;Hc<B;Hc++)c[rc[Hc]]=Hc;Hc=Z?4:0;Qb=16*B;Be=68+Hc+q.size+Qb+(t?t.size:0)+(v?v.size:0)+(C?C.size:0)+(k?k.size:0)+(l?l.size:0);n=Be-e.size;ua=new Qy(Be+(d?0:e.offset));!d&&e.offset&&ua.ej(a,0,e.offset);Ry(ua,Be);Ry(ua,1836019558);Sy(ua,f);Ry(ua,Be-24-(l?l.size:0));Ry(ua,1953653094);Ry(ua,16+Hc);Ry(ua,1952868452);Ry(ua,131072|(Z?2:0));Ry(ua,U);Z&&Ry(ua,pa);Sy(ua,q);Ry(ua,20+Qb);Ry(ua,1953658222);Ry(ua,16781057);Ry(ua,B);Ry(ua,Aa+di+n);for(a=Hc=0;a<B;a++)e=c[a],d=Math.round(b*e/B),e=Math.round(b*
(e+1)/B)-d,d=d-Hc+om,Ry(ua,e),Ry(ua,m?qc[a]:Wd),Ry(ua,nm[a]),Ry(ua,d),Hc+=e;t&&(Ry(ua,t.size),Ry(ua,1935763823),Ry(ua,0),Ry(ua,1),Ry(ua,D+n));v&&Sy(ua,v);C&&Sy(ua,C);k&&Sy(ua,k);l&&Sy(ua,l);return ua.data.buffer};
rz=function(a){var b=oz();try{if(b.canPlayType){a=a?pz:qz;for(var c=0;c<a.length;c++)if(b.canPlayType(a[c]))return null}return"fmt.noneavailable"}catch(d){return"html5.missingapi"}};
sz=function(){var a=oz();try{var b=a.muted;a.muted=!b;return a.muted!=b}catch(c){}return!1};
oz=function(){var a=g.y("yt.player.utils.videoElement_");a||(a=g.Ed("VIDEO"),g.x("yt.player.utils.videoElement_",a,void 0));return a};
tz=function(a){a=g.Cd("DIV",{"class":a});window.document.body.appendChild(a);var b="none"==g.wh(a,"display");g.Kd(a);return b};
uz=function(){this.length=1};
vz=function(){this.buffered=new uz};
wz=function(a,b){this.o=a;this.A=b;this.B=0;Object.defineProperty(this,"timestampOffset",{get:this.XH,set:this.bI});Object.defineProperty(this,"buffered",{get:this.VH})};
xz=function(){this.length=0};
yz=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.o=window.NaN;this.A=0;Object.defineProperty(this,"duration",{get:this.WH,set:this.aI});Object.defineProperty(this,"readyState",{get:this.YH});this.g.addEventListener("webkitsourceclose",(0,g.z)(this.ZH,this),!0)};
zz=function(a){return window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new yz(a)};
Az=function(a,b){g.I.call(this);this.H=new g.iu(this);g.J(this,this.H);this.o=this.g=null;this.A=a;var c=this.A;c=c.FI?c.g.webkitMediaSourceURL:window.URL.createObjectURL(c);this.C=new ey(c,!0);this.D=this.F=this.B=null;this.N=b;ju(this.H,this.A,["sourceopen","webkitsourceopen"],this.K);ju(this.H,this.A,["sourceclose","webkitsourceclose"],this.J)};
Bz=function(a){a.D||(a.D=new window.Promise((0,g.z)(function(a){this.B=a},a)));
return a.D};
Cz=function(a){try{return"open"==a.A.readyState}catch(b){return!1}};
Dz=function(a){try{return"closed"==a.A.readyState}catch(b){return!0}};
Ez=function(a){return!!(a.g&&a.g.updating||a.o&&a.o.updating)};
Fz=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Gz=function(a){return a.g?!!a.g.appendBuffer:Fz()};
Hz=function(a){if(/opus/.test(a)&&(g.bt&&!g.aj("38")||ct()))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!et())return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');return!!oz().canPlayType(a)};
g.Iz=function(){this.Le=this.Ke=!1;this.B=20971520;this.C=8388608;this.o=window.NaN;this.Z=3145728;this.J=62914560;this.da=10485760;this.ne=this.Ha=0;this.F=window.NaN;this.vl=65536;this.jh=this.Db=2;this.ih=25;this.H=2097152;this.hh=1048576;this.Y=!1;this.N=1800;this.Aa=5;this.Ja=10;this.T=30;this.fb=1;this.g=1.15;this.A=1.05;this.oe=8;this.Ge=!1;this.Je=!0;var a;!(a=Zs("xboxone"))&&(a=ft())&&(a=/WebKit\/([0-9]+)/.exec(g.Rb),a=!(a&&602<=(0,window.parseInt)(a[1],10)));this.ol=a||at();this.xa=15;this.Wa=
!1;this.Ll=this.Va=this.Fi=!0;this.pe=this.U=!1;this.Ei=.8;this.Sa=this.Cf=!1;this.gh=!0;this.pa=this.Cc=!1;this.ke=25;this.Ki=!0;this.Nl=this.Ta=!1;this.K=6;this.Dc=this.wa=!1;this.Li=this.Cb=this.qb=0;this.Bf=this.Mi=!1;this.aa=0;this.ha=!1;this.ca=0;this.Af=!1;this.ib=0;this.jc=this.Ie=this.bc=!1;this.Ka=0;this.cd=this.sc=!1;this.Qa=0;this.Ya=this.ka=!1;this.Ji=.5;this.Xa=2;this.Hi=.8;this.Ii=.2;this.D=this.V=this.dd=this.He=this.oc=!1};
Jz=function(a,b){1080<b.video.o&&!a.Ke&&(a.B=36700160,a.C=5242880,a.Z=10485760,a.H=4194304,a.Ke=!0);2160<b.video.o&&!a.Le&&(a.B=104857600,a.F=13107200,a.Le=!0);a.hh=Math.min(a.H,5*b.g)};
g.Kz=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Lz=function(a){a=a.split("-");return 2==a.length&&(a=new g.Kz((0,window.parseInt)(a[0],10),(0,window.parseInt)(a[1],10)),!(0,window.isNaN)(a.start)&&!(0,window.isNaN)(a.end)&&!(0,window.isNaN)(a.length)&&0<a.length)?a:null};
Mz=function(a,b){return new g.Kz(a,a+b-1)};
Oz=function(a,b,c,d,e,f,k,l,m){this.ea=b;this.range=c;this.type=a;this.ra=0<=d?d:-1;this.startTime=e||0;this.duration=f||0;this.Ea=k||0;this.La=0<=l?l:this.range?this.range.length:window.NaN;this.B=!!m;this.range?(this.g=this.Ea+this.La==this.range.length,this.A=this.startTime+this.duration*this.Ea/this.range.length,this.C=this.duration*this.La/this.range.length,this.o=this.A+this.C):(this.g=0!=this.La,Nz(this))};
Nz=function(a){a.A=a.startTime;a.C=a.duration;a.o=a.A+a.C};
Pz=function(a,b,c){var d=!(!b||b.ea!=a.ea||b.type!=a.type||b.ra!=a.ra);return c?d&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.Ea+b.La==a.Ea+a.La:d};
Qz=function(a){return 1==a.type||2==a.type};
Rz=function(a,b,c){return c||a.ea==b.ea?a.range&&b.range?a.range.start+a.Ea+a.La==b.range.start+b.Ea:a.ra==b.ra?a.Ea+a.La==b.Ea:a.ra+1==b.ra&&0==b.Ea&&a.g:!1};
Sz=function(a,b){return Rz(a,b)||1E-6>=Math.abs(a.o-b.A)||a.ra+1==b.ra&&0==b.Ea&&a.g?!0:!1};
Tz=function(a){1==a.length||(0,g.ww)(a,function(a){return!!a.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new g.Kz(a[0].range.start+a[0].Ea,b.range.start+b.Ea+b.La-1)};
Vz=function(a){var b="";g.Tb(Uz(a),function(a,d){b+=d+"="+a+","});
return b.slice(0,-1)};
Uz=function(a){var b={};b.itag=Wx(a.ea.info);b.seg=a.ra;a.range&&(b.range=""+(a.range.start+a.Ea)+"-"+(a.range.start+a.Ea+a.La-1));b.time=""+a.A.toFixed(1)+"-"+(a.A+a.C).toFixed(1);b.off=a.Ea;return b};
Wz=function(a,b,c,d){a=new Oz(a.type,a.ea,a.range,a.ra,a.startTime,a.duration,b,c,d&&a.B);a.g=d;return a};
Xz=function(a,b){a.ra=b.ra;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,Nz(a)};
Yz=function(a,b){this.o=a;this.g=0;this.A=b||0};
Zz=function(a){return a.g>=a.o.byteLength};
dA=function(a,b,c){var d=new Yz(c);if(!$z(d,a))return!1;d=aA(d);if(bA(d,b)){for(a=0;b;)b>>>=8,a++;b=d.A+d.g-a;a=cA(d,!0)+a-1;var e;e||(e=Math.ceil(Math.log(a+2)/Math.log(2)/7));var f=1<<8-e;for(d=[];d.length<e-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|f);c.setUint8(b,236);for(e=0;e<d.length;e++)c.setUint8(b+1+e,d[e]);return!0}return!1};
fA=function(a){eA(new Yz(a));dA([408125543,374648427,174,224],30320,a)&&dA([408125543,374648427,174,224],21432,a)};
kA=function(a){var b=new Yz(a);eA(b);if($z(b,[408125543,374648427,174,224]))b=aA(b);else return null;for(var c=a=null;!Zz(b);){var d=cA(b,!1);if(21432==d)switch(gA(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=aA(b):hA(b)}if(!c)return null;for(b=null;!Zz(c);)switch(cA(c,!1)){case 30321:if(3!=gA(c))return null;break;case 30324:iA(c);break;case 30323:b=iA(c);break;case 30325:iA(c);break;case 30322:var e=cA(c,!0);e=jA(c,e);e=new window.DataView(e.buffer,e.byteOffset,
e.byteLength);break;default:hA(c)}return e?new Wy(a,b,e):null};
aA=function(a){var b=cA(a,!0),c=a.o.byteOffset+a.g;c=new window.DataView(a.o.buffer,c,Math.min(b,a.o.buffer.byteLength-c));c=new Yz(c,a.A+a.g);a.g+=b;return c};
gA=function(a){for(var b=cA(a,!0),c=lA(a),d=1;d<b;d++)c=256*c+lA(a);return c};
iA=function(a){var b=cA(a,!0),c=0;4==b?c=a.o.getFloat32(a.g):8==b&&(c=a.o.getFloat64(a.g));a.g+=b;return c};
hA=function(a){var b=cA(a,!0);a.g+=b};
eA=function(a){var b=a.g;a.g=0;var c=!1;bA(a,440786851)&&(a.g=0,bA(a,408125543)&&(c=!0));a.g=b;return c};
mA=function(a){var b=a.g;a.g=0;var c=1E6;$z(a,[408125543,357149030,2807729])&&(c=gA(a));a.g=b;return c};
oA=function(a,b){var c=a.g;a.g=0;if(!nA(a)||!bA(a,160))return a.g=c,window.NaN;cA(a,!0);var d=a.g;if(!bA(a,161))return a.g=c,window.NaN;cA(a,!0);lA(a);var e=lA(a)<<8|lA(a);a.g=d;if(!bA(a,155))return a.g=c,window.NaN;d=gA(a);a.g=c;return(e+d)*b/1E9};
nA=function(a){if(eA(a)){if(!bA(a,408125543))return!1;cA(a,!0)}if(!bA(a,524531317))return!1;cA(a,!0);return!0};
$z=function(a,b){for(var c=0;c<b.length;c++){if(!bA(a,b[c]))return!1;c!=b.length-1&&cA(a,!0)}return!0};
bA=function(a,b){if(Zz(a))return!1;for(;cA(a,!1)!=b;)if(hA(a),Zz(a))return!1;return!0};
cA=function(a,b){var c=lA(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+lA(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+lA(a),d*=128;return b?c-d:c};
lA=function(a){return a.o.getUint8(a.g++)};
jA=function(a,b){var c=new window.Uint8Array(a.o.buffer,a.o.byteOffset+a.g,b);a.g+=b;return c};
pA=function(a,b,c,d,e){this.info=a;this.g=b;this.range=c;this.o=null;this.A=d;this.Yc=e};
qA=function(a){return a.range?new window.DataView(a.g,a.range.start,a.range.length):new window.DataView(a.g)};
rA=function(a,b){b=Math.min(b,a.info.La);var c=new Oz(a.info.type,a.info.ea,a.info.range,a.info.ra,a.info.startTime,a.info.duration,a.info.Ea,b,!1),d=Mz(a.range.start,b);c=new pA(c,a.g,d,a.A,a.Yc);var e=new Oz(a.info.type,a.info.ea,a.info.range,a.info.ra,a.info.startTime,a.info.duration,a.info.Ea+b,a.info.La-b,a.info.B);d=new g.Kz(d.end+1,a.range.end);d=new pA(e,a.g,d,a.A,!1);return[c,d]};
sA=function(a,b){if(1==a.info.ea.info.containerType){for(var c=a.info.ea.g,d=new window.DataView(a.g),e=window.NaN,f=window.NaN,k=0;cz(d,k);){var l=dz(d,k);(0,window.isNaN)(e)&&(1936286840==l.type?e=hz(l):1836476516==l.type&&(e=az(l)));if(1952867444==l.type){!e&&c&&(e=bz(c));var m=gz(l);(0,window.isNaN)(f)&&(f=Math.round(b*e)-m);fz(l,m+f)}k=ez(l.type)?k+8:k+l.size}return!0}c=new Yz(new window.DataView(a.g));e=a.Yc?c:new Yz(new window.DataView(a.info.ea.g.buffer));d=b;f=mA(e);e=c.g;c.g=0;if(nA(c)&&
bA(c,231))if(k=cA(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>k)c=!1;else{for(f=k-1;0<=f;f--)c.o.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
tA=function(a){var b;if(1==a.info.ea.info.containerType){for(var c=b=0,d=new window.DataView(a.g);cz(d,b);){var e=dz(d,b);if(1936286840==e.type){var f=hz(e),k=iz(e);c+=k/f}b=ez(e.type)?b+8:b+e.size}b=c||window.NaN;if(!(0<=b))a:{b=a.info.ea.g;c=0;d=new window.DataView(a.g);for(e=0;cz(d,c);){f=dz(d,c);if(1836476516==f.type)var l=az(f);else if(1836019558==f.type){!l&&b&&(l=bz(b));if(!l){b=window.NaN;break a}k=Yy(f.data,f.g,1953653094);e+=Zy(k,l)}c=ez(f.type)?c+8:c+f.size}b=e||window.NaN}}else l=new Yz(new window.DataView(a.g)),
b=a.Yc?l:new Yz(new window.DataView(a.info.ea.g.buffer)),b=oA(l,mA(b));return b||a.info.C};
uA=function(a){return 1==a.info.ea.info.containerType?a.o?a.o.F&&!!Yy(new window.DataView(a.g),0,1718909296):!1:eA(new Yz(new window.DataView(a.g)))};
vA=function(){this.g=this.Kd=this.o=this.A=0};
wA=function(a,b){a[b]||(a[b]=new vA);return a[b]};
yA=function(a){return(a=xA.exec(a))?a[0]:""};
AA=function(a){return zA.test("https://"+a+"/")};
BA=function(a){a=new g.Hn(a);In(a,window.document.location.protocol);g.Jn(a,window.document.location.hostname);window.document.location.port&&g.Kn(a,window.document.location.port);return a.toString()};
CA=function(a){a=new g.Hn(a);In(a,window.document.location.protocol);return a.toString()};
g.DA=function(a){this.B=a;this.C=this.o=this.D="";this.g={};this.A=""};
FA=function(a){a.A||(a.A=EA(a));return a.A};
HA=function(a){GA(a);return a.C};
IA=function(a){GA(a);return Vb(a.g,function(a){return null!==a})};
JA=function(a,b){GA(a);if("/videoplayback"!=a.o){var c=a.clone();c.set("playerfallback",""+b);return c}var d=FA(a),e=new g.Hn(d);c=e.g.match("\\.a1\\.googlevideo\\.com$");e.g.match("\\.googlevideo\\.com$")?(g.Jn(e,"redirector.googlevideo.com"),d=e.toString()):e.g.match("r[1-9].*\\.c\\.youtube\\.com$")?(g.Jn(e,"www.youtube.com"),d=e.toString()):d=BA(d);d=new g.DA(d);b&&d.set("cmo=pf",""+b);c&&d.set("cmo=td","a1.googlevideo.com");return d};
GA=function(a){if(a.B){if(!KA.test(a.B))throw Error("Untrusted URL: "+a.B);var b=g.Vn(a.B);a.D=b.B;a.C=b.g+(null!=b.C?":"+b.C:"");var c=b.o;if(0==c.indexOf("/videoplayback"))a.o="/videoplayback",c=c.substr(14);else if(0==c.indexOf("/api/manifest/")){var d=c.indexOf("/",14);0<d?(a.o=c.substr(0,d),c=c.substr(d+1)):(a.o=c,c="")}else a.o=c,c="";d=a.g;a.g=LA(c);g.Ja(a.g,MA(b.J()));g.Ja(a.g,d);"index.m3u8"==a.g.file&&(delete a.g.file,a.o+="/file/index.m3u8");a.B="";a.A=""}};
EA=function(a){GA(a);var b=a.D+(a.D?"://":"//")+a.C+a.o;if(IA(a)){var c=[];g.Tb(a.g,function(a,b){null!==a&&c.push(b+"="+a)});
b+="?"+c.join("&")}return b};
LA=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&NA(c,a[b],a[b+1]);return c};
MA=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?NA(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
NA=function(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
OA=function(a){this.g=a;this.o={};this.A=""};
PA=function(a,b){var c=b.indexOf("?");if(0<c){var d=MA(b.substr(c+1));g.Tb(d,function(a,b){this.set(b,a)},a);
b=b.substr(0,c)}c=LA(b);g.Tb(c,function(a,b){this.set(b,a)},a)};
g.RA=function(a){a.A||(a.A=QA(a));return a.A};
QA=function(a){var b=FA(a.g),c=[];g.Tb(a.o,function(a,b){c.push(b+"="+a)});
if(!c.length)return b;var d=c.join("&");a=IA(a.g)?"&":"?";return b+a+d};
SA=function(a,b){var c=new g.DA(b),d=c.get("req_id");d&&a.set("req_id",d);g.Tb(a.o,function(a,b){c.set(b,null)});
return c};
TA=function(a){this.B=a.clone();this.A=a;this.o=null;this.C=this.g=0};
VA=function(a,b){var c=wA(b,HA(a.A));if(2<=c.Kd||1<=c.g){var d=UA(a);d=wA(b,HA(d));if(d.Kd+d.g<=c.Kd+c.g)return!0}return!1};
g.WA=function(a,b){var c=b?UA(a):a.A;return new OA(c)};
UA=function(a){a.o||(a.o=JA(a.B,1));return a.o};
XA=function(a){return 1<a.g?a.C+1E3*Math.pow(1.6,a.g-1)<(0,g.Ru)():!0};
YA=function(a,b){this.o=a[0].ea.B;this.B=b||"";this.g=a;this.range=this.g[0].range&&0<this.g[0].La?Tz(this.g):null;this.A=window.NaN;this.C=this.requestId=null};
g.ZA=function(a,b,c){/http[s]?:\/\//.test(a.B)?b=new OA(new g.DA(a.B)):(b=null===a.C?VA(a.o,b):a.C,b=g.WA(a.o,b),a.B&&PA(b,a.B));(c=c||a.range)&&b.set("range",c.toString());a.requestId&&b.set("req_id",a.requestId);(0,window.isNaN)(a.A)||b.set("headm",a.A.toString());return b};
$A=function(a){if(a.range)return a.range.length;a=a.g[0];return Math.round(a.C*a.ea.info.g)};
aB=function(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.g=null;this.D=this.o=!1;this.B=new TA(a);this.F=null};
bB=function(a,b){a.info&&a.info.video&&4==a.info.video.projectionType&&!a.F&&(1==a.info.containerType?a.F=kz(b):2==a.info.containerType&&(a.F=kA(b)))};
cB=function(a,b,c,d,e,f){f=void 0===f?0:f;aB.call(this,a,b,d);this.index=e||new g.Jy;this.A=f;this.J=c;this.H=!0;if(this.C=!c)this.o=!0};
dB=function(a,b,c){this.segments=[];this.o=a;this.A=void 0===b?0:b;this.g=void 0===c?!1:c};
fB=function(a,b,c){b=eB(a,b);return 0<=b&&(c||!a.segments[b].g)};
eB=function(a,b){return g.Gb(a.segments,{ra:b},function(a,b){return a.ra-b.ra})};
gB=function(a,b,c){return new Iy(b,c.startTime-(c.ra-b)*a.o,a.o,0,"sq/"+b,void 0,void 0,!0)};
hB=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?14400:e;cB.call(this,a,b,"",void 0,void 0,c);this.index=new dB(c||0,e,d)};
iB=function(a,b,c,d,e){this.ra=a;this.Ee=b;this.durationSecs=c;this.g=d||window.NaN;this.o=e||window.NaN};
jB=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})$/)?a+"Z":a};
kB=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""};
lB=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
mB=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(0,window.parseFloat)(b[2]||0)+60*(0,window.parseFloat)(b[4]||0)+(0,window.parseFloat)(b[6]||0):(0,window.parseFloat)(a)};
nB=function(){this.g=[];this.o=null;this.C=0;this.B=[];this.A=!1;this.D=""};
oB=function(a){var b=a.B;a.B=[];return b};
pB=function(){this.B=[];this.g=null;this.o={};this.A={}};
tB=function(a,b,c){var d=[];b=g.na(b.getElementsByTagName("SegmentTimeline"));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,k=null;"Period"==f.nodeName?k=qB(a):"AdaptationSet"==f.nodeName?k=rB(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(k=sB(a,f.attributes.id.value));if(null==k)return;k.update(e,c);Bb(d,oB(k))}Jb(d,function(a){return a.Ee});
Bb(a.B,d)};
uB=function(a){a.g&&(a.g.g=[]);g.Tb(a.o,function(a){a.g=[]});
g.Tb(a.A,function(a){a.g=[]})};
qB=function(a){a.g||(a.g=new nB);return a.g};
rB=function(a,b){a.o[b]||(a.o[b]=new nB);return a.o[b]};
sB=function(a,b){a.A[b]||(a.A[b]=new nB);return a.A[b]};
g.vB=function(){this.ya=0;this.g=new window.Float64Array(128);this.o=new window.Float64Array(128);this.B=1;this.A=!1};
wB=function(a){if(a.g.length<a.ya+1){var b=2*a.g.length;b+=2;var c=a.g;a.g=new window.Float64Array(b+1);var d=a.o;a.o=new window.Float64Array(b+1);for(b=0;b<a.ya+1;b++)a.g[b]=c[b],a.o[b]=d[b]}};
g.xB=function(a,b,c,d,e,f){aB.call(this,a,b,c||void 0);this.indexRange=d;this.C=null;this.index=new g.vB;this.A=e;this.lastModified=f};
yB=function(a,b,c,d){for(var e=[];b<=a.index.Jb();b++){var f=a.index,k=b;f=Mz(f.Qj(k),k+1<f.ya||f.A?f.g[k+1]-f.g[k]:-1);k=a.index.Ed(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m);e.push(new Oz(3,a,f,b,k,l,m,n,b==a.index.Jb()&&m+n==f.length));if(f.start+m+n>=c+d)break}return new YA(e)};
zB=function(a,b,c){return a(b,c).then(function(b){var d=!b.responseText||2048<b.responseText.length?"":0==b.responseText.indexOf("https://")?b.responseText:"";return d?zB(a,d,c):b})};
AB=function(a,b){return zB(function(a,b){return pt(a,b,4,1E3)},a,b)};
BB=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.R.call(this);this.V=this.duration=0;this.isLive=this.B=!1;this.K=(0,g.Ru)();this.D=window.Infinity;this.g={};this.Y=a||"";this.F=this.T=0;this.C=null;this.pa=!!b&&b.g("html5_live_nonzero_first_segment_start_time");this.o=!1;this.N=[];this.wa=!!b&&b.g("html5_live_self_init_segments");this.A=null;this.xa=c;this.ka=!b||!b.g("html5_manifest_without_credentials");this.H=0;this.U=!!b&&b.g("disable_html5_manifest_namespace_redux");
this.Z="";this.J=window.NaN;this.ha=b&&b.g("disable_html5_duration_caching")?window.Infinity:10;this.aa=!!b&&b.o("html5_stale_dash_manifest_retry_factor")||1;this.ca=!!b&&b.g("legacy_html5_floor_duration")};
CB=function(a){return Vb(a.g,function(a){return!!a.info.Yb})};
HB=function(a,b,c,d,e){c=void 0===c?0:c;return(void 0===d?0:d)?DB(a,b,e):EB(a,b,c)};
EB=function(a,b,c){c=void 0===c?0:c;var d=new BB;d.duration=c||0;(0,g.G)(a,function(a){var c=IB(a,b,d.duration),e=Lz(a.init),l=Lz(a.index),m=(0,window.parseInt)(a.clen,10),n=JB(a.url,c,a.s);a=(0,window.parseInt)(a.lmt,10);n&&(c=new g.xB(n,c,e,l,m,a),d.g[c.info.id]=c)});
return d};
DB=function(a,b,c){var d=new BB("",null,!0);(0,g.G)(a,function(a){var e=IB(a,b),k=JB(a.url,e,a.s),l=(0,window.parseInt)(a.target_duration_sec,10);a=(0,window.parseInt)(a.max_dvr_duration_sec,10)||14400;k&&(e=new hB(k,e,l,c&&c.g("html5_manifestless_always"),a),d.g[e.info.id]=e)});
d.B=!0;d.o=!0;d.isLive=!0;return d};
IB=function(a,b,c){c=void 0===c?0:c;var d=a.type,e=a.itag,f=KB(a),k=null;by(d)&&(k=(a.size||"640x360").split("x"),k=new Sx(+k[0],+k[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries,!!a.isAcceleratedUiEnabled),d=LB(d,k));var l=null,m=null;if(ay(d)){l=0;if("258"==e||"261"==e)l=6;l=new Px(l,+a.spatial_audio_type);a.name&&(m=new qx(a.name,a.audio_track_id,"1"==a.isDefault))}e=(0,window.parseInt)(a.bitrate,10)/8;var n=(0,window.parseInt)(a.clen,
10);c=c&&n?n/c:0;var q=null;b&&a.drm_families&&(q={},(0,g.G)(a.drm_families.split(","),function(a){q[a]=b[a]}));
return new Xx(f,d,l,k,m,q,e,c)};
KB=function(a){var b=a.itag;a.xtags&&(b=a.itag+";"+a.xtags);return b};
JB=function(a,b,c){c=void 0===c?"":c;var d=new g.DA(a);a.match(/https:\/\/yt.akamaized.net/)||d.set("alr","yes");d.set("keepalive","yes");d.set("ratebypass","yes");d.set("mime",(0,window.encodeURIComponent)(b.mimeType.split(";")[0]));c&&d.set("signature",vs(c));return d};
PB=function(a,b){var c=kB(b,"id");c=c.replace(":",";");"captions"==c&&(c=kB(b,"lang"));var d=kB(b,"mimeType"),e=kB(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=(0,window.parseInt)(kB(b,"bandwidth"),10)/8;var f=(0,window.parseInt)(lB(b,"BaseURL").getAttribute(MB(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var k=null;if(by(d)){k=(0,window.parseInt)(kB(b,"width"),10);var l=(0,window.parseInt)(kB(b,"height"),10),m=(0,window.parseInt)(kB(b,"frameRate"),10),n=NB(kB(b,MB(a,"projectionType")));a:switch(kB(b,
MB(a,"stereoLayout"))){case "layout_left_right":var q=1;break a;case "layout_top_bottom":q=2;break a;default:q=0}k=new Sx(k,l,m,n,q)}m=l=null;if(ay(d)){kB(b,"audioSamplingRate");l=(0,window.parseInt)(kB(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10);var t;m=kB(b,MB(a,"spatialAudioType"));"spatial_audio_type_ambisonics_5_1"==m?t=1:"spatial_audio_type_ambisonics_quad"==m&&(t=2);l=new Px(l,t);t=kB(b,"lang")||"und";(m=lB(b,"Role"))?(q=kB(m,"value")||"",bc(OB,q)?(m=t+"."+OB[q],n="main"==
q,t=kB(b,MB(a,"langName"))||t+" - "+q,m=new qx(t,m,n)):m=null):m=null}n=null;if(t=lB(b,"ContentProtection"))if(g.$s())if((n=t.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==n.value)for(n={},t=t.firstChild;null!=t;t=t.nextSibling)"yt:SystemURL"==t.nodeName&&(n[t.attributes.type.value]=t.textContent.trim());else n=null;else if((n=t.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==n.textContent)for(n={},t=t.firstChild;null!=t;t=t.nextSibling)"SystemURL"==t.localName&&"http://youtube.com/yt/2012/10/10"==
t.namespaceURI&&(n[t.attributes.type.textContent]=t.textContent.trim());else n=null;return new Xx(c,d,l,k,m,n,e,f)};
NB=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
QB=function(a,b){b=void 0===b?"":b;a.F=1;a.K=(0,g.Ru)();return g.bg(AB(b||a.Y,{format:"RAW",method:"GET",withCredentials:a.ka}).then((0,g.z)(a.oy,a)),(0,g.z)(a.ry,a))};
RB=function(a,b){var c=new BB,d;for(d in a)c[d]=jc(a[d]);var e={},f=!1;g.Tb(a.g,function(a,c){if(a){var d=b(a,c);d?(e[c]=d,f=!0):e[c]=a}});
c.g=e;return f?c:null};
SB=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=(0,window.parseInt)(a.split("-")[1],10)?e=Lz(a):d=d+"?range="+a));return new Iy(b.ra,b.Ee,b.durationSecs,b.g,d,e,b.o)};
TB=function(a){return a.isLive&&(0,g.Ru)()-a.K>=a.D};
UB=function(a,b){var c=b||1<=a.aa?a.D:a.D*a.aa*(1+Math.random());(0,window.isFinite)(c)&&(TB(a)?a.Qr():(c=Math.max(0,a.K+c-(0,g.Ru)()),a.A||(a.A=new g.O(a.Qr,c,a),g.J(a,a.A)),a.A.start(c)))};
VB=function(a){if(!(0,window.isNaN)(a.J))return a.J;var b=a.g,c;for(c in b){var d=b[c].index;if(d&&d.Nb()){b=0;for(c=d.ue();c<=d.Jb();c++)b+=d.getDuration(c);b/=d.zg();b=.5*Math.round(b/.5);d.zg()>a.ha&&(a.J=b);return b}if(a.isLive&&(d=b[c],d.A))return d.A}return window.NaN};
WB=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d&&d.Nb()){var e=d.Ve(b),f=d.mn(e);if(f)return f+b-d.Ed(e)}}return window.NaN};
XB=function(a,b){g.Tb(a.g,function(a){g.Tb(b,function(b,c){var d=a.B;d.A.set(c,b);d.B.set(c,b);d.o&&d.o.set(c,b)})})};
YB=function(a,b,c){var d=!1,e;for(e in a.g)if(!!a.g[e].info.video==c){var f=a.g[e].index;fB(f,b.ra)||(f.Or(b),d=!0)}return d};
MB=function(a,b){return a.U?"yt:"+b:a.Z+":"+b};
LB=function(a,b){if('video/webm; codecs="vp9.2"'!=a)return a;null===ZB&&(ZB=window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16"')&&!window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99"'));ZB&&(a='video/webm; codecs="vp09.02.51.10.01.'+("bt2020"==b.primaries?"09":"01")+"."+("smpte2084"==b.g?"16":"arib-std-b67"==b.g?"18":"01")+'"');return a};
$B=function(a,b,c,d){this.g=a;this.o=b;this.C=c;this.B={};this.A=null;this.fairPlayCert="";this.D=!!d&&d.g("edge_nonprefixed_eme")};
bC=function(a){return a.D?!1:!a.A&&!!aC()&&"com.microsoft.playready"==a.o};
cC=function(a){return"com.microsoft.playready"==a.o};
dC=function(a){return!a.A&&!!aC()&&"com.apple.fps.1_0"==a.o};
aC=function(){var a=window.MSMediaKeys;ft()&&!a&&(a=window.WebKitMediaKeys);return a&&a.isTypeSupported?a:null};
gC=function(a){return window.navigator.requestMediaKeySystemAccess?g.bt?g.aj("45"):eC||g.wd?a.g("edge_nonprefixed_eme"):g.fC?g.aj("47"):!a.g("html5_no_nonprefixed_eme_for_other"):!1};
iC=function(a,b){g.I.call(this);this.A=[];this.o={};this.g={};this.B=null;this.C=b;hC(this,a)};
hC=function(a,b){for(var c in b)for(var d=g.na(b[c]),e=d.next();!e.done;e=d.next()){e=e.value;if(!e.Yb)return;for(var f in e.Yb){if(!jC[f])return;for(var k=g.na(jC[f]),l=k.next();!l.done;l=k.next())l=l.value,a.o[l]=a.o[l]||new $B(f,l,e.Yb[f],a.C),a.g[f]=a.g[f]||{},a.g[f][e.mimeType]=!0}}a.A=kC.filter(function(b){return!!a.o[b]})};
lC=function(a,b){function c(a){b.B[a.contentType]=!0}
if(cC(b)){var d=oz(),e;for(e in a.g[b.g])b.B[e]=!!d.canPlayType(e)}else d=b.A.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
nC=function(a){if(aC()&&g.cj)a.B(new $B("fairplay","com.apple.fps.1_0","",a.C));else{var b=mC(),c=g.nb(a.A,function(c){var d=a.o[c],f=!1,k=!1,l;for(l in a.g[d.g])b(l,c)&&(d.B[l]=!0,f=f||0==l.indexOf("audio/"),k=k||0==l.indexOf("video/"));return f&&k});
c=c?a.o[c]:null;a.A=[];a.B(c)}};
mC=function(){var a=aC();if(a)return function(b,d){return a.isTypeSupported(d,b)};
var b=oz();return b&&(b.addKey||b.webkitAddKey)?(0,g.z)(b.canPlayType,b):function(){return!1}};
oC=function(){this.g=8192;this.o=17;this.B=13E4;this.C=.5;this.F=!1;this.K=!0;this.H=!1;this.D=60;this.A=0;this.J=!1};
pC=function(a){this.C=Math.exp(Math.log(.5)/a);this.A=this.B=0};
qC=function(a,b,c){this.J=0;this.F=a;this.C=b||.5;this.D=c||0;this.H="index";this.A=0;this.B=[]};
sC=function(a,b){rC(a,"value");var c=b*a.A,d=0,e=window.NaN;a.B.some(function(a){d+=a.weight;e=a.value;if(d>=c)return!0});
return e};
rC=function(a,b){a.H!=b&&(a.H=b,Kb(a.B,b))};
tC=function(a){this.B=a;this.A=[]};
uC=function(){this.A=0;this.o=this.H=this.C=this.D=window.NaN;this.F=0;this.K=this.N=this.B=this.J=window.NaN;this.g=""};
vC=function(a){this.policy=a;this.J=this.K=0;this.B=-1;this.F=(0,g.Ru)();this.D=new qC(4,.6);this.H=new pC(4);this.A=this.policy.F?new pC(this.policy.o):new qC(this.policy.o,.5,.4);this.C=new tC(this.policy.o);this.g=this.policy.H?new pC(this.policy.D):null;this.o=new qC(30,.5);a=g.vv("yt-player-bandwidth")||{};var b=0<a.byterate?a.byterate:this.policy.B;this.A.g(this.policy.C,b);this.g&&this.g.g(this.policy.C,0<a.ltByterate?a.ltByterate:b);0<a.delay&&this.D.g(1,Math.min(+a.delay,2));0<a.stall?this.H.g(1,
+a.stall):0<a.tailDelay&&this.H.g(1,+a.tailDelay);this.B=(0,g.Ru)()};
wC=function(a,b,c){b=Math.max(b,.05);a.A.g(b,c/b);a.g&&a.g.g(b,c/b);a.F=(0,g.Ru)()};
yC=function(a,b,c){b=Math.max(b,a.policy.g);a.H.g(1,c/b);xC(a)};
zC=function(a){a=a.D.o();a=(0,window.isNaN)(a)?.5:a;return a=Math.min(a,5)};
AC=function(a,b,c){(0,window.isNaN)(c)||(a.J+=c);(0,window.isNaN)(b)||(a.K+=b)};
BC=function(a){return a.H.o()||0};
CC=function(a){var b=a.A.o();b=0<b?b:1;if(!a.policy.K)return b;a=a.C.o();a=0<a?a:1;return a>2*b?(b+a)/2:b};
DC=function(a){a=a.g.o();return 0<a?a:1};
EC=function(a){var b={};b.delay=zC(a);b.stall=BC(a);b.byterate=CC(a);a.g&&(b.ltByterate=DC(a));return b};
xC=function(a){-1<a.B&&3E4<(0,g.Ru)()-a.B&&(py(EC(a)),a.B=(0,g.Ru)())};
FC=function(a){return 4E3<=(0,g.Ru)()-a.F};
GC=function(a,b,c){this.videoInfos=a;this.g=b||null;this.audioTracks=[];this.o=c||null;if(this.g){var d={};(0,g.G)(this.g,(0,g.z)(function(a){if(a.Sb&&!d[a.id]){var b=new ux(a.id,a.Sb);d[a.id]=b;this.audioTracks.push(b)}},this))}};
HC=function(a,b,c){this.o=a;this.g=b;this.D=c;this.B={};this.C=!!g.y("cast.receiver.platform.canDisplayType");this.A=!this.C&&g.y("cast.receiver.platform.getValue")&&window.cast.receiver.platform.getValue("max-video-resolution-vpx")||null};
LC=function(a,b,c){if(2.2!=IC&&rz(a.g)||c)return rt();var d={};a=oz();b=g.na(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,Wx(c.kd)in JC||"5"==Wx(c.kd)?0:KC(a,c.kd.mimeType)){var e=c.kd.video.quality;d[e]&&2!=d[e].kd.containerType||(d[e]=c)}var f=[];d.auto&&f.push(d.auto);(0,g.G)(Ux,function(a){(a=d[a])&&f.push(a)});
return tt(f)};
MC=function(){var a=at()&&!g.aj(29),b=Zs("google tv")&&Zs("chrome")&&!g.aj(30);return a||b?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&window.HTMLMediaElement.prototype.webkitSourceAddId)};
KC=function(a,b){var c=a.canPlayType(b);NC?c=c||OC[b]:2.2==IC?c=c||PC[b]:at()&&(c=c||QC[b]);return!!c};
g.RC=function(){return!(!KC(oz(),"application/x-mpegURL")&&!MC())};
TC=function(a,b){var c={},d;for(d in b.g){var e=b.g[d],f=Wx(e.info);("304"!=f&&"266"!=f||b.B)&&SC(a,e.info)&&(c[e.info.o]=c[e.info.o]||[],c[e.info.o].push(e.info))}return c};
WC=function(a,b,c){var d={},e;g.Tb(b,function(a,b){var f=a.filter(function(a){return a.Yb?c&&a.Yb[c.g]&&c.B[a.mimeType]?"261"!=Wx(a)||UC(this,VC)?!0:(e||(e=oz()),!1):!1:!0},this);
f.length&&(d[b]=f)},a);
return d};
xD=function(a,b,c,d,e){function f(a){return!!k[a]}
var k=TC(a,b);CB(b)&&(k=WC(a,k,c));var l=a.o.g("html5_disable_vp9_hdr_enc")?XC:YC;a.g?!Zs("windows nt 5.1")||g.fC&&!a.o.g("html5_prefer_h264_on_xp")?(b.Ye()||b.Ze()||b.Xd())&&ZC&&6>=IC&&(l=$C):l=$C:l=aD;c=bD;d&&(a.g&&(l=$C),c=rD);if(dt()||et()||UC(a,VC))c=sD;(b.Ye()||b.Ze()||b.Xd())&&e&&(c=tD.concat(c));b=g.nb(l,f);d=g.nb(c,f);if(!b||!d)return rt();"9"==b&&k.h&&(e=function(a,b){return Math.max(a,b.video.height)},c=bd(k["9"],e,0),bd(k.h,e,0)>1.5*c&&(b="h"),a.o.g("html5_vp9_live_whitelist"));
e=k[b];c=k[d];e=uD(a,e);vD(e,c);return tt(new GC(e,c,wD(a,k,b,d)))};
wD=function(a,b,c,d){var e=a.g?b.h:b[c];b=b.a;c=a.g&&"h"!=c;return e&&b&&(c||"a"!=d)?(e=uD(a,e),vD(e,b),new GC(e,b)):null};
vD=function(a,b){g.Ib(a,function(a,b){return b.video.height*b.video.width-a.video.height*a.video.width||b.g-a.g});
g.Ib(b,function(a,b){return b.g-a.g})};
uD=function(a,b){var c=(0,g.El)(b,function(a){return 32<a.video.fps});
c&&(b=a.D||UC(a,yD)?(0,g.Md)(b,function(a){var b;(b=32<a.video.fps)||(a=a.video,b=!(854<a.width||480<a.height));return b}):(0,g.Md)(b,function(a){return!(32<a.video.fps)}));
c&&dt()&&(b=(0,g.Md)(b,function(a){return"299"!=Wx(a)}));
return b};
SC=function(a,b){if("0"==Wx(b)&&!a.g)return!0;var c=b.mimeType;if(b.video&&(Tx(b.video)||"bt2020"==b.video.primaries)&&48!=window.screen.pixelDepth&&!UC(a,zD)||"338"==Wx(b)&&!(a.o.g("html5_chrome_ambisonics_opus")&&g.bt&&g.aj(53)))return!1;var d={};b.video&&(b.video.width&&(d[AD.name]=b.video.width),b.video.height&&(d[BD.name]=b.video.height),b.video.fps&&(d[yD.name]=b.video.fps),b.video.g&&(d[zD.name]=b.video.g),b.g&&(d[CD.name]=8*b.g),"("==b.o&&(d[DD.name]="subsample"));b.audio&&b.audio.g&&(d[VC.name]=
b.audio.g);for(var e in ED){var f=ED[e];if(d[f.name]&&!(f==zD&&0<b.mimeType.indexOf("vp09.02")))if(UC(a,f))if(a.A){if(a.A[f.name]<d[f.name])return!1}else c=c+"; "+f.name+"="+d[f.name];else if(Zx(b)&&f==zD)return!1}!a.o.g("disable_html5_cast_hdcp_filter2")&&a.C&&b.video&&1080<b.video.o&&b.Yb&&(c+="; hdcp=2.2");return FD(a,c)};
UC=function(a,b){if(!(b.name in a.B)){var c=a.B,d=b.name;if(a.A)var e=!!a.A[b.name];else b.video?(e='video/webm; codecs="vp9"',FD(a,e)||(e='video/mp4; codecs="avc1.4d401e"')):(e='audio/webm; codecs="opus"',FD(a,e)||(e='audio/mp4; codecs="mp4a.40.2"')),e=FD(a,e+"; "+b.name+"="+b.valid)&&!FD(a,e+"; "+b.name+"="+b.Tf);c[d]=e}return a.B[b.name]};
FD=function(a,b){return a.C?window.cast.receiver.platform.canDisplayType(b):Hz(b)};
GD=function(){g.R.call(this);this.Ia={}};
LD=function(a,b,c){var d;(d=a.adformat)||(d=(a=a.attrib)&&bc(HD,a)&&bc(ID,a)?ID[a]+"_"+HD[a]:void 0);a=d;if(!a)return null;d=a.match(JD);if(!d||5!=d.length)return null;d=KD(a);return b||c||d?a:null};
KD=function(a){a=a.match(JD);var b=(0,window.parseInt)(a[3],10),c=[7,8,10,5,6];return!(1==(0,window.parseInt)(a[1],10)&&8==b)&&0<=c.indexOf(b)};
MD=function(a){return a.docid||a.video_id||a.videoId||a.id};
OD=function(a,b){if(b){if("fullwidth"==a)return window.Infinity;if("fullheight"==a)return 0}if(a){var c=a.match(ND);if(c){var d=(0,window.parseFloat)(c[2]);if(0<d)return(0,window.parseFloat)(c[1])/d}}return window.NaN};
PD=function(a,b){return void 0==b?a:"1"==b?!0:!1};
QD=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
RD=function(a,b){return void 0==b?a:Number(b)};
SD=function(a,b){var c=g.Rx.auto,d=b?g.Rx[b]:void 0;return d>g.Rx.medium?new gy(d,c,!1):d>=c?new gy(c,d,!1):a};
TD=function(a,b){return void 0==b?a:b.toString()};
VD=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.F)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(UD)for(b=1,c=0;c<UD.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^UD.charCodeAt(c),b++;return a};
g.WD=function(){return(0,g.H)(VD(),function(a){return(a&15).toString(16)}).join("")};
XD=function(){for(var a=VD(),b=[],c=0;c<a.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c]&63));return b.join("")};
sE=function(a){g.I.call(this);a=g.ic(a);this.D="detailpage";this.ha=null;this.ca=!1;this.U={};this.Hi=TD("",a.csp_nonce);this.experiments=new dy(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=window.document.location.toString()}catch(f){b=""}this.fb=b;this.aa=(this.o=YD.test(this.fb))?TD("",a.loaderUrl):this.fb;this.jb=ZD.test(this.aa);this.vl=$D.test(this.aa);this.Z=(this.ZG=(this.Le=PD(!1,a.ssl_stream))||PD(!1,a.ssl))?"https":"http";this.baseYtUrl=yA(a.BASE_YT_URL)||
yA(this.fb)||this.Z+"://www.youtube.com/";"adunit"==a.el?this.D=this.vl?"adunit":"embedded":"embedded"==a.el||this.jb?this.D=QD(this.D,a.el,aE):a.el&&(this.D="embedded");this.Y=this.D;Vu();b=null;var c=a.ps,d=g.rb(bE,c);!c||d&&!this.jb||(b=c);this.g=b;this.H=(this.Mb=g.rb(bE,this.g))&&"play"!=this.g&&"jamboard"!=this.g;this.He=!this.H;b={};this.A=(b.c=a.c||"web",b.cver=a.cver||"html5",b.cplayer="UNIPLAYER",b);this.Qa=!(!oz().defaultPlaybackRate||g.uh&&!cE("chrome")||dE||eE||cE("android")||cE("silk"));
this.isMobile=PD("blazer"==this.g,a.is_html5_mobile_device);this.ol=this.experiments.g("uniplayer_dbp")&&this.isMobile&&(!(this.o&&this.experiments.g("disallow_background_check_for_embed"))||at()&&g.aj(54));this.wa="3"==this.B||this.isMobile||PD(!1,a.use_media_volume);this.J=sz();this.qz=fE;(dE||eE||g.cj)&&"blazer"!=this.g&&g.gE(this);this.dd=(g.hE(this)||iE(this)||"TVHTML5_UNPLUGGED"==this.A.c)&&this.experiments.g("use_rawcc_captions");this.F=PD(!1,a.is_dni);this.Xa=TD("#cc181e",a.dni_color);this.sc=
PD("adunit"!=this.Y&&!jE(this)&&!this.Mb,this.experiments.g("embed_show_infobar")&&!this.F||a.showinfo);this.Je=PD(!1,a.playsinline);b=this.isMobile&&ZC&&2.3>=IC;c=this.isMobile;c=kE(this)||!b&&PD(c,a.use_native_controls)?"3":"1";this.B="0"!=a.controls?c:"0";this.useTabletControls=this.isMobile;this.color=QD("red",a.color,lE);this.Ll="3"==this.B||PD(!1,a.modestbranding)&&"red"==this.color;this.ka=0==this.aa.indexOf(this.baseYtUrl);this.Bf=(c=!this.ka&&!jE(this)&&!this.H&&!this.Mb)&&(this.F||!this.Ll)&&
"1"==this.B;this.Cf=g.mE(this)&&c&&!this.sc&&!this.Bf;this.XG=this.Nl=b;this.ih=!eE||g.zc(601)?!0:!1;this.Li=this.o||!1;this.pa=jE(this)?"":(this.aa||a.post_message_origin||"").substring(0,128);this.widgetReferrer=TD("",a.widget_referrer);this.qb=(!this.jb||PD(!0,a.enablecastapi))&&"1"==this.B&&!this.isMobile&&(jE(this)||g.mE(this)||g.nE(this));this.Ha=PD(!1,a.enableunplugged);this.Ii=(this.da=PD(!1,a.autoplay))||jE(this);this.Dc=!this.isMobile&&!Zs("nintendo wiiu")&&!Zs("nintendo 3ds")||PD(!1,a.autoplayoverride);
b=!1;this.J&&!kE(this)&&this.experiments.g("mweb_muted_autoplay")?fj&&g.zc(602)?b=!0:g.oE&&g.bt&&4.4<=IC&&(b=g.oE&&Zs("version/")?57<=(0,window.parseFloat)(/Chrome\/(\d+)/.exec(g.Rb)[1]):53<=(0,window.parseFloat)(/Chrome\/(\d+)/.exec(g.Rb)[1])):b=!1;this.cd=b;b=(jE(this)||"adunit"==this.Y)&&("blazer"==this.g||"mweb-polymer"==this.g);this.Db=!PD(!0,a.fs);this.Aa=!this.Db&&(b||Pt());this.Fi=this.experiments.g("uniplayer_block_pip")&&at()&&g.aj(58);this.Cc=PD(!1,a.force_rel)||PD(!this.Mb,a.rel);this.xa=
g.nE(this);this.oc="blazer"==this.g||"mweb-polymer"==this.g;switch(this.g){case "blogger":b="bl";break;case "gmail":b="gm";break;case "books":b="gb";break;case "docs":b="gd";break;case "google-live":b="gl";break;case "play":b="gp";break;case "chat":b="hc";break;case "picasaweb":b="pw";break;default:b="yt"}this.Va=b;this.Ib=TD("",a.authuser);this.jD=(this.experiments.g("embed_show_watchlater_login")&&this.o||!!this.Ib)&&PD(!this.H,a.showwatchlater);this.oe=PD(!1,a.disablekb);this.pe=TD("",a.ecver);
this.Ki=this.experiments.g("mweb_autonav")&&pE();this.loop=PD(!1,a.loop);this.pageId=TD("",a.pageid);this.hz=SD(ky,a.vq);this.pz=TD("",a.playerapiid);this.hD=PD(!0,a.canplaylive);this.Ji=PD(this.Mb,a.ss);(b=a.video_container_override)?(c=b.split("x"),2!=c.length?b=null:(b=(0,window.parseInt)(c[0],10),c=(0,window.parseInt)(c[1],10),b=(0,window.isNaN)(b)||(0,window.isNaN)(c)||0>=b*c?null:new g.hd(b,c))):b=null;this.jh=b;this.mute=PD(!1,a.mute);this.storeUserVolume=!this.mute&&PD("0"!=this.B,a.store_user_volume);
this.Ne="3"==this.B?3:QD(void 0,a.iv_load_policy,qE);this.Pe=TD("",a.cc_lang_pref);b=QD(2,a.cc_load_policy,qE);"3"==this.B&&2==b&&(b=3);this.Qe=b;this.Ka=void 0==a.content_v?void 0:a.content_v.toString();this.Mi=void 0==a.framer?void 0:a.framer.toString();this.jc=TD("en_US",a.hl);this.region=TD("US",a.cr);this.hostLanguage=TD("en",a.host_language);this.Ja=PD(!1,a.privembed);this.Ei=!this.Ja&&Math.random()<this.experiments.o("web_player_api_logging_fraction");b=!this.experiments.g("web_player_interaction_logging_killswitch");
this.K=!this.Ja&&b;this.Ie="";this.Cb=new window.Set;this.C=PD(!0,a.deviceHasDisplay);this.xe=RD(this.xe,a.ismb);this.ge(a);this.U=a;this.N=new GD;g.J(this,this.N);this.V=this.isMobile;b=a;b.innertube_api_key&&b.innertube_api_version&&this.A.c&&b.innertube_context_client_version&&this.hostLanguage&&this.region||this.experiments.g("disable_innertube_config_reporting")||g.ws(Error("MISSING_INNERTUBE_CONFIG,api_key="+b.innertube_api_key+",api_version="+b.innertube_api_version+",interface="+this.A.c+
",context_client_version="+b.innertube_context_client_version+",host_language="+this.hostLanguage+",region="+this.region));c=TD("",b.apiary_host);d=TD("",b.apiary_host_firstparty);var e=TD("",b.xhr_apiary_host);this.experiments.g("disable_html5_apiary_url_validation")||(AA(c)||(c=""),AA(d)||(d=""),AA(e)||(e=""));this.Ge={apiaryHost:c,Bx:d,gapiHintOverride:PD(!1,b.gapi_hint_override),gapiHintParams:TD("",b.gapi_hint_params),innertubeApiKey:TD("",b.innertube_api_key),innertubeApiVersion:TD("",b.innertube_api_version),
Em:this.A.c,innertubeContextClientVersion:TD("",b.innertube_context_client_version),Gm:this.hostLanguage,Fm:this.region,Fj:"",xhrApiaryHost:e};this.Af=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.T=new HC(this.experiments,this.C,rE(this)||dt()||et()||/STEAK/.test(this.A.cmodel));b=new oC;g.gE(this)&&(b.F=!0,b.C=.1);this.experiments.g("html5_ewma_bandwidth_estimator")&&(b.F=!0);this.experiments.g("html5_disable_aux_bandwidth_estimator")&&(b.K=!1);this.experiments.g("html5_use_long_term_bandwidth_estimator")&&
(b.H=!0,b.D=this.experiments.o("html5_long_term_bandwidth_window_size")||b.D);this.experiments.g("html5_elbow_tracking_tweaks")&&(b.J=!0,b.g=2048);this.xe&&(b.B=this.xe/8);b.o=this.experiments.o("html5_bandwidth_window_size")||b.o;this.schedule=new vC(b);this.enableSafetyMode=PD(!1,a.enable_safety_mode);this.ke=jE(this)&&"blazer"!=this.g&&"mweb-polymer"!=this.g;this.Sa=PD(!1,a.send_visitor_id_header)||this.experiments.B;this.Oe=!1;this.Ke=ky};
tE=function(a,b){a.ne=b.get("d",a.ne);a.gh=b.get("f",a.gh)};
vE=function(a,b,c){return b.mf&&(a.experiments.g("legacy_autoplay_flag")||"detailpage"!=uE(b,a)||c||b.Hj)};
wE=function(a){return a.experiments.g("king_crimson_player_redux")&&!a.Mb&&at()&&g.aj(55)&&!a.isAd()};
xE=function(a){var b=g.Gg(a.baseYtUrl);(a=g.Hg(a.baseYtUrl))&&(b+=":"+a);return"www.youtube-nocookie.com"==b?"www.youtube.com":b};
yE=function(a){return"gaming"==a.g?"gaming.youtube.com":xE(a)};
zE=function(a,b,c){return a.Z+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
g.AE=function(a,b){return a.baseYtUrl+"timedtext_video?ref=player&v="+b.videoId};
BE=function(a){return jE(a)&&"gaming"!=a.g&&!g.hE(a)};
kE=function(a){return eE&&!a.Je||Zs("nintendo wiiu")||Zs("nintendo 3ds")?!0:!1};
g.gE=function(a){return ct()||"TV"==a.A.cplatform};
g.CE=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
rE=function(a){return"web"==a.A.c.toLowerCase().substr(0,3)};
g.hE=function(a){return"WEB_UNPLUGGED"==a.A.c};
iE=function(a){return"TV_UNPLUGGED_CAST"==a.A.c};
pE=function(){g.y("yt.mobile.isMobilePersistentUniplayer");return!1};
g.DE=function(a){return a.C&&g.bt&&!NC&&"3"!==a.B?g.oE?a.o&&g.zc(51):!0:!1};
g.EE=function(a){return a.C&&g.fC&&!NC&&"3"!==a.B?g.oE?a.o&&g.zc(48):g.zc(38):!1};
GE=function(a){return g.DE(a)||g.EE(a)||(a.C&&g.uh&&!NC&&"3"!==a.B?g.oE?a.o&&g.zc(37):g.zc(27):!1)||a.C&&g.FE&&!gt()&&g.zc(11)||a.C&&g.cj&&a.experiments.g("safari_enable_spherical")};
HE=function(a){return a.experiments.g("disable_html5_ambisonic_audio")||!(GE(a)||a.experiments.g("html5_enable_spherical")||a.experiments.g("html5_enable_spherical3d"))||g.mE(a)&&ZC||g.fC&&(!g.zc(47)||!g.zc(52)&&g.zc(51))?!1:window.AudioContext||window.webkitAudioContext?!0:!1};
jE=function(a){return"detailpage"==a.Y};
g.mE=function(a){return"embedded"==a.Y};
g.IE=function(a){return"leanback"==a.Y};
g.nE=function(a){return"profilepage"==a.Y};
JE=function(a){return Zs("smart-tv")&&Zs("samsung")&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(a.A.cmodel)};
g.KE=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
LE=function(a){var b;for(b in a){var c=(""+a[b]).replace(/[:,]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
NE=function(a){if(a){var b=[],c;for(c in a)ME.has(c)||b.push(c);b.length&&.01>Math.random()&&g.ws(Error("Unknown house brand player vars: "+b),"WARNING")}};
OE=function(a,b){this.o=a;this.g=b;this.A=0};
PE=function(a){for(var b=[],c=[],d=0,e=a.g.length;d<e;++d){var f=a.g[d];f.bitrate<=a.A?b.push(f):c.push(f)}b.sort(function(a,b){return b.bitrate-a.bitrate});
c.sort(function(a,b){return a.bitrate-b.bitrate});
a.g=b.concat(c)};
QE=function(a,b,c,d,e,f,k,l,m){this.itag=a;this.url=b;this.Kp=c;this.width=d;this.height=e;this.bitrate=k;this.fps=f;this.audioItag=l||null;this.g=m||""};
RE=function(a){for(var b={},c=0,d=a.length;c<d;++c){var e=a[c];var f=e.type.match(/codecs="([^"]*)"/);e=new QE(e.itag,e.url,f?f[1]:"",+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,e.drm_families);b[e.itag]=e}return b};
SE=function(a,b){this.kd=a;this.B=b;this.o=null};
UE=function(a,b,c){if(!NC&&!ft())return rt();b=RE(b);if(!b)return rt();var d={};d=(d.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",d);var e=[],f=[],k=[],l;for(l in b){var m=b[l];if(m.width){var n=b[m.audioItag];if(n){e.push(m);var q="fairplay"==m.g?d:null;k.push(TE([n],[m],m.itag,m.width,m.height,m.fps,void 0,void 0,q))}}else f.push(m)}q=k.reduce(function(a,b){return!!b.kd.Yb&&a},!0)?d:null;
k.push(TE(f,e,"93",0,0,0,"auto",c,q));return LC(a.T,k,wE(a))};
TE=function(a,b,c,d,e,f,k,l,m){var n=new Px;d=new Sx(d,e,f,null,void 0,k);c=new Xx(c,"application/x-mpegURL",n,d,void 0,m);a=new OE(a,b);a.A=l?l:1369843;return new SE(c,a)};
VE=function(a,b){this.kd=a;this.o=b};
WE=function(a,b,c){var d=[];b=g.na(b);for(var e=b.next();!e.done;e=b.next()){var f=e.value;if(f.url){e=new g.DA(f.url);f.sig?e.set("signature",f.sig):f.s&&e.set("signature",vs(f.s));for(var k in c)e.set(k,c[k]);f=cy(f.type,f.quality,f.itag,f.width,f.height,!!f.isAccelerated,!!f.isAcceleratedUiEnabled);d.push(new VE(f,e))}}return LC(a.T,d,wE(a))};
XE=function(a){g.R.call(this);this.B=new Cr;this.o=null;this.H={};this.F=a||""};
$E=function(a,b,c){for(c=YE(a,c);0<=c;){var d=a.g[c];if(d.Nb(Math.floor(b/(d.columns*d.rows)))&&(d=ZE(d,b)))return d;c--}return ZE(a.g[0],b)};
bF=function(a,b,c){c=YE(a,c);for(var d,e;0<=c;c--)if(d=a.g[c],e=Math.floor(b/(d.columns*d.rows)),!d.Nb(e)){d=a;var f=c,k=f+"-"+e;d.H[k]||(d.H[k]=!0,Br(d.B,f,{hr:f,Ys:e}))}aF(a)};
aF=function(a){if(!a.o&&!a.B.isEmpty()){var b=a.B.remove(),c=new window.Image;a.F&&(c.crossOrigin=a.F);c.src=cF(a.g[b.hr],b.Ys);c.onload=(0,g.z)(a.K,a,b.hr,b.Ys);a.o=c}};
dF=function(a,b,c,d){this.be={};this.N=a;this.J=b;a=c.split("#");this.F=(0,window.parseInt)(a[0],10);this.D=(0,window.parseInt)(a[1],10);this.o=(0,window.parseInt)(a[2],10);this.columns=(0,window.parseInt)(a[3],10);this.rows=(0,window.parseInt)(a[4],10);this.B=(0,window.parseInt)(a[5],10);this.A=a[6];this.C=a[7];this.K=d};
cF=function(a,b){var c=a.J;c=c.replace("$N",a.A);c=c.replace("$L",a.N.toString());c=c.replace("$M",b.toString());a.C&&(c=g.Rg(c,{sigh:a.C}));return CA(c)};
ZE=function(a,b){var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d,f=e%a.columns;e=Math.floor(e/a.columns);var k=a.Bo()+1-d*c;if(k<a.columns){var l=k;d=1}else l=a.columns,d=k<d?Math.ceil(k/a.columns):a.rows;return{url:cF(a,c),Kx:f,columns:l,Pb:e,rows:d,Zs:a.F*l,Xs:a.D*d}};
eF=function(a,b,c){XE.call(this,c);this.g=this.A(a,b);this.C={};1<this.g.length&&this.g[0].isDefault()&&this.g.splice(0,1)};
YE=function(a,b){var c=a.C[b];if(c)return c;c=a.g.length;for(var d=0;d<c;d++)if(a.g[d].Ad()>=b)return a.C[b]=d;a.C[b]=c-1;return c-1};
fF=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");dF.call(this,a,b,c,0);this.g=null;this.H=d?3:0};
gF=function(a,b){this.N=b;eF.call(this,a,0)};
hF=function(a,b){this.kd=a;this.o=b};
iF=function(a){var b=[];(0,g.G)(a,function(a){if(a.url){var c=cy(a.type,"medium","0");b.push(new hF(c,a.url))}});
return b};
jF=function(a){a=a.url;return 0==a.indexOf("//")?"https:"+a:a};
mF=function(a,b){var c={},d;for(d in kF){var e=b?b+d:d;e=a[e+"_webp"]||a[e];g.lF.test(e)&&(c[kF[d]]=e)}return c};
oF=function(a){var b={};if(!a||!a.thumbnails)return b;var c=null;a=g.na(a.thumbnails);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=jF(d);if(g.lF.test(e)){var f=nF[d.width];f&&(b[f]=e);if(!c||c.width<d.width)c=d}}c&&1280<c.width&&(b["maxresdefault.jpg"]=jF(c));return b};
g.pF=function(a,b){this.version=a;this.args=b};
g.qF=function(a,b){this.topic=a;this.g=b};
g.sF=function(a,b){var c=rF();c&&c.publish.call(c,a.toString(),a,b)};
g.wF=function(a,b,c){var d=rF();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,k){var f=g.y("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(tF[e])try{if(k&&a instanceof g.qF&&a!=d)try{var f=a.g,l=k;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.wf){var q=new f;f.wf=q.version}var t=f.wf}catch(v){}if(!t||l.version!=t)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=window.Reflect.construct(f,
g.Ab(l.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,k)}catch(v){g.ws(v)}},uF[a.toString()]?g.$u()?g.av(f,1,void 0):g.Es(f,0):f())});
tF[e]=!0;vF[a.toString()]||(vF[a.toString()]=[]);vF[a.toString()].push(e);return e};
g.xF=function(a){var b=rF();b&&(g.ta(a)&&(a=[a]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete tF[a]}))};
rF=function(){return g.y("ytPubsub2Pubsub2Instance")};
zF=function(a,b){var c=g.wF(yF,function(d){a.apply(b,arguments);g.xF(c)},b);
return c};
AF=function(){var a=g.P("TIMING_TICK_EXPIRATION");a||(a={},g.Tr("TIMING_TICK_EXPIRATION",a));return a};
BF=function(){var a=AF(),b;for(b in a)g.bv(a[b]);g.Tr("TIMING_TICK_EXPIRATION",{})};
CF=function(a,b){g.pF.call(this,1,arguments)};
DF=function(a,b){g.pF.call(this,1,arguments);this.g=a};
FF=function(a){this.g=a||window;this.J=this.A=0;if(this.g.performance&&this.g.performance.timing&&this.g.performance.getEntriesByType){a=g.ud(this.g||window);this.H=new g.ch(0,0,a.width,a.height);var b;a=[];for(var c=this.g.document.getElementsByTagName("*"),d=0,e=c.length;d<e;d++){var f=c[d];if("IMG"==f.tagName||"IFRAME"==f.tagName)if(b=EF(this,f,f.src)){if("IFRAME"==f.tagName){try{var k=(new FF(f.contentWindow)).A}catch(l){k=0}0<k&&(b.timing=k)}a.push(b)}(b=this.g.getComputedStyle(f)["background-image"])&&
(b=FF.g.exec(b))&&1<b.length&&(b=EF(this,f,b[1]))&&a.push(b)}this.o=a;this.C=this.g.performance.getEntriesByType("resource");this.F=this.g.performance.getEntriesByType("mark");k={};a=0;for(c=this.C.length;a<c;a++)d=this.C[a],k[d.name]=d.responseEnd;a=0;for(c=this.F.length;a<c;a++)d=this.F[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.o.length;a<c;a++)d=this.o[a],d.timing||(d.timing=k[d.url]||0);this.D=GF(this);this.B=HF(this);f=k=0;if(this.B.length)for(c=
a=0,d=this.B.length;c<d;c++)e=this.B[c],f=e.timing-f,0<f&&1>a&&(k+=(1-a)*f),f=e.timing,a=e.progress;this.A=Math.round(k||this.D);this.J=f}};
EF=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.ch(b.left,b.top,b.width,b.height),g.fh(b,a.H))?new IF(b,c):null};
GF=function(a){var b=a.g,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.g-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);f>=k&&(d=1E3*(f-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;var l={};b=b.document.getElementsByTagName("head")[0].children;c=0;for(e=b.length;c<e;c++)f=b[c],"SCRIPT"==f.tagName&&
f.src&&!f.async?l[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(l[f.href]=!0);a.C.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
HF=function(a){var b={0:0},c=0;var d=a.D;for(var e=0,f=a.o.length;e<f;e++){var k=a.o[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.gh(k.region).Rb();b[l]+=k;c+=k}e=g.gh(a.H).Rb();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);a=[];if(c){for(var m in b)d=new JF((0,window.parseFloat)(m),b[m]),a.push(d);a.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(f=a.length;e<f;e++)d=a[e],b+=d.Rb,d.progress=b/c}return a};
IF=function(a,b){this.region=a;this.url=b};
JF=function(a,b){this.Rb=b;this.timing=a};
NF=function(a){KF(a);LF();MF(!1,a);a||(g.P("TIMING_ACTION")&&g.Tr("PREVIOUS_ACTION",g.P("TIMING_ACTION")),g.Tr("TIMING_ACTION",""))};
dG=function(a,b){a:if(!OF(a)){if(!g.mt("send_empty_timing")){var c=g.P("CSI_SERVICE_NAME","youtube");if(!g.P((a||"")+"TIMING_ACTION",void 0)||!c)break a}g.PF("aa",void 0,a);g.QF("ap",1,a);g.QF("yt_fss","c",a);if(g.mt("enable_csi_abandonment_info")&&!a&&!RF("yt_lt")){c=g.P("TIMING_INFO",{});for(var d in c)g.QF(d,c[d]);g.QF("is_nav",1);(d=g.xv())&&g.QF("csn",d);(d=g.P("PREVIOUS_ACTION",void 0))&&g.QF("pa",d);c=SF();c.p=g.P("CLIENT_PROTOCOL")||"unknown";c.t=g.P("CLIENT_TRANSPORT")||"unknown";window.navigator&&
window.navigator.sendBeacon&&g.QF("ba",1);g.QF("yt_vis",TF());if("cold"==c.yt_lt){d=UF.timing||{};g.mt("cold_load_nav_start_web")&&d.navigationStart&&(g.PF("srt",d.responseStart),1!=c.prerender&&VF("n",d.navigationStart));b:if(d.msFirstPaint)c=Math.max(0,d.msFirstPaint);else{if(c=window.chrome)if(c=c.loadTimes,g.Ca(c)){c=c();var e=1E3*Math.min(c.requestTime||window.Infinity,c.startLoadTime||window.Infinity);e=window.Infinity===e?0:d.navigationStart-e;c=Math.max(0,Math.round(1E3*c.firstPaintTime+e)||
0);break b}c=0}0<c&&g.PF("fpt",c);g.PF("nreqs",d.requestStart,void 0);g.PF("nress",d.responseStart,void 0);g.PF("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(g.PF("nrs",d.redirectStart,void 0),g.PF("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(g.PF("ndnss",d.domainLookupStart,void 0),g.PF("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(g.PF("ntcps",d.connectStart,void 0),g.PF("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&
0<d.connectEnd-d.secureConnectionStart&&(g.PF("nstcps",d.secureConnectionStart,void 0),g.PF("ntcpe",d.connectEnd,void 0));UF.getEntriesByType&&WF();d=g.P("SPEEDINDEX_FOR_ACTIONS",void 0);c=g.P("TIMING_ACTION",void 0);d&&-1<d.indexOf(c)&&(d=(0,g.Ru)(),c=new FF,e=(0,g.Ru)(),0<c.A&&(g.QF("si",c.A),g.PF("vsc",XF(c.J)),g.PF("sics",d),g.PF("sice",e)));d=[];if(window.document.querySelector&&UF&&UF.getEntriesByName)for(var f in YF)c=YF[f],ZF(f,c)&&d.push(c);d.length&&g.QF("rc",d.join(","))}g.mt("csi_on_gel")&&
(f={},f.actionType=$F[g.P("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",d=aG(),ev(f,d))}bG(a)}NF(a);g.Tr(a+"TIMING_AFT_KEYS",b);g.Tr(a+"TIMING_ACTION",a);VF("c",void 0,a);g.x("ytglobal.timing"+(a||"")+"ready_",!0,void 0);cG(a)};
g.PF=function(a,b,c){if(!b&&"_"!=a[0]){var d=a;UF.mark&&(g.La(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),UF.mark(d))}d=eG(c);var e=b||(0,g.Ru)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=AF();if(e=d[a])g.bv(e),d[a]=0;fG(c)["tick_"+a]=b;c||b||(0,g.Ru)();g.mt("csi_on_gel")?(d=aG(c),"_start"==a?dv("baseline_"+d)||g.Yu("latencyActionBaselined",{clientActionNonce:d},b):dv("tick_"+a+"_"+d)||g.Yu("latencyActionTicked",{tickName:a,clientActionNonce:d},b),a=!0):a=!1;a||cG(c)};
gG=function(a){var b="above_the_fold";UF&&UF.measure&&(g.La(b,"measure_")||(b="measure_"+b),a?UF.measure(b,a):UF.measure(b))};
VF=function(a,b,c){g.QF("yt_sts",a,c);g.PF("_start",b,c)};
hG=function(a,b){var c=eG(b);return a in c};
g.QF=function(a,b,c){var d=SF(c)[a]=b;fG(c)["info_"+a]=d;if(g.mt("csi_on_gel"))if(a in iG){b={};a=iG[a].split(".");g.rb(jG,a)&&(d=!!d);for(var e=b,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];b[a[a.length-1]]=d;c=aG(c);ev(b,c)}else g.rb(kG,a)||g.ws(Error("Unknown label "+a+" logged with GEL CSI."))};
RF=function(a){var b=SF(void 0);return a in b};
lG=function(a){var b=eG(a);if(b.aft)return b.aft;a=g.P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
cG=function(a){if(!OF(a)){var b=g.P((a||"")+"TIMING_ACTION",void 0),c=eG(a);if(g.y("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=lG(a)))if(g.mt("tighter_critical_section")&&!mG&&(g.sF(nG,new CF(Math.round(b-c._start),a)),mG=!0),a)bG(a);else{b=!0;var d=g.P("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&bG(a)}}};
TF=function(){switch(Ot("visibilityState",window.document)){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
bG=function(a){BF();if(!g.mt("csi_on_gel")){var b=eG(a),c=SF(a),d=b._start,e;for(e in b)if(g.La(e,"_")&&g.za(b[e])){var f=e.slice(1);if(f in oG){var k=(0,g.H)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.y("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))pG(k,f),NF(a)}else{var l=g.P("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.P((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+g.y("ytplayer.config.assets.js");(n=UF.getEntriesByName?UF.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=lG(a);qG(a)&&"youtube"==l&&(g.QF("yt_lt","hot_bg",a),
l=b.vc,n=b.pbs,delete b.aft,c.aft=Math.round(n-l));for(var q in c)"_"!=q.charAt(0)&&(k[q]=c[q]);b.ps=(0,g.Ru)();c={};q=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,q.push(e+"."+l));k.rt=q.join(",");(b=g.y("ytdebug.logTiming"))&&b(k,c);pG(k,f,a);g.sF(yF,new DF(c.aft+(m||0),a))}}};
XF=function(a){return Math.round(UF.timing.navigationStart+a)};
WF=function(){var a=window.location.protocol,b=UF.getEntriesByType("resource"),c=g.nb(b,function(b){return 0==b.name.indexOf(a+"//fonts.googleapis.com/css?family=")});
b=(0,g.Md)(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
b=bd(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.PF("wfcs",XF(c.startTime)),g.PF("wfce",XF(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.PF("wffs",XF(b.startTime)),g.PF("wffe",XF(b.responseEnd)))};
ZF=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=UF.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.PF("rsf_"+b,d+Math.round(c.fetchStart)),g.PF("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(RF("rc")||g.QF("rc",""),0===c.transferSize))?!0:!1:!1};
pG=function(a,b,c){if(g.mt("debug_csi_data")){var d=g.y("yt.timing.csiData");d||(d=[],g.x("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);window.navigator&&window.navigator.sendBeacon&&b?lt(a):g.it(a);MF(!0,c)};
aG=function(a){var b=rG(a).nonce;b||(b=XD(),rG(a).nonce=b);return b};
eG=function(a){return rG(a).tick};
SF=function(a){return rG(a).info};
fG=function(a){a=rG(a);"gel"in a||(a.gel={});return a.gel};
rG=function(a){return g.y("ytcsi."+(a||"")+"data_")||KF(a)};
KF=function(a){var b={tick:{},info:{}};g.x("ytcsi."+(a||"")+"data_",b,void 0);return b};
OF=function(a){return!!g.y("yt.timing."+(a||"")+"pingSent_")};
MF=function(a,b){g.x("yt.timing."+(b||"")+"pingSent_",a,void 0)};
qG=function(a){var b=eG(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==SF(a).yt_pvis};
sG=function(a){var b=null,c=a.text;a.bold&&(b=g.Cd("B",null,b||c));a.italics&&(b=g.Cd("I",null,b||c));a.strikethrough&&(b=g.Cd("STRIKE",null,b||c));a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint&&(a=a.navigationEndpoint.urlEndpoint,b=g.Cd("A",{href:a.url},b||c),"TARGET_NEW_WINDOW"==a.target&&(b.target="_blank"));return b||g.Cd("SPAN",null,c)};
g.tG=function(a){if(a.simpleText)return a.simpleText;if(a.simpleText)a=window.document.createTextNode(a.simpleText);else{var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];d.text&&b.push(sG(d))}a=1==b.length?b[0]:g.Cd("SPAN",null,b)}b=g.Ed("div");b.appendChild(a);return b.textContent};
g.uG=function(a){g.R.call(this);this.adModule=!1;this.adaptiveFormats="";this.Yb=null;this.allowEmbed=!0;this.re=this.backgroundable=!1;this.Od="";this.Ri=this.Qi=this.Pi=!1;this.relativeLoudness=window.NaN;this.np=1;this.watchAjaxToken=this.uf=null;this.author="";this.Qd=0;this.Yp=this.Yi=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.ao=this.channelPath=this.Zi="";this.contentCheckOk=!1;this.Rd=0;this.cq=this.enableCardioBeforePlayback=this.enableCardio=!1;this.endSeconds=0;this.df=!1;
this.xe=this.Cg=0;this.Hj=!1;this.gu=0;this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.va=this.Kh=this.isListed=this.Im=this.mf=!1;this.latencyClass="UNKNOWN";this.isMdxPlayback=!1;this.mdxControlMode=null;this.isPharma=!1;this.kg=0;this.On="";this.Lm=this.br=this.Zd=!1;this.liveChunkReadahead=window.NaN;this.liveStartWalltime=0;this.Pm=null;this.Nh=this.lengthSeconds=0;this.playerParams=null;this.paygated=!1;this.profilePicture=void 0;this.racyCheckOk=!1;this.rootVeType=
0;this.autonavState=1;this.mi=ky;this.Se=!1;this.Uq=this.startSeconds=0;this.spacecastModule=!1;this.Ni=null;this.si=ky;this.Yg=null;this.hlsFormats=this.vf=this.title="";this.gb=this.Qg=this.nf=null;this.dh="vvt";this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=window.Infinity;this.hk=this.Dg=this.qh=!1;this.Wl="";this.pk=this.Qn=this.wq=0;this.Xq=!1;this.bo=!0;this.Zg={};this.zm=!1;this.captionTracks=[];this.mh=[];this.zl=0;this.captionTranslationLanguages=[];this.nh=!1;this.ij=new ux("und",
new qx("Default","und",!0));this.Om=0;this.Ug=this.Eu=!1;this.ae=null;this.Ef=[];this.Oq=!1;this.og={};this.Mu=new g.O(this.Nu,5E3,this);g.J(this,this.Mu);this.Vl=0;this.xq=!0;this.rg=this.Ua=null;this.partialSpherical=this.Xe=!1;this.ad=[];this.tb={};this.keywords={};this.hd={};this.setData(a)};
EG=function(a,b,c){b=b||{};var d={};if(!c)d=a.Ua||{};else if(b.player_response)for(d=g.tg(b.player_response)||{},a.Ua||(a.Ua={}),c=0;c<vG.length;c++){var e=vG[c];e in d&&(a.Ua[e]=d[e])}(c=wG(d))?(a.Od=CA(c.invideoUrl),a.Pi=!!c.adsOnly,a.Qi=!!c.allowInPlaceSwitch):(b.iv_invideo_url&&(a.Od=CA(b.iv_invideo_url)),a.Pi=PD(a.Pi,b.iv_ads_only),a.Qi=PD(a.Qi,b.iv_allow_in_place_switch));b.cta_conversion_urls&&(a.mp=b.cta_conversion_urls);a.isPharma=PD(a.isPharma,b.is_pharma);a.author=TD(a.author,b.author);
a.Yi=PD(a.Yi,b.cc_asr);c=b.ttsurl;xG.test(c)?a.Zi=c:c&&(c=BA(c),xG.test(c)&&(a.Zi=c));d.captions&&d.captions.playerCaptionsTracklistRenderer?yG(a,d.captions.playerCaptionsTracklistRenderer):(a.zm=void 0!=b.caption_tracks,b.caption_tracks&&b.caption_audio_tracks&&(zG(a,b.caption_tracks),AG(a,b.caption_audio_tracks),b.default_audio_track_index&&(a.zl=(0,window.parseInt)(b.default_audio_track_index,10)||0),b.caption_translation_languages&&BG(a,b.caption_translation_languages)),a.nh=PD(a.nh,b.cc_contribute));
a.channelPath=TD(a.channelPath,b.channel_path);a.ao=TD(a.ao,b.short_subscriber_count_text);a.clientPlaybackNonce=TD(a.clientPlaybackNonce,b.cpn);a.subscribed=PD(a.subscribed,b.subscribed);a.YG=RD(a.YG,b.view_count);a.shortViewCount=TD(a.shortViewCount,b.short_view_count_text);a.title=TD(a.title,b.title);a.ypcPreview=TD(a.ypcPreview,b.ypc_preview);a.ypcOrigin=TD(a.ypcOrigin,b.ypc_origin);a.paygated=PD(a.paygated,b.paygated);a.requiresPurchase=PD(a.requiresPurchase,b.requires_purchase);b.keywords&&
(a.keywords=CG(b.keywords));b.rvs&&(a.fe=Ms(b.rvs));a.contentCheckOk=PD(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=PD(a.racyCheckOk,"1"==b.rco);a.oauthToken=TD(a.oauthToken,b.oauth_token);a.visitorData=TD(a.visitorData,b.visitor_data);b.session_data&&(a.Qc=g.Fs(b.session_data));b.endscreen_autoplay_session_data&&(a.fq=g.Fs(b.endscreen_autoplay_session_data));a.eq=TD(a.eq,b.endscreen_ad_tracking_data);a.Bv=PD(a.Bv,b.wait_for_vast_info_cards_xml);a.dv=PD(a.dv,b.suppress_creator_endscreen);a.Lf=TD(a.Lf,
b.wpid);a.ho=TD(a.ho,b.tracking_list||b.tv_list);(0,g.G)(DG,function(a){a in b&&(this.tb[a]=b[a])},a)};
FG=function(a){if(!a||!a.adPlacements)return!1;a=g.na(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
GG=function(a){return!(!a.Ra||!a.Ra.videoInfos.length)};
HG=function(a){return a.o&&Hz('video/webm; codecs="vp9"')&&Vb(a.g,function(a){return Yx(a.info)})};
IG=function(a){return!MC()||a.Yp?!0:!1};
g.JG=function(a){if(!a.rg)return null;var b=g.r(a.rg.latitudeE7)&&g.r(a.rg.longitudeE7)?a.rg.latitudeE7+","+a.rg.longitudeE7:",";return b+=","+(a.rg.clientPermissionState||0)};
KG=function(a){a.fa()||(a.df=!1,a.R("dataloaded",a.tb))};
LG=function(a,b,c){c&&a.oa&&a.oa.dispose();a.oa=b;g.J(a,b);(a.Ze()||a.Ye()||a.Uf()||a.Xd())&&a.ad.push("webgl");a.oa.isLive||(a.va=!1)};
g.NG=function(a,b,c){if(a.fa())return rt();a.Ra=null;a.nf=null;a.Qg=null;var d=b.A,e=d.c;d=d.cmodel;a.Xe=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(e)||/FUGU/.test(d);a:{if(!c&&!IG(a)&&(e=!1,a.spacecastAdaptiveFormats?(LG(a,HB(MG(a,a.spacecastAdaptiveFormats),a.Yb,a.lengthSeconds,void 0),!0),e=!0):a.oa&&a.xk&&(d=RB(a.oa,a.xk))&&(LG(a,d,!0),e=!0),e)){e=xD(b.T,a.oa,a.ae,!0,!1).then(a.Yn,void 0,a).then(a.iq,void 0,a);break a}e=rt()}return e.then(void 0,(0,g.z)(a.Fz,
a,b)).then(void 0,(0,g.z)(a.Cz,a,b,c)).then(void 0,(0,g.z)(a.Dz,a,b)).then(void 0,(0,g.z)(a.Gz,a,b)).then(void 0,(0,g.z)(a.Ez,a,b))};
OG=function(a,b){var c={cpn:a.clientPlaybackNonce,c:b.A.c,cver:b.A.cver};a.fk&&(c.ptk=a.fk,c.oid=a.iu,c.ptchn=a.hu,c.pltype=a.ju);return c};
g.PG=function(a){return a.Ca&&a.Ca.Yb||null};
QG=function(a){var b=a.Ua&&a.Ua.paidContentOverlay&&a.Ua.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.tG(b.text):a.NG};
RG=function(a){var b=a.Ua&&a.Ua.paidContentOverlay&&a.Ua.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?(a=b.durationMs,g.u(a)?fb(a):a):a.gu};
g.SG=function(a,b){return g.u(a.keywords[b])?a.keywords[b]:null};
TG=function(a){if(!a.gb)if(a.Ua&&a.Ua.storyboards){var b=a.Ua.storyboards;b.playerStoryboardSpecRenderer?a.gb=new eF(b.playerStoryboardSpecRenderer.spec,a.lengthSeconds):b.playerLiveStoryboardSpecRenderer&&a.oa&&(a.gb=new gF(b.playerLiveStoryboardSpecRenderer.spec,a.oa))}else a.tb.storyboard_spec?a.gb=new eF(a.tb.storyboard_spec,a.lengthSeconds):a.tb.live_storyboard_spec&&a.oa&&(a.gb=new gF(a.tb.live_storyboard_spec,a.oa));return a.gb};
UG=function(a,b){if(a.oa&&a.va&&a.Ca){var c=a.oa.g[a.Ca.id];if(!c||!c.index)return null;var d=c.index.Ve(b);c=c.index.Ed(d);return{sequence:d,elapsed:Math.floor(1E3*(b-c))}}return null};
VG=function(a){return!!(a.jd||a.adaptiveFormats||a.vf||a.Yg||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)};
WG=function(a){var b=g.rb(a.ad,"ypc");a.ypcPreview&&(b=!1);return a.ac()&&!a.df&&(VG(a)||g.rb(a.ad,"fresca")||g.rb(a.ad,"heartbeat")||b)};
MG=function(a,b,c){b=Ms(b);var d={};c&&(0,g.G)(c.split(","),function(a){(a=a.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[a[1]]={width:a[2],height:a[3]})});
(0,g.G)(b,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return b};
XG=function(a){a=Ms(a);var b={};(0,g.G)(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b};
zG=function(a,b){for(var c=Ms(b),d=0;d<c.length;d++){var e=c[d],f=e.u;xG.test(f)&&a.captionTracks.push(new g.sx({is_translateable:PD(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}};
AG=function(a,b){var c=Ms(b);a.mh=[];(0,g.G)(c,function(a){var b={};g.r(a.aid)&&(b.audioTrackId=a.aid);a.i&&(b.captionTrackIndices=(0,g.H)(a.i.split(","),function(a){return(0,window.parseInt)(a,10)}));
b.hasDefaultTrack=g.r(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=(0,window.parseInt)(a.d,10)||void 0);b.hasForcedTrack=g.r(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=(0,window.parseInt)(a.f,10));b.visibility=YG[(0,window.parseInt)(a.v,10)]||"UNKNOWN";this.mh.push(b)},a)};
BG=function(a,b){for(var c=Ms(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new g.rx({languageCode:e.lc,languageName:e.n}))}};
yG=function(a,b){a.zm=!0;a.captionTracks=[];b.captionTracks&&(0,g.G)(b.captionTracks,function(a){var b=a.baseUrl;xG.test(b)&&(a=new g.sx({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&g.tG(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.mh=b.audioTracks||[];a.zl=b.defaultAudioTrackIndex||0;a.captionTranslationLanguages=b.translationLanguages?(0,g.H)(b.translationLanguages,function(a){return new g.rx({languageCode:a.languageCode,languageName:g.tG(a.languageName)})}):[];
a.nh=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
g.ZG=function(a,b){return!!a.tb[b]};
g.$G=function(a){return a.va&&!a.re};
aH=function(a){return a.va&&a.re};
bH=function(a){var b=g.ic(a.tb);!a.va&&0<a.startSeconds&&(b.start=a.startSeconds);return b};
cH=function(a){a.Ra=a.Ra.o};
g.dH=function(a){if(a.dv)return null;var b=a.tb.iv_endscreen_url;b||(b=a.Ua&&a.Ua.endscreen&&a.Ua.endscreen.endscreenUrlRenderer&&a.Ua.endscreen.endscreenUrlRenderer.url);return b};
uE=function(a,b){if(b.experiments.g("html5_el_migration")){var c=a.adFormat?"adunit":b.Y;c!=b.D&&g.ws(Error("EL mismatch: "+c+" vs "+b.D))}return b.D};
wG=function(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null};
CG=function(a){var b={};(0,g.G)(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b};
eH=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.o=d};
hH=function(a){this.g=a;this.o=0;this.C=-1;this.N=this.g.wc().volume;this.J=this.g.wc().muted;this.D=window.NaN;this.B=0;this.Oa=[];this.A=fH(this.g);this.K=g.gH(this.g);this.F=this.H=0};
g.iH=function(a){a.A.startTime=a.B;a.A.endTime=a.o;a.Oa.length&&g.jb(a.Oa).isEmpty()?a.Oa[a.Oa.length-1]=a.A:a.Oa.length&&a.A.isEmpty()||a.Oa.push(a.A);var b=g.gH(a.g),c=a.g.g.experiments.o("html5_min_vss_watchtime_to_cut_secs_redux");if(c){var d=b-a.K;var e=a.A;e=(e.endTime-e.startTime)/e.playbackRate;var f=a.g.g.experiments.o("html5_max_vss_watchtime_ratio");e>c&&e>d*f&&(c=g.ic(a.A),a.A.endTime=a.A.startTime+.001,c.startTime=c.endTime-.001,a.Oa.push(c))}a.H+=a.o-a.B;a.A=fH(a.g);a.B=a.o;a.K=b};
jH=function(a){return a.H+a.g.o()-a.B};
kH=function(a){a.Oa.length&&a.o==a.B||g.iH(a);var b=a.Oa;a.Oa=[];return b};
lH=function(a,b,c){c-=a.D;return b==a.o&&.5<c};
mH=function(a,b){if(!a.g.g.experiments.g("segment_volume_reporting"))return!1;var c=a.g.wc().volume,d=c!=a.N,e=a.g.wc().muted;if(e!=a.J)return a.J=e,!0;!d||0<=a.C||(a.N=c,a.C=b);c=b-a.C;return 0<=a.C&&2<c?(a.C=-1,!0):!1};
nH=function(a,b){this.g=b;this.A=!1;this.videoData=a};
oH=function(a,b,c){nH.call(this,b,c);this.B=a};
g.qH=function(a){return(a=pH[a.toString()])?a:"YTP_ERROR_LICENSE"};
rH=function(){this.C=this.g=window.NaN;this.A=this.B=this.o=!1};
sH=function(a,b,c,d){if(d=1<d)a.B=!0;if(a.o)b!=a.g&&(a.o=!1);else if(0<b&&a.g==b)return c-a.C>(d||!a.B?1500:400);a.g=b;a.C=c;return!1};
tH=function(a,b){if(!a)return-1;for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c;return-1};
uH=function(a,b){var c=tH(a,b);return 0<=c?a.end(c):window.NaN};
vH=function(a){return a&&a.length?a.end(a.length-1):window.NaN};
wH=function(){var a=[],b=[];return{start:function(b){return a[b]},
end:function(a){return b[a]},
length:a.length}};
xH=function(a,b){var c=uH(a,b);return 0<=c?c-b:0};
yH=function(a){var b="";if(a)for(var c=0;c<a.length;c++)b+=a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3)+",";return b};
zH=function(){};
AH=function(){g.I.call(this);this.A=this.o=null;this.F=this.D=!1;this.C=new g.rf;g.J(this,this.C)};
DH=function(a,b){var c="";b&&(BH(a,b),c=b.g);a.Ic()&&""==c||(c&&a.Ic()!=c&&(CH(a,c),a.A&&(a.A.dispose(),a.A=null)),b&&b.o||a.load(),a.F||(a.addEventListener("volumechange",a.Fp),a.F=!0))};
EH=function(a,b){var c=zz(a.g);return new Az(c,b)};
FH=function(a,b){if(!a.A||a.A.fa()){var c=new Az(zz(a.g),b);Bz(c);DH(a,c.C);a.A=c}};
GH=function(a,b){FH(a,b);var c=a.A;a.A=null;return c};
BH=function(a,b){a.o&&null!=b&&b.g==a.o.g||(a.o&&a.o.dispose(),a.o=b)};
IH=function(a){return xH(HH(a),a.getCurrentTime())};
JH=function(a){var b=HH(a);return 0<vH(b)&&a.getDuration()?uH(b,a.getCurrentTime()):0};
KH=function(a){var b=a.getDuration();return window.Infinity==b?1:b?JH(a)/b:0};
LH=function(a){return{vct:a.getCurrentTime().toFixed(3),vd:a.getDuration().toFixed(3),vpl:yH(a.g.played||wH()),vbu:yH(HH(a)),vpa:a.g.paused,vsk:a.g.seeking,ven:a.g.ended,vpr:a.Tb(),vrs:a.g.readyState,vns:a.g.networkState,vec:a.Ud(),vvol:a.getVolume()}};
MH=function(a){a=a.Ud();switch(a){case 1:return"aborted";case 2:return"network";case 3:return"decode";case 4:return"unsupported";case 5:return"encrypted";default:return a.toString()}};
NH=function(a,b,c){g.Me.call(this,b,a);this.o=c||null};
g.OH=function(a,b){this.o=a||64;this.g=b||null};
PH=function(a,b){return sH(a,b.getCurrentTime(),(0,g.Ru)(),IH(b))};
QH=function(a,b,c){return b==a.o&&c==a.g||b&128&&!c||b&2&&b&16?a:new g.OH(b,c)};
RH=function(a,b){return QH(a,a.o|b)};
SH=function(a,b){return QH(a,a.o&~b)};
TH=function(a){return QH(a,(a.o|4)&-9)};
g.T=function(a,b){return!!(a.o&b)};
g.UH=function(a,b){return b.o==a.o&&b.g==a.g};
VH=function(a){return g.T(a,8)&&!g.T(a,2)};
WH=function(a){return g.T(a,64)&&!g.T(a,8)&&!g.T(a,4)};
g.XH=function(a){return g.T(a,1)&&!g.T(a,2)};
YH=function(a){return g.T(a,128)?-1:g.T(a,2)?0:g.T(a,64)?-1:g.T(a,1)&&!g.T(a,32)?3:g.T(a,8)?1:g.T(a,4)?2:-1};
g.ZH=function(a,b){this.state=a;this.g=b};
$H=function(a,b){return g.T(a.state,b)&&!g.T(a.g,b)?1:!g.T(a.state,b)&&g.T(a.g,b)?-1:0};
aI=function(){this.endTime=this.startTime=-1;this.Al="-";this.playbackRate=1;this.visibilityState=0;this.tl="";this.volume=this.connectionType=this.Oe=0;this.muted=!1};
bI=function(a,b,c,d,e,f,k,l,m,n,q,t,v){this.videoData=a;this.g=b;this.wc=c;this.D=d;this.o=e;this.B=f;this.T=k;this.K=l;this.N=m;this.F=n;this.C=q;this.H=t||function(){};
this.A=null;this.J=v||function(){}};
g.gH=function(a){return cI(a)()};
cI=function(a){if(!a.A){var b=g.A(function(a){var b=(0,g.Ru)();a&&631152E6>=b&&(g.ws(Error("invalid yt.global.now value: "+b)),b=(new Date).getTime()+2);return b},a.g.experiments.g("html5_validate_yt_now"));
a.A=g.A(function(a){return Math.round(b()-a)/1E3},b());
a.J()}return a.A};
dI=function(a){var b=a.wc();g.Ja(b,a.videoData.wc());return b};
fI=function(){return window.navigator.connection&&window.navigator.connection.type?eI[window.navigator.connection.type]||eI.other:0};
fH=function(a){var b=new aI;b.Al=a.wc().cc||"-";b.playbackRate=a.N();var c=a.C();0!=c&&(b.visibilityState=c);a.g.Oe&&(b.Oe=1);c=a.K();c.Sb&&c.Sb.id&&"und"!=c.Sb.id&&(b.tl=c.Sb.id);b.connectionType=fI();b.volume=a.wc().volume;b.muted=a.wc().muted;return b};
hI=function(a){g.I.call(this);var b=this;this.g=a;this.o={};this.wa=1;this.Y=window.NaN;this.A="N";this.D=this.Z=this.B=0;this.N=this.ca="";this.aa=0;this.ha=-1;this.K=this.T=0;this.V=this.J=!1;this.ka=[];this.F=null;this.H=!1;(a=window.navigator.getBattery?window.navigator.getBattery():null)&&a.then&&a.then(function(a){b.F=a});
this.U=(this.g.g.experiments.o("html5_disable_qoe_percentage")||0)>Math.floor(100*Math.random());this.g.g.experiments.g("html5_qoe_unstarted_in_initialization")&&g.gI(this,0,"vps",["N"])};
g.gI=function(a,b,c,d){var e=a.o[c];e||(e=[],a.o[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
kI=function(a,b){b=0<=b?b:g.gH(a.g);var c=a.g.B();if(!(0,window.isNaN)(a.da)&&!(0,window.isNaN)(c.C)){var d=c.C-a.da;0<d&&g.gI(a,b,"bwm",[d,(c.H-a.xa).toFixed(3)])}a.da=c.C;a.xa=c.H;(0,window.isNaN)(c.o)||g.gI(a,b,"bwe",[c.o.toFixed(0)]);a.g.videoData.Xe&&c.g&&iI(a,"bwinfo",c.g);a.F&&g.gI(a,b,"bat",[a.F.level,a.F.charging?"1":"0"]);d=a.g.C();a.ha!=d&&(g.gI(a,b,"vis",[d]),a.ha=d);g.gI(a,b,"cmt",[a.g.o().toFixed(3)]);(d=fI())&&d!=a.aa&&(g.gI(a,b,"conn",[d]),a.aa=d);jI(a,b,c);d=b;0<c.F&&!a.g.g.experiments.g("html5_new_e2e_latency_tracking")&&
g.gI(a,d,"e2el",[c.F,c.J.toFixed(3),c.B.toFixed(3),c.N.toFixed(3),c.K.toFixed(3)]);null!==a.g.videoData.Ni&&(a.o.acc=[a.g.videoData.Ni.join(":")])};
jI=function(a,b,c){if(!(0,window.isNaN)(c.A)){var d=c.A;c.D<d&&(d=c.D);g.gI(a,b,"bh",[d.toFixed(3)])}};
lI=function(a){var b={event:"streamingstats"};if(a.g.videoData.Ca){b.fmt=Wx(a.g.videoData.Ca);var c=a.g.videoData.tc;c&&Wx(c)!=b.fmt&&(b.afmt=Wx(c))}b.cpn=a.g.videoData.clientPlaybackNonce;b.ei=a.g.videoData.eventId;b.el=uE(a.g.videoData,a.g.g);b.docid=a.g.videoData.videoId;b.ns=a.g.g.Va;b.fexp=a.g.g.experiments.experimentIds.toString();b.cl=a.g.g.Ta;a.g.videoData.adFormat&&(b.adformat=a.g.videoData.adFormat);a.g.videoData.va&&(b.live=a.g.videoData.re?"dvr":"live");b.seq=a.wa++;return b};
mI=function(a,b){a.g.g.experiments.g("html5_ajax_qoe_retry")?g.bg(pt(b,{},3,500),g.va):a.g.g.experiments.g("html5_beacon")?lt(b):g.it(b)};
nI=function(a){var b=0,c;for(c in a.o)b+=c.length+bd(a.o[c],function(a,b){return a+b.length},0);
1E3<b&&(new g.O(a.C,0,a)).start()};
oI=function(a,b,c,d){var e=a.g.o();c=[c,e.toFixed(3)];d&&c.push(d);g.gI(a,b,"error",c)};
pI=function(a,b){g.gI(a,g.gH(a.g),"lra",[b]);iI(a,"live-readahead-seconds",b.toString())};
rI=function(a){if(g.T(a,128))return"ER";if(g.T(a,512))return"SU";if(g.T(a,16)||g.T(a,32))return"S";var b=qI[YH(a)];"B"==b&&g.T(a,4)&&(b="PB");return b};
sI=function(a,b){var c=a.o.cat||[];c.push(b);a.o.cat=c};
iI=function(a,b,c,d){var e=a.o.ctmp||[],f=-1!=a.ka.indexOf(b);f||a.ka.push(b);d&&f||(d||(c="t."+g.gH(a.g).toFixed(3)+";"+c),e.push(b+":"+c),a.o.ctmp=e,nI(a))};
tI=function(a,b,c,d){this.D=b;this.segments=[];this.experimentIds=[];this.Zd=this.Ja=this.N=this.Ya=this.Aa=this.Y=this.autoplay=this.autonav=!1;this.ca="yt";this.uf=this.o=this.C=null;this.aa=!1;this.B="watchtime"==c;this.A="playback"==c;this.K="delayplay"==c;this.J="atr"==c;this.Ha="engage"==c;this.Ug=!1;this.Va=this.J?"/api/stats/"+c:"//"+b.jH+"/api/stats/"+c;d&&(this.N=d.fs,d.rtn&&(this.o=d.rtn),this.B?(this.Cb=d.state,0<d.rti&&(this.C=d.rti)):(this.Ka=d.mos,this.Sa=d.volume,d.at&&(this.adType=
d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.ka=d.inview),d.size&&(this.ha=d.size));b.experiments.g("legacy_autoplay_flag")&&(this.autoplay=b.da);this.Xa=b.Ka;this.fb=g.ic(b.A);this.Y=b.F;this.ib=b.pa;this.experimentIds=b.experiments.experimentIds;this.pa=b.jc;this.ca=b.Va;this.region=b.region;this.Db=b.Ta?b.Ta.toString():"";this.userAge=b.userAge;this.userGender=b.userGender;this.Wa=g.Wu();this.Ug=b.Sa;this.F=a.oauthToken||this.F;this.adFormat=a.adFormat;this.autoplay=vE(this.D,a,this.N);
this.autonav=a.Hj||this.autonav;this.uf=a.uf;this.clientPlaybackNonce=a.clientPlaybackNonce;this.V=a.vssCredentialsToken;this.xa=a.dh;this.mdxEnvironment=a.mdxEnvironment;this.Qd=a.Qd;this.Rd=a.Rd;a.Ca&&(this.wa=Wx(a.Ca),a.tc&&Wx(a.tc)!=this.wa&&(this.U=Wx(a.tc)));this.Zd=a.Zd;this.Cg=a.Cg;a.va&&(this.Qa=a.re?"dvr":"live");this.Nh=a.Nh;this.lf=a.lf;this.playbackId=a.playbackId;this.eventId=a.eventId;this.playlistId=a.ho||a.playlistId;this.lk=a.lk;this.pf=a.pf;this.De=a.De;this.vk=a.vk;this.subscribed=
a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.Ln=a.Ln;this.referrer=a.referrer;this.jg=a.Nn||a.jg;this.bh=a.bh;this.Ck=a.Ck;this.Lf=a.Lf;this.qb=uE(a,b)};
vI=function(a){var b={ns:a.ca,el:a.qb,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Qd),plid:a.playbackId,ei:a.eventId,fmt:a.wa,fs:a.N?"1":"0",rt:a.g(a.Ta),of:a.Ln,adformat:a.adFormat,content_v:a.Xa,euri:a.ib,lact:a.Wa,live:a.Qa,cl:a.Db,mos:a.Ka,osid:a.osid,state:a.Cb,vm:a.videoMetadata,volume:a.Sa};a.subscribed&&(b.subscribed="1");g.Ja(b,a.fb);a.autonav&&(b.autonav="1");if(a.D.experiments.g("legacy_autoplay_flag"))a.autoplay&&(b.autoplay="1");else if(a.autoplay||a.Zd)b.autoplay=
"1";a.Y&&(b.dni="1");a.Ya&&(b["final"]="1");a.Zd&&(b.splay="1");a.Rd&&(b.delay=a.Rd);a.pa&&(b.hl=a.pa);a.region&&(b.cr=a.region);g.r(a.userAge)&&a.userGender&&(b.uga=a.userGender+a.userAge);g.r(a.da)&&(b.len=a.g(a.da));!a.B&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!=a.o&&(b.rtn=a.g(a.o));a.jg&&(b.feature=a.jg);a.playlistId&&(b.list=a.playlistId);a.pf&&(b.ctrl=a.pf);a.De&&(b.ytr=a.De);a.vk&&(b.ssrt="1");a.U&&(b.afmt=a.U);a.Z&&(b.lio=a.g(a.Z));a.B?(b.idpj=a.Cg,b.ldpj=a.Nh,
null!=a.C&&(b.rti=a.g(a.C))):g.r(a.adType)&&(b.at=a.adType);(a.A||a.K)&&a.uf&&(b.tst=a.uf);a.ha&&(a.A||a.K)&&(b.size=a.ha);null!=a.ka&&(a.A||a.K)&&(b.inview=a.g(a.ka));a.B&&(a.D.experiments.g("segment_volume_reporting")&&(b.volume=uI(a,(0,g.H)(a.segments,function(a){return a.volume})),b.muted=uI(a,(0,g.H)(a.segments,function(a){return a.muted}))),b.st=uI(a,(0,g.H)(a.segments,function(a){return a.startTime})),b.et=uI(a,(0,g.H)(a.segments,function(a){return a.endTime})),(0,g.El)(a.segments,function(a){return 1!=
a.playbackRate})&&(b.rate=uI(a,(0,g.H)(a.segments,function(a){return a.playbackRate}))));
(0,g.El)(a.segments,function(a){return 0!=a.visibilityState})&&(b.vis=uI(a,(0,g.H)(a.segments,function(a){return a.visibilityState})));
(0,g.El)(a.segments,function(a){return 0!=a.connectionType})&&(b.conn=uI(a,(0,g.H)(a.segments,function(a){return a.connectionType})));
(0,g.El)(a.segments,function(a){return 0!=a.Oe})&&(b.blo=uI(a,(0,g.H)(a.segments,function(a){return a.Oe})));
(0,g.El)(a.segments,function(a){return"-"!=a.Al})&&(b.cc=(0,g.H)(a.segments,function(a){return a.Al}).join(","));
if((0,g.El)(a.segments,function(a){return!!a.tl})){var c="au";
a.A&&(c="au_d");b[c]=(0,g.H)(a.segments,function(a){return a.tl}).join(",")}Js()&&a.V&&(b.ctt=a.V,b.cttype=a.xa,b.mdx_environment=a.mdxEnvironment);
a.Ha&&(b.etype=g.r(a.H)?a.H:0);a.bh&&(b.uoo=a.bh);a.Ck&&(b.upt=a.Ck);a.Lf&&(b.wpid=a.Lf);return b};
uI=function(a,b){return(0,g.H)(b,a.g).join(",")};
wI=function(a){g.I.call(this);this.g=a;this.o=new hI(a);g.J(this,this.o);this.A=new hH(a);this.D="paused";this.F=window.NaN;this.J=[10,10,10,40];this.K=this.H=0;this.V=this.U=this.aa=this.Y=this.T=this.N=this.B=!1;this.C=window.NaN;this.Z=new oH(this.A,this.g.videoData,this.g.g)};
xI=function(a,b,c){var d=g.gH(a.g);c=(0,window.isNaN)(c)?d:c;c=Math.ceil(c);var e=a.J[a.H];a.H+1<a.J.length&&a.H++;c+=e;d=1E3*(c-d);a.F=g.Es((0,g.z)(a.fE,a,c,b),d);return c};
yI=function(a,b){var c=dI(a.g);g.Ja(c,{state:a.D});c=new tI(a.g.videoData,a.g.g,b,c);c.Qd=a.g.o();a.g.videoData.va||(c.da=a.g.D());if(a.g.videoData.oa){var d=WB(a.g.videoData.oa,c.Qd);d&&(c.Z=d-c.Qd)}c.Ta=g.gH(a.g);c.segments=[fH(a.g)];return c};
zI=function(a,b){var c=yI(a,"watchtime");c.segments=b;c.Qd=a.A.o;return c};
AI=function(a){a.A.update();return zI(a,kH(a.A))};
DI=function(a){a.g.videoData.remarketingUrl&&!a.Y&&(BI(a,a.g.videoData.remarketingUrl),a.Y=!0);a.g.videoData.youtubeRemarketingUrl&&!a.aa&&(BI(a,a.g.videoData.youtubeRemarketingUrl),a.aa=!0);a.g.videoData.googleRemarketingUrl&&!a.U&&(BI(a,a.g.videoData.googleRemarketingUrl),a.U=!0);a.g.videoData.ppvRemarketingUrl&&!a.V&&(BI(a,a.g.videoData.ppvRemarketingUrl),a.V=!0);CI(a)};
EI=function(a){a.C=g.Ds((0,g.z)(a.rk,a,"heartbeat"),3E4)};
CI=function(a){a.g.videoData.hd.eventLabel=uE(a.g.videoData,a.g.g);a.g.videoData.hd.playerStyle=a.g.g.g;a.g.videoData.ik&&(a.g.videoData.hd.feature="pyv");a.g.videoData.hd.vid=a.g.videoData.videoId;var b=a.g.videoData.hd,c=a.g.videoData;a=!("adunit"!=uE(c,a.g.g)&&!c.ik);b.isAd=a};
BI=function(a,b,c){a.g.g.Sa&&a.g.videoData.visitorData&&Ks(b)?g.Us(b,{Nc:c,headers:{"X-Goog-Visitor-Id":a.g.videoData.visitorData}}):g.it(b,c)};
FI=function(a,b){wy.call(this,a,b);this.g=!1;S(this,"getPresentingPlayerType",this.Fa);S(this,"addInfoCardXml",this.sA);S(this,"cueVideoByPlayerVars",this.tA);S(this,"loadVideoByPlayerVars",this.Uh);S(this,"preloadVideoByPlayerVars",this.jn);S(this,"seekBy",this.pd);S(this,"updatePlaylist",this.MA);S(this,"updateLastActiveTime",this.LA);S(this,"updateVideoData",this.NA);S(this,"getPlayerResponse",this.getPlayerResponse);S(this,"getStoryboardFormat",this.getStoryboardFormat);S(this,"getProgressState",
this.gf);S(this,"getHousebrandProperties",this.wA);S(this,"setPlaybackQualityRange",this.Mr);S(this,"getCurrentPlaylistSequence",this.vA);S(this,"canPlayType",this.fn);S(this,"sendVideoStatsEngageEvent",this.Zf);S(this,"setCardsVisible",this.Vh);S(this,"handleGlobalKeyDown",this.zA);S(this,"getAudioTrack",this.ff);S(this,"setAudioTrack",this.ln);S(this,"getAvailableAudioTracks",this.gn);S(this,"getMaxPlaybackQuality",this.xA);S(this,"setSizeStyle",this.HA);S(this,"forceFrescaUpdate",this.uA);S(this,
"setAutonav",this.Ir);S(this,"setAutonavState",this.Jr);S(this,"showControls",this.KA);S(this,"hideControls",this.AA);S(this,"getVisibilityState",this.Lg);S(this,"shouldSendVisibilityState",this.JA);S(this,"getVideoContentRect",this.Lr);S(this,"setSafetyMode",this.GA);S(this,"setFauxFullscreen",this.DA);S(this,"cancelPlayback",this.yl);S(this,"getVideoStats",this.yq);S(this,"updateSubtitlesUserSettings",this.Pj);S(this,"getSubtitlesUserSettings",this.Yf);S(this,"resetSubtitlesUserSettings",this.kn);
S(this,"isFastLoad",this.BA);S(this,"isPeggedToLive",this.isPeggedToLive);S(this,"setMinimized",this.FA);S(this,"getSphericalConfig",this.yA);S(this,"setSphericalConfig",this.IA);S(this,"setBlackout",this.CA);S(this,"onAdUxClicked",this.hn);S(this,"getPlayerSize",this.Kg);S(this,"setGlobalCrop",this.EA);S(this,"wakeUpControls",this.UH);S(this,"isMutedByMutedAutoplay",this.nz)};
GI=function(a,b,c){this.A=a;this.g=void 0===b?"":b;this.B=c||null;this.C=!1};
HI=function(a,b){var c=a.A,d=g.mE(c)&&(c.da&&c.Dc||c.experiments.g("html5_playlist_preload"));if(c.oc&&(jE(c)||g.IE(c)||d)&&!a.C){a.C=!0;a.A.experiments.g("html5_skip_default_csi_configs")||(g.P("TIMING_ACTION")||g.Tr("TIMING_ACTION",a.A.csiPageType),a.A.Wa&&g.Tr("CSI_SERVICE_NAME",a.A.Wa));if(a.B){c=a.B.aa;for(var e in c)g.PF(e,c[e],a.g);e=a.B.Y;for(var f in e)g.QF(f,e[f],a.g);f=a.B;f.aa={};f.Y={}}g.QF("yt_pvis",TF(),a.g);g.QF("yt_pt","html5",a.g);b&&!hG("pbs",a.g)&&a.o("pbs",b);f=a.A;jE(f)&&"blazer"!=
f.g||!hG("_start",a.g)||bG(a.g)}};
II=function(a,b){this.type=a||"";this.id=b||""};
g.JI=function(a){return new II(a.substr(0,2),a.substr(2))};
g.PI=function(a){g.R.call(this);this.startSeconds=0;this.Zu=!1;this.bb=0;this.title="";this.cf=0;this.Ia=[];this.Mh=this.be=!1;this.Qc=this.fq=this.ki=null;this.views=0;this.Ax=0!=a.fetch;this.Pc=[];this.bb=Math.max(0,a.index||0);this.loop=!!a.loop;this.startSeconds=a.startSeconds||0;this.dD="1"==a.mob;this.title=a.playlist_title||"";this.description=a.playlist_description||"";this.author=a.author||a.playlist_author||"";this.Zg={};a.video_id&&(this.Ia[this.bb]=a);a.api&&("string"==typeof a.api&&16==
a.api.length?a.list="PL"+a.api:a.playlist=a.api);this.Mj=0;if(a.list)switch(a.listType){case "user_uploads":KI(this,a.list);break;case "user_favorites":LI(this,a.list);break;case "search":MI(this,a.list);break;default:a.playlist_length&&(this.cf=a.playlist_length),this.listId=g.JI(a.list),a.video?(this.Ia=a.video.slice(0),this.be=!0):NI(this)}else if(a.playlist){var b=a.playlist.toString().split(",");0<this.bb&&(this.Ia=[]);(0,g.G)(b,function(a){a&&this.Ia.push({video_id:a})},this);
this.cf=this.Ia.length;b=(0,g.H)(this.Ia,function(a){return a.video_id});
OI(this,"/list_ajax?style=json&action_get_templist=1",{video_ids:b.join(",")});this.be=!0}this.setShuffle(!!a.shuffle);a.suggestedQuality&&(this.quality=a.suggestedQuality);this.Zg=mF(a,"playlist_");this.gv=a.thumbnail_ids?a.thumbnail_ids.split(","):[]};
QI=function(a){return!!(a.playlist||a.list||a.api)};
RI=function(a){var b=a.bb+1;return b>=a.cf?0:b};
SI=function(a){var b=a.bb-1;return 0>b?a.cf-1:b};
TI=function(a,b){a.bb=g.Zc(b,0,a.cf-1);a.startSeconds=0};
KI=function(a,b){a.Mh||(a.listId=new II("UU","PLAYER_"+b),OI(a,"/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:b}))};
LI=function(a,b){a.Mh||(a.listId=new II("FL","PLAYER_"+b),OI(a,"/list_ajax?style=json&action_get_favorited_by_user=1",{username:b}))};
MI=function(a,b){if(!a.Mh){a.listId=new II("SR",b);var c={search_query:b};a.dD&&(c.mob="1");OI(a,"/search_ajax?style=json&embeddable=1",c)}};
NI=function(a){if(!a.Mh){var b={list:a.listId},c=a.wb();c&&c.videoId&&(b.v=c.videoId);OI(a,"/list_ajax?style=json&action_get_list=1",b)}};
OI=function(a,b,c){a.Ax&&g.Us(g.Rg(b,c),{format:"JSON",rb:(0,g.z)(function(a,b){UI(this,b)},a),
onError:(0,g.z)(function(){this.R("error")},a)})};
UI=function(a,b){if(b.video&&b.video.length){a.title=b.title;a.description=b.description;a.views=b.views;a.author=b.author;b.loop&&(a.loop=b.loop);var c=a.wb();a.Ia=[];(0,g.G)(b.video,function(a){a&&(a.video_id=a.encrypted_id,this.Ia.push(a))},a);
a.cf=a.Ia.length;b.index?a.bb=b.index:a.th(c);a.setShuffle(!1);a.Mh=!1;a.be=!0;a.Mj++;a.ki&&a.ki()}};
VI=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
WI=function(a){this.g=window.Float32Array?new window.Float32Array(a):Array(a);this.o=a-1};
XI=function(a,b){a.o=(a.o+1)%a.g.length;a.g[a.o]=b};
YI=function(){this.D=new WI(50);this.o=null;this.C=this.B=0;this.g=[];this.A=null};
ZI=function(a,b){0!=a.g.length&&(b.F=a.g.length,b.J=bd(a.g,function(a,b){return a+b},0),b.B=g.jb(a.g),b.N=Math.min.apply(Math,a.g),b.K=Math.max.apply(Math,a.g),a.g=[])};
$I=function(a,b){var c=(0,window.isNaN)(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.Kh&&c--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||c++;this.g=Math.max(0,c);this.o=[];this.B=0;this.A=a;this.C="ULTRALOW"!=this.A.latencyClass&&(!b.g("html5_treat_latency_low_like_ultra_low")||!this.A.isLowLatencyLiveStream)};
aJ=function(a){return(a.A.oa?VB(a.A.oa)||5:5)*a.g};
cJ=function(a){this.g=new bJ(0,0,null);this.B=8;this.D=[];this.A=[];this.C=this.H=window.NaN;this.K=this.o=this.J=0;this.F=window.NaN;this.T=0;this.N=void 0===a?!0:a};
dJ=function(a){return{startTime:a.F/a.o,duration:a.K/a.o}};
eJ=function(a){return!(0,window.isNaN)(a.C)&&a.o?a.C/a.o:a.T};
fJ=function(a,b,c){var d=b.getUint32(c);b=b.getUint32(c+4);a.g=new bJ(b,d,a.g);return 8};
gJ=function(a){a.o&&!(0,window.isNaN)(a.H)&&(a.C=Math.floor(a.H*a.o),a.H=window.NaN)};
hJ=function(a){return 0==a.g.type||1836019574==a.g.type||1952867444==a.g.type||1936286840==a.g.type||1953653094==a.g.type||1836019558==a.g.type};
iJ=function(a,b,c){for(var d=c;d<b.byteLength;d++)a.D.push(b.getUint8(d));0<c&&a.A.push(new window.DataView(b.buffer,b.byteOffset,c))};
jJ=function(a,b,c){return new Ly(b,c,a.g.size,a.g.type,!0)};
bJ=function(a,b,c){this.type=a;this.size=b;this.g=c;this.offset=this.version=0};
kJ=function(a,b){this.o=a;this.D=this.C=!1;this.length=b?b:0;this.g=0;this.A=[];this.B=null;this.length?1!=this.o.length||this.o[0].La||(this.o[0].La=this.length):1==this.o.length||(0,g.ww)(this.o,function(a){return!!a.range})};
lJ=function(a){var b=a.length-a.g;(0,g.G)(a.A,function(a){b+=a.range.length});
return b};
mJ=function(a,b,c,d,e){this.g=a;this.Z=b;this.ha=c;this.ca=e;this.V=this.o=window.NaN;this.da=0;this.K=this.N=this.A=this.D=window.NaN;this.aa=this.Y=this.B=!1;this.C=0;this.H=EC(this.g);this.U=this.T=window.NaN;this.J=d;this.F=null};
nJ=function(a){return{rt:(((0,g.F)()-a.o)/1E3).toFixed(2),lb:a.A,pt:a.T.toFixed(2),pb:a.Z,stall:a.C.toFixed(2),elbowTime:((a.V-a.o)/1E3).toFixed(2),elbowBytes:a.da}};
oJ=function(a,b,c){var d=(b-a.D)/1E3,e=c-a.A;if(a.B)!a.J&&0<e&&(.2<d||1024>e?(a.C+=d,.2<d&&wC(a.g,.05,e)):wC(a.g,d,e),a.aa=!0);else if(c>=a.g.policy.g){if(!a.J){var f=a.g;f.D.g(1,(b-a.o)/1E3);xC(f)}a.V=b;a.da=c;a.B=!0}AC(a.g,d,e);a.D=b;a.A=c};
pJ=function(a,b,c){c=Math.round(c/1024);if(a.F){var d=b-a.N,e=c-a.K;a.F.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e&63))}a.N=b;a.K=c};
qJ=function(a){return a.A>=a.g.policy.g};
rJ=function(a){return Math.max(0,((0,g.F)()-a.N)/1E3)};
sJ=function(a){var b=a.Z-a.A;b=1E3*(b*a.H.stall+b/a.H.byterate);var c=(0,g.F)();b=qJ(a)?b+c:b+Math.max(c,a.o+1E3*a.H.delay);a.U=b};
uJ=function(a,b,c,d,e,f){this.status=0;this.H=this.response=null;this.N=d;this.D=c;this.V=e;this.T=f;this.o=[];this.B=null;this.A=this.g=0;this.za=tJ++;this.U=window.NaN;this.C=null;a=new window.Request(a,{method:"GET",credentials:"include"});(0,window.fetch)(a).then(xs((0,g.z)(this.aH,this)),xs((0,g.z)(this.Rj,this)));(0,g.F)();this.K=this.J=this.F=!1;b()};
wJ=function(a){a.K=!0;a.o.push(a.B.subarray(0,a.g));a.g=0;a.B=a.F?null:new window.Uint8Array(vJ(a))};
xJ=function(a,b){if(b.length+a.g>vJ(a)){var c=new window.Uint8Array(a.g+b.length);c.set(a.B,0);a.B=c}a.B.set(b,a.g);a.g+=b.length};
yJ=function(a){a.C.read().then(xs((0,g.z)(a.ND,a)),xs((0,g.z)(a.AF,a)));var b=(0,g.F)();a.U=b};
vJ=function(a){a=a.xh()||0;return Math.max(16384,.125*a)};
zJ=function(a,b,c,d,e){this.status=0;this.response=null;this.o=this.A=!1;this.g=new window.XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=(0,g.z)(this.RA,this);this.B=d;this.D=c;this.C=e;a=xs((0,g.z)(this.PA,this));this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",xs((0,g.z)(this.QA,this)),!1)};
AJ=function(a,b,c,d){this.C=a;this.info=b;this.timing=c;this.V=d;this.state=1;this.g=null;this.T=this.N=0;this.D=window.NaN;this.F=this.A=this.J=null;this.B=0;this.H=this.o=null;this.K=0;this.U=!1};
BJ=function(a){return a.A?HA(a.A.g):""};
CJ=function(a){var b=nJ(a.timing);b.shost=BJ(a);b.rn=a.N.toString();a.B&&(b.rc=a.B.toString());b.itag=""+Wx(a.info.g[0].ea.info);b.ml=""+ +a.info.g[0].ea.xc();410!=a.B&&500!=a.B&&503!=a.B||(b.fmt_unav="true");return b};
DJ=function(a){BJ(a);return wA(a.V,BJ(a))};
EJ=function(a){if(1==a.state)return!0;a=DJ(a);return 100>a.Kd&&6>a.g};
FJ=function(a,b){a.state=b;if(5<=a.state){var c=a.timing;c.B&&(c.B=!1)}a.J&&a.J(a)};
GJ=function(a){return(0,g.ww)(a.info.g,function(a){return 3==a.type})};
HJ=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a=a.timing;a.B&&(a.B=!1)};
JJ=function(a){var b=a.g.ag("content-type"),c=a.g.xh();b=!IJ(a)||!b||-1!=b.indexOf("text/plain");a=a.C.V?!!c&&2048>=c:!c||2048>=c;return b&&a};
IJ=function(a){return a.g?a.g.cv():!1};
KJ=function(a){return 2<=a.state&&!!a.o&&!!a.o.A.length};
LJ=function(a,b){if(b||IJ(a)&&!JJ(a)){if(!a.o){var c;IJ(a)||(c=a.g.Ol());a.o=new kJ(a.info.g,c)}for(;a.g.Km();){c=a.o;for(var d=a.g.Xu(),e=b&&!a.g.Km(),f=0,k=0,l=g.na(c.o),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.La<=c.g)f+=m.La;else{var n=c,q=m;if(1==q.type){n.C=!0;var t=!1}else 3==q.type||4==q.type?(q=n.C&&!n.D,n.D=!0,t=q):t=!1;n=c;var v=c.g-f,D=k;q=d;t=t||m.ea.Rr();var C=q.length-D;m.range&&(C=Math.min(m.La-v,C));v=Wz(m,m.Ea+v,C,m.range?m.Ea+v+C==m.range.length:!!e);var B=Mz(q.byteOffset,
q.length);D=Mz(q.byteOffset+D,C);n.A.push(new pA(v,q.buffer,D,B,t));n=C;c.g+=n;k+=n;f+=m.La;if(k==d.length)break}}}};
MJ=function(a,b){g.R.call(this);this.D=0;this.A=a;this.g=[];this.B=null;this.N=b;this.F=this.H=window.NaN;this.U=null;this.Y=(0,g.z)(function(a){this.A.gh&&(this.R("timestamprewrite",a),this.A.gh=!1)},this);
this.V=this.K=this.C=this.o=null;this.T=!1;this.J=null;this.A.pa&&(this.o=new cJ(this.A.Va))};
NJ=function(a){return a.g.length?a.g[0]:null};
OJ=function(a){return a.g.length?a.g[a.g.length-1]:null};
QJ=function(a,b,c){b=PJ(a,b,c);(0,g.G)(b,function(b){a.g.push(b)})};
RJ=function(a){return(0,g.El)(a.g,function(a){return a.info.g})};
SJ=function(a,b){if(b){var c=g.lb(a.g,function(a){return a.info.g});
-1!=c&&(a.g=g.Cb(a.g,0,c+1))}else a.g=[]};
TJ=function(a){if(!a.g.length)return 0;for(var b=a.g[0].A.length,c=1;c<a.g.length;c++)a.g[c].g!=a.g[c-1].g&&(b+=a.g[c].A.length);a.B&&(b+=a.B.A.length);return b};
UJ=function(a){return(0,g.H)(a.g,function(a){return a.info})};
VJ=function(a){return a.o?eJ(a.o):a.H||0};
PJ=function(a,b,c){if(!c.verify()||c.info.ea.Jm()){var d=Uz(c.info);d.verification="1";a.R("error",d||{})}c.Yc&&c.info.ea.info.video&&bB(c.info.ea,qA(c));c.info.g&&(a.V=c.info);if(!a.N.gd()){if(2==c.info.ea.info.containerType){var e=qA(c);c.Yc&&c.info.ea.info.video&&fA(e);a.A.Mi&&0==c.info.Ea&&dA([408125543],307544935,e)}if(a.C){var f=c.info,k=a.C;f.ra=k.o;f.B=k.A}var l=c;!a.K||(a.A.jc?Rz(a.K,l.info,!0):Sz(a.K,l.info))||(a.o&&a.o.reset(),a.H=window.NaN,a.D=0);a.K=l.info;if(a.o){var m;if(!(m=!(0,window.isNaN)(a.F))){var n=
a.o;m=!(!(0,window.isNaN)(n.C)||!(0,window.isNaN)(n.H))}if(m){var q=a.o;q.H=(0,window.isNaN)(a.F)?(0,window.isNaN)(a.H)?l.info.startTime:a.H:a.F;gJ(q);a.F=window.NaN}var t=qA(l);a.o.process(t);if((0,window.isNaN)(a.o.F))var v=null;else{var D=a.o;if(D.A.length)if(1==D.A.length){var C=D.A[0];D.A.length=0;var B=C}else{for(var U=0,Z=g.na(D.A),Aa=Z.next();!Aa.done;Aa=Z.next())U+=Aa.value.byteLength;var pa=new window.Uint8Array(U),ua=0,Wd=g.na(D.A);for(Aa=Wd.next();!Aa.done;Aa=Wd.next()){var Qb=Aa.value;
pa.set(new window.Uint8Array(Qb.buffer,Qb.byteOffset,Qb.byteLength),ua);ua+=Qb.byteLength}D.A.length=0;B=new window.DataView(pa.buffer)}else B=null;var qc=B;if(qc){var Be=Mz(qc.byteOffset,qc.byteLength),mm=Wz(l.info,l.info.Ea+l.info.La-a.o.D.length-qc.byteLength,qc.byteLength,l.info.g);v=new pA(mm,qc.buffer,Be,Be,l.Yc)}else v=null}}else{var Lj=(0,window.isNaN)(a.F)?(0,window.isNaN)(a.H)?l.info.startTime:a.H:a.F;a.F=window.NaN;if(a.A.Va&&!sA(l,Lj)){var Og=Uz(l.info);Og.smst=1;a.R("error",Og||{})}else a.H=
Lj+tA(l);v=l}var di=v;if(!di)return[];c=di;if(WJ(a,c)){var Pg=c;if(1==Pg.info.ea.info.containerType){var nm=qA(Pg),wb=Yy(nm,0,1701671783);if(wb){0==wb.data.getUint32(wb.g)&&wb.skip(4);Py(wb);Py(wb);Ny(wb);Ny(wb);Ny(wb);Ny(wb);var rc=new window.Uint8Array(new window.ArrayBuffer(wb.size-wb.o)),om=new window.Uint8Array(wb.data.buffer,wb.offset+wb.o,wb.size-wb.o);rc.set(om);wb.o=wb.size;var Hc=rc.buffer,Mj=wb.offset,FB=String.fromCharCode.apply(String,new window.Uint8Array(Hc)),Qg=Xy(FB);var GB=Qg?new Vy(Qg,
Mj):null}else GB=null}else{var pm=new Yz(qA(Pg)),s7=pm.g;pm.g=0;var oS=null;if($z(pm,[408125543,307544935,29555,26568,17543])){var t7=cA(pm,!0);var u7=String.fromCharCode.apply(String,jA(pm,t7));var pS=Xy(u7);oS=pS?new Vy(pS):null}pm.g=s7;GB=oS}Pg.o=GB;if(c.o){a.C=c.o;a.T=!!a.o;var qS=c.info,rS=a.C;qS.ra=rS.o;qS.B=rS.A;var sS=a.K,tS=a.C;sS.ra=tS.o;sS.B=tS.A}}a.A.Cf&&WJ(a,c)&&mz(qA(c),1701671783);var ah=c;if(a.C){if(ah.info.g){a.T=!1;a.J=null;var Km=a.C;if(a.o){var uS=dJ(a.o),vS=a.o;vS.F=window.NaN;
vS.K=0;var cD=uS.startTime;var wS=uS.duration}else{if(1==ah.info.ea.info.containerType){for(var xS=ah.info.ea.g,dD=window.NaN,kq=window.NaN,lq=0,yS=new window.DataView(ah.g);cz(yS,lq);){var si=dz(yS,lq);1936286840==si.type?kq=hz(si):1836476516==si.type?kq=az(si):1952867444==si.type&&(0,window.isNaN)(dD)&&(dD=gz(si));lq=ez(si.type)?lq+8:lq+si.size}!kq&&xS&&(kq=bz(xS));var kv=dD/kq}else{var bh=new Yz(qA(ah));var v7=ah.Yc?bh:new Yz(new window.DataView(ah.info.ea.g.buffer));var w7=mA(v7),eD=bh.g;bh.g=
0;if(nA(bh))if(bA(bh,231)){var x7=gA(bh)*w7/1E9;bh.g=eD;kv=x7}else bh.g=eD,kv=window.NaN;else bh.g=eD,kv=window.NaN}cD=kv||ah.info.A;wS=tA(ah)}var AS=XJ(Km,cD,wS,!1);a.R("segmentinfo",AS);var lv=Km.g["Cuepoint-Type"]?new Uy((0,window.parseFloat)(Km.g["Cuepoint-Playhead-Time-Sec"])||0,(0,window.parseFloat)(Km.g["Cuepoint-Total-Duration-Sec"])||0,Km.g["Cuepoint-Context"]):null;lv&&(lv.Ee+=cD,a.R("cuepoint",lv,Km.o));var BS=AS}else{if(a.T&&!(0,window.isNaN)(a.o.F)){var fD=XJ(a.C,dJ(a.o).startTime,a.C.H,
!0);a.J=fD;a.R("placeholderinfo",fD);a.T=!1;var CS=fD}else CS=null;BS=CS}var DS=BS}else DS=null;var gD=DS,ES=c;if(a.A.dd)if(gD){Xz(ES.info,gD);for(var FS=g.na(b.info.g),hD=FS.next();!hD.done;hD=FS.next())Xz(hD.value,gD)}else a.J&&Xz(ES.info,a.J);c.info.g&&(a.C=null)}var mq=c;if(a.A.Fi&&!a.N.gd()&&(0==mq.info.Ea||a.B)&&1==mq.info.ea.info.containerType&&3==mq.info.type&&!uA(mq)&&mq.info.duration&&!a.A.pa){var GS=c;a.D+=1E3*(tA(GS)-GS.info.duration);if(a.U&&Math.abs(a.D-a.U.D)>=a.A.ke){var kk=c,iD=(a.U.D-
a.D)/1E3,HS=tA(kk)+iD,y7=new window.DataView(kk.g),IS=$y(y7,1936286840);var jD=IS?hz(IS):window.NaN;if((0,window.isNaN)(jD)){var JS=kk.info.ea.g,z7=new window.DataView(kk.g),KS=$y(z7,1836476516);jD=KS?az(KS):JS?bz(JS):window.NaN}var mv=YJ(a,kk,HS*jD);if(mv&&mv.length){var kD=Uz(kk.info);kD.fds=HS.toFixed(3);kD.com=a.D.toFixed(3);a.R("timestamprewrite",kD);a.H+=iD;a.D+=1E3*iD}return mv?mv:ZJ(a,kk)}}if(!a.N.gd()&&a.N.info.Yb&&a.A.He){var ov=c,ti=$J(a,ov);if(ti){var lD=Yy(ti,0,1718909296),mD=Yy(ti,0,
1836019574),pv=Yy(ti,0,1701671783),nD=Yy(ti,0,1836019558);if(lD&&mD&&nD){for(var NS=jz(ti,mD),oD=jz(ti,nD),OS=mD.size,PS=g.na(oD),lk=PS.next();!lk.done;lk=PS.next()){var pD=lk.value;1886614376==pD.type&&(NS.push(pD),OS+=pD.size)}var QS=lD.size+OS+nD.size;pv&&(QS+=pv.size);var nq=new Qy(QS);Sy(nq,lD);Ty(nq,1836019574,NS);pv&&Sy(nq,pv);var RS=g.na(oD);for(lk=RS.next();!lk.done;lk=RS.next()){var qv=lk.value;1886614376==qv.type&&(qv.type=1936419184,qv.data.setUint32(qv.offset+4,1936419184))}Ty(nq,1836019558,
oD);var SS=nq.data.buffer}else SS=null;var TS=SS;var qD=TS?aK(a,ti,TS,ov):ZJ(a,ov)}else qD=ZJ(a,ov)}else{if(a.A.Wa&&a.N.gd()&&(0==c.info.Ea||a.B)&&1==c.info.ea.info.containerType){var rv=c,A7=rv.info.ea.index.Ql(rv.info.ra),VS=YJ(a,rv,A7);var WS=VS?VS:ZJ(a,rv)}else WS=[c];qD=WS}return qD};
XJ=function(a,b,c,d){return new Iy(a.o,b,c,a.ingestionTime,"sq/"+a.o,void 0,void 0,d)};
WJ=function(a,b){return!a.N.gd()&&3==b.info.type&&0==b.info.Ea&&(1==b.info.ea.info.containerType||2==b.info.ea.info.containerType)};
ZJ=function(a,b){if(a.B&&a.B!=b){var c=[a.B,b];a.B=null;return c}return[]};
YJ=function(a,b,c){var d=$J(a,b);return d?(c=nz(d,c,a.Y,a.A.bc))?aK(a,d,c,b):null:null};
aK=function(a,b,c,d){b=lz(b);a.B&&(b-=a.B.range.length,a.B=null);a=rA(d,b);a[0].g=c;a[0].range=Mz(0,c.byteLength);a[0].A=Mz(0,c.byteLength);d=a[0];c=new window.DataView(c);c=!!Yy(c,0,1836019574);d.Yc=c;return a};
$J=function(a,b){if(a.B){var c=a.B,d=new window.Uint8Array(c.range.length+b.range.length);d.set(new window.Uint8Array(c.g,c.range.start,c.range.length));d.set(new window.Uint8Array(b.g,b.range.start,b.range.length),c.range.length);c=new window.DataView(d.buffer);lz(c);return c}c=qA(b);if((d=lz(c))&&d<c.byteLength)return c;a.B=b;return null};
bK=function(){this.g=this.o=!1};
cK=function(a,b){this.aa=a;this.Da=b;this.A=[];this.o=new MJ(a,b);this.B=this.g=null;this.U=0;this.J=b.info.g;this.K=this.H=!1;this.F=new bK;this.T=0;this.D=b.ec();this.C=-1;this.N=0};
dK=function(a,b){a.A.push(b);a.g=g.jb(b.info.g)};
fK=function(a,b){for(;a.A.length&&6==a.A[0].state;){var c=a.A.shift();eK(a,c);var d=c.timing;a.U=(d.D-d.o)/1E3;a.H||(c=c.info,a.N=Math.max(a.N,Math.max(0,c.g[c.g.length-1].o-b)))}a.A.length&&KJ(a.A[0])&&!Qz(a.A[0].info.g[0])&&eK(a,a.A[0])};
eK=function(a,b){if(KJ(b)){b.U=!0;var c=b.o,d=c.A;c.A=[];c.B=g.jb(d).info;(0,g.G)(d,(0,g.z)(a.Y,a,b))}};
iK=function(a,b){a.Da.xc();a.N=0;var c=gK(a,b);if(0<=c)return c;a.g=a.Da.Ue(b).g[0];hK(a)&&(a.B=null);a.T=0;return a.g.startTime};
lK=function(a,b){var c=a.o.g.length?OJ(a.o).info:a.B;if(b&&c&&!c.g){var d=c.ra;c=[];for(var e=g.na(a.A),f=e.next();!f.done;f=e.next())f=f.value,(0,g.El)(f.info.g,function(a){return a.ra==d})?c.push(f):jK(a,f);
a.A=c;a.g=a.A.length?g.jb(g.jb(a.A).info.g):null}else kK(a)};
mK=function(a){var b=0;(0,g.G)(a.A,function(a){var c=b;a=a.o&&a.o.length?lJ(a.o):$A(a.info);b=c+a},a);
return b+=TJ(a.o)};
nK=function(a,b){var c=!!a.Da.info.video&&!!a.B&&!a.B.g,d=1<=b&&c;SJ(a.o,d);a.H=d;lK(a,2<=b&&c)};
oK=function(a){a.F.o||a.F.start();nK(a,0);hK(a)&&(a.B=null)};
hK=function(a){return!!a.B&&a.B.B};
pK=function(a){var b=[];a.B&&b.push(a.B);b=g.zb(b,UJ(a.o));(0,g.G)(a.A,function(a){(0,g.G)(a.info.g,function(c){a.U&&(b=(0,g.Md)(b,function(a){return!(a.ea!=c.ea?0:a.range&&c.range?a.range.start+a.Ea>=c.range.start+c.Ea&&a.range.start+a.Ea+a.La<=c.range.start+c.Ea+c.La:a.ra==c.ra&&a.Ea>=c.Ea&&(a.Ea+a.La<=c.Ea+c.La||c.g))}));
3!=c.type&&4!=c.type||b.push(c)})});
a.g&&!Pz(a.g,g.jb(b),a.g.ea.gd())&&b.push(a.g);return b};
qK=function(a){if(!a.g||!a.g.La)return!1;var b=pK(a);if(!b.length)return!1;for(var c=1;c<b.length;c++){var d=1E-6>=Math.abs(b[c].A-b[c-1].o),e=b[c].A==b[c-1].A&&b[c].o==b[c-1].o&&b[c].ra==b[c-1].ra&&b[c].ea==b[c-1].ea&&b[c-1].Ea+b[c-1].La==b[c].Ea;if(!(a.aa.oc?d||e:Sz(b[c-1],b[c])))return!1}return!0};
gK=function(a,b){if(qK(a)){a:{var c=pK(a);c=g.na(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.A<=b&&d.startTime+d.duration>=b){c=d;break a}c=null}if(c)return c.startTime}return window.NaN};
rK=function(a){return(0,g.El)(a.A,function(a){return 4<=a.state})};
sK=function(a){return!(!a.g||!a.Da.xc()||a.g.ea==a.Da)};
tK=function(a){return sK(a)&&a.g.ea.info.g<a.Da.info.g};
uK=function(a,b,c){return(a=OJ(a.o)?OJ(a.o).info:a.B)&&!a.B?a.o>b&&a.o<b+c:!1};
kK=function(a){(0,g.G)(a.A,function(a){jK(this,a)},a);
a.A=[];a.g=null};
jK=function(a,b){if(b.U){var c=a.o,d=b.info;c.T=!1;c.J&&(c.R("placeholderrollback",c.J),c.J=null);if(c.o){var e=window.NaN;(0,window.isNaN)(c.F)&&(e=d.g[0].range?d.g[0].A:dJ(c.o).startTime);c.o.reset();c.K=c.V;(0,window.isNaN)(e)||(d=c.o,d.H=e,gJ(d))}c.C=null}b.dispose()};
vK=function(a){return!!a.g&&-1!=a.g.ra&&a.g.ra<a.Da.index.ue()};
wK=function(a){if(a.g){var b=OJ(a.o);b&&3==b.info.type&&-1==a.g.ra&&(a.g.ra=b.info.ra)}};
xK=function(a,b){this.g=a;this.o=b;this.A=1};
yK=function(a,b,c,d){d/=a.A;var e=BC(a.g)+1/CC(a.g);var f=Math.max(.9*(d-3),zC(a.g)+a.g.policy.g*e);c=f/e*a.o.Ei/(b+c);c=Math.min(c,d);c=Math.max(a.o.jh,Math.min(a.o.ih,c));return Math.min(a.o.H,Math.max(65536,Math.ceil(c*b)))};
zK=function(a,b){var c=a.o.hh;if(a.o.Cc)return b;var d=1E-9+zC(a.g)+c*BC(a.g);c=b*Math.min(1,c/(b*d));a.o.qb&&(d=((sC(a.g.o,.98)||0)-a.o.Cb)/(a.o.Li-a.o.Cb),d=Math.max(0,Math.min(1,d)),c*=1-a.o.qb*d);return c};
AK=function(a){return zK(a,CC(a.g))};
BK=function(a){return AK(a)/a.A};
CK=function(a,b,c,d){this.aa=a;this.A=b;this.H=c;this.K=d;this.o=this.T=this.D=null;this.F="i";this.U=-1;this.g=this.B=null;this.C=[];this.Y={};this.V=this.da=0;this.ca=null;this.N=this.J=!1;this.Z=0};
HK=function(a,b,c){"m"==c&&a.D.isLocked()&&!b.isLocked()&&(c="a");a.J=a.J||!1;if("m"==c&&b.isLocked())return a.F=c,DK(a,b),EK(a),FK(a),a.N|=a.o!=a.g,a.o=a.g,new VI(a.B,a.o,c);var d=hy(a.D,b);if("m"==a.F&&a.D.isLocked()&&d)return null;"r"!=c||d||(a.U=-1);DK(a,b);FK(a);if("r"==c&&a.g==a.o){if(d)return null;a.o=a.g;return new VI(a.B,a.g,c)}a.F=c;GK(a);return null};
IK=function(a){return!!a.V&&1E4>=(0,g.Ru)()-a.V};
JK=function(a){return a.D.isLocked()};
GK=function(a){a.o&&a.g&&KK(a,a.o.info)<KK(a,a.g.info)&&(a.J|="r"==a.F,a.J=a.A.sc?a.J|("v"==a.F&&a.g.info.video.width>a.o.info.video.width):a.J|a.g.info.video.width>1.6*a.o.info.video.width)};
LK=function(a){var b=a.F;a.F="a";a.U=(0,g.Ru)();a.J=!1;return new VI(a.T,a.o,b)};
DK=function(a,b){a.D=b;var c=a.K.videoInfos;if(!JK(a)&&(c=(0,g.Md)(c,function(a){return a.g>this.A.F||4<this.H.g[a.id].B.g?!1:!0},a),IK(a))){c=(0,g.Md)(c,function(a){return a.id!=this.ca.id},a);
var d=(0,g.Md)(c,function(a){a=Wx(a);return"140"==a||"134"==a||"243"==a});
d.length&&(c=d)}c.length||(c=a.K.videoInfos);d=(0,g.Md)(c,b.B,b);d.length||(d=[c[0]]);d.sort((0,g.z)(function(a,b){return KK(this,a)-KK(this,b)},a));
for(c=1;c<d.length;c++){var e=d[c-1],f=d[c];e.video.width>f.video.width?(g.vb(d,c),c--):KK(a,e)*a.A.g>KK(a,f)&&(g.vb(d,c-1),c--)}c=d[d.length-1];a.C=d;Jz(a.A,c)};
MK=function(a,b){if(b)a.B=a.H.g[b];else{var c=g.nb(a.K.g,function(a){return!!a.Sb&&a.Sb.isDefault});
c=c||a.K.g[0];a.B=a.H.g[c.id]}EK(a)};
EK=function(a){if(!a.B.info.Sb&&(a.B=a.H.g[a.K.g[0].id],1<a.K.g.length)){if(a.D.isLocked())var b=240>a.D.g;else{for(b=0;b+1<a.C.length&&"tiny"==a.C[b].video.quality;)b++;var c=BK(a.aa)/a.A.g;b=KK(a,a.B.info)+KK(a,a.C[b])>c}b&&(a.B=a.H.g[a.K.g[1].id])}};
FK=function(a){if(JK(a))a.g=a.H.g[a.C[a.C.length-1].id];else{for(var b=Math.min(a.da,a.C.length-1),c=BK(a.aa),d=KK(a,a.B.info),e=c/a.A.A-d;0<b&&!(KK(a,a.C[b])<=e);b--);c=c/a.A.g-d;a.A.Ge&&(e=a.aa,d=zK(e,DC(e.g))/e.A/a.A.g-d,c=Math.min(c,d));for(;b<a.C.length-1&&!(KK(a,a.C[b+1])>=c);b++);a.g=a.H.g[a.C[b].id];a.da=b;GK(a)}};
NK=function(a){var b=a.A.A,c=BK(a.aa)/b-KK(a,a.B.info);b=g.ob(a.C,function(a){return KK(this,a)<c},a);
0>b&&(b=0);a.da=b;a.g=a.H.g[a.C[b].id]};
KK=function(a,b){if(!a.A.aa)return b.g;if(!a.Y[b.id]){var c=a.H.g[b.id].index.rq(a.Z,a.A.aa);c=b.A&&a.o&&a.o.index.Nb()?c||b.A:c||b.g;a.Y[b.id]=c}return a.Y[b.id]};
OK=function(){this.g=this.o=0;this.A=[]};
PK=function(a,b){return(a[b]<<24)+(a[b+1]<<16)+(a[b+2]<<8)+a[b+3]};
QK=function(a,b,c,d){this.o=a;this.D=b;this.C=d;this.B=c;this.g=0};
RK=function(a,b){this.o=a;this.H=b;this.D=this.C=this.g=null;this.B=this.A=window.NaN;this.F=!1};
SK=function(a,b,c){b=(0,g.F)()/1E3-(a.H.o()||0)-b.C-a.o.Ji;if(0>=b)return window.NaN;var d=c.ea.index;if(!fB(d,c.ra,!0))return window.NaN;var e=d.getDuration(c.ra);c=d.Ed(c.ra);a=Math.min(c+b,c+e-a.o.Ii);return a<=c?window.NaN:a};
TK=function(){this.g=[];this.o=g.Hy};
UK=function(a,b){for(var c=[],d=g.na(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
WK=function(a){return a.g.slice(VK(a,0x7ffffffffffff),a.g.length)};
VK=function(a,b){var c=Hb(a.g,function(a){return b-a.start||1});
return 0>c?-(c+1):c};
XK=function(a,b){for(var c=void 0,d=g.na(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&(void 0==c||e.end<c)&&(c=e.end),e.start>b&&(void 0==c||e.start<c)){c=e.start;break}return c};
YK=function(a,b,c,d){g.I.call(this);this.B=window.NaN;this.J=!1;this.H=null;this.K=this.N=this.C=!1;this.aa=a;this.Y=b;this.T=c;this.V=d;this.U=new g.O(this.A,250,this);g.J(this,this.U);this.F=new g.O(this.A,0,this);g.J(this,this.F);this.o=[];this.g=new TK};
ZK=function(a,b){a.A();var c=a.g;if(1<b.length&&b.length>c.g.length)c.g=c.g.concat(b),c.g.sort(c.o);else for(var d=g.na(b),e=d.next();!e.done;e=d.next()){var f=e.value;if(!c.g.length||0<c.o(f,c.g[c.g.length-1]))c.g.push(f);else{e=c.g;var k=g.Gb(e,f,c.o);0>k&&g.Db(e,-(k+1),0,f)}}a.B=window.NaN;a.A()};
$K=function(a,b){var c=(0,g.Md)(a.g.g,function(a){return a.namespace==b});
a.D.apply(a,c);return c};
aL=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1==a.o.indexOf(e)&&(a.o.push(e),c.push([1,e]))}return c};
bL=function(a,b){var c=[];if(!b.length)return c;b.sort(g.Hy);for(var d=0;d<b.length;d++){var e=b[d];a.o.splice(a.o.indexOf(e),1);c.push([2,e])}return c};
cL=function(a,b,c,d,e){g.R.call(this);this.N=a;this.A=b;this.D=c;this.Wa=e||null;this.g=this.B=null;this.K=new xK(a,b);this.o=null;this.F=new CK(this.K,b,this.D,d);this.ca=this.Ka=window.NaN;this.Qa=new g.O(this.Xc,void 0,this);this.C=this.Sa=window.NaN;this.U=!1;this.J=window.NaN;this.Va=0;this.Z=this.H=!1;this.Xa={};this.aa="";this.ka=this.pa=0;this.Ta=b.pe?new OK:null;this.Ha=new pC(5);this.xa=!1;this.Ja={};this.Aa="";this.wa=window.NaN;this.V=!1;a=this.A;this.T=a.Ya&&this.D.o?new RK(a,this.Ha):
null};
dL=function(a,b){b=b||a.g&&a.g.g&&a.g.g.startTime||a.C;var c=a.g;var d=a.F;if(d.A.aa){var e=d.g&&d.g.index.Ve(b)||0;d.Z!=e&&(d.Y={},d.Z=e,DK(d,d.D))}!JK(d)&&-1<d.U&&(0,g.Ru)()-d.U<1E3*d.A.oe||(d.V&&!IK(d)&&(d.V=0,DK(d,d.D)),EK(d),FK(d),d.N|=d.g!=d.o);d.g.index.Nb()||(d.Z=-1);d=d.g;c.Da!=d&&(c.Da=d);c=a.B;d=a.F.B;c.Da!=d&&(c.Da=d)};
gL=function(a){0==a.C&&(a.g.Da.o||eL(a,a.g,!0),a.B.Da.o||eL(a,a.B,!0));a.seek(a.C);fL(a,"gv")};
g.hL=function(a,b){var c=a.g.Da.info.mimeType;b.g=b.A.addSourceBuffer(a.B.Da.info.mimeType);b.N?b.o=b.A.addSourceBuffer(c):b.o=new vz;a.o=b;a.B.K=!1;a.g.K=!1;a.B.B=null;a.g.B=null;a.resume();Gz(b)&&(b.g.addEventListener("updateend",(0,g.z)(a.Xc,a),!1),b.o.addEventListener("updateend",(0,g.z)(a.Xc,a),!1),b.g.addEventListener("error",(0,g.z)(a.Zj,a,!0),!1),b.o.addEventListener("error",(0,g.z)(a.Zj,a,!1),!1));fL(a,"msa");g.PF("msa",void 0,"video_to_ad");UF.measure&&UF.getEntriesByName("mark_vta").length&&
UF.measure("measure_vta_to_msa","mark_vta");a.ha&&a.Y&&(c=g.y("yt.scheduler.instance.enablePriorityThreshold"))&&c(1);a.Xc();a.Sa=g.Ds((0,g.z)(a.Xc,a),1E4)};
jL=function(a){a.o&&a.o.g&&a.o.g.removeEventListener&&(a.o.g.removeEventListener("updateend",(0,g.z)(a.Xc,a),!1),a.o.o.removeEventListener("updateend",(0,g.z)(a.Xc,a),!1),a.o.g.removeEventListener("error",(0,g.z)(a.Zj,a,!0),!1),a.o.o.removeEventListener("error",(0,g.z)(a.Zj,a,!1),!1));a.o=null;a.H=!0;iL(a)};
kL=function(a){a.o&&Dz(a.o)&&jL(a)};
lL=function(a,b,c){if(!b.F.o||!c.remove)return!1;if(c.updating)return!0;if(!b.F.g&&c.buffered.length)return a=c.buffered.end(c.buffered.length-1),c.remove(0,a),b.F.g=!0;b.F.reset();a.R("seekelementrequired");return!1};
oL=function(a,b,c){if(a.H&&!FC(a.N))return!1;if(a.D.o){if(0<b.A.length&&!a.A.ha)return!1;if(b.D)return!(0,window.isNaN)(a.wa)}if(!(b.g||a.D.o&&a.A.ha&&b.D)){if(!b.Da.xc())return a.A.D&&!b.Da.o&&eL(a,b,!1),!1;iK(b,a.C)}var d=b.A.length+c.A.length;(rK(b)||rK(c)||a.D.isLive&&(!a.A.ha||!b.A.length))&&--d;if(2<=d+1)return!1;d=b.g;if(!d)return!0;if(!XA(d.ea.B))return!1;4==d.type&&d.ea.xc()&&(b.g=g.jb(d.ea.nk(d)),d=b.g);!d.B&&!d.ea.dg(d)||d.ea.info.audio&&4==d.type?a=!1:tK(b)&&!a.A.Y?a=!0:(!(c=d.B||mK(b)+
mK(c)>a.A.Z||!!(c.g&&!c.g.B&&c.g.o<d.o)&&(!a.D.o||c.g.o&&d.o))&&(c=3==d.type)&&(d=d.o,b=mL(a,b,!0),!JK(a.F)&&0<a.A.T&&(c=((0,g.Ru)()-a.Va)/1E3,b=Math.min(b,a.A.T+a.A.fb*c)),b=a.C+b,a.A.Ka?(c=Math.min(b,nL(a)+a.A.Ka),c!=b&&a.Wf("mrl","ori."+b+";mod."+c,!0),a=c):a=b,c=d>a),a=c?!1:!0);return a};
pL=function(a,b,c){if((!a.o||Cz(a.o)||Gz(a.o))&&!a.U&&a.F.J){var d=a.C;a=a.K;c=yK(a,b.Da.info.g,c.Da.info.g,0);var e=zC(a.g)+c*BC(a.g)+c/CC(a.g);d+=Math.max(e,e+a.o.Ja-c/b.Da.info.g);a:{if(b.A.length){if(b.A[0].info.g[0].startTime<=d)break a;kK(b)}a=b.o;for(c=a.g.length-1;0<=c;c--)a.g[c].info.startTime>d&&a.g.pop();b.A.length?b.g=g.jb(g.jb(b.A).info.g):b.o.g.length?b.g=OJ(b.o).info:b.g=b.B;b.g&&d<b.g.startTime&&(b.T=0,b.g=b.Da.Ue(d,!0).g[0])}}};
sL=function(a,b,c){oL(a,b,c);var d=b.g;if(b.D)a.xa=!0,d=b.Da.Ue(window.Infinity),d.A=a.wa;else if(b.g.ea.xc()){!tK(b)||a.A.Y||a.D.o||(pL(a,b,c),b.g||iK(b,a.C));d=b.g;var e=d.o-a.C,f=!d.range||0==d.La&&0==d.Ea?0:d.range.length-(d.Ea+d.La);if(sK(b)){var k=Math.min(a.A.xa,.5*mL(a,b,!0));k=tK(b)||e<=k}else k=!1;k&&0==f&&(a.D.o?d.ea=b.Da:(f=d.startTime+qL,d.La&&(f+=d.duration),iK(b,f),d=b.g));d.ea.gd()?(c=yK(a.K,d.ea.info.g,c.Da.info.g,e),e=sK(b),c=d.ea.cg(d,c),c.range&&1<c.g.length&&(e||c.o.g?c=d.ea.cg(d,
c.g[0].La):(e=c.g[c.g.length-1],f=e.La/c.range.length,!e.g&&.4>f&&(c=d.ea.cg(d,c.range.length-e.La)))),d=c):d=d.ea.Wh(d)}else d.ea.gd()?(c=yK(a.K,b.Da.info.g,c.Da.info.g,0),d=d.ea.cg(d,c)):d=d.ea.Wh(d);dK(b,rL(a,d))};
rL=function(a,b){if(3==b.g[b.g.length-1].type){a:{var c=a.F;var d=b.g[0].ea;if(d.info.video){if(c.o!=d){c.o=d;c=LK(c);break a}}else c.T=d;c=null}c&&a.R("videoformatchange",c)}c=$A(b);d=a.N;var e=a.K,f=Math.min(2.5,zC(e.g));e=AK(e);c=new mJ(d,c,c-f*e,a.A.Ki&&a.xa,Qz(b.g[0]));a.A.Dc&&(c.F=[]);c=new AJ(a.A,b,c,a.Ja);d=(0,g.z)(a.KF,a);c.J=d;c.start(Math.max(0,b.g[0].A-a.C));b.g[0].ea.info.video&&(d=BJ(c))&&(a.Aa=d.substr(0,d.indexOf(".")));return c};
tL=function(a){if((0,window.isNaN)(a.Ka)){var b=(0,g.z)(a.Xc,a);a.Ka=g.Es(b,0)}};
uL=function(a){if((0,window.isNaN)(a.ca)){var b=(0,g.z)(function(){this.ca=window.NaN;this.Xc()},a);
a.ca=g.Es(b,1E3)}};
vL=function(a){if(a.D.B)return!1;var b;if(b=a.U){if(b=0<a.A.ca&&a.g&&a.B){b=a.K;var c=a.g,d=a.B,e=a.A.ca;if(0==c.A.length&&0==d.A.length)b=!0;else{var f=0,k=UJ(c.o).concat(UJ(d.o));k=g.na(k);for(var l=k.next();!l.done;l=k.next())f+=l.value.La;c=c.J+d.J;f/=c;b=f>e?!0:c*(e-f)/BK(b)<e}b=!b}b||(b=a.g,b=0<b.A.length&&1==b.o.g.length&&NJ(b.o).info.C<b.U)}if(b)return!0;if(!a.Z||!a.A.K||10>a.C||360<a.g.Da.info.video.o)return!1;b=uK(a.g,a.C,a.A.K)||uK(a.B,a.C,a.A.K);return(0<a.g.A.length||0<a.B.A.length||
oL(a,a.g,a.B)||oL(a,a.B,a.g))&&b};
xL=function(a,b,c,d){if(c.updating)return!0;var e=NJ(b.o);if(!e)return!1;!b.B||b.B.g||Rz(b.B,e.info)||(b.B=null,Cz(a.o)&&c.abort(),c.g=null);var f=a.D.isLive&&uA(e);a.A.Sa&&a.D.B&&0==e.info.Ea&&1==e.info.ea.info.containerType&&(null==c.g?null!=b.B&&b.B.ea==e.info.ea:c.g==e.info.ea.g)&&(mz(qA(e),1836019574),mz(qA(e),1718909296),e.Yc=!1);if(!a.D.B||0==e.info.Ea)if(f||a.D.o||e.Yc)c.g=null;else if(e.info.ea.xc(),f=e.info.ea.g,null==f||c.g==f?f=!1:(wL(a,c,f),c.g=f,a.R("initsegment",c.g),f=c.updating),
f)return!0;f=mL(a,b,!1);f=a.C+f;null!==d&&0<=d&&(f=Math.min(f,d));d=f;if(a.T)a:if(a.T.g&&b.Da.info.audio){if((f=NJ(b.o))&&(f=f.o)&&null!=f.B){f=f.B-1;break a}f=-1}else f=window.Infinity;else f=window.Infinity;if(b.H)d=NJ(b.o).range;else{var k=b.o;if(!k.g.length||k.g[0].info.A>=d)d=null;else{var l=k.g[0].Yc?0:k.g[0].range.start;if(l>f)d=null;else{var m;for(m=1;m<k.g.length;m++){var n=k.g[m].range.start>f,q=k.g[m].g!=k.g[m-1].g;if(k.g[m].info.A>d||n||q||k.A.Wa)break}m--;d=new g.Kz(l,Math.min(k.g[m].range.end,
f))}}}if(!d)return!1;f=new window.Uint8Array(e.g,d.start,d.length);if(a.Ta&&e.info.ea.info.video&&1==e.info.ea.info.containerType&&(k=a.Ta,0==e.info.Ea&&(k.o=0,k.g=0,k.A.length=0),!((0,window.isNaN)(k.o)||8>f.length))){l=new window.DataView(f.buffer,f.byteOffset);for(m=!1;!m;)if(k.o==k.g)a:if(m=k,n=f.length,m.o+7>=n){for(q=m.o;q<n;q++)m.A.push(l.getUint8(q));m=!0}else{if(0<m.A.length){for(q=0;8>m.A.length;q++)m.A.push(l.getUint8(q));var t=PK(m.A,0);q=PK(m.A,4);m.A.length=0}else t=l.getUint32(m.g),
q=l.getUint32(m.g+4);if(1836019558==q||1836019574==q||1718909296==q||1936286840==q)m.o+=t,m.g=m.o;else if(1835295092==q)m.o+=t,m.g+=8;else{m.o=window.NaN;m=!0;break a}m=m.g>=n}else a:if(m=k,n=f.length,m.g+5>=n){for(q=m.g;q<n;q++)m.A.push(l.getUint8(q));m=!0}else{if(0<m.A.length){for(q=0;6>m.A.length;q++)m.A.push(l.getUint8(q));q=PK(m.A,0);12==q&&6==m.A[4]&&45==m.A[5]&&l.setUint8(m.g+5,63);m.g+=q+4;m.A.length=0}for(;m.g<m.o&&m.g+5<n;){q=l.getUint32(m.g);if(0>=q){m.o=window.NaN;m=!0;break a}12==q&&
6==l.getUint8(m.g+4)&&45==l.getUint8(m.g+5)&&l.setUint8(m.g+5,63);m.g+=q+4}m=m.g>=n}(0,window.isNaN)(k.o)||(k.o-=f.length,k.g-=f.length)}k=!1;3!=e.info.type||1!=e.info.ea.info.containerType&&2!=e.info.ea.info.containerType||(k=1==e.info.ea.info.containerType&&a.A.ol&&!b.K&&0==e.info.Ea&&0<e.info.startTime)&&sA(e,0);f=wL(a,c,f);if(0!=f){if(2!=f)if(e.info.ea.info.video?(l=a.A,l.B=Math.floor(.8*l.B),l.J=Math.floor(.8*l.J)):(l=a.A,l.C=Math.floor(.8*l.C),l.da=Math.floor(.8*l.da)),l.o=Math.floor(.8*l.o),
1==f&&c.remove&&!c.updating){f=!1;l=c.buffered.length;for(m=0;!f&&m<l;m++)c.buffered.start(m)>e.info.o&&(c.remove(c.buffered.start(m),c.buffered.end(l-1)),f=!0);f||c.remove(0,e.info.startTime-5)}else oK(b);f=!1}else f=!0;if(!f)return!1;b.K=!0;if(k)sA(e,e.info.startTime),c.abort(),c.g=null;else{f=b.o;for(k=[];f.g.length&&(f.g[0].range.end>d.end?(m=rA(f.g[0],d.end-f.g[0].range.start+1),l=m[0],f.g[0]=m[1]):l=f.g.shift(),k.push(l),l.range.end!=d.end););k.length&&(0,g.G)(k,b.Z,b)}e.Yc&&e.info.ea.g&&(c.g=
e.info.ea.g,a.R("initsegment",c.g));return!0};
yL=function(a,b,c){YB(a.D,b,c)&&a.A.ka&&a.V&&c&&(a.V=!1,g.Es(function(){a.fa()||a.R("seekplayerrequired",b.startTime+.1,!0)},0))};
wL=function(a,b,c){try{Gz(a.o)?b.appendBuffer(c):b.append(c)}catch(d){if(11==d.code)return zL(a,!1,"html5.invalidstate",{updating:""+ +b.updating,mrs:a.o.A.readyState}),2;if(22!=d.code&&0!=d.message.indexOf("Not enough storage"))return g.ws(d),4;a.A.cd&&a.Wf("quex","br."+yH(b.buffered).replace(/,/g,"_"));return 1}return Dz(a.o)?3:0};
AL=function(a,b){b.o.subscribe("error",a.PE,a);b.o.subscribe("timestamprewrite",a.TE,a);var c=(0,g.z)(a.QE,a,b);b.o.subscribe("placeholderinfo",c,void 0);c=(0,g.z)(a.RE,a,b);b.o.subscribe("placeholderrollback",c,void 0);c=(0,g.z)(a.SE,a,b);b.o.subscribe("segmentinfo",c,void 0);b==a.g&&b.o.subscribe("cuepoint",a.OE,a)};
mL=function(a,b,c){if(a.H)return 1;var d=b.Da.info.audio?a.A.C:a.A.B;!a.A.Y&&JK(a.F)&&(d=Math.max(d,b.Da.info.audio?a.A.da:a.A.J));c&&(d+=a.A.Z);c=JK(a.F)?b.g?b.g.ea.info.g:b.Da.info.g:b.J;d/=c;0<a.A.Ha&&a.o&&Cz(a.o)&&(b=b.Da.info.video?a.o.o:a.o.g)&&!b.updating&&(c=tH(b.buffered,a.C),0<=c&&(b=a.C-b.buffered.start(c),d+=Math.max(0,Math.min(b-a.A.Ha,a.A.ne))));0<a.A.o&&(d=Math.min(d,a.A.o));a.A.ib&&!JK(a.F)&&(b=a.F,b=KK(b,g.jb(b.C))+KK(b,b.K.g[0]),c=a.A.ib*(b/AK(a.K)),c<d&&25>c&&a.Wf("bwcapped","1",
!0),c=Math.max(c,25,2.5*a.A.H/b),d=Math.min(d,c));return d};
nL=function(a){if(!a.Wa)return window.Infinity;var b=(0,g.Md)(a.Wa.g.g,function(a){return"ad"==a.namespace});
b=g.na(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.C)return c.start/1E3;return window.Infinity};
BL=function(a,b,c){var d=(0,g.z)(a.R,a,"error");a=a.A.Ta?(0,g.z)(a.Wf,a,"pathprobe"):null;(new QK(b,c,a,d)).send()};
CL=function(a,b,c,d){if(b.Da.xc())if(d){var e=uH(d.buffered,c),f=window.NaN,k=b.B;k&&(f=uH(d.buffered,k.ea.index.Ed(k.ra)));if(e==f&&qK(b))return c;d=gK(b,c);if(0<=d)return d;nK(b,b.Da.gd()?1:2);b.Da.info.video&&b.B&&!b.B.g&&!RJ(b.o)&&b.Da.gd()&&(d=b.B,b.o.g.length&&(d=OJ(b.o).info),d=b.g||d,d=d.ea.cg(d,d.range.length-(d.La+d.Ea)),dK(b,rL(a,d)));if((0,window.isNaN)(e))return iK(b,c);iK(b,e+qL)}else iK(b,c);else a.A.D&&!b.Da.o&&eL(a,b,!1),0!=c&&kK(b);return c};
eL=function(a,b,c){if(a.A.D||!b.Da.xc()&&!b.Da.o&&XA(b.Da.B))c=b.Da.tj(a.A,c),(0,g.G)(c,function(a){if("f"!=a.g[0].ea.info.o){var c=rL(this,a);!Qz(a.g[a.g.length-1])&&dK(b,c)}},a),b.Da.o=!0};
zL=function(a,b,c,d){a.fa()||(a.R("error",new g.KE(c,b,d)),b&&a.dispose())};
DL=function(a){var b={lct:a.C.toFixed(3),lsk:a.U,lmf:JK(a.F),lbw:CC(a.N).toFixed(3),lhd:zC(a.N).toFixed(3),lst:(1E9*BC(a.N)).toFixed(3),laa:a.B.B?Vz(a.B.B):"",lva:a.g.B?Vz(a.g.B):"",lar:a.B.g?Vz(a.B.g):"",lvr:a.g.g?Vz(a.g.g):"",lvh:a.Aa};a.o&&!Dz(a.o)&&(b.lab=yH(a.o.g.buffered),b.lvb=yH(a.o.o.buffered));return b};
fL=function(a,b,c){a.Xa[b]=c?window.performance.timing.navigationStart+c:(0,g.Ru)()};
iL=function(a){a.B&&nK(a.B,0);a.g&&nK(a.g,0)};
EL=function(a,b,c){if(!b||!c)return!0;c=-1!=tH(c.buffered,a);var d=OJ(b.o)?OJ(b.o).info.o>=a:!1,e=b.A.length?b.A[0]:null;a=(b=e?e.info.g[0]:b.g)&&b.startTime<=a;return!!(c||d||a)};
FL=function(a,b){var c=new g.Iz;c.fb=a.experiments.o("html5_throttle_rate")||c.fb;a.experiments.g("html5_streaming_xhr")&&(c.U=!0);a.experiments.g("html5_streaming_debug")&&(c.U=!0,c.pa=!0);c.Ge=a.experiments.g("html5_use_long_term_bandwidth_estimator");c.K=a.experiments.o("html5_min_buffer_to_resume");c.qb=a.experiments.o("html5_variability_discount");c.Cb=a.experiments.o("html5_variability_no_discount_thresh");c.Li=a.experiments.o("html5_variability_full_discount_thresh");a.experiments.o("html5_max_av_sync_drift")&&
(c.ke=a.experiments.o("html5_max_av_sync_drift"));var d=a.schedule;d.A.o()==d.policy.B?c.T=10:c.T=a.experiments.o("html5_throttle_burst_secs")||c.T;a.experiments.o("html5_min_secs_between_format_selections")&&(c.oe=a.experiments.o("html5_min_secs_between_format_selections"));c.aa=a.experiments.o("html5_local_max_byterate_lookahead");c.ha=a.experiments.g("html5_stop_overlapping_requests");c.Ha=a.experiments.o("html5_min_readbehind_secs");c.ne=a.experiments.o("html5_min_readbehind_cap_secs");c.ca=a.experiments.o("html5_min_startup_smooth_target")||
c.ca;c.Af=a.experiments.g("html5_preload_size_excludes_metadata");c.ib=a.experiments.o("html5_max_readahead_bandwidth_cap");c.bc=a.experiments.g("disable_html5_copy_pre_moof");c.Ie=a.experiments.g("html5_disable_audio_append_cap");c.jc=a.experiments.g("html5_disable_non_contiguous");c.Ka=a.experiments.o("html5_post_interrupt_readahead");c.sc=a.experiments.g("html5_disable_urgent_upgrade_for_quality");c.cd=a.experiments.g("html5_log_quota_exceeded");c.Aa=a.experiments.o("html5_repredict_misses")||
c.Aa;c.Ji=a.experiments.o("html5_subsegment_readahead_target_buffer_health_secs");c.Xa=a.experiments.o("html5_subsegment_readahead_timeout_secs");c.Hi=a.experiments.o("html5_subsegment_readahead_progress_timeout_fraction");c.Ii=a.experiments.o("html5_subsegment_readahead_tail_margin_secs");c.oc=a.experiments.g("disable_html5_new_contiguity_logic");c.V=a.experiments.g("html5_assume_alrs_have_content_length");c.Qa=a.experiments.o("html5_fallback_probe_ms");if(ft()||a.experiments.g("dash_html5_safari8_workarounds"))c.Wa=
!0;if(Zs("trident/")||Zs("edge/"))c.o=240;g.th&&(c.J=41943040);g.gE(a)||!Fz()?(c.B=8388608,c.C=524288,c.Db=5,c.Z=2097152,c.H=1048576,c.jh=1.5,c.ih=15,c.Y=!Fz(),c.Je=!1,c.F=4587520,dt()&&(c.F=786432),c.g*=1.1,c.A*=1.1,c.Sa=!0,c.J=c.B,c.da=c.C):a.isMobile&&(c.g*=1.3,c.A*=1.3);ct()&&(d="CHROMECAST/ANCHOVY"==a.A.cmodel,c.B=20971520,c.C=1572864,d&&(c.F=812500,c.N=1E3));(d=JE(a))||(d=Zs("smart-tv")&&Zs("samsung")&&/(J\d{3}|JS\d{3}|JU\d{3})/.test(a.A.cmodel));d&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&
(c.He=!0);c.Ll=a.C;c.pe=!a.experiments.g("disable_fpa_sei_removal")&&Zs("windows nt")&&(b.Uf()||b.Xd());b.ec()&&(a.experiments.g("disable_html5_manifestless_delay")||(c.Cc=!0),c.Fi=!1,a.experiments.g("html5_manifestless_always")&&(c.Va=!1,c.ka=!0));a.isAd()&&(c.K=0);d="ULTRALOW"==b.latencyClass||a.experiments.g("html5_treat_latency_low_like_ultra_low")&&b.isLowLatencyLiveStream;(a.experiments.g("html5_streaming_response_mediastream_rewrite_v2")||a.experiments.g("html5_ultra_low_latency_streaming_responses")&&
d)&&b.Ra&&b.Ra.videoInfos.length&&1==b.Ra.videoInfos[0].containerType&&b.ec()&&!g.$s()&&(c.U=!0,c.pa=!0);c.Ya=a.experiments.g("html5_enable_subsegment_readahead_v3")||a.experiments.g("html5_ultra_low_latency_subsegment_readahead")&&d;c.dd=(a.experiments.g("html5_manifestless_accurate_sliceinfo")||c.Ya)&&b.ec();/^re/.test(b.clientPlaybackNonce)&&(c.Bf=!0,c.Ta=!0);c.wa=b.Xe&&!a.experiments.g("disable_rqs");c.Dc=c.wa&&/^rqd/.test(b.clientPlaybackNonce);/^pp/.test(b.clientPlaybackNonce)&&(c.Nl=!0,c.Ta=
!0);JE(a)&&!a.experiments.g("html5_disable_move_pssh_to_moov")&&b.oa&&CB(b.oa)&&(c.Sa=!1);a.schedule.policy.A=b.ec()?.5:0;if(d=a.experiments.o("html5_deadzone_multiplier"))c.g*=d,c.A*=d;if(d=a.experiments.o("html5_request_sizing_multiplier"))c.Ei=d;a.experiments.g("html5_strip_emsg")&&(c.Cf=!0);a.experiments.g("html5_do_not_void_tags")&&(c.Mi=!1);c.o=a.experiments.o("html5_max_buffer_duration")||c.o;c.xa=a.experiments.o("html5_max_buffer_health_for_downgrade")||c.xa;c.Ja=a.experiments.o("html5_min_upgrade_health")||
c.Ja;a.experiments.g("disable_html5_streaming_response_timing")&&(c.Ki=!1);UC(a.T,CD)&&(c.F=window.NaN);c.D=a.experiments.g("html5_old_load_metadata");return c};
GL=function(a,b,c){this.url=a;this.interval=b;this.g=c};
HL=function(a,b){this.message=a;this.number=b;this.g=new gq(5E3,2E4,.2)};
IL=function(a,b,c,d){this.statusCode=a;this.statusMessage=b;this.headers=c;this.message=d};
JL=function(a){var b=String.fromCharCode.apply(String,a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1==c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;var f=e[1];(0,window.isFinite)(f)&&(f=String(f));f=g.u(f)?/^\s*-?0x/i.test(f)?(0,window.parseInt)(f,16):(0,window.parseInt)(f,10):window.NaN;e=e[2];b=Xy(b.slice(d+2));return null==b?null:new IL(f,e,b,a.subarray(c+4))};
KL=function(a,b,c,d,e){g.I.call(this);this.C=a;this.N=b;this.H=c;this.g=d;this.o=e;this.sessionId="";this.A=this.K=this.J=this.D=this.F=null;this.B=new g.iu(this);g.J(this,this.B);this.g?(this.B.O(this.g,"message",this.WA),this.B.O(this.g,"keystatuseschange",this.XA)):this.o&&(ju(this.B,this.o,["mskeymessage","webkitkeymessage"],this.Rt),ju(this.B,this.o,["mskeyerror","webkitkeyerror"],this.Qt),ju(this.B,this.o,["mskeyadded","webkitkeyadded"],this.Pt))};
LL=function(a){return!(!a.g||!a.g.keyStatuses)};
ML=function(a,b){this.g=a;this.contentType=(void 0===b?"":b)||null;this.o=this.C=window.NaN;this.A=!1;this.B=[]};
NL=function(a,b){g.I.call(this);this.o=a;this.g=b;this.F={};this.B=null;this.C=new g.iu(this);g.J(this,this.C);this.A=this.D=null};
PL=function(a){if(a.g.A)return a.g.A.createMediaKeys().then(xs(function(b){a.fa()||(a.D=b,a.o.setMediaKeys(b))}));
bC(a.g)?a.A=new (aC())(a.g.o):dC(a.g)?(a.A=new (aC())(a.g.o),a.o.webkitSetMediaKeys(a.A)):OL(a);return null};
OL=function(a){ju(a.C,a.o,["keymessage","webkitkeymessage"],a.K);ju(a.C,a.o,["keyerror","webkitkeyerror"],a.J);ju(a.C,a.o,["keyadded","webkitkeyadded"],a.H)};
QL=function(a,b){var c=b.g;if(a.g.A){var d=a.D.createSession();c=d.generateRequest(b.contentType,c);d=new KL(null,null,null,d,null);c.then(null,xs((0,g.z)(d.At,d,"t.g")));return d}if(bC(a.g)){d=new window.Uint8Array(270);for(var e=0;135>e;e++)d[2*e]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(e);c=a.A.createSession("video/mp4",c,d);return new KL(null,null,null,null,c)}if(dC(a.g)){d=c.subarray(4);
d=String.fromCharCode.apply(null,new window.Uint16Array(d.buffer,d.byteOffset,d.byteLength/2)).match(/ek=([0-9a-f]+)/)[1];e="";for(var f=0;f<d.length;f+=2)e+=String.fromCharCode((0,window.parseInt)(d.substr(f,2),16));f=a.g.fairPlayCert;d=new window.Uint8Array(new window.ArrayBuffer(f.length));for(var k=0;k<f.length;k++)d[k]=f.charCodeAt(k);f=new window.ArrayBuffer(2*e.length);k=new window.Uint16Array(f);for(var l=0;l<e.length;l++)k[l]=e.charCodeAt(l);e=new window.Uint8Array(f);f=0;l=new window.ArrayBuffer(c.byteLength+
4+e.byteLength+4+d.byteLength);k=new window.Uint8Array(l);l=new window.DataView(l);k.set(c);f+=c.byteLength;l.setUint32(f,e.length,!0);f+=4;k.set(e,f);f+=e.length;l.setUint32(f,d.byteLength,!0);k.set(d,f+4);c=a.A.createSession("video/mp4",k);return new KL(null,null,null,null,c)}a.o.generateKeyRequest?a.o.generateKeyRequest(a.g.o,c):a.o.webkitGenerateKeyRequest(a.g.o,c);a.B=new KL(a.o,a.g,c,null,null);return a.B};
RL=function(a,b){var c=a.F[b.sessionId];!c&&a.B&&(c=a.B,a.B=null,c.sessionId=b.sessionId,a.F[b.sessionId]=c);return c};
TL=function(a,b,c,d,e,f,k){f=void 0===f?!1:f;k=void 0===k?!1:k;g.I.call(this);this.B=a;this.o=d;this.o.subscribe("oauthtoken",this.Tr,this);this.F={session_id:e};this.V=!!f;this.Y=!!k;this.U=0;a=this.B.C;dC(this.B)&&(a=c.g.subarray(4),a=String.fromCharCode.apply(null,new window.Uint16Array(a.buffer,a.byteOffset,a.byteLength/2)).replace("skd://","https://"));SL(this,a);this.D=this.K=!1;g.PF("drm_gk_s");try{var l=QL(b,c)}catch(m){b="t.g",m instanceof window.DOMException&&(b+=";c."+m.code),this.o.R("licenseerror",
"drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"),l=null}if(this.A=l)b=this.A,l=this.TA,a=this.SA,d=this.VA,b.F=this.UA,b.D=l,b.J=a,b.K=d,b.A=this,g.J(this,this.A);this.aa=c.B;this.H=[];this.g={};this.N=window.NaN;this.C=c.C||window.NaN};
SL=function(a,b){if(UL.test(b)){for(var c in a.F){var d=c,e=a.F[c];b=Sg(g.Wg(b,d),d,e)}a.J=b}else VL(a,"drm.net",!0,"t.x")};
VL=function(a,b,c,d,e){a.fa()||a.o.R("licenseerror",b,c,d,e);c&&a.dispose()};
WL=function(a){if(!a)return{};var b={};(0,g.G)(a.split(";"),function(a){a=a.split(",");2==a.length&&(b[a[1]]={type:a[0],status:"unknown"})});
return b};
XL=function(a){var b={requestedKeyIds:a.aa,cryptoPeriodIndex:a.C};a.A&&(b.keyStatuses=a.g);return b};
YL=function(a){if(!LL(a.A))return a.H.join(",");var b=[],c;for(c in a.g)b.push.apply(b,[c,a.g[c].type,a.g[c].status]);return b.join(",")};
ZL=function(){this.keys=[];this.values=[]};
aM=function(a,b,c,d,e){e=void 0===e?"":e;g.R.call(this);a&&(a.addKey||a.webkitAddKey)||aC()||gC(c);this.F=c;this.K=a;this.g=b;this.subscribe("newlicense",this.iF,this);this.subscribe("newsession",this.jF,this);this.subscribe("sessionready",this.WF,this);this.subscribe("keystatuseschange",this.YA,this);this.ca=e||g.WD();this.Y=null;this.A=new ZL;this.B=this.D=null;this.o=[];this.H="fairplay"==this.g.g?ky:$L;this.T=new NL(a,b);g.J(this,this.T);this.C=null;bC(b)&&(this.C=new NL(a,b),g.J(this,this.C));
this.aa=2;this.N=new g.iu(this);g.J(this,this.N);this.U=!1;this.V=null;this.J=!1;a=this.K;this.g.A?this.N.O(a,"encrypted",this.mE):ju(this.N,a,bC(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.fF);(a=PL(this.T))?a.then(xs((0,g.z)(this.ME,this)),xs((0,g.z)(this.AD,this))):this.J=!0;this.C&&PL(this.C);this.Z=d};
bM=function(a,b){a.Y=b;a.R("oauthtoken",b)};
dM=function(a,b,c){a.fa()||bC(a.g)==c||a.U&&a.Z||(a.U=!0,a.o.push(b),1<a.o.length||a.J&&cM(a))};
cM=function(a){for(;a.o.length;){var b=a.o[0];if(g.Mb(a.D,b.g))a.o.shift();else{if(a.A.get(b.g))if("fairplay"==a.g.g)a.A.remove(b.g);else{a.o.shift();continue}if("widevine"==a.g.g){a:{var c=b.g;try{for(var d=0,e=new window.DataView(c.buffer);d<e.byteLength-8;){var f=e.getUint32(d);if(1>=f)break;if(1886614376==e.getUint32(d+4)){var k=32;if(0<e.getUint8(d+8)){var l=e.getUint32(d+28);k+=16*l+4}var m=e.getUint32(d+k-4);try{var n=new re(c.subarray(d+k,d+k+m)),q=new Qr;for(k=n;se(k)&&4!=k.o;)switch(k.A){case 1:var t=
k.g;b:{for(var v,D,C=t,B=0,U=0;4>U;U++)if(D=C.o[C.g++],B|=(D&127)<<7*U,128>D){C.F=B>>>0;C.D=0;break b}D=C.o[C.g++];B|=(D&127)<<28;v=0|(D&127)>>4;if(128>D)C.F=B>>>0,C.D=v>>>0;else{for(U=0;5>U;U++)if(D=C.o[C.g++],v|=(D&127)<<7*U+3,128>D){C.F=B>>>0;C.D=v>>>0;break b}C.C=!0}}var Z=t.F,Aa=t.D;if(C=Aa&2147483648)Z=~Z+1>>>0,Aa=~Aa>>>0,0==Z&&(Aa=Aa+1>>>0);B=4294967296*Aa+Z;var pa=C?-B:B;Ee(q,1,pa);break;case 2:C=pa=ve(k);Ce(q,2).push(C);break;case 3:pa=ue(k);Ee(q,3,pa);break;case 4:pa=ve(k);Ee(q,4,pa);break;
case 5:pa=ue(k);Ee(q,5,pa);break;case 6:pa=ue(k);Ee(q,6,pa);break;case 7:pa=qe(k.g);Ee(q,7,pa);break;case 8:pa=ve(k);Ee(q,8,pa);break;case 9:pa=qe(k.g);Ee(q,9,pa);break;case 10:pa=qe(k.g);Ee(q,10,pa);break;case 11:pa=new Nr;C=k;B=pa;U=Or;var ua=C.g.A,Wd=qe(C.g),Qb=C.g.g+Wd;C.g.A=Qb;U(B,C);C.g.g=Qb;C.g.A=ua;C=q;B=pa;U=Nr;var qc=C,Be=U;qc.g||(qc.g={});if(!qc.g[11]){for(var mm=Ce(qc,11),Lj=[],Og=0;Og<mm.length;Og++)Lj[Og]=new Be(mm[Og]);qc.g[11]=Lj}var di=C.g[11];di||(di=C.g[11]=[]);var Pg=B?B:new U,
nm=Ce(C,11);di.push(Pg);nm.push(Fe(Pg));break;default:te(k)}var wb=q;if(null!=wb){var rc=wb;break a}}catch(om){}}d+=f}rc=null}catch(om){rc=null}}if(null!=rc)for(c=Ae(rc,7),null!=c&&(b.C=c),c=Ae(rc,10),null!=c&&0<c&&(b.o=c),c=Ce(rc,2),c=!c.length||c[0]instanceof window.Uint8Array?c:(0,g.H)(c,De),c=g.na(c),d=c.next();!d.done;d=c.next())b.B.push(g.he(d.value,!0).replace(/[\.]{1,2}$/,""));a:{c=a;if(!(c.F.g("disable_license_delay")||"widevine"!=c.g.g||b.A||(0,window.isNaN)(b.C)))for(c=g.na(c.A.values),
d=c.next();!d.done;d=c.next())if(1>=Math.abs(d.value.C-b.C)){c=!0;break a}c=!1}if(c){eM(a,b);a.o.shift();continue}}break}}a.o.length&&(b=a.o[0],a.A.get(b.g),rc=new TL(a.g,a.T,b,a,a.ca,a.F.g("html5_use_drm_retry"),a.F.g("html5_enable_ms_playready_hd")),rc.Tr(a.Y),"playready"==a.g.g&&a.F.g("playready_on_borg")&&(g.lc(rc.F,{prob:"1"}),SL(rc,rc.J)),a.A.set(b.g,rc))};
eM=function(a,b){a.B&&a.B.dispose();a.D=b.g;a.B=new g.O(function(){a.D=null;a.B=null;b.A=!0;a.o.push(b);1<a.o.length||cM(a)},fM(b.o));
a.B.start()};
fM=function(a){return 1E3*Math.max(0,Math.random()*(((0,window.isNaN)(a)?120:a)-30))};
gM=function(a){var b={};this.A=(b.c1a=(0,g.z)(this.C,this),b.c3a=(0,g.z)(this.D,this),b.c6a=(0,g.z)(this.B,this),b);(this.g=a)&&this.g.kh?this.o=g.Gs(this.g.kh):this.o=[]};
hM=function(a,b){this.g=a;this.o=b};
iM=function(a,b){var c=ly(ly(a.g.hz,b.mi),b.si);"auto"!=qy()||(c=a.g.experiments.g("html5_restore_performance_cap")?ly(c,new gy(0,sy(),!1)):ly(c,a.g.Ke));return c};
jM=function(a,b){var c=qy();if("auto"!=c)var d=iy("auto",c,!1);else if(g.gE(a.g)&&UC(a.g.T,BD))d=ky;else{var e;c=!!b.Ra.g;kE(a.g)&&(e=window.screen&&window.screen.width?new g.hd(window.screen.width,window.screen.height):null);e||(e=a.g.jh?a.g.jh.clone():a.o.Ga());(eE||bj||c)&&e.scale(g.CE());c=b.Ra.videoInfos;if(c.length){var f=.85,k=3==c[0].video.projectionType,l=4==c[0].video.projectionType;2!=c[0].video.projectionType&&!l||ZC?k&&!ZC&&(f*=.25):f*=.5;for(k=0;k<c.length&&!(d=c[k].video,null===e||
d.width*f<e.width&&d.height*f<e.height);k++);d=iy("auto",d.quality,!1)}else d=ky;e=d.g;ct()&&(e=Math.max(e,g.Rx.hd1080));(Zs("armv7")||Zs("android"))&&!g.gE(a.g)&&Yx(b.Ra.videoInfos[0])&&(e=Math.min(e,g.Rx.large));e=Math.max(e,g.Rx.medium);a.g.experiments.o("html5_default_quality_cap")&&(e=Math.min(e,a.g.experiments.o("html5_default_quality_cap")));d.g!=e&&(d=new gy(d.o,e,d.A))}return d};
kM=function(){var a=this;this.o=this.g=null;this.ou=new g.Pf(function(b,c){a.g=b;a.o=c})};
lM=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;g.R.call(this);this.C=new g.iu;this.o=a;this.D=b;this.A=window.NaN;this.F=this.B=this.g=null};
oM=function(a,b){mM(a,b);a.B=a.D.seek(b);return g.Yf([a.g.ou,a.B]).then(function(){a.R("seekend");nM(a)},function(){nM(a)})};
mM=function(a,b){a.g||(a.o.g.currentTime=b,a.g=new kM)};
nM=function(a){a.A=window.NaN;a.g=null;a.B=null;a.F=null};
qM=function(a){if(a.o)for(var b=g.na(["seeking","seeked"]),c=b.next();!c.done;c=b.next())a.C.O(a.o,c.value,function(b){return pM(a,b)})};
pM=function(a,b){switch(b.type){case "seeking":if(a.g)break;a.R("seekstart");a.g=new kM;a.g.then(function(b){return oM(a,b)});
break;case "seeked":a.g.resolve(a.o.getCurrentTime())}};
rM=function(a){AH.call(this);this.g=a;this.B={}};
CH=function(a,b){var c=a.Tb();a.g.src=b;a.de(c)};
HH=function(a){return a.g.buffered||wH()};
sM=function(){g.I.call(this);this.A={};this.g={};this.o=new g.O(this.iH,500,this);g.J(this,this.o)};
tM=function(a,b){return a.g[b]?a.g[b].g.Fb():[]};
uM=function(a){this.A=a;this.g=new WI(100);this.o=window.NaN};
vM=function(){if(window.document.visibilityState)var a="visibilitychange";else{if(!window.document[Nt+"VisibilityState"])return"";a=Nt+"visibilitychange"}return a};
wM=function(){var a=Ot("visibilityState",window.document);return!(!a||"visible"==a)};
xM=function(a){var b=vM();b&&window.document.addEventListener(b,a,!1)};
AM=function(a,b,c,d,e,f){g.R.call(this);var k=this;this.Wa=new rH;this.J=c;this.Xa=d;this.Ie=f;c=(0,g.z)(function(b,c){"crn_endcr"!=b||!a.experiments.g("use_legacy_ended_cue_range_behavior")&&g.T(this.A,32)||yM(this);e(b,c)},this);
this.F=new YK((0,g.z)(this.getCurrentTime,this),(0,g.z)(this.zr,this),(0,g.z)(this.Vz,this),c);g.J(this,this.F);this.wa=window.NaN;this.Z=this.H=null;this.C=a;this.xa=new hM(a,this.Xa);this.Aa=!1;this.K=this.B=null;this.ca=[];this.Ja=new bK;this.V=new bK;this.pe=this.cd=this.Je=this.Qa=!1;this.fb=window.NaN;this.A=new g.OH;this.qb=[];this.dd=b;this.ka=null;this.Y=window.NaN;this.pa=new g.iu;g.J(this,this.pa);this.g=new g.uG;this.o=null;this.ha=window.NaN;this.D=null;this.ne=this.Sa=!1;this.Ta=window.NaN;
this.Ka=this.sc=this.Cb=this.Va=!1;this.Db=this.Cc=window.NaN;this.Af=a.experiments.g("html5_force_play_on_suspend_event");this.Bf=a.experiments.g("html5_force_play_on_suspend_event_limited");this.T=null;this.Cf=this.C.experiments.g("html5_playing_event_buffer_underrun");this.aa=new sM;g.J(this,this.aa);this.aa.yk("bufferhealth",(0,g.z)(this.nq,this));this.aa.yk("bandwidth",(0,g.z)(this.ay,this));this.aa.yk("networkactivity",(0,g.z)(this.fy,this),!0);this.aa.yk("livelatency",(0,g.z)(this.qq,this));
this.aa.start();this.oe=!1;this.bc=!0;this.Dc=this.oc=!1;this.Ha=1;this.U=null;this.Ge=(0,g.z)(this.yG,this);xM(this.Ge);this.Le=new g.O(this.Mn,0,this);g.J(this,this.Le);this.Ke=this.He=this.ke=0;this.N=null;a.experiments.g("html5_new_seeking")&&(this.N=new lM,this.N.subscribe("seekstart",function(){return zM(k)}),this.N.subscribe("seekend",function(){return k.an()}))};
BM=function(a){g.$u()?g.bv(a.Ta):g.Cs(a.Ta)};
JM=function(a,b,c,d){d=void 0===d?!0:d;a.ca.length=0;a.Ja.reset();a.V.reset();a.wa=window.NaN;a.Y=window.NaN;a.Sa=!1;a.oc=!1;a.o&&a.o.Ae();CM(a);DM(a);EM(a);BM(a);a.aa.clear();a.Le.stop();a.T=null;a.U=null;g.Ke(a.g);if(2==a.dd||$D.test(a.C.aa))b.br=!0;var e=LD(b.tb,a.C.o,a.C.jb);e&&(b.adFormat=e);a.C.ca&&(b.autonavState=a.g.autonavState);a.bc=d;a.g=b;a.g.subscribe("dataupdated",a.vG,a);a.g.subscribe("dataloaded",a.Ep,a);a.g.subscribe("dataloaderror",a.Gg,a);a.g.subscribe("onStatusFail",a.uG,a);b.endSeconds&&
b.endSeconds>b.startSeconds&&FM(a,b.endSeconds);GM(a,c);a.Va=!1;HM(a,"newdata");IM(a,new g.OH)};
GM=function(a,b){DM(a);if(!a.g.Yg){var c=new bI(a.g,a.C,b,(0,g.z)(a.getDuration,a),(0,g.z)(a.getCurrentTime,a),(0,g.z)(a.gy,a),(0,g.z)(a.Xa.Ga,a.Xa),(0,g.z)(a.bn,a),(0,g.z)(a.zr,a),(0,g.z)(a.Ul,a),a.Ie,(0,g.z)(a.qy,a),(0,g.z)(function(){this.J.o("qoes")},a));
a.D=new wI(c)}};
DM=function(a){if(a.D){var b=a.D;if(!b.fa()&&b.B){b.D="paused";var c=AI(b);c.Ya=!0;c.send();c=b.o;"PL"==c.A&&(c.A="N");var d=g.gH(c.g);g.gI(c,d,"vps",[c.A]);c.C(d);g.Cs(b.C);b.dispose()}g.Ke(a.D);a.D=null}};
LM=function(a){if(a.g.ac())return!0;g.KM(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
NM=function(a,b){a.Qa=void 0===b?!1:b;if(LM(a)&&!a.Ja.o){a.Ja.start();if(a.D){var c=a.D.o;c.g.g.experiments.g("html5_qoe_unstarted_in_initialization")?g.gH(c.g):g.gI(c,g.gH(c.g),"vps",["N"]);c.g.videoData.hk?sI(c,"prefetch"):(c.o.user_intent=["0"],c.H=!0);c.g.videoData.kg&&(iI(c,"reload",c.g.videoData.On),iI(c,"reloadcount",c.g.videoData.kg.toString()));c.g.videoData.Kh&&sI(c,"monitor");c.g.videoData.va&&sI(c,"live");c.g.videoData.Xe&&sI(c,"rqs");c.g.videoData.pf&&iI(c,"ctrl",c.g.videoData.pf,!0);
c.g.videoData.De&&iI(c,"ytp",c.g.videoData.De,!0);if(c.g.videoData.zu){var d=c.g.videoData.zu.replace(/,/g,".");iI(c,"ytrexp",d,!0)}if(!c.g.g.experiments.g("html5_disable_gpu_reporting")){var e=c.g.videoData;d=c.g.g.experiments.g("enable_white_noise");var f=e.Uf()||e.Ye()||e.Ze()||e.Xd();e=0==e.clientPlaybackNonce.indexOf("gp");(d||f||e)&&(d=MM())&&(c.o.gpu=[d])}c.Y=g.Ds((0,g.z)(c.C,c),1E4)}a.Ep()}};
PM=function(a){a.o&&DH(a.o);NM(a);LM(a)&&!g.T(a.A,128)&&(a.V.o||(a.V.start(),IM(a,RH(RH(a.A,8),1))),OM(a))};
OM=function(a){if(!a.V.g&&a.Ja.g&&!g.T(a.A,128)&&!a.ca.length){if(!a.F.C){var b=a.F;b.C=!0;b.A()}if(!QM(a)){a.B&&(b=a.B,a.Je=!!b.Y&&!!b.ha);a.V.g||(a.V.g=!0);a.g.va&&(RM(a,window.Infinity,!0),SM(a,!0),wM()&&(a.ne=!0));if(a.D&&(b=a.D,b.g.videoData.enableCardio&&b.g.videoData.enableCardioBeforePlayback&&(b.rk("connected"),EI(b)),b.g.videoData.va)){b=b.o;var c=b.g.videoData.oa;b.g.videoData.ec()&&sI(b,"manifestless");c&&VB(c)&&sI(b,"live-segment-"+VB(c).toFixed(1))}a.R("playbackready",a);hG("pbr",a.J.g)||
(a.J.o("pbr"),g.PF("pbr",void 0,"video_to_ad"))}}};
yM=function(a,b){b=void 0===b?!0:b;TM(a);var c=b?new g.OH(14):new g.OH;IM(a,c)};
FM=function(a,b){a.Z&&(a.F.D(a.Z),a.Z=null);a.Z=new g.Fy(1E3*b,0x7ffffffffffff);a.Z.namespace="endcr";ZK(a.F,[a.Z])};
WM=function(a,b,c,d){a.g.Ca=c;a.g.tc=d||c;if(a.D){var e=UM(a);e=new eH(a.g,c,b,e?Wx(e):"");d&&"i"==b&&VM(a,b,d);d=a.D.o;c=g.gH(d.g);g.gI(d,c,"vfs",[e.g.id,e.o,d.ca,"b"==e.reason?"a":e.reason]);d.ca=e.g.id;e=d.g.T();if(0<e.width&&0<e.height){e=[Math.round(e.width),Math.round(e.height)];var f=g.CE();1<f&&e.push(f);g.gI(d,c,"view",e)}g.gI(d,c,"vps",[d.A]);d.C(c);a.C.experiments.g("html5_report_performance_cap")&&"i"==b&&(d=sy())&&a.Fc("perfCap",""+d)}a.ke=0;a.R("internalvideoformatchange",a.g,"m"==b)};
UM=function(a){if(!a.g.Ra)return null;var b=ly(ly(jM(a.xa,a.g),XM(a)),YM(a));return g.nb(a.g.Ra.videoInfos,(0,g.z)(b.B,b))};
VM=function(a,b,c){a.g.tc=c;if(a.D){var d=a.D.o;c=new eH(a.g,c,b,"");var e=g.gH(d.g);c.g.id!=d.N&&(g.gI(d,e,"afs",[c.g.id,d.N,c.reason]),d.N=c.g.id)}"i"!=b&&a.R("internalaudioformatchange",a.g,"m"==b)};
g.KM=function(a,b,c,d){var e,f;Xb(ZM,c)?e=c:c?f=c:e="YTP_ERROR_GENERIC_WITHOUT_LINK";b={errorCode:b,errorDetail:d,message:f||g.Q(e),messageKey:e};IM(a,QH(a.A,128,b));BM(a);EM(a);$M(a)};
aN=function(a,b){a.ca=a.ca.filter(function(a){return b!=a});
a.V.o&&OM(a)};
QM=function(a){var b;(b=!!a.ca.length)||(a=a.F.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
eN=function(a,b){a.o&&bN(a);a.A.isError()||IM(a,SH(a.A,512));a.o=b;a.o.g.loop=a.Dc;a.o.de(a.Ha);cN(a);dN(a);if(a.N){var c=a.N,d=a.o;g.ku(c.C);c.o=d;qM(c)}};
dN=function(a){if(a.C.experiments.g("html5_prewarm_mse")&&MC())try{FH(a.o,a.C.C)}catch(b){}};
bN=function(a){a.K&&(a.K.dispose(),a.K=null);a.B&&(tL(a.B),a.B.H=!0);a.o&&(!a.V.o||a.A.isError()||g.T(a.A,2)||IM(a,RH(a.A,512)),CM(a),g.ku(a.pa),a.o.Ae(),a.o=null,a.N&&(a=a.N,g.ku(a.C),a.o=null,qM(a)))};
kN=function(a){if(!g.T(a.A,128))if(a.oe)a.oe=!1,fN(a);else if(PM(a),g.T(a.A,64)&&IM(a,RH(a.A,8)),a.V.g&&a.o)if(a.g.Ra){if(a.g.va){var b=gN(a),c=g.$G(a.g)&&g.T(a.A,4);if(b||c)!c&&a.C.experiments.g("html5_live_pin_to_tail")?RM(a,a.Lb(),!0):RM(a,window.Infinity,!0);hN(a)?SM(a,!0):a.isPeggedToLive()&&RM(a,window.Infinity,!0)}iN(a)?jN(a):a.o.gc()}else b=a.g.va&&!g.RC()?"html5.unsupportedlive":a.g.Yb?"fmt.unplayable":"fmt.noneavailable",g.KM(a,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","selectableFormats.1")};
mN=function(a){CM(a);EM(a);lN(a)};
nN=function(a){if(a.g.Ra){var b=XM(a);b=b||ky;a=(0,g.Md)(a.g.Ra.videoInfos,(0,g.z)(b.B,b));b=[];for(var c={},d=0;d<a.length;d++){var e=a[d].video;c[e.quality]||(b.push(e),c[e.quality]=!0)}a=b}else a=[];return a};
oN=function(a){return ly(ly(ly(iM(a.xa,a.g),jM(a.xa,a.g)),XM(a)),YM(a))};
XM=function(a){return a.H?a.H.H:GG(a.g)&&a.g.Ra.g&&CB(a.g.oa)?$L:ky};
pN=function(a,b,c){if(!a.fa()&&!g.T(a.A,128)&&(c&&(a.g.si=c),GG(a.g))){"m"==b&&c&&jy(c)&&(b="a");c=oN(a);if(a.g.Ra.g){if(a.B&&"i"!=b){var d=a.B;if(!d.fa()&&d.g){(c=HK(d.F,c,b))&&d.R("videoformatchange",c);dL(d);if(JK(d.F)&&"m"==b&&d.F.N||"b"==b)oK(d.g),oK(d.B);tK(d.g)&&pL(d,d.g,d.B);tL(d)}}}else{d=a.g;a:{var e=a.g.Qg;if(c.g){for(var f=0;f<e.length;f++){var k=e[f].kd,l=g.Rx[k.video.quality];if((!c.A||"auto"!=k.video.quality)&&l<=c.g){c=e[f];break a}}c=e[e.length-1]}else c=e[0]}d.nf=c;WM(a,b,a.g.nf.kd)}a.A.sb()&&
kN(a)}};
g.qN=function(a){XB(a.g.oa,{cpn:a.g.clientPlaybackNonce,c:a.C.A.c,cver:a.C.A.cver});var b=FL(a.C,a.g);a.C.schedule.policy.A=a.g.ec()?.5:0;a.B=new cL(a.C.schedule,b,a.g.oa,a.g.Ra,a.F);a.B.subscribe("initsegment",a.xE,a);a.B.subscribe("videoformatchange",a.GE,a);a.B.subscribe("audioformatchange",a.FE,a);a.B.subscribe("error",a.Gg,a);a.B.subscribe("ctmp",a.Fc,a);a.B.subscribe("seekelementrequired",a.lH,a);a.B.subscribe("seekplayerrequired",(0,g.z)(function(a,b){RM(this,a,!0,void 0,b)},a));
b=g.rb(a.ca,"spacecast")||a.Qa;var c=a.bn();c=c.Sb.isDefault?void 0:c;a.B.initialize(a.g.startSeconds,oN(a),b,c);a.g.probeUrl&&(a.B.aa=a.g.probeUrl);if(a.ca.length||a.Qa)a.B.H=!0;a.N&&(a.N.D=a.B)};
YM=function(a){var b=a.C.experiments.o("html5_background_quality_cap");a=a.C.experiments.o("html5_background_cap_idle_secs");return!b||"auto"!=qy()||g.Wu()/1E3<a?ky:wM()?new gy(0,b,!1):ky};
EM=function(a){a.B&&(a.B.dispose(),a.B=null);a.K&&(a.K.dispose(),a.K=null)};
lN=function(a){if(a.K)return a.K.C;a.B?a.B.seek(a.getCurrentTime()):g.qN(a);try{a.C.experiments.g("html5_prewarm_mse")?a.K=GH(a.o,a.C.C):a.K=EH(a.o,a.C.C)}catch(d){return d.message="window.URL object overwritten by external code",window.setTimeout(function(){throw d;},0),g.KM(a,a.g.Yb?"drm.unavailable":"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1"),null}var b=(0,g.z)(a.NE,a),c=(0,g.z)(function(a){g.KM(this,"fmt.unplayable",void 0,"msi.1;ename."+a.name)},a);
a.C.experiments.g("html5_prewarm_mse")?Bz(a.K).then(b).then(void 0,c):(a.K.B=b,a.K.F=c);return a.K.C};
rN=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
fN=function(a){!a.g.Se&&a.g.kg||a.Cb||(a.Cb=!0,a.R("signatureexpired"))};
sN=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.fmt_unav};
TM=function(a,b){b=void 0===b?!1:b;if(g.T(a.A,64)&&!b)if(g.T(a.A,8))IM(a,TH(a.A));else return;a.o&&(g.T(a.A,128)||(b?IM(a,RH(a.A,256)):IM(a,TH(a.A))),a.o&&a.o.pause())};
tN=function(a){var b=a.C.experiments.g("disable_html5_stopvideo_cancel_requests");TM(a,b);a.B&&(a.B.H=!0,b||iL(a.B))};
$M=function(a,b){b=void 0===b?!1:b;a.o&&(a.o.pause(),CM(a),EM(a),a.g&&(a.g.startSeconds=a.getCurrentTime()),a.Y=window.NaN,a.o.Ae(),dN(a),g.T(a.A,128)||(b?IM(a,TH(a.A)):IM(a,QH(a.A))),a.C.N.remove(a.g.videoId))};
RM=function(a,b,c,d,e){c=void 0===c?!1:c;e=void 0===e?!1:e;if(a.N)a=a.N,c=b||0,c!=a.A&&(nM(a),a.A=c,a.R("seekstart"),a.F=oM(a,c));else if(a.o&&a.V.g){if(a.U&&b&&!(0,window.isFinite)(b)&&a.B){if(a.C.experiments.g("html5_use_adaptive_live_readahead")&&(a.g.isLowLatencyLiveStream||"LOW"==a.g.latencyClass||"ULTRALOW"==a.g.latencyClass)){var f=a.U;if(f.o.length){var k=f.g;1<Math.min.apply(null,f.o)?f.g=Math.max(f.g-1,1):f.C&&(f.g=Math.min(f.g+1,8));if(k=k!=f.g)f.o=[],f.B=0;f=k}else f=!1;f&&a.D&&(f=aJ(a.U),
pI(a.D.o,f))}a.B.wa=Math.max(0,a.U.g-1)}if(b&&!(0,window.isFinite)(b)&&a.g.Se&&a.g.ec()&&a.B){var l=a.B;iL(l);f=Math.max(VJ(l.g.o),VJ(l.B.o));k=l.g;k.D=!0;k.C=-1;iK(k,window.Infinity);k.o.F=f;k=l.B;k.D=!0;k.C=-1;iK(k,window.Infinity);k.o.F=f;k=l.D;for(var m in k.g)Ky(k.g[m].index,window.Infinity);l.A.ka&&(l.V=!0);tL(l);l=f+.1}l||(l=g.Zc(b||0,a.Lb(),uN(a,!1,e)));b=a.g.va&&!g.T(a.A,4)&&hN(a,l);SM(a,b);a.g.startSeconds=l;a.Y=l;b=a.Wa;b.g=l;b.o=!0;c?a.an():(zM(a),d&&(a.ka||(a.ka=new g.O(a.an,d,a)),a.ka.start()),
vN(a,!0));a.Z&&l>a.g.endSeconds&&(a.F.D(a.Z),a.Z=null);l<uN(a,!1)&&IM(a,SH(a.A,2));a.R("seekto",a,l)}else a.g.startSeconds=b||0};
zM=function(a){g.T(a.A,32)||(IM(a,RH(a.A,32)),g.T(a.A,8)&&TM(a,!0),a.R("beginseeking",a))};
wN=function(a){return a.g.va&&a.g.oa?WB(a.g.oa,a.getCurrentTime()):window.NaN};
xN=function(a){if(!a.o)return 0;if(g.$G(a.g))return 1;if(aH(a.g)){if(a.isPeggedToLive())return 1;var b=a.o,c=HH(b);b=(0<vH(c)&&b.getDuration()?c.end(c.length-1):0)-a.Lb();a=uN(a,!0)-a.Lb();return Math.max(0,Math.min(1,b/a))}return KH(a.o)};
yN=function(a,b){var c={};if(void 0===b?0:b){a.D?g.Ja(c,vI(yI(a.D,"playback"))):a.g&&(c.cpn=a.g.clientPlaybackNonce);a.o&&g.Ja(c,LH(a.o));a.B&&g.Ja(c,DL(a.B));if(a.H){var d=a.H,e=d.g;e={systemInfo:{flavor:e.g,keySystem:e.o},sessions:[]};d=g.na(d.A.values);for(var f=d.next();!f.done;f=d.next())e.sessions.push(XL(f.value));c.drm=e}c.state=a.A.o.toString(16);g.T(a.A,128)&&(c.debug_error=a.A.g);QM(a)&&(c.prerolls=a.ca.join(","));a.g.xe&&(c.ismb=a.g.xe);"UNKNOWN"!=a.g.latencyClass&&(c.latency_class=a.g.latencyClass);
a.g.isLowLatencyLiveStream&&(c.lowlatency="1");a.g.va&&(a.g.oa&&VB(a.g.oa)&&(c.segduration=VB(a.g.oa)),a.T&&(e=a.T.D,c.lat=e.g[e.o]||0));c.relative_loudness=a.g.relativeLoudness.toFixed(3);if(e=UM(a))c.optimal_format=e.video.qualityLabel;c.user_qual=qy()}c.debug_videoId=a.g.videoId;return c};
HM=function(a,b){a.R("internalvideodatachange",void 0===b?"dataupdated":b,a,a.g)};
cN=function(a){(0,g.G)("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort resize".split(" "),function(a){this.pa.O(this.o,a,this.Xz,this)},a);
a.C.Af&&(a.pa.O(a.o,"webkitplaybacktargetavailabilitychanged",a.pD,a),a.pa.O(a.o,"webkitcurrentplaybacktargetiswirelesschanged",a.qD,a))};
zN=function(a){var b=a.getCurrentTime(),c=a.g;!hG("pbs",a.J.g)&&UF.measure&&UF.getEntriesByName&&(UF.getEntriesByName("mark_nr")[0]?gG("mark_nr"):gG());c.videoId&&a.J.info("docid",c.videoId);c.eventId&&a.J.info("ei",c.eventId);c.clientPlaybackNonce&&a.J.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.J.info("start",c.startSeconds.toString());a.o&&a.o.g.paused&&a.J.info("paused",1);c.Ca?a.J.info("fmt",Wx(c.Ca)):a.J.info("fmt","-1");c.hk&&a.J.info("yt_pre",a.Je?"2":"1");a.C.ca&&a.J.info("yt_fs",
"1");a.J.info("cmt",b.toFixed(3));if(a.B){b=a.B;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.ha),c.length&&(c=c[0],fL(b,"vri",c.fetchStart),fL(b,"vdns",c.domainLookupEnd),fL(b,"vreq",c.requestStart),fL(b,"fvb",c.responseStart),fL(b,"vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.Y),c.length&&(c=c[0],fL(b,"ari",c.fetchStart),fL(b,"adns",c.domainLookupEnd),fL(b,"areq",c.requestStart),fL(b,"avb",c.responseStart),fL(b,"arc",c.responseEnd)));
b=b.Xa;for(var d in b)a.J.o(d,b[d])}};
vN=function(a,b){b=void 0===b?!1:b;if(a.o&&a.g){var c=a.getCurrentTime();if(gN(a)&&a.A.sb())a.C.experiments.g("html5_live_pin_to_tail")?RM(a,a.Lb(),!0):RM(a,window.Infinity,!0);else{if(a.isPeggedToLive()){if(!hN(a,c)){if(a.A.sb()&&(a.g.Kh||g.$G(a.g))){RM(a,window.Infinity,!0);return}a.g.va&&SM(a,!1)}if(a.C.experiments.g("html5_use_adaptive_live_readahead")&&a.U){var d=a.U,e=a.nq();d.B++;3>d.B||(d.o.push(e),50<d.o.length&&d.o.shift())}}else a.g.va&&hN(a,c)&&SM(a,!0);if(a.B&&(d=a.B,d.o)){d.C!=c&&d.resume();
if(d.U&&!Dz(d.o)){e=d.C<=c&&c<d.C+10;var f=0<=tH(d.o.o.buffered,d.C+qL);e&&f&&(d.U=!1)}d.U||(d.C=c);uL(d)}5<c&&(a.g.startSeconds=c);(d=g.$u())?g.bv(a.Ta):g.Cs(a.Ta);!g.XH(a.A)&&a.o.g.paused||g.T(a.A,128)||(e=(0,g.z)(a.Dy,a),a.Ta=0==(a.o.g.played||wH()).length?d?g.av(e,1,100):g.Es(e,100):d?g.av(e,1,500):g.Es(e,500));a.g.Qd=c;!b&&a.A.sb()&&a.D&&(c=a.D,c.A.update(),c.g.videoData.Nb()&&c.g.videoData.Rd&&!c.T&&jH(c.A)>=c.g.videoData.Rd&&(c.B&&c.g.videoData.Rd&&(d=yI(c,"delayplay"),d.Aa=!0,d.send(),c.T=
!0),DI(c)),d=c.Z,d.A||!d.g.He||d.g.Ja||!d.videoData.lengthSeconds?d=!1:(e=Math.min(.8*d.videoData.lengthSeconds,180),d=jH(d.B)>=e),d&&c.Z.send(),a.C.experiments.g("html5_new_e2e_latency_tracking")&&a.isPeggedToLive()&&(0,g.F)()>a.Ke+6283&&(c=a.D.o,e=c.g.B(),d=g.gH(c.g),jI(c,d,e),e=e.B,(0,window.isNaN)(e)||g.gI(c,d,"e2el",[e.toFixed(3)]),a.Ke=(0,g.F)()));a.R("progresssync",a,b)}}};
IM=function(a,b){if(!g.UH(a.A,b)){var c=new g.ZH(b,a.A);a.A=b;var d=!a.qb.length;a.qb.push(c);if(0<$H(c,1)&&!g.T(c.g,16)&&g.T(a.A,8)&&!g.T(a.A,64)&&a.B){a.B.Z=!0;a.g.Xe&&a.o&&a.Fc("rbinfo","rs."+a.o.g.readyState+";lact."+g.Wu());var e=a.C.experiments.o("html5_nnr_downgrade_count");if(e&&a.o&&5<=IH(a.o)){a.ke++;var f=a.g.Ca.video.o;a.ke==e&&360<f&&(e=a.xa,e.g.Ke=new gy(0,f-1,!1),e.g.experiments.g("html5_report_performance_cap")&&g.uv("yt-player-performance-cap",f-1,2592E3),pN(a,"b"),a.C.experiments.g("html5_report_performance_cap")&&
a.Fc("perfDowngrade",""+f))}}0>$H(c,8)&&(g.Cs(a.ha),a.ha=window.NaN,SM(a,!1));0<$H(c,8)&&!a.g.Se&&(0,window.isNaN)(a.ha)&&(a.ha=g.Es((0,g.z)(a.Lt,a),15E3));0<$H(c,32)&&SM(a,!1);g.T(c.state,2)&&aH(a.g)&&(f=a.getCurrentTime(),a.g.lengthSeconds!=f&&(a.g.lengthSeconds=f,HM(a)),vN(a,!0));0<$H(c,2)&&a.Sn();a.C.experiments.g("html5_suspend_manifest_on_pause")&&a.g.oa&&a.g.va&&(0>$H(c,8)?(f=a.g.oa,f.A&&f.A.stop()):0<$H(c,8)&&a.g.oa.resume());0<$H(c,1)&&(a.Db=g.Es((0,g.z)(a.gH,a),5E3));if(a.D&&(f=a.D,!f.fa())){g.T(c.state,
2)?(f.D="paused",0<$H(c,2)&&f.B&&AI(f).send()):g.T(c.state,8)?(f.D="playing",f.B&&(0,window.isNaN)(f.F)&&xI(f,!1)):f.D="paused";e=f.o;var k=c.state,l=g.gH(e.g),m=rI(c.state);if(m!=e.A){if(!(l<e.B)){if("PL"==e.A)e.K+=l-e.B;else if("B"==e.A&&e.J&&(e.J=!1,e.T+=l-e.B,!e.V&&10<=e.T&&180>=e.K)){e.g.H();if(!e.fa()&&!e.U){var n=lI(e);n.qoealert="1";n=g.Rg(e.g.g.hh,n);mI(e,n)}e.V=!0}"B"!=m||"PL"!=e.A&&"PB"!=e.A||(e.J=!0);e.B=l}"B"==m&&"PL"==e.A||e.g.videoData.Xe?kI(e,l):g.gI(e,l,"cmt",[e.g.o().toFixed(3)]);
g.gI(e,l,"vps",[m]);e.A=m;e.B=l}g.T(k,128)&&oI(e,l,k.g.errorCode,k.g.errorDetail);(g.T(k,2)||g.T(k,128))&&e.C(l);g.T(k,8)&&e.g.videoData.hk&&!e.H&&(e.o.user_intent=[g.gH(e.g).toString()],e.H=!0);nI(e);f.C&&g.T(c.state,128)&&(f.rk("error-100"),g.Cs(f.C))}if(d)try{for(var q=g.na(a.qb),t=q.next();!t.done;t=q.next()){var v=t.value,D=a.F;c=v;if(D.C&&!D.J&&(D.A(),g.T(c.g,16))){c=D;var C=XK(c.g,Math.max(c.B-2E3,0));null!=C&&0x7ffffffffffff>C&&c.F.start()}a.R("statechange",v)}}finally{a.qb.length=0}}};
AN=function(a){g.T(a.A,2)||g.T(a.A,32)||(a.Y=window.NaN)};
SM=function(a,b){a.g.va&&a.Aa!=b&&(a.Aa=b)};
jN=function(a){a.C.qz?g.Es((0,g.z)(function(){this.o.gc()},a),0):a.o.gc()};
iN=function(a){if(!a.o||!a.g.Ra)return!1;if(a.g.Ra.g){var b=lN(a);a.B.resume()}else EM(a),b=a.g.nf.g();var c=a.o.o;return c&&null!=b&&b.g==c.g?!1:(a.J.o("vta"),g.PF("vta",void 0,"video_to_ad"),DH(a.o,b),BN(a),a.K&&cv(4),g.Cs(a.ha),!a.g.Se&&VH(a.A)&&(a.ha=g.Es((0,g.z)(a.Lt,a),15E3)),!0)};
BN=function(a){if(g.PG(a.g)&&a.o){var b=a.g.ae;if(b){if(a.H)if("fairplay"==b.g)CM(a);else return;var c=a.o.la();a.H=new aM(c,b,a.C.experiments,"widevine"==b.g&&!a.g.va&&!a.g.Hm,a.g.drmSessionId);a.H.subscribe("newsession",a.hF,a);a.H.subscribe("licenseerror",a.AE,a);a.H.subscribe("qualitychange",a.BE,a);a.H.subscribe("heartbeatparams",a.Wz,a);a.H.subscribe("keystatuseschange",(0,g.z)(function(a){this.Fc("keystatuses",YL(a))},a));
bM(a.H,a.g.oauthToken)}else g.KM(a,"fmt.unplayable","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1")}};
CM=function(a){a.H&&(a.H.dispose(),a.H=null)};
uN=function(a,b,c){c=void 0===c?!1:c;if(!a.o)return 0;if(!a.g.va)return a.g.zh();if(b&&(a.isPeggedToLive()||g.$G(a.g)))return a.getCurrentTime();if(a.g.Ra&&a.g.Ra.g){b=a.Lb();var d=a.g.zh();a.U&&!c&&(d-=aJ(a.U));return Math.max(d,b)||0}a=a.o.g.seekable||wH();return(1>a.length?window.NaN:a.end(a.length-1))||0};
CN=function(a,b){a.Ha=b;a.o&&a.o.de(b)};
hN=function(a,b){void 0==b&&(b=a.getCurrentTime());var c=b,d=uN(a,!1);if(a.g.oa){var e=a.C.experiments.o("html5_allowable_liveness_drift_chunks")||2;0<e&&!a.Aa&&e--;var f=VB(a.g.oa);e=(0,window.isNaN)(f)?e:e*f}else e=window.NaN;return c>=d-e};
gN=function(a){return a.getCurrentTime()<a.Lb()-15};
DN=function(a,b){a.C.experiments.g("html5_log_rebuffer_reason")&&a.Fc("bufreason","r."+b+";lact."+g.Wu())};
EN=function(a,b){FI.call(this,a,b)};
g.FN=function(a){return a.app.B};
g.GN=function(a){a=g.FN(a).J;return!!a&&a.Ur()};
HN=function(a){var b=g.FN(a);a=g.V(a);var c=b.J;return c&&c.Vr()?!a.experiments.g("mweb_autonav")||c.isAvailable:g.ZG(b.M.getVideoData(),"ypc_module")};
g.IN=function(a,b){3==a.Fa()?a.R("mdxautoplaycancel"):a.R("autonavcancel",b)};
g.V=function(a){return a.app.g};
g.LN=function(a){var b=a.app;a=a.playerType;return 3==JN(b)?g.KN(b.B).F:g.W(b,a).A};
g.MN=function(a){return a.app.H};
NN=function(a){var b=g.KN(g.FN(a));return a.app.Y&&!a.isFullscreen()||3==a.Fa()&&b.hasNext()&&b.Yd()||!!a.ce()};
g.ON=function(a){if(Pt())if(a.isFullscreen())Rt(a.getRootNode());else{a=a.getRootNode();var b=Mt(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],a);b&&b.call(a)}else a.ua("onFullscreenToggled",a.isFullscreen())};
g.PN=function(a){var b={};a=nN(g.W(a.app));a=g.na(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b[c.quality]=c;return b};
g.QN=function(a){return(a=g.W(a.app))?g.my(iM(a.xa,a.g)):"unknown"};
RN=function(a){a=(a=g.W(a.app))?(a=UM(a))?a.video.o:0:0;return a};
g.SN=function(a){return(a=g.FN(a).B)?a.Wr():{}};
g.UN=function(a,b){g.V(a).experiments.g("ui_logging")&&g.TN(a,"controlclicked",{controlClicked:b})};
g.TN=function(a,b,c,d){var e=g.W(a.app);c.event=b;a.isFullscreen()&&(c.fs=1);c.ux=1;e.logEvent(c,d)};
g.VN=function(a){a=g.FN(a).o;return!!a&&a.zi()};
g.WN=function(a){a=g.FN(a).o;return!!a&&a.Lv()};
g.XN=function(a){a=g.W(a.app);return!!a&&a.Ka};
g.ZN=function(a,b,c){YN(a.app,b,c||a.playerType)};
g.aO=function(a,b,c){var d=a.app;a=c||a.playerType;if(c=g.W(d,a))c.F.D.apply(c.F,b),a&&JN(d)!=a||$N(d,"cuerangesremoved",b)};
g.bO=function(a,b){var c=a.app,d=a.playerType,e=g.W(c,d);e&&(e=$K(e.F,b),d&&JN(c)!=d||$N(c,"cuerangesremoved",e))};
cO=function(a,b){var c=a.app,d=a.playerType;d&&JN(c)!=d||$N(c,"cuerangemarkersupdated",b)};
g.dO=function(a,b){var c=g.W(a.app,a.playerType);c&&aN(c,b)};
g.eO=function(a){a=a.getVideoData().Ca;return!!a&&!$x(a)&&"application/x-mpegURL"!=a.mimeType};
g.fO=function(a){a=a.getVideoData();return!!(a.adaptiveFormats||a.hlsFormats||a.jd)};
g.gO=function(a,b,c){a=g.MN(a).element;var d=Hb(a.children,function(a){a=(0,window.parseInt)(a.getAttribute("data-layer"),10);return c-a||1});
0>d&&(d=-(d+1));Jd(a,b,d);b.setAttribute("data-layer",c)};
g.hO=function(a){var b=g.V(a);if(!b.ke)return!1;var c=a.getVideoData();if(!c||3==a.Fa())return!1;b=c.va&&(!b.experiments.g("allow_live_autoplay")||c.isLiveDefaultBroadcast);return!c.ypcPreview&&!b&&!g.rb(c.ad,"ypc")&&!a.ce()};
jO=function(a,b,c,d){if(g.V(a).K){a=a.app.aa;g.rb(a.g,b);ub(a.g,b);var e=String(a.H++);b.setAttribute("data-visual-id",e);iO(a,"onLogClientVeCreated",{id:e,ve_type:d});g.Je(c,(0,g.z)(a.F,a,b))}};
g.kO=function(a,b){g.V(a).K&&a.app.aa.click(b)};
g.lO=function(a,b,c){if(g.V(a).K){a=a.app.aa;var d=b.getAttribute("data-visual-id");g.rb(a.g,b);c?ub(a.o,d):g.xb(a.o,d);c&&!g.rb(a.A,d)&&(iO(a,"onLogVesShown",{ids:[d]}),ub(a.A,d))}};
mO=function(a,b){return g.V(a).K?g.rb(a.app.aa.g,b):!1};
oO=function(){a:{try{var a=window.top.location.href}catch(d){a=2;break a}a=null!=a?a==window.document.location.href?0:1:2}a={dt:nO,flash:dj||"0",frm:a};a.u_tz=-(new Date).getTimezoneOffset();var b=void 0===b?K:b;try{var c=b.history.length}catch(d){c=0}a.u_his=c;a.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(a.u_h=K.screen.height,a.u_w=K.screen.width,a.u_ah=K.screen.availHeight,a.u_aw=K.screen.availWidth,a.u_cd=K.screen.colorDepth);
K.navigator&&K.navigator.plugins&&(a.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(a.u_nmime=K.navigator.mimeTypes.length);return a};
pO=function(a){return a.isTimeout?"NO_BID":"ERR_BID"};
qO=function(){var a=null;Ht().then(function(b){return a=b},function(b){return a=pO(b)});
return a};
rO=function(){var a=ng(1E3,"NO_BID");return $f(g.bg(Xf([Ht(),a]),pO),function(){return a.cancel()})};
sO=function(a){this.g=a;this.o=1};
uO=function(a,b,c){var d=a.g.getVideoData(1),e={AD_BLOCK:a.o++,CA_TYPE:tO?"flash":"image",CPN:d.clientPlaybackNonce,LACT:g.Wu(),VIS:a.g.Lg(),P_H:g.MN(a.g).Ga().height,P_W:g.MN(a.g).Ga().width},f=oO();Object.keys(f).forEach(function(a){e[a.toUpperCase()]=f[a].toString()});
null!=c&&(e.BISCOTTI_ID=c);a=g.fo(b,e).split("?");if(2!=a.length)return Uf(Error("Invalid AdBreakInfo URL"));b=g.na(a);a=b.next().value;b=b.next().value;return ot(a,{format:"RAW",method:"POST",kb:g.Gs(b),timeout:2E3,withCredentials:!0})};
vO=function(a,b,c){g.Fy.call(this,a,b,{id:c,priority:2,visible:!0});this.o=!1};
wO=function(a){this.Y=a||{};this.adFormat=null;this.N=String(Math.floor(1E9*Math.random()))};
xO=function(a,b){return a.Y[b]?a.Y[b]:[]};
yO=function(a){a=a.impressionUrls;var b={};null!=a&&(b.impression=a);wO.call(this,b)};
zO=function(){this.src=null;this.height=this.width=0};
AO=function(){this.o=this.g=null};
CO=function(){return"ytp-id-"+BO++};
g.EO=function(a){g.I.call(this);this.ia={};this.Ja={};this.element=DO(this,a)};
DO=function(a,b,c){c=c||"svg"==b.G;var d=c?window.document.createElementNS("http://www.w3.org/2000/svg",b.G):g.Ed(b.G);var e=b.L;if(e){if(e=FO(a,d,"class",e))GO(a,d,"class",e),a.ia[e]=d}else{var f=b.X;if(f){for(e=0;e<f.length;e++)a.ia[f[e]]=d;GO(a,d,"class",f.join(" "))}}if(f=b.I){var k=0;for(e=0;e<f.length;e++){var l=f[e];if(l)if(g.u(l))l=FO(a,d,"child",l),null!=l&&d.appendChild(g.Fd(l));else if(l.element)d.appendChild(l.element);else{var m=l;l=DO(a,m,c);d.appendChild(l);m.Ba&&(m=CO(),l.id=m,l=window.document.createElementNS("http://www.w3.org/2000/svg",
"use"),l.setAttribute("class","ytp-svg-shadow"),l.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+m),Jd(d,l,k++))}}}if(b=b.P)for(var n in b)c=b[n],null!=c&&GO(a,d,n,g.u(c)?FO(a,d,n,c):c);return d};
FO=function(a,b,c,d){return"{{"==d.substr(0,2)?(a.Ja[d]=[b,c],null):d};
GO=function(a,b,c,d){if("child"==c){g.Hd(b);if(!g.za(d)||g.Da(d)&&g.u(d.G))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f)if(!f.nodeType||1!=f.nodeType&&3!=f.nodeType)if(g.Da(f)&&g.u(f.G))c.push(DO(a,f));else if(f.element)c.push(f.element);else if(g.u(f)&&-1!=f.indexOf("\n")){f=f.split("\n");for(var k=0;k<f.length;k++)0<k&&c.push(g.Ed("BR")),c.push(g.Fd(f[k]))}else c.push(g.Fd(f));else c.push(f)}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==c?b.style.cssText=d?d:"":null===
d?b.removeAttribute(c):b.setAttribute(c,d.toString())};
HO=function(){wO.call(this)};
g.IO=function(a,b){a&&(a.style.display=b)};
JO=function(a){var b=Ot("requestAnimationFrame",window);return g.Es(function(){b?b.call(window,a):a()},0)};
KO=function(a){if(window.document.createRange){var b=window.document.createRange();b.selectNodeContents(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b)}};
g.X=function(a){g.EO.call(this,a);this.g=!0;this.aa=[]};
g.LO=function(a,b){b?a.show():a.hide()};
MO=function(a){if(a){a=a.itct||a.ved;var b=g.y("yt.logging.screen.storeParentElement");a&&b&&b(new g.xu(a))}};
NO=function(a,b){var c=g.P("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=g.Gg(window.location.href);d&&c.push(d);d=g.Gg(a);if(g.rb(c,d)||!d&&g.La(a,"/"))if(g.mt("autoescape_tempdata_url")&&(c=window.document.createElement("a"),g.Wc(c,a),a=c.href),a&&(c=g.Eg(a),c=g.Cg(null,null,null,null,c[5],c[6],c[7]),d=c.indexOf("#"),c=0>d?c:c.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.xv();if(e){var e=(0,window.parseInt)(e,10);(0,window.isFinite)(e)&&0<e&&(c="ST-"+g.eb(c).toString(36),d=b?g.Mg(b):"",lw(c,d,e||5),MO(b))}else e=
"ST-"+g.eb(c).toString(36),c=b?g.Mg(b):"",lw(e,c,5),MO(b)}};
g.OO=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Rg(a,b)+c;a=a instanceof Mc?a:Rc(a);d.href=Nc(a)};
PO=function(a){(window.ytspf||{}).enabled?window.spf.navigate(a):g.OO(a)};
g.QO=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&NO(a,b);if(c)return!1;PO(a);return!0};
g.RO=function(a,b,c){c&&NO(a,c);window.open(a,b||g.eb(a).toString(36))};
TO=function(a,b){(0,g.G)(a,function(a){return SO(a,b)})};
SO=function(a,b){a.loggingUrls&&(0,g.G)(a.loggingUrls,function(a){if(a.baseUrl){a=g.fo(a.baseUrl,b);if("https:"==window.location.protocol){var c=g.Eg(a);a="https"==c[1]?a:g.Cg("https",c[2],c[3],c[4],c[5],c[6],c[7])}g.it(a,void 0,Ho.Jj(a))}});
a.urlEndpoint&&a.urlEndpoint.url&&g.RO(a.urlEndpoint.url)};
VO=function(a,b){g.X.call(this,a);this.B=b;this.A=UO(this)};
WO=function(a,b){b=void 0===b?null:b;null!=b&&TO(b,a.A)};
UO=function(a){var b=a.B;if(b){a=function(a){return{toString:function(){return a()}}};
var c={};c.AD_MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(2))).toString()});
c.MT=a(function(){return Math.round(Math.max(0,1E3*b.getCurrentTime(1))).toString()});
c.P_H=a(function(){return b.Kg().height.toString()});
c.PV_H=c.P_H;c.P_W=a(function(){return b.Kg().width.toString()});
c.PV_W=c.P_W;c.CONN="0";c.WT=a(function(){return(0,g.F)().toString()});
c.LACT=a(function(){return g.Wu().toString()});
c.VIS=a(function(){return b.Lg().toString()});
c.VOL=a(function(){return b.getVolume().toString()});
return c}return{}};
YO=function(a,b,c){c=XO(b,c);var d={G:"div"};c&&(d={G:"div",L:"image-companion",I:[{G:"img",P:{src:c.url,border:"0",style:"cursor:pointer;"}}]});VO.call(this,d,a);this.o=b;if(a=this.ia["image-companion"])g.r(c.width)&&g.r(c.height)&&g.Jh(a,c.width,c.height),this.ba("click",this.C,this),WO(this,b.impressionCommands)};
XO=function(a,b){if(!a.image||!a.image.thumbnail)return null;var c=a.image.thumbnail;return null==c.thumbnails?null:g.nb(c.thumbnails||[],function(a){return a.width==b.width&&a.height==b.height})};
ZO=function(a){wO.call(this);this.g=a;this.C=(0,g.H)((a.image&&a.image.thumbnail?a.image.thumbnail.thumbnails:null)||[],function(a){return new g.hd(a.width,a.height)})};
$O=function(a){wO.call(this);this.g=a};
aP=function(a,b){this.g=a;this.o=b.length;this.adBreakLengthSeconds=bd(b,function(a,b){return a+b},0);
this.adBreakRemainingLengthSeconds=bd(b,function(b,d,e){return b+(e>a?d:0)},0)};
bP=function(a){this.M=a;this.g={}};
cP=function(a,b){return bd(b,function(a,b){if(!b.mimeType||!b.maxBitrate||!b.uri||1E3<b.maxBitrate)return a;b.mimeType in this.g||(this.g[b.mimeType]=this.M.fn(b.mimeType));return this.g[b.mimeType]?a?b.delivery!=a.delivery?"STREAMING"==b.delivery?b:a:a.maxBitrate>b.maxBitrate?a:b:b:a},null,a)};
dP=function(a,b){var c;if(c=a.pings){var d={};d.impression=c.impressionPings||[];d.error=c.errorPings||[];d.mute=c.mutePings||[];d.unmute=c.unmutePings||[];d.pause=c.pausePings||[];d.rewind=c.rewindPings||[];d.resume=c.resumePings||[];d.skip=c.skipPings||[];d.close=c.closePings||[];d.progress=c.progressPings||[];d.clickthrough=c.clickthroughPings||[];d.fullscreen=c.fullscreenPings||[];d.active_view_viewable=c.activeViewViewablePings||[];d.active_view_measurable=c.activeViewMeasurablePings||[];d.active_view_fully_viewable_audible_half_duration=
c.activeViewFullyViewableAudibleHalfDurationPings||[];d.end_fullscreen=c.endFullscreenPings||[];d.channel_clickthrough=c.channelClickthroughPings||[];d.abandon=c.abandonPings||[];d.start=c.startPings||[];d.first_quartile=c.firstQuartilePings||[];d.midpoint=c.secondQuartilePings||[];d.third_quartile=c.thirdQuartilePings||[];d.complete=c.completePings||[];c=d}else c={};wO.call(this,c);this.J=new aP(0,[]);this.K=this.D=this.B=null;this.F=!1;this.aa=b;this.H=[];this.g={};this.o=a;this.U=this.C=null;this.A=
0;this.T=this.V=null;0<this.o.skipOffsetMilliseconds&&(this.C=this.o.skipOffsetMilliseconds);this.g=g.Gs(this.o.playerVars||"");null!=this.o.external?(this.H=this.o.external.mediaFiles||[],null!=this.o.external.durationMilliseconds&&(this.A=this.o.external.durationMilliseconds/1E3,this.g.length_seconds=this.A.toString()),(c=cP(this.aa,this.H))?(d=c.mimeType,this.g.url_encoded_third_party_media="url="+(0,window.encodeURIComponent)(c.uri)+"&type="+(0,window.encodeURIComponent)(d)):this.T=Error("Nonplayable third party ad media file.")):
(this.V=this.g.video_id,this.adFormat=this.g.adformat,this.B=this.g.ucid||null,this.F=PD(this.F,this.g.is_listed),this.U=this.g.title||null,this.A=RD(this.A,this.g.length_seconds));this.D=this.o.clickthroughEndpoint||null;c=g.Q("YTP_VISIT_ADVERTISERS_SITE");(d=this.D)&&c&&(this.K={runs:[{text:c,navigationEndpoint:d}]})};
eP=function(a){return null!=a.C?a.C:0};
fP=function(a,b){VO.call(this,{G:"iframe",P:{marginwidth:0,marginheight:0,hspace:0,vspace:0,frameborder:0,scrolling:"no",src:b.iframeUrl}},a);this.element.width=g.r(b.iframeWidth)?b.iframeWidth:300;this.element.height=g.r(b.iframeHeight)?b.iframeHeight:250;this.o=b;WO(this,b.impressionCommands);this.C=new g.ao(this);g.J(this,this.C);this.C.ba(window,"message",this.D)};
gP=function(a){wO.call(this);this.g=a};
hP=function(a,b){var c=a.instreamVideoAdRenderer,d=a.clientForecastingAdRenderer,e=a.invideoOverlayAdRenderer,f=a.videowallIframeCompanionAdRenderer,k=a.imageCompanionAdRenderer;return null!=c&&c.playerVars?new dP(c,b):null!=d?new yO(d):null!=e?new $O(e):null!=f?new gP(f):null!=k?new ZO(k):null};
jP=function(a,b,c){this.id=b;this.C=a.config&&a.config.adPlacementConfig&&a.config.adPlacementConfig.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.g=[];this.F=[];this.o=[];this.A=[];this.H=[];this.N=c;this.D=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer.getAdBreakUrl||"";this.K=a.placementStartPings||[];this.J=a.placementEndPings||[];b=new g.Ei(0,0);"AD_PLACEMENT_KIND_START"==this.C?(b.start=-0x8000000000000,b.end=0):"AD_PLACEMENT_KIND_END"==this.C?(b.start=0x7ffffffffffff,
b.end=0x8000000000000):a.config&&a.config.adPlacementConfig&&a.config.adPlacementConfig.adTimeOffset&&(c=a.config.adPlacementConfig.adTimeOffset,b.start=(0,window.parseInt)(c.offsetStartMilliseconds,10)||0,b.end=(0,window.parseInt)(c.offsetEndMilliseconds,10)||0,0>b.end&&(b.end=0x7ffffffffffff));this.fg=b.start;this.B=b.end;new vO(this.fg,this.B,this.id.toString());iP(this,a)};
kP=function(a,b,c){function d(a,b){return a.fg-b.fg}
c=void 0===c?0:c;var e=[];null!=a&&(e=(0,g.H)(a,function(a,d){var e=new jP(a,c+d,b);return g.P("SERVED_VIA_SPF_HISTORY")&&Ma(g.$a(e.D))?null:e}));
e=(0,g.Md)(e,function(a){return null!=a});
0<e.length&&g.Ib(e,d);return e};
iP=function(a,b){var c=0,d;(c=b.renderer)&&c.multipleInstreamVideoAdRenderer&&c.multipleInstreamVideoAdRenderer.renderers?d=c.multipleInstreamVideoAdRenderer.renderers:d=c?[c]:[];c=d.length;a.g=[];a.F=[];a.o=[];a.A=[];for(var e=0;e<c;e++){var f=hP(d[e],a.N);null!=f&&(f instanceof yO?a.F.push(f):f instanceof dP?f.T?a.H.push(f):a.g.push(f):f instanceof $O?a.o.push(f):f instanceof HO&&a.A.push(f))}0<a.o.length&&0<a.g.length&&(g.ws(Error("Linear and overlay ads found in ad break")),a.o=[]);var k=(0,g.H)(a.g,
function(a){return a.A});
(0,g.G)(a.g,function(a,b){var c=new aP(b,k);a.J=c})};
lP=function(){g.R.call(this);this.g=new window.Map};
nP=function(){null==mP&&(mP=new lP,Wm.getInstance().J="b");return mP};
oP=function(a,b){var c=[];a.g.forEach(g.A(function(a,b,f,k){f==b&&c.push(k)},c,b));
(0,g.G)(c,a.g["delete"],a.g)};
pP=function(a){switch(a){case "fully_viewable_audible_half_duration_impression":return"f";case "measurable_impression":return"b";case "overlay_unmeasurable_impression":return"g";case "overlay_unviewable_impression":return"h";case "overlay_viewable_end_of_session_impression":return"i";case "overlay_viewable_immediate_impression":return"j";case "viewable_impression":return"n";default:return null}};
qP=function(a){a=a.Bh();return null!=a&&2==a.getPlayerType()};
rP=function(a){a=a.g||{};a.autoplay="1";return a};
sP=function(a){a=g.V(a);return rE(a)&&!g.hE(a)&&"desktop-polymer"==a.g};
tP=function(a){g.I.call(this);this.M=a};
uP=function(a){switch(a){case "abandon":return"abandon";case "active_view_fully_viewable_audible_half_duration":return"fully_viewable_audible_half_duration_impression";case "active_view_measurable":return"measurable_impression";case "active_view_viewable":return"viewable_impression";case "complete":return"complete";case "end_fullscreen":return"exitfullscreen";case "first_quartile":return"firstquartile";case "fullscreen":return"fullscreen";case "impression":return"impression";case "midpoint":return"midpoint";
case "mute":return"mute";case "pause":return"pause";case "progress":return"progress";case "resume":return"resume";case "skip":return"skip";case "start":return"start";case "third_quartile":return"thirdquartile";case "unmute":return"unmute"}return null};
yP=function(a){var b={};vP(a,b);wP(b);b.LACT=xP(function(){return g.Wu().toString()});
b.VIS=xP(function(){return a.Lg().toString()});
b.SDKV="h.3.0";b.VOL=xP(function(){return a.getVolume().toString()});
b.VED="";return b};
zP=function(a,b,c){a.YT_ERROR_CODE=xP(vf(b.toString()));a.ERROR_MSG=xP(vf(c))};
xP=function(a){return{toString:function(){return a()}}};
BP=function(a){var b={};(0,g.G)(AP,function(c){var d=hc(a,c);null!=d&&(b[c]=d.toString())});
return b};
vP=function(a,b){b.AD_CPN=xP(function(){return CP(a,2)});
b.CPN=xP(function(){return CP(a,1)});
b.AD_MT=xP(function(){return DP(a,2)});
b.MT=xP(function(){return DP(a,1)});
b.P_H=xP(function(){return g.MN(a).Ga().height.toString()});
b.P_W=xP(function(){return g.MN(a).Ga().width.toString()});
b.PV_H=xP(function(){return g.EP(g.MN(a)).height.toString()});
b.PV_W=xP(function(){return g.EP(g.MN(a)).width.toString()})};
CP=function(a,b){var c=a.getVideoData(b);if(c)return c.clientPlaybackNonce;g.ws(Error("Video data is null."),"WARNING");return null};
DP=function(a,b){var c=1E3*a.getCurrentTime(b);return Math.round(Math.max(0,c)).toString()};
wP=function(a){a.CONN=xP(vf("0"));a.WT=xP(function(){return Date.now().toString()})};
FP=function(a,b,c,d){g.I.call(this);this.o=a;this.F=b;g.J(this,this.F);this.g=c;this.H=d;this.C=g.Ab(xO(this.o,"progress"));g.Ib(this.C,function(a,b){return a.offsetMilliseconds-b.offsetMilliseconds});
this.B=0;this.A={};this.D={ww:.25,Rw:.5,Yw:.75}};
HP=function(a){GP(a,"impression");GP(a,"start")};
KP=function(a,b,c){for(c=void 0===c?!1:c;a.B<a.C.length;){var d=IP(a,"progress"),e=a.C[a.B];if(e.offsetMilliseconds<=1E3*b||c)(e=e.baseUrl)&&JP(a,e,d),a.B++;else break}};
LP=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.D.ww||d)&&GP(a,"first_quartile");(b>=c*a.D.Rw||d)&&GP(a,"midpoint");(b>=c*a.D.Yw||d)&&GP(a,"third_quartile")};
MP=function(a,b){var c=IP(a,b);(0,g.G)(xO(a.o,b),function(a){(a=a.baseUrl)&&JP(this,a,c)},a);
a.A[b]=!0};
GP=function(a,b){a.A.hasOwnProperty(b)||MP(a,b)};
JP=function(a,b,c){if(a.H){a=g.ic(a.g);if(c){var d=c.dvViewability;null!=d&&(a.DV_VIEWABILITY=d);d=c.integralAdsViewability;null!=d&&(a.IAS_VIEWABILITY=d);d=c.googleViewability;null!=d&&(a.GOOGLE_VIEWABILITY=d);d=c.moatInit;null!=d&&(a.MOAT_INIT=d);d=c.moatViewability;null!=d&&(a.MOAT_VIEWABILITY=d);c=c.viewability;null!=c&&(a.VIEWABILITY=c)}c=a}else c=a.g;b=g.fo(b,c);"https:"==window.location.protocol&&(c=g.Eg(b),b="https"==c[1]?b:g.Cg("https",c[2],c[3],c[4],c[5],c[6],c[7]));g.it(b,void 0,Ho.Jj(b))};
IP=function(a,b){var c=a.F;var d=a.o.N;var e=uP(b);if(null!=e){var f;(f=c.M)&&f.Bh?(f=f.Bh(),f=null!=f&&2==f.getPlayerType()?f.o?f.o.la():null:null):f=null;c={opt_adElement:f,opt_fullscreen:c.M.isFullscreen()};d=rn(e,d,c)}else d={};return g.ic(d||{})};
NP=function(a,b){b=void 0===b?{}:b;this.componentType=a;this.macros=b};
OP=function(a,b,c){this.id=void 0===c?null:c;this.content=a;this.actionType=b};
PP=function(a,b,c){g.R.call(this);this.g=a;a=g.V(this.g).experiments.g("enable_bulleit_lidar_integration");this.o=new FP(b,new tP(this.g),c,a);g.J(this,this.o);this.A=nP();this.A.g.set(b.N,this);this.A.subscribe("b",this.qu,this);this.A.subscribe("f",this.ru,this);this.A.subscribe("g",this.tu,this);this.A.subscribe("h",this.uu,this);this.A.subscribe("i",this.vu,this);this.A.subscribe("j",this.wu,this);this.A.subscribe("n",this.xu,this);this.C=[];this.macros=c;this.F=!1};
RP=function(a,b){Bb(a.C,b);QP(a,b,1)};
QP=function(a,b,c){0!=b.length&&(b=(0,g.H)(b,function(a){return new OP(a,c)}),a.R("onAdUxUpdate",b))};
SP=function(a,b,c){PP.call(this,a,b,c)};
TP=function(a,b){NP.call(this,"invideo-overlay",b);this.renderer=a};
UP=function(a,b,c){PP.call(this,a,b,c);this.B=b};
VP=function(a){return null==a||"none"===g.wh(a,"display")};
WP=function(){NP.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adVideoId=null};
XP=function(a){a=void 0===a?null:a;NP.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
YP=function(a){NP.call(this,"ad-preview");this.adPreviewRenderer=a};
ZP=function(a,b){NP.call(this,"skip-button");this.skipAdRenderer=a;this.g=b};
$P=function(a){a=void 0===a?null:a;NP.call(this,"ad-title");this.videoTitle=a};
aQ=function(a){a=void 0===a?null:a;NP.call(this,"advertiser-name");this.channelName=a};
bQ=function(a){NP.call(this,"visit-advertiser");this.visitAdvertiserLabel=a};
cQ=function(a,b,c){PP.call(this,a,b,c);this.B=b;this.D=new g.O(this.vy,15E3,this);g.J(this,this.D)};
dQ=function(a,b){var c=g.Rg("https://www.googleapis.com/youtube/v3/channels",{id:b,part:"snippet",fields:"items/snippet/title,items/snippet/thumbnails/default/url",key:"AIzaSyA-dlBUjVQeuc4a6ZN4RkNUYDFddrVLxrA"}),d={timeout:2E3,method:"GET"};d.rb=(0,g.z)(a.Fx,a);g.Us(c,d)};
gQ=function(a){a.B.isListed()&&a.B.B&&dQ(a,a.B.B);var b=new WP;b.adBadgeText=g.Q("YTP_AD_BADGE");var c=a.B.J;1<c.o&&(b.adPodPositionInfoString=g.Q("YTP_AD_POD_POSITION",{AD_INDEX:c.g+1,ADS_COUNT:c.o}));b.adBreakLengthSeconds=c.adBreakLengthSeconds;b.adBreakRemainingLengthSeconds=c.adBreakRemainingLengthSeconds;b.adPodPosition=c.g+1;b.adPodLength=c.o;if(c=a.B.V)b.adVideoId=c;b=[b];(c=a.B.K)&&b.push(new bQ(c));c=1E3*a.B.A;c=0<c&&7050>=c;a.B.isSkippable()&&!c?(c=eQ(a),b.push(new ZP(c,eP(a.B)))):(c=fQ(a,
c),b.push(new YP(c)));RP(a,b);b=g.V(a.g);g.hE(b)||iE(b)||bq({measure:function(a){var b=g.qd("video-ads");VP(b)?b=!0:(b=g.Nd(b),b=0===b.length?!0:(0,g.ww)(b,VP));a.NH=b},
eD:function(b){b.NH&&a.Ih("html5.unsupportedads")}})()};
fQ=function(a,b){var c=hQ(a).adPreviewRenderer;null!=c||(c=iQ(a,!1,b));return c};
eQ=function(a){var b=hQ(a).skipAdRenderer;if(null==b){b={preskipRenderer:{}};b.preskipRenderer.adPreviewRenderer=iQ(a,!0,!1);b.skippableRenderer={};a=b.skippableRenderer;var c={message:{}};c.message.text=g.Q("YTP_SKIP_AD");a.skipButtonRenderer=c}return b};
hQ=function(a){a=a.B.o;a=a.playerOverlay&&a.playerOverlay.instreamAdPlayerOverlayRenderer&&a.playerOverlay.instreamAdPlayerOverlayRenderer.skipOrPreviewRenderer&&a.playerOverlay.instreamAdPlayerOverlayRenderer.skipOrPreviewRenderer;null!=a||(a={});return a};
jQ=function(a,b){a.D.stop();QP(a,a.C,3);a.C=[];a.R(b)};
iQ=function(a,b,c){var d=a.g.getVideoData(1),e={};if(b||c){b={};var f={};c=c?g.Q("YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"}):g.Q("YTP_CAN_SKIP_AD_SOON",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});f.text=c;f.isTemplated=!0;b.g=5;b.templatedAdText=f;e.templatedCountdown=b}else c={},b=g.Q("YTP_AD_PREVIEW_NONSKIPPABLE",{NEW_LINE:"\n"}),c.text=b,c.isTemplated=!1,e.staticPreview=c;e.thumbnail={};c=e.thumbnail;b={};b.url=zE(g.V(a.g),d.videoId,"mqdefault.jpg");
b.width=320;b.height=180;c.thumbnail={thumbnails:[b]};return e};
kQ=function(a,b,c){c=g.ic(c);c.FINAL=xP(vf("1"));c.SLOT_POS=xP(vf("0"));return b instanceof dP?(c.SLOT_POS=xP(vf(b.J.g.toString())),new cQ(a,b,c)):b instanceof $O?new UP(a,b,c):b instanceof yO?new SP(a,b,c):null};
lQ=function(){this.N=g.P("INNERTUBE_CLIENT_NAME",void 0);this.T=g.P("INNERTUBE_CLIENT_VERSION",void 0);this.H="AD_PLACEMENT_KIND_UNKNOWN";this.B=this.F=this.A=this.C=null;this.g="unknown_type";this.J=!0;this.K=this.o=this.D=!1};
mQ=function(a){a.C=null;a.A=null;a.F=null;a.B=null;a.H="AD_PLACEMENT_KIND_UNKNOWN";a.g="unknown_type";a.D=!1;a.o=!1};
oQ=function(a,b,c,d,e){g.R.call(this);this.A=a;this.M=b;this.o=d;a=g.ic(e);a.MIDROLL_POS="AD_PLACEMENT_KIND_MILLISECONDS"==d.C?xP(vf(Math.round(d.fg/1E3).toString())):xP(vf("0"));this.H=a;this.F=d.g.length;this.D=-1;this.C=this.g=null;this.B=c;c=new vO(this.o.fg,this.o.B,String(this.o.id));nQ(this.A,c,this)};
pQ=function(a,b){b=(0,g.Md)(b,function(a){return a instanceof dP&&!(0<a.H.length)});
(0,g.G)(b,function(a){a=rP(a);this.M.jn(a,2)},a)};
sQ=function(a){a.D++;a.D<a.F&&0<a.F?qQ(a,a.o.g[a.D]):rQ(a);var b=a.B,c=a.M,d=a.o.C,e=a.D;a=a.F;mQ(b);var f=c.getVideoData(1);c=c.getVideoData(2);f&&(b.C=f.clientPlaybackNonce,b.F=f.videoId);c&&(b.A=c.clientPlaybackNonce,b.B=c.videoId);b.H=d;0>=a?mQ(b):(b.J?b.g="video_to_ad":e<a?b.g="ad_to_ad":e==a&&(b.g="ad_to_video"),b.K=e+1==a,b.D=!0,b.D&&(g.QF("c",b.N,b.g),g.QF("cver",b.T,b.g),g.QF("yt_pt","html5",b.g),g.QF("yt_pre","2",b.g),g.QF("yt_abt",b.H,b.g),b.C&&g.QF("cpn",b.C,b.g),b.F&&g.QF("docid",b.F,
b.g),b.A&&g.QF("ad_cpn",b.A,b.g),b.B&&g.QF("ad_docid",b.B,b.g)))};
qQ=function(a,b){a.g=kQ(a.M,b,a.H);g.J(a,a.g);var c=a.g;c.subscribe("a",g.A(a.Wj,!0),a);c.subscribe("b",a.mt,a);c.subscribe("e",a.Wj,a);c.subscribe("f",a.ot,a);c.subscribe("g",a.qt,a);c.subscribe("h",a.ut,a);c.subscribe("i",a.vt,a);c.subscribe("j",a.wt,a);c.subscribe("k",a.bi,a);c.subscribe("l",a.bi,a);c.subscribe("onAdUxUpdate",a.Ss,a);c.subscribe("n",a.xt,a);a.g.Pg()};
rQ=function(a,b){a.C=null;(void 0===b?0:b)||(0,g.G)(a.o.J,a.Ts,a);tQ(a.A)};
uQ=function(a){if("object"!=xa(a))return null;var b=a.playerAds;if(!g.r(b))return a;if(!g.za(b)||!b.length)return null;for(var c=0;c<b.length;c++){if(g.r(b[c].adBreakRenderer))return null;var d=b[c].adPlacementRenderer;if(g.r(d)&&"object"!=xa(d))return null}return a};
vQ=function(a){if("object"!=xa(a))return null;var b=a.adPlacements;if(!g.r(b))return a;if(!g.za(b)||!b.length)return null;for(var c=0;c<b.length;c++){if(g.r(b[c].adBreakRenderer))return null;var d=b[c].adPlacementRenderer;if(g.r(d)&&"object"!=xa(d))return null}return a};
wQ=function(a,b,c){g.R.call(this);this.g=a;this.B=b;this.o=c;this.A=null;a=new vO(this.o.fg,this.o.B,"fetch "+String(this.o.id));nQ(this.g,a,this)};
xQ=function(a){var b=null,c={isEmpty:!0,ar:!1,ql:[]};try{b=g.tg(a.response)}catch(d){return c}a=uQ(b);if(!a)return c;if(a&&a.adThrottled)return c.ar=!0,c;a=a.playerAds;if(!a||!a.length)return c;a=a.filter(ya).map(function(a){return a.adPlacementRenderer});
if(g.sb(a))return c;c.ql=a;c.isEmpty=!1;return c};
yQ=function(a){this.o=a;this.g=null};
CQ=function(a){return zQ(a).then(function(){return new g.Pf(function(a,c){var b=AQ();(b=b?BQ(b):null)&&"adSizes"in b[0]?a((0,g.H)(b[0].adSizes,function(a){return new g.hd(a.adWidth,a.adHeight)})):c(Error("No slots registered with GPT services"))})})};
DQ=function(a,b,c){var d=ng(5E3).then(function(){throw Error("Timed out while waiting for GPT set companion");}),e=new g.Pf(function(d,e){var f=AQ();
if(f){var k=BQ(f);if(k&&0!=k.length){var n={};n.slotId=k[0].slotId;n.adContent="<div></div>";n.adWidth=b;n.adHeight=c;n.friendlyIframeRendering=!1;n.onAdContentSet=function(b){var c=g.r(b.firstElementChild)?b.firstElementChild:g.Od(b.firstChild);c||(c=g.Ed("div"),b.appendChild(c));a&&c.appendChild(a);d()};
(f=f.googleSetCompanionAdContents)?f([n]):e(Error("Missing googleSetCompanionAdContents API"))}else e(Error("No slots registered with GPT services"))}else e(Error("Failed to find GPT services"))});
return Xf([e,d])};
zQ=function(a){if(null==a.g){var b=a.o/200;a.g=new g.Pf(function(a,d){function c(b){EQ()?a():0>=b?d(Error("Timed out while waiting for GPT services")):g.bg(ng(200).then(function(){c(b-1)}),d)}
c(b)})}return a.g};
EQ=function(){var a=AQ();if(!a)return!1;a=BQ(a);return g.za(a)&&0!=a.length?null!=g.nd("google_companion_ad_div"):!1};
AQ=function(){var a=zd();return g.y("googletag.cmd",a)?a:null};
BQ=function(a){a=g.r(a.googleGetCompanionAdSlots)?xs(a.googleGetCompanionAdSlots)():void 0;return g.r(a)&&0<a.length?a:null};
FQ=function(a,b){this.M=a;this.g=b};
GQ=function(a){return a.g?CQ(a.g):Uf("GPT is not enalbed")};
HQ=function(a,b,c,d,e){PP.call(this,b,d.A[0],e);this.J=c;this.D=d;this.B=d.A[0];this.H=a;a=new vO(this.D.fg,this.D.B,this.D.id.toString());a.visible=!1;nQ(this.H,a,this)};
IQ=function(a,b){for(var c={},d=0;d<b.length;c={wk:c.wk},d++){c.wk=b[d];var e=g.nb(a,function(a){return function(b){return b.width==a.wk.width&&b.height==a.wk.height}}(c));
if(null!=e)return e}return null};
KQ=function(a){JQ=a&&a.data};
MQ=function(a){LQ=a&&a.data};
NQ=function(){JQ=null};
OQ=function(a){a.removeEventListener("updatekevlarcompanion",KQ);a.removeEventListener("onPlaShelfInfoCardsReady",MQ);window.removeEventListener("yt-navigate-start",NQ);JQ=null};
PQ=function(a,b){g.R.call(this);var c=this;this.M=a;this.K=b;this.N=new FQ(a,sP(a)?null:new yQ(3E4));this.F=null;this.J=yf(function(){c.M.fa()||g.dO(c.M,"ad")});
this.g=null;this.o={};this.A=[];this.H=[];this.C=null;this.T=new bP(a);this.D=new g.iu(this);g.J(this,this.D);this.B=new g.iu(this);g.J(this,this.B)};
QQ=function(a){if(!a||!a.adPlacements)return null;a=(0,g.H)(a.adPlacements,function(a){return a.adPlacementRenderer});
return(0,g.Md)(a,function(a){return null!=a})};
SQ=function(a){var b=RQ(a);g.sb(b)?a.J():g.Kf(function(){a.fa()||(0,g.G)(b,a.Xj,a)})};
RQ=function(a){var b=[],c=[];a.A.forEach(function(a){-0x8000000000000==a.start?b.push(a):c.push(a)});
a.A=c;return b};
TQ=function(a){var b=(0,g.El)(a.A,function(a){return-0x8000000000000==a.start}),c=g.V(a.M);
b||g.hE(c)||iE(c)||a.A.forEach(function(a){a.o=!1})};
UQ=function(a,b){var c=kP(b,a.T,a.H.length);a.H=a.H.concat(c);if(0!=c.length)for(var d=yP(a.M),e=c.length-1;0<=e;e--){var f=a,k=a.M,l=a.K,m=c[e];0<m.A.length?new HQ(f,k,a.N,m,d):""==m.D?new oQ(f,k,new lQ,m,d):new wQ(f,l,m)}};
WQ=function(a,b){b instanceof oQ?(a.g&&tQ(a),a.g=b,0<b.o.g.length&&(a.B.O(a.M,"presentingplayerstatechange",a.UC),a.B.O(a.M,"internalAbandon",a.QC),a.B.O(a.M,"aduxclicked",a.mD),a.B.O(a.M,"progresssync",a.VC),a.B.O(a.M,"onVolumeChange",a.WC),a.B.O(a.M,"fullscreentoggled",a.TC),g.np(a.M.getRootNode(),["ad-showing","ad-interrupting"]),VQ(a.M.app,2))):b instanceof HQ&&(g.Ke(a.F),a.F=b)};
tQ=function(a){var b=!!a.g&&!!a.g.F&&qP(a.M);a.g&&XQ(a,a.g);a.g=null;if(b){g.ku(a.B);b=a.M;if(2==JN(b.app)){b=b.app;var c=g.W(b,2);c&&(c!=b.A?YQ(b,b.A):ZQ(b))}g.op(a.M.getRootNode(),["ad-showing","ad-interrupting"])}a.J()};
nQ=function(a,b,c){if(b instanceof vO){var d=b.getId();$Q(a,b);d in a.o?g.ws(Error("Cue range IDs must be unique. ID "+d+" already seen.")):(a.A.push(b),a.o[d]=c,-0x8000000000000!=b.start&&(c=1E3*a.M.getCurrentTime()||0,!b.o&&c>=b.start&&c<=b.end?g.Kf(function(){a.Xj(b)}):aR(a,[b])))}else g.ws(Error("Should use AdCueRange instead of CueRange"))};
$Q=function(a,b){if(-0x8000000000000!=b.start){var c=1E3*a.M.getCurrentTime()||0;g.T(g.LN(a.M),64)&&c>=b.start&&c<=b.end&&(b.o=!0)}};
aR=function(a,b){for(var c=g.na(b),d=c.next();!d.done;d=c.next())d.value.namespace="ad";g.ZN(a.M,b,void 0)};
bR=function(a,b){g.aO(a.M,b,void 0);(0,g.G)(b,function(a){g.xb(this.A,a);delete this.o[a.getId()]},a)};
XQ=function(a,b){for(var c in a.o)if(a.o[c]==b){delete a.o[c];break}g.Ke(b)};
g.cR=function(a){g.R.call(this);this.g=a;this.loaded=!1};
dR=function(a){g.cR.call(this,a);this.A="";this.C=new g.iu(this);g.J(this,this.C);this.o=!1};
g.eR=function(a){g.X.call(this,a);this.Y=new g.R;g.J(this,this.Y)};
g.fR=function(a,b,c,d){g.I.call(this);this.o=a;c||a.hide();this.B=null==d?b:d;this.g=null;this.A=new g.O(this.Ek,0,this);g.J(this,this.A)};
gR=function(a,b){var c=a.o.element;b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")};
hR=function(a,b,c){g.eR.call(this,b);this.o=a;this.Z=c;this.H=null};
iR=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.ws(Error("Got null or undefined adText object"),"WARNING"),"";var c=g.$a(a.text);if(!a.isTemplated)return c;if(null==b)return g.ws(Error("Missing required parameters for a templated message"),"WARNING"),c;g.Tb(b,function(a,b){c=c.replace("{"+b+"}",a)});
return c};
lR=function(a,b,c){var d=a.o;g.V(d).K&&g.jR(d.app.aa,b,a);a=a.o;g.V(a).K&&g.kR(a.app.aa,b,c)};
mR=function(a,b,c){mO(a.o,b)&&g.lO(a.o,b,c)};
nR=function(a){hR.call(this,a,{G:"div",L:"ytp-ad-preview-slot"},["ad-preview"]);this.J=null;this.K=-1;this.A=new g.eR({G:"div",L:"ytp-ad-preview-container",I:[{G:"div",L:"ytp-ad-preview-text",I:["{{previewText}}"]},{G:"div",L:"ytp-ad-preview-image",I:[{G:"img",P:{src:"{{previewImage}}"}}]}]});g.J(this,this.A);this.A.na(this.element);this.F=new g.fR(this.A,500,!1,100);g.J(this,this.F);this.D=0;this.C=this.B=null;this.O(this.o,"presentingplayerstatechange",this.XC);this.hide()};
oR=function(a){a.C&&(a.Ma(a.C),a.C=null)};
g.pR=function(a){var b=Math.abs(Math.floor(a)),c=Math.floor(b/86400),d=Math.floor(b%86400/3600),e=Math.floor(b%3600/60);b=Math.floor(b%60);var f="";0<c&&(f+=c+":",10>d&&(f+="0"));if(0<c||0<d)f+=d+":",10>e&&(f+="0");f+=e+":";10>b&&(f+="0");f+=b;return 0<=a?f:"-"+f};
g.qR=function(a){return(!g.ta(a.button)||0==a.button)&&!a.shiftKey&&!a.altKey&&!a.metaKey&&!a.ctrlKey};
rR=function(a){hR.call(this,a,{G:"div",L:"ytp-ad-attribution-bar"},["ad-attribution-bar","visit-advertiser"]);this.C=this.D=null;this.A=new g.eR({G:"div",L:"ytp-ad-attribution",I:[{G:"div",L:"ytp-ad-attribution-text"},{G:"div",L:"ytp-ad-attribution-icon",I:[{G:"svg",P:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},I:[{G:"path",P:{d:"M0 0h48v48H0z",fill:"none"}},{G:"path",P:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}]}]});
g.J(this,this.A);this.A.ba("click",this.lD,this);this.A.hide();this.A.na(this.ia["ytp-ad-attribution-bar"]);this.B=new g.eR({G:"div",L:"ytp-ad-visit-advertiser",I:[{G:"div",L:"ytp-ad-visit-advertiser-text",I:["{{visitAdvertiserText}}"]},{G:"div",L:"ytp-ad-visit-advertiser-icon",I:[{G:"svg",P:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},I:[{G:"path",P:{d:"M0 0h48v48H0z",fill:"none"}},{G:"path",P:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]}]}]});
g.J(this,this.B);this.B.ba("click",this.zG,this);this.B.hide();this.B.na(this.ia["ytp-ad-attribution-bar"]);this.F=this.A.ia["ytp-ad-attribution-text"];this.hide()};
tR=function(a){hR.call(this,a,{G:"div",L:"ytp-ad-overlay-slot",I:[{G:"div",L:"ytp-ad-overlay-container"}]},["invideo-overlay"]);this.K=[];this.A=this.N=null;this.J={};a=this.ia["ytp-ad-overlay-container"];this.F=new sR(a,"ytp-overlay-ad-dimmed");g.J(this,this.F);this.O(a,"mouseover",this.F.cF,this.F);this.O(a,"mouseout",this.F.ZE,this.F);var b=new g.eR({G:"div",L:"ytp-ad-text-overlay",I:[{G:"div",L:"ytp-ad-close-container",I:[{G:"button",L:"ytp-ad-close-button",I:[g.ds()]}]},{G:"div",L:"ytp-ad-overlay-title",
I:["{{title}}"]},{G:"div",L:"ytp-ad-overlay-desc",I:["{{description}}"]},{G:"div",L:"ytp-ad-overlay-link",I:["{{displayUrl}}"]},{G:"div",L:"ytp-ad-overlay-attribution",I:["{{attribution}}"]}]});this.O(b.ia["ytp-ad-overlay-title"],"click",g.A(this.ci,b.element));this.O(b.ia["ytp-ad-overlay-link"],"click",g.A(this.ci,b.element));this.O(b.ia["ytp-ad-close-container"],"click",this.Bn);this.O(b.ia["ytp-ad-overlay-attribution"],"click",this.Fn);b.hide();this.D=b;g.J(this,this.D);this.D.na(a);b=new g.eR({G:"div",
X:["ytp-ad-text-overlay","ytp-ad-enhanced-overlay"],I:[{G:"div",L:"ytp-ad-close-container",I:[{G:"button",L:"ytp-ad-close-button",I:[g.ds()]}]},{G:"div",L:"ytp-ad-overlay-text-image",I:[{G:"img",P:{src:"{{imageUrl}}"}}]},{G:"div",L:"ytp-ad-overlay-title",I:["{{title}}"]},{G:"div",L:"ytp-ad-overlay-desc",I:["{{description}}"]},{G:"div",L:"ytp-ad-overlay-link",I:["{{displayUrl}}"]},{G:"div",L:"ytp-ad-overlay-attribution",I:["{{attribution}}"]}]});this.O(b.ia["ytp-ad-overlay-title"],"click",g.A(this.ci,
b.element));this.O(b.ia["ytp-ad-overlay-link"],"click",g.A(this.ci,b.element));this.O(b.ia["ytp-ad-close-container"],"click",this.Bn);this.O(b.ia["ytp-ad-overlay-attribution"],"click",this.Fn);this.O(b.ia["ytp-ad-overlay-text-image"],"click",this.jG);b.hide();this.B=b;g.J(this,this.B);this.B.na(a);b=new g.eR({G:"div",L:"ytp-ad-image-overlay",I:[{G:"div",L:"ytp-ad-close-container",I:[{G:"button",L:"ytp-ad-close-button",I:[g.ds()]}]},{G:"div",L:"ytp-ad-overlay-image",I:[{G:"img",P:{src:"{{imageUrl}}",
width:"{{width}}",height:"{{height}}"}}]},{G:"div",L:"ytp-ad-overlay-attribution",I:["{{attribution}}"]}]});this.O(b.ia["ytp-ad-overlay-image"],"click",g.A(this.ci,b.element));this.O(b.ia["ytp-ad-close-container"],"click",this.Bn);this.O(b.ia["ytp-ad-overlay-attribution"],"click",this.Fn);b.hide();this.C=b;g.J(this,this.C);this.C.na(a);this.hide()};
uR=function(a){a.D.hide();mR(a,a.D.element,!1);a.B.hide();mR(a,a.B.element,!1);a.C.hide();mR(a,a.C.element,!1)};
vR=function(a,b){g.Mh(b.ia["ytp-ad-overlay-attribution"],null!=a.A.attributionText);b.ma("attribution",iR(a.A.attributionText))};
wR=function(a,b){var c=a.o.getRootNode();g.N(c,"ytp-ad-overlay-open",b);g.N(c,"ytp-ad-overlay-closed",!b)};
sR=function(a,b){g.I.call(this);this.C=a;this.o=!1;this.B=b;this.D=!1;this.g=new g.O(this.qp,15E3,this);g.J(this,this.g);this.A=new g.O(this.qp,6E3,this);g.J(this,this.A)};
xR=function(a){hR.call(this,a,{G:"div",L:"ytp-ad-skip-slot"},["skip-button"]);this.N=!1;this.V=-1;this.T={};this.A=null;this.D=0;this.B=new g.eR({G:"div",L:"ytp-ad-preskip-container",I:[{G:"div",L:"ytp-ad-preskip-button",I:[{G:"div",L:"ytp-ad-preskip-text",I:["{{preskipText}}"]},{G:"div",L:"ytp-ad-preskip-image",I:[{G:"img",P:{src:"{{preskipTextImage}}"}}]}]}]});g.J(this,this.B);this.B.na(this.element);this.F=this.J=null;this.K=new g.fR(this.B,500,!1,100);g.J(this,this.K);this.C=new g.eR({G:"div",
L:"ytp-ad-skip-container",I:[{G:"button",X:["ytp-ad-skip-button","ytp-button"],I:[{G:"span",I:["{{skipText}}"]},{G:"div",L:"ytp-ad-skip-icon",I:[gs()]}]}]});g.J(this,this.C);this.C.na(this.element);this.U=new g.fR(this.C,500,!1,100);g.J(this,this.U);this.C.ba("click",this.bG,this);this.O(this.o,"presentingplayerstatechange",this.YC);this.hide()};
yR=function(a){a.F&&(a.Ma(a.F),a.F=null)};
BR=function(a){g.iu.call(this);this.g=a;this.D=zR(this);this.A={};this.o=new g.eR({G:"div",X:["video-ads","ytp-ad-module"]});g.J(this,this.o);g.gO(this.g,this.o.element,4);this.O(this.g,"videoplayerreset",this.C);this.O(this.g,"onAdUxUpdate",this.B);a=new rR(this.g);AR(this,a);a.na(this.o.element);a=new nR(this.g);AR(this,a);a.na(this.o.element);a=new xR(this.g);AR(this,a);a.na(this.o.element);a=new tR(this.g);AR(this,a);a.na(this.o.element)};
zR=function(a){function b(a,b){var c=a.getVideoData(b);return c?c.clientPlaybackNonce:null}
function c(a){return{toString:a}}
var d=a.g;a={};a.AD_CPN=c(function(){return b(d,2)});
a.CPN=c(function(){return b(d,1)});
a.AD_MT=c(function(){return Math.round(Math.max(0,1E3*d.getCurrentTime(2))).toString()});
a.MT=c(function(){return Math.round(Math.max(0,1E3*d.getCurrentTime(1))).toString()});
a.P_H=c(function(){return d.Kg().height.toString()});
a.PV_H=a.P_H;a.P_W=c(function(){return d.Kg().width.toString()});
a.PV_W=a.P_W;a.CONN="0";a.WT=c(function(){return Date.now().toString()});
a.LACT=c(function(){return g.Wu().toString()});
a.VIS=c(function(){return d.Lg().toString()});
a.VOL=c(function(){return d.getVolume().toString()});
return a};
AR=function(a,b){g.J(a,b);(0,g.G)(b.Z,function(a){bc(this.A,a)?g.ws(Error("Ad UI component already registered: "+a),"WARNING"):this.A[a]=b},a)};
CR=function(a){dR.call(this,a);this.logEvent=this.A="ad";this.B=null;var b=g.V(a);rE(b)&&!g.hE(b)&&g.J(this,new BR(a))};
g.FR=function(a,b){DR[ER+a]=b};
GR=function(a,b){this.o=a;this.g=b};
HR=function(a,b){return a.o+b*a.getLength()};
IR=function(a,b,c){if(!a.getLength())return null!=c?c:window.Infinity;a=(b-a.o)/a.getLength();return g.Zc(a,0,1)};
JR=function(){this.o=this.position=this.B=this.g=this.C=this.A=this.width=window.NaN};
KR=function(a,b,c,d,e){var f=b.Xs/b.rows,k=Math.min(c/(b.Zs/b.columns),d/f),l=b.Zs*k,m=b.Xs*k;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,q=m/b.rows,t=-b.Kx*n,v=-b.Pb*q;e&&45>=f&&(q-=1/k);n-=2/k;a=a.style;a.width=n+"px";a.height=q+"px";e||(d=(d-q)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+t+"px "+v+"px/"+l+"px "+m+"px";if(e)return new g.hd(n,
q)};
LR=function(a,b,c){g.I.call(this);this.da=b;this.ca=c;this.D=this.N=this.H=this.o=this.T=this.V=this.U=this.B=this.J=this.g=null;this.Y={};this.aa={};this.Z=null;this.M=a;this.F=this.C=this.K=this.A=null};
g.MR=function(a){var b=g.V(a.M);if(g.IE(b)||b.Mb||!b.Cc&&!b.xa)return!1;var c=a.M.Fa();if(2==c)return!1;if(3==c)return b.experiments.g("desktop_enable_autoplay");if(b.experiments.g("allow_live_autoplay"))return!0;a=a.M.getVideoData();return b.Ki&&!a.fe?!1:!!a&&!a.va};
NR=function(a){if(a=a.M.getVideoData(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
PR=function(a,b,c,d){try{if(d){var e=DR[ER+b];if(e)return new e(a.M);"creatorendscreen"==b?OR(a,"annotations_module",c):OR(a,b,c)}else g.dO(a.M,b)}catch(f){g.dO(a.M,b),g.ws(f)}return null};
QR=function(a,b){a.g&&(b||a.g.Ac())&&(g.Ke(a.g),a.g=null);a.J&&(b||a.J.Ac())&&(g.Ke(a.J),a.J=null);a.B&&(b||a.B.Ac())&&(g.Ke(a.B),a.B=null);a.U&&(b||a.U.Ac())&&(g.Ke(a.U),a.U=null);a.V&&(b||a.V.Ac())&&(g.Ke(a.V),a.V=null);a.T&&(b||a.T.Ac())&&(g.Ke(a.T),a.T=null);a.o&&(b||a.o.Ac())&&(g.Ke(a.o),a.o=null);a.H&&(b||a.H.Ac())&&(g.Ke(a.H),a.H=null);a.N&&(b||a.N.Ac())&&(g.Ke(a.N),a.N=null);a.D&&(b||a.D.Ac())&&(g.Ke(a.D),a.D=null);a.K&&(b||a.K.Ac())&&(g.Ke(a.K),a.K=null);a.C&&(b||a.C.Ac())&&(g.Ke(a.C),a.C=
null);a.A&&(b||a.A.Ac())&&(g.Ke(a.A),a.A=null)};
g.KN=function(a){return g.V(a.M).qb?a.K:null};
OR=function(a,b,c){if(a.da){for(var d=a.da+b+".js",e=window.document.getElementsByTagName("SCRIPT"),f=!1,k,l=0;l<e.length;l++){var m=e[l];m.src==d&&(k=m)}k||(k=g.Ed("SCRIPT"),f=!0);var n=(0,g.z)(function(){this.fa()||c.call(this)},a),q=(0,g.z)(function(){this.fa()||g.dO(this.M,b)},a);
k.onload=g.A(function(a){Cf(n);a&&a()},k.onload);
k.onerror=g.A(function(a){Cf(q);a&&a()},k.onerror);
k.onreadystatechange=g.A(function(a){switch(k.readyState){case "loaded":case "complete":Cf(n,this)}a&&a()},k.onreadystatechange);
f&&((e=g.V(a.M).Hi)&&k.setAttribute("nonce",e),g.Xc(k,g.be(d)),d=window.document.getElementsByTagName("HEAD")[0]||window.document.body,d.insertBefore(k,d.firstChild),g.Je(a,function(){k.parentNode&&k.parentNode.removeChild(k);g.FR(b,null);"annotations_module"==b&&g.FR("creatorendscreen",null)}))}};
SR=function(a){var b=a.g,c=["html5-video-player"];b.F&&c.push("ytp-dni");g.X.call(this,{G:"div",X:c,P:{tabindex:-1,id:a.ca.attrs.id},I:[{G:"div",L:"html5-video-container",P:{"data-layer":0}}]});g.Lt(this.element,"version",a.ca.assets.js);this.app=a;this.containerElement=this.ia["html5-video-container"];this.V=!!this.containerElement;this.B=new g.ch(0,0,0,0);this.o=null;this.D=new g.ch(0,0,0,0);this.H=this.N=this.K=window.NaN;this.U=!1;this.F=window.NaN;this.J=!1;this.C=null;this.addEventListener=
(0,g.z)(this.element.addEventListener,this.element);this.removeEventListener=(0,g.z)(this.element.removeEventListener,this.element);this.dispatchEvent=function(){};
BE(b)&&"blazer"!=b.g&&"mweb-polymer"!=b.g&&window.matchMedia&&(this.T="desktop-polymer"==b.g?[{query:window.matchMedia("(max-width: 656px)"),size:new g.hd(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.hd(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.hd(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.hd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.hd(854,480)},{query:window.matchMedia("(min-width: 1000px)"),
size:new g.hd(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.hd(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.hd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.hd(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.hd(640,360)}]);this.A=null;g.Vr({YTP_ADVERTISEMENT:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430",YTP_AD_BADGE:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
YTP_AD_NOTIFICATION:"\u0427\u0435\u0440\u0435\u0437 $X_SECONDS\u00a0\u0441\u0435\u043a. \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430",YTP_AD_POD_POSITION:"$AD_INDEX\u00a0\u0438\u0437\u00a0$ADS_COUNT",YTP_AD_PREVIEW_NONSKIPPABLE:"\u0420\u043e\u043b\u0438\u043a \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437\u00a0$TIME_REMAINING",
YTP_AIRPLAY:"AirPlay",YTP_AUDIO_TRACK_TITLE:"\u0417\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u0434\u043e\u0440\u043e\u0436\u043a\u0430",YTP_AUTO:"\u0410\u0432\u0442\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",YTP_AUTO_WITH_QUALITY_2:"\u0410\u0432\u0442\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ($VIDEO_QUALITY)",YTP_CAN_SKIP_AD_SOON:"\u0420\u0435\u043a\u043b\u0430\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437\u00a0$TIME_REMAINING",
YTP_CARDS_BUTTON_ARIA_LABEL:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438",YTP_CARDS_BUTTON_INFO:"\u041e \u0432\u0438\u0434\u0435\u043e",YTP_CARDS_BUTTON_SHOPPING:"\u041f\u043e\u043a\u0443\u043f\u043a\u0438",YTP_CHANGE_QUALITY_WITH_QUALITY_2:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e ($VIDEO_QUALITY)",YTP_COPY_DEBUG_INFO:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438",
YTP_COPY_VIDEO_URL:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c URL \u0432\u0438\u0434\u0435\u043e",YTP_COPY_VIDEO_URL_AT_TIME:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c URL \u0432\u0438\u0434\u0435\u043e \u0441 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u043e\u0439 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL:"\u0421\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438",YTP_DRAWER_HEADER_TEXT_2:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...",
YTP_DRAWER_POLL_PERCENT:"$PERCENT%",YTP_DRAWER_POLL_SIGNIN_TITLE:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0439\u0442\u0438 \u043e\u043f\u0440\u043e\u0441?",YTP_DRAWER_POLL_TITLE_ARIA_LABEL:'\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043e\u043f\u0440\u043e\u0441\u0435 "$POLL_TITLE", \u043d\u0443\u0436\u043d\u043e \u0432\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442.',YTP_GET_DEBUG_INFO:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0442\u043b\u0430\u0434\u043a\u0435",
YTP_GET_VIDEO_URL:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c URL \u0432\u0438\u0434\u0435\u043e",YTP_GET_VIDEO_URL_AT_TIME:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c URL \u0432\u0438\u0434\u0435\u043e \u0441 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u043e\u0439 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",YTP_GET_EMBED:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0434 \u0434\u043b\u044f \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u044f",
YTP_DECREASE_PLAYBACK_SPEED:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f",YTP_PLAYBACK_SPEED_CHANGED:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u00a0\u2013 $RATE",YTP_DEFAULT_VIEW:"\u0420\u0435\u0436\u0438\u043c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
YTP_EMBED_COPY:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c HTML-\u043a\u043e\u0434",YTP_ERROR_GENERIC_WITHOUT_LINK:"\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",YTP_ERROR_GENERIC_WITH_LINK_AND_CPN:"\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435. \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f: $CPN. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...$END_LINK",
YTP_EXIT_FULLSCREEN:"\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430",YTP_FULLSCREEN_GENERIC_ERROR:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...$END_LINK",
YTP_FULLSCREEN_UNSUPPORTED_ERROR:"\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...$END_LINK",YTP_VOLUME_UNSUPPORTED_ERROR:"\u0412 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c \u0437\u0432\u0443\u043a\u0430. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...$END_LINK",
YTP_FEATURED:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435",YTP_FULLSCREEN:"\u0412\u043e \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d",YTP_INCREASE_PLAYBACK_SPEED:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f",YTP_INVIDEO_PROMOTION_ARIA_LABEL:"\u041f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435",YTP_GOTO_LIVE_TOOLTIP:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0438 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u0440\u044f\u043c\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u0438",
YTP_KEYBOARD_SHORTCUTS:"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438",YTP_LIVE:"\u0412 \u044d\u0444\u0438\u0440\u0435",YTP_LIVE_NOW:"\u0421\u0415\u0419\u0427\u0410\u0421 \u0412 \u041f\u0420\u042f\u041c\u041e\u041c \u042d\u0424\u0418\u0420\u0415",YTP_LOOP:"\u041f\u043e\u0432\u0442\u043e\u0440",YTP_MIX:"\u041c\u0438\u043a\u0441",YTP_MORE:"\u0415\u0449\u0451",YTP_MORE_VIDEOS:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e",
YTP_MDX_TITLE:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430",YTP_MDX_TOOLTIP:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0435",YTP_MDX_MY_COMPUTER:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",YTP_MDX_CAST_SELECTOR:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
YTP_MUTE:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0437\u0432\u0443\u043a\u0430",YTP_NEXT:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",YTP_NEXT_VIDEO_IN:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e \u0447\u0435\u0440\u0435\u0437\u00a0$TIME_LEFT",YTP_NORMAL_SPEED:"\u041e\u0431\u044b\u0447\u043d\u0430\u044f",YTP_ON:"\u0412\u041a\u041b",YTP_OFF:"\u0412\u042b\u041a\u041b",YTP_OPTIONS:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
YTP_PLAY_ALL:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435",YTP_PLAY_PAUSE:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435/\u043f\u0430\u0443\u0437\u0430",YTP_PREVIOUS:"\u041d\u0430\u0437\u0430\u0434",YTP_PLAYBACK_STALLED_AT_START:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e. \u0415\u0441\u043b\u0438 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0430\u043a \u0438 \u043d\u0435 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e.",
YTP_MISSING_FORMATS:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0435 \u0432\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b?",YTP_PLAYLIST:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",YTP_PLAYLIST_UP_NEXT:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",YTP_QUALITY_TITLE:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",YTP_SUGGESTED_VIDEOS:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0432\u0438\u0434\u0435\u043e",YTP_REPLAY:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",
YTP_TROUBLESHOOT_ISSUE:"\u0420\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0441 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435\u043c",YTP_SEEK_BACK:"\u041d\u0430\u0437\u0430\u0434 \u043d\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434",YTP_SEEK_FORWARD:"\u0412\u043f\u0435\u0440\u0435\u0434 \u043d\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434",YTP_SEEK_PERCENT:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a 0%-90%.",
YTP_SETTINGS:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",YTP_SHARE:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",YTP_SHARE_LINK:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439",YTP_SHARE_WITH_PLAYLIST_2:"\u0412 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430",YTP_SHOW_VIDEO_INFO:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0441\u0438\u0441\u0430\u0434\u043c\u0438\u043d\u043e\u0432",
YTP_SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",YTP_SPHERICAL_CONTROL:"\u0421\u0442\u0440\u0435\u043b\u043a\u0438 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u0437\u043e\u0440\u043e\u043c \u0432 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e.",YTP_SKIP_AD:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c",YTP_SPEED_TITLE:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c",YTP_ST_COLLAPSE:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c",
YTP_ST_EXPAND:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",YTP_SUBSCRIBE:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",YTP_SUBSCRIBED:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0430",YTP_SUBTITLES:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",YTP_SUBTITLES_TOOLTIP:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",YTP_SUBTITLES_OFF:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b",
YTP_SUBTITLES_ON:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b",YTP_TAP_TO_UNMUTE:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a",YTP_TAP_TO_UNMUTE_SHORT:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a",YTP_THREED_SHORT:"3D",YTP_THREED_VIEWMODE_2D:"2D",YTP_THREED_VIEWMODE_ANAGLYPH:"\u0410\u043d\u0430\u0433\u043b\u0438\u0444",YTP_THEATER_MODE:"\u0428\u0438\u0440\u043e\u043a\u0438\u0439 \u044d\u043a\u0440\u0430\u043d",
YTP_TOGGLE_FULLSCREEN:"\u0412\u043e \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d",YTP_TOGGLE_MUTE:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u0431\u0435\u0437\u0437\u0432\u0443\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",YTP_UNMUTE:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a",YTP_UNSUBSCRIBE:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443",YTP_URL_NAVIGATE:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 YouTube.com",
YTP_URL_NAVIGATE_TO:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430\u00a0$WEBSITE",YTP_WATCH_ALL:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",YTP_WATCH_LATER:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0437\u0436\u0435",YTP_WATCH_LATER_2:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0437\u0436\u0435",
YTP_WATCH_LATER_AS_2:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u043a\u0430\u043a $USER_NAME",YTP_ADDED_TO_WATCH_LATER_AS:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f $USER_NAME",YTP_WEBGL_3D_ANAGLYPH:"\u0410\u043d\u0430\u0433\u043b\u0438\u0444",YTP_WEBGL_3D_2D:"2D",YTP_SUBSCRIBE_AS:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a $USER_NAME",
YTP_LIKE_AS:'\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f" \u043a\u0430\u043a $USER_NAME',YTP_DISLIKE_AS:'\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 "\u041d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f" \u043a\u0430\u043a $USER_NAME',YTP_WATCH_NEXT:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",YTP_PLAY:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
YTP_WATERMARK:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043a\u0430\u043d\u0430\u043b\u0430",YTP_ERROR_STREAMING_UNAVAILABLE:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043a\u0430\u0447\u0430\u043d\u043e \u0434\u043b\u044f \u043e\u0444\u043b\u0430\u0439\u043d-\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430.",
YTP_ERROR_LICENSE:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0435\u0439.",YTP_ERROR_VIDEO_NOT_FOUND:"\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u0432\u0438\u0434\u0435\u043e.",YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE:"\u0412\u044b \u0443\u0436\u0435 \u0441\u043a\u0430\u0447\u0430\u043b\u0438 \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u0435\u043c. \u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u0437\u0434\u0435\u0441\u044c, \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u0435\u0433\u043e \u043e\u0442 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430.",
YTP_ERROR_CANNOT_ACTIVATE_RENTAL:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
YTP_ERROR_PURCHASE_NOT_FOUND:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u044d\u0442\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e.",YTP_ERROR_PURCHASE_REFUNDED:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.",
YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK:"\u0412\u0438\u0434\u0435\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440.",
YTP_ERROR_TOO_MANY_STREAMS_PER_USER:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0445\u0441\u044f \u043a \u043e\u0434\u043d\u043e\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443.",
YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e.",
YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED:"\u0417\u0430 \u0441\u0443\u0442\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432/IP-\u0430\u0434\u0440\u0435\u0441\u043e\u0432.",YTP_ERROR_UNUSUAL_ACTIVITY:"\u0412\u0438\u0434\u0435\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0438\u0437-\u0437\u0430 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0435.",
YTP_ERROR_STREAM_LICENSE_NOT_FOUND:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",YTP_ERROR_NOT_SIGNED_IN:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442.",
YTP_CLOSE:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",YTP_EXPAND:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",YTP_ANNOTATIONS:"\u0410\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438",YTP_DONE:"\u0413\u043e\u0442\u043e\u0432\u043e",YTP_SHARE_THIS_PLAYLIST:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u043e\u043c",YTP_SEEK_SLIDER:"\u041f\u043e\u043b\u0437\u0443\u043d\u043e\u043a \u043f\u043e\u0438\u0441\u043a\u0430",
YTP_PAUSE:"\u041f\u0430\u0443\u0437\u0430",YTP_AUTOPLAY:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435",YTP_AUTOPLAY_COUNTDOWN_2:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e \u0447\u0435\u0440\u0435\u0437 $SECONDS_LEFT",YTP_AUTOPLAY_NEXT:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e",
YTP_AUTOPLAY_PAUSED:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",YTP_AUTOPLAY_PAUSED_2:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",YTP_AUTOPLAY_PAUSED_3:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",
YTP_AUTOPLAY_CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435",YTP_WATCH_VIDEO_OR_PLAYLIST:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c $TITLE",YTP_CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0430",YTP_ON_GOOGLE_PLUS:"\u041d\u0430 Google+",YTP_STILL_THERE:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435.",
YTP_DISMISS:"\u041e\u041a",YTP_RESET:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",YTP_STOP:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u044f\u043c\u0443\u044e \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u044e",YTP_LIKE:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",YTP_DISLIKE:"\u041d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",YTP_SCREENREADER_VOLUME_SETTING:"\u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c",YTP_SCREENREADER_VOLUME_MUTED:"\u0437\u0432\u0443\u043a \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d",
YTP_SCREENREADER_VOLUME_MUTE:"\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a",YTP_SCREENREADER_VOLUME_UNMUTE:"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a",YTP_SCREENREADER_CONTROL_TOGGLE:"\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c",YTP_SAMPLE_SUBTITLES:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK:"\u042d\u0442\u043e\u0442 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f",
YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK:"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0435\u0442 \u043d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432. $BEGIN_LINK\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u0432\u0438\u0434\u0435\u043e HTML5.$END_LINK",
YTP_HTML5_FLASH_DEPRECATED:"\u0412\u0438\u0434\u0435\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 Flash \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438. $BEGIN_LINK\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415$END_LINK",
YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED:"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0441\u0435\u0430\u043d\u0441\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u043c\u0443.",YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED:"\u0412\u0438\u0434\u0435\u043e \u0432 \u0441\u0435\u0430\u043d\u0441\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u043c\u0443.",
YTP_ERROR_CAST_TOKEN_EXPIRED:"\u0412\u0440\u0435\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",YTP_ERROR_CAST_TOKEN_FAILED:"\u0421\u0435\u0430\u043d\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
YTP_ERROR_CAST_TOKEN_MALFORMED:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0430\u043d\u0441. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",YTP_ERROR_GEO_FAILURE:"\u042d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0435.",
YTP_ERROR_INVALID_DRM_MESSAGE:"\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b DRM.",YTP_ERROR_RENTAL_EXPIRED:"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u043a\u0430\u0442\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c.",YTP_ERROR_RETRYABLE_ERROR:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
YTP_ERROR_SERVER_ERROR:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",YTP_ERROR_STREAMING_NOT_ALLOWED:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0438\u0434\u0435\u043e \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043e \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443.",
YTP_ERROR_UNSUPPORTED_DEVICE:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c.",YTP_ERROR_VIDEO_FORBIDDEN:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d.",YTP_ERROR_VIDEO_UNAVAILABLE:"\u041e\u0448\u0438\u0431\u043a\u0430",
YTP_ERROR_FORMAT_UNAVALIABLE:"\u042d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043f\u043e\u043a\u0430 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",YTP_MDX_STATUS_CONNECTED_2:'\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 "$RECEIVER_NAME"',
YTP_MDX_STATUS_ERROR_2:'\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',YTP_MDX_STATUS_PLAYING_2:'\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',YTP_MDX_PLAYER_ERROR:"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",
YTP_MDX_PLAYER_RECONNECT_TIME:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443. \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 $FORMATTED_TIME...",YTP_MDX_PLAYER_RECONNECT_BUTTON:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e",
YTP_DEVICE_FALLBACK:"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",YTP_AD_INTERRUPT_MESSAGE:"\u042d\u0442\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0432\u0430\u0448\u0438\u043c \u0432\u0438\u0434\u0435\u043e.",
YTP_VISIT_ADVERTISERS_SITE:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u0441\u0430\u0439\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",YTP_PROGRESS_LABEL_2:"$PLAY_PROGRESS (\u043e\u0431\u0449\u0430\u044f \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c $DURATION)",YTP_PLAYLIST_NAME:'\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 "$PLAYLIST_NAME"',YTP_PLAYLIST_POSITION:"$CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_SHARE_PANEL_ERROR:"\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
YTP_PLAYLIST_AUTHOR_AND_POSITION:"$AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_PLAYER_NORMAL:"\u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c YouTube",YTP_PLAYER_FULLSCREEN:"\u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c YouTube \u0432 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435",YTP_SPONSORED:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430",YTP_SPONSORED_PRODUCT_INFO:"\u042d\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430. \u0415\u0435 \u043f\u043e\u043a\u0430\u0437 \u043c\u043e\u0436\u0435\u0442 \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u043c.",
YTP_SPONSORED_PRODUCT_BADGE:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430",YTP_AD_SETTINGS_INFO:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 $BEGIN_FORMAT\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0439$END_FORMAT.",
YTP_PIP:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0432 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435",YTP_AUTO_TRANSLATE:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",YTP_SWITCH_CAMERA:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u043a\u0443\u0440\u0441",YTP_MULTICAM_INDEX:"\u041a\u0430\u043c\u0435\u0440\u0430\u00a0$CAMERA_INDEX\u00a0\u0438\u0437\u00a0$CAMERA_COUNT",YTP_MORE_CAMERAS_AVAILABLE:"\u041c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u0443\u044e \u043a\u0430\u043c\u0435\u0440\u0443.",
YTP_VIDEO_SUBTITLES_OVERRIDE:"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u043e\u0432",YTP_VIDEO_SUBTITLES_OVERRIDE_DESC:"\u0415\u0441\u043b\u0438 \u0432 \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u0434\u0430\u043d\u044b \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u043e\u0432, \u043e\u043d\u0438 \u0438\u043c\u0435\u044e\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442."});
RR(this);this.O(a.o,"mutedautoplaychange",this.DI)};
RR=function(a){var b=a.app.o,c=(0,g.z)(a.cz,a),d=(0,g.z)(a.CI,a),e=(0,g.z)(a.BI,a),f=(0,g.z)(a.Cy,a);b.addEventListener("initializingmode",c);b.addEventListener("videoplayerreset",d);b.addEventListener("videodatachange",e);b.addEventListener("presentingplayerstatechange",f);g.Je(a,function(){b.removeEventListener("initializingmode",c);b.removeEventListener("videoplayerreset",d);b.removeEventListener("videodatachange",e);b.removeEventListener("presentingplayerstatechange",f)})};
WR=function(a,b){a.o=b;a.U=!1;if(!a.o.parentNode)try{Jd(a.containerElement,a.o,0)}catch(c){throw Error("videoElement_: "+!!a.o+", containerElement: "+!!a.containerElement+", containerElement.childNodes: "+!(!a.containerElement||!a.containerElement.childNodes)+", containerInitiallyTruthy: "+a.V+", isDisposed: "+a.fa());}a.A&&(a.A.disconnect(),a.A=null);!a.app.g.experiments.g("no_detect_bad_extensions2")&&window.MutationObserver&&(a.A=new window.MutationObserver((0,g.z)(function(a){for(var b=0;b<a.length;b++){var c=
a[b];"style"==c.attributeName&&"100%"==c.target.style.height&&(window.console.warn("Detected an extension setting the video size to an invalid height, which hides video playback. Restoring the original height..."),this.D=new g.ch(0,0,0,0),TR(this))}},a)),a.A.observe(a.o,{attributes:!0}));
a.D=new g.ch(0,0,0,0);TR(a);UR(a);VR(a)};
VR=function(a){g.L(a.o,"video-stream");g.L(a.o,"html5-main-video");var b=a.app.g;b.Db&&a.o.setAttribute("data-no-fullscreen",!0);b.Je&&(a.o.setAttribute("webkit-playsinline",""),a.o.setAttribute("playsinline",""));b.Nl&&a.o&&a.O(a.o,"click",a.o.play,a.o)};
XR=function(a,b){if(a.o){var c=a.app.g;NC&&(a.o.setAttribute("x-webkit-airplay","allow"),b.title?a.o.setAttribute("title",b.title):a.o.removeAttribute("title"));a.o.setAttribute("controlslist","nodownload");c.XG&&b.videoId&&(a.o.poster=b.ub(c,"default.jpg"))}c=g.SG(b,"yt:bgcolor");a.containerElement.style.backgroundColor=c?c:"";a.K=OD(g.SG(b,"yt:stretch"));a.N=OD(g.SG(b,"yt:crop"),!0);a.app.g.experiments.g("use_legacy_crop_resize")||a.je()};
g.ZR=function(a){var b=a.app.g.experiments.g("html5_aspect_from_adaptive_format");if(b){var c=g.W(a.app);if((c=c?c.getVideoData():null)&&c.Ra&&c.Ra.g)return b=c.Ra.videoInfos[0],YR(b.video.width,b.video.height)}return(a=a.o)?YR(a.videoWidth,a.videoHeight):b?16/9:window.NaN};
g.EP=function(a,b){var c=a.Ga(),d=$R(a,c,g.ZR(a),b);return new g.ch((c.width-d.width)/2,(c.height-d.height)/2,d.width,d.height)};
$R=function(a,b,c,d){(0,window.isNaN)(a.K)||(c=a.K);var e=c;(0,window.isNaN)(a.H)?(0,window.isNaN)(a.N)||(e=a.N):e=a.H;a=YR(b.width,b.height);(0,window.isFinite)(e)||(e=Math.max(c,a));var f;e>a?f={width:b.width,height:b.width/e,aspectRatio:e}:e<a?f={width:b.height*e,height:b.height,aspectRatio:e}:f={width:b.width,height:b.height,aspectRatio:a};d||(0,window.isNaN)(c)||(c>e?f.width=f.height*c:c<e&&(f.height=f.width/c),f.aspectRatio=c);return f};
YR=function(a,b){return 1>Math.abs(aS*b-a)||1>Math.abs(aS/a-b)?aS:a/b};
bS=function(a){return 1==a.app.T?!1:(a=g.LN(a.app.o))&&!g.T(a,2)&&!WH(a)};
UR=function(a){var b="3"==a.app.g.B&&!a.U&&bS(a)&&!a.app.ka;a.o.controls=b;a.o.tabIndex=b?0:-1};
TR=function(a){var b=g.ZR(a),c=a.Ga(),d=1,e=!1,f=$R(a,c,b),k=gt();if(bS(a)){var l=(0,window.isNaN)(b)||eC;NC&&!g.zc(601)?b=f.aspectRatio:l=l||"3"==a.app.g.B;l?l=new g.ch(0,0,c.width,c.height):(d=f.aspectRatio/b,l=new g.ch((c.width-f.width/d)/2,(c.height-f.height)/2,f.width/d,f.height),1==d&&g.cj&&(b=l.width-c.height*b,0<b&&(l.width+=b,l.height+=b)));k&&(a.o.style.display="");a.J=!0}else b=-c.height,NC?b*=window.devicePixelRatio:g.FE&&(b-=window.screen.height),l=new g.ch(0,b,c.width,c.height),k&&(a.o.style.display=
"none"),a.J=!1;g.eh(a.D,l)||(a.D=l,g.hE(a.app.g)?(a.o.style.setProperty("width",l.width+"px","important"),a.o.style.setProperty("height",l.height+"px","important")):g.Jh(a.o,g.gh(l)),g.zh(a.o,g.hh(l)),e=!0);c=new g.ch((c.width-f.width)/2,(c.height-f.height)/2,f.width,f.height);g.eh(a.B,c)||(a.B=c,e=!0);g.rh(a.o,"transform",1==d?"":"scaleX("+d+")");return e};
cS=function(a,b,c,d){g.R.call(this);this.A=a;this.V=(0,g.z)(b,null);this.o=0;this.F=!1;this.C=new g.ed(window.NaN,window.NaN);this.g=new g.iu(this);g.J(this,this.g);b=d?4E3:3E3;this.J=new g.O(g.A(this.yb,1,!1),b,this);g.J(this,this.J);this.K=new g.O(g.A(this.yb,2,!1),b,this);g.J(this,this.K);this.T=new g.O(g.A(this.yb,512,!1),0,this);g.J(this,this.T);this.U=c&&0<c.Ef.length?5E3:3E3;d||(this.B=this.g.O(a,"mouseover",this.Co),this.g.O(a,"mousemove",this.yI),this.g.O(a,"mouseleave",this.bD));g.th?this.g.O(a,
"keypress",this.sz):this.g.O(a,"focusin",this.Vx);this.D=this.g.O(a,"mousedown",this.Rv);this.H=this.g.O(a,"touchstart",this.Tv,void 0,!0);this.Y=null;this.yb(640,!0)};
dS=function(a){a.yb(4,!1);a.N&&(a.g.Ma(a.N),a.N=null,a.B=a.g.O(a.A,"mouseover",a.Co));a.B&&(a.g.Ma(a.B),a.B=a.g.O(a.A,"mouseover",a.Co))};
fS=function(a,b){g.X.call(this,{G:"canvas",L:"ytp-tv-static"});this.A=this.element.getContext("2d");this.height=this.width=window.NaN;this.K=null;this.H=this.J=this.C=this.B=0;this.D=-75;this.o=new g.tp(this.N,void 0,this);g.J(this,this.o);this.F=new g.O(this.o.Eh,75,this.o);g.J(this,this.F);eS(this,a,b)};
gS=function(a){for(var b=Math.floor(.6*a),c=b;c<a;++c){for(var d=!1,e=2;e<Math.sqrt(c);e++){if(!(c%e)){d=!1;break}d=!0}if(d)return c}return b};
eS=function(a,b,c){if(b&&c){a.width=a.element.width=b;a.height=a.element.height=c;var d=g.Ed("CANVAS");d.width=b;d.height=c;for(var e=d.getContext("2d"),f=e.getImageData(0,0,b,c),k=b*c,l=0;l<k;l++){var m=4*l;f.data[m]=f.data[m+1]=f.data[m+2]=Math.floor(35*Math.random());f.data[m+3]=255}e.putImageData(f,0,0);a.K=d;a.J=gS(b);a.H=gS(c/10);a.A.scale(1.5,1.5);a.A.fillStyle="rgba(255, 255, 255, 0.02)"}};
hS=function(){return{G:"div",L:"ytp-spinner-dots",I:[{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-0"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-1"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-2"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-3"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-4"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-5"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-6"]},{G:"div",X:["ytp-spinner-dot","ytp-spinner-dot-7"]}]}};
g.iS=function(a,b,c,d){if((void 0===c||!c)&&g.qR(a))return g.hu(a),!0;b.Ub();a=a.currentTarget.getAttribute("href");g.QO(a,d,!0);return!1};
jS=function(a,b,c){if(BE(g.V(b))&&2!=b.Fa()){if(g.qR(c))return b.isFullscreen()&&g.ON(b),g.hu(c),!0}else{var d=g.qR(c);d&&b.Ub();g.QO(a,void 0,!0);d&&(g.RO(a),g.hu(c))}return!1};
kS=function(a){var b=!g.V(a).Db&&3!=a.Fa();return a.isFullscreen()||b};
mS=function(a){g.X.call(this,{G:"div",X:["ytp-error"],P:{role:"alert"},I:[{G:"div",L:"ytp-error-content",I:[{G:"div",L:"ytp-error-content-wrap",I:["{{content}}"]}]}]});this.o=a;this.B=[];try{this.A=new fS(1,1),g.J(this,this.A),this.A.na(this.element,0)}catch(b){}lS(this,g.MN(this.o).Ga())};
lS=function(a,b){nS(a,function(a){eS(a,b.width,b.height)})};
nS=function(a,b){if(a.A)try{b.call(a,a.A)}catch(c){a.A.dispose(),a.A=null}};
zS=function(a,b,c,d,e,f){e||(e=g.V(a.o).o);a=d?{CPN:a.o.getVideoData().clientPlaybackNonce}:null;b=g.Q(b,a).split(/\$(BEGIN|END)_LINK/);a=[];f&&(f=g.Q(f,null))&&a.push({G:"h2",I:[f]});a.push(b[0]);a.push({G:"br"});a.push({G:"a",P:{href:c,target:e?"_blank":null},I:[b[2]]});a.push(b[4]);return{G:"span",I:a}};
MS=function(a,b,c){LS("add_to_watch_later_list",a,b,c)};
US=function(a,b,c){LS("delete_from_watch_later_list",a,b,c)};
LS=function(a,b,c,d){a=c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1";c={feature:b.feature||null,authuser:b.Ib||null,pageid:b.pageId||null};var e={video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.JL||null,add_to_playlists:b.CL||null,plid:g.P("PLAYBACK_ID")||null};g.Us(a,{method:"POST",Wb:c,kb:e,context:b.context,onError:b.onError,rb:function(a,c){var d=c.result;d&&d.actions&&wu(d.actions);
b.rb.call(this,a,c)},
Nc:b.Nc,withCredentials:!!d})};
XS=function(){this.g=[];this.o=[];this.A=[]};
aT=function(a,b,c){c=g.Ed(c?"AUDIO":"VIDEO");g.Ja(c,YS);g.Zt(c,"loadeddata",(0,g.z)(c.o,c));eE&&6<=ZS&&g.Zt(c,"webkitbeginfullscreen",(0,g.z)(c.play,c));a.o.push(c);b?a.A.push(c):$S(a,c);return c};
$S=function(a,b){g.rb(a.o,b)&&!g.rb(a.g,b)&&(b.src||b.load(),g.xb(a.A,b)||a.g.push(b))};
bT=function(){g.X.call(this,{G:"div",L:"ytp-sparkline"})};
cT=function(a,b){for(var c=Math.max.apply(Math,b)||1,d=0;d<b.length;d++){if(d<a.element.children.length)var e=a.element.children[d];else e=g.Ed("SPAN"),a.element.appendChild(e);e.style.width=100/b.length+"%";e.style.height=b[d]/c*100+"%"}for(;a.element.children.length>b.length;)g.Kd(a.element.lastChild)};
dT=function(a){var b={G:"button",X:["html5-video-info-panel-close","ytp-button"],P:{title:"close"},I:["[x]"]};g.X.call(this,{G:"div",L:"html5-video-info-panel",I:[b,{G:"div",L:"html5-video-info-panel-content",I:[{G:"div",I:[{G:"div",I:["Video ID:"]},{G:"span",I:["{{video_id}}"]}]},{G:"div",I:[{G:"div",I:["Dimensions:"]},{G:"span",I:["{{dimensions}}"]}]},{G:"div",I:[{G:"div",I:["Resolution:"]},{G:"span",I:["{{resolution}}"]}]},{G:"div",I:[{G:"div",I:["Optimal Resolution:"]},{G:"span",I:["{{optimal_resolution}}"]}]},
{G:"div",I:[{G:"div",I:["Volume:"]},{G:"span",I:["{{volume}}"]}]},{G:"div",I:[{G:"div",I:["Relative Loudness:"]},{G:"span",I:["{{relative_loudness}}"]}]},{G:"div",I:[{G:"div",I:["Stream Host:"]},{G:"span",I:["{{stream_host}}"]}]},{G:"div",I:[{G:"div",I:["Stream Type:"]},{G:"span",I:["{{stream_type}}"]}]},{G:"div",P:{style:"{{cpn_style}}"},I:[{G:"div",I:["CPN:"]},{G:"span",P:{style:"font-family:monospace"},I:["{{cpn}}"]}]},{G:"div",I:[{G:"div",I:["Mime Type:"]},{G:"span",I:["{{mime}}"]}]},{G:"div",
I:[{G:"div",I:["DASH:"]},{G:"span",I:["{{dash}}"]}]},{G:"div",P:{style:"{{shader_info_style}}"},I:[{G:"div",I:["Shader Info:"]},{G:"span",I:["{{shader_info}}"]}]},{G:"div",P:{style:"{{color_style}}"},I:[{G:"div",I:["Color:"]},{G:"span",I:["{{color}}"]}]},{G:"div",P:{style:"{{drm_style}}"},I:[{G:"div",I:["Protected:"]},{G:"span",I:["{{drm}}"]}]},{G:"div",I:[{G:"div",I:["Connection Speed:"]},{G:"span",I:[{G:"span",I:["{{bandwidth_sparkline}}"]},{G:"span",I:["{{bandwidth_kbps}}"]}]}]},{G:"div",I:[{G:"div",
I:["Buffer Health:"]},{G:"span",I:[{G:"span",I:["{{buffer_health_sparkline}}"]},{G:"span",I:["{{buffer_health_seconds}}"]}]}]},{G:"div",I:[{G:"div",I:["Network Activity:"]},{G:"span",I:[{G:"span",I:["{{network_activity_sparkline}}"]},{G:"span",I:["{{network_activity_bytes}}"]}]}]},{G:"div",P:{style:"{{live_latency_style}}"},I:[{G:"div",I:["Live Latency:"]},{G:"span",I:[{G:"span",I:["{{live_latency_sparkline}}"]},{G:"span",I:["{{live_latency_message}}"]}]}]},{G:"div",I:[{G:"div",I:["Dropped Frames:"]},
{G:"span",I:["{{dropped_frames}}"]}]},{G:"div",P:{style:"{{sequence_number_style}}"},I:[{G:"div",I:["Sequence Number:"]},{G:"span",I:["{{sequence_number}}"]}]}]}]});b&&this.O(this.ia["html5-video-info-panel-close"],"click",this.hide);this.A=new bT;g.J(this,this.A);this.ma("bandwidth_sparkline",this.A);this.C=new bT;g.J(this,this.C);this.ma("live_latency_sparkline",this.C);this.B=new bT;g.J(this,this.B);this.ma("buffer_health_sparkline",this.B);this.D=new bT;g.J(this,this.D);this.ma("network_activity_sparkline",
this.D);this.F=new g.O(this.H,500,this);g.J(this,this.F);this.o=a};
eT=function(a,b){g.I.call(this);this.A=a||window.NaN;this.g=b||null;this.o=[]};
g.fT=function(a){return QI(a)?(a.fetch=0,new g.PI(a)):new g.uG(a)};
gT=function(a){g.I.call(this);this.g=null;for(var b=[],c=0;100>=c;c++)b.push(c/100);b={threshold:b};(this.o=window.IntersectionObserver?new window.IntersectionObserver((0,g.z)(this.A,this),b):null)&&this.o.observe(a)};
hT=function(a){g.X.call(this,{G:"div",L:"ytp-bezel",P:{role:"status","aria-label":"{{label}}"},I:[{G:"div",L:"ytp-bezel-icon",I:["{{icon}}"]}]});this.A=new g.O(this.show,10,this);g.J(this,this.A);this.o=new g.O(this.hide,500,this);g.J(this,this.o);this.M=a;this.hide()};
jT=function(a,b){if(b)g.T(g.LN(a.M),64)||iT(a,js(),g.Q("YTP_PLAY"));else{var c=a.M.getVideoData();c.va&&!c.re?iT(a,os(),g.Q("YTP_STOP")):iT(a,is(),g.Q("YTP_PAUSE"))}};
kT=function(a,b,c){0>=b?(c=ts(),b=g.Q("YTP_SCREENREADER_VOLUME_MUTED")):(c=c?rs():qs(),b=Math.floor(b)+"% "+g.Q("YTP_SCREENREADER_VOLUME_SETTING"));iT(a,c,b)};
lT=function(a,b,c){c=c?g.Xr?{G:"div",X:["ytp-icon","ytp-icon-fast-rewind"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.Xr?{G:"div",X:["ytp-icon","ytp-icon-fast-forward"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]};b=g.Q("YTP_PLAYBACK_SPEED_CHANGED",
{RATE:b});iT(a,c,b)};
mT=function(a){iT(a,ks(),g.Q("YTP_PREVIOUS"))};
iT=function(a,b,c){a.ma("label",void 0===c?"":c);a.ma("icon",b);g.xp(a.o);a.A.start()};
nT=function(a){var b=g.V(a),c=["ytp-large-play-button","ytp-button"],d=b.experiments.A("large_play_button_src"),e=b.experiments.A("large_play_button_hover_src");if(b.F&&b.Xa)var f=[{G:"div",L:"ytp-large-play-button-circle",P:{style:"background-color: "+b.Xa}},g.Xr?{G:"div",X:["ytp-icon","ytp-icon-dni-large-play-button"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},I:[{G:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}];else if(d&&e&&
!b.Mb){var k=b.V?e:d;c.push("ytp-red2")}else b.V&&!b.Mb?f=[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-large-play-button-hover"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},I:[{G:"path",L:"ytp-large-play-button-bg",P:{d:"m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z",
fill:"#cc181e"}},{G:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}},{G:"path",P:{d:"M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z",fill:"#ccc"}}]}]:(b.isMobile&&c.push("ytp-touch-device"),f=[b.Mb?g.Xr?{G:"div",X:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},I:[{G:"path",L:"ytp-large-play-button-bg",P:{"clip-rule":"evenodd",d:"M59.6,1.35c0.26,.5,.4,1.13,.4,1.9v53.5c0,.76-0.13,1.4-0.4,1.9c-0.5,.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.33-0.43-2.8-1.3C0.15,58.16,0,57.51,0,56.75V3.25c0-0.83,.16-1.5,.5-2C1,.41,1.91,0,3.25,0h53.5C58.15,0,59.1,.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z",
fill:"#1f1f1f","fill-rule":"evenodd"}},{G:"path",P:{d:"M21,41.65 L21,18 L43.7,29.85 L21,41.65 Z",fill:"#fff"}}]}:g.Xr?{G:"div",X:["ytp-icon","ytp-icon-large-play-button"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},I:[{G:"path",L:"ytp-large-play-button-bg",P:{d:"m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z",
fill:"#1f1f1e","fill-opacity":"0.81"}},{G:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}},{G:"path",P:{d:"M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z",fill:"#ccc"}}]}]);g.X.call(this,{G:"div",L:"ytp-cued-thumbnail-overlay",I:[{G:"div",L:"ytp-cued-thumbnail-overlay-image"},{G:"button",X:c,P:k?{style:"background: no-repeat center/100% url("+k+");"}:null,I:f}]});k&&(this.ba("mouseover",function(){this.Lh.style.backgroundImage="url("+e+")"}),this.ba("mouseout",
function(){this.Lh.style.backgroundImage="url("+d+")"}));
this.C=new g.iu(this);g.J(this,this.C);this.o=a;this.D=this.ia["ytp-cued-thumbnail-overlay-image"];this.Lh=this.ia["ytp-large-play-button"];this.B=new g.fR(this,250);g.J(this,this.B);this.A=new g.O(this.xs,0,this);g.J(this,this.A);this.xs();this.O(a,"presentingplayerstatechange",this.WB);this.O(a,"ypcStateChanged",this.LG);jE(g.V(a))&&this.O(a,"videoplayerreset",this.VB)};
pT=function(a,b){g.iu.call(this);this.M=a;this.A=b;this.o=new window.Set;this.g=window.navigator.mediaSession;oT(this,"play",function(){jT(b,!0);a.gc()});
oT(this,"pause",function(){jT(b,!1);a.Ub()});
oT(this,"seekbackward",function(){iT(b,ms());a.pd(-5*a.Tb())});
oT(this,"seekforward",function(){iT(b,es());a.pd(5*a.Tb())});
this.O(a,"videodatachange",this.C);this.O(a,"presentingplayerstatechange",this.B);this.C()};
oT=function(a,b,c){a.g.setActionHandler(b,c?(0,g.z)(c,a):null);a.o.add(b)};
qT=function(a){g.X.call(this,{G:"div",L:"ytp-paid-content-overlay",P:{"aria-live":"assertive","aria-atomic":"true"}});this.J=new g.X({G:"div",X:["ytp-button","ytp-paid-content-overlay-text"]});g.J(this,this.J);this.J.na(this.element);this.M=a;this.A=null;this.F=!1;this.C=new g.fR(this.J,250,!1,100);g.J(this,this.C);this.D=this.o=null;this.B={};this.H=0;this.O(a,"videodatachange",this.T);this.O(a,"presentingplayerstatechange",this.N)};
rT=function(a,b){var c=QG(b),d=RG(b);a.o?b.videoId&&b.videoId!=a.A&&(g.xp(a.o),a.A=b.videoId,c=a.B[b.videoId]||0,a.F=!!d&&3E3>c):c&&d&&(a.o=new g.O(a.K,d,a),g.J(a,a.o),g.Sd(g.qd("ytp-paid-content-overlay-text",a.element),c))};
sT=function(a,b){a.o&&g.T(b,8)&&a.F&&(a.F=!1,a.C.show(),a.H=(0,g.F)(),a.o.start())};
uT=function(a){g.X.call(this,{G:"div",L:"ytp-spinner",I:[hS(),{G:"div",L:"ytp-spinner-message",I:[g.Q("YTP_PLAYBACK_STALLED_AT_START")]}]});this.B=this.ia["ytp-spinner-message"];this.A=a;this.o=new g.O(this.show,500,this);g.J(this,this.o);this.O(a,"presentingplayerstatechange",this.C);this.O(a,"onFrescaStateChange",this.D);this.O(a,"playbackstalledatstart",this.F);tT(this,g.LN(a))};
tT=function(a,b){if(g.T(b,128))var c=0;else!(c=g.T(b,16))&&(c=g.T(b,1))&&(c=g.FN(a.A).D,c=!(c&&c.loaded));c?a.o.start():a.hide()};
vT=function(a,b,c,d){d=void 0===d?!1:d;g.eR.call(this,b);this.M=a;this.Z=d;this.K=null;this.J=new g.iu(this);g.J(this,this.J);this.N=new g.fR(this,c,!0);g.J(this,this.N);this.C=null};
wT=function(a){a.C&&(window.document.activeElement&&g.Rd(a.element,window.document.activeElement)&&(g.Vd(a.C),a.C.focus()),a.C.removeAttribute("aria-expanded"),a.C=null);g.ku(a.J);a.K=null};
xT=function(a){return a.g&&3!=a.N.g};
zT=function(a){var b=g.V(a).experiments.A("mweb_muted_autoplay_animation"),c=[],d=[];"none"!=b&&(c.push("ytp-unmute-animated"),d.push({G:"div",X:["ytp-unmute-box"]}),"expand"==b?c.push("ytp-unmute-expand"):"shrink"==b&&c.push("ytp-unmute-shrink"));vT.call(this,a,{G:"button",X:["ytp-unmute","ytp-popup","ytp-button"].concat(c),I:[{G:"div",L:"ytp-unmute-inner",I:[{G:"div",X:["ytp-unmute-icon"],I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-volume-muted-dark"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{G:"div",X:["ytp-unmute-text"],I:[g.Q("YTP_TAP_TO_UNMUTE")]}].concat(d)}]},100);this.o=a;this.B=this.A=!1;this.O(a,"mutedautoplaychange",this.D,this);this.ba("click",this.onClick,this);a=a.app.ka;g.LO(this,a);a&&yT(this)};
yT=function(a){a.B||(a.B=!0,g.TN(a.o,"mutedAutoplayImpression",{}))};
AT=function(a){g.iu.call(this);g.Wr();var b=g.V(a),c=g.MN(a);this.g=a;this.qb=!1;this.N=null;this.Aa=!1;var d=new nT(a);g.J(this,d);g.gO(a,d.element,4);var e=new uT(a);g.J(this,e);g.gO(a,e.element,4);this.F=new hT(a);g.J(this,this.F);g.gO(a,this.F.element,4);var f=a.getVideoData();this.B=new cS(c,(0,g.z)(this.OB,this),f,b.useTabletControls);g.J(this,this.B);this.B.subscribe("autohideupdate",this.Gn,this);var k=new qT(a);g.J(this,k);g.gO(a,k.element,4);this.Y=new zT(a);g.J(this,this.Y);g.gO(this.g,
this.Y.element,2);this.Wa=!1;this.O(a,"mutedautoplaychange",this.PB);this.ca=new g.O(this.ts,200,this);g.J(this,this.ca);this.Ha=f.videoId;this.D=null;this.K=!1;this.Va=null;this.pa=[];f=a.getRootNode();f.setAttribute("aria-label",g.Q("YTP_PLAYER_NORMAL"));switch(b.color){case "white":g.L(f,"ytp-color-white")}!g.V(a).experiments.g("disable_mediasession2")&&"mediaSession"in window.navigator&&!window.navigator.mediaSession.metadata&&window.navigator.mediaSession.setActionHandler&&(f=new pT(a,this.F),
g.J(this,f));this.O(a,"appresize",this.Id);this.O(a,"presentingplayerstatechange",this.wF);this.O(a,"videodatachange",this.rs);this.O(a,"videoplayerreset",this.uF);this.O(a,"autonavvisibility",this.sg,this);this.O(a,"minimized",this.Fe,this);this.O(a,"onFrescaStateChange",this.Fe,this);this.O(c,"click",this.OF,this);this.O(c,"dblclick",this.PF,this);b.Aa&&(this.O(c,"gesturechange",this.QF,this),this.O(c,"gestureend",this.RF,this));this.Xa=[c.containerElement,e.element,d.element,this.F.element]};
BT=function(a,b){if(!b)return!1;var c=a.g.app.D.la();if(c&&g.Rd(c,b))return c.controls;for(c=0;c<a.Xa.length;c++)if(g.Rd(a.Xa[c],b))return!1;return g.mp(b,"ytp-player-content")||g.mp(b,"html5-endscreen")||b==a.g.getRootNode()?!1:!0};
CT=function(a,b,c){a.g.isFullscreen()?c<1-b&&g.ON(a.g):c>1+b&&g.ON(a.g)};
DT=function(a){g.eR.call(this,{G:"div",L:"ytp-ad-persistent-progress-bar-container",I:[{G:"div",L:"ytp-ad-persistent-progress-bar"}]});this.A=a;this.D=this.ia["ytp-ad-persistent-progress-bar"];this.o=null;this.O(a,"presentingplayerstatechange",this.C);this.hide();this.C()};
FT=function(a,b,c){var d={"aria-label":g.Q("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-owns":"iv-drawer","aria-haspopup":!0},e={G:"span",L:"ytp-cards-button-icon-default",I:[{G:"div",L:"ytp-cards-button-icon",I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-info-card"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{G:"div",L:"ytp-cards-button-title",I:[g.Q("YTP_CARDS_BUTTON_INFO")]}]};d={G:"button",X:["ytp-button","ytp-cards-button"],P:d,I:[e,{G:"span",L:"ytp-cards-button-icon-shopping",I:[{G:"div",L:"ytp-cards-button-icon",I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-shopping-card"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",L:"ytp-svg-shadow",P:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{G:"path",L:"ytp-svg-fill",P:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{G:"path",L:"ytp-svg-shadow-fill",P:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{G:"div",
L:"ytp-cards-button-title",I:[g.Q("YTP_CARDS_BUTTON_SHOPPING")]}]}]};g.X.call(this,d);this.M=a;this.B=b;this.C=c;this.o=null;this.A=new g.fR(this,250,!0,100);g.J(this,this.A);a=g.V(this.M);b=g.MN(this.M).Ga().width;b=a.o&&480<b;a.experiments.g("enable_cards_button_title")&&g.N(this.C,"ytp-show-cards-title",b);this.hide();this.ba("click",this.D);this.ba("mouseover",this.F);ET(this,!0)};
ET=function(a,b){b?a.o=GT(a.B.o,a.element):(a.o(),a.o=null)};
HT=function(a,b){g.X.call(this,{G:"div",L:"ytp-cards-teaser",I:[{G:"div",L:"ytp-cards-teaser-box"},{G:"div",L:"ytp-cards-teaser-text",I:[{G:"span",L:"ytp-cards-teaser-label",I:["{{text}}"]}]}]});this.M=a;this.C=new g.fR(this,250,!1,250);g.J(this,this.C);this.F=b;this.o=null;this.J=new g.O(this.eF,300,this);this.H=new g.O(this.bF,2E3,this);this.K=new g.fp(null);this.D=[];this.B=this.A=null;this.O(b.element,"mouseover",this.us);this.O(b.element,"mouseout",this.kf);this.O(a,"cardsteasershow",this.iG);
this.O(a,"cardsteaserhide",this.Zh);this.O(a,"cardstatechange",this.tv);this.O(a,"presentingplayerstatechange",this.tv);this.ba("click",this.RB);this.ba("mouseenter",this.QB)};
IT=function(a,b){a.ma("text",b.teaserText);a.element.setAttribute("dir",g.gp(a.K,b.teaserText));a.C.show();a.A=new g.O(function(){g.L(this.M.getRootNode(),"ytp-cards-teaser-shown")},0,a);
a.A.start();ET(a.F,!1);a.o=new g.O(a.Zh,580+b.durationMs,a);a.o.start();a.D.push(a.ba("mouseover",a.us,a));a.D.push(a.ba("mouseout",a.kf,a))};
g.KT=function(a,b,c,d){g.eR.call(this,a);this.priority=b;c&&g.JT(this,c);d&&this.zb(d)};
g.LT=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex=0);return{G:c?"a":"div",X:b,P:a,I:[{G:"div",L:"ytp-menuitem-label",I:["{{label}}"]},{G:"div",L:"ytp-menuitem-content",I:["{{content}}"]}]}};
g.JT=function(a,b){a.ma("label",b)};
MT=function(a,b,c,d,e){var f={G:"div",L:"ytp-panel"};if(c){var k="ytp-panel-title";var l={G:"div",L:"ytp-panel-header",I:[{G:"button",X:["ytp-button",k],I:[c]}]};if(e){var m="ytp-panel-options";l.I.push({G:"button",X:["ytp-button",m],I:[d]})}f.I=[l]}g.eR.call(this,f);this.U=b;b.na(this.element);this.da=!1;c&&(this.O(this.ia[k],"click",this.ha),this.da=!0,e&&this.O(this.ia[m],"click",e));b.subscribe("size-change",this.ca,this);this.O(a,"fullscreentoggled",this.ca)};
g.NT=function(a,b,c,d,e){b=new g.eR({G:"div",L:"ytp-panel-menu",P:{role:"menu",id:void 0===b?null:b}});MT.call(this,a,b,c,d,e);this.F=b;g.J(this,this.F);this.Ia=[]};
g.PT=function(a,b,c){if(void 0===c?0:c)a.Ia.push(b),a.F.element.appendChild(b.element);else{c=g.Gb(a.Ia,b,OT);if(0<=c)return;c=~c;g.Db(a.Ia,c,0,b);Jd(a.F.element,b.element,c)}b.subscribe("size-change",a.V,a);a.F.R("size-change")};
g.QT=function(a,b){b.unsubscribe("size-change",a.V,a);a.fa()||(g.xb(a.Ia,b),a.F.element.removeChild(b.element),a.F.R("size-change"))};
g.RT=function(a){for(var b=g.na(a.Ia),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.V,a);a.Ia=[];g.Hd(a.F.element);a.F.R("size-change")};
OT=function(a,b){return b.priority-a.priority};
g.ST=function(a,b){vT.call(this,a,{G:"div",X:["ytp-popup",b||null]},100,!0);this.o=[];this.size=new g.hd(0,0);this.D=this.F=null;this.T=this.U=0;this.ba("keydown",this.iC)};
UT=function(a){g.Jh(a.element,a.U||"100%",a.T||"100%");var b=TT(a);b.element.style.width="";b.element.style.height="";b.element.style.maxWidth="100%";b.element.style.maxHeight="100%";b.U.element.style.height="";var c=g.Lh(b.element);c.width+=1;c.height+=1;b.element.style.width=c.width+"px";b.element.style.height=c.height+"px";b.element.style.maxWidth="";b.element.style.maxHeight="";var d=0;b.da&&(d=g.Lh(b.ia["ytp-panel-header"]).height);b.U.element.style.height=c.height-d+"px";a.size=c};
g.WT=function(a,b){var c=a.o[a.o.length-1];a.o.push(b);VT(a,c,b)};
g.XT=function(a){var b=a.o.pop(),c=a.o[0];a.o=[c];VT(a,b,c,!0)};
VT=function(a,b,c,d){ZT(a);TT(a);g.mp(c.element,"ytp-panel-animate-back")||g.mp(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.ti,a),b.unsubscribe("back",a.ud,a));c.subscribe("size-change",a.ti,a);c.subscribe("back",a.ud,a);if(a.g){g.L(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.na(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;UT(a);g.Jh(a.element,e);a.F=new g.O(g.A(a.yH,b,c,d),20,a);a.F.start()}else c.na(a.element),
b&&b.detach()};
TT=function(a){return a.o[a.o.length-1]};
ZT=function(a){a.F&&g.wp(a.F);a.D&&g.wp(a.D)};
$T=function(a){var b=g.LT({"aria-haspopup":!0});g.KT.call(this,b,a);this.ba("keydown",this.o)};
aU=function(a,b){a.element.setAttribute("aria-haspopup",b)};
bU=function(a,b){var c=g.LT({role:"menuitemcheckbox","aria-checked":!1});g.KT.call(this,c,b,a,{G:"div",L:"ytp-menuitem-toggle-checkbox"});this.o=!1;this.ba("click",this.J)};
cU=function(a,b){a.o=b;a.element.setAttribute("aria-checked",a.o)};
fU=function(a,b,c){g.NT.call(this,a);this.M=a;this.N=b;this.K=c;this.B=new $T(8);g.J(this,this.B);g.PT(this,this.B,!0);this.B.ba("click",this.uE,this);jO(a,this.B.element,this.B,28659);this.A=new $T(7);g.J(this,this.A);g.PT(this,this.A,!0);this.A.ba("click",this.tE,this);jO(a,this.A.element,this.A,28660);this.o=new $T(6);g.J(this,this.o);g.PT(this,this.o,!0);this.o.ba("click",this.rE,this);jO(a,this.o.element,this.o,28658);this.D=new bU(g.Q("YTP_LOOP"),5);g.J(this,this.D);g.PT(this,this.D,!0);this.D.ba("click",
this.JE,this);jO(a,this.D.element,this.D,28661);this.T=new g.KT(g.LT({href:"{{href}}",target:"_blank"},void 0,!0),4,g.Q("YTP_TROUBLESHOOT_ISSUE"));g.J(this,this.T);g.PT(this,this.T,!0);this.T.ba("click",this.IF,this);this.J=new $T(3);g.J(this,this.J);g.PT(this,this.J,!0);this.J.ba("click",this.qE,this);b=new g.KT(g.LT(),2,g.Q("YTP_SHOW_VIDEO_INFO"));g.J(this,b);g.PT(this,b,!0);b.ba("click",this.ZF,this);this.H=new g.eR({G:"div",X:["ytp-copytext","ytp-no-contextmenu"],P:{draggable:!1,tabindex:1},I:["{{text}}"]});
g.J(this,this.H);this.H.ba("click",this.ZD,this);this.Z=new MT(a,this.H);g.J(this,this.Z);this.C=null;b=window.document.queryCommandSupported&&window.document.queryCommandSupported("copy");g.bt&&g.zc(43)&&(b=!0);g.fC&&!g.zc(41)&&(b=!1);b&&(this.C=new g.X({G:"textarea",L:"ytp-html5-clipboard"}),g.J(this,this.C),this.C.na(this.element));this.O(a,"loopchange",this.IE);this.O(a,"videodatachange",this.TB);dU(this);eU(this,this.M.getVideoData())};
gU=function(a,b){if(a.C){a.C.element.value=b;a.C.element.select();try{var c=window.document.execCommand("copy")}catch(d){}}c?a.K.ob():(a.H.zb(b,"text"),g.WT(a.K,a.Z),KO(a.H.element),a.C&&(a.C=null,dU(a)));return c};
eU=function(a,b){var c=g.V(a.M),d=2!=a.M.Fa()||b.isListed;d=!c.H&&!!b.videoId&&d;"play"!=c.g?c="https://support.google.com/youtube/?p=report_playback":(c={contact_type:"playbackissue",html5:1,plid:b.playbackId,ei:b.eventId,v:b.videoId,p:"movies_playback"},b.Ca&&(c.fmt=Wx(b.Ca)),b.clientPlaybackNonce&&(c.cpn=b.clientPlaybackNonce),b.lf&&(c.partnerid=b.lf),c=g.Rg("//support.google.com/googleplay/",c));g.LO(a.o,d&&b.allowEmbed);g.LO(a.B,d);g.LO(a.A,d&&!b.va);a.T.zb(c,"href")};
dU=function(a){var b=!!a.C;g.JT(a.J,g.Q(b?"YTP_COPY_DEBUG_INFO":"YTP_GET_DEBUG_INFO"));aU(a.J,!b);g.JT(a.o,g.Q(b?"YTP_EMBED_COPY":"YTP_GET_EMBED"));aU(a.o,!b);g.JT(a.B,g.Q(b?"YTP_COPY_VIDEO_URL":"YTP_GET_VIDEO_URL"));aU(a.B,!b);g.JT(a.A,g.Q(b?"YTP_COPY_VIDEO_URL_AT_TIME":"YTP_GET_VIDEO_URL_AT_TIME"));aU(a.A,!b)};
hU=function(a,b){g.lO(a.M,a.o.element,b);g.lO(a.M,a.B.element,b);g.lO(a.M,a.A.element,b);g.lO(a.M,a.D.element,b)};
jU=function(a,b){g.ST.call(this,a);this.A=a;this.V=b;this.B=new g.iu(this);g.J(this,this.B);this.H=null;jO(a,this.element,this,28656);g.L(this.element,"ytp-contextmenu");g.V(a).F&&g.L(this.element,"ytp-dni");iU(this);this.hide()};
iU=function(a){g.ku(a.B);"gvn"!=g.V(a.A).g&&a.B.O(g.MN(a.A),"contextmenu",a.YD)};
kU=function(a){a.A.isFullscreen()?g.gO(a.A,a.element,9):a.na(window.document.body)};
lU=function(a,b,c,d,e,f){g.iu.call(this);this.g=a;this.F=c;this.C=d;this.o=e;this.D=f;this.B=new g.O(g.A(this.zs,!1),1E3,this);g.J(this,this.B);this.A="";a=g.A(this.Wn,!1);this.O(b,"mousedown",a);this.O(c.element,"mousedown",a);this.O(b,"keydown",this.Jq);this.O(c.element,"keydown",this.Jq);this.O(b,"keyup",this.Kq);this.O(c.element,"keyup",this.Kq)};
nU=function(a,b,c){var d=!1,e=g.V(a.g);if(!e.oe){switch(b){case 80:c&&(mT(a.o),a.g.Sh(),d=!0);break;case 78:c&&(iT(a.o,gs(),g.Q("YTP_NEXT")),a.g.Jg(),d=!0);break;case 74:a.g.Kc()&&(iT(a.o,g.Xr?{G:"div",X:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.pd(-10*a.g.Tb()),d=!0);break;case 76:a.g.Kc()&&(iT(a.o,g.Xr?{G:"div",X:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.pd(10*a.g.Tb()),d=!0);break;case 77:a.g.yc()?(a.g.ee(),kT(a.o,a.g.getVolume(),!1)):(a.g.mute(),kT(a.o,0,!0));d=!0;break;case 75:d=!VH(g.LN(a.g));jT(a.o,d);d?a.g.gc():a.g.Ub();d=!0;break;case 190:if(c){if(e.Qa)for(b=a.g.Hg(),c=a.g.Tb(),e=0;e<b.length-1;e++)b[e]==c&&(d=b[e+1],a.g.de(d,!0),lT(a.o,d,!1),d=!0)}else a.g.Kc()&&(mU(a,1),d=!0);break;case 188:if(c){if(e.Qa)for(b=a.g.Hg(),c=a.g.Tb(),e=b.length-1;1<=e;e--)b[e]==c&&(d=b[e-1],a.g.de(d,!0),lT(a.o,d,!0),d=!0)}else a.g.Kc()&&(mU(a,-1),d=!0);break;
case 70:kS(a.g)&&(g.ON(a.g),d=!0)}d&&a.C.yb(2,!0)}return d};
pU=function(a,b,c,d){if(g.FN(a.g).g){for(var e=a.g.Yf(),f,k=0;k<g.oU.length;k++){var l=g.oU[k];if(l.option==b){f=l.options;break}}var m;for(k=0;k<f.length;k++)f[k].option==e[b]&&(m=k);if(d)if(c){if(0==m)return!1}else if(m==f.length-1)return!1;d={};d[b]=f[(m+(c?f.length-1:1))%f.length].option;a.g.Pj(d);a.zs(!0);a.B.start();return!0}return!1};
mU=function(a,b){a.g.Kc();if(g.T(g.LN(a.g),4)){var c=a.g.getVideoData().Ca;c&&(c=c.video)&&a.g.pd(b/(c.fps||30))}};
rU=function(a,b){g.X.call(this,{G:"div",L:"ytp-pause-overlay",I:[{G:"div",L:"ytp-suggestions"}]});this.o=a;this.Z=b;this.B=new g.iu(this);g.J(this,this.B);this.J=new g.fR(this,250,!1,100);g.J(this,this.J);var c=g.V(a);this.D=[];this.A=[];this.F=0;this.da=c.o&&!c.F;this.V=!1;this.T=new g.X({G:"button",X:["ytp-button","ytp-previous"],P:{"aria-label":g.Q("YTP_PREVIOUS")},I:[g.Zr()]});g.J(this,this.T);this.T.na(this.element);this.T.ba("click",this.kC,this);c=g.bt||g.uh?{style:"will-change: opacity"}:
null;this.Y=new qU((0,g.z)(this.vv,this));g.J(this,this.Y);this.U=this.C=0;this.N=this.ia["ytp-suggestions"];for(var d=0;16>d;d++){var e=new g.X({G:"a",L:"ytp-suggestion-link",P:{href:"{{link}}",target:"_blank"},I:[{G:"div",L:"ytp-suggestion-image"},{G:"div",L:"ytp-suggestion-overlay",P:c,I:[{G:"div",L:"ytp-suggestion-title",I:["{{title}}"]},{G:"div",L:"ytp-suggestion-author",I:["{{author_and_views}}"]},{G:"div",L:"ytp-suggestion-duration",I:["{{duration}}"]}]}]});g.J(this,e);e.na(this.N);var f=e.ia["ytp-suggestion-link"];
g.rh(f,"transitionDelay",d/20+"s");this.B.O(f,"click",g.A(this.TD,d));this.D.push(e)}this.K=new g.X({G:"button",X:["ytp-button","ytp-next"],P:{"aria-label":g.Q("YTP_NEXT")},I:[g.$r()]});g.J(this,this.K);this.K.na(this.element);this.K.ba("click",this.jC,this);c={"aria-label":g.Q("YTP_CLOSE")};c=new g.X({G:"button",X:["ytp-button","ytp-collapse"],P:c,I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-small-close"]}:{G:"svg",P:{height:"100%",viewBox:"0 0 16 16",width:"100%"},I:[{G:"path",P:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
fill:"#fff"}}]}]});g.J(this,c);c.na(this.element);c.ba("click",this.PD,this);this.H=new g.X({G:"button",X:["ytp-button","ytp-expand"],I:[g.Q("YTP_MORE_VIDEOS")]});g.J(this,this.H);this.H.na(this.element);this.H.ba("click",this.RD,this);this.B.O(this.o,"appresize",this.un);this.B.O(this.o,"fullscreentoggled",this.lC);this.B.O(this.o,"presentingplayerstatechange",this.mC);this.B.O(this.o,"videodatachange",this.nC);this.un(g.MN(this.o).Ga())};
tU=function(a,b){var c=g.Zc(b,a.F-a.A.length*(a.U+8),0);a.Y.start(a.C,c,1E3);a.C=c;sU(a)};
sU=function(a){var b=a.C,c=a.F-a.A.length*(a.U+8);g.N(a.element,"ytp-scroll-min",0<=b);g.N(a.element,"ytp-scroll-max",b<=c)};
uU=function(a){for(var b=g.V(a.o),c=0;c<a.A.length;c++){var d=a.A[c].wb(),e=a.D[c],f=d.shortViewCount?d.author+" \u2022 "+d.shortViewCount:d.author;e.element.style.display="";e.update({author_and_views:f,duration:d.lengthSeconds?g.pR(d.lengthSeconds):0,link:d.xj(b),title:d.title});e=e.ia["ytp-suggestion-image"];d=d.ub(b);e.style.backgroundImage=d?"url("+d+")":""}for(;c<a.D.length;c++)a.D[c].element.style.display="none";sU(a)};
qU=function(a){g.I.call(this);this.C=a;this.B=new dq(0,0,.4,0,.2,1,1,1);this.o=new g.tp(this.A,window,this);g.J(this,this.o)};
vU=function(a,b,c){var d=b.wb(c),e=g.V(a),f=d.ub(e,"default.jpg");g.X.call(this,{G:"a",X:["ytp-video-menu-item","ytp-button"],P:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},I:[{G:"div",L:"ytp-video-menu-item-index",I:[""+(c+1)]},{G:"div",L:"ytp-video-menu-item-now-playing",I:["\u25b6"]},{G:"div",L:"ytp-video-menu-item-thumbnail",P:{style:f?"background-image: url("+f+");":null}},{G:"div",L:"ytp-video-menu-item-title",I:[d.title]},{G:"div",
L:"ytp-video-menu-item-author",I:[d.author]}]});this.o=a;this.bb=c;this.ba("click",this.A)};
wU=function(a){vT.call(this,a,{G:"div",L:"ytp-playlist-menu",P:{role:"dialog",id:CO()},I:[{G:"div",L:"ytp-playlist-menu-header",I:[{G:"div",L:"ytp-playlist-menu-title",I:[{G:"a",L:"ytp-playlist-menu-title-name",P:{href:"{{playlisturl}}"},I:["{{title}}"]},{G:"button",X:["ytp-playlist-menu-close","ytp-button"],P:{"aria-label":g.Q("YTP_CLOSE")},I:[g.ds()]}]},{G:"div",L:"ytp-playlist-menu-subtitle",I:["{{subtitle}}"]}]},{G:"div",L:"ytp-playlist-menu-items",P:{role:"menu"}}]},250);this.O(this.ia["ytp-playlist-menu-close"],
"click",this.ob);this.O(this.ia["ytp-playlist-menu-title-name"],"click",this.lG);this.A=a;this.B=this.H=this.o=null;this.Ia=this.ia["ytp-playlist-menu-items"];this.F=new g.iu(this);g.J(this,this.F);this.D=[];this.hide()};
xU=function(a,b){if(a.o!=b)if(a.o&&a.o.unsubscribe("shuffle",a.mk,a),a.o=b,a.H=null,b){b.subscribe("shuffle",a.mk,a);var c=b.author;a.update({title:b.title,subtitle:g.Q(c?"YTP_PLAYLIST_AUTHOR_AND_POSITION":"YTP_PLAYLIST_POSITION",{AUTHOR:c,CURRENT_POSITION:b.bb+1,PLAYLIST_LENGTH:b.getLength()}),playlisturl:a.A.getVideoUrl(!0)});a.mk()}else a.g&&a.hide();else a.o&&a.mk()};
yU=function(a,b,c){var d={title:"{{title}}","aria-owns":c.element.id,"aria-haspopup":!0,"aria-label":g.Q("YTP_PLAYLIST")};g.X.call(this,{G:"button",X:["ytp-playlist-menu-button","ytp-button"],P:d,I:[{G:"div",L:"ytp-playlist-menu-button-icon",I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-playlist"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{G:"div",L:"ytp-playlist-menu-button-text",I:["{{text}}"]}]});this.B=a;this.o=null;this.C=b.o;this.O(a,"videodatachange",this.D);this.O(a,"onPlaylistUpdate",this.D);this.O(a,"presentingplayerstatechange",this.A);this.O(a,"appresize",this.A);this.hide();this.D();g.Je(this,GT(this.C,this.element));this.ba("click",(0,g.z)(c.tf,c,this.element,!1))};
zU=function(a,b){g.X.call(this,{G:"button",X:["ytp-replay-button","ytp-button"],P:{title:g.Q("YTP_REPLAY")},I:[ls()]});this.o=a;this.O(a,"presentingplayerstatechange",this.B);this.ba("click",this.A,this);var c=g.LN(a);g.LO(this,g.T(c,2));GT(b.o,this.element)};
AU=function(a,b){var c=CO();c={G:"div",L:"ytp-share-panel",P:{id:CO(),role:"dialog","aria-labelledby":c},I:[{G:"button",X:["ytp-share-panel-close","ytp-button"],P:{title:g.Q("YTP_CLOSE")},I:[g.ds()]},{G:"div",L:"ytp-share-panel-inner-content",I:[{G:"div",L:"ytp-share-panel-title",P:{id:c},I:[g.Q("YTP_SHARE")]},{G:"a",X:["ytp-share-panel-link","ytp-no-contextmenu"],P:{href:"{{link}}",target:"_blank",title:g.Q("YTP_SHARE_LINK"),"aria-label":g.Q("YTP_SHARE_LINK")},I:["{{linkText}}"]},{G:"label",L:"ytp-share-panel-include-playlist",
I:[{G:"input",L:"ytp-share-panel-include-playlist-checkbox",P:{type:"checkbox",checked:!0}},g.Q("YTP_SHARE_WITH_PLAYLIST_2")]},{G:"div",L:"ytp-share-panel-loading-spinner",I:[hS()]},{G:"div",L:"ytp-share-panel-service-buttons",I:["{{buttons}}"]},{G:"div",L:"ytp-share-panel-error",I:[g.Q("YTP_SHARE_PANEL_ERROR")]}]}]};vT.call(this,a,c,250);this.o=a;this.A=b.o;this.B=[];this.T=this.ia["ytp-share-panel-inner-content"];this.F=this.ia["ytp-share-panel-close"];this.O(this.F,"click",this.ob);g.Je(this,GT(this.A,
this.F));this.H=this.ia["ytp-share-panel-include-playlist-checkbox"];this.O(this.H,"click",this.Hs);this.D=this.ia["ytp-share-panel-link"];g.Je(this,GT(this.A,this.D));this.ba("click",this.rF);this.O(a,"videoplayerreset",this.hide);this.O(a,"fullscreentoggled",this.CC);this.hide()};
BU=function(a){switch(a){case "facebook":return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-share-facebook"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},I:[{G:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{G:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};case "googleplus":return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-share-googleplus"]}:{G:"svg",P:{height:"100%",version:"1.0",viewBox:"0 0 38 38",width:"100%"},I:[{G:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{G:"path",P:{d:"M34.3,0H3.7C1.7,0,0,1.7,0,3.7v30.5c0,2,1.7,3.7,3.7,3.7h30.5c2,0,3.7-1.7,3.7-3.7V3.7C38,1.7,36.3,0,34.3,0z M13.3,28.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c2.6,0,4.7,.9,6.4,2.5l-2.7,2.7c-1-0.9-2.2-1.4-3.6-1.4 c-3.1,0-5.6,2.6-5.6,5.7s2.5,5.7,5.6,5.7c2.8,0,4.7-1.6,5.1-3.8h-5.1v-3.6h8.9c0.1,.6,.2,1.3,.2,2C22.4,24.6,18.8,28.5,13.3,28.5 z M34.2,19.6H31v3.2h-2.2v-3.2h-3.2v-2.2h3.2v-3.2H31v3.2h3.2V19.6z",
fill:"#dc4537"}}]};case "twitter":return g.Xr?{G:"div",X:["ytp-icon","ytp-icon-share-twitter"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},I:[{G:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{G:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};default:return null}};
CU=function(a){for(var b=g.na(a.B),c=b.next();!c.done;c=b.next())c=c.value,c.detach(),g.Ke(c);a.B=[]};
DU=function(a,b,c,d){g.X.call(this,{G:"button",X:["ytp-button","ytp-share-button"],P:{title:g.Q("YTP_SHARE"),"aria-haspopup":!0,"aria-owns":c.element.id},I:[{G:"div",L:"ytp-share-icon",I:["{{icon}}"]},{G:"div",L:"ytp-share-title",I:["{{share}}"]}]});this.o=a;this.A=d;this.H=c;jO(a,this.element,this,28664);this.ba("click",this.F);this.O(a,"videodatachange",this.C);this.O(a,"appresize",this.C);this.C();g.Je(this,GT(b.o,this.element))};
EU=function(a,b){g.X.call(this,{G:"button",X:["ytp-airplay-button","ytp-button"],P:{title:g.Q("YTP_AIRPLAY")},I:["{{icon}}"]});this.o=a;this.ba("click",this.B);this.O(a,"airplayactivechange",this.A);this.O(a,"airplayavailabilitychange",this.A);this.A();g.Je(this,GT(b.o,this.element))};
FU=function(a,b){g.eR.call(this,{G:"div",L:"ytp-storyboard",I:[{G:"div",L:"ytp-storyboard-filmstrip",I:[{G:"div",L:"ytp-storyboard-thumbnail"}]},{G:"div",L:"ytp-storyboard-lens",I:[{G:"div",L:"ytp-storyboard-lens-thumbnail"},{G:"div",L:"ytp-storyboard-lens-timestamp-wrapper",I:[{G:"span",L:"ytp-storyboard-lens-timestamp"}]}]}]});this.o=a;this.Z=b.o;this.T=new g.ol(this.YB,250,this);g.J(this,this.T);this.J=g.MN(a).Ga().width;this.A=this.ia["ytp-storyboard-filmstrip"];this.da=this.ia["ytp-storyboard-lens"];
this.ca=this.ia["ytp-storyboard-lens-thumbnail"];this.ha=this.ia["ytp-storyboard-lens-timestamp"];this.V=this.ia["ytp-storyboard-thumbnail"];g.Kd(this.V);this.K=0;this.U=!1;this.N=this.C=this.B=window.NaN;this.gb=this.D=null;this.F=new g.iu(this);g.J(this,this.F);this.H=new g.fR(this,100);g.J(this,this.H);this.O(this.o,"appresize",this.XB);this.O(this.o,"presentingplayerstatechange",this.ZB)};
GU=function(a,b){var c=!!a.gb;c&&a.gb.unsubscribe("l",a.Fk,a);a.gb=b&&TG(b);a.U=!!b&&b.va;a.gb?(c||(a.F.O(a.o,"videodatachange",a.aC),a.F.O(a.o,"progresssync",a.Uj),a.F.O(a.o,"videoplayerreset",a.Uj)),a.gb.subscribe("l",a.Fk,a),a.N=window.NaN,a.B=window.NaN,a.C=window.NaN,a.Uj(),a.H.show(200)):(c&&g.ku(a.F),a.T.stop(),g.bv(a.K),a.H.hide(),a.H.stop())};
HU=function(a,b,c,d){var e=a.V.cloneNode(!1);a=$E(a.gb,b,c);KR(e,a,c,d);return e};
IU=function(a){g.X.call(this,{G:"div",L:"ytp-storyboard-framepreview",I:[{G:"div",L:"ytp-storyboard-framepreview-img"}]});this.D=this.ia["ytp-storyboard-framepreview-img"];this.o=a;this.gb=null;this.C=window.NaN;this.A=new g.iu(this);g.J(this,this.A);this.B=new g.fR(this,100);g.J(this,this.B);this.O(this.o,"presentingplayerstatechange",this.dC)};
KU=function(a,b){var c=!!a.gb;a.gb=b&&TG(b);a.gb?(c||(a.A.O(a.o,"videodatachange",a.fC),a.A.O(a.o,"progresssync",a.eC),a.A.O(a.o,"appresize",a.cC)),a.C=window.NaN,JU(a),a.B.show(200)):(c&&g.ku(a.A),a.B.hide(),a.B.stop())};
JU=function(a){var b=a.o.getCurrentTime(),c=g.MN(a.o).Ga(),d=YE(a.gb,c.width);b=a.gb.g[d].Nk(b);b!=a.C&&(a.C=b,bF(a.gb,b,c.width),b=$E(a.gb,b,c.width),KR(a.D,b,c.width,c.height))};
MU=function(a,b){g.X.call(this,{G:"button",X:["ytp-fullscreen-button","ytp-button"],P:{title:"{{title}}"},I:["{{icon}}"]});this.A=a;this.D=b;this.o=null;this.B=GT(b.o,this.element);this.C=new g.O(this.Hx,2E3,this);g.J(this,this.C);this.O(a,"fullscreentoggled",this.Tu);this.O(a,"presentingplayerstatechange",this.ys);this.ba("click",this.gC);if(Pt()){var c=g.MN(this.A);this.O(c,St(),this.It);this.O(c,Tt(window.document),this.hC)}g.V(a).Aa||LU(this);this.ys();this.Tu(a.isFullscreen())};
LU=function(a){if(!a.o){var b=g.Q(null!=Mt(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],window.document.body)?"YTP_FULLSCREEN_GENERIC_ERROR":"YTP_FULLSCREEN_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/);a.o=new vT(a.A,{G:"div",X:["ytp-popup","ytp-generic-popup"],P:{role:"alert",tabindex:0},I:[b[0],{G:"a",P:{href:"https://support.google.com/youtube/answer/6276924",target:"_blank"},I:[b[2]]},b[4]]},100,!0);a.o.hide();g.J(a,a.o);a.o.subscribe("show",
(0,g.z)(a.D.Kl,a.D,a.o));g.gO(a.A,a.o.element,4);a.element.setAttribute("aria-disabled",!0);a.element.setAttribute("aria-haspopup",!0);a.B();a.B=null}};
NU=function(a){var b={G:"div",L:"ytp-multicam-menu",P:{role:"dialog"},I:[{G:"div",L:"ytp-multicam-menu-header",I:[{G:"div",L:"ytp-multicam-menu-title",I:[g.Q("YTP_SWITCH_CAMERA"),{G:"button",X:["ytp-multicam-menu-close","ytp-button"],P:{"aria-label":g.Q("YTP_CLOSE")},I:[g.ds()]}]}]},{G:"div",L:"ytp-multicam-menu-items"}]};vT.call(this,a,b,250);this.B=new g.iu(this);g.J(this,this.B);this.O(this.ia["ytp-multicam-menu-close"],"click",this.ob);this.o=a;this.Ia=this.ia["ytp-multicam-menu-items"];this.A=
[];this.hide()};
OU=function(a,b,c){g.X.call(this,{G:"button",X:["ytp-multicam-button","ytp-button"],P:{title:g.Q("YTP_SWITCH_CAMERA"),"aria-haspopup":!0,"data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-switch-camera"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});this.o=a;this.C=!1;this.A=b.o;this.D=new g.O(this.H,400,this);g.J(this,this.D);this.ba("click",(0,g.z)(c.tf,c,this.element,!1));this.O(a,"presentingplayerstatechange",g.A(this.B,!1));this.O(a,"videodatachange",this.F);this.B(!0);g.Je(this,GT(this.A,this.element))};
PU=function(){g.I.call(this);this.C=null;this.B=this.g=0;this.A=new g.tp(this.o,null,this);g.J(this,this.A)};
QU=function(a,b){if("path"==b.G)return b.P.d;if(b.I)for(var c=0;c<b.I.length;c++){var d=b.I[c];if(d&&!g.u(d)&&(d=QU(a,d)))return d}};
UU=function(a,b,c){c=QU(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=CO();b=b.getElementsByTagName("use");for(var k=0;k<b.length;k++)b[k].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=RU(e),m=RU(c);SU(a,function(a){d.setAttribute("d",TU(l,m,a))},200)};
SU=function(a,b,c){a.C=b;a.B=(0,g.Ru)();a.g=c;a.o()};
RU=function(a){var b=[];a=a.match(VU);for(var c=0;c<a.length;c++){var d=(0,window.parseFloat)(a[c]);b.push((0,window.isNaN)(d)?a[c]:d)}return b};
TU=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d=g.ta(f)?d+(f+(b[e]-f)*c):d+f}return d};
XU=function(a,b){var c=g.V(a);g.X.call(this,{G:"button",X:["ytp-mute-button","ytp-button"],P:c.J?{title:"{{title}}"}:{"aria-disabled":!0,"aria-haspopup":!0},I:["{{icon}}"]});this.ma("icon",ts());this.o=a;this.da=b.o;this.J=this.N=this.K=this.U=window.NaN;this.F=[];this.D=[];this.H=this.B=!1;g.V(this.o).V||(this.A=new g.EO({G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"defs",I:[{G:"clipPath",P:{id:"ytp-svg-volume-animation-mask"},I:[{G:"path",P:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},
{G:"path",P:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{G:"path",L:"ytp-svg-volume-animation-mover",P:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{G:"clipPath",P:{id:"ytp-svg-volume-animation-slash-mask"},I:[{G:"path",L:"ytp-svg-volume-animation-mover",P:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{G:"path",Ba:!0,X:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],P:{"clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
fill:"#fff"}},{G:"path",Ba:!0,X:["ytp-svg-fill","ytp-svg-volume-animation-hider"],P:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.J(this,this.A),this.V=this.A.ia["ytp-svg-volume-animation-speaker"],this.ka=this.V.getAttribute("d"),this.F=g.pd("ytp-svg-volume-animation-mover",this.A.element),this.D=g.pd("ytp-svg-volume-animation-hider",this.A.element));this.C=null;this.Y=new PU;g.J(this,this.Y);this.T=new PU;g.J(this,this.T);
this.ba("click",this.ha);this.O(a,"appresize",this.qc);this.O(a,"onVolumeChange",this.ca);var d=null;c.J?g.Je(this,GT(b.o,this.element)):(c=g.Q("YTP_VOLUME_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/),d=new vT(a,{G:"span",X:["ytp-popup","ytp-generic-popup"],P:{tabindex:0},I:[c[0],{G:"a",P:{href:"https://support.google.com/youtube/?p=noaudio",target:"_blank"},I:[c[2]]},c[4]]},100,!0),g.J(this,d),d.hide(),d.subscribe("show",(0,g.z)(b.Kl,b,d)),g.gO(a,d.element,4));this.Z=d;jO(a,this.element,this,
28662);this.qc(g.MN(a).Ga());WU(this,a.getVolume(),a.yc())};
WU=function(a,b,c){var d=c?0:b/100,e=g.V(a.o);if(e.V)d=0==d?ts():0<d&&.5>d?rs():qs(),d!=a.C&&(a.ma("icon",d),a.C=d);else{b=0==d?1:50<b?1:0;if(a.K!=b){var f=a.U;(0,window.isNaN)(f)?YU(a,b):SU(a.Y,(0,g.z)(function(a){YU(this,f+(this.K-f)*a)},a),250);
a.K=b}d=0==d?1:0;if(a.J!=d){var k=a.N;(0,window.isNaN)(k)?ZU(a,d):SU(a.T,(0,g.z)(function(a){ZU(this,k+(this.J-k)*a)},a),250);
a.J=d}}e.J&&(a.ma("title",c?g.Q("YTP_UNMUTE"):g.Q("YTP_MUTE")),$U(a.da))};
YU=function(a,b){a.U=b;var c=a.ka;b&&(c+=TU(aV,bV,b));a.V.setAttribute("d",c)};
ZU=function(a,b){a.N=b;for(var c=20*b,d=0;d<a.F.length;d++)a.F[d].setAttribute("transform","translate("+c+", "+c+")");var e;1==b?e=ts():e=a.A;for(c=0;c<a.D.length;c++)a.D[c].style.display=0==b?"none":"";e!=a.C&&(a.ma("icon",e),a.C=e)};
cV=function(a,b){g.X.call(this,{G:"button",X:["ytp-pip-button","ytp-button"],P:{title:g.Q("YTP_PIP")},I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-pip"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}]});
this.o=a;this.ba("click",this.A);g.Je(this,GT(b.o,this.element))};
eV=function(a,b){g.X.call(this,{G:"button",X:["ytp-play-button","ytp-button"],P:{title:"{{title}}","aria-label":"{{label}}"},I:["{{icon}}"]});this.o=a;this.A=null;this.C=b.o;this.B=null;this.D=new PU;g.J(this,this.D);this.O(a,"fullscreentoggled",this.F);this.O(a,"presentingplayerstatechange",this.H);this.O(a,"videodatachange",this.F);dV(this,g.LN(a));this.ba("click",this.J,this)};
fV=function(a){switch(a){case 1:return js();case 2:return is();case 3:return ls();case 4:return os();default:return null}};
dV=function(a,b){var c=g.$G(a.o.getVideoData()),d=!1;if(VH(b))var e=c?4:2;else g.T(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.A!=e){switch(e){case 2:var f=g.Q("YTP_PAUSE");break;case 3:f=g.Q("YTP_REPLAY");break;case 1:f=g.Q("YTP_PLAY");break;case 4:f=g.Q("YTP_STOP")}3==e?(a.B||(a.B=GT(a.C,a.element)),a.update({title:f,label:null,icon:fV(e)})):(a.B&&(a.B(),a.B=null),a.update({title:null,label:f}),(c=fV(e))&&a.A&&3!=a.A&&!g.V(a.o).V?UU(a.D,a.element,c):a.ma("icon",c));$U(a.C);a.A=e}};
hV=function(a,b,c){if(c){var d="ytp-next-button";var e=gs()}else d="ytp-prev-button",e=ks();g.X.call(this,{G:"a",X:[d,"ytp-button"],P:{title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},I:[e]});this.o=a;this.N=b.o;this.B=c;this.A=this.F=null;this.K=!1;this.H=this.J=this.C=null;this.D=!1;this.O(a,"fullscreentoggled",this.Ng);this.O(a,"videodatachange",
this.Ng);this.O(a,"onPlaylistUpdate",this.Ng);this.B||this.O(a,"appresize",this.qc);this.O(a,"mdxpreviousnextchange",function(){gV(this);this.qc()});
this.Ng()};
iV=function(a){a.A&&a.A.unsubscribe("shuffle",a.Ng,a)};
jV=function(a){return!!a.A&&!a.B&&!!a.F&&!a.F.va&&3<=a.o.getCurrentTime()&&2!=a.o.Fa()};
kV=function(a){var b=g.KN(g.FN(a.o));return b?a.B?b.hasNext():b.Yd():!1};
gV=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=g.V(a.o),d=NN(a.o),e=a.B&&g.hO(a.o),f=kV(a);if(a.D)b.title=g.Q("YTP_REPLAY");else if(d){var k=null;a.A&&(k=a.A.wb(a.B?RI(a.A):SI(a.A)));if(k){if(k.videoId){var l=a.A.listId;b.url=c.getVideoUrl(k.videoId,l?l.toString():void 0)}b.text=k.title;b.duration=k.lengthSeconds?g.pR(k.lengthSeconds):null;b.preview=k.ub(c,"mqdefault.jpg")}b.title=g.Q(a.B?"YTP_NEXT":"YTP_PREVIOUS")}else e&&(a.F.fe&&a.F.fe.length&&(k=g.fT(a.F.fe[0]),
b.url=k.xj(c),b.text=k.title,b.duration=k instanceof g.uG?g.pR(k.lengthSeconds):null,b.preview=k.ub(c,"mqdefault.jpg")),b.title=g.Q("YTP_NEXT"));b.disabled=!e&&!d&&!f;a.update(b);a.K=!!b.url;e||d||a.D||f?a.C||(a.C=GT(a.N,a.element),a.J=a.ba("click",a.pC,a)):a.C&&(a.C(),a.C=null,a.Ma(a.J),a.J=null);$U(a.N)};
mV=function(a,b){g.eR.call(this,{G:"div",L:"ytp-progress-bar-container",P:{"aria-disabled":!0},I:[{G:"div",X:["ytp-progress-bar",g.V(a).isMobile?"ytp-mobile":""],P:{tabindex:0,role:"slider","aria-label":g.Q("YTP_SEEK_SLIDER"),"aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},I:[{G:"div",L:"ytp-progress-bar-padding"},{G:"div",L:"ytp-progress-list",I:[{G:"div",X:["ytp-play-progress","ytp-swatch-background-color"]},{G:"div",
L:"ytp-load-progress"},{G:"div",L:"ytp-hover-progress"},{G:"div",L:"ytp-clip-start-exclude"},{G:"div",L:"ytp-clip-end-exclude"},{G:"div",L:"ytp-ad-progress-list"},{G:"div",L:"ytp-marker-crenellation-list"},{G:"div",L:"ytp-marker-progress-list"}]},{G:"div",L:"ytp-scrubber-container",I:[{G:"div",X:["ytp-scrubber-button","ytp-swatch-background-color"],I:[{G:"div",L:"ytp-scrubber-pull-indicator"}]}]}]},{G:"div",L:"ytp-bound-time-left",I:["{{boundTimeLeft}}"]},{G:"div",L:"ytp-bound-time-right",I:["{{boundTimeRight}}"]},
{G:"div",L:"ytp-clip-start",P:{title:g.Q("YTP_WATCH_ALL")},I:["{{clipstarticon}}"]},{G:"div",L:"ytp-clip-end",P:{title:g.Q("YTP_WATCH_ALL")},I:["{{clipendicon}}"]}]});this.ma("clipstarticon",cs());this.ma("clipendicon",bs());this.A=a;this.Ha=b.o;this.Ka=!1;this.C=this.bc=0;this.V=1;this.Cb=this.H=0;this.D=window.NaN;this.Wa=!1;this.K=this.Z=0;this.jc=this.ia["ytp-ad-progress-list"];this.oc=this.ia["ytp-marker-progress-list"];this.Va=this.ia["ytp-marker-crenellation-list"];this.U={};this.ka={};this.N=
window.Infinity;var c=b.o;this.da=this.ia["ytp-clip-end"];g.Je(this,GT(c,this.da));this.pa=new g.mu(this.da,!0);g.J(this,this.pa);this.pa.subscribe("hoverstart",this.Cs,this);this.pa.subscribe("hoverend",this.Bs,this);this.O(this.da,"click",this.Vj);this.Ta=this.ia["ytp-clip-end-exclude"];this.sc=this.ia["ytp-clip-start-exclude"];this.T=0;this.ca=this.ia["ytp-clip-start"];g.Je(this,GT(c,this.ca));this.wa=new g.mu(this.ca,!0);g.J(this,this.wa);this.wa.subscribe("hoverstart",this.Cs,this);this.wa.subscribe("hoverend",
this.Bs,this);this.O(this.ca,"click",this.Vj);this.fb=this.ia["ytp-load-progress"];this.ha=0;this.Cc=this.ia["ytp-play-progress"];this.Qa=this.ia["ytp-hover-progress"];this.F=0;this.qb=this.ia["ytp-progress-bar"];this.B=null;this.Db=this.ia["ytp-scrubber-button"];this.Dc=this.ia["ytp-scrubber-container"];this.xa=new g.ed;this.Xa=new JR;this.o=new GR(0,0);this.J=this.Aa=!1;this.Sa=null;this.O(a,"presentingplayerstatechange",this.rC);this.O(a,"videodatachange",this.As);this.O(a,"videoplayerreset",this.By);
this.O(a,"cuerangesadded",this.Fs);this.O(a,"cuerangesremoved",this.zC);this.O(a,"cuerangemarkersupdated",this.Fs);this.O(a,"onPlaybackQualityChange",this.sC);lV(this,a.getVideoData(),!0)};
qV=function(a){if(a.C){var b=a.A.gf(),c=new GR(b.seekableStart,b.seekableEnd),d=IR(c,b.loaded,0);b=IR(c,b.current,0);var e=a.o.o!=c.o||a.o.g!=c.g;a.o=c;nV(a,b,d);e&&oV(a);pV(a)}};
lV=function(a,b,c){c=void 0===c?!1:c;var d=!!b&&b.ac();a.Aa=d&&b.re;rV(a,a.A.Kc());c&&(d?(c=b.clipEnd,a.T=b.clipStart,a.N=c,sV(a),nV(a,a.F,a.ha)):a.Vj(),b=a.Ha,1==b.o&&b.Cd());qV(a)};
tV=function(a){return!!a&&a.ac()&&!!a.Ca&&a.Ca.video.isAccelerated&&a.Ca.video.A};
uV=function(a,b){a.Wa=b;g.N(a.fb,"ytp-fast-load",b)};
vV=function(a,b,c,d){b=g.Zc(b,0,a.J?60:40);a.H=b;var e=a.V,f=Math.max(a.o.getLength()/a.C,1);a.V=b/(a.J?60:40)*(f-1)+1;b=a.C*a.V;a.K=g.Zc(d*b-c,0,b-a.C);e!=a.V&&oV(a)};
oV=function(a){var b=wV(a),c=-b.A/b.g,d=(-b.A+b.width)/b.g,e=g.Nd(a.Va),f=0;if(a.H>.2*(a.J?60:40)){var k=c*(a.o.getLength()/60),l=d*(a.o.getLength()/60);for(k=Math.ceil(k);k<l;k++){var m=e[f];m||(m=g.Ed("DIV"),a.Va.appendChild(m));f++;m.className=0==k%60?"ytp-60m-progress":0==k%30?"ytp-30m-progress":0==k%15?"ytp-15m-progress":"ytp-1m-progress";var n=(60*k/a.o.getLength()-c)*b.g;m.style.left=n+"px"}}b=a.Aa?a.o.g:0;a.update({boundTimeLeft:g.pR(HR(a.o,c)-b),boundTimeRight:g.pR(HR(a.o,d)-b)});for(c=e.length-
1;c>=f;c--)g.Kd(e[c]);a.element.style.height=a.H+(a.J?8:5)+"px";a.R("height-change",a.H);a.Db.style.height=a.H+(a.J?20:13)+"px";for(var q in a.U)xV(a,a.U[q],a.ka[q]);sV(a);nV(a,a.F,a.ha)};
wV=function(a){var b=a.xa.x,c=a.C*a.V;b=g.Zc(b,0,a.C);a.Xa.update(b,a.C,-a.K,-(c-a.K-a.C));return a.Xa};
nV=function(a,b,c){a.F=b;a.ha=c;var d=wV(a),e=a.o.g,f=HR(a.o,a.F);a.update({ariamin:Math.floor(a.o.o),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:g.Q("YTP_PROGRESS_LABEL_2",{PLAY_PROGRESS:g.pR(f),DURATION:g.pR(e)})});e=IR(a.o,a.T,0);var k=IR(a.o,a.N,1);f=g.Zc(b,e,k);c=a.Wa?1:g.Zc(c,e,k);k=b*d.g+d.A;a.Db.style.display=0<=k&&b<=d.width?"":"none";g.rh(a.Dc,"transform","translateX("+k+"px)");yV(a,a.Cc,d,e,f);yV(a,a.fb,d,e,c)};
yV=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.A,0)+"px";d=Math.min((e-d)*c.g+c.A,c.width);(void 0===f?0:f)||g.V(a.A).isMobile?(b.style.width=d+"px",vh(b,"transform")):g.rh(b,"transform","scalex("+(c.width?d/c.width:0)+")")};
sV=function(a){var b=a.T>a.o.o,c=0<a.o.g&&a.N<a.o.g;g.N(a.element,"ytp-clip-start-enabled",b);g.N(a.element,"ytp-clip-end-enabled",c);b=b?IR(a.o,a.T,0):0;c=c?IR(a.o,a.N,1):1;a.ca.style.left=Math.round(1E3*b)/10+"%";a.da.style.left=Math.round(1E3*c)/10+"%";a.sc.style.width=Math.round(1E3*b)/10+"%";a.Ta.style.left=Math.round(1E3*c)/10+"%";a.Ta.style.width=Math.round(1E3*(1-c))/10+"%"};
pV=function(a){var b=wV(a);yV(a,a.Qa,b,a.F,b.o);g.N(a.Qa,"ytp-hover-progress-light",b.o>a.F)};
xV=function(a,b,c){var d=wV(a),e=IR(a.o,b.start/1E3,0),f=Gy(b)/d.width;switch(b.style){case "ytp-chapter-marker":var k=e+f/2;e-=f/2;break;default:k=IR(a.o,b.end/1E3,1),f!=Number.POSITIVE_INFINITY&&(e=g.Zc(e,0,k-f)),k=Math.min(k,e+f),b.color&&(c.style.background=b.color)}yV(a,c,d,e,k,!0);c.className=b.style};
zV=function(a,b){var c=b.getId();a.U[c]==b&&(g.Kd(a.ka[c]),delete a.U[c],delete a.ka[c])};
rV=function(a,b){b?a.B||(a.element.removeAttribute("aria-disabled"),a.B=new g.mu(a.qb,!0),a.B.subscribe("hovermove",a.wC,a),a.B.subscribe("hoverend",a.vC,a),a.B.subscribe("dragstart",a.uC,a),a.B.subscribe("dragmove",a.yC,a),a.B.subscribe("dragend",a.xC,a),a.Sa=a.ba("keydown",a.tC)):a.B&&(a.element.setAttribute("aria-disabled",!0),a.Ma(a.Sa),a.B.cancel(),a.B.dispose(),a.B=null)};
AV=function(a,b){bU.call(this,g.Q("YTP_ANNOTATIONS"),5);this.B=b;this.M=a;this.A=!1;this.O(a,"videodatachange",this.C);this.O(a,"onApiChange",this.C);this.subscribe("select",this.D,this);this.C()};
g.BV=function(a,b,c,d,e,f){var k=g.LT({"aria-haspopup":!0});g.KT.call(this,k,b,a);this.A=d;this.H=!1;this.D=null;this.o={};this.C=new g.NT(c,void 0,a,e,f);g.J(this,this.C);this.ba("keydown",this.AC);this.ba("click",this.open)};
g.CV=function(a,b){g.RT(a.C);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],k=a.o[f],l=f==a.D;l&&(d=!0);k&&k.priority==-e?(l=a,g.JT(l.o[f],l.Fd(f,!0)),delete a.o[f]):(k=new g.KT({G:"div",X:["ytp-menuitem"],P:{tabindex:0,role:"menuitemradio","aria-checked":l?!0:null},I:[{G:"div",X:["ytp-menuitem-label"],I:["{{label}}"]}]},-e,a.Fd(f,!0)),k.ba("click",(0,g.z)(a.BC,a,f)));c[f]=k;g.PT(a.C,k,!0)}d||(a.D=null);for(var m in a.o)a.o[m].dispose();a.o=c};
DV=function(a,b){g.BV.call(this,g.Q("YTP_AUDIO_TRACK_TITLE"),2,a,b);this.M=a;this.J=new g.X({G:"div",I:[{G:"span",I:[g.Q("YTP_AUDIO_TRACK_TITLE")]},{G:"span",L:"ytp-menuitem-label-count",I:["{{content}}"]}]});g.JT(this,this.J);this.K={};this.O(a,"videodatachange",this.F);this.O(a,"onPlaybackAudioChange",this.F);this.F()};
EV=function(a,b){bU.call(this,g.Q("YTP_AUTOPLAY"),6);this.D=b;this.M=a;this.B=!1;this.A=[];this.O(a,"presentingplayerstatechange",this.C);this.subscribe("select",this.H,this);this.C()};
FV=function(a,b){g.BV.call(this,g.Q("YTP_QUALITY_TITLE"),1,a,b);g.L(this.C.element,"ytp-quality-menu");this.M=a;this.K={};this.J="unknown";this.F=0;this.T=g.V(a).experiments.g("html5_dim_superoptimal_formats");this.O(a,"videodatachange",this.B);this.O(a,"videoplayerreset",this.B);this.O(a,"onPlaybackQualityChange",this.N);this.B()};
GV=function(a,b,c){var d=a.K[b],e=g.Rx[b];var f=d?d.qualityLabel:e?e+"p":g.Q("YTP_AUTO");a.T&&a.F&&e>a.F&&(c=c||[],c.push("ytp-quality-superoptimal"));a={G:"span",X:c,I:[]};d&&d.isAccelerated&&d.A&&a.I.push({G:"div",L:"ytp-menuitem-badge-container",I:[{G:"svg",P:{fill:"#00838f",height:"11px",viewBox:"0 0 48 48",width:"11px"},I:[{G:"path",P:{d:"M0 0v48h48V0H0zm10.6 30.64L4 24.05l6.69-6.69 6.6 6.59-6.69 6.69zM24 44l-6.7-6.7 13.35-13.35-13.32-13.28L24 4l20 20-20 20z"}},{G:"path",P:{d:"M 24,44 44,24 24,4 17.33,10.67 30.65,23.95 17.3,37.3 z M 10.6,30.64 17.29,23.95 10.69,17.36 4,24.05 z",
fill:"#fff"}}]}]});a.I.push(f);var k;"highres"==b?k="8K":"hd2880"==b?k="5K":"hd2160"==b?k="4K":0==b.indexOf("hd")&&(k="HD");k&&(a.I.push(" "),a.I.push({G:"sup",L:"ytp-swatch-color",I:[k]}));return a};
HV=function(a,b,c){g.X.call(this,{G:"button",X:["ytp-button","ytp-settings-button"],P:{"aria-haspopup":!0,"aria-owns":CO(),title:g.Q("YTP_SETTINGS")},I:[g.ns()]});this.A=c;this.M=a;this.B=!0;this.ba("click",this.C);this.O(a,"onPlaybackQualityChange",this.o);this.O(a,"videodatachange",this.o);this.O(a,"webglsettingschanged",this.o);this.O(a,"appresize",this.qc);g.Je(this,GT(b.o,this.element));this.o();this.qc(g.MN(a).Ga())};
IV=function(a,b){a.B=!!b;a.qc(g.MN(a.M).Ga())};
JV=function(a,b){g.BV.call(this,g.Q("YTP_SPEED_TITLE"),4,a,b);this.M=a;this.B=null;this.O(a,"presentingplayerstatechange",this.Is);this.Is()};
LV=function(a,b,c,d){var e=g.Q("YTP_VIDEO_SUBTITLES_OVERRIDE"),f=new g.NT(b,void 0,e);g.BV.call(this,KV(d),a,b,c,e,function(){return g.WT(c,f)});
g.L(this.element,"ytp-subtitles-options-menu-item");this.K=d.option.toString();this.N=g.Nb(d.options,this.Ms,this);this.J=f;g.J(this,this.J);a=new g.KT({G:"div",L:"ytp-menuitemtitle",I:[g.Q("YTP_VIDEO_SUBTITLES_OVERRIDE_DESC")]},0);g.J(this,a);g.PT(this.J,a,!0);this.F=new g.KT({G:"div",L:"ytp-menuitem",P:{role:"menuitemradio",tabindex:0},I:[{G:"div",L:"ytp-menuitem-label",I:[g.Q("YTP_ON")]}]},-1);g.J(this,this.F);g.PT(this.J,this.F,!0);this.O(this.F.element,"click",g.A(this.Ns,!0));this.B=new g.KT({G:"div",
L:"ytp-menuitem",P:{role:"menuitemradio",tabindex:0},I:[{G:"div",L:"ytp-menuitem-label",I:[g.Q("YTP_OFF")]}]},-2);g.J(this,this.B);g.PT(this.J,this.B,!0);this.O(this.B.element,"click",g.A(this.Ns,!1));g.CV(this,(0,g.H)(d.options,this.Ms))};
KV=function(a){return(a.message?g.Q(a.message):a.text)||""};
MV=function(a,b){g.NT.call(this,a,void 0,g.Q("YTP_OPTIONS"));this.o={};for(var c=0;c<g.oU.length;c++){var d=g.oU[c],e=new LV(-c,a,b,d);g.J(this,e);e.subscribe("settingChange",this.A,this);this.o[d.option.toString()]=e;g.PT(this,e,!0)}c=new g.KT(g.LT(),-g.oU.length,g.Q("YTP_RESET"));g.J(this,c);c.ba("click",(0,g.z)(this.A,this,"reset",!0));g.PT(this,c,!0)};
NV=function(a,b){for(var c in b){var d=a.o[c];if(d){var e=b[c].toString(),f=!!b[c+"Override"];d.o[e]&&(d.Gd(e),d.F.element.setAttribute("aria-checked",!f),d.B.element.setAttribute("aria-checked",f))}}};
OV=function(a,b){g.BV.call(this,g.Q("YTP_AUTO_TRANSLATE"),0,a,b);this.B={}};
PV=function(a,b){var c=new MV(a,b);g.BV.call(this,g.Q("YTP_SUBTITLES"),3,a,b,g.Q("YTP_OPTIONS"),function(){return g.WT(b,c)});
this.M=a;this.B={};this.N=new g.O(g.A(this.Ls,!1),3E3,this);g.J(this,this.N);this.J=new g.X({G:"div",I:[{G:"span",I:[g.Q("YTP_SUBTITLES")]},{G:"span",L:"ytp-menuitem-label-count",I:["{{content}}"]}]});g.J(this,this.J);g.JT(this,this.J);this.F=new OV(a,b);g.J(this,this.F);this.F.subscribe("select",this.KC,this);this.K=c;g.J(this,this.K);this.K.subscribe("settingChange",this.JC,this);this.O(a,"videodatachange",this.ai);this.O(a,"onApiChange",this.ai);this.O(a,"onCaptionsTrackListChanged",this.ai);this.O(a,
"captionschanged",this.ai);this.ai()};
QV=function(a){g.ST.call(this,a,"ytp-settings-menu");this.A=a;this.B=new g.NT(a);g.J(this,this.B);this.H=null;this.V=!1;this.hide();g.WT(this,this.B)};
RV=function(a){if(!a.V){a.V=!0;var b=new FV(a.A,a);g.J(a,b);b=new PV(a.A,a);g.J(a,b);b=new AV(a.A,a);g.J(a,b);g.V(a.A).Qa&&(b=new JV(a.A,a),g.J(a,b));g.V(a.A).ke&&(b=new EV(a.A,a),g.J(a,b));b=new DV(a.A,a);g.J(a,b);IV(a.H,a.B.Ia.length)}};
SV=function(a,b){RV(a);g.PT(a.B,b);IV(a.H,a.B.Ia.length)};
TV=function(a,b){a.g&&1>=a.B.Ia.length&&a.hide();g.QT(a.B,b);IV(a.H,a.B.Ia.length)};
UV=function(a,b,c){g.X.call(this,{G:"button",L:"ytp-button",P:{title:g.Q("YTP_MDX_TOOLTIP"),"aria-haspopup":!0},I:["{{icon}}"]});this.M=a;this.B=c;this.A=null;this.O(a,"onMdxReceiversChange",this.o);this.O(a,"presentingplayerstatechange",this.o);this.O(a,"appresize",this.o);this.o();this.ba("click",this.C,this);g.Je(this,GT(b.o,this.element))};
VV=function(a,b){g.X.call(this,{G:"button",X:["ytp-size-button","ytp-button"],P:{title:"{{title}}"},I:["{{icon}}"]});this.o=a;this.C=b.o;this.B=null;this.D=new PU;g.J(this,this.D);this.O(a,"sizestylechange",this.A);this.O(a,"fullscreentoggled",this.A);this.O(a,"presentingplayerstatechange",this.A);this.A();this.ba("click",this.F);g.Je(this,GT(this.C,this.element))};
WV=function(a,b){g.X.call(this,{G:"button",X:["ytp-subtitles-button","ytp-button"],P:{"aria-pressed":"{{pressed}}",title:g.Q("YTP_SUBTITLES_TOOLTIP")},I:[ps()]});this.A=a;this.O(a,"videodatachange",this.o);this.O(a,"appresize",this.o);this.O(a,"onApiChange",this.o);this.O(a,"onCaptionsTrackListChanged",this.o);this.O(a,"captionschanged",this.o);this.o();this.ba("click",this.B);g.Je(this,GT(b.o,this.element))};
XV=function(a,b){g.X.call(this,{G:"div",X:["ytp-time-display","notranslate"],I:[{G:"span",L:"ytp-time-current",I:["{{currenttime}}"]},{G:"span",L:"ytp-time-separator",I:[" / "]},{G:"span",L:"ytp-time-duration",I:["{{duration}}"]}]});this.D=new g.X({G:"button",X:["ytp-live-badge","ytp-button"],P:{disabled:!0},I:[g.Q("YTP_LIVE")]});g.J(this,this.D);this.D.na(this.element);this.o=a;this.K=b.o;this.A=null;this.F=this.B=!1;this.J=this.H=null;this.ba("click",this.N);this.O(a,"presentingplayerstatechange",
this.C);this.O(a,"appresize",this.C);this.O(a,"videodatachange",this.T);var c=a.getVideoData();c&&(this.B=c.va,g.N(this.element,"ytp-live",this.B));this.C()};
ZV=function(a,b,c){g.X.call(this,{G:"div",L:"ytp-volume-panel",P:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:0},I:[{G:"div",L:"ytp-volume-slider",I:[{G:"div",L:"ytp-volume-slider-handle"}]}]});this.o=a;this.F=b;this.T=c;this.K=!1;this.H=b.Wc();this.V=this.C=0;this.U=this.ia["ytp-volume-slider"];this.Y=this.ia["ytp-volume-slider-handle"];this.J=new g.mu(this.U,!0);g.J(this,this.J);this.J.subscribe("dragstart",this.eG,
this);this.J.subscribe("dragmove",this.dG,this);this.J.subscribe("dragend",this.cG,this);this.N=null;this.A=this.B=this.D=!1;this.O(a,"onVolumeChange",this.NC);this.O(a,"appresize",this.qc);this.O(a,"fullscreentoggled",this.LC);this.O(a,"onShowControls",this.Dp);this.O(a,"onHideControls",this.Dp);this.O(this.element,"keydown",this.fG);this.O(this.element,"focus",g.A(this.Ps,!0));this.O(this.element,"blur",g.A(this.Ps,!1));this.qc(g.MN(a).Ga());YV(this,a.getVolume(),a.yc())};
YV=function(a,b,c){var d=Math.floor(b),e=d+"% "+g.Q("YTP_SCREENREADER_VOLUME_SETTING")+(c?" "+g.Q("YTP_SCREENREADER_VOLUME_MUTED"):"");c=c?0:b/100;a.ma("valuenow",d);a.ma("valuetext",e);a.Y.style.left=(a.H?60:40)*c+"px";a.C=b};
$V=function(a,b,c,d,e){var f=a.B||a.D||a.A||a.K;a.B=b;a.D=c;a.A=d;a.K=e;b=a.B||a.D||a.A||a.K;f!=b&&(b?a.N=a.O(a.element,"wheel",a.MC):(a.Ma(a.N),a.N=null),g.N(a.T,"ytp-volume-slider-active",b))};
aW=function(a,b){var c=g.V(a),d=yE(c);0==d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"],f="gaming"==c.g;f&&e.push("ytp-youtube-gaming-button");c=c.experiments.A(f?"logo_gaming_src":"logo_src");g.X.call(this,{G:"a",X:e,P:{href:"{{url}}",target:"_blank",title:g.Q("YTP_URL_NAVIGATE_TO",{WEBSITE:d}),"data-sessionlink":"feature=player-button",style:c?"background: no-repeat center/100% url("+c+");padding:0 8px":null},I:c?null:[f?g.Xr?{G:"div",X:["ytp-icon",
"ytp-icon-logo-gaming"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 98 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M19.40,22.92 L19.40,22.08 C18.87,22.71 18.42,23.03 17.93,23.03 C17.50,23.03 17.20,22.82 17.05,22.44 C16.96,22.21 16.89,21.85 16.89,21.32 L16.89,15.23 L18.29,15.23 L18.29,21.47 C18.33,21.69 18.41,21.76 18.59,21.76 C18.86,21.76 19.10,21.52 19.40,21.09 L19.40,15.23 L20.80,15.23 L20.80,22.92 L19.40,22.92 Z M15.41,15.91 C15.04,15.39 14.45,15.17 13.86,15.17 C13.19,15.17 12.69,15.39 12.31,15.91 C12.02,16.30 11.87,16.93 11.87,17.75 L11.87,20.48 C11.87,21.30 12.01,21.86 12.29,22.25 C12.67,22.77 13.27,23.05 13.86,23.05 C14.45,23.05 15.07,22.77 15.44,22.25 C15.73,21.86 15.86,21.30 15.86,20.48 L15.86,17.74 C15.86,16.92 15.70,16.30 15.41,15.91 L15.41,15.91 Z M14.45,20.63 C14.53,21.40 14.30,21.77 13.86,21.77 C13.43,21.77 13.20,21.40 13.27,20.63 L13.27,17.59 C13.20,16.83 13.43,16.47 13.86,16.47 C14.30,16.47 14.53,16.83 14.45,17.59 L14.45,20.63 Z M10.32,22.92 L8.84,22.92 L8.84,18.73 C8.84,18.73 7.31,13.60 7,12.64 L8.55,12.64 L9.58,16.65 L10.61,12.64 L12.16,12.64 L10.32,18.73 L10.32,22.92 Z"}},
{G:"path",X:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"M23,12 L43,12 L43,24 L23,24 Z",fill:"none"}},{G:"path",Ba:!0,X:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M42.90,11.22 C42.06,10.32 41.12,10.32 40.69,10.26 C37.60,10.03 32.97,10.03 32.97,10.03 C32.96,10.03 28.34,10.03 25.25,10.26 C24.82,10.32 23.88,10.32 23.04,11.22 C22.38,11.91 22.16,13.47 22.16,13.47 C22.16,13.47 21.94,15.30 21.94,17.13 L21.94,18.85 C21.94,20.68 22.16,22.51 22.16,22.51 C22.16,22.51 22.38,24.07 23.04,24.76 C23.88,25.66 24.98,25.63 25.47,25.73 C27.24,25.90 32.97,25.96 32.97,25.96 C32.97,25.96 37.60,25.95 40.69,25.72 C41.12,25.67 42.06,25.66 42.90,24.76 C43.56,24.07 43.77,22.51 43.77,22.51 C43.77,22.51 43.99,20.68 43.99,18.85 L43.99,17.13 C43.99,15.30 43.77,13.47 43.77,13.47 C43.77,13.47 43.56,11.91 42.90,11.22 L42.90,11.22 Z M25.31,22.92 L25.31,14.16 L23.76,14.16 L23.76,12.72 L28.41,12.71 L28.41,14.16 L26.79,14.16 L26.79,22.92 L25.31,22.92 Z M30.70,22.92 L30.70,22.08 C30.17,22.71 29.72,23.03 29.23,23.03 C28.79,23.03 28.50,22.82 28.35,22.44 C28.25,22.21 28.19,21.85 28.19,21.32 L28.19,15.30 L29.59,15.30 L29.59,21.47 C29.63,21.69 29.71,21.76 29.89,21.76 C30.16,21.76 30.40,21.52 30.70,21.09 L30.70,15.30 L32.10,15.30 L32.10,22.92 L30.70,22.92 Z M37.05,22.16 C36.87,22.72 36.48,23.02 35.95,23.02 C35.48,23.02 34.95,22.72 34.50,22.15 L34.50,22.92 L32.98,22.92 L32.98,12.71 L34.50,12.71 L34.50,16.04 C34.93,15.49 35.46,15.18 35.95,15.18 C36.48,15.18 36.84,15.50 37.02,16.07 C37.11,16.37 37.20,16.87 37.20,17.59 L37.20,20.63 C37.20,21.34 37.14,21.83 37.05,22.16 L37.05,22.16 Z M40.73,21.21 C40.75,21.14 40.74,20.81 40.74,20.25 L42.15,20.25 L42.15,20.47 C42.15,20.91 42.11,21.23 42.10,21.37 C42.05,21.67 41.95,21.95 41.79,22.19 C41.42,22.74 40.87,23.02 40.17,23.02 C39.47,23.02 38.94,22.76 38.55,22.24 C38.27,21.86 38.09,21.29 38.09,20.48 L38.09,17.82 C38.09,17.00 38.25,16.37 38.54,15.99 C38.92,15.47 39.45,15.19 40.14,15.19 C40.81,15.19 41.34,15.47 41.71,15.99 C41.99,16.37 42.15,16.97 42.15,17.78 L42.15,19.34 L39.49,19.34 L39.49,20.71 C39.48,21.41 39.68,21.76 40.14,21.76 C40.47,21.76 40.66,21.58 40.73,21.21 L40.73,21.21 Z M40.12,16.45 C39.68,16.45 39.49,16.64 39.49,17.36 L39.49,18.20 L40.74,18.20 L40.74,17.37 C40.74,16.66 40.57,16.45 40.12,16.45 L40.12,16.45 Z M34.54,16.80 L34.54,21.42 C34.76,21.65 35.02,21.76 35.24,21.76 C35.62,21.76 35.80,21.47 35.80,20.71 L35.80,17.44 C35.80,16.67 35.62,16.45 35.24,16.45 C35.02,16.45 34.76,16.57 34.54,16.80 L34.54,16.80 Z",
fill:"#fff"}},{G:"g",Ba:!0,L:"ytp-svg-fill",I:[{G:"path",P:{d:"M50.85,16.34 C50.14,16.34 49.78,16.77 49.72,17.30 C49.61,18.30 49.61,19.64 49.72,20.65 C49.78,21.18 50.14,21.61 50.85,21.61 C51.55,21.61 52.03,21.21 52.03,20.67 L52.03,20.16 C52.03,20.09 51.98,20.04 51.91,20.04 L51.12,20.04 C50.99,20.04 50.89,19.93 50.89,19.80 L50.89,18.66 C50.89,18.53 50.99,18.42 51.12,18.42 L53.39,18.42 C53.52,18.42 53.63,18.53 53.63,18.66 L53.63,20.67 C53.63,22.11 52.45,23.30 50.85,23.30 C49.25,23.30 48.25,22.09 48.08,20.65 C47.97,19.64 47.97,18.30 48.08,17.30 C48.25,15.86 49.25,14.65 50.85,14.65 C52.46,14.65 53.63,15.79 53.63,17.39 C53.63,17.52 53.52,17.63 53.39,17.63 L52.23,17.63 C52.10,17.63 52.01,17.52 52.00,17.39 C51.95,16.77 51.52,16.34 50.85,16.34"}},
{G:"path",P:{d:"M57.57,19.76 C57.55,19.86 57.60,19.90 57.67,19.90 L58.74,19.90 C58.81,19.90 58.85,19.86 58.83,19.76 L58.27,16.89 C58.26,16.85 58.25,16.84 58.21,16.84 L58.19,16.84 C58.16,16.84 58.14,16.85 58.13,16.89 L57.57,19.76 Z M56.80,22.98 C56.78,23.09 56.69,23.16 56.58,23.16 L55.36,23.16 C55.17,23.16 55.10,23.03 55.13,22.93 L57.21,14.96 C57.24,14.85 57.33,14.78 57.43,14.78 L58.99,14.78 C59.10,14.78 59.19,14.85 59.21,14.96 L61.29,22.93 C61.31,23.03 61.24,23.16 61.06,23.16 L59.83,23.16 C59.73,23.16 59.65,23.09 59.61,22.98 L59.25,21.75 C59.23,21.66 59.18,21.57 59.08,21.57 L57.31,21.57 C57.20,21.57 57.15,21.64 57.13,21.75 L56.80,22.98 Z"}},
{G:"path",P:{d:"M65.75,17.32 C65.78,17.44 65.92,17.44 65.96,17.32 L66.61,14.99 C66.64,14.84 66.73,14.78 66.85,14.78 L68.46,14.78 C68.59,14.78 68.69,14.89 68.69,15.02 L68.69,22.93 C68.69,23.06 68.59,23.16 68.46,23.16 L67.32,23.16 C67.19,23.16 67.09,23.06 67.09,22.93 L67.09,18.18 C67.09,18.12 67.02,18.11 66.99,18.17 L66.45,19.97 C66.40,20.11 66.33,20.17 66.20,20.17 L65.51,20.17 C65.39,20.17 65.32,20.11 65.27,19.97 L64.71,18.17 C64.69,18.11 64.62,18.12 64.62,18.18 L64.62,22.93 C64.62,23.06 64.51,23.16 64.38,23.16 L63.24,23.16 C63.12,23.16 63.01,23.06 63.01,22.93 L63.01,15.02 C63.01,14.89 63.12,14.78 63.24,14.78 L64.85,14.78 C64.98,14.78 65.06,14.84 65.10,14.99 L65.75,17.32 Z"}},
{G:"path",P:{d:"M72.68,16.52 C72.68,16.45 72.63,16.40 72.56,16.40 L71.39,16.40 C71.27,16.40 71.16,16.29 71.16,16.16 L71.16,15.02 C71.16,14.89 71.27,14.78 71.39,14.78 L75.59,14.78 C75.72,14.78 75.82,14.89 75.82,15.02 L75.82,16.16 C75.82,16.29 75.72,16.40 75.59,16.40 L74.42,16.40 C74.35,16.40 74.31,16.45 74.31,16.52 L74.31,21.43 C74.31,21.50 74.35,21.55 74.42,21.55 L75.70,21.55 C75.83,21.55 75.94,21.66 75.94,21.79 L75.94,22.93 C75.94,23.06 75.83,23.16 75.70,23.16 L71.28,23.16 C71.15,23.16 71.05,23.06 71.05,22.93 L71.05,21.79 C71.05,21.66 71.15,21.55 71.28,21.55 L72.56,21.55 C72.63,21.55 72.68,21.50 72.68,21.43 L72.68,16.52 Z"}},
{G:"path",P:{d:"M83.53,22.93 C83.53,23.06 83.42,23.16 83.30,23.16 L81.92,23.16 C81.72,23.16 81.64,23.06 81.61,22.96 L80.02,18.76 C80.00,18.69 79.92,18.71 79.92,18.78 L79.92,22.93 C79.92,23.06 79.81,23.16 79.69,23.16 L78.52,23.16 C78.39,23.16 78.29,23.06 78.29,22.93 L78.29,15.02 C78.29,14.89 78.39,14.78 78.52,14.78 L79.91,14.78 C80.08,14.78 80.16,14.89 80.20,15.00 L81.79,19.55 C81.82,19.62 81.90,19.60 81.90,19.52 L81.90,15.02 C81.90,14.89 82.00,14.78 82.13,14.78 L83.30,14.78 C83.42,14.78 83.53,14.89 83.53,15.02 L83.53,22.93 Z"}},
{G:"path",P:{d:"M88.59,16.34 C87.88,16.34 87.52,16.77 87.46,17.30 C87.35,18.30 87.35,19.64 87.46,20.65 C87.52,21.18 87.88,21.61 88.59,21.61 C89.29,21.61 89.77,21.21 89.77,20.67 L89.77,20.16 C89.77,20.09 89.72,20.04 89.65,20.04 L88.86,20.04 C88.73,20.04 88.63,19.93 88.63,19.80 L88.63,18.66 C88.63,18.53 88.73,18.42 88.86,18.42 L91.13,18.42 C91.26,18.42 91.37,18.53 91.37,18.66 L91.37,20.67 C91.37,22.11 90.19,23.30 88.59,23.30 C86.99,23.30 85.99,22.09 85.82,20.65 C85.71,19.64 85.71,18.30 85.82,17.30 C85.99,15.86 86.99,14.65 88.59,14.65 C90.20,14.65 91.37,15.79 91.37,17.39 C91.37,17.52 91.26,17.63 91.13,17.63 L89.97,17.63 C89.84,17.63 89.75,17.52 89.74,17.39 C89.69,16.77 89.26,16.34 88.59,16.34"}}]}]}:
g.Xr?{G:"div",X:["ytp-icon","ytp-icon-logo"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 51 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M19.40,22.92 L19.40,22.08 C18.87,22.71 18.42,23.03 17.93,23.03 C17.50,23.03 17.20,22.82 17.05,22.44 C16.96,22.21 16.89,21.85 16.89,21.32 L16.89,15.23 L18.29,15.23 L18.29,21.47 C18.33,21.69 18.41,21.76 18.59,21.76 C18.86,21.76 19.10,21.52 19.40,21.09 L19.40,15.23 L20.80,15.23 L20.80,22.92 L19.40,22.92 Z M15.41,15.91 C15.04,15.39 14.45,15.17 13.86,15.17 C13.19,15.17 12.69,15.39 12.31,15.91 C12.02,16.30 11.87,16.93 11.87,17.75 L11.87,20.48 C11.87,21.30 12.01,21.86 12.29,22.25 C12.67,22.77 13.27,23.05 13.86,23.05 C14.45,23.05 15.07,22.77 15.44,22.25 C15.73,21.86 15.86,21.30 15.86,20.48 L15.86,17.74 C15.86,16.92 15.70,16.30 15.41,15.91 L15.41,15.91 Z M14.45,20.63 C14.53,21.40 14.30,21.77 13.86,21.77 C13.43,21.77 13.20,21.40 13.27,20.63 L13.27,17.59 C13.20,16.83 13.43,16.47 13.86,16.47 C14.30,16.47 14.53,16.83 14.45,17.59 L14.45,20.63 Z M10.32,22.92 L8.84,22.92 L8.84,18.73 C8.84,18.73 7.31,13.60 7,12.64 L8.55,12.64 L9.58,16.65 L10.61,12.64 L12.16,12.64 L10.32,18.73 L10.32,22.92 Z"}},
{G:"path",X:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"M23,12 L43,12 L43,24 L23,24 Z",fill:"none"}},{G:"path",Ba:!0,X:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M42.90,11.22 C42.06,10.32 41.12,10.32 40.69,10.26 C37.60,10.03 32.97,10.03 32.97,10.03 C32.96,10.03 28.34,10.03 25.25,10.26 C24.82,10.32 23.88,10.32 23.04,11.22 C22.38,11.91 22.16,13.47 22.16,13.47 C22.16,13.47 21.94,15.30 21.94,17.13 L21.94,18.85 C21.94,20.68 22.16,22.51 22.16,22.51 C22.16,22.51 22.38,24.07 23.04,24.76 C23.88,25.66 24.98,25.63 25.47,25.73 C27.24,25.90 32.97,25.96 32.97,25.96 C32.97,25.96 37.60,25.95 40.69,25.72 C41.12,25.67 42.06,25.66 42.90,24.76 C43.56,24.07 43.77,22.51 43.77,22.51 C43.77,22.51 43.99,20.68 43.99,18.85 L43.99,17.13 C43.99,15.30 43.77,13.47 43.77,13.47 C43.77,13.47 43.56,11.91 42.90,11.22 L42.90,11.22 Z M25.31,22.92 L25.31,14.16 L23.76,14.16 L23.76,12.72 L28.41,12.71 L28.41,14.16 L26.79,14.16 L26.79,22.92 L25.31,22.92 Z M30.70,22.92 L30.70,22.08 C30.17,22.71 29.72,23.03 29.23,23.03 C28.79,23.03 28.50,22.82 28.35,22.44 C28.25,22.21 28.19,21.85 28.19,21.32 L28.19,15.30 L29.59,15.30 L29.59,21.47 C29.63,21.69 29.71,21.76 29.89,21.76 C30.16,21.76 30.40,21.52 30.70,21.09 L30.70,15.30 L32.10,15.30 L32.10,22.92 L30.70,22.92 Z M37.05,22.16 C36.87,22.72 36.48,23.02 35.95,23.02 C35.48,23.02 34.95,22.72 34.50,22.15 L34.50,22.92 L32.98,22.92 L32.98,12.71 L34.50,12.71 L34.50,16.04 C34.93,15.49 35.46,15.18 35.95,15.18 C36.48,15.18 36.84,15.50 37.02,16.07 C37.11,16.37 37.20,16.87 37.20,17.59 L37.20,20.63 C37.20,21.34 37.14,21.83 37.05,22.16 L37.05,22.16 Z M40.73,21.21 C40.75,21.14 40.74,20.81 40.74,20.25 L42.15,20.25 L42.15,20.47 C42.15,20.91 42.11,21.23 42.10,21.37 C42.05,21.67 41.95,21.95 41.79,22.19 C41.42,22.74 40.87,23.02 40.17,23.02 C39.47,23.02 38.94,22.76 38.55,22.24 C38.27,21.86 38.09,21.29 38.09,20.48 L38.09,17.82 C38.09,17.00 38.25,16.37 38.54,15.99 C38.92,15.47 39.45,15.19 40.14,15.19 C40.81,15.19 41.34,15.47 41.71,15.99 C41.99,16.37 42.15,16.97 42.15,17.78 L42.15,19.34 L39.49,19.34 L39.49,20.71 C39.48,21.41 39.68,21.76 40.14,21.76 C40.47,21.76 40.66,21.58 40.73,21.21 L40.73,21.21 Z M40.12,16.45 C39.68,16.45 39.49,16.64 39.49,17.36 L39.49,18.20 L40.74,18.20 L40.74,17.37 C40.74,16.66 40.57,16.45 40.12,16.45 L40.12,16.45 Z M34.54,16.80 L34.54,21.42 C34.76,21.65 35.02,21.76 35.24,21.76 C35.62,21.76 35.80,21.47 35.80,20.71 L35.80,17.44 C35.80,16.67 35.62,16.45 35.24,16.45 C35.02,16.45 34.76,16.57 34.54,16.80 L34.54,16.80 Z",
fill:"#fff"}}]}]});this.o=a;jO(a,this.element,this,28666);this.ba("click",this.D);this.O(a,"videodatachange",this.C);this.C();g.Je(this,GT(b.o,this.element))};
bW=function(a,b,c){g.iu.call(this);var d=g.V(a);this.M=a;this.A=b;this.Y=window.NaN;this.V=null;this.N=c;this.N.subscribe("autohideupdate",this.Ks,this);c=!WH(g.LN(a));var e=new g.X({G:"div",L:"ytp-gradient-bottom"});g.J(this,e);g.gO(a,e.element,8);this.K=new g.fR(e,250,c,100);g.J(this,this.K);this.o=new g.X({G:"div",L:"ytp-chrome-bottom",I:[{G:"div",L:"ytp-chrome-controls"}]});g.J(this,this.o);g.gO(a,this.o.element,8);this.J=new g.fR(this.o,250,c,100);g.J(this,this.J);c=this.o.element.children[0];
d.F&&(c.style.background=d.Xa);this.g=new QV(a);g.J(this,this.g);g.gO(a,this.g.element,6);this.g.subscribe("show",this.SH,this);this.g.subscribe("show",(0,g.z)(b.vH,b,this.g));this.B=new mV(a,b);g.J(this,this.B);this.B.na(this.o.element,0);e=new FU(a,b);g.J(this,e);g.gO(a,e.element,4);this.B.subscribe("height-change",e.bC,e);e=new IU(a);g.J(this,e);g.gO(a,e.element,4);e=new g.EO({G:"div",L:"ytp-left-controls"});g.J(this,e);e.na(c);var f=new hV(a,b,!1);g.J(this,f);f.na(e.element);f=new eV(a,b);g.J(this,
f);f.na(e.element);f=new hV(a,b,!0);g.J(this,f);f.na(e.element);var k=new g.X({G:"span"});g.J(this,k);k.na(e.element);if(!d.wa&&(this.C=new XU(a,b),g.J(this,this.C),this.C.na(k.element),d.J)){f=new ZV(a,b,this.o.element);g.J(this,f);f.na(k.element);k=new g.mu(k.element);g.J(this,k);var l=(0,g.z)(f.Uu,f,!0);k.subscribe("hoverstart",l);k=new g.mu(e.element);g.J(this,k);f=(0,g.z)(f.Uu,f,!1);k.subscribe("hoverend",f)}this.U=new XV(a,b);g.J(this,this.U);this.U.na(e.element);e=new g.EO({G:"div",L:"ytp-right-controls"});
g.J(this,e);e.na(c);c=new WV(a,b);g.J(this,c);c.na(e.element);c=new HV(a,b,this.g);g.J(this,c);f=this.g;f.H=c;f.element.id=c.element.getAttribute("aria-owns");c.na(e.element);c=new NU(a);g.J(this,c);g.gO(a,c.element,5);c.subscribe("show",(0,g.z)(b.Jl,b,c));c=new OU(a,b,c);g.J(this,c);c.na(e.element);d.Bf&&(this.D=new aW(a,b),g.J(this,this.D),this.D.na(e.element));c=new VV(a,b);g.J(this,c);c.na(e.element);d.qb&&(c=new UV(a,b,this.g),g.J(this,c),c.na(e.element));d.Af&&(d=new EU(a,b),g.J(this,d),d.na(e.element));
d=oz();d.webkitSetPresentationMode&&g.Ca(d.webkitSupportsPresentationMode)&&d.webkitSupportsPresentationMode("picture-in-picture")&&(d=new cV(a,b),g.J(this,d),d.na(e.element));this.aa=new MU(a,b);g.J(this,this.aa);this.aa.na(e.element);this.F=new g.tp(this.wE,null,this);g.J(this,this.F);this.H=null;this.O(a,"appresize",this.zn);this.O(a,"fullscreentoggled",this.zn);this.O(a,"presentingplayerstatechange",this.qo);this.zn()};
cW=function(a,b){if(WH(g.LN(a.M))||b){if(b){a.J.hide();a.K.hide();if(a.C){var c=a.C;c.H=!1;g.lO(c.o,c.element,c.B&&!1)}a.D&&(c=a.D,c.B=!1,g.lO(c.o,c.element,c.A&&!1));a.A.o.xg(a.la())}}else b||(a.J.show(),a.K.show(),a.C&&(c=a.C,c.H=!0,g.lO(c.o,c.element,c.B&&!0)),a.D&&(c=a.D,c.B=!0,g.lO(c.o,c.element,c.A&&!0)),a.Ks())};
eW=function(a){var b=g.MN(a.M).Ga().width;return Math.max(b-2*dW(a),100)};
dW=function(a){var b=a.A.Wc();return 12*(g.V(a.M).F?0:b?2:1)};
g.fW=function(a,b,c,d,e,f,k,l,m,n,q,t){f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;if(q){c=g.V(t);q={href:q,"aria-label":a,tabindex:"-1"};if(g.mE(c)||g.nE(c))q.target="_blank";g.X.call(this,{G:"div",X:["ytp-button","ytp-sb"],I:[{G:"a",L:"ytp-sb-subscribe",P:q,I:[{G:"div",L:"ytp-sb-text",I:[{G:"div",L:"ytp-sb-icon"},a]},b?{G:"div",L:"ytp-sb-count",I:[b]}:""]}]});f&&g.L(this.element,"ytp-sb-classic")}else{g.X.call(this,
{G:"div",X:["ytp-button","ytp-sb"],I:[{G:"div",L:"ytp-sb-subscribe",P:{tabindex:"-1","aria-label":a},I:[{G:"div",L:"ytp-sb-text",I:[{G:"div",L:"ytp-sb-icon"},a]},b?{G:"div",L:"ytp-sb-count",I:[b]}:""]},{G:"div",L:"ytp-sb-unsubscribe",P:{tabindex:"-1","aria-label":c},I:[{G:"div",L:"ytp-sb-text",I:[{G:"div",L:"ytp-sb-icon"},c]},d?{G:"div",L:"ytp-sb-count",I:[d]}:""]}]});var v=this;this.o=k;this.M=t;var D=this.ia["ytp-sb-subscribe"],C=this.ia["ytp-sb-unsubscribe"];f&&g.L(this.element,"ytp-sb-classic");
if(e){l&&g.L(this.element,"ytp-sb-subscribed");a=g.V(t);var B=null;"gaming"==a.g&&(B="gaming_channels");if(m){var U=a.baseYtUrl+"subscription_ajax";var Z=function(){return{method:"POST",Wb:{action_create_subscription_to_channel:1,c:v.o},kb:{feature:m,silo_name:B},withCredentials:!0}};
var Aa=function(){return{method:"POST",Wb:{action_remove_subscriptions:1},kb:{c:v.o,silo_name:B,feature:m},withCredentials:!0}}}else if(n)U="/subscription_service",Z=function(){return{method:"POST",
Wb:{action_subscribe:1},kb:{channel_ids:v.o,itct:n}}},Aa=function(){return{method:"POST",
Wb:{action_unsubscribe:1},kb:{channel_ids:v.o,itct:n}}};
else return;var pa=function(){g.Us(U,Z());t.ua("SUBSCRIBE");C.focus();C.removeAttribute("aria-hidden");D.setAttribute("aria-hidden",!0)},ua=function(){g.Us(U,Aa());
t.ua("UNSUBSCRIBE");D.focus();D.removeAttribute("aria-hidden");C.setAttribute("aria-hidden",!0)};
this.O(D,"click",pa);this.O(C,"click",ua);this.O(D,"keypress",function(a){13==a.keyCode&&pa()});
this.O(C,"keypress",function(a){13==a.keyCode&&ua()});
var Wd=(0,g.z)(this.A,this),Qb=(0,g.z)(this.B,this);t.addEventListener("SUBSCRIBE",Wd);t.addEventListener("UNSUBSCRIBE",Qb);g.Je(this,function(){t.removeEventListener("SUBSCRIBE",Wd);t.removeEventListener("UNSUBSCRIBE",Qb)})}else g.L(D,"ytp-sb-disabled"),g.L(C,"ytp-sb-disabled")}};
hW=function(a){var b=new g.X({G:"a",L:"ytp-title-channel-logo",P:{href:"{{channelLink}}",target:"_blank"}});g.X.call(this,{G:"div",L:"ytp-title",I:[{G:"div",L:"ytp-title-channel",I:[b,{G:"div",L:"ytp-title-channel-popup",I:[{G:"div",L:"ytp-title-channel-heading",I:[{G:"h2",L:"ytp-title-channel-text",I:[{G:"a",P:{href:"{{popupChannelLink}}",target:"_blank"},I:["{{popupChannelName}}"]}]},{G:"h3",L:"ytp-title-channel-subtext",I:["{{subscriberCount}}"]}]}]}]},{G:"div",L:"ytp-title-text",I:[{G:"a",X:["ytp-title-link",
"yt-uix-sessionlink"],P:{target:"_blank",href:"{{url}}","data-sessionlink":"feature=player-title"},I:["{{title}}"]},{G:"div",L:"ytp-title-subtext",I:[{G:"a",L:"ytp-title-channel-name",P:{href:"{{channelLink}}",target:"_blank"},I:["{{channelName}}"]},{G:"span",L:"ytp-title-view-count",I:["{{viewCount}}"]}]}]}]});g.J(this,b);this.o=a;this.A=null;this.V=this.ia["ytp-title-link"];this.F=this.ia["ytp-title-channel"];this.D=b;this.K=this.ia["ytp-title-channel-popup"];this.B=null;this.C=!1;this.T=this.U=
this.N=null;jO(a,this.element,this,23851);jO(a,b.element,this,36925);this.O(a,"videodatachange",this.H);this.O(a,"videoplayerreset",this.H);g.V(a).experiments.g("embed_author_metadata")&&gW(this);this.H()};
gW=function(a){var b=new g.X({G:"div",L:"ytp-title-beacon"});g.J(a,b);b.na(a.F,0);b=a.o.getVideoData();var c=new g.fW(g.Q("YTP_SUBSCRIBE"),null,g.Q("YTP_SUBSCRIBED"),null,!0,!1,b.wi,!1,"embed_title",null,null,a.o);a.B=c;g.J(a,c);c.na(a.K);jO(a.o,c.element,a,36926);b={G:"div",L:"ytp-title-notifications-on",I:[g.hs()]};var d=new g.X({G:"button",X:["ytp-button","ytp-title-notifications"],I:[b,{G:"div",L:"ytp-title-notifications-off",I:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-notifications-inactive"]}:
{G:"svg",P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},I:[{G:"path",P:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});g.J(a,d);d.na(a.K);jO(a.o,d.element,a,36927);a.O(a.o,"SUBSCRIBE",function(){g.L(a.element,"ytp-subscribed")});
a.O(a.o,"UNSUBSCRIBE",function(){a.C=!1;g.M(a.element,"ytp-subscribed");g.M(a.element,"ytp-notifications-enabled")});
a.O(a.F,"mouseenter",function(){a.J.stop();var b=a.o.getRootNode();g.L(b,"ytp-title-channel-expanded");g.M(b,"ytp-title-channel-collapsed");g.lO(a.o,c.element,!0);g.lO(a.o,d.element,!0)});
a.O(a.F,"mouseleave",function(){a.J.start();g.lO(a.o,c.element,!1);g.lO(a.o,d.element,!1)});
a.O(c.element,"click",function(){g.kO(a.o,c.element)});
a.O(d.element,"click",function(){g.kO(a.o,d.element);g.Us("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",kb:{channel_id:a.T,receive_all_updates:!a.C}});a.C=!a.C;g.N(a.element,"ytp-notifications-enabled",a.C)});
a.J=new g.O(function(){var b=a.o.getRootNode();g.M(b,"ytp-title-channel-expanded");g.L(b,"ytp-title-channel-collapsed")},1E3);
g.J(a,a.J)};
jW=function(a){var b=a.o.getVideoData(),c=b.videoId&&(2==a.o.Fa()||g.V(a.o).experiments.g("embed_author_metadata")),d=a.o.getRootNode();c&&b.videoId==a.N?(g.L(d,"ytp-title-extra-info"),g.lO(a.o,a.D.element,!0)):(g.M(d,"ytp-title-extra-info"),g.lO(a.o,a.D.element,!1),c&&(b.author&&b.channelPath&&b.profilePicture?iW(a,b.videoId,b.wi,b.author,b.channelPath,b.profilePicture,b.ao):b.videoId!=a.U&&(c=g.V(a.o),d={video_id:b.videoId,html5:1,page_subscribe:0},c.Ib&&(d.authuser=c.Ib),c.pageId&&(d.pageid=c.pageId),
c=g.Rg(c.baseYtUrl+"get_video_metadata",d),g.Us(c,{method:"GET",rb:(0,g.z)(a.Z,a,b.videoId),withCredentials:!0}),a.U=b.videoId)))};
iW=function(a,b,c,d,e,f,k){e=g.V(a.o).Z+"://"+xE(g.V(a.o))+e;a.D.element.style.backgroundImage="url("+f+")";a.B&&(a.B.o=c);a.D.ma("channelLink",e);a.ma("channelLink",e);a.ma("channelName",d);a.ma("popupChannelLink",e);a.ma("popupChannelName",d);a.ma("subscriberCount",k);a.T=c;a.N=b;jW(a)};
kW=function(a,b){var c=g.MN(a).Ga();g.X.call(this,{G:"div",I:[{G:"div",L:"ytp-tooltip-bg",I:[{G:"div",L:"ytp-tooltip-duration",I:["{{duration}}"]}]},{G:"div",L:"ytp-tooltip-text-wrapper",I:[{G:"div",L:"ytp-tooltip-image"},{G:"div",L:"ytp-tooltip-title",I:["{{title}}"]},{G:"span",L:"ytp-tooltip-text",I:["{{text}}"]}]}]});this.T=a;this.ka=b;this.da=g.V(a).isMobile;this.H=this.ia["ytp-tooltip-bg"];this.pa=this.ia["ytp-tooltip-image"];this.ha=(0,g.z)(this.aF,this);this.U=(0,g.z)(this.dF,this);this.V=
(0,g.z)(this.Cd,this);this.A=null;this.J=new g.fR(this,100);g.J(this,this.J);this.o=null;this.N=!1;this.B=null;this.C=window.NaN;this.F="";this.ca=c.width;this.K=!0;this.D=1;this.Y=new g.O(this.yz,250,this);g.J(this,this.Y);this.Z=new g.O(this.Cd,5E3,this);g.J(this,this.Z)};
mW=function(a,b){if(null!=a.o)if(b)switch(a.o){case 3:case 2:lW(a);a.J.show();break;default:a.J.show()}else a.J.hide();a.K=b};
GT=function(a,b){if(a.da)return g.va;b.addEventListener("mouseover",a.U);return(0,g.z)(function(){this.A==b&&this.Cd();b.removeEventListener("mouseover",this.U)},a)};
oW=function(a,b,c){if(a.o)if(3==a.o)a.Cd();else return;nW(a,b,3,c)};
nW=function(a,b,c,d){(0,window.isNaN)(a.C)||(a.C=window.NaN,a.H.style.background="");a.A=b;a.N=!!d;d?a.F=d:(a.F=b.getAttribute("title"),b.removeAttribute("title"));a.element.className="ytp-tooltip";if(b=b.getAttribute("data-tooltip-image"))a.pa.style.backgroundImage="url("+b+")";g.N(a.element,"ytp-tooltip-image-enabled",!!b);a.o=c;a.T.addEventListener("appresize",a.V);a.K&&(lW(a),a.J.show(0))};
lW=function(a){var b=a.A.getAttribute("data-tooltip-text");if(b&&!a.N){a.ma("text",b);var c=a.A.getAttribute("data-duration");a.update({title:a.F,duration:c});var d=a.A.getAttribute("data-preview"),e=160*a.D,f=90*a.D,k=160*a.D,l=90*a.D;a.H.style.width=e+"px";a.H.style.height=f+"px";a.H.style.backgroundImage=d?"url("+d+")":"";a.H.style.backgroundPosition=(e-k)/2+"px "+(f-l)/2+"px";a.H.style.backgroundSize=k+"px "+l+"px";g.np(a.element,["ytp-text-detail","ytp-preview"]);g.N(a.element,"ytp-has-duration",
!!c)}else a.ma("text",a.F),g.op(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);3==a.o?a.element.setAttribute("role","status"):a.element.removeAttribute("role");pW(a,!!b)};
pW=function(a,b,c){a.element.style.maxWidth=b?"":Math.min(a.ca,300*a.D)+"px";qW(a.ka,a.element,a.A,c,1==a.o);a.element.style.top?g.L(a.element,"ytp-bottom"):a.element.style.bottom&&g.L(a.element,"ytp-top");3==a.o&&a.Z.start()};
$U=function(a){a.A&&!a.N&&a.A.hasAttribute("title")&&(a.F=a.A.getAttribute("title"),a.A.removeAttribute("title"),a.K&&lW(a))};
rW=function(a,b){g.N(a.element,"ytp-preview",0<=b);if(!(0>b||b==a.C)){a.C=b;var c=160*a.D,d=160*a.D,e=$E(a.B,a.C,c);KR(a.H,e,c,d,!0);a.Y.start()}};
g.sW=function(a,b,c,d,e){d=d||375;e=e||440;var f=window.document.location.protocol+"//"+window.document.domain+"/post_login";b&&(f=Ng(f,"mode",b));b=Ng("/signin?context=popup","next",f);c&&(b=Ng(b,"feature",c));if(c=window.open(b,"loginPopup","width="+d+",height="+e+",resizable=yes,scrollbars=yes",!0))b=g.Cu("LOGGED_IN",function(b){g.Du(g.P("LOGGED_IN_PUBSUB_KEY",void 0));g.Tr("LOGGED_IN",!0);a(b)}),g.Tr("LOGGED_IN_PUBSUB_KEY",b),c.moveTo((window.screen.width-d)/2,(window.screen.height-e)/2)};
vW=function(a,b,c){g.X.call(this,{G:"button",X:["ytp-watch-later-button","ytp-button"],P:{title:"{{title}}","data-tooltip-image":"{{image}}"},I:[{G:"div",L:"ytp-watch-later-icon",I:["{{icon}}"]},{G:"div",L:"ytp-watch-later-title",I:["{{watch_later}}"]}]});this.o=a;this.F=b.o;this.H=c;this.D=null;this.B=this.A=!1;jO(a,this.element,this,28665);this.ba("click",this.OC,this);this.O(a,"videoplayerreset",this.PC);this.O(a,"appresize",this.qc);this.qc(g.MN(a).Ga());a=g.V(this.o);c=g.vv("yt-player-watch-later-pending");
a.experiments.g("embed_show_watchlater_login")&&a.o&&c?(ry(),tW(this,c.videoId)):uW(this,2);g.Je(this,GT(b.o,this.element))};
tW=function(a,b){if(!a.B){a.B=!0;uW(a,3);var c=g.V(a.o);(a.A?US:MS)({videoIds:b,Ib:c.Ib,pageId:c.pageId,onError:a.CG,rb:a.A?a.DG:a.BG,context:a},c.baseYtUrl,!0)}};
uW=function(a,b,c){if(b!=a.D){switch(b){case 3:var d=hS();break;case 1:d=g.Xr?{G:"div",X:["ytp-icon","ytp-icon-watch-later-added"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M15.03,26 L7,17.91 L9.83,15.05 L14.94,20.19 L25.07,10 L28,12.94 L15.03,26 Z"}}]};break;case 2:d=g.Xr?{G:"div",X:["ytp-icon","ytp-icon-watch-later"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",
P:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};break;case 4:d=g.Xr?{G:"div",X:["ytp-icon","ytp-icon-alert"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}}a.ma("icon",
d);a.D=b}c?a.update({title:c,image:null}):(b=g.V(a.o),b.userDisplayName?(c={USER_NAME:b.userDisplayName},a.update({title:a.A?g.Q("YTP_ADDED_TO_WATCH_LATER_AS",c):g.Q("YTP_WATCH_LATER_AS_2",c),image:b.userDisplayImage})):a.update({title:g.Q("YTP_WATCH_LATER_2"),image:null}));$U(a.F)};
wW=function(a){var b=g.V(a),c=b.experiments.A("watermark_src");g.X.call(this,{G:"a",X:["ytp-watermark","yt-uix-sessionlink",c?"ytp-exp":null],P:{target:"_blank",href:"{{url}}","aria-label":g.Q("YTP_URL_NAVIGATE_TO",{WEBSITE:yE(b)}),"data-sessionlink":"feature=player-watermark",style:c?"background: no-repeat center/100% url("+c+");width:110px;height:26px":null},I:c?null:[g.Xr?{G:"div",X:["ytp-icon","ytp-icon-watermark"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 77 34",width:"100%"},I:[{G:"path",
Ba:!0,L:"ytp-svg-fill",P:{d:"m 26.81,26.92 0,-1.67 c -1.06,1.25 -1.96,1.89 -2.94,1.89 -0.86,0 -1.46,-0.41 -1.76,-1.17 -0.18,-0.46 -0.31,-1.18 -0.31,-2.23 l 0,-12.18 2.80,0 0,12.48 c .06,.42 .24,.58 .59,.58 .53,0 1.02,-0.48 1.61,-1.34 l 0,-11.72 2.80,0 0,15.38 -2.80,0 0,0 z M 18.83,12.91 c -0.74,-1.05 -1.91,-1.48 -3.10,-1.48 -1.33,0 -2.35,.43 -3.10,1.48 -0.57,.77 -0.88,2.02 -0.88,3.66 l -0.00,5.46 c 0,1.63 .27,2.76 .84,3.53 .74,1.04 1.95,1.60 3.13,1.60 1.18,0 2.41,-0.55 3.16,-1.60 .56,-0.76 .82,-1.89 .82,-3.53 l 0,-5.48 c 0,-1.64 -0.32,-2.87 -0.88,-3.65 l 0,0 0,0 z m -1.91,9.44 c .14,1.52 -0.31,2.27 -1.18,2.27 -0.87,0 -1.32,-0.75 -1.18,-2.27 l 0,-6.09 c -0.14,-1.52 .31,-2.23 1.18,-2.23 .87,0 1.33,.71 1.18,2.23 l -0.00,6.09 0,0 z m -8.27,4.56 -2.95,0 0,-8.37 c 0,0 -3.06,-10.27 -3.69,-12.18 l 3.10,0 2.07,8.02 2.06,-8.02 3.10,0 -3.69,12.18 0,8.37 0,0 z"}},
{G:"path",X:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"m 34,5.07 40,0 0,24 -40,0 z",fill:"none"}},{G:"path",Ba:!0,X:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M 73.80,3.53 C 72.12,1.72 70.24,1.72 69.38,1.61 63.21,1.15 53.95,1.15 53.95,1.15 c -0.01,0 -9.27,0 -15.44,.45 -0.86,.10 -2.74,.11 -4.41,1.91 -1.32,1.37 -1.75,4.49 -1.75,4.49 0,0 -0.44,3.66 -0.44,7.32 l 0,3.43 c 0,3.66 .44,7.32 .44,7.32 0,0 .43,3.11 1.75,4.49 1.67,1.80 3.88,1.74 4.86,1.93 C 42.48,32.89 53.94,33 53.94,33 c 0,0 9.26,-0.01 15.43,-0.47 .86,-0.10 2.74,-0.11 4.41,-1.91 1.32,-1.37 1.75,-4.49 1.75,-4.49 0,0 .44,-3.66 .44,-7.32 l 0,-3.43 c 0,-3.66 -0.44,-7.32 -0.44,-7.32 0,0 -0.43,-3.11 -1.75,-4.49 l 0,0 0,0 z m -35.17,23.39 0,-17.51 -3.10,0 0,-2.89 9.30,-0.00 0,2.89 -3.24,0 0,17.51 -2.95,0 0,0 z m 10.78,0 0,-1.67 c -1.06,1.25 -1.96,1.89 -2.94,1.89 -0.86,0 -1.46,-0.41 -1.76,-1.17 -0.18,-0.46 -0.31,-1.18 -0.31,-2.23 l 0,-12.03 2.80,0 0,12.33 c .06,.42 .24,.58 .59,.58 .53,0 1.02,-0.48 1.61,-1.34 l 0,-11.57 2.80,0 0,15.23 -2.80,0 0,0 z m 12.70,-1.52 c -0.35,1.13 -1.13,1.71 -2.19,1.71 -0.95,0 -2.01,-0.58 -2.90,-1.72 l -0.00,1.53 -3.02,0 0,-20.40 3.02,0 -0.00,6.65 c .86,-1.09 1.92,-1.71 2.91,-1.71 1.06,0 1.78,.63 2.13,1.77 .17,.61 .35,1.59 .35,3.03 l 0,6.09 c 0,1.40 -0.11,2.40 -0.29,3.04 l 0,0 0,0 z m 7.36,-1.89 c .02,-0.15 .02,-0.80 .02,-1.91 l 2.80,0 0,.43 c 0,.88 -0.07,1.51 -0.09,1.79 -0.09,.61 -0.30,1.16 -0.62,1.65 -0.73,1.10 -1.83,1.64 -3.23,1.64 -1.39,0 -2.46,-0.51 -3.23,-1.55 -0.56,-0.76 -0.93,-1.89 -0.93,-3.51 l 0,-5.33 c 0,-1.62 .33,-2.88 .89,-3.65 .77,-1.04 1.83,-1.59 3.20,-1.59 1.34,0 2.40,.55 3.15,1.59 .55,.76 .86,1.95 .86,3.58 l 10e-4,3.11 -5.32,0 0,2.73 c -0.00,1.40 .37,2.11 1.29,2.11 .65,0 1.04,-0.36 1.19,-1.10 l 0,0 0,0 z m -1.21,-9.51 c -0.89,0 -1.27,.38 -1.27,1.81 l 0,1.68 2.51,-0.00 0,-1.66 c 0,-1.40 -0.35,-1.83 -1.23,-1.83 l 0,0 0,0 z m -11.16,.69 -0.00,9.23 c .44,.46 .95,.69 1.39,.69 .77,0 1.11,-0.58 1.11,-2.10 l 0,-6.54 c 0,-1.52 -0.34,-1.97 -1.11,-1.97 -0.44,0 -0.94,.23 -1.39,.69 l 0,0 0,0 z",
fill:"#fff"}}]}]});this.A=a;this.o=null;this.O(a,"videodatachange",this.B);this.O(a,"presentingplayerstatechange",this.D);a=g.LN(a);g.LO(this,!g.T(a,2));this.B()};
xW=function(a){AT.call(this,a);var b=g.V(a),c=g.MN(a);this.xa=48;this.wa=69;if(b.experiments.g("enable_cards_button_title")||b.experiments.g("enable_share_button_title")||b.experiments.g("enable_watch_later_button_title"))this.xa=62,this.wa=91;var d=g.V(this.g),e=d.V;if(tz("ytp-normal-css-loaded")){var f=tz("ytp-sprite-mode-css-loaded");e!=f&&g.ws(Error("Player sprite mode mismatch. playerInSpriteMode: "+e+", spriteModeCssServed: "+f+", isMobile: "+d.isMobile),"WARNING")}this.U=null;this.H=[];d=new g.X({G:"div",
L:"ytp-gradient-top"});g.J(this,d);g.gO(a,d.element,1);this.Ta=new g.fR(d,250,!0,100);g.J(this,this.Ta);this.C=new g.X({G:"div",L:"ytp-chrome-top"});g.J(this,this.C);g.gO(a,this.C.element,1);this.Sa=new g.fR(this.C,250,!0,100);g.J(this,this.Sa);this.ha=[];this.o=new kW(a,this);g.J(this,this.o);g.gO(a,this.o.element,4);!b.experiments.g("related_on_pause_killswitch")&&b.o&&b.Cc&&(this.fb=new rU(a,this),g.J(this,this.fb),g.gO(a,this.fb.element,4));d=new wU(a);g.J(this,d);g.gO(a,d.element,5);d.subscribe("show",
(0,g.z)(this.Jl,this,d));this.ha.push(d);d=new yU(a,this,d);g.J(this,d);d.na(this.C.element);this.Ka=new hW(a);g.J(this,this.Ka);this.Ka.na(this.C.element);d=new g.EO({G:"div",L:"ytp-chrome-top-buttons"});g.J(this,d);d.na(this.C.element);b.experiments.g("embed_show_top_buttons")&&b.o&&g.L(this.C.element,"ytp-chrome-top-show-buttons");b.experiments.A("logo_src")&&g.L(this.g.getRootNode(),"ytp-red2");b.jD&&(this.ka=new vW(a,this,this.C.element),g.J(this,this.ka),this.ka.na(d.element));e=new AU(a,this);
g.J(this,e);g.gO(a,e.element,5);e.subscribe("show",(0,g.z)(this.Jl,this,e));this.ha.push(e);this.Qa=new DU(a,this,e,this.C.element);g.J(this,this.Qa);this.Qa.na(d.element);this.V=new FT(a,this,this.C.element);g.J(this,this.V);this.V.na(d.element);e=new HT(a,this.V);g.J(this,e);e.na(d.element);(this.A="1"==b.B?new bW(a,this,this.B):null)&&g.J(this,this.A);"3"==b.B&&(d=new zU(a,this),g.J(this,d),g.gO(a,d.element,8));this.J=new jU(a,this);g.J(this,this.J);this.J.subscribe("show",this.ws,this);this.Ja=
!1;b.Cf&&(d=new wW(a),g.J(this,d),g.gO(a,d.element,7));d=new DT(a);g.J(this,d);g.gO(a,d.element,4);this.Z=new g.X({G:"div",P:{tabindex:0}});this.Z.ba("focus",this.Wx,this);g.J(this,this.Z);this.aa=new g.X({G:"div",P:{tabindex:0}});this.aa.ba("focus",this.Xx,this);g.J(this,this.aa);(this.da=b.useTabletControls?null:new lU(a,c,this.J,this.B,this.F,(0,g.z)(this.kj,this)))&&g.J(this,this.da);this.O(a,"fullscreentoggled",this.SB);this.O(a,"offlineslatestatechange",this.lF,this);this.O(a,"cardstatechange",
this.Fe,this)};
qW=function(a,b,c,d,e){b.style.left="";b.style.top="";b.style.bottom="";var f=g.Lh(b);e=e||a.A&&g.Rd(a.A.la(),c);if(null==d||!e){var k=g.Lh(c);var l=g.Ih(c,a.g.getRootNode())}d=(null==d?l.x+k.width/2:d)-f.width/2;e?(k=dW(a.A),l=eW(a.A),c=g.MN(a.g).Ga().height,d=g.Zc(d,k,k+l-f.width),f=c-(a.A.A.Wc()?72:50)-f.height):g.Rd(a.C.element,c)?(k=g.MN(a.g).Ga().width,d=g.Zc(d,12,k-f.width-12),f=a.Wc()?a.wa:a.xa,"gvn"==g.V(a.g).g&&(f+=20)):(a=g.MN(a.g).Ga(),d=g.Zc(d,12,a.width-f.width-12),f=l.y>(a.height-k.height)/
2?l.y-f.height-12:l.y+k.height+12);b.style.top=f+"px";b.style.left=d+"px"};
yW=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!=g.wh(b,"display")&&"true"!=b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=yW(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
zW=function(a){this.J=a;this.D=null;this.g=[];this.A=[];this.C=[];this.H=1;this.o=[];this.B=!1};
iO=function(a,b,c){a.B?a.C.push({type:b,data:c}):a.J.R(b,c)};
g.jR=function(a,b,c){g.rb(a.g,b);ub(a.g,b);var d=String(a.H++);b.setAttribute("data-visual-id",d);g.Je(c,(0,g.z)(a.F,a,b))};
g.kR=function(a,b,c){var d=b.getAttribute("data-visual-id");g.rb(a.g,b);iO(a,"onLogServerVeCreated",{id:d,tracking_params:c})};
FW=function(a,b){g.I.call(this);var c=this;this.ca=vu(b);var d=this.ca.args||{};this.g=new sE(d);g.J(this,this.g);!this.g.experiments.g("legacy_autoplay_flag")&&jE(this.g)&&(d.autoplay="1");this.dd=PD(jE(this.g)&&"blazer"!=this.g.g,d.enablesizebutton);this.Ja=PD(!1,d.player_wide);this.jc=!1;this.Y=this.g.jb&&PD(!1,d.external_list);this.Aa=(this.Cc=this.g.jb&&PD(!1,d.external_play_video))&&this.g.experiments.g("player_unified_fullscreen_transitions");this.U=new g.iu(this);g.J(this,this.U);sg=function(a,
b){g.ws(b,"WARNING")};
this.Sa=null;this.V=new g.jr;this.Z=new g.jr;this.aa=new zW(this.Z);this.aa.pause();this.o=new EN(this);g.J(this,this.o);this.K=new EN(this,1);g.J(this,this.K);this.H=new SR(this);g.J(this,this.H);this.T=1;this.Va={};this.N=this.g.storeUserVolume?oy():{volume:100,muted:this.g.mute};this.M=this.g.jb?new FI(this,1):new wy(this,1);g.J(this,this.M);this.D=null;this.Ta={};d={};this.qb=(d.internalAbandon=this.xD,d.internalvideodatachange=this.wD,d.playbackready=this.yD,d.playbackstarted=this.zD,d.statechange=
this.Oz,d.signatureexpired=this.aG,d);this.B=AW(this);g.J(this,this.B);this.J=new GI(this.g,"",this.B);this.A=BW(this);d={};this.cd=(d.airplayactivechange=this.nD,d.airplayavailabilitychange=this.oD,d.beginseeking=this.FD,d.endseeking=this.nE,d.internalAbandon=this.yE,d.internalaudioformatchange=this.BD,d.internalvideodatachange=this.Zm,d.internalvideoformatchange=this.wG,d.liveviewshift=this.DE,d.playbackstalledatstart=this.gG,d.progresssync=this.Rz,d.seekto=this.Sz,d.onLoadProgress=this.EE,d.onVideoProgress=
this.Uz,d.playbackready=this.tF,d.statechange=this.fu,d.connectionissue=this.WD,d.newelementrequired=this.gF,d.heartbeatparams=this.Pz,d.videoelementevent=this.Tz,d);this.F=null;this.wa=new eT(5,function(a){a!=g.W(c,a.getPlayerType())&&a.dispose()});
g.J(this,this.wa);this.Cb=this.Db=-1;this.Xa=new g.O(this.H.je,16,this.H);g.J(this,this.Xa);this.fb=!1;this.ha=!0;this.xa=this.Qa=this.C=null;this.bc=!1;this.oc=this.Dc=null;this.Wa=this.pa=0;this.ka=this.Ka=!1;this.Ha=this.da=null;this.U.O(this.o,"crn_appapi",this.uD);this.U.O(this.o,"crx_appapi",this.vD);this.U.O(this.o,"crn_appad",this.zt);this.U.O(this.o,"crx_appad",this.zt);this.U.O(this.o,"presentingplayerstatechange",this.Qz);this.U.O(this.o,"resize",this.LF);this.H.na(g.nd(a));this.sc=CW(this,
this.H.element);g.J(this,this.sc);g.Xr=this.g.V;DW(this);this.J.o("fs");EW(this);this.Ha=new xW(this.o);this.B.F=this.Ha;this.Ha.init();g.UN(this.K,"init")};
BW=function(a){var b=new AM(a.g,1,a.J,a.H,(0,g.z)(a.V.R,a.V),(0,g.z)(a.Oh,a));CN(b,a.g.o?1:GW(a,g.vv("yt-player-playback-rate")||1));HW(a,b,a.qb);return b};
AW=function(a){var b="",c=a.ca.assets.js||"";0==c.indexOf("//")&&(c=a.g.Z+":"+c);"/base.js"==c.substr(-8)&&(b=c.substr(0,c.length-8)+"/");b=new LR(a.o,b,a);c={};a=(c.loaded=(0,g.z)(a.WE,a),c.unloaded=(0,g.z)(a.XE,a),c.destroyed=(0,g.z)(a.En,a),c);b.Z=a;return b};
JW=function(a,b){a.Sa||(a.Sa=new dT(a),g.J(a,a.Sa),g.gO(a.o,a.Sa.element,4));g.LO(a.Sa,b);IW(a)&&g.KN(a.B).lB()};
LW=function(a){var b=KW.getTag(!0,!a.g.C);a.D=new rM(b);a.F&&eN(a.F,a.D);try{if(a.g.wa)a.xa&&a.U.Ma(a.xa),a.xa=a.U.O(a.D,"volumechange",a.UE);else{a.D.setVolume(a.N.volume/100);var c=a.D,d=a.N.muted;sz();c.g.muted=d}}catch(e){b="setvolume.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_"));g.KM(a.A,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",b);return}WR(a.H,b);try{DH(a.D)}catch(e){b="activate.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_")),g.KM(a.A,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",
b)}};
MW=function(a){if(a.D){a.xa&&(a.U.Ma(a.xa),a.xa=null);a.F&&bN(a.F);var b=a.H;b.o&&(g.Kd(b.o),b.o=null);KW.releaseTag(a.D.la());a.D=null}};
VQ=function(a,b){var c=g.W(a,b);c||(c=NW(a,b),OW(a,c));YQ(a,c)};
YQ=function(a,b){if(a.F!=b){var c=null;a.F&&(c=a.F.A,QR(a.B),$N(a,"cuerangesremoved",a.F.F.g.g||[]),ZQ(a));OW(a,b);a.F=b;a.D&&eN(b,a.D);HW(a,b,a.cd);a.Zm("newdata",b,b.getVideoData());a.g.experiments.g("disable_new_presenting_state_change")||!c||g.UH(c,b.A)||a.fu(new g.ZH(b.A,c));b.Ja.g&&a.Zm("dataloaded",b,b.getVideoData());b.getVideoData().Ca&&a.o.ua("onPlaybackQualityChange",b.getVideoData().Ca.video.quality);$N(a,"cuerangesadded",a.F.F.g.g||[]);VH(b.A)&&kN(b)}};
HW=function(a,b,c){for(var d in c)b.subscribe(d,c[d],a)};
OW=function(a,b){if(b!=a.A){var c=b.getPlayerType();a.Ta[c]=b}};
ZQ=function(a){var b;if(b=a.da)if(b=a.D)b=a.D,b=!!b&&b==a.da.g;b&&(MW(a),LW(a));bN(a.F);b=a.F;var c=a.cd;for(d in c)b.unsubscribe(d,c[d],a);var d=a.F;d!=a.A&&(b=d.getPlayerType(),a.Ta[b]==d&&delete a.Ta[b]);a.F=null};
g.W=function(a,b){return b?1==b?a.A:a.Ta[b]||null:a.F};
NW=function(a,b){if(2==b){var c=g.ic(a.g.U);a.g.experiments.g("legacy_autoplay_flag")&&(c.autoplay="1");var d=a.getVideoData();c.eventid=d.eventId;c.content_v=d.videoId;c=new sE(c);c.D="adunit";c=new AM(c,2,new GI(c,""),a.H,(0,g.z)(a.V.R,a.V),(0,g.z)(a.Oh,a));if(a.g.experiments.g("html5_copy_ctt_to_ad_playbacks")&&d.vssCredentialsToken){var e=c.getVideoData();e.vssCredentialsToken=d.vssCredentialsToken;e.dh=d.dh}}else c=new AM(a.g,b,a.J,a.H,(0,g.z)(a.V.R,a.V),(0,g.z)(a.Oh,a));return c};
PW=function(a){var b=a.B;if(!b.A)try{NR(b)?(b.A=new CR(b.ca.K),b.A.create()):g.dO(b.M,"ad")}catch(c){g.dO(b.M,"ad"),g.ws(c)}b.Tp();b.Pp();b.Vp();b.Xp();b.Wp();b.Sp();b.Np();b.Op();b.Rp();b.Qp();b.Fl();b.Up();a.o.R("videoready",a.getVideoData())};
QW=function(a){return a.A.getVideoData()};
RW=function(a,b){var c=g.W(a,b);return(c=c?c.o:null)?KH(c):0};
g.SW=function(a,b,c){(a=g.W(a,void 0===c?1:c))&&yM(a,b)};
TW=function(a){var b=QW(a);return a.g.experiments.g("legacy_autoplay_flag")?a.g.Ii:b.mf};
DW=function(a){var b=new g.uG(a.ca.args);g.ow()&&b.ad.push("remote");b.ac()&&(JM(a.A,b,(0,g.z)(a.wc,a)),TW(a)&&(a.g.Dc||a.g.cd)&&NM(a.A))};
EW=function(a){var b=a.H,c=b.app.g;c.ih||b.Do("tag-pool-enabled");c.Mb&&b.Do("house-brand");"gvn"==c.g&&(b.Do("ytp-gvn"),b.element.style.backgroundColor="transparent");c.ka&&(b.F=g.Cu("yt-dom-content-change",b.je,b));b.O(window,"resize",b.je,b);b=a.M;b.o=a.H.element;for(var d in b.B)b.o[d]=b.B[d];for(d in b.C)b.o[d]=b.C[d];(d=Tt(a.H.element))&&a.U.O(a.H,d,a.pE);a.U.O(window,"resize",a.MF);b=a.ca.args;LW(a);d=QW(a);a.o.ua("onVolumeChange",a.N);if(b&&QI(b))if((c=BE(a.g))&&!a.Y&&(b.fetch=0),UW(a,b),
c&&!a.Y)VW(a);else if(!d.ac())a.C.onReady((0,g.z)(a.Jn,a));if(b=a.ca.args.jsapicallback)g.Ca(b)||(b=g.y(b)),b&&(0,g.z)(b,g.w,a.g.pz);YQ(a,a.A);g.T(a.A.A,128)||(b=rz(a.g.C),"fmt.noneavailable"==b?g.KM(a.A,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"==b?g.KM(a.A,b,"YTP_ERROR_UNSUPPORTED_DEVICE","nocanplaymedia.1"):d&&d.ac()&&TW(a)&&(a.g.Dc||a.g.cd)?WW(a):g.IE(a.g)||XW(a))};
XW=function(a){a.o.R("initializingmode");g.YW(a,2);a.B.Fl()};
WW=function(a){if(g.T(a.A.A,128))return!1;TW(a)&&a.g.cd&&(KW.hasTags(void 0)&&a.ka?(Ay(a,{muted:!1,volume:a.N.volume},!1),ZW(a,!1)):KW.hasTags(void 0)||a.N.muted||(Ay(a,{muted:!0,volume:a.N.volume},!1),ZW(a,!0)));$W(a,1,a.A.getVideoData().videoId);a.o.R("initializingmode");YQ(a,a.A);g.YW(a,3);var b;if(!(b=!a.g.ih||pE()&&!a.bc)){if(b=a.da)b=a.D,b=!!b&&b==a.da.g;b=b&&a.bc}b&&(MW(a),LW(a),eN(a.A,a.D));PM(a.A);if(g.T(a.A.A,128))return!1;aX(a,3);return a.bc=!0};
IW=function(a){a=g.KN(a.B);return!!a&&a.loaded};
bX=function(a,b){if(a.F==a.A&&a.F.Dc!=b){var c=a.F;c.Dc=b;c.o&&(c.o.g.loop=b);a.o.R("loopchange",b)}};
cX=function(a,b,c){(0,window.isNaN)(b)||(b=GW(a,b),a.A.Ha!=b&&(CN(a.A,b),c&&!a.g.o&&g.uv("yt-player-playback-rate",b),a.o.ua("onPlaybackRateChange",b)))};
GW=function(a,b){var c=1;c=a.o.Hg();return c=1>b?g.nb(c,function(a){return a>=b}):pb(c,function(a){return a<=b})};
eX=function(a,b){var c=yN(a.A,b);a.F&&a.F!=a.A&&(c=dX(c,yN(a.F,b),"ad_"));if(b&&a.D){c["0sz"]=0==g.Lh(a.D.g).Rb();c.op=vh(a.D.g,"opacity");var d=Ah(a.D.g).y+g.Lh(a.D.g).height;c.yof=0>=d;c.dis=vh(a.D.g,"display")}(d=b?MM():null)&&(c.gpu=d);c.cgr=!0;c.debug_playbackQuality=a.K.Qh();c.debug_date=(new Date).toString();delete c.uga;delete c.q;(d=a.B.D)&&(c=dX(c,d.Nv(),"fresca_"));return JSON.stringify(c,null,2)};
JN=function(a){return 1==a.T?1:IW(a)?3:g.W(a).getPlayerType()};
fX=function(a,b){return 3==JN(a)?YH(g.KN(a.B).F):2==b?a.Cb:a.Db};
gX=function(a){var b=a.B.A;b&&b.o&&b.destroy();bX(a,!1);a.Va={};a=a.J;b=a.B;b.aa={};b.Y={};a.C=!1};
VW=function(a){var b=hX();if(b)if(b.list){if(a.C&&a.C.listId.toString()==b.list)if(0<=b.index){var c=b.video;a.o.isFullscreen()&&((c=c[a.C.bb])&&c.encrypted_id!=a.C.wb().videoId||(b.index=a.C.bb));UI(a.C,b);a.Qa&&iX(a,a.Qa)}else a.Qa=null}else a.bj()};
UW=function(a,b){a.C&&(a.C.unsubscribe("error",a.bj,a),g.Ke(a.C),a.C=null);b&&(a.Y&&(b.fetch=0),a.C=new g.PI(b),a.C.subscribe("error",a.bj,a))};
jX=function(a,b,c,d){b in a.Va||(c=new g.Fy(c,d,{id:b,priority:1}),c.namespace="appad",ZK(a.A.F,[c]),a.Va[b]=c)};
kX=function(a,b,c){c={label:c};a.g.experiments.g("send_pyv_ad_mt_and_abandon_pings")&&(a=1E3*a.getCurrentTime(),c.ad_mt=Math.round(Math.max(0,a)).toString());return g.Ns(b,c)};
g.YW=function(a,b){b!=a.T&&(2==b&&(aX(a,-1),aX(a,5)),a.T=b,a.o.R("appstatechange",b))};
aX=function(a,b){a.F&&2==a.F.getPlayerType()?a.Cb!=b&&(a.Cb=b,a.o.ua("onAdStateChange",b)):a.Db!=b&&(a.Db=b,a.o.ua("onStateChange",b))};
lX=function(a,b,c,d,e){c=0!=c;if(e=g.W(a,e))2==a.T&&WW(a),RM(e,b,c,d)};
nX=function(a,b,c,d,e){a.g.Mb&&NE(b);!a.g.experiments.g("legacy_autoplay_flag")&&jE(a.g)&&(b.autoplay="1");var f=new g.uG(b);d||(b&&QI(b)?(BE(a.g)&&!a.Y&&(b.fetch=0),UW(a,b)):a.C&&UW(a,null),a.Y=PD(!1,b.external_list),BE(a.g)&&!a.Y&&VW(a));return mX(a,f,c,e)};
pX=function(a,b,c,d){a.wa.get(c+b.videoId)||(b.hk=!0,d?(d=g.W(a,c),oX(a,c)):d=NW(a,c),JM(d,b,(0,g.z)(a.wc,a)),NM(d,!0),a.wa.set(c+b.videoId,d))};
$W=function(a,b,c){var d=b+c;if(c=a.wa.get(d)){a.wa.remove(d);if(c==g.W(a,b))return c;if(1==c.getPlayerType()){c.getVideoData().autonavState=a.A.getVideoData().autonavState;b=a.A;d=a.qb;for(var e in d)b.unsubscribe(e,d[e],a);e=a.A.Ha;a.A.dispose();a.A=c;CN(a.A,e);HW(a,c,a.qb);gX(a)}else(e=g.W(a,b))&&e.dispose();a.F.getPlayerType()==c.getPlayerType()?YQ(a,c):OW(a,c)}return c};
mX=function(a,b,c,d){hG("_start",a.J.g)||(VF("p",void 0,a.J.g),a.J.info("srt",0));var e=$W(a,c||a.F.getPlayerType(),b.videoId);if(!e){e=g.W(a,c);if(!e)return!1;a.Xa.stop();oX(a,c);JM(e,b,(0,g.z)(a.wc,a),d)}if(!LM(e))return!1;a.fb&&(e.Cb=!1,a.fb=!1);if(e==a.A)return g.YW(a,1),WW(a);PM(e);return!0};
qX=function(a,b,c){c=g.W(a,c);b&&c==a.A&&(c.getVideoData().Zd=!0)};
sX=function(a,b,c){a.g.Mb&&NE(b);if(b&&QI(b))if(a.ha=!0,UW(a,b),(b=a.C.wb())&&b.ac())rX(a,b,c);else a.C.onReady((0,g.z)(a.Jn,a));else c||(c=JN(a)),1==c&&a.bj(),rX(a,new g.uG(b),c)};
rX=function(a,b,c){var d=g.W(a,c);d&&(oX(a,c),JM(d,b,(0,g.z)(a.wc,a)),d.C.ge(b.tb),d==a.A&&(g.YW(a,1),XW(a)))};
g.uX=function(a,b,c,d,e,f){if(!b&&!d)throw Error("Playback source is invalid");a.o.isFullscreen()&&!a.Aa||!jE(a.g)?(c=a.J,f=c.B,f.aa={},f.Y={},c.C=!1,a.J.reset(),b={video_id:b},e&&(b.autoplay="1"),d?(b.list=d,a.ha=!1,tX(a,b,void 0,void 0,void 0)):nX(a,b,1)):(c=c||{},c.lact=g.Wu(),c.vis=a.Oh(),a.Cc||"gaming"==a.g.g?a.o.ua("onPlayVideo",{videoId:b,sessionData:c,listId:d}):(d=f&&a.getVideoData().isLiveDestination?a.g.aa:a.g.getVideoUrl(b,d),e=g.y("yt.player.exports.navigate"),a.g.experiments.g("legacy_navigate_with_player")?
(e(d,c,!0),PO(d)):e(d,c)))};
tX=function(a,b,c,d,e){if(g.Da(b)&&!g.za(b)){c="playlist list listType index startSeconds suggestedQuality".split(" ");d={};for(e=0;e<c.length;e++){var f=c[e];b[f]&&(d[f]=b[f])}b=d}else c={index:c,startSeconds:d,suggestedQuality:e},g.u(b)&&16==b.length?c.list="PL"+b:c.playlist=b,b=c;UW(a,b);a.C.onReady((0,g.z)(a.Jn,a))};
g.vX=function(a){if(a.o.app.ka)return!1;if(3==JN(a))return!0;BE(a.g)&&!a.Y&&VW(a);return!(!a.C||!a.C.hasNext())};
wX=function(a,b){QW(a).autonavState=b;a.o.R("autonavchange",b)};
xX=function(a,b,c){var d=g.W(a,1).getVideoData().fe;g.hO(a.o)&&d?(d=g.H(d,g.fT),b=d[0],d=c?b.fq:b.Qc,g.uX(a,b.wb().videoId,d,b.getPlaylistId(),c)):!a.Y||a.o.isFullscreen()&&!a.Aa?3==JN(a)?g.KN(a.B).jB():a.C&&(BE(a.g)&&!a.o.isFullscreen()?iX(a,"yt.www.watch.lists.next"):(a.C.hasNext(b)&&TI(a.C,RI(a.C)),a.C.be?mX(a,a.C.wb(void 0,c),1):a.ha=!1)):a.o.ua("onPlaylistNext")};
yX=function(a,b){!a.Y||a.o.isFullscreen()&&!a.Aa?3==JN(a)?g.KN(a.B).kB():a.C&&(BE(a.g)&&!a.o.isFullscreen()?iX(a,"yt.www.watch.lists.prev"):(a.C.Yd(b)&&TI(a.C,SI(a.C)),a.C.be?mX(a,a.C.wb(),1):a.ha=!1)):a.o.ua("onPlaylistPrevious")};
iX=function(a,b){var c=g.y(b);if(c){var d=hX();d&&d.list&&c();a.Qa=null}else a.Qa=b};
hX=function(){var a=g.y("yt.www.watch.lists.getState");return a?a():null};
zX=function(a,b,c,d,e,f){b={id:b};"chapter"==f?(b.style="ytp-chapter-marker",b.visible=!0):(0,window.isNaN)(e)||("ad"==f?b.style="ytp-ad-progress":(b.style="ytp-time-marker",b.color=e),b.visible=!0);c=new g.Fy(1E3*c,1E3*d,b);c.namespace="appapi";YN(a,[c],1);return!0};
YN=function(a,b,c){var d=g.W(a,c);d&&(ZK(d.F,b),c&&JN(a)!=c||$N(a,"cuerangesadded",b))};
AX=function(a){var b=(0,g.Ru)(),c=a.getCurrentTime();a=a.getVideoData();return b-Math.max(1E3*(c-a.startSeconds),0)};
Ay=function(a,b,c){a.g.J&&(a.N=b,b.muted||ZW(a,!1),c&&a.g.storeUserVolume&&!a.g.wa&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.uv("yt-player-volume",c),g.uv("yt-player-volume",c,2592E3))),BX(a),c=g.bt&&!a.D.Ic(),!a.g.wa||c)&&(b=g.ic(b),a.g.storeUserVolume||(b.unstorable=!0),a.o.ua("onVolumeChange",b))};
BX=function(a){var b=a.getVideoData();b.Ri||(a.D.setVolume(a.N.volume*(a.g.wa?1:b.np)/100),b=a.D,a=a.N.muted,sz(),b.g.muted=a)};
ZW=function(a,b){b!=a.ka&&(a.ka=b,a.o.R("mutedautoplaychange",b))};
DX=function(a,b){var c=window.screen&&window.screen.orientation;if(a.g.experiments.g("lock_fullscreen2")&&c&&c.lock&&(!g.bt||!g.CX))if(b){var d=0==c.type.indexOf("portrait"),e=g.ZR(a.H),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.Ka||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.va);a.Ka=!0}}else a.Ka&&(a.Ka=!1,c.unlock())};
EX=function(a,b){var c=!!b,d=!!a.Wa!=c;a.Wa=b;a.g.experiments.g("legacy_player_fullscreen_order")?d&&(a.J.o("fsc"),a.g.ca=c,a.H.je()):(a.g.ca=c,a.H.je(),d&&a.J.o("fsc"));d&&(a.o.R("fullscreentoggled",c),d=QW(a),c={fullscreen:c,videoId:d.ypcOrigin||d.videoId,time:a.getCurrentTime()},a.K.getPlaylistId()&&(c.listId=a.K.getPlaylistId()),a.o.ua("onFullscreenChange",c))};
$N=function(a,b,c){a.o.R(b,c);var d=g.gE(a.g)||g.hE(a.g);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.o.ua(e,c)}};
GX=function(a,b){var c=g.W(a,b);c&&(2==a.T?WW(a):!a.g.experiments.g("disable_reload_on_error")&&c.A.isError()?FX(a,"user"):g.T(c.A,2)?lX(a,0):kN(c))};
oX=function(a,b){g.xF(a.pa);a.pa=0;var c=g.W(a,b);if(c&&1!=a.T&&2!=a.T){QR(a.B);if(1==b){var d=a.B.A;d&&d.o&&d.destroy()}$M(c);$N(a,"cuerangesremoved",a.F.F.g.g||[]);c.F.reset()}};
HX=function(a,b,c,d,e){c=0!=c;var f=g.W(a,e);if(!f||2!=f.getPlayerType()&&!g.$G(f.getVideoData()))3==JN(a)?g.KN(a.B).Xh("control_seek",b,c):lX(a,b,c,d,e)};
IX=function(a,b,c){a.dd=b;a.Ja=c;a.o.R("sizestylechange",b,c);a.H.je()};
FX=function(a,b,c){if(!a.fb){c&&(MW(a),LW(a));a.fb=!0;c=g.W(a);c.Cb=!0;c.Fc("reloading","reason."+b);c=a.getVideoData();var d={};d.video_id=c.videoId;c.va||(d.start=g.W(a).getCurrentTime(),d.resume="1");c.ie&&(d.vvt=c.ie);c.vssCredentialsToken&&(d.vss_credentials_token=c.vssCredentialsToken,d.vss_credentials_token_type=c.dh);c.oauthToken&&(d.oauth_token=c.oauthToken);d.autoplay=1;d.reload_count=c.kg+1;d.reload_reason=b;c.bh&&(d.unplugged_partner_opt_out=c.bh);nX(a,d)}};
JX=function(a){var b=a.getVideoData().Ri,c=a.g.Oe;b||c?(a=a.D,a.D=!0,sz(),a.g.muted=!0):(a.D.D=!1,Ay(a,a.N))};
CW=function(a,b){return a.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&a.g.o?new gT(b):null};
dX=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
aa=[];ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ha=0;qa("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
qa("WeakMap",function(a){function b(a){this.za=(f+=Math.random()+1).toString();if(a){da();la();a=g.na(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ra(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ra(a,e))throw Error("WeakMap key fail: "+a);a[e][this.za]=b;return this};
b.prototype.get=function(a){return ra(a,e)?a[e][this.za]:void 0};
b.prototype.has=function(a){return ra(a,e)&&ra(a[e],this.za)};
b.prototype["delete"]=function(a){return ra(a,e)&&ra(a[e],this.za)?delete a[e][this.za]:!1};
return b});
qa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.g;return ma(function(){if(c){for(;c.head!=a.g;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.o[c];if(d&&ra(a.o,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,uc:l}}return{id:c,list:d,index:-1,uc:void 0}}
function e(a){this.o={};this.g=b();this.size=0;if(a){a=g.na(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.na([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(t){return!1}}())return a;
da();la();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.o[c.id]=[]);c.uc?c.uc.value=b:(c.uc={next:this.g,previous:this.g.previous,head:this.g,key:a,value:b},c.list.push(c.uc),this.g.previous.next=c.uc,this.g.previous=c.uc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.uc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.o[a.id],a.uc.previous.next=a.uc.next,a.uc.next.previous=a.uc.previous,a.uc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.o={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).uc};
e.prototype.get=function(a){return(a=d(this,a).uc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
qa("Set",function(a){function b(a){this.g=new window.Map;if(a){a=g.na(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.g.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.na([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();la();b.prototype.add=function(a){this.g.set(a,a);this.size=this.g.size;return this};
b.prototype["delete"]=function(a){a=this.g["delete"](a);this.size=this.g.size;return a};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(a){return this.g.has(a)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.g.forEach(function(d){return a.call(b,d,d,c)})};
return b});
qa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
qa("Promise",function(a){function b(a){this.g=0;this.A=void 0;this.o=[];var b=this.B();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.g=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.o=function(a){null==this.g&&(this.g=[],this.B());this.g.push(a)};
c.prototype.B=function(){var a=this;this.A(function(){a.D()})};
var e=ea.setTimeout;c.prototype.A=function(a){e(a,0)};
c.prototype.D=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.C(n)}}}this.g=null};
c.prototype.C=function(a){this.A(function(){throw a;})};
b.prototype.B=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.K),reject:a(this.C)}};
b.prototype.K=function(a){if(a===this)this.C(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.N(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.J(a):this.D(a)}};
b.prototype.J=function(a){var b=void 0;try{b=a.then}catch(m){this.C(m);return}"function"==typeof b?this.T(b,a):this.D(a)};
b.prototype.C=function(a){this.F(2,a)};
b.prototype.D=function(a){this.F(1,a)};
b.prototype.F=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.A=b;this.H()};
b.prototype.H=function(){if(null!=this.o){for(var a=this.o,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.o=null}};
var f=new c;b.prototype.N=function(a){var b=this.B();a.Wi(b.resolve,b.reject)};
b.prototype.T=function(a,b){var c=this.B();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(B){f(B)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Wi(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Wi=function(a,b){function c(){switch(d.g){case 1:a(d.A);break;case 2:b(d.A);break;default:throw Error("Unexpected state: "+d.g);}}
var d=this;null==this.o?f.o(c):this.o.push(function(){f.o(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.na(a),f=e.next();!f.done;f=e.next())d(f.value).Wi(b,c)})};
b.all=function(a){var c=g.na(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Wi(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
var KX="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},LX="undefined"!=typeof window.Reflect&&window.Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=KX(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c};
qa("Reflect.construct",function(a){return a||LX});
qa("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
Qp=Qp||{};g.w=this;Ea="closure_uid_"+(1E9*Math.random()>>>0);Fa=0;g.F=Date.now||function(){return+new Date};g.E(Ka,Error);Ka.prototype.name="CustomError";var ld;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/"/g,Ta=/'/g,Ua=/\x00/g,Oa=/[\x00&<>"']/,zq={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},yq={"'":"\\'"},Ya=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};var bd;g.qb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.u(a))return g.u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.MX=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.u(a))return g.u(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Md=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.u(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.H=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.u(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
bd=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.z)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.G)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.El=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.ww=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var NX=g.w.navigator;if(NX){var OX=NX.userAgent;if(OX){g.Rb=OX;break a}}g.Rb=""};var kc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");tc[" "]=g.va;var eC,bj,PX,QX,RX,fj,SX;g.uh=Sb("Opera");g.wd=Sb("Trident")||Sb("MSIE");eC=Sb("Edge");g.FE=eC||g.wd;g.th=Sb("Gecko")&&!(Xa(g.Rb,"WebKit")&&!Sb("Edge"))&&!(Sb("Trident")||Sb("MSIE"))&&!Sb("Edge");g.yd=Xa(g.Rb,"WebKit")&&!Sb("Edge");bj=Sb("Macintosh");g.CX=Sb("Windows");g.oE=Sb("Android");PX=pc();QX=Sb("iPad");RX=Sb("iPod");fj=sc();
a:{var TX="",UX=function(){var a=g.Rb;if(g.th)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eC)return/Edge\/([\d\.]+)/.exec(a);if(g.wd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.yd)return/WebKit\/(\S+)/.exec(a);if(g.uh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
UX&&(TX=UX?UX[1]:"");if(g.wd){var VX=xc();if(null!=VX&&VX>(0,window.parseFloat)(TX)){SX=String(VX);break a}}SX=TX}var yc=SX,vc={},WX;var XX=g.w.document;WX=XX&&g.wd?xc()||("CSS1Compat"==XX.compatMode?(0,window.parseInt)(yc,10):5):void 0;var Ac=WX;var Ad,Ld,Pd;Ad=!g.wd||g.Bc(9);Ld=!g.th&&!g.wd||g.wd&&g.Bc(9)||g.th&&g.zc("1.9.1");g.YX=g.wd&&!g.zc("9");Pd=g.wd||g.uh||g.yd;Dc.prototype.Rf=!0;Dc.prototype.Mf=function(){return this.g};
Dc.prototype.toString=function(){return"Const{"+this.g+"}"};
var Cc={};Fc("");var ZX=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),$X=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),aY=/^http:\/\/.*/,bY=/\s+/,cY=/[\d\u06f0-\u06f9]/;Ic.prototype.Rf=!0;Ic.prototype.Mf=function(){return this.g};
Ic.prototype.Bm=!0;Ic.prototype.Pl=function(){return 1};
var Gc={};Mc.prototype.Rf=!0;Mc.prototype.Mf=function(){return this.g};
Mc.prototype.Bm=!0;Mc.prototype.Pl=function(){return 1};
var Oc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lc={};Pc("about:blank");g.Tc.prototype.Bm=!0;g.Tc.prototype.Pl=function(){return this.o};
g.Tc.prototype.Rf=!0;g.Tc.prototype.Mf=function(){return this.g};
var Sc={};Vc("<!DOCTYPE html>",0);Vc("",0);Vc("<br>",0);g.h=g.ed.prototype;g.h.clone=function(){return new g.ed(this.x,this.y)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.hd.prototype;g.h.clone=function(){return new g.hd(this.width,this.height)};
g.h.Rb=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Rb()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var rd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=jd.prototype;g.h.la=function(a){return g.u(a)?this.g.getElementById(a):a};
g.h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.h.createElement=function(a){return this.g.createElement(String(a))};
g.h.appendChild=g.Gd;g.h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.h.removeNode=g.Kd;g.h.contains=g.Rd;var ae=g.va;var eE,dE,fE;g.fC=Sb("Firefox");eE=pc()||Sb("iPod");dE=Sb("iPad");fE=Sb("Android")&&!(nc()||Sb("Firefox")||Sb("Opera")||Sb("Silk"));g.bt=nc();g.cj=oc()&&!sc();var ge=null,le=null,fe=null;var oe=[];ne.prototype.clone=function(){return pe(this.o,this.B,this.A-this.B)};
ne.prototype.clear=function(){this.o=null;this.g=this.A=this.B=0;this.C=!1};
ne.prototype.reset=function(){this.g=this.B};
ne.prototype.getError=function(){return this.C||0>this.g||this.g>this.A};re.prototype.getError=function(){return this.B||this.g.getError()};
re.prototype.reset=function(){this.g.reset();this.o=this.A=-1};var xe="function"==typeof window.Uint8Array,ye=[];we.prototype.toString=function(){Ge(this);return this.o.toString()};
we.prototype.getExtension=function(a){if(this.A){this.g||(this.g={});var b=a.A;if(a.B){if(a.o())return this.g[b]||(this.g[b]=(0,g.H)(this.A[b]||[],function(b){return new a.g(b)})),this.g[b]}else if(a.o())return!this.g[b]&&this.A[b]&&(this.g[b]=new a.g(this.A[b])),this.g[b];
return this.A[b]}};
we.prototype.clone=function(){return new this.constructor(He(Fe(this)))};window.console&&"function"===typeof window.console.log&&(0,g.z)(window.console.log,window.console);var kf=!g.wd||g.Bc(9),dY=g.wd&&!g.zc("9");!g.yd||g.zc("528");g.th&&g.zc("1.9b")||g.wd&&g.zc("8")||g.uh&&g.zc("9.5")||g.yd&&g.zc("528");g.th&&!g.zc("8")||g.wd&&g.zc("9");var ff=function(){if(!g.w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.w.addEventListener("test",null,b);g.w.removeEventListener("test",null,b);return a}();g.I.prototype.ib=!1;g.I.prototype.fa=function(){return this.ib};
g.I.prototype.dispose=function(){this.ib||(this.ib=!0,this.W())};
g.I.prototype.W=function(){if(this.Ya)for(;this.Ya.length;)this.Ya.shift()()};g.Me.prototype.stopPropagation=function(){this.g=!0};
g.Me.prototype.preventDefault=function(){this.Ju=!1};g.E(Ne,g.Me);
Ne.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.th&&(uc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.o=a;a.defaultPrevented&&this.preventDefault()};
Ne.prototype.stopPropagation=function(){Ne.ga.stopPropagation.call(this);this.o.stopPropagation?this.o.stopPropagation():this.o.cancelBubble=!0};
Ne.prototype.preventDefault=function(){Ne.ga.preventDefault.call(this);var a=this.o;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,dY)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Qe;g.Oe="closure_listenable_"+(1E6*Math.random()|0);Qe=0;Te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ue(e,b,c,d);return-1<b?(Se(e[b]),g.vb(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};var df="closure_lm_"+(1E6*Math.random()|0),nf={},hf=0,qf="__closure_events_fn_"+(1E9*Math.random()>>>0);g.E(g.rf,g.I);g.rf.prototype[g.Oe]=!0;g.h=g.rf.prototype;g.h.Xn=function(a){this.K=a};
g.h.addEventListener=function(a,b,c,d){g.$e(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.lf(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.K;if(b){var c=[];for(var d=1;b;b=b.K)c.push(b),++d}b=this.ca;d=a.type||a;if(g.u(a))a=new g.Me(a,b);else if(a instanceof g.Me)a.target=a.target||b;else{var e=a;a=new g.Me(d,b);g.lc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var k=a.currentTarget=c[f];e=sf(k,d,!0,a)&&e}a.g||(k=a.currentTarget=b,e=sf(k,d,!0,a)&&e,a.g||(e=sf(k,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)k=a.currentTarget=c[f],e=sf(k,d,!1,a)&&e;return e};
g.h.W=function(){g.rf.ga.W.call(this);this.xd&&g.Xe(this.xd);this.K=null};
g.h.ba=function(a,b,c,d){return Ve(this.xd,String(a),b,!1,c,d)};
g.h.Ma=function(a,b,c,d){return this.xd.remove(String(a),b,c,d)};tf.prototype.get=function(){if(0<this.o){this.o--;var a=this.g;this.g=a.next;a.next=null}else a=this.A();return a};var Af;var Jf=new tf(function(){return new Ef},function(a){a.reset()},100);
Df.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.o=null),a.next=null);return a};
Ef.prototype.set=function(a,b){this.te=a;this.scope=b;this.next=null};
Ef.prototype.reset=function(){this.next=this.scope=this.te=null};var Ff,Hf=!1,If=new Df;Qf.prototype.reset=function(){this.context=this.o=this.B=this.g=null;this.A=!1};
var Rf=new tf(function(){return new Qf},function(a){a.reset()},100);
g.Pf.prototype.then=function(a,b,c){return ag(this,g.Ca(a)?a:null,g.Ca(b)?b:null,c)};
Mf(g.Pf);g.Pf.prototype.cancel=function(a){0==this.g&&g.Kf(function(){var b=new gg(a);cg(this,b)},this)};
g.Pf.prototype.J=function(a){this.g=0;Of(this,2,a)};
g.Pf.prototype.K=function(a){this.g=0;Of(this,3,a)};
g.Pf.prototype.H=function(){for(var a;a=dg(this);)eg(this,a,this.g,this.F);this.D=!1};
var kg=zf;g.E(gg,Ka);gg.prototype.name="cancel";g.E(g.lg,g.rf);g.h=g.lg.prototype;g.h.enabled=!1;g.h.md=null;g.h.jy=function(){if(this.enabled){var a=(0,g.F)()-this.B;0<a&&a<.8*this.o?this.md=this.g.setTimeout(this.A,this.o-a):(this.md&&(this.g.clearTimeout(this.md),this.md=null),this.dispatchEvent("tick"),this.enabled&&(this.md=this.g.setTimeout(this.A,this.o),this.B=(0,g.F)()))}};
g.h.start=function(){this.enabled=!0;this.md||(this.md=this.g.setTimeout(this.A,this.o),this.B=(0,g.F)())};
g.h.stop=function(){this.enabled=!1;this.md&&(this.g.clearTimeout(this.md),this.md=null)};
g.h.W=function(){g.lg.ga.W.call(this);this.stop();delete this.g};var sg=g.va,zg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yg=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;var eY={};g.h=Ag.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.F)()+1E3*c)).toUTCString();this.g.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.r(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Sc=function(){return Bg(this).keys};
g.h.Fb=function(){return Bg(this).values};
g.h.isEmpty=function(){return!this.g.cookie};
g.h.yd=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
g.h.clear=function(){for(var a=Bg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
var kw=new Ag("undefined"==typeof window.document?null:window.document);kw.o=3950;var Dg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Ug=/#|$/,Vg=/[?&]($|#)/;Xg.prototype.remove=function(a){gc(this.g,a)};
Xg.prototype.set=function(a,b){this.g[a]=b};
Xg.prototype.get=function(a){return hc(this.g,a,null)};g.h=g.Zg.prototype;g.h.Ad=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.Zg(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return this&&a?a instanceof g.Zg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.h.expand=function(a,b,c,d){g.Da(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.ch.prototype;g.h.clone=function(){return new g.ch(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.ed?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};var nh=null;jh.prototype.getValue=function(){return this.g};
jh.prototype.o=function(){return String(this.g)};
g.E(kh,jh);kh.prototype.o=function(){return this.g?"1":"0"};
g.E(lh,jh);lh.prototype.o=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var sh={};new g.lg(200);var iY;g.fY=Th("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js";g.gY=Th("loadCastFramework")||Th("loadCastApplicationFramework");g.hY=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"];iY=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"];g.jY=50<=g.Sh()?iY.concat(g.hY):g.hY.concat(iY);Vh("d");Wh("d");Xh("d");Vh("f");Wh("f");Xh("f");Vh("i");Wh("i");Xh("i");Vh("j");Wh("j");Xh("j",void 0);Xh("j",void 0);Vh("u");Wh("u");Xh("u");Vh("v");Wh("v");Xh("v",void 0);Xh("v",void 0);Vh("b");Wh("b");Xh("b");Vh("e");Wh("e");Xh("e");Vh("s");Wh("s");Xh("s");Vh("B");Wh("B");Xh("B");Vh("x");Wh("x");Xh("x");Vh("y");Wh("y");Xh("y");Vh("g");Wh("g");Xh("g");Vh("h");Wh("h");Xh("h");Vh("n");Wh("n");Xh("n");Vh("o");Wh("o");Xh("o",void 0);Xh("o",void 0);var ki=window.document,K=window;var Tm=/https?:\/\/[^\/]+/;var ci=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.w.addEventListener("test",null,b)}catch(c){}return a}();var ii=!!window.google_async_iframe_id,ji=ii&&window.parent||window;var kY=[0,2,1],lY=null;window.document.addEventListener&&window.document.addEventListener("mousedown",function(a){lY=a},!0);
window.mb=function(a){if(a){var b;if(b=window.event||lY){var c;(c=b.which?1<<kY[b.which-1]:b.button)&&b.shiftKey&&(c|=8);c&&b.altKey&&(c|=16);c&&b.ctrlKey&&(c|=32);b=c}else b=null;b&&(window.css?(0,window.css)(a.id,"mb",b,void 0,void 0):a&&(a.href=Yh(a.href,"mb",b,void 0)))}};ni.prototype.enable=function(){this.g=!0};
ni.prototype.isEnabled=function(){return this.g};
ni.prototype.reset=function(){this.g=!0};g.Ei.prototype.clone=function(){return new g.Ei(this.start,this.end)};
g.Ei.prototype.getLength=function(){return this.end-this.start};g.h=Hi.prototype;g.h.Qs=function(){this.events!=this.o.google_js_reporting_queue&&(this.events.length=0,this.A&&(0,g.G)(this.events,this.Gp,this));this.g=!1};
g.h.cH=function(a){this.g&&this.events.push(a)};
g.h.Gp=function(a){if(a&&this.A){var b=this.o.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
g.h.start=function(a,b){if(!this.g)return null;var c=new Gi(a,b);this.A&&this.o.performance.mark("goog_"+c.uniqueId+"_start");return c};
g.h.end=function(a){this.g&&g.ta(a.value)&&(a.duration=Fi()-a.value,this.A&&this.o.performance.mark("goog_"+a.uniqueId+"_end"),this.cH(a))};Ii.prototype.o=function(a,b,c,d,e){e=e||this.D;try{var f=new wi;f.C=!0;Ai(f,1,"context",a);b.error&&b.meta&&b.id||(b=Ji(b));b.msg&&Ai(f,2,"msg",b.msg.substring(0,512));b.file&&Ai(f,3,"file",b.file);0<b.line&&Ai(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(m){}b=[k];f.g.push(5);f.o[5]=b;var l=vi();l.o&&Ai(f,6,"top",l.o.url||"");Ai(f,7,"url",l.g.url||"");Di(this.B,e,f,c)}catch(m){try{Di(this.B,e,{context:"ecmserr",rctx:a,msg:Oi(m),url:l.g.url},c)}catch(n){}}return this.A};
g.p(Ni,pi);var Li,mY=li(),nY=new Hi(1,mY);Li=new Ii(new function(){var a=void 0===a?K:a;this.B="http:"===a.location.protocol?"http:":"https:";this.o="pagead2.googlesyndication.com";this.A="/pagead/gen_204?id=";this.g=.01},"jserror",!0,nY);
"complete"==mY.document.readyState?mY.google_measure_js_timing||nY.Qs():nY.g&&ei(mY,"load",function(){mY.google_measure_js_timing||nY.Qs()});
var Pi=Li.o;if(ki&&ki.URL){var ai=ki.URL,oY=!(ai&&0<bi().length);Li.A=oY};var Vi={},Wi=null;Vi.le=0;Vi.nt=2;Vi.Fr=3;Vi.Po=5;Vi.me=1;Vi.om=4;var pY=!1,qY="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(pY=!0,a.description)){qY=Yi(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){pY=!0;qY="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],pY=!(!a||!a.enabledPlugin))){qY=Yi(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");pY=
!0;qY=Yi(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");pY=!0;qY="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),pY=!0,qY=Yi(b.GetVariable("$version"))}catch(c){}})();
var tO=pY,dj=qY;var gj=function(){if(g.CX){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Rb))?a[1]:"0"}return bj?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Rb))?a[0].replace(/_/g,"."):"10"):g.oE?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Rb))?a[1]:""):PX||QX||RX?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Rb))?a[1].replace(/_/g,"."):""):""}();var $i=function(){if(g.fC)return Zi(/Firefox\/([0-9.]+)/);if(g.wd||eC||g.uh)return yc;if(g.bt)return sc()?Zi(/CriOS\/([0-9.]+)/):Zi(/Chrome\/([0-9.]+)/);if(g.cj&&!sc())return Zi(/Version\/([0-9.]+)/);if(eE||dE){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Rb);if(a)return a[1]+"."+a[2]}else if(fE)return(a=Zi(/Android\s+([0-9.]+)/))?a:Zi(/Version\/([0-9.]+)/);return""}();var jl=0,oj=(new Date).getTime(),ij=-1,kj=!1,lj=-1,mj=-1;var Bm={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},wm={Vw:"start",xw:"firstquartile",Lw:"midpoint",Zw:"thirdquartile",iw:"complete",Kw:"metric",PAUSE:"pause",Pw:"resume",Uw:"skip",fx:"viewable_impression",Mw:"mute",bx:"unmute",zw:"fullscreen",uw:"exitfullscreen",Aw:"fully_viewable_audible_half_duration_impression",Jw:"measurable_impression",aw:"abandon",tw:"engagedview",Fw:"impression",pw:"creativeview",Gw:"loaded",BK:"progress",CLOSE:"close",jJ:"collapse",qK:"overlay_resize",
rK:"overlay_unmeasurable_impression",sK:"overlay_unviewable_impression",uK:"overlay_viewable_immediate_impression",tK:"overlay_viewable_end_of_session_impression"},qn="start firstquartile midpoint thirdquartile resume loaded".split(" "),dl=["abandon"],xm={UNKNOWN:-1,Vw:0,xw:1,Lw:2,Zw:3,iw:4,Kw:5,PAUSE:6,Pw:7,Uw:8,fx:9,Mw:10,bx:11,zw:12,uw:13,Aw:14,Jw:15,aw:16,tw:17,Fw:18,pw:19,Gw:20};zj.prototype.isVisible=function(){return this.od?.3<=this.g:.5<=this.g};g.p(Aj,zj);Cj.prototype.g=function(a){var b=this.A[a],c=b[1];this.B+=b[0];0<c&&0==this.o[a]&&(this.o[a]=1)};g.wa(Gj);Hj.prototype.getValue=function(){return this.o};
Hj.prototype.update=function(a,b){a>=this.A||(this.g&1<<a&&!b?this.o&=~(1<<a):this.g&1<<a||!b||(this.o|=1<<a),this.g|=1<<a)};Ij.prototype.update=function(a,b,c,d,e,f){e=Kj(c.g);var k=Kj(b.g);k=-1==e||-1==k?-1:Math.max(e,k);e=d?k:e;this.C=-1!=this.C?Math.min(this.C,b.g):b.g;f&&(this.Ya=Math.max(this.Ya,b.g));-1!=e&&(this.ib[e]+=a);Jj(this.ha,e,a);f=this.A;k=this.ha;for(var l=[0,0,0,0,0],m=0;4>=m;m++)l[m]=Math.max(f[m],k[m]);this.A=l;f=this.ha;k=Kj(b.g);for(l=0;4>=l;++l)if(l<k||b.B||-1==k)f[l]=0;if(d||c.od!=b.od?c.isVisible()&&b.isVisible():c.isVisible())this.N+=a,this.pa=Math.max(this.pa,this.N);b.isVisible()||(this.N=0);
return e};
Ij.prototype.ye=function(){return this.pa>=this.Ka};g.p(Nj,Ij);
Nj.prototype.update=function(a,b,c,d,e,f){if(b.paused)return-1;d=Ij.prototype.update.call(this,a,b,c,d,e,f);e=Kj(e);e=-1!=d&&d<=e;f=Bj(b)&&Bj(c);vj(b.volume)&&(this.g=-1!=this.g?Math.min(this.g,b.volume):b.volume,this.B=Math.max(this.B,b.volume));e&&(this.aa+=a,this.Z+=a);this.o+=a;this.Y+=a;c.fullscreen&&(this.ka+=a,this.U+=a);0==d&&(this.V+=a);f&&(this.ca+=a,this.H+=a,Jj(this.da,d,a),0==d&&(this.F+=a),e?(this.J+=a,this.K+=a):this.T+=a,this.wa=Math.max(this.T,this.wa));if(e||!Bj(b))this.T=0;a=Math.floor(b.A/
1E3);this.xa.update(a,b.isVisible());this.Ja.update(a,1<=b.g);this.Ha.update(a,Bj(b));return d};Pj.prototype.getStatus=function(){return this.o};
g.E(Sj,Pj);Sj.prototype.ni=function(a,b){if(!(a&&a.getBoundingClientRect&&0<=g.db(dj,"11")&&b)||g.wd&&9>yc||0<this.g.length)return!1;try{var c=a.getBoundingClientRect()}catch(m){return!1}var d="DIV"==a.tagName||"INS"==a.tagName,e=g.kd(a),f=[];if(d){var k=pj();c=Qj(this,c);(0,g.G)(c,function(a,c){var d=new mk("e",e,b,String(c));this.g.push(d);f.push((0,g.z)(d.H,d,k,a))},this);
Jd(a,k,0)}else c=Rj(this,c),(0,g.G)(c,function(c,d){var k=new mk("e",e,b,String(d));this.g.push(k);f.push((0,g.z)(k.F,k,a,c))},this);
var l=!0;(0,g.G)(f,function(a){l=l&&a()});
l?(this.o="l",this.A=a,this.H=!d):((0,g.G)(this.g,function(a){a.remove()}),this.g=[]);
return l};
var dk={oL:-1,LOADING:0,yw:1,ow:2,TJ:3,VISIBLE:4},gk={LOADING:0,yw:1,ow:2,hL:3,lK:4,lL:5,mL:6,kL:7,mK:8,gL:9},hk={};mk.prototype.H=function(a,b){if(!this.g)return!1;this.g.style.position="absolute";Uj(this,b);var c=!0;try{a.appendChild(this.g)}catch(d){c=!1}return c};
mk.prototype.F=function(a,b){if(!this.g||!a.parentNode)return!1;this.g.style.position="fixed";Uj(this,b);var c=!0;try{g.Id(this.g,a)}catch(d){c=!1}return c};
mk.prototype.remove=function(){if(this.g)try{g.Kd(this.g)}catch(a){}this.g=null};
mk.prototype.J=function(a){this.A=a?3:4};
g.x("gteh",Ri(145,function(a,b){var c=hk[a];g.Ca(c)&&c(b)}),void 0);
g.E(ok,Pj);var uk=[3,7,8,5,5],vk=[3,4,4,5,6],wk=[3,4,5,6],xk=[3,5];pk.prototype.B=function(a){this.g&&this.g.contentWindow&&(this.g.contentWindow.requestAnimationFrame(Mi(245,this.B,this,void 0)),this.o||(this.o=(0,g.F)()-a),this.A=a)};
pk.prototype.isVisible=function(a){return 50>a-this.o-this.A};
pk.prototype.remove=function(){try{g.Kd(this.g)}catch(a){}this.g=null};g.wa(Ak);g.wa(Bk);var Ck=new g.Zg(0,0,0,0),Rk={threshold:[0,.3,.5,.75,1]};g.h=Dk.prototype;g.h.uj=function(){return new Ij};
g.h.Tc=function(){return this.Tm};
g.h.mr=function(){};
g.h.lr=function(){};
g.h.Eq=function(){};
g.h.Gk=function(){};
g.h.he=function(a,b,c,d,e,f,k){k=void 0===k?{}:k;var l=this.uq(c,k);k=this.xl(a,b,d,k);g.ta(b)||(this.Kk=new g.hd(b.right-b.left,b.bottom-b.top));e=e&&this.Bb.g>=(this.od()?.3:.5);this.po(l,k,e,f);this.bf=c;0<k.g&&-1===this.hv&&(this.hv=c);-1==this.jv&&this.ye()&&(this.jv=c);if(-2==this.Qm)try{a:{var m=g.ta(b)?null:b;if(a&&a!=Ck&&0!=this.Rb){if(!m){if(!this.Kk){var n=-1;break a}m=new g.Zg(0,this.Kk.width,this.Kk.height,0)}n=m.Ad&&0<m.Ad()&&m.getHeight&&0<m.getHeight()?this.oh(a,m):-1}else n=-1}this.Qm=
n}catch(q){Si(207,q)}this.Bb=k;d&&(this.Bb.g=0);this.Um(this)};
g.h.po=function(a,b,c,d){this.Tc().update(a,b,this.Bb,c,this.od()?.3:.5,d)};
g.h.Sl=function(){return new zj};
g.h.xl=function(a,b,c){var d=this.Sl();d.B=c;c=Ui();d.o=0==c?-1:1==c?0:1;if(g.ta(b))d.g=this.oh(b);else{var e=b;d.g=this.oh(a,e)}(a=e||null)?(a=(a.bottom-a.top)*(a.right-a.left),a=0<a?Math.min(this.Rb*d.g/a,1):0):a=0;d.C=a;d.od=this.od();return d};
g.h.uq=function(a){if(-1==this.bf)return 0;a=a-this.bf||1;return 1E4<a?1:a};
g.h.oh=function(a,b){if(g.ta(a))return a;if(b){var c=Ek(a,b);return 0>=this.Rb||0>=c.Ad()||0>=c.getHeight()?0:(c.bottom-c.top)*(c.right-c.left)/this.Rb}return 0};
g.h.od=function(){return!1};
g.h.ni=function(a){a=void 0===a?1:a;if(this.Vb)return!0;if(this.pj)return!1;var b=this.od();this.di=b?4:a;if(!this.Td||!ej())return this.pj=!0,!1;a=new Sj(b,this.di);(b=a.ni(this.Td,String(this.wx)))?this.Vb=a:this.pj=!0;return b};
g.h.zd=function(){return 0};
g.h.ye=function(){return this.Tm.ye()};
g.h.Zn=function(a){a=void 0===a?1:a;if(!this.Td)return!1;var b=this.od();b&&(a=4);b=new ok(b,a);var c=rk(b,this.Td);c&&(this.di=a,this.lg=b);return c};var rY=new g.Zg(0,0,0,0);g.p(Wk,Dk);g.h=Wk.prototype;g.h.Zn=function(a){a=void 0===a?3:a;Bk.getInstance();var b=Gj.getInstance(),c=g.rb(b.g,509445013);b=g.rb(b.g,509445011);return c||b?(this.Xa=!0,Dk.prototype.Zn.call(this,a)):!1};
g.h.ni=function(a){return Dk.prototype.ni.call(this,void 0===a?3:a)};
g.h.mr=function(a){var b=this,c=a-this.Va;this.ib&&1E3>=c||(c=g.y("ima.bridge.getNativeViewability"),g.Ca(c)&&(c(this.Ob,function(a){b.ib=!1;b.T&&(b.Ja=!0);g.fc(a)&&b.Ha++;b.Gk(a)}),this.ib=!0,this.Va=a))};
g.h.lr=function(a){var b=Bk.getInstance();a-this.Ta>nj(b.J)&&(a=g.y("ima.admob.getViewability"),g.Ca(a)&&a(this.Ob))};
g.h.Eq=function(a){this.Ta=jj();this.Gk(a)};
g.h.Gk=function(a){var b=a.opt_nativeViewBounds||{},c=a.opt_nativeViewVisibleBounds||{},d=a.opt_nativeTime||-1,e=a.opt_nativeVolume,f=a.opt_nativeViewAttached;a=a.opt_nativeViewHidden;void 0!==f&&(this.pa=!!f);b=new g.Zg(b.top||0,b.left+b.width||0,b.top+b.height||0,b.left||0);c=a?rY.clone():new g.Zg(c.top||0,c.left+c.width||0,c.top+c.height||0,c.left||0);f=void 0;"n"==this.Nd&&(f={volume:e});e=f;e=void 0===e?{}:e;this.Rb=(b.bottom-b.top)*(b.right-b.left);this.position=b;this.he(b,c,d,!1,!0,!0,e)};
g.h.he=function(a,b,c,d,e,f,k){k=void 0===k?{}:k;var l=this.xa(this)||{};g.lc(l,k);this.C=l.duration||this.C;this.wa=l.isVpaid||this.wa;this.da=f;Dk.prototype.he.call(this,a,b,c,d,e,f,l)};
g.h.po=function(a,b,c,d){Dk.prototype.po.call(this,a,b,c,d);this.K[this.K.length-1].update(a,b,this.Bb,c,this.od()?.3:.5,d);this.Ya=Bj(this.Bb)&&Bj(b);-1==this.Z&&this.Ka&&(this.Z=this.Tc().o);this.o.B=0;a=this.Bb;b=this.ye();.5<=a.g&&this.o.g("vs");b&&this.o.g("vw");vj(a.volume)&&this.o.g("am");this.Ya&&this.o.g("a");this.Dd&&this.o.g("f");-1!=a.o&&(this.o.g("bm"),1==a.o&&this.o.g("b"));this.Ya&&b&&this.o.g("avw");this.da&&this.o.g("cm");this.da&&0<a.g&&this.o.g("pv");$k(this,this.Tc().o,!0)&&this.o.g("gdr");
2E3<=this.Tc().A[0]&&this.o.g("pmx")};
g.h.uj=function(){return new Nj};
g.h.Tc=function(){return this.Tm};
g.h.Sl=function(){return new Aj};
g.h.xl=function(a,b,c,d){a=Dk.prototype.xl.call(this,a,b,c,d);a.fullscreen=this.Dd;a.paused=this.D;a.volume=d.volume;vj(a.volume)||(this.fb++,b=this.Bb,vj(b.volume)&&(a.volume=b.volume));d=d.currentTime;a.A=g.r(d)&&0<=d?d:-1;return a};
g.h.uq=function(a,b){var c=g.r(b.currentTime)?b.currentTime:this.V,d=Zk(this,a),e=c-this.V,f=b.isYouTube,k=g.r(b.isPlaying)?b.isPlaying:!0,l=0;2!=this.Y?(0<=e?(this.U+=d,this.H+=Math.max(d-e,0),l=Math.min(e,this.U)):this.Aa+=Math.abs(e),0!=e&&(this.U=0),-1==this.J&&0<e&&(this.J=0<=mj?jj()-mj:-1)):(k||this.D||(this.H+=d),-1==this.J&&k&&(this.J=0<=mj?jj()-mj:-1));this.V=c;if(f){if(1==this.Y)return l;if(2==this.Y)return k?d:0}return Zk(this,a)};
g.h.oh=function(a,b){return this.T?0:this.Dd?1:Dk.prototype.oh.call(this,a,b)};
g.h.zd=function(){return 1};kl.prototype.ac=function(){return!!this.o||!!this.g};
kl.prototype.match=function(a){return this.ac()&&a.ac()?this.g||a.g?this.g==a.g:this.o||a.o?this.o==a.o:!1:!1};
kl.prototype.toString=function(){var a=""+this.o;this.g&&(a+="-"+this.g);return a};g.sY=!g.wd&&!oc();g.E(g.ol,g.I);g.h=g.ol.prototype;g.h.Vg=!1;g.h.ii=0;g.h.Of=null;g.h.Ag=function(a){this.g=arguments;this.Of||this.ii?this.Vg=!0:pl(this)};
g.h.stop=function(){this.Of&&(g.w.clearTimeout(this.Of),this.Of=null,this.Vg=!1,this.g=[])};
g.h.pause=function(){this.ii++};
g.h.resume=function(){this.ii--;this.ii||!this.Vg||this.Of||(this.Vg=!1,pl(this))};
g.h.W=function(){g.ol.ga.W.call(this);this.stop()};
g.h.kG=function(){this.Of=null;this.Vg&&!this.ii&&(this.Vg=!1,pl(this))};g.h=sl.prototype;g.h.nr=function(){wl(this,!1);this.rm()};
g.h.rm=function(){Bl(this,Dl(this),!1)};
g.h.Lq=function(){var a=gl(this),b=jj();a?(kj||(lj=b,(0,g.G)(this.g,function(a){var c=a.Tc();c.Aa=Oj(c,b,!!a.D)})),kj=!0,wl(this,!0)):(this.U=Kl(this,b),kj=!1,jl=b,(0,g.G)(this.g,function(a){a.Jf&&(a.Tc().D=b)}));
Bl(this,Dl(this),!a)};
g.h.reset=function(){this.g=[];this.A=[]};
g.h.getId=function(){return this.za};
g.wa(sl);var hl=sl.getInstance();var km=null,hm="",pn=!1;var jm={sv:"sv",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",tos:"tos",mtos:"mtos",mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",pt:"pt",vht:"vht",mut:"mut",a:"a",ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",is:"is",i0:"i0",
i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:"qmtos",qnc:"qnc",qmv:"qmv",qnv:"qnv",raf:"raf",rafc:"rafc",lte:"lte",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnc:"pnc",pns:"pns",pnmm:"pnmm",pnk:"pnk",ptlt:"ptlt"},fn={c:Ql("c"),at:"at",atos:Tl("atos",[0,2,4]),ta:function(a,b){return function(c){if(!g.r(c[a]))return b}}("tth","1"),
a:"a",dur:"dur",p:"p",tos:Sl(),j:"dom",mtos:Tl("mtos",[0,2,4]),gmm:"gmm",gdr:"gdr",ss:Ql("ss"),vsv:vf("w2"),t:"t"},kn={atos:"atos",avt:Tl("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:Ql("ss"),t:"t"},hn={a:"a",tos:Sl(),at:"at",c:Ql("c"),mtos:Tl("mtos",[0,2,4]),dur:"dur",fs:"fs",p:"p",vpt:"vpt",vsv:vf("ias_w2"),dom:"dom",gmm:"gmm",gdr:"gdr",t:"t"},jn={tos:Sl(),at:"at",c:Ql("c"),mtos:Tl("mtos",[0,2,4]),p:"p",vpt:"vpt",vsv:vf("dv_w4"),gmm:"gmm",gdr:"gdr",dom:"dom",t:"t",mv:"mv",qmpt:Tl("qmtos",
[0,2,4]),qvs:function(a,b){return function(c){var d=c[a];if(g.ta(d))return(0,g.H)(b,function(a){return 0<d&&d>=a?1:0})}}("qnc",[1,
.5,0]),qmv:"qmv",qa:"qas",a:"a"};g.wa(Ul);g.h=gm.prototype;g.h.wj=function(){};
g.h.Mq=function(a){if(a){a.af=!0;switch(a.zd()){case 1:lm(a,"fp");break;case 2:this.Bu(a)}this.Tn(a)}};
g.h.Yy=function(a){cl(a,0);return fl(a,"start")};
g.h.Vy=function(a,b){Bl(hl,[a],!gl(hl),b);return fl(a,"progress")};
g.h.My=function(a,b){return qm(a,"firstquartile",1,b)};
g.h.Ry=function(a,b){a.Ka=!0;return qm(a,"midpoint",2,b)};
g.h.Zy=function(a,b){return qm(a,"thirdquartile",3,b)};
g.h.Iy=function(a,b){var c=qm(a,"complete",4,b);a.Dd=!1;tm(1,a.Ob);return c};
g.h.Uy=function(a,b){return rm(a,"pause",b)};
g.h.Hy=function(a,b){return rm(a,"abandon",b)};
g.h.Wy=function(a,b){var c=gl(hl);a.D&&!c&&(a.Tc().D=jj());Bl(hl,[a],!c,b);a.D=!1;return fl(a,"resume")};
g.h.bz=function(a){return fl(a,"viewable_impression")};
g.h.Xy=function(a,b){var c=!gl(hl);Bl(hl,[a],c,b);c=fl(a,"skip");a.Dd=!1;tm(1,a.Ob);return c};
g.h.Sy=function(a,b){Bl(hl,[a],!gl(hl),b);return fl(a,"mute")};
g.h.az=function(a,b){Bl(hl,[a],!gl(hl),b);return fl(a,"unmute")};
g.h.Ny=function(a,b){a.Dd=!0;Bl(hl,[a],!gl(hl),b);return fl(a,"fullscreen")};
g.h.Ly=function(a,b){a.Dd=!1;Bl(hl,[a],!gl(hl),b);return fl(a,"exitfullscreen")};
g.h.Oy=function(a){return fl(a,"fully_viewable_audible_half_duration_impression")};
g.h.Qy=function(a){return fl(a,"measurable_impression")};
g.h.Ky=function(a){return fl(a,"engagedview")};
g.h.Py=function(a){return fl(a,"impression")};
g.h.Jy=function(a){return fl(a,"creativeview")};
g.h.Ty=function(a,b){Bl(hl,[a],!gl(hl),b);return a.o()};
g.h.ym=function(a,b){Bl(hl,[a],!gl(hl),b);this.Au(a);tm(2,a.Ob);return a.o()};
g.h.Bj=function(a){a.ye()&&!a.Av&&this.Cu(a);1==a.zd()&&this.Bp(a)};
g.h.Iq=function(){};
g.h.Bu=function(){};
g.h.Cu=function(){};
g.h.Bp=function(){};
g.h.Au=function(){};
g.h.ur=function(){};
g.h.Tn=function(){};var Fm=(new Date).getTime(),Nm=!1,Om=!1,Pm=!1,Im=[function(a){return!(!a.chrome||!a.chrome.webstore)},
function(a){return!!a.document.documentMode},
function(a){return!!a.document.fonts.ready},
function(){return Gm(0)},
function(a){return!!a.ActiveXObject},
function(a){return!!a.chrome},
function(a){return!!a.navigator.serviceWorker},
function(a){return!!a.opera},
function(a){return!!a.sidebar},
function(){return!+"\v1"},
function(){return Gm(1)},
function(a){return!a.ActiveXObject},
function(a){return"-ms-ime-align"in a.document.documentElement.style},
function(a){return"-ms-scroll-limit"in a.document.documentElement.style},
function(a){return"-webkit-font-feature-settings"in a.document.body.style},
function(){return Gm(2)},
function(a){return"ActiveXObject"in a},
function(a){return"MozAppearance"in a.document.documentElement.style},
function(a){return"_phantom"in a},
function(a){return"callPhantom"in a},
function(a){return"content"in a.document.createElement("template")},
function(a){return"getEntriesByType"in a.performance},
function(){return Gm(3)},
function(a){return"image-rendering"in a.document.body.style},
function(a){return"object-fit"in a.document.body.style},
function(a){return"open"in a.document.createElement("details")},
function(a){return"orientation"in a.screen},
function(a){return"performance"in a},
function(a){return"shape-image-threshold"in a.document.body.style},
function(){return Gm(4)},
function(a){return"srcset"in a.document.createElement("img")},
function(){return Om},
function(){return Pm},
function(){return Gm(5)},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="-webkit-min-content";a.style.width="min-content";return"1px"!=a.style.width},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="calc(1px - 1px)";a.style.width="-webkit-calc(1px - 1px)";return"1px"!=a.style.width},
function(){var a=!1;eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');try{(0,window.DummyFunction1)()}catch(b){a=!0}return a},
function(){var a=!1;try{(0,window.DummyFunction2)()}catch(b){a=!0}return a},
function(){return!1},
function(){return Gm(6)},
function(a){var b=a.document.createElement("canvas");b.width=b.height=1;b=b.getContext("2d");b.globalCompositeOperation="multiply";b.fillStyle="rgb(0,255,255)";b.fillRect(0,0,1,1);b.fill();b.fillStyle="rgb(255,255,0)";b.fillRect(0,0,1,1);b.fill();b=b.getImageData(0,0,1,1).data;return b[0]==b[2]&&b[1]==b[3]||Em(a.navigator.vibrate)},
function(a){a=a.document.createElement("canvas");a.width=a.height=1;a=a.getContext("2d");a.globalCompositeOperation="multiply";a.fillStyle="rgb(0,255,255)";a.fillRect(0,0,1,1);a.fill();a.fillStyle="rgb(255,255,0)";a.fillRect(0,0,1,1);a.fill();a=a.getImageData(0,0,1,1).data;return a[0]==a[2]&&a[1]==a[3]},
function(a){a=a.document.createElement("div");return Em(a.matches)},
function(a){a=a.document.createElement("input");a.setAttribute("type","range");return"text"!==a.type},
function(a){return a.CSS.supports("image-rendering","pixelated")},
function(a){return a.CSS.supports("object-fit","contain")},
function(){return Gm(7)},
function(a){return a.CSS.supports("object-fit","inherit")},
function(a){return a.CSS.supports("shape-image-threshold","0.9")},
function(a){return a.CSS.supports("word-break","keep-all")},
function(){return eval("1 == [for (item of [1,2,3]) item][0]")},
function(a){return Em(a.CSS.supports)},
function(){return Em(window.Intl.Collator)},
function(a){return Em(a.document.createElement("dialog").show)},
function(){return Gm(8)},
function(a){return Em(a.document.createElement("div").animate([{transform:"scale(1)",Qx:"ease-in"},{transform:"scale(1.3)",Qx:"ease-in"}],{duration:1300,IL:1}).reverse)},
function(a){return Em(a.document.createElement("div").animate)},
function(a){return Em(a.document.documentElement.webkitRequestFullScreen)},
function(a){return Em(a.navigator.getBattery)},
function(a){return Em(a.navigator.permissions.query)},
function(){return!1},
function(){return Gm(9)},
function(){return Em(window.webkitRequestAnimationFrame)},
function(a){return Em(a.BroadcastChannel.call)},
function(a){return Em(a.FontFace)},
function(a){return Em(a.Gamepad)},
function(){return Gm(10)},
function(a){return Em(a.MutationEvent)},
function(a){return Em(a.MutationObserver)},
function(a){return Em(a.crypto.getRandomValues)},
function(a){return Em(a.document.body.createShadowRoot)},
function(a){return Em(a.document.body.webkitCreateShadowRoot)},
function(a){return Em(a.fetch)},
function(){return Gm(11)},
function(a){return Em(a.navigator.serviceWorker.register)},
function(a){return Em(a.navigator.webkitGetGamepads)},
function(a){return Em(a.speechSynthesis.speak)},
function(a){return Em(a.webkitRTCPeerConnection)},
function(a){return a.CSS.supports("--fake-var","0")},
function(){return Gm(12)},
function(a){return a.CSS.supports("cursor","grab")},
function(a){return a.CSS.supports("cursor","zoom-in")},
function(a){return a.CSS.supports("image-orientation","270deg")},
function(){return Gm(13)},
function(a){return a.CSS.supports("position","sticky")},
function(a){return void 0===a.document.createElement("style").scoped},
function(a){return a.performance.getEntriesByType("resource")instanceof Array},
function(){return"undefined"==typeof window.InstallTrigger},
function(){return"object"==typeof(new window.Intl.Collator).resolvedOptions()},
function(a){return"boolean"==typeof a.navigator.onLine},
function(){return Gm(14)},
function(a){return"undefined"==typeof a.navigator.LL},
function(a){return"number"==typeof a.performance.now()},
function(){return 0==(new window.Uint16Array(1))[0]},
function(a){return-1==a.ActiveXObject.toString().indexOf("native")},
function(a){return-1==Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")}],Jm=[function(a){a=a.document.createElement("div");
var b=null,c=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{a.style.behavior="url(#default#clientcaps)"}catch(e){}for(var d=0;d<c.length;d++){try{b=a.getComponentVersion(c[d],"componentid").replace(/,/g,".")}catch(e){}if(b)return b.split(".")[0]}return!1},
function(){return(new Date).getTimezoneOffset()},
function(a){return(a.innerWidth||a.document.documentElement.clientWidth||a.document.body.clientWidth)/(a.innerHeight||a.document.documentElement.clientHeight||a.document.body.clientHeight)},
function(a){return(a.outerWidth||a.document&&a.document.body&&a.document.body.offsetWidth)/(a.outerHeight||a.document&&a.document.body&&a.document.body.offsetHeight)},
function(a){return a.screen.availWidth/a.screen.availHeight},
function(a){return a.screen.width/a.screen.height}],Lm=[function(a){return a.navigator.userAgent},
function(a){return a.navigator.platform},
function(a){return a.navigator.vendor}];g.E(Qm,qg);Qm.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.B=this.A=0};
Qm.prototype.update=function(a,b){g.r(b)||(b=a.length);for(var c=b-this.o,d=this.C,e=this.A,f=0;f<b;){if(0==e)for(;f<=c;)Rm(this,a,f),f+=this.o;if(g.u(a))for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.o){Rm(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.o){Rm(this,d);e=0;break}}this.A=e;this.B+=b};
Qm.prototype.digest=function(){var a=Array((56>this.A?this.o:2*this.o)-this.A);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.B;for(b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};g.p(Wm,gm);g.h=Wm.prototype;g.h.wj=function(a,b){var c=this;switch(Bk.getInstance().Za){case "nis":var d=Zm(this,a,b);break;case "gsv":d=Ym(this,a,b);break;case "exc":d=$m(this,a);break;default:b.opt_adElement?d=vm(this,a,b.opt_adElement,b.opt_osdId):(d=cn(this,a,b.opt_sdkID||""))||(d=Gl(a)||void 0)}d&&d.xa==g.va&&(d.xa=function(a){return c.ur(a)});
return d};
g.h.ur=function(a){var b=Bk.getInstance();a.g=0;a.aa=0;if("as"==a.Nd)if(b="getVideoMetadata"+a.Tg,g.Ca(a.element[b]))try{var c=a.element[b]()}catch(k){a.g|=4}else a.g|=2;else if("h"==a.Nd||"n"==a.Nd){var d=Gj.getInstance();if("exc"==b.Za||"nis"==b.Za)var e=g.y("ima.bridge.getVideoMetadata");else if(a.hg&&g.rb(d.g,495644004)){var f=this.D[a.hg];f?e=function(a){f.g(a)}:Si("lidar::missingPlayerCallback",Error())}else e=g.y("ima.common.getVideoMetadata");
if(g.Ca(e))try{c=e(a.Ob)}catch(k){a.g|=4}else a.g|=2}else if("b"==a.Nd)if(b=g.y("ytads.bulleit.getVideoMetadata"),g.Ca(b))try{c=b(a.Ob)}catch(k){a.g|=4}else a.g|=2;else a.g|=1;a.g||(g.r(c)?null===c?a.g|=16:g.fc(c)?a.g|=32:null!=c.errorCode&&(a.aa=c.errorCode,a.g|=64):a.g|=8);null!=c||(c={});Dm(c,a);vj(c.volume)&&vj(this.A)&&(c.volume*=this.A);return c};
g.h.Cu=function(a){if(1==a.zd())var b="viewable_impression";else if(2==a.zd())b="overlay_viewable_immediate_impression";else return;dn(this,a,b)&&(a.Av=!0)};
g.h.Bp=function(a){$k(a,a.Tc().da[0])&&!a.Sa&&dn(this,a,"fully_viewable_audible_half_duration_impression")&&(a.Sa=!0)};
g.h.Iq=function(a){a.zv||a.af||this.o||!dn(this,a,"measurable_impression")||(a.zv=!0)};
g.h.Bu=function(a){!a.g&&a.af&&dn(this,a,"overlay_unmeasurable_impression")&&(a.g=!0)};
g.h.Au=function(a){a.oi&&(a.ye()?dn(this,a,"overlay_viewable_end_of_session_impression"):dn(this,a,"overlay_unviewable_impression"),a.oi=!1)};
g.h.Bj=function(a){this.g&&(this.B=this.H.g);this.o?nn(this,a):gm.prototype.Bj.call(this,a)};
g.h.Tn=function(a){this.o&&1==a.zd()&&nn(this,a)};
g.wa(Wm);g.x("Goog_AdSense_Lidar_sendVastEvent",Ri(193,rn,void 0,function(){return{v:"603","if":Bk.getInstance().o?"1":"0",nas:String(hl.g.length)}}),void 0);
g.x("Goog_AdSense_Lidar_getViewability",Ri(194,function(a,b){var c=Wm.getInstance();var d={};g.lc(d,{opt_adElement:void 0,opt_fullscreen:void 0},b||{});if(d.opt_bounds)c=ln(c,Am("ol"),!1);else{if(pn)d=Am("ue");else if(d=c.wj(a,d)){var e=Am();g.lc(e,el(d,!0,!1));d=e}else d=Am("nf");g.lc(d,on(c));c=ln(c,d,!0)}return c}),void 0);
g.x("Goog_AdSense_Lidar_getUrlSignalsArray",Ri(195,function(){return Vm()}),void 0);
g.x("Goog_AdSense_Lidar_getUrlSignalsList",Ri(196,function(){return g.wg(Vm())}),void 0);var nO=(new Date).getTime();var yn="StopIteration"in g.w?g.w.StopIteration:{message:"StopIteration",stack:""};xn.prototype.next=function(){throw yn;};
xn.prototype.qe=function(){return this};g.h=Cn.prototype;g.h.yd=function(){return this.ya};
g.h.Fb=function(){En(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.o[this.g[b]]);return a};
g.h.Sc=function(){En(this);return this.g.concat()};
g.h.isEmpty=function(){return 0==this.ya};
g.h.clear=function(){this.o={};this.wf=this.ya=this.g.length=0};
g.h.remove=function(a){return Dn(this.o,a)?(delete this.o[a],this.ya--,this.wf++,this.g.length>2*this.ya&&En(this),!0):!1};
g.h.get=function(a,b){return Dn(this.o,a)?this.o[a]:b};
g.h.set=function(a,b){Dn(this.o,a)||(this.ya++,this.g.push(a),this.wf++);this.o[a]=b};
g.h.forEach=function(a,b){for(var c=this.Sc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new Cn(this)};
g.h.qe=function(a){En(this);var b=0,c=this.wf,d=this,e=new xn;e.next=function(){if(c!=d.wf)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw yn;var e=d.g[b++];return a?e:d.o[e]};
return e};g.Hn.prototype.toString=function(){var a=[],b=this.B;b&&a.push(Pn(b,tY,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(Pn(b,tY,!0),"@"),a.push((0,window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.o)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Pn(c,"/"==c.charAt(0)?uY:vY,!0));(c=this.A.toString())&&a.push("?",c);(c=this.D)&&a.push("#",Pn(c,wY));return a.join("")};
g.Hn.prototype.resolve=function(a){var b=this.clone(),c=!!a.B;c?In(b,a.B):c=!!a.H;c?b.H=a.H:c=!!a.g;c?g.Jn(b,a.g):c=null!=a.C;var d=a.o;if(c)g.Kn(b,a.C);else if(c=!!a.o){if("/"!=d.charAt(0))if(this.g&&!this.o)d="/"+d;else{var e=b.o.lastIndexOf("/");-1!=e&&(d=b.o.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.La(e,"/");e=e.split("/");for(var f=[],k=0;k<e.length;){var l=e[k++];"."==l?d&&k==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=
f[0])&&f.pop(),d&&k==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.o=d:c=""!==a.A.toString();c?Ln(b,a.A.clone()):c=!!a.D;c&&(b.D=a.D);return b};
g.Hn.prototype.clone=function(){return new g.Hn(this)};
g.Hn.prototype.J=function(){return this.A.toString()};
var tY=/[#\/\?@]/g,vY=/[\#\?:]/g,uY=/[\#\?]/g,Qn=/[\#\?@]/g,wY=/#/g;g.h=g.Nn.prototype;g.h.yd=function(){Yn(this);return this.ya};
g.h.remove=function(a){Yn(this);a=Zn(this,a);return Dn(this.g.o,a)?(this.o=null,this.ya=this.ya-this.g.get(a).length,this.g.remove(a)):!1};
g.h.clear=function(){this.g=this.o=null;this.ya=0};
g.h.isEmpty=function(){Yn(this);return 0==this.ya};
g.h.forEach=function(a,b){Yn(this);this.g.forEach(function(c,d){(0,g.G)(c,function(c){a.call(b,c,d,this)},this)},this)};
g.h.Sc=function(){Yn(this);for(var a=this.g.Fb(),b=this.g.Sc(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h.Fb=function(a){Yn(this);var b=[];if(g.u(a))$n(this,a)&&(b=g.zb(b,this.g.get(Zn(this,a))));else{a=this.g.Fb();for(var c=0;c<a.length;c++)b=g.zb(b,a[c])}return b};
g.h.set=function(a,b){Yn(this);this.o=null;a=Zn(this,a);$n(this,a)&&(this.ya=this.ya-this.g.get(a).length);this.g.set(a,[b]);this.ya=this.ya+1;return this};
g.h.get=function(a,b){var c=a?this.Fb(a):[];return 0<c.length?String(c[0]):b};
g.h.toString=function(){if(this.o)return this.o;if(!this.g)return"";for(var a=[],b=this.g.Sc(),c=0;c<b.length;c++){var d=b[c],e=(0,window.encodeURIComponent)(String(d));d=this.Fb(d);for(var f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+(0,window.encodeURIComponent)(String(d[f])));a.push(k)}}return this.o=a.join("&")};
g.h.clone=function(){var a=new g.Nn;a.o=this.o;this.g&&(a.g=this.g.clone(),a.ya=this.ya);return a};var Ho={Dw:5E3,Ew:15E3,Uo:"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),Ow:/\bocr\b/,El:0,Ce:{},qH:function(a,b,c){a&&(Ho.Jj(a)?Ho.rH(a,b):Ho.pH(a,b,c))},
Jj:function(a){if(Ma(g.$a(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.Hn(a)}catch(c){return null!=g.nb(Ho.Uo,function(b){return 0<a.search(b)})}return b.D.match(Ho.Ow)?!0:null!=g.nb(Ho.Uo,function(b){return null!=a.match(b)})},
rH:function(a,b){if(a&&(a=Ho.ey(a),!Ma(a))){var c='javascript:"<body><img src=\\""+'+a+'+"\\"></body>"';b?Ho.Yq(function(b){Ho.Ou(b?c:'javascript:"<body><object data=\\""+'+a+'+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):Ho.Ou(c)}},
Ou:function(a){var b=g.Cd("IFRAME",{src:a,style:"display:none"});a=g.kd(b).body;var c=g.mg(function(){g.mf(d);g.Kd(b)},Ho.Ew);
var d=Ze(b,["load","error"],function(){g.mg(function(){g.w.clearTimeout(c);g.Kd(b)},Ho.Dw)});
a.appendChild(b)},
Yq:function(a,b){var c=Ho.Ce.imageLoadingEnabled;if(null!=c)a(c);else{var d=!1;c=function(b,c){delete Ho.Ce[c];d||(d=!0,null!=Ho.Ce.imageLoadingEnabled||(Ho.Ce.imageLoadingEnabled=b),a(b))};
b?b(c):Ho.zz(c)}},
zz:function(a){var b=new window.Image,c=""+Ho.El++;Ho.Ce[c]=b;b.onload=function(){(0,window.clearTimeout)(d);a(!0,c)};
var d=(0,window.setTimeout)(function(){a(!1,c)},300);
b.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},
oH:function(a){if(a){var b=g.Ed("OBJECT");b.data=a;b.width="1";b.height="1";b.style.visibility="hidden";var c=""+Ho.El++;Ho.Ce[c]=b;b.onload=b.onerror=function(){delete Ho.Ce[c]};
window.document.body.appendChild(b)}},
Pu:function(a){if(a){var b=new window.Image,c=""+Ho.El++;Ho.Ce[c]=b;b.onload=b.onerror=function(){delete Ho.Ce[c]};
b.src=a}},
pH:function(a,b,c){if(a){if(c)try{if(g.w.navigator&&g.w.navigator.sendBeacon&&g.w.navigator.sendBeacon(a,""))return}catch(d){}b?Ho.Yq(function(b){b?Ho.Pu(a):Ho.oH(a)}):Ho.Pu(a)}},
ey:function(a){var b=Nc(Qc(a));if("about:invalid#zClosurez"===b)return"";b instanceof g.Tc?a=b:(a=null,b.Bm&&(a=b.Pl()),b=Va(b.Rf?b.Mf():String(b)),a=Vc(b,a));a=g.Uc(a);return(0,window.encodeURIComponent)(String(g.wg(a)))}};g.E(g.ao,g.I);var xY=[];g.ao.prototype.ba=function(a,b,c,d){g.za(b)||(b&&(xY[0]=b.toString()),b=xY);for(var e=0;e<b.length;e++){var f=g.$e(a,b[e],c||this.handleEvent,d||!1,this.o||this);if(!f)break;this.g[f.key]=f}return this};
g.ao.prototype.Ma=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)this.Ma(a,b[f],c,d,e);else c=c||this.handleEvent,d=g.Da(d)?!!d.capture:!!d,e=e||this.o||this,c=af(c),d=!!d,b=g.Pe(a)?Ye(a.xd,String(b),c,d,e):a?(a=g.cf(a))?Ye(a,b,c,d,e):null:null,b&&(g.mf(b),delete this.g[b.key]);return this};
g.ao.prototype.W=function(){g.ao.ga.W.call(this);bo(this)};
g.ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var eo=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.E(go,g.Me);lo.prototype.g=function(){return!1};
lo.prototype.getPlayerType=function(){return""};
var mo=new lo;no.prototype.getId=function(){return this.za};oo.prototype.getId=function(){return this.za};var zo=["ActiveViewExternalLayer"],uo=null;var Bo=["*.youtu.be","*.youtube.com"],Go="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),Fo=["c.googlesyndication.com"];g.yY={Jo:["BC","AD"],Io:["Before Christ","Anno Domini"],Oo:"JFMAMJJASOND".split(""),Xo:"JFMAMJJASOND".split(""),Sk:"January February March April May June July August September October November December".split(" "),bl:"January February March April May June July August September October November December".split(" "),Yk:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dl:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ll:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
il:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Zk:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fl:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Nw:"SMTWTFS".split(""),Yo:"SMTWTFS".split(""),Vo:["Q1","Q2","Q3","Q4"],So:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Ok:["AM","PM"],Bi:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],kl:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Go:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Ci:6,ip:[5,6],Di:5};
g.yY={Jo:["\u0434\u043e \u043d. \u044d.","\u043d. \u044d."],Io:["\u0434\u043e \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430","\u043e\u0442 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430"],Oo:"\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),Xo:"\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),Sk:"\u044f\u043d\u0432\u0430\u0440\u044f \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043c\u0430\u0440\u0442\u0430 \u0430\u043f\u0440\u0435\u043b\u044f \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043d\u043e\u044f\u0431\u0440\u044f \u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(" "),
bl:"\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),Yk:"\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u044f \u0438\u044e\u043d. \u0438\u044e\u043b. \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),
dl:"\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),ll:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
il:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),Zk:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),fl:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
Nw:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),Yo:"\u0412\u041f\u0412\u0421\u0427\u041f\u0421".split(""),Vo:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],So:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],Ok:["\u0414\u041f",
"\u041f\u041f"],Bi:["EEEE, d MMMM y '\u0433'.","d MMMM y '\u0433'.","d MMM y '\u0433'.","dd.MM.y"],kl:["H:mm:ss zzzz","H:mm:ss z","H:mm:ss","H:mm"],Go:["{1}, {0}","{1}, {0}","{1}, {0}","{1}, {0}"],Ci:0,ip:[5,6],Di:6};g.h=g.Lo.prototype;g.h.mj=g.yY.Ci;g.h.oj=g.yY.Di;g.h.clone=function(){var a=new g.Lo(this.date);a.mj=this.mj;a.oj=this.oj;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.yj=function(a,b){return[this.getFullYear(),g.Za(this.getMonth()+1,2),g.Za(this.getDate(),2)].join(a?"-":"")+(b?g.Mo(this):"")};
g.h.toString=function(){return this.yj()};
g.h.valueOf=function(){return this.date.valueOf()};var Oo=new No;No.prototype.clear=function(){this.g=null;this.A="";this.o=null};g.wa(Qo);Qo.prototype.isLoggingEnabled=function(){return this.g};g.E(Uo,g.rf);var Vo=null;Uo.prototype.destroy=function(){this.A.Ma(this.o,"activityMonitor",this.D);this.o=null};
Uo.prototype.D=function(a){var b=a.o;switch(a.A){case "appStateChanged":mn(Wm.getInstance(),b.appState,b.nativeTime);break;case "externalActivityEvent":Zo();break;case "measurableImpression":Xo();break;case "viewableImpression":Yo();break;case "engagementData":b=b.engagementString;Wo().C=b;Wo().B=(0,g.F)();break;case "viewability":a=b.eventId;window.clearTimeout(a);var c=this.g.get(a);c&&(this.g.remove(a),c(b.viewabilityData));break;case "viewabilityMeasurement":var d=Wm.getInstance(),e=b.queryId;
b=b.viewabilityData;a=Bk.getInstance();if("exc"==a.Za){d.A=b.nativeVolume;c=b.coverage||0;var f=b.unmeasurable;d.g&&null!=b.userActivity&&(d.B=b.userActivity);d=d.wj(e,{});-1==d.ka&&(d.ka=jj(),d.qb=d.Tc().o);d.ha+=f?1:0;d.Wa++;d.Qa[Kj(c)]++;e=b.insideIframe;g.r(e)&&0==e&&(a.o=!1);d.af=f||d.af;b.position&&Gk(d,K,a.o,new g.Zg(b.position.top,b.position.right,b.position.bottom,b.position.left));b.documentSize&&(a.A=new g.hd(b.documentSize.width,b.documentSize.height));b.viewportSize&&(a.g=new g.hd(b.viewportSize.width,
b.viewportSize.height));d.Bb.g=g.Zc(c,0,1);d.Nm=d.Bb.g}break;case "engagement":a=b.eventId,window.clearTimeout(a),c=this.g.get(a),Qo.getInstance().isLoggingEnabled()&&(f=-1,this.F&&(f=(0,g.F)()-this.F),d=!1,c||(d=!0),bc(b,"loggingId")&&To(Qo.getInstance(),{step:"receivedResponse",time:(0,g.F)(),timeout:d,logid:b.loggingId,timediff:f})),c&&(this.g.remove(a),c(b.engagementString))}};
g.x("ima.bridge.getNativeViewability",function(a,b){Wo();b({})},void 0);
g.x("ima.bridge.getVideoMetadata",function(){var a=(Wo(),null);return g.Ca(a)?a():{}},void 0);
g.x("ima.bridge.triggerViewEvent",Yo,void 0);g.x("ima.bridge.triggerMeasurableEvent",Xo,void 0);g.x("ima.bridge.triggerExternalActivityEvent",Zo,void 0);g.E($o,g.rf);var ap=null;$o.prototype.destroy=function(){this.B.Ma(this.g,"activityMonitor",this.C);this.o=!1;this.F.clear()};
$o.prototype.W=function(){this.destroy();$o.ga.W.call(this)};
$o.prototype.init=function(a){if(!this.o){if(this.g=a||null)this.B.ba(this.g,"activityMonitor",this.C),cp(this);dp();a=Ao();(0,g.G)(a,function(a){var b=Gj.getInstance();ub(b.g,a)});
mo.g()||(Wm.getInstance().o=!0);this.A=(g.Ca(null),null);this.o=!0}};
$o.prototype.C=function(a){var b=a.o,c=b.queryId,d={};d.eventId=b.eventId;switch(a.A){case "getPageSignals":cp(this);break;case "reportVastEvent":a=b.vastEvent;var e=b.osdId,f={};f.opt_fullscreen=b.isFullscreen;b.isOverlay&&(f.opt_bounds=b.overlayBounds);if(this.o)if(this.A)c=this.A(a,c,f);else{b=f||{};if(e=e?this.D.get(e):mo.A){if(null==b.opt_fullscreen){if(null==e)f=!1;else if((PX&&!QX||Xa(g.Rb,"iPod"))&&null!=e.webkitDisplayingFullscreen)f=e.webkitDisplayingFullscreen;else{f=window.screen.availWidth||
window.screen.width;var k=window.screen.availHeight||window.screen.height;var l=g.Ca(e.getBoundingClientRect)&&g.Rd(g.kd(e),e)?e.getBoundingClientRect():{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};f=0>=f-l.width&&42>=k-l.height}b.opt_fullscreen=f}null!=b.opt_adElement||(b.opt_adElement=e)}c=Qi("lidar::handlevast_html5",g.A(rn,a,c,b))||{}}else c={};d.viewabilityData=c;this.g.send("activityMonitor","viewability",d);break;case "fetchAdTagUrl":c={},c.eventId=b.eventId,
e=b.osdId,d=null,bc(b,"isFullscreen")&&(d=b.isFullscreen),bc(b,"loggingId")&&(a=b.loggingId,c.loggingId=a,To(Qo.getInstance(),{step:"beforeLookup",logid:a,time:(0,g.F)()},!0)),c.engagementString=ep(this,e,d),this.g.send("activityMonitor","engagement",c)}};
g.x("ima.common.getVideoMetadata",function(a){a=bp().F.get(a);return g.Ca(a)?a():{}},void 0);
g.x("ima.common.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=bp().g;d?d.send("activityMonitor","viewableImpression",c):bp().dispatchEvent(new go("viewable_impression"))},void 0);
g.x("ima.common.triggerViewabilityMeasurementUpdate",function(a,b){var c=bp().g,d={};d.queryId=a;d.viewabilityData=b;c&&c.send("activityMonitor","viewabilityMeasurement",d)},void 0);
g.x("ima.common.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=bp().g;d?d.send("activityMonitor","measurableImpression",c):bp().dispatchEvent(new go("measurable_impression"))},void 0);
g.x("ima.common.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;(a=bp().g)?a.send("activityMonitor","externalActivityEvent",d):bp().dispatchEvent(new go("externalActivityEvent"))},void 0);
bp();g.wd&&g.zc(8);g.fp.prototype.o=function(a){var b=0,c=0,d=!1;a=a.split(bY);for(var e=0;e<a.length;e++){var f=a[e];$X.test(f)?(b++,c++):aY.test(f)?d=!0:ZX.test(f)?c++:cY.test(f)&&(d=!0)}return 0==c?d?1:0:.4<b/c?-1:1};hp.prototype.g=null;hp.prototype.toString=function(){return this.content};
g.E(ip,hp);(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=new b(String(a));void 0!==d&&(c.g=d);return c}})(ip);
var jp={};(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=String(a);if(!c)return"";c=new b(c);void 0!==d&&(c.g=d);return c}})(ip);var zY=g.wd?Kc(Ec(Fc('javascript:""'))):Kc(Ec(Fc("about:blank")));Jc(zY);var AY=g.wd?Kc(Ec(Fc('javascript:""'))):Kc(Ec(Fc("javascript:undefined")));Jc(AY);kp("a","");kp("a","fixedDirectionality");kp("a","redesign2014q4");kp("b","");kp("b","redesign2014q4");kp("b","forcedlinebreak");var rp=g.wd&&qp();g.E(g.tp,g.I);g.h=g.tp.prototype;g.h.start=function(){this.stop();this.A=!1;var a=up(this),b=vp(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.za=g.$e(this.g,"MozBeforePaint",this.o),this.g.mozRequestAnimationFrame(null),this.A=!0):this.za=a&&b?a.call(this.g,this.o):this.g.setTimeout(wf(this.o),20)};
g.h.Eh=function(){this.isActive()||this.start()};
g.h.stop=function(){if(this.isActive()){var a=up(this),b=vp(this);a&&!b&&this.g.mozRequestAnimationFrame?g.mf(this.za):a&&b?b.call(this.g,this.za):this.g.clearTimeout(this.za)}this.za=null};
g.h.isActive=function(){return null!=this.za};
g.h.ky=function(){this.A&&this.za&&g.mf(this.za);this.za=null;this.C.call(this.B,(0,g.F)())};
g.h.W=function(){this.stop();g.tp.ga.W.call(this)};g.E(g.O,g.I);g.h=g.O.prototype;g.h.za=0;g.h.W=function(){g.O.ga.W.call(this);this.stop();delete this.g;delete this.o};
g.h.start=function(a){this.stop();this.za=g.mg(this.A,g.r(a)?a:this.B)};
g.h.Jc=function(a){this.isActive()||this.start(a)};
g.h.stop=function(){this.isActive()&&g.w.clearTimeout(this.za);this.za=0};
g.h.isActive=function(){return 0!=this.za};
g.h.zq=function(){this.za=0;this.g&&this.g.call(this.o)};g.Bp={};g.yp=null;g.wa(g.Cp);g.Cp.prototype.g=0;g.E(g.Dp,g.rf);g.h=g.Dp.prototype;g.h.jz=g.Cp.getInstance();g.h.getId=function(){return this.za||(this.za=":"+(this.jz.g++).toString(36))};
g.h.la=function(){return this.o};
g.h.Xn=function(a){if(this.J&&this.J!=a)throw Error("Method not supported");g.Dp.ga.Xn.call(this,a)};
g.h.hm=ba(0);g.h.rh=function(){Ep(this,function(a){a.Sf&&a.rh()});
this.C&&bo(this.C);this.Sf=!1};
g.h.W=function(){this.Sf&&this.rh();this.C&&(this.C.dispose(),delete this.C);Ep(this,function(a){a.dispose()});
this.o&&g.Kd(this.o);this.J=this.o=this.D=this.H=null;g.Dp.ga.W.call(this)};
g.h.wh=ba(1);g.h.removeChild=function(a,b){if(a){var c=g.u(a)?a:a.getId();a=this.D&&c?hc(this.D,c)||null:null;if(c&&a){gc(this.D,c);g.xb(this.H,a);b&&(a.rh(),a.o&&g.Kd(a.o));c=a;if(null==c)throw Error("Unable to set parent component");c.J=null;g.Dp.ga.Xn.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};Kc(Ec(Fc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Kc(Ec(Fc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Kc(Ec(Fc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Kc(Ec(Fc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Fp.prototype.g=null;var BY;g.E(Ip,Fp);BY=new Ip;g.E(Kp,g.rf);Kp.prototype.ze=null;var Tp=/^https?$/i,CY=["POST","PUT"];g.h=Kp.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.C="";this.B=0;this.Z=b;this.V=!1;this.o=!0;this.g=this.U?Jp(this.U):Jp(BY);this.T=this.U?Hp(this.U):Hp(BY);this.g.onreadystatechange=(0,g.z)(this.Cq,this);try{co(Sp(this,"Opening Xhr")),this.aa=!0,this.g.open(b,String(a),!0),this.aa=!1}catch(f){co(Sp(this,"Error opening Xhr: "+f.message));Pp(this,f);return}a=c||"";var e=this.headers.clone();
d&&Gn(d,function(a,b){e.set(b,a)});
d=g.nb(e.Sc(),Mp);c=g.w.FormData&&a instanceof g.w.FormData;!g.rb(CY,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.g.setRequestHeader(b,a)},this);
this.da&&(this.g.responseType=this.da);"withCredentials"in this.g&&this.g.withCredentials!==this.Y&&(this.g.withCredentials=this.Y);try{Vp(this),0<this.D&&(this.N=Lp(this.g),co(Sp(this,"Will abort after "+this.D+"ms if incomplete, xhr2 "+this.N)),this.N?(this.g.timeout=this.D,this.g.ontimeout=(0,g.z)(this.Dq,this)):this.F=g.mg(this.Dq,this.D,this)),co(Sp(this,"Sending request")),this.H=!0,this.g.send(a),this.H=!1}catch(f){co(Sp(this,"Send error: "+f.message)),Pp(this,f)}};
g.h.Dq=function(){"undefined"!=typeof Qp&&this.g&&(this.C="Timed out after "+this.D+"ms, aborting",this.B=8,Sp(this,this.C),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.o&&(Sp(this,"Aborting"),this.o=!1,this.A=!0,this.g.abort(),this.A=!1,this.B=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Op(this))};
g.h.W=function(){this.g&&(this.o&&(this.o=!1,this.A=!0,this.g.abort(),this.A=!1),Op(this,!0));Kp.ga.W.call(this)};
g.h.Cq=function(){this.fa()||(this.aa||this.H||this.A?Up(this):this.BF())};
g.h.BF=function(){Up(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<Rp(this)?this.g.status:-1}catch(a){return-1}};new Cn;var DY=[];g.x("onYouTubeIframeAPIReady",function(){(0,g.G)(DY,function(a){a()});
tb(DY)},window);mc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));(function(){for(var a=["ms","moz","webkit","o"],b=0,c;c=a[b]&&!g.w.requestAnimationFrame;++b)g.w.requestAnimationFrame=g.w[c+"RequestAnimationFrame"],g.w.cancelAnimationFrame=g.w[c+"CancelAnimationFrame"]||g.w[c+"CancelRequestAnimationFrame"];if(!g.w.requestAnimationFrame){var d=0;g.w.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-d));d=b+c;return g.w.setTimeout(function(){a(b+c)},c)};
g.w.cancelAnimationFrame||(g.w.cancelAnimationFrame=function(a){(0,window.clearTimeout)(a)})}})();
var Yp=[[],[]],Zp=0,$p=!1,Xp=0;cq.prototype.stringify=function(a){return g.w.JSON.stringify(a,this.g)};
cq.prototype.parse=function(a){return g.w.JSON.parse(a,this.o)};dq.prototype.clone=function(){return new dq(this.g,this.F,this.A,this.C,this.B,this.D,this.o,this.H)};gq.prototype.o=0;gq.prototype.reset=function(){this.g=this.A=this.B;this.o=0};
gq.prototype.getValue=function(){return this.A};g.h=hq.prototype;g.h.Pf=null;g.h.Jd=!1;g.h.eh=null;g.h.uo=null;g.h.li=null;g.h.Bg=null;g.h.We=null;g.h.qf=null;g.h.ig=null;g.h.Qb=null;g.h.yi=0;g.h.Ld=null;g.h.Ik=null;g.h.Qf=null;g.h.Hh=-1;g.h.Ku=!0;g.h.Ff=!1;g.h.gm=0;g.h.jk=null;var tq={},rq={};g.h=hq.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.bH=function(a){a=a.target;var b=this.jk;b&&3==Rp(a)?b.Ag():this.Cv(a)};
g.h.Cv=function(a){try{if(a==this.Qb)a:{var b=Rp(this.Qb),c=this.Qb.B,d=this.Qb.getStatus();if(g.wd&&!g.Bc(10)||g.yd&&!g.zc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.uh&&!Wp(this.Qb))break a;this.Ff||4!=b||7==c||(8==c||0>=d?this.g.Hd(3):this.g.Hd(2));Dq(this);var e=this.Qb.getStatus();this.Hh=e;var f=Wp(this.Qb);(this.Jd=200==e)?(4==b&&vq(this),this.D?(xq(this,b,f),g.uh&&this.Jd&&3==b&&(this.B.ba(this.o,"tick",this.RG),this.o.start())):uq(this,f),this.Jd&&!this.Ff&&(4==b?this.g.ck(this):(this.Jd=
!1,pq(this)))):(this.Qf=400==e&&0<f.indexOf("Unknown SID")?3:0,sq(),vq(this),wq(this))}}catch(k){this.Qb&&Wp(this.Qb)}finally{}};
g.h.RG=function(){var a=Rp(this.Qb),b=Wp(this.Qb);this.yi<b.length&&(Dq(this),xq(this,a,b),this.Jd&&4!=a&&pq(this))};
g.h.qG=function(a){Cq((0,g.z)(this.pG,this,a),0)};
g.h.pG=function(a){this.Ff||(Dq(this),uq(this,a),pq(this))};
g.h.cu=function(a){Cq((0,g.z)(this.oG,this,a),0)};
g.h.oG=function(a){this.Ff||(vq(this),this.Jd=a,this.g.ck(this),this.g.Hd(4))};
g.h.cancel=function(){this.Ff=!0;vq(this)};
g.h.AG=function(){this.eh=null;var a=(0,g.F)();0<=a-this.uo?(2!=this.Bg&&this.g.Hd(3),vq(this),this.Qf=2,sq(),wq(this)):Bq(this,this.uo-a)};g.h=Hq.prototype;g.h.Zl=null;g.h.bd=null;g.h.kk=!1;g.h.Bq=null;g.h.nj=null;g.h.dm=null;g.h.fm=null;g.h.nd=null;g.h.we=-1;g.h.Gh=null;g.h.lh=null;g.h.connect=function(a){this.fm=a;a=Iq(this.g,null,this.fm);sq();this.Bq=(0,g.F)();var b=this.g.J;null!=b?(this.Gh=b[0],(this.lh=b[1])?(this.nd=1,Jq(this)):(this.nd=2,Lq(this))):(Tn(a,"MODE","init"),this.bd=new hq(this,0,void 0,void 0,void 0),this.bd.Pf=this.Zl,oq(this.bd,a,!1,null,!0),this.nd=0)};
g.h.Gx=function(a){if(a)this.nd=2,Lq(this);else{sq();var b=this.g;b.Bd=b.Re.we;fr(b,9)}a&&this.Hd(2)};
g.h.Gl=function(a){return this.g.Gl(a)};
g.h.abort=function(){this.bd&&(this.bd.cancel(),this.bd=null);this.we=-1};
g.h.Aq=function(){return!1};
g.h.Wt=function(a,b){this.we=a.Hh;if(0==this.nd)if(b){try{var c=this.o.parse(b)}catch(d){c=this.g;c.Bd=this.we;fr(c,2);return}this.Gh=c[0];this.lh=c[1]}else c=this.g,c.Bd=this.we,fr(c,2);else if(2==this.nd)if(this.kk)sq(),this.dm=(0,g.F)();else if("11111"==b){if(sq(),this.kk=!0,this.nj=(0,g.F)(),c=this.nj-this.Bq,!g.wd||g.Bc(10)||500>c)this.we=200,this.bd.cancel(),sq(),Kq(this.g,this,!0)}else sq(),this.nj=this.dm=(0,g.F)(),this.kk=!1};
g.h.ck=function(){this.we=this.bd.Hh;if(this.bd.Jd)0==this.nd?this.lh?(this.nd=1,Jq(this)):(this.nd=2,Lq(this)):2==this.nd&&((!g.wd||g.Bc(10)?!this.kk:200>this.dm-this.nj)?(sq(),Kq(this.g,this,!1)):(sq(),Kq(this.g,this,!0)));else{0==this.nd?sq():2==this.nd&&sq();var a=this.g;a.Bd=this.we;fr(a,2)}};
g.h.pi=function(){return this.g.pi()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Hd=function(a){this.g.Hd(a)};g.h=Mq.prototype;g.h.sh=null;g.h.Hc=null;g.h.Eb=null;g.h.Yl=null;g.h.rj=null;g.h.rp=null;g.h.zj=null;g.h.fi=0;g.h.iD=0;g.h.dc=null;g.h.Te=null;g.h.se=null;g.h.If=null;g.h.Re=null;g.h.Hk=null;g.h.Eg=-1;g.h.gr=-1;g.h.Bd=-1;g.h.vh=0;g.h.vg=0;g.h.Gf=8;var gr=new g.rf;g.E(Oq,g.Me);g.E(Pq,g.Me);g.E(Qq,g.Me);g.h=Mq.prototype;g.h.connect=function(a,b,c,d,e){sq();this.Yl=b;this.sh=c||{};d&&g.r(e)&&(this.sh.OSID=d,this.sh.OAID=e);this.D?(Cq((0,g.z)(this.Mp,this,a),100),Wq(this)):this.Mp(a)};
g.h.Mp=function(a){this.Re=new Hq(this);this.Re.Zl=null;this.Re.o=this.C;this.Re.connect(a)};
g.h.Aq=function(){return 0==this.g};
g.h.au=function(a){this.Te=null;ar(this,a)};
g.h.Zt=function(){this.se=null;this.Eb=new hq(this,0,this.A,"rpc",this.F);this.Eb.Pf=null;this.Eb.gm=0;var a=this.rp.clone();g.Rn(a,"RID","rpc");g.Rn(a,"SID",this.A);g.Rn(a,"CI",this.Hk?"0":"1");g.Rn(a,"AID",this.Eg);Sq(this,a);if(!g.wd||g.Bc(10))g.Rn(a,"TYPE","xmlhttp"),oq(this.Eb,a,!0,this.zj,!1);else{g.Rn(a,"TYPE","html");var b=this.Eb,c=!!this.zj;b.Bg=3;b.We=Un(a.clone());Aq(b,c)}};
g.h.Wt=function(a,b){if(0!=this.g&&(this.Eb==a||this.Hc==a))if(this.Bd=a.Hh,this.Hc==a&&3==this.g)if(7<this.Gf){try{var c=this.C.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.se){if(this.Eb)if(this.Eb.li+3E3<this.Hc.li)Xq(this),this.Eb.cancel(),this.Eb=null;else break a;dr(this);sq()}}else this.gr=c[1],0<this.gr-this.Eg&&37500>c[2]&&this.Hk&&0==this.vg&&!this.If&&(this.If=Cq((0,g.z)(this.DD,this),6E3));else fr(this,11)}else b!=eY.oJ.g&&fr(this,11);else if(this.Eb==a&&Xq(this),
!Ma(b)){c=this.C.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.Eg=e[0];e=e[1];2==this.g?"c"==e[0]?(this.A=e[1],this.zj=e[2],e=e[3],null!=e?this.Gf=e:this.Gf=6,this.g=3,this.dc&&this.dc.zp(this),this.rp=Iq(this,this.pi()?this.zj:null,this.Yl),br(this)):"stop"==e[0]&&fr(this,7):3==this.g&&("stop"==e[0]?fr(this,7):"noop"!=e[0]&&this.dc&&this.dc.yp(this,e),this.vg=0)}}};
g.h.DD=function(){null!=this.If&&(this.If=null,this.Eb.cancel(),this.Eb=null,dr(this),sq())};
g.h.ck=function(a){if(this.Eb==a){Xq(this);this.Eb=null;var b=2}else if(this.Hc==a)this.Hc=null,b=1;else return;this.Bd=a.Hh;if(0!=this.g)if(a.Jd)1==b?((0,g.F)(),gr.dispatchEvent(new Pq(gr,a.ig?a.ig.length:0)),Vq(this),this.B.length=0):br(this);else{var c=a.Qf,d;if(!(d=3==c||7==c||0==c&&0<this.Bd)){if(d=1==b)this.Hc||this.Te||1==this.g||2<=this.vh?d=!1:(this.Te=Cq((0,g.z)(this.au,this,a),cr(this,this.vh)),this.vh++,d=!0);d=!(d||2==b&&dr(this))}if(d)switch(c){case 1:fr(this,5);break;case 4:fr(this,
10);break;case 3:fr(this,6);break;case 7:fr(this,12);break;default:fr(this,2)}}};
g.h.Sx=function(a){if(!g.rb(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.AH=function(a){a?sq():(sq(),er(this,8))};
g.h.Gl=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Kp;a.Y=!1;return a};
g.h.isActive=function(){return!!this.dc&&this.dc.isActive(this)};
g.h.Hd=function(){gr.dispatchEvent(new Qq(gr))};
g.h.pi=function(){return!(!g.wd||g.Bc(10))};
g.h=hr.prototype;g.h.zp=function(){};
g.h.yp=function(){};
g.h.xp=function(){};
g.h.Cl=function(){};
g.h.mq=function(){return{}};
g.h.isActive=function(){return!0};g.E(g.jr,g.I);g.h=g.jr.prototype;g.h.subscribe=function(a,b,c){var d=this.o[a];d||(d=this.o[a]=[]);var e=this.Lc;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.Lc=e+3;d.push(e);return e};
g.h.unsubscribe=function(a,b,c){if(a=this.o[a]){var d=this.g;if(a=g.nb(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.Rc(a)}return!1};
g.h.Rc=function(a){var b=this.g[a];if(b){var c=this.o[b];0!=this.B?(this.A.push(a),this.g[a+1]=g.va):(c&&g.xb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.h.R=function(a){var b=this.o[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.C)for(d=0;d<b.length;d++){var f=b[d];kr(this.g[f+1],this.g[f+2],c)}else{this.B++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.g[f+1].apply(this.g[f+2],c)}finally{if(this.B--,0<this.A.length&&0==this.B)for(;f=this.A.pop();)this.Rc(f)}}return 0!=d}return!1};
g.h.clear=function(a){if(a){var b=this.o[a];b&&((0,g.G)(b,this.Rc,this),delete this.o[a])}else this.g.length=0,this.o={}};
g.h.yd=function(a){if(a){var b=this.o[a];return b?b.length:0}a=0;for(b in this.o)a+=this.yd(b);return a};
g.h.W=function(){g.jr.ga.W.call(this);this.clear();this.A.length=0};g.lr.prototype.set=function(a,b){g.r(b)?this.g.set(a,g.wg(b)):this.g.remove(a)};
g.lr.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return g.tg(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.lr.prototype.remove=function(a){this.g.remove(a)};g.E(mr,g.lr);mr.prototype.set=function(a,b){mr.ga.set.call(this,a,or(b))};
mr.prototype.o=function(a){a=mr.ga.get.call(this,a);if(!g.r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mr.prototype.get=function(a){if(a=this.o(a)){if(a=a.data,!g.r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.E(pr,mr);pr.prototype.set=function(a,b,c){if(b=or(b)){if(c){if(c<(0,g.F)()){pr.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.F)()}pr.ga.set.call(this,a,b)};
pr.prototype.o=function(a,b){var c=pr.ga.o.call(this,a);if(c)if(!b&&g.qr(c))pr.prototype.remove.call(this,a);else return c};g.E(g.rr,pr);g.E(tr,sr);tr.prototype.yd=function(){var a=0;g.An(this.qe(!0),function(){a++});
return a};
tr.prototype.clear=function(){var a=Bn(this.qe(!0)),b=this;(0,g.G)(a,function(a){b.remove(a)})};g.E(ur,tr);g.h=ur.prototype;g.h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.g.getItem(a);if(!g.u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.g.removeItem(a)};
g.h.yd=function(){return this.g.length};
g.h.qe=function(a){var b=0,c=this.g,d=new xn;d.next=function(){if(b>=c.length)throw yn;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.g.clear()};
g.h.key=function(a){return this.g.key(a)};g.E(vr,ur);g.E(wr,ur);g.E(xr,tr);xr.prototype.set=function(a,b){this.o.set(this.g+a,b)};
xr.prototype.get=function(a){return this.o.get(this.g+a)};
xr.prototype.remove=function(a){this.o.remove(this.g+a)};
xr.prototype.qe=function(a){var b=this.o.qe(!0),c=this,d=new xn;d.next=function(){for(var d=b.next();d.substr(0,c.g.length)!=c.g;)d=b.next();return a?d.substr(c.g.length):c.o.get(d)};
return d};zr.prototype.getValue=function(){return this.g};
zr.prototype.clone=function(){return new zr(this.Lc,this.g)};g.h=Ar.prototype;g.h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)tb(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,k=2*a+2;f=k<d&&b[k].Lc<b[f].Lc?k:f;if(b[f].Lc>e.Lc)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.h.Fb=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.h.Sc=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].Lc);return b};
g.h.clone=function(){return new Ar(this)};
g.h.yd=function(){return this.g.length};
g.h.isEmpty=function(){return g.sb(this.g)};
g.h.clear=function(){tb(this.g)};g.E(Cr,Ar);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
Dr.prototype.cancel=function(a){if(this.g)this.A instanceof Dr&&this.A.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.H--,0>=b.H&&b.cancel())}this.T?this.T.call(this.N,this):this.J=!0;this.g||(a=new Mr,Hr(this),Fr(this,!1,a))}};
Dr.prototype.K=function(a,b){this.F=!1;Fr(this,a,b)};
Dr.prototype.Xi=function(a){Hr(this);Fr(this,!0,a)};
Dr.prototype.then=function(a,b,c){var d,e,f=new g.Pf(function(a,b){d=a;e=b});
Ir(this,d,function(a){a instanceof Mr?f.cancel():e(a)});
return f.then(a,b,c)};
Mf(Dr);Dr.prototype.isError=function(a){return a instanceof Error};
g.E(Gr,Ka);Gr.prototype.message="Deferred has already fired";Gr.prototype.name="AlreadyCalledError";g.E(Mr,Ka);Mr.prototype.message="Deferred was canceled";Mr.prototype.name="CanceledError";Lr.prototype.o=function(){delete Kr[this.za];throw this.g;};
var Kr={};g.E(Nr,we);g.E(Qr,we);var Pr=[2,11];g.Ru=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.Sr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.x("yt.config_",g.Sr,void 0);var Ur=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.x("yt.msgs_",Ur,void 0);g.Xr=void 0;var us={km:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b]=c},
rf:function(a,b){a.splice(0,b)},
JR:function(a){a.reverse()}};var EY,zA,xA,FY,xG,UL,YD,GY,KA,$D,ZD;EY=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/;zA=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|googleapis\.com|prod\.google\.com|staging\-www\.sandbox\.googleapis\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/;
xA=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/;
FY=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/;xG=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/;UL=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|youtube\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/;
YD=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/\/*embed(\/+|\?|#|$)/;g.lF=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/;
GY=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;g.HY=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion)))/;KA=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/;
$D=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/;
ZD=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|picasaweb\.google\.com|get\.google\.com|lh2\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites\.googlegroups\.com\/a\/google\.com\/flash-api-test-harness\/apiharness\.swf|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;(0,g.F)();var ys=g.r(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.r(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Os={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Rs=!1;var NC=eE||dE,cE=Zs;var kt={},jt=0;var wt={RI:"net.badstatus",JK:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};g.p(nt,Ka);var vt=nt;qt.prototype.then=function(a,b,c){return this.A?this.A.then(a,b,c):1===this.o&&a?(a=a.call(c,this.g),Nf(a)?a:tt(a)):2===this.o&&b?(a=b.call(c,this.g),Nf(a)?a:rt(a)):this};
qt.prototype.getValue=function(){return this.g};
Mf(qt);g.p(xt,Ka);xt.prototype.name="BiscottiError";g.p(ut,Ka);ut.prototype.name="BiscottiMissingError";var Bt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},At=null;var It={};var IY,Nt;IY=0;Nt=g.yd?"webkit":g.th?"moz":g.wd?"ms":g.uh?"o":"";g.JY=g.y("ytDomDomGetNextId")||function(){return++IY};
g.x("ytDomDomGetNextId",g.JY,void 0);var Ut={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Vt.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vt.prototype.Wq=function(){return this.event?!1===this.event.returnValue:!1};
Vt.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vt.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Wt=g.y("ytEventsEventsListeners")||{};g.x("ytEventsEventsListeners",Wt,void 0);var Yt=g.y("ytEventsEventsCounter")||{count:0};g.x("ytEventsEventsCounter",Yt,void 0);var KY=xf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.p(g.iu,g.I);g.iu.prototype.O=function(a,b,c,d,e){c=xs((0,g.z)(c,d||this.Cb));c={target:a,name:b,Xi:c};var f;e&&KY()&&(f={passive:!0});a.addEventListener(b,c.Xi,f);this.T.push(c);return c};
g.iu.prototype.Ma=function(a){for(var b=0;b<this.T.length;b++)if(this.T[b]==a){this.T.splice(b,1);a.target.removeEventListener(a.name,a.Xi);break}};
g.iu.prototype.W=function(){g.ku(this);g.I.prototype.W.call(this)};g.E(g.R,g.I);g.R.prototype.subscribe=function(a,b,c){return this.fa()?0:this.da.subscribe(a,b,c)};
g.R.prototype.unsubscribe=function(a,b,c){return this.fa()?!1:this.da.unsubscribe(a,b,c)};
g.R.prototype.Rc=function(a){return this.fa()?!1:this.da.Rc(a)};
g.R.prototype.R=function(a,b){return this.fa()?!1:this.da.R.apply(this.da,arguments)};g.p(g.mu,g.R);g.h=g.mu.prototype;g.h.cancel=function(){this.B&&(this.B=!1,this.R("dragend",0,0,null));this.o&&(this.o=!1,this.R("hoverend",0,0,null),g.ku(this.g),lu(this))};
g.h.xr=function(a){g.ku(this.g);nu(this,ou("move"),this.vr);nu(this,ou("out"),this.wr);nu(this,"touchstart",this.Ym);this.A&&nu(this,ou("down"),this.Xm);var b=g.au(a);a=cu(a);this.o=!0;this.R("hoverstart",a.x,a.y,b);this.R("hovermove",a.x,a.y,b)};
g.h.vr=function(a){var b=g.au(a);a=cu(a);if(this.C){var c=this.C;this.C=null;if(du(c)==b&&fd(cu(c),a))return}this.R("hovermove",a.x,a.y,b)};
g.h.wr=function(a){var b=cu(a),c=du(a);c&&g.Rd(this.D,c)?(this.C=a,this.R("hovermove",b.x,b.y,c)):(g.ku(this.g),lu(this),this.o=!1,this.R("hoverend",b.x,b.y,c))};
g.h.aD=function(a){this.xr(a);this.Xm(a)};
g.h.Xm=function(a){if(!g.ta(a.button)||0==a.button){g.ku(this.g);this.g.O(window.document,ou("move"),this.ZC);this.g.O(window.document,ou("up"),this.Mz);var b=g.au(a);if(g.yd)nu(this,"dragstart",this.Ox);else if(g.hu(a),(g.FE||g.th)&&b)a:{for(var c=b;c;){if(g.Vd(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}window.document.activeElement.blur()}this.B=!0;a=cu(a);this.R("dragstart",a.x,a.y,b);this.R("dragmove",a.x,a.y,b)}};
g.h.Ox=function(a){g.hu(a)};
g.h.ZC=function(a){var b=g.au(a);b==window.document&&(b=null);a=cu(a);this.R("hovermove",a.x,a.y,b);this.R("dragmove",a.x,a.y,b)};
g.h.Mz=function(a){g.ku(this.g);this.B=!1;var b=eu(a),c=g.au(a);a=cu(a);b&&g.Rd(this.D,b)?(nu(this,ou("move"),this.vr),nu(this,ou("out"),this.wr),nu(this,ou("down"),this.Xm),nu(this,"touchstart",this.Ym),this.R("dragend",a.x,a.y,c)):(lu(this),this.o=!1,this.R("dragend",a.x,a.y,c),this.R("hoverend",a.x,a.y,c))};
g.h.Ym=function(a){var b=a.changedTouches[0];b&&(g.ku(this.g),nu(this,"touchmove",this.Nz),nu(this,"touchend",this.yr),nu(this,"touchcancel",this.yr),this.F=b.identifier,a=g.au(a),this.o||(this.o=!0,this.R("hoverstart",b.pageX,b.pageY,a)),this.R("hovermove",b.pageX,b.pageY,a),this.A&&(this.B=!0,this.R("dragstart",b.pageX,b.pageY,a),this.R("dragmove",b.pageX,b.pageY,a)))};
g.h.Nz=function(a){var b=pu(this,a);b&&(this.A&&g.hu(a),a=g.au(a),this.R("hovermove",b.pageX,b.pageY,a),this.A&&this.R("dragmove",b.pageX,b.pageY,a))};
g.h.yr=function(a){var b=pu(this,a);if(b){g.ku(this.g);lu(this);this.o=!1;var c=g.au(a);this.A&&(this.H||g.hu(a),this.B=!1,this.R("dragend",b.pageX,b.pageY,c));this.R("hoverend",b.pageX,b.pageY,c)}};
g.h.W=function(){this.A&&(g.yd&&this.D.removeAttribute("draggable"),this.D.style.touchAction="");g.ku(this.g);g.R.prototype.W.call(this)};var qu={enablejsapi:1},ru={},tu={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};uu.prototype.clone=function(){var a=new uu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==xa(c)?a[b]=g.ic(c):a[b]=c}return a};var iv=0,jv={};var Cv={NI:"atp",UK:"ska",FK:"que",hK:"mus",TK:"sus"};var LY=g.y("ytPubsubPubsubInstance")||new g.jr;g.jr.prototype.subscribe=g.jr.prototype.subscribe;g.jr.prototype.unsubscribeByKey=g.jr.prototype.Rc;g.jr.prototype.publish=g.jr.prototype.R;g.jr.prototype.clear=g.jr.prototype.clear;g.x("ytPubsubPubsubInstance",LY,void 0);g.zu=g.y("ytPubsubPubsubSubscribedKeys")||{};g.x("ytPubsubPubsubSubscribedKeys",g.zu,void 0);g.Bu=g.y("ytPubsubPubsubTopicToKeys")||{};g.x("ytPubsubPubsubTopicToKeys",g.Bu,void 0);var Au=g.y("ytPubsubPubsubIsSynchronous")||{};
g.x("ytPubsubPubsubIsSynchronous",Au,void 0);var Pu={log_event:"events",log_event2:"events",log_interaction:"interactions"},MY=Object.create(null);MY.log_event="GENERIC_EVENT_LOGGING";MY.log_event2="GENERIC_EVENT_LOGGING";MY.log_interaction="INTERACTION_LOGGING";var Ou={},Gu={},Mu=0,Nu=g.y("ytLoggingTransportLogPayloadsQueue_")||{};g.x("ytLoggingTransportLogPayloadsQueue_",Nu,void 0);var Hu=g.y("ytLoggingTransportTokensToCttTargetIds_")||{};g.x("ytLoggingTransportTokensToCttTargetIds_",Hu,void 0);
var Qu=g.y("ytLoggingTransportDispatchedStats_")||{};g.x("ytLoggingTransportDispatchedStats_",Qu,void 0);var NY=g.y("ytLoggingTransportCapturedTime_")||{};g.x("ytytLoggingTransportCapturedTime_",NY,void 0);var OY=Uu;var fv=g.y("ytLoggingLatencyUsageStats_")||{};g.x("ytLoggingLatencyUsageStats_",fv,void 0);var gv=0;var PY;PY=new vr;g.nv=PY.isAvailable()?new g.rr(PY):null;var tv,QY=new wr;tv=QY.isAvailable()?new g.rr(QY):null;Bv.prototype.ej=function(){var a=new Bv({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.A=this.A;a.o=this.o;a.g=this.g;return a};g.E(Ev,g.I);Ev.prototype.C=function(){500<this.g&&24E4>2*this.g&&(this.g*=2);this.B();this.A&&this.start()};
Ev.prototype.start=function(){this.o.Jc(this.g);this.A=(0,g.F)()+this.g};
Ev.prototype.stop=function(){this.o.stop();this.A=0};
Ev.prototype.isActive=function(){return this.o.isActive()};g.E(Fv,hr);g.h=Fv.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.Rc=function(a){return this.A.Rc(a)};
g.h.R=function(a,b){return this.A.R.apply(this.A,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.Ke(this.A),Hv(this),g.Ke(this.o),this.o=null)};
g.h.fa=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.J="";this.o.stop();this.C=a||null;this.B=b||0;a=this.N+"/test";b=this.N+"/bind";var d=new Mq("1",c?c.firstTestResults:null,c?c.secondTestResults:null,this.T),e=this.g;e&&(e.dc=null);d.dc=this;this.g=d;e?this.g.connect(a,b,this.D,e.A,e.Eg):c?this.g.connect(a,b,this.D,c.sessionId,c.arrayId):this.g.connect(a,b,this.D)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.lc(c,b);this.o.isActive()||2==(this.g?this.g.g:0)?this.F.push(c):Iv(this)&&Yq(this.g,c)};
g.h.zp=function(){Dv(this.o);this.C=null;this.B=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Yq(this.g,a[b])}this.R("handlerOpened")};
g.h.xp=function(a,b){var c=2==b&&401==this.g.Bd;if(4!=b&&!c){if(6==b||410==this.g.Bd)c=this.o,c.o.stop(),c.g=500;this.o.start()}this.R("handlerError",b)};
g.h.Cl=function(a,b,c){if(!this.o.isActive())this.R("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.F.push(d)}};
g.h.mq=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.B&&(a.ui=""+this.B);0!=this.H&&(a.ui=""+this.H);this.C&&g.lc(a,this.C);return a};
g.h.yp=function(a,b){"S"==b[0]?this.J=b[1]:"gracefulReconnect"==b[0]?(Dv(this.o),this.o.start(),Uq(this.g)):this.R("handlerMessage",new yv(b[0],b[1]))};
g.h.dI=function(){this.o.isActive();var a=this.g,b=0;a.Eb&&b++;a.Hc&&b++;0!=b?this.o.start():this.connect(this.C,this.B)};var Vv=(0,g.F)(),Mv=null,Tv=Array(50),Sv=-1,Uv=!1;g.E(g.fw,g.R);g.fw.prototype.Vc=function(){return this.g};
g.fw.prototype.contains=function(a){return!!g.dw(this.g,a)};
g.fw.prototype.get=function(a){return a?g.ew(this.g,a):null};
g.fw.prototype.info=function(a){g.Rv(this.F,a)};g.E(jw,g.R);var RY=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=jw.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.o)&&this.Gv()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.o)||(g.Cs(this.o),this.o=window.NaN)};
g.h.W=function(){this.stop();jw.ga.W.call(this)};
g.h.Gv=function(){this.o=window.NaN;this.g=g.Us(this.F.Nf("/pairing/get_screen"),{method:"POST",kb:{pairing_code:this.D},timeout:5E3,rb:(0,g.z)(this.iI,this),onError:(0,g.z)(this.hI,this),Oc:(0,g.z)(this.jI,this)})};
g.h.iI=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.R("pairingComplete",new Wv(c))};
g.h.hI=function(a){this.g=null;a.status&&404==a.status?this.A>=RY.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=RY[this.A],this.o=g.Es((0,g.z)(this.Gv,this),a),this.A++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.jI=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};var Bw,tw="";g.E(Ew,g.fw);g.h=Ew.prototype;g.h.start=function(){Dw(this)&&this.R("screenChange");!g.vv("yt-remote-lounge-token-expiration")&&Fw(this);g.Cs(this.o);this.o=g.Es((0,g.z)(this.start,this),1E4)};
g.h.Mk=function(a,b){Dw(this);gw(this,a);Gw(this,!1);this.R("screenChange");b(a);a.token||Fw(this)};
g.h.remove=function(a,b){var c=Dw(this);iw(this,a)&&(Gw(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Dk=function(a,b,c,d){var e=Dw(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Gw(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.W=function(){g.Cs(this.o);Ew.ga.W.call(this)};
g.h.uy=function(a){Dw(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Gw(this,!b);b&&g.Rv(this.F,"Missed "+b+" lounge tokens.")};
g.h.ty=function(a){g.Rv(this.F,"Requesting lounge tokens failed: "+a)};g.E(Iw,g.R);g.h=Iw.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.vv("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.F)()-144E5<a?0:a)?Mw(this):(this.B=(0,g.F)()+3E5,g.uv("yt-remote-fast-check-period",this.B),this.Pn())};
g.h.isEmpty=function(){return g.fc(this.g)};
g.h.update=function(){Hw("Updating availability on schedule.");var a=this.D(),b=g.Ub(this.g,function(b,d){return b&&!!g.ew(a,d)},this);
Lw(this,b)};
g.h.W=function(){g.Cs(this.A);this.A=window.NaN;this.o&&(this.o.abort(),this.o=null);Iw.ga.W.call(this)};
g.h.Pn=function(){g.Cs(this.A);this.A=window.NaN;this.o&&this.o.abort();var a=Nw(this);if(g.Wb(a)){var b=this.C.Nf("/pairing/get_screen_availability");this.o=this.C.vo(b,{lounge_token:g.$b(a).join(",")},(0,g.z)(this.UF,this,a),(0,g.z)(this.TF,this))}else Lw(this,{}),Mw(this)};
g.h.UF=function(a,b){this.o=null;var c=g.$b(Nw(this));if(g.Mb(c,g.$b(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Lw(this,d);Mw(this)}else this.xb("Changing Screen set during request."),this.Pn()};
g.h.TF=function(a){this.xb("Screen availability failed: "+a);this.o=null;Mw(this)};
g.h.xb=function(a){g.Rv("OnlineScreenService",a)};g.E(g.Pw,g.fw);g.h=g.Pw.prototype;g.h.start=function(){this.A.start();this.o.start();this.g.length&&(this.R("screenChange"),this.o.isEmpty()||this.R("onlineScreenChange"))};
g.h.Mk=function(a,b,c){this.A.Mk(a,b,c)};
g.h.remove=function(a,b,c){this.A.remove(a,b,c);this.o.update()};
g.h.Dk=function(a,b,c,d){this.A.contains(a)?this.A.Dk(a,b,c,d):(a="Updating name of unknown screen: "+a.name,g.Rv(this.F,a),d(Error(a)))};
g.h.Vc=function(a){return a?this.g:g.zb(this.g,(0,g.Md)(this.B,function(a){return!this.contains(a)},this))};
g.h.Hv=function(){return(0,g.Md)(this.Vc(!0),function(a){return!!this.o.g[a.id]},this)};
g.h.Iv=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new jw(this.D,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.Ke(f);d(Qw(this,a))},this));
f.subscribe("pairingFailed",function(a){g.Ke(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.lI=function(a,b,c,d){g.Us(this.D.Nf("/pairing/get_screen"),{method:"POST",kb:{pairing_code:a},timeout:5E3,rb:(0,g.z)(function(a,d){var e=new Wv(d.screen||{});if(!e.name||Tw(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);Tw(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(Qw(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
Oc:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.W=function(){g.Ke(this.A);g.Ke(this.o);g.Pw.ga.W.call(this)};
g.h.Ey=function(){Uw(this);this.R("screenChange");this.o.update()};
g.Pw.prototype.dispose=g.Pw.prototype.dispose;g.E(Ww,g.R);g.h=Ww.prototype;g.h.dk=function(a){this.A=a;this.R("sessionScreen",this.A)};
g.h.Zc=function(a){this.fa()||(a&&Xw(this,""+a),this.A=null,this.R("sessionScreen",null))};
g.h.info=function(a){g.Rv(this.T,a)};
g.h.Kv=function(){return null};
g.h.Vn=function(a){var b=this.o;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){Xw(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.W=function(){this.Vn("");Ww.ga.W.call(this)};g.E(Zw,Ww);g.h=Zw.prototype;g.h.Un=function(a){if(this.g){if(this.g==a)return;Xw(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.D);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C)}this.g=a;this.g.addUpdateListener(this.D);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.C);$w(this)};
g.h.Fg=function(a){this.info("launchWithParams no-op for Cast: "+g.wg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.Zc()},this),(0,g.z)(function(){this.Zc(Error("Failed to stop receiver app."))},this)):this.Zc(Error("Stopping cast device witout session."))};
g.h.Vn=g.va;g.h.W=function(){this.info("disposeInternal");g.Cs(this.B);this.B=0;this.g&&(this.g.removeUpdateListener(this.D),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C));this.g=null;Zw.ga.W.call(this)};
g.h.KG=function(a,b){if(!this.fa())if(b){a:{var c;if(g.w.JSON)try{var d=c=g.w.JSON.parse(b);break a}catch(e){}d=c=g.tg(b)}if(d)switch(c=""+d.type,d=d.data||{},this.info("onYoutubeMessage_: "+c+" "+g.wg(d)),c){case "mdxSessionStatus":Yw(this,d.screenId);break;default:Xw(this,"Unknown youtube message: "+c)}else Xw(this,"Unable to parse message.")}else Xw(this,"No data in message.")};
g.h.sq=function(a,b,c,d){Sw(this.J,this.o.label,a,this.o.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(Xw(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Es((0,g.z)(this.sq,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.Kv=function(){return this.g};
g.h.mI=function(a){this.fa()||a||(Xw(this,"Cast session died."),this.Zc())};g.E(ax,Ww);g.h=ax.prototype;g.h.Un=function(a){this.B=a;this.B.addUpdateListener(this.N)};
g.h.Fg=function(a){this.C=a;this.F()};
g.h.stop=function(){this.g();this.g=g.va;g.Cs(this.D);this.B?this.B.stop((0,g.z)(this.Zc,this,null),(0,g.z)(this.Zc,this,"Failed to stop DIAL device.")):this.Zc()};
g.h.W=function(){this.g();this.g=g.va;g.Cs(this.D);this.B&&this.B.removeUpdateListener(this.N);this.B=null;ax.ga.W.call(this)};
g.h.pI=function(a){this.fa()||a||(Xw(this,"DIAL session died."),this.g(),this.g=g.va,this.Zc())};
g.h.Cm=function(a){this.K=g.cw();if(this.C){var b=new window.chrome.cast.DialLaunchResponse(!0,cx(this));a(b);bx(this)}else this.F=(0,g.z)(function(){g.Cs(this.D);this.F=g.va;this.D=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,cx(this));a(b);bx(this)},this),this.D=g.Es((0,g.z)(function(){this.F()},this),100)};
g.h.lz=function(a,b){Sw(this.J,this.H.receiver.label,a,this.o.friendlyName,(0,g.z)(function(a){a&&a.token?(this.dk(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Cm(b)},this),(0,g.z)(function(a){Xw(this,"Failed to get DIAL screen: "+a);
this.Cm(b)},this))};g.E(dx,Ww);dx.prototype.stop=function(){this.Zc()};
dx.prototype.Un=g.va;dx.prototype.Fg=function(){g.Cs(this.g);this.g=window.NaN;var a=g.ew(this.J.Vc(),this.o.label);a?this.dk(a):this.Zc(Error("No such screen"))};
dx.prototype.W=function(){g.Cs(this.g);this.g=window.NaN;dx.ga.W.call(this)};g.E(g.ex,g.R);g.h=g.ex.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.Xt,this),(0,g.z)(this.GF,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.hE,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.fa()||(window.chrome.cast.addReceiverActionListener(this.B),Ov(),this.o.subscribe("onlineScreenChange",(0,g.z)(this.Jv,this)),this.A=jx(this),window.chrome.cast.setCustomReceivers(this.A,g.va,(0,g.z)(function(a){this.xb("Failed to set initial custom receivers: "+g.wg(a))},this)),this.R("yt-remote-cast2-availability-change",hx(this)),b(!0))},this),(0,g.z)(function(a){this.xb("Failed to initialize API: "+g.wg(a));
b(!1)},this))};
g.h.tH=function(a,b){gx("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.A;if(!a||c&&c.id!=a)gx("Unsetting old screen status: "+this.g.o.friendlyName),ix(this,null)}if(a&&b){if(!this.g){c=g.ew(this.o.Vc(),a);if(!c){gx("setConnectedScreenStatus: Unknown screen.");return}var d=fx(this,c);d||(gx("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.A.push(d),
window.chrome.cast.setCustomReceivers(this.A,g.va,(0,g.z)(function(a){this.xb("Failed to set initial custom receivers: "+g.wg(a))},this)));
gx("setConnectedScreenStatus: new active receiver: "+d.friendlyName);ix(this,new dx(this.o,d),!0)}this.g.Vn(b)}else gx("setConnectedScreenStatus: no screen.")};
g.h.uH=function(a){this.fa()?this.xb("Setting connection data on disposed cast v2"):this.g?this.g.Fg(a):this.xb("Setting connection data without a session")};
g.h.oI=function(){this.fa()?this.xb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),ix(this,null)):gx("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.Xt,this),(0,g.z)(this.XF,this))};
g.h.W=function(){this.o.unsubscribe("onlineScreenChange",(0,g.z)(this.Jv,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.B);var a=Kv,b=g.y("yt.mdx.remote.debug.handlers_");g.xb(b||[],a);g.Ke(this.g);g.ex.ga.W.call(this)};
g.h.xb=function(a){g.Rv("Controller",a)};
g.h.Yt=function(a,b){this.g==a&&(b||ix(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.CF=function(a,b){if(!this.fa())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),gx("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.o.label!=a.label)gx("onReceiverAction_: Stopping active receiver: "+this.g.o.friendlyName),this.g.stop();else{gx("onReceiverAction_: Casting to active receiver.");this.g.A&&this.R("yt-remote-cast2-session-change",this.g.A);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:ix(this,
new dx(this.o,a));break;case window.chrome.cast.ReceiverType.DIAL:ix(this,new ax(this.o,a));break;case window.chrome.cast.ReceiverType.CAST:ix(this,new Zw(this.o,a));break;default:this.xb("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.o.label==a.label?this.g.stop():this.xb("Stopping receiver w/o session: "+a.friendlyName)}else this.xb("onReceiverAction_ called without receiver.")};
g.h.hE=function(a){if(this.fa())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.xb("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.o:null;if(!c||c.label!=b.label)return this.xb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.A)return gx("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.A),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.xb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);ix(this,new ax(this.o,b))}b=this.g;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.lz,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Cm,b))};
g.h.Xt=function(a){if(!this.fa()){gx("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)gx("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),ix(this,new Zw(this.o,b),!0);else{this.xb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.o,d=g.ew(this.o.Vc(),c.label);
d&&g.Xv(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(gx("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ke(this.g),this.g=new Zw(this.o,b),this.g.subscribe("sessionScreen",(0,g.z)(this.Yt,this,this.g)),this.g.Fg(null));this.g.Un(a)}}};
g.h.nI=function(){return this.g?this.g.Kv():null};
g.h.XF=function(a){this.fa()||(this.xb("Failed to estabilish a session: "+g.wg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&ix(this,null))};
g.h.GF=function(a){gx("Receiver availability updated: "+a);if(!this.fa()){var b=hx(this);this.C=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;hx(this)!=b&&this.R("yt-remote-cast2-availability-change",hx(this))}};
g.h.Jv=function(){this.fa()||(this.A=jx(this),gx("Updating custom receivers: "+g.wg(this.A)),window.chrome.cast.setCustomReceivers(this.A,g.va,(0,g.z)(function(){this.xb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",hx(this)))};
g.ex.prototype.setLaunchParams=g.ex.prototype.uH;g.ex.prototype.setConnectedScreenStatus=g.ex.prototype.tH;g.ex.prototype.stopSession=g.ex.prototype.oI;g.ex.prototype.getCastSession=g.ex.prototype.nI;g.ex.prototype.requestSession=g.ex.prototype.requestSession;g.ex.prototype.init=g.ex.prototype.init;g.ex.prototype.dispose=g.ex.prototype.dispose;g.kx.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";g.lx(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Yd=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.A=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.J=a.duration,this.K=a.loadedTime,this.C=a.liveIngestionTime,this.F=
!(0,window.isNaN)(this.C))};
g.kx.prototype.sb=function(){return 1==this.g};
g.kx.prototype.getDuration=function(){return this.F?this.J+((0,g.F)()-this.A)/1E3:this.J};
g.kx.prototype.clone=function(){return new g.kx(g.px(this))};qx.prototype.o=function(){return this.name};
qx.prototype.getId=function(){return this.id};
qx.prototype.g=function(){return this.isDefault};
qx.prototype.toString=function(){return this.name};
qx.prototype.getName=qx.prototype.o;qx.prototype.getId=qx.prototype.getId;qx.prototype.getIsDefault=qx.prototype.g;g.rx.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.g+"_"+this.id+"_"+this.isDefault};g.sx.prototype.toString=function(){return this.o+": "+g.tx(this)+" - "+this.F};
g.sx.prototype.K=ba(2);g.sx.prototype.ac=function(){return!(!this.o||this.g&&!this.g.languageCode)};ux.prototype.o=function(){return this.Sb};
ux.prototype.toString=function(){return this.Sb.name};
ux.prototype.getLanguageInfo=ux.prototype.o;g.E(g.wx,g.R);g.h=g.wx.prototype;g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var k={videoId:d,currentTime:f};c&&(k.listId=c);g.r(e)&&(k.currentIndex=e);c&&(this.Na.listId=c);this.Na.videoId=d;this.Na.index=e||0;this.Na.state=3;g.mx(this.Na,f);this.B="UNSUPPORTED";xx("Connecting with setPlaylist and params: "+g.wg(k));this.g.connect({method:"setPlaylist",params:g.wg(k)},a,uw())}else xx("Connecting without params"),this.g.connect({},a,uw());zx(this)};
g.h.dispose=function(){this.fa()||(this.R("beforeDispose"),yx(this,3));g.wx.ga.dispose.call(this)};
g.h.W=function(){Ax(this);Cx(this);Bx(this);g.Cs(this.J);this.J=window.NaN;g.Cs(this.K);this.K=window.NaN;this.A=null;g.$t(this.V);this.V.length=0;this.g.dispose();g.wx.ga.W.call(this);this.B=this.F=this.o=this.Na=this.g=null};
g.h.my=function(){this.D(2)};
g.h.MD=function(){xx("Channel opened");this.U&&(this.U=!1,Bx(this),this.T=g.Es((0,g.z)(function(){xx("Timing out waiting for a screen.");this.D(1)},this),15E3));
zw(Gv(this.g),this.aa)};
g.h.JD=function(){xx("Channel closed");(0,window.isNaN)(this.C)?g.Aw(!0):g.Aw();this.dispose()};
g.h.KD=function(a){g.Aw();(0,window.isNaN)(this.H())?(xx("Channel error: "+a+" without reconnection"),this.dispose()):(this.U=!0,xx("Channel error: "+a+" with reconnection in "+this.H()+" ms"),yx(this,2))};
g.h.LD=function(a){a.params?xx("Received: action="+a.action+", params="+g.wg(a.params)):xx("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.tg(a.params.devices);this.o=(0,g.H)(a,function(a){return new Bv(a)});
a=!!g.nb(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
Gx(this,a);break;case "loungeScreenDisconnected":yb(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
Gx(this,!1);break;case "remoteConnected":var b=new Bv(g.tg(a.params.device));g.nb(this.o,function(a){return b?a.id==b.id:!1})||ub(this.o,b);
break;case "remoteDisconnected":b=new Bv(g.tg(a.params.device));yb(this.o,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Ix(this,a);break;case "nowPlaying":Kx(this,a);break;case "onStateChange":Jx(this,a);break;case "onAdStateChange":Lx(this,a);break;case "onVolumeChanged":Mx(this,a);break;case "onSubtitlesTrackChanged":Hx(this,a);break;case "nowAutoplaying":Nx(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.R("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.R("autoplayModeChange",this.B);"DISABLED"==this.B&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":Ox(this,a);break;default:xx("Unrecognized action: "+a.action)}};
g.h.hH=function(){if(this.A){var a=this.A;this.A=null;this.Na.videoId!=a&&Dx(this,"getNowPlaying")}};
g.wx.prototype.subscribe=g.wx.prototype.subscribe;g.wx.prototype.unsubscribeByKey=g.wx.prototype.Rc;g.wx.prototype.ka=function(){var a=3;this.fa()||(a=0,(0,window.isNaN)(this.H())?Iv(this.g)&&(0,window.isNaN)(this.C)&&(a=1):a=2);return a};
g.wx.prototype.getProxyState=g.wx.prototype.ka;g.wx.prototype.D=function(a){xx("Disconnecting with "+a);Ax(this);this.R("beforeDisconnect",a);1==a&&g.Aw();Hv(this.g,a);this.dispose()};
g.wx.prototype.disconnect=g.wx.prototype.D;g.wx.prototype.ha=function(){var a=this.Na;this.A&&(a=this.Na.clone(),g.ox(a,this.A,a.index));return g.px(a)};
g.wx.prototype.getPlayerContextData=g.wx.prototype.ha;
g.wx.prototype.wa=function(a){var b=new g.kx(a);b.videoId&&b.videoId!=this.Na.videoId&&(this.A=b.videoId,g.Cs(this.J),this.J=g.Es((0,g.z)(this.hH,this),5E3));var c=[];this.Na.listId==b.listId&&this.Na.videoId==b.videoId&&this.Na.index==b.index||c.push("remoteQueueChange");this.Na.g==b.g&&this.Na.volume==b.volume&&this.Na.muted==b.muted&&g.nx(this.Na)==g.nx(b)&&g.wg(this.Na.o)==g.wg(b.o)||c.push("remotePlayerChange");this.Na.reset(a);(0,g.G)(c,function(a){this.R(a)},this)};
g.wx.prototype.setPlayerContextData=g.wx.prototype.wa;g.wx.prototype.Y=function(){var a=this.g.D.id,b=g.nb(this.o,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
g.wx.prototype.getOtherConnectedRemoteId=g.wx.prototype.Y;g.wx.prototype.H=function(){var a=this.g;return a.o.isActive()?a.o.A-(0,g.F)():window.NaN};
g.wx.prototype.getReconnectTimeout=g.wx.prototype.H;g.wx.prototype.Z=function(){return this.B||"UNSUPPORTED"};
g.wx.prototype.getAutoplayMode=g.wx.prototype.Z;g.wx.prototype.ca=function(){return this.F||""};
g.wx.prototype.getAutoplayVideoId=g.wx.prototype.ca;g.wx.prototype.Aa=function(){if(!(0,window.isNaN)(this.H())){var a=this.g.o;g.wp(a.o);a.start()}};
g.wx.prototype.reconnect=g.wx.prototype.Aa;g.wx.prototype.pa=function(a,b){Dx(this,a,b);Fx(this)};
g.wx.prototype.sendMessage=g.wx.prototype.pa;g.Pw.prototype.$_st=g.Pw.prototype.start;g.Pw.prototype.$_gspc=g.Pw.prototype.lI;g.Pw.prototype.$_gsppc=g.Pw.prototype.Iv;g.Pw.prototype.$_c=g.Pw.prototype.contains;g.Pw.prototype.$_g=g.Pw.prototype.get;g.Pw.prototype.$_a=g.Pw.prototype.Mk;g.Pw.prototype.$_un=g.Pw.prototype.Dk;g.Pw.prototype.$_r=g.Pw.prototype.remove;g.Pw.prototype.$_gs=g.Pw.prototype.Vc;g.Pw.prototype.$_gos=g.Pw.prototype.Hv;g.Pw.prototype.$_s=g.Pw.prototype.subscribe;g.Pw.prototype.$_ubk=g.Pw.prototype.Rc;var aS=16/9,SY=[.25,.5,.75,1,1.25,1.5,2];var Vx={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",140:"a",327:"sa",258:"m",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",147:"H",376:"H",377:"H",149:"A",261:"M",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",195:"*",220:"*",221:"*",
196:"*",197:"*",198:"V",279:"(",280:"(",273:"(",274:"(",275:"(",276:"(",314:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h"};var AD={name:"width",video:!0,valid:640,Tf:99999},BD={name:"height",video:!0,valid:360,Tf:99999},yD={name:"framerate",video:!0,valid:30,Tf:9999},CD={name:"bitrate",video:!0,valid:3E5,Tf:2E9},zD={name:"eotf",video:!0,valid:"bt709",Tf:"catavision"},VC={name:"channels",video:!1,valid:2,Tf:99},DD={name:"cryptoblockformat",video:!0,valid:"subsample",Tf:"invalidformat"},ED={tg:AD,zf:BD,zJ:yD,SI:CD,uJ:zD,gJ:VC,lJ:DD};var dc={MI:"auto",eL:"tiny",YJ:"light",VK:"small",fK:"medium",VJ:"large",FJ:"hd720",BJ:"hd1080",CJ:"hd1440",DJ:"hd2160",EJ:"hd2880",IJ:"highres",UNKNOWN:"unknown"};var TY;TY={};g.Rx=(TY.auto=0,TY.tiny=144,TY.light=144,TY.small=240,TY.medium=360,TY.large=480,TY.hd720=720,TY.hd1080=1080,TY.hd1440=1440,TY.hd2160=2160,TY.hd2880=2880,TY.highres=4320,TY);var Ux="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");Sx.prototype.B=1.3;dy.prototype.g=function(a){return"true"==this.flags[a]};
dy.prototype.o=function(a){return(0,window.parseFloat)(this.flags[a])||0};
dy.prototype.A=function(a){return this.flags[a]?this.flags[a].toString():""};ey.prototype.dispose=function(){if(!this.A){if(this.o)try{window.URL.revokeObjectURL(this.g)}catch(a){}this.A=!0}};
ey.prototype.fa=function(){return this.A};var JC={52:!0,53:!0,54:!0,55:!0,60:!0,79:!0,87:!0};fy.prototype.g=function(){return null};
fy.prototype.A=function(){return!1};var $L=iy("auto","large",!1),ky=iy("auto","auto",!1);iy("small","auto",!1);gy.prototype.isLocked=function(){return this.A&&!!this.o&&this.o==this.g};
gy.prototype.B=function(a){return a.video?ny(this,a.video.quality):!1};var UY={},VY=(UY["api.invalidparam"]=2,UY.auth=150,UY["drm.auth"]=150,UY["heartbeat.net"]=150,UY["heartbeat.servererror"]=150,UY["heartbeat.stop"]=150,UY["html5.unsupportedads"]=5,UY["fmt.noneavailable"]=5,UY["fmt.decode"]=5,UY["fmt.unplayable"]=5,UY["html5.missingapi"]=5,UY["html5.unsupportedlive"]=5,UY["drm.unavailable"]=5,UY);g.p(wy,g.I);g.h=wy.prototype;g.h.dA=function(){return g.$b(this.B)};
g.h.eA=function(){return g.$b(this.C)};
g.h.la=function(){return this.o};
g.h.addEventListener=function(a,b){if(g.u(b)){var c=function(){g.y(b).apply(window,arguments)};
this.F[b]=c}else c=b;this.app.Z.subscribe(a,c)};
g.h.Tx=function(a,b){var c=this,d=g.u(b)?a+b:a+g.Ga(b);if(!this.D[d]){var e;g.u(b)?e=function(){g.y(b).apply(window,arguments)}:e=b;
var f=function(a){e({target:c.A,data:a})};
this.D[d]=f;this.app.Z.subscribe(a,f)}};
g.h.removeEventListener=function(a,b){if(g.u(b)){var c=this.F[b];gc(this.F,b);b=c}this.app.Z.unsubscribe(a,b)};
g.h.Ux=function(a,b){var c=g.u(b)?a+b:a+g.Ga(b),d=this.D[c];d&&(this.app.Z.unsubscribe(a,d),gc(this.D,c))};
g.h.Ig=function(){return fX(this.app)};
g.h.Hb=function(a,b){this.g&&qX(this.app,!0,this.playerType);HX(this.app,a,b,void 0,this.playerType)};
g.h.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.h.fA=function(){var a=g.W(this.app,this.playerType);if(!a)return 0;a=wN(a);return(0,window.isNaN)(a)?this.getCurrentTime():a};
g.h.getDuration=function(){return this.app.getDuration(this.playerType)};
g.h.getVolume=function(){return this.app.N.volume};
g.h.setVolume=function(a){By(this,a)};
g.h.yc=function(){return this.app.N.muted};
g.h.mute=function(){Cy(this)};
g.h.ee=function(){Dy(this)};
g.h.gc=function(){this.g&&qX(this.app,!0,this.playerType);var a=JN(this.app);2==a?(a=this.app.B.A)&&a.Yr("control_play"):3==a?g.KN(this.app.B).Xh("control_play"):GX(this.app,this.playerType)};
g.h.Ub=function(){var a=JN(this.app);2==a?(a=this.app.B.A)&&a.Yr("control_pause"):3==a?g.KN(this.app.B).Xh("control_pause"):(a=g.W(this.app,this.playerType))&&TM(a)};
g.h.Ae=function(){var a=this.app;a.g.ka&&(a.o.isFullscreen()&&!a.g.experiments.g("player_external_control_on_classic_desktop")&&g.ON(a.o),a.o.R("pageTransition"));var b=a.A.getVideoData();b=new g.uG({video_id:b.videoId,oauth_token:b.oauthToken});rX(a,b,1)};
g.h.aA=function(){};
g.h.Tb=function(){return g.W(this.app,1).Ha};
g.h.de=function(a){cX(this.app,a)};
g.h.Hg=function(){return this.app.g.Qa?SY:[1]};
g.h.Qh=function(){var a=g.W(this.app,this.playerType);if(a){var b="unknown";a.g.Ca&&(b=a.g.Ca.video.quality,!a.C.experiments.g("disable_video_quality_from_size")&&"auto"==b&&a.o&&(a=a.o?a.o.la():null)&&0<a.videoHeight&&(b=Qx(a.videoWidth,a.videoHeight)))}else b="unknown";return b};
g.h.Th=function(a){if(!this.app.g.isMobile){var b=g.W(this.app,this.playerType);b&&(a=iy(a,a,!0),pN(b,"p",a))}};
g.h.cn=function(){var a=g.W(this.app,this.playerType);return a?(a=(0,g.H)(nN(a),function(a){return a.quality}),a.length&&("auto"==a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.h.hA=function(){return this.dn()};
g.h.iA=function(){return 1};
g.h.dn=function(){return RW(this.app)};
g.h.jA=function(){return 0};
g.h.setSize=function(){this.app.H.je()};
g.h.Ir=function(a){wX(this.app,a?2:1)};
g.h.Jr=function(a){wX(this.app,a)};
g.h.Yz=function(){this.app.o.ua("SUBSCRIBE")};
g.h.Zz=function(){this.app.o.ua("UNSUBSCRIBE")};
g.h.Rh=function(a){"captions"==a&&(a=this.app.B.g)&&!a.loaded&&a.load()};
g.h.Oj=function(a){"captions"==a&&(a=this.app.B.g)&&a.loaded&&a.MH()};
g.h.nA=function(a,b,c){a=ty(a,b,c);a=nX(this.app,a,this.playerType);this.g&&qX(this.app,a,this.playerType)};
g.h.Br=function(a,b,c){a=ty(a,b,c);sX(this.app,a,this.playerType)};
g.h.oA=function(a,b,c){a=uy(a,b,c);b=nX(this.app,a,this.playerType);this.g&&qX(this.app,b,this.playerType);b=this.app;(a=(new g.Hn(a.mediaContentUrl)).A)&&tE(b.g,a)};
g.h.cA=function(a,b,c){b=uy(a,b,c);sX(this.app,b,this.playerType);a=this.app;(b=(new g.Hn(b.mediaContentUrl)).A)&&tE(a.g,b)};
g.h.getVideoUrl=function(){var a=this.app.g;if(a.H)return"";var b=QW(this.app),c=void 0;b.va||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.h.Ph=function(){return eX(this.app)};
g.h.Er=function(){var a=this.app.g;if(a.H)var b="";else{var c=QW(this.app).videoId;b=this.app.H.Ga();var d=this.getPlaylistId()||void 0;c="https://"+yE(a)+"/embed/"+c;d&&(c=g.Rg(c,{list:d}));d=!a.experiments.g("enable_responsive_embed_snippet");a.experiments.g("embed_snippet_includes_version")&&(c=g.Rg(c,{ecver:d?"1":"2"}));a=b.width;b=b.height;d?(d=Va(c),b='<iframe width="'+a+'" height="'+b+'" src="'+d+'" frameborder="0" allowfullscreen></iframe>'):(d=Math.round(360*a/b),b='<div style="position:relative;height:0;padding-bottom:'+
Math.round(1E4*b/a)/100+'%"><iframe src="'+Va(c)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+d+'" height="360" frameborder="0" allowfullscreen></iframe></div>')}return b};
g.h.Ar=function(a,b,c){return zX(this.app,a,b,c)};
g.h.Hr=function(a){a:{for(var b=this.app,c=b.A.F.g.g||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()==a){b.A.F.D(e);$N(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.h.mA=function(a,b,c,d){var e=this.app;e.ha=!1;tX(e,a,b,c,d);this.g&&qX(this.app,!0,this.playerType)};
g.h.bA=function(a,b,c,d){var e=this.app;e.ha=!0;tX(e,a,b,c,d)};
g.h.Jg=function(){xX(this.app);this.g&&qX(this.app,!0,this.playerType)};
g.h.Sh=function(){yX(this.app);this.g&&qX(this.app,!0,this.playerType)};
g.h.Gr=function(a){var b=this.app;!b.Y||b.o.isFullscreen()&&!b.Aa?b.C&&(b.C.be?mX(b,b.C.wb(a),1):b.ha=!1,TI(b.C,a)):b.o.ua("onPlaylistIndex",a);this.g&&qX(this.app,!0,this.playerType)};
g.h.setShuffle=function(a){var b=this.app.C;b&&b.setShuffle(a)};
g.h.qA=function(a){var b=this.app.C;b&&(b.loop=a)};
g.h.ce=function(){var a=this.app.C;if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.wb(c);d&&b.push(d.videoId)}return b};
g.h.Dr=function(){var a=this.app.C;return a?a.bb:-1};
g.h.getPlaylistId=function(){var a=this.app.C;return a&&a.listId?a.listId.toString():null};
g.h.zc=function(a,b,c){if(!b)return null;var d=this.app.B;return"captions"==a?(a=d.g)&&a.nn(b,c):null};
g.h.Gb=function(a,b,c){return this.zc(a,b,c)};
g.h.Xf=function(a){var b=this.app.B;return"captions"==a?(b=b.g)&&b.mB():a?null:(a=[],b.g&&a.push("captions"),a)};
g.h.getVideoData=function(){var a={},b=g.W(this.app,this.playerType);if(b&&(b=b.getVideoData(),a.video_id=b.videoId,a.author=b.author,a.title=b.title,b.Ca)){a.video_quality=b.Ca.video.quality;b=b.Ca.video;var c=[];32<b.fps&&c.push("hfr");Tx(b)&&c.push("hdr");"bt2020"==b.primaries&&c.push("wcg");a.video_quality_features=c}(b=this.getPlaylistId())&&(a.list=b);return a};
g.h.Kr=function(){JW(this.app,!0)};
g.h.kA=function(){JW(this.app,!1)};
g.h.Cr=function(){var a=this.app.B.A;return a?a.Ov():-1};
g.h.lA=function(a){if(a!=this.app.ca.args.video_id)return!1;a=(a=g.W(this.app,1))?a.A:null;return!(!a||!g.T(a,128)||5!=VY[a.g.errorCode])};
g.h.gA=function(){var a=this.app.ca.clone();g.Ja(a.args,bH(QW(this.app)));return a};
g.h.rA=function(){this.app.g.K&&this.app.aa.resume()};
g.h.destroy=function(){this.app.dispose()};
g.h.pA=function(){var a=g.W(this.app);a&&!g.T(a.A,128)&&(a.R("internalAbandon"),DM(a),BM(a))};
g.h.W=function(){if(this.o){for(var a in this.B)this.o[a]=null;for(a in this.C)this.o[a]=null;this.o=null}this.F=this.D=null;g.I.prototype.W.call(this)};var Ey=1;g.Fy.prototype.getId=function(){return this.za};
g.Fy.prototype.getId=g.Fy.prototype.getId;g.Fy.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a==this.end&&this.start==this.end)&&(null==b||a<b&&b<=this.end)};var WY={UNKNOWN:"UNKNOWN",kx:"YOUTUBE_DRAWER_MANUAL_OPEN",jx:"YOUTUBE_DRAWER_AUTO_OPEN",lx:"YOUTUBE_SHELF_SHOW"};g.XY={hp:WY.kx,Ai:WY.jx,PK:WY.lx};g.YY={NONE:0,RAISED:1,DEPRESSED:2,gp:3,DROP_SHADOW:4};g.ZY={nl:"#fff",hx:"#ff0",Bw:"#0f0",qw:"#0ff",cw:"#00f",Iw:"#f0f",To:"#f00",Qk:"#080808"};g.$Y={Ho:0,No:1,Ro:2,Mo:3,Vk:4,CASUAL:5,CURSIVE:6,al:7};g.h=g.Jy.prototype;g.h.Or=function(a){this.segments.push(a)};
g.h.getDuration=function(a){return(a=this.Kf(a))?a.duration:0};
g.h.Ql=function(a){return this.getDuration(a)};
g.h.ue=function(){return this.segments.length?this.segments[0].ra:-1};
g.h.mn=function(a){return(a=this.Kf(a))?a.ingestionTime:window.NaN};
g.h.Jb=function(){return this.segments.length?this.segments[this.segments.length-1].ra:-1};
g.h.sj=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:window.NaN};
g.h.Lb=function(){return this.segments[0].startTime};
g.h.zg=function(){return this.segments.length};
g.h.Qj=function(){return 0};
g.h.Ve=function(a){return(a=this.lj(a))?a.ra:-1};
g.h.tq=function(a){return(a=this.Kf(a))?a.sourceURL:""};
g.h.Ed=function(a){return(a=this.Kf(a))?a.startTime:0};
g.h.vj=ba(4);g.h.Nb=function(){return 0<this.segments.length};
g.h.Kf=function(a){a=g.Gb(this.segments,new Iy(a,0,0,0,""),function(a,c){return a.ra-c.ra});
return 0<=a?this.segments[a]:null};
g.h.lj=function(a){a=g.Gb(this.segments,{startTime:a},function(a,c){return a.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.h.rq=function(){return 0};Ly.prototype.skip=function(a){this.o+=a};Qy.prototype.ej=function(a,b,c){(new window.Uint8Array(this.data.buffer,this.g,c)).set(new window.Uint8Array(a.buffer,b+a.byteOffset,c));this.g+=c};var aZ=az;var bZ={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},cZ;var dZ=g.Rb;dZ=dZ.toLowerCase();if(-1!=dZ.indexOf("android")){var eZ=dZ.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(eZ)cZ=(0,window.parseFloat)(eZ[1]);else{var fZ=dZ.match("("+g.$b(bZ).join("|")+")");cZ=fZ?bZ[fZ[0]]:0}}else cZ=void 0;var IC=cZ,ZC=0<=IC;var pz=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],qz=['audio/mp4; codecs="mp4a.40.2"'];uz.prototype.start=function(){return 0};
uz.prototype.end=function(){return window.Infinity};g.h=vz.prototype;g.h.addEventListener=function(){};
g.h.removeEventListener=function(){};
g.h.dispatchEvent=function(){return!1};
g.h.abort=function(){};
g.h.remove=function(){};
g.h.appendBuffer=function(){};g.h=wz.prototype;g.h.append=function(a){this.o.webkitSourceAppend(this.A,a)};
g.h.abort=function(){this.o.webkitSourceAbort(this.A)};
g.h.VH=function(){return this.o.webkitSourceState==this.o.SOURCE_CLOSED?new xz:this.o.webkitSourceBuffered(this.A)};
g.h.XH=function(){return this.B};
g.h.bI=function(a){this.B=a;this.o.webkitSourceTimestampOffset(this.A,a)};g.h=yz.prototype;g.h.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.h.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.h.FI=function(){return this.g.webkitMediaSourceURL};
g.h.addSourceBuffer=function(a){var b=(this.A++).toString();this.g.webkitSourceAddId(b,a);a=new wz(this.g,b);this.sourceBuffers.push(a);return a};
g.h.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.A);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.h.YH=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.h.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.h.ZH=function(){tb(this.sourceBuffers)};
g.h.WH=function(){return this.o};
g.h.aI=function(a){this.o=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};g.E(Az,g.I);Az.prototype.K=function(){if(!this.fa()&&Cz(this))try{this.B&&(this.B(this),this.B=null)}catch(a){this.F&&this.F(a)}};
Az.prototype.J=function(){this.dispose()};g.Kz.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};pA.prototype.verify=function(){if(this.info.La!=this.range.length)return!1;if(1==this.info.ea.info.containerType){if(8>this.info.La||4==this.info.type)return!0;var a=qA(this),b=a.getUint32(0,!1);a=a.getUint32(4,!1);if(2==this.info.type)return b==this.info.La&&1936286840==a;if(3==this.info.type&&0==this.info.Ea)return 1836019558==a||1936286840==a||1937013104==a||1718909296==a||1701671783==a||1936419184==a}else if(2==this.info.ea.info.containerType){if(4>this.info.La||4==this.info.type)return!0;b=qA(this).getUint32(0,
!1);if(3==this.info.type&&0==this.info.Ea)return 524531317==b||440786851==b}return!0};g.DA.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.A="")};
g.DA.prototype.get=function(a){GA(this);return this.g[a]||null};
g.DA.prototype.clone=function(){var a=new g.DA(this.B);a.D=this.D;a.o=this.o;a.C=this.C;a.g=g.ic(this.g);a.A=this.A;return a};OA.prototype.set=function(a,b){this.g.get(a);this.o[a]=b;this.A=""};
OA.prototype.get=function(a){return this.o[a]||this.g.get(a)};var gZ=0;g.h=aB.prototype;g.h.gd=function(){};
g.h.ec=function(){};
g.h.Jm=function(){return!1};
g.h.xc=function(){return!!this.g&&!!this.index&&this.index.Nb()};
g.h.dg=function(){};
g.h.Rr=function(){return!1};
g.h.tj=function(){};
g.h.cg=function(){};
g.h.Wh=function(){};
g.h.Ue=function(){};
g.h.wm=function(){};
g.h.Sr=function(a){return[a]};
g.h.nk=function(a){return[a]};g.p(cB,aB);g.h=cB.prototype;g.h.gd=function(){return!1};
g.h.ec=function(){return!1};
g.h.Rr=function(){return this.C};
g.h.tj=function(){if(this.C)return[];var a=new Oz(1,this,this.initRange);return[new YA([a],this.J)]};
g.h.cg=function(){};
g.h.Wh=function(a){this.dg(a);return this.fj(a.g?a.ra+1:a.ra,!1)};
g.h.Ue=function(a,b){b=void 0===b?!1:b;var c=this.index.Ve(a);b&&(c=Math.min(this.index.Jb(),c+1));return this.fj(c,!0)};
g.h.wm=function(a){this.g=new window.Uint8Array(qA(a).buffer)};
g.h.Jm=function(){return!1};
g.h.dg=function(a){return 0==a.La?!0:this.index.Jb()>a.ra&&this.index.ue()<=a.ra+1};
g.h.update=function(a,b,c){var d=this.index;if(0!=a.length)if(a=g.Ab(a),0==d.segments.length)d.segments=a;else{var e=d.segments.length?g.jb(d.segments).endTime:0,f=a[0].ra-d.Jb();1<f&&tb(d.segments);for(f=0<f?0:-f+1;f<a.length;f++){var k=a[f];k.startTime=e;k.endTime=k.startTime+k.duration;e+=a[f].duration;d.segments.push(a[f])}}Ky(this.index,c);this.H=b};
g.h.xc=function(){return this.C?!0:aB.prototype.xc.call(this)};
g.h.fj=function(a,b){var c=this.index.tq(a),d=this.index.Ed(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;d=new Oz(3,this,null,a,d,e,0,f,a==this.index.Jb()&&!this.H&&0<f);return new YA([d],c)};g.p(dB,g.Jy);g.h=dB.prototype;g.h.ue=function(){return this.g?this.segments.length?this.lj(this.Lb()).ra:-1:g.Jy.prototype.ue.call(this)};
g.h.Lb=function(){return this.g?this.segments.length?Math.max(g.jb(this.segments).endTime-this.A,0):0:g.Jy.prototype.Lb.call(this)};
g.h.zg=function(){return this.g?this.segments.length?this.Jb()-this.ue()+1:0:g.Jy.prototype.zg.call(this)};
g.h.Or=function(a){var b=eB(this,a.ra);0<=b?this.segments[b]=a:this.segments.splice(-(b+1),0,a)};
g.h.lj=function(a){if(!this.g)return g.Jy.prototype.lj.call(this,a);if(!this.segments.length)return null;var b=g.Gb(this.segments,{startTime:a},function(a,b){return a.startTime-b.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?gB(this,c.ra-Math.ceil((c.startTime-a)/this.o),c):gB(this,c.ra+Math.ceil((a-c.endTime)/this.o),c)};
g.h.Kf=function(a){if(!this.g)return g.Jy.prototype.Kf.call(this,a);if(!this.segments.length)return null;var b=eB(this,a);return 0<=b?this.segments[b]:gB(this,a,this.segments[Math.max(-(b+2),0)])};g.p(hB,cB);g.h=hB.prototype;g.h.ec=function(){return!0};
g.h.xc=function(){return!0};
g.h.dg=function(){return!0};
g.h.tj=function(){return[]};
g.h.Ue=function(a,b){if(g.ta(a)&&!(0,window.isFinite)(a)){var c=new Oz(3,this,null,-1,void 0,this.A,void 0,this.A*this.info.g);return new YA([c],"")}return cB.prototype.Ue.call(this,a,b)};
g.h.fj=function(a,b){if(fB(this.index,a))return cB.prototype.fj.call(this,a,b);var c=this.index.Ed(a);c=new Oz(3,this,null,a,c,void 0,void 0,b?0:this.A*this.info.g);return new YA([c],0<=a?"sq/"+a:"")};nB.prototype.update=function(a,b){var c=void 0;this.o&&(c=this.o);var d=new nB,e=a.getElementsByTagName("S");if(e.length){var f=+kB(a,"timescale")||1,k=(+e[0].getAttribute("t")||0)/f,l=+kB(a,"startNumber")||0;var m=k;var n=+kB(a,"presentationTimeOffset")||0;m=c?c.Ee+c.durationSecs:b?m-n/f:0;n=Date.parse(jB(kB(a,"yt:segmentIngestTime")))/1E3;d.A="SegmentTemplate"==a.parentNode.tagName;d.A&&(d.D=kB(a,"media"));var q=c?l-c.ra:1;d.C=0<q?0:-q+1;e=g.na(e);for(q=e.next();!q.done;q=e.next()){q=q.value;for(var t=
+q.getAttribute("d")/f,v=(+q.getAttribute("yt:sid")||0)/f,D=+q.getAttribute("r")||0,C=0;C<=D;C++)if(c&&l<=c.ra)l++;else{var B=new iB(l,m,t,n+v,k);d.g.push(B);var U=B.Ee,Z=q.getAttribute("yt:cuepointTimeOffset");B=q.getAttribute("yt:cuepointDuration");Z&&B?(U=+Z/f+U,B=+B/f,Z=q.getAttribute("yt:cuepointContext")||null,B=new Uy(U,B,Z)):B=null;B&&d.B.push(B);l++;m+=t;k+=t;n+=t+v}}d.g.length&&(d.o=g.jb(d.g))}this.C=d.C;this.o=d.o||this.o;Bb(this.g,d.g);Bb(this.B,d.B);this.A=d.A;this.D=d.D};
nB.prototype.F=function(a,b,c,d){for(var e=this.D.split("$$"),f=0;f<e.length;f++)e[f]=e[f].replace("$RepresentationID$",a),e[f]=e[f].replace("$Number$",c.toString()),e[f]=e[f].replace("$Bandwidth$",b.toString()),e[f]=e[f].replace("$Time$",d.toString());return e.join("$")};g.h=g.vB.prototype;g.h.Qj=function(a){return this.g[a]};
g.h.Ed=function(a){return this.o[a]/this.B};
g.h.vj=ba(3);g.h.mn=function(){return window.NaN};
g.h.getDuration=function(a){a=this.Ql(a);return 0<=a?a/this.B:-1};
g.h.Ql=function(a){return a+1<this.ya||this.A?this.o[a+1]-this.o[a]:-1};
g.h.ue=function(){return 0};
g.h.Jb=function(){return this.ya-1};
g.h.sj=function(){return this.A?this.o[this.ya]/this.B:window.NaN};
g.h.Lb=function(){return 0};
g.h.zg=function(){return this.ya};
g.h.tq=function(){return""};
g.h.Ve=function(a){a=g.Gb(this.o.subarray(0,this.ya),a*this.B);return 0<=a?a:Math.max(0,-a-2)};
g.h.Nb=function(){return 0<=this.Jb()};
g.h.rq=function(a,b){if(a>=this.Jb())return 0;for(var c=0,d=this.Ed(a)+b,e=a;e<this.Jb()&&d>this.Ed(e);e++)c=Math.max(c,(e+1<this.ya||this.A?this.g[e+1]-this.g[e]:-1)/this.getDuration(e));return c};
g.h.cap=function(a,b){wB(this);this.A=!0;this.o[this.ya]=b;this.g[this.ya]=a};g.p(g.xB,aB);g.h=g.xB.prototype;g.h.tj=function(a,b){var c=new Oz(1,this,this.initRange),d=new Oz(2,this,this.indexRange),e=[],f=[c];Rz(c,d)?f.push(d):(e.push(new YA([d])),b=!1);(0,window.isNaN)(this.A)&&(b=!1);c=f[f.length-1];d=c.range.end-f[0].range.start+1;var k=0;if(b){k=a.vl;var l=this.info.video?2:a.Db;0<l&&(k=Math.floor(Math.max(k,l*this.info.g)));k=Math.min(a.H,k,this.A);k=a.Af?Math.min(k,this.A-d):k-d}0<k&&(c=Mz(c.range.end+1,k),f.push(new Oz(4,this,c)));e.push(new YA(f));return e};
g.h.wm=function(a){if(1==a.info.type){if(this.g)return;if(a.g.slice)var b=new window.Uint8Array(a.g.slice(a.range.start,a.range.end+1));else b=new window.Uint8Array(a.g,a.range.start,a.range.end+1),b=new window.Uint8Array(b);this.g=b}else if(2==a.info.type){if(this.C||0<=this.index.Jb())return;if(1==this.info.containerType){b=this.index;var c=qA(a),d=a.info.range.start;a=0;var e=c.getUint32(0,!1),f=c.getUint8(a+8);a+=12;var k=c.getUint32(a+4,!1);b.B=k;a+=8;0==f?(f=c.getUint32(a,!1),k=c.getUint32(a+
4,!1),a+=8):(f=4294967296*c.getUint32(a,!1)+c.getUint32(a+4,!1),k=4294967296*c.getUint32(a+8,!1)+c.getUint32(a+12,!1),a+=16);b.g[0]=k+(e+d);b.o[0]=f;b.A=!0;d=c.getUint16(a+2,!1);a+=4;for(e=0;e<d;e++){f=c.getUint32(a,!1);k=c.getUint32(a+4,!1);a+=12;var l=b;l.ya++;wB(l);l.g[l.ya]=l.g[l.ya-1]+f;l.o[l.ya]=l.o[l.ya-1]+k}}else this.C=qA(a)}if(2==this.info.containerType&&this.g&&this.C){a=new window.DataView(this.g.buffer);b=this.index;k=this.C;c=this.indexRange.end;a=new Yz(a);if(bA(a,440786851)&&(hA(a),
bA(a,408125543)&&(e=a,f=e.g,d=cA(e,!0),e.g=f,a=aA(a),e=a.A+a.g,bA(a,357149030)))){a=aA(a);l=1E6;var m=1E9;for(f=0;!Zz(a);){var n=cA(a,!1);2807729==n?l=gA(a):2807730==n?m=gA(a):17545==n?f=iA(a):hA(a)}b.B=m/l;a=new Yz(k);if(bA(a,475249515)){a=aA(a);k=!0;for(l=!1;bA(a,187);){m=aA(a);if(bA(m,179))if(n=gA(m),bA(m,183)){m=aA(m);for(var q=e;bA(m,241);)q=gA(m)+e;m=[q,n]}else m=null;else m=null;q=m;k&&c==q[0]&&(l=!0);k=!1;l&&(q[0]+=1);m=b;n=q[0];q=q[1];wB(m);m.g[m.ya]=n;m.o[m.ya]=q;m.ya++}b.cap(d+e,f)}}this.C=
null}};
g.h.Sr=function(a){for(var b=this.nk(a.info),c=[],d=a.Yc,e=0;e<b.length;e++){var f=Mz(b[e].range.start+b[e].Ea-a.info.range.start+a.range.start,b[e].La);c.push(new pA(b[e],a.g,f,a.A,d));d=!1}return c};
g.h.nk=function(a){for(var b=0;b<this.index.Jb()&&a.range.start>=this.index.Qj(b+1);)b++;return yB(this,b,a.range.start,a.range.length).g};
g.h.dg=function(a){return this.xc()?!0:(0,window.isNaN)(this.A)?!1:a.range.end+1<this.A};
g.h.cg=function(a,b){this.dg(a);if(!this.xc()){var c=Mz(a.range.end+1,b);c.end+1>this.A&&(c=new g.Kz(c.start,this.A-1));c=[new Oz(4,a.ea,c)];return new YA(c)}4==a.type&&(c=this.nk(a),a=c[c.length-1]);c=0;var d=a.range.start+a.Ea+a.La;3==a.type&&(c=a.ra,d==a.range.end+1&&(c+=1));return yB(this,c,d,b)};
g.h.Wh=function(){return null};
g.h.Ue=function(a,b){var c=this.index.Ve(a);b&&(c=Math.min(this.index.Jb(),c+1));return yB(this,c,this.index.Qj(c),0)};
g.h.Jm=function(){var a;if(a=this.xc()&&!(0,window.isNaN)(this.A))a=this.index,a=(a.A?a.g[a.ya]:-1)!=this.A;return a};
g.h.gd=function(){return!0};
g.h.ec=function(){return!1};g.p(BB,g.R);g.h=BB.prototype;g.h.Ye=function(){return Vb(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.h.Ze=function(){return Vb(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.h.Xd=function(){return Vb(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.h.Uf=function(){return Vb(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.h.OG=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.B=!0;this.C||(this.C=new pB);tB(this.C,a,this.pa);this.R("refresh");for(a=0;a<b.length;a++){var c=PB(this,b[a]),d=this.isLive&&1==c.containerType&&this.wa;if(!this.g[c.id]){var e=JB(lB(b[a],"BaseURL").textContent,c),f=lB(b[a],"Initialization"),k=kB(f,"sourceURL");f=Lz(kB(f,"range"));d&&(k="",f=void 0);this.g[c.id]=new cB(e,c,
k,null===f?void 0:f)}c=this.g[c.id];e=kB(b[a],"id","AdaptationSet");e=""!=e?e:kB(b[a],"mimetype","AdaptationSet");k=this.C;e=k.A[c.info.id]||k.o[e]||k.g||null;k=e.g;if(e.A)for(d=[],k=g.na(k),f=k.next();!f.done;f=k.next()){f=f.value;var l=e.F(c.info.id,8*c.info.g,f.ra,f.Ee);d.push(new Iy(f.ra,f.Ee,f.durationSecs,f.g,l,null,f.o))}else{e=g.Cb(lB(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.C);f=[];for(l=0;l<e.length;l++)f.push(SB(e[l],k[l],d));d=f}c.update(d,this.isLive,this.V)}uB(this.C);
return!0}this.duration=mB(kB(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){k=b[a];c=PB(this,k);e=lB(k,"BaseURL");d=JB(e.textContent,c);f=lB(k,"SegmentBase");k=Lz(f.attributes.indexRange.value);f=Lz(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=(0,window.parseInt)(e.getAttribute(MB(this,"contentLength")),10);c=new g.xB(d,c,f,k,e,window.NaN);if(!c){b=!1;break a}this.g[c.info.id]=c}b=!0}return b};
g.h.by=function(a){return this.C?g.Cb(this.C.B,a):this.N.length?g.Cb(this.N,a):[]};
g.h.oy=function(a){if(this.fa())return this;this.T=a.status;a=a.responseText;a=(new window.DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.D=1E3*mB(kB(a,"minimumUpdatePeriod"))||window.Infinity;if(!this.U){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.Z=b}this.isLive=window.Infinity>this.D&&this.xa;this.V=(0,window.parseInt)(kB(a,MB(this,"earliestMediaSequence")),
10)||0;if(b=Date.parse(jB(kB(a,MB(this,"mpdResponseTime")))))this.H=((0,g.F)()-b)/1E3;a=this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length?!1:(0,g.ww)(a.getElementsByTagName("Period"),this.OG,this);this.F=2;this.R("loaded");UB(this,a);return this};
g.h.ry=function(a){this.T=a.g.status;this.F=3;this.R("loaderror");return Uf(a.g)};
g.h.Qr=function(){if(1!=this.F&&!this.fa()){var a=this.Y;a:{var b=this.g;for(var c in b){var d=b[c].index;if(d&&d.Nb()){b=d.Jb()+1;break a}}b=0}a=g.Rg(a,{start_seq:b.toString()});QB(this,a)}};
g.h.resume=function(){UB(this,!0)};
g.h.zh=function(){var a=this.g,b=window.NaN,c;for(c in a){var d=a[c].index;d&&d.Nb()&&((0,window.isNaN)(b)||d.sj()<b)&&(b=d.sj())}return this.ca?Math.floor(b):b};
g.h.Lb=function(){var a=this.g,b;for(b in a){var c=a[b].index;if(c&&c.Nb())return c.Lb()}return 0};
g.h.OA=function(){return this.H};
var ZB=null,OB={commentary:1,alternate:2,dub:3,main:4};var hZ={},jC=(hZ.playready=["com.youtube.playready","com.microsoft.playready"],hZ.widevine=["com.widevine.alpha"],hZ),kC=g.zb(jC.widevine,jC.playready);g.p(iC,g.I);
iC.prototype.D=function(){if(!this.fa())if(0==this.A.length)this.B(null);else{var a=this.A.shift(),b=this.o[a],c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};cC(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d in this.g[b.g]){var e=0==d.indexOf("audio/"),f=e?c.audioCapabilities:c.videoCapabilities;this.C.g("html5_widevine_robustness_strings")&&"widevine"==b.g?e?f.push({contentType:d,robustness:"SW_SECURE_CRYPTO"}):(f.push({contentType:d,robustness:"HW_DECODE_ALL"}),f.push({contentType:d,
robustness:"SW_SECURE_DECODE"})):f.push({contentType:d})}window.navigator.requestMediaKeySystemAccess(a,[c]).then(xs((0,g.z)(this.F,this,b)),xs((0,g.z)(this.D,this)))}};
iC.prototype.F=function(a,b){this.fa()||(a.A=b,lC(this,a),this.B(a))};var lE={To:"red",nl:"white"};pC.prototype.g=function(a,b){var c=Math.pow(this.C,a);this.A=b*(1-c)+c*this.A;this.B+=a};
pC.prototype.o=function(){return this.A/(1-Math.pow(this.C,this.B))};qC.prototype.g=function(a,b){rC(this,"index");this.B.push({index:this.J++,weight:a,value:b});this.A+=a;for(rC(this,"index");this.A>this.F;){var c=this.A-this.F,d=this.B[0];d.weight<=c?(this.A-=d.weight,this.B.shift()):(this.A-=c,d.weight-=c)}};
qC.prototype.o=function(){return this.D?(sC(this,this.C-this.D)+sC(this,this.C)+sC(this,this.C+this.D))/3:sC(this,this.C)};tC.prototype.g=function(a,b){this.A.push(b);this.A.length>this.B&&this.A.shift()};
tC.prototype.o=function(){return dd.apply(null,this.A)};var aE={II:"adunit",pJ:"detailpage",sJ:"editpage",tJ:"embedded",WJ:"leanback",zK:"previewpage",AK:"profilepage",pL:"unplugged"};var YC="9h 9 h 8 (h ( H *".split(" "),XC="9h 9 h 8 ( H *".split(" "),$C="h98H(*".split(""),bD="oMavAV".split(""),tD=["so","sa"],sD="moMavAV".split(""),rD="aoMvAV".split(""),aD=["f"],PC={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},QC={"application/x-mpegURL":"maybe"},OC={"application/x-mpegURL":"maybe"};var qE={ZJ:1,aK:2,bK:3};g.E(GD,g.R);GD.prototype.remove=function(a){var b=this.get(a);delete this.Ia[a];return b};
GD.prototype.get=function(a){return this.Ia[a]||null};
GD.prototype.isEmpty=function(){return g.fc(this.Ia)};var HD={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},ID={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},JD=/^(\d*)_((\d*)_?(\d*))$/;var ND=/^([0-9\.]+)\:([0-9\.]+)$/;var UD=(0,g.F)().toString();var bE="blogger books docs google-live play chat picasaweb gmail jamboard".split(" ");g.p(sE,g.I);
sE.prototype.ge=function(a){var b=LD(a,this.o,this.jb),c=!0;b&&(this.U.adformat=a.adformat,KD(b)||(this.ha="adunit"==this.D?this.ha:this.D,this.D="adunit",c=!1));c&&this.ha&&(this.D=this.ha,this.ha=null);if(b=a.video_id&&a.video_id!=this.Ie)this.Ie=a.video_id;if(a.adpings||b)this.pl=a.adpings?g.Gs(a.adpings):null;var d;this.He?d=a.videostats_playback_base_url&&a.videostats_playback_base_url.split("/")[2]||"s.youtube.com":d="video.google.com";this.hh="//"+d+"/api/stats/qoe";this.experiments.g("www_for_videostats")&&
"s.youtube.com"==d&&(d="www.youtube.com");this.jH=d;if(a.feature||b)this.jg=d=a.feature,this.U.feature=d;if(a.referrer||b)this.referrer=d=a.referrer,this.U.referrer=d;for(var e in iZ)d=iZ[e],b=a[d],void 0!=b&&(this.A[d]=b);!this.Ta&&a.cl&&(this.Ta=+a.cl);this.userAge=RD(this.userAge,a.user_age);this.userDisplayImage=TD(this.userDisplayImage,a.user_display_image);g.lF.test(this.userDisplayImage)||(this.userDisplayImage="");this.userDisplayName=TD(this.userDisplayName,a.user_display_name);this.userGender=
TD(this.userGender,a.user_gender);this.bc=TD(this.bc,a.eventid);this.csiPageType=TD(this.csiPageType,a.csi_page_type);this.Wa=TD(this.Wa,a.csi_service_name);this.oc=PD(this.oc,a.enablecsi);a.enabled_engage_types&&(this.Cb=new window.Set(a.enabled_engage_types.split(",")))};
sE.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=yE(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.hE(this)?(d="https://"+c+"/fire",b.v=a):(d=this.Z+"://"+c+"/watch",b.v=a,NC&&(a=g.y("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return g.Rg(d,b)};
sE.prototype.isAd=function(){return"adunit"==this.D};
var iZ={TI:"cbrand",UI:"cbr",VI:"cbrver",OJ:"c",RJ:"cver",QJ:"ctheme",PJ:"cplayer",gK:"cmodel",iK:"cnetwork",oK:"cos",pK:"cosver",wK:"cplatform"};var ME=new window.Set("BASE_URL BASE_YT_URL abd allow_embed authuser autoplay captions_load_policy cc_load_policy cc3_module dash dashmpd docid el enable_cardio enablecastapi enablepostapi fmt_list fmt_stream_map hl hlsdvr hlsrange hlsvp html5 iurl iurlhq iurlmq length_seconds live_playback nohtml5 origin override_hl partnerid plid postid ps public rel reload_count reload_reason reportabuseurl resume start status streaminglib_load_policy streaminglib_preroll t timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoid wmode".split(" "));g.p(SE,fy);
SE.prototype.g=function(){if(!this.o||this.o.fa()){var a=this.B;PE(a);for(var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={},d=0,e=a.o.length;d<e;++d){var f=a.o[d];c[f.itag]=f;b.push('#EXT-X-MEDIA:TYPE=AUDIO,NAME="audio",DEFAULT=YES,AUTOSELECT=YES,GROUP-ID="'+f.itag.toString()+'",URI="'+f.url+'"')}d=0;for(e=a.g.length;d<e;++d){var k=a.g[d];f=c[k.audioItag];b.push("#EXT-X-STREAM-INF:BANDWIDTH="+(k.bitrate+f.bitrate)+',CODECS="'+(k.Kp+","+f.Kp)+'",RESOLUTION='+(k.width+"x"+k.height)+',AUDIO="'+f.itag.toString()+
'",CLOSED-CAPTIONS=NONE');b.push(k.url)}a="data:application/x-mpegurl;charset=utf-8,"+(0,window.encodeURIComponent)(b.join("\n"));this.o=new ey(a)}return this.o};var jZ={UNKNOWN:"UNKNOWN",NORMAL:"NORMAL",dK:"LOW",nL:"ULTRALOW"};g.p(VE,fy);VE.prototype.g=function(){return new ey(FA(this.o))};
VE.prototype.A=function(){this.o=JA(this.o,1);return!0};g.E(XE,g.R);XE.prototype.K=function(a,b){this.o=this.o.onload=null;var c=this.g[a];c.be[b]=!0;aF(this);var d=c.columns*c.rows;var e=b*d;c=Math.min(e+d-1,c.Rl()-1);e=[e,c];this.R("l",e[0],e[1])};
XE.prototype.W=function(){this.o&&(this.o=this.o.onload=null);XE.ga.W.call(this)};g.h=dF.prototype;g.h.Ad=function(){return this.F};
g.h.getHeight=function(){return this.D};
g.h.Rl=function(){return this.o};
g.h.isDefault=function(){return-1!=this.A.indexOf("default")};
g.h.Nb=function(a){return!!this.be[a]};
g.h.Nk=function(a){var b=this.Rl()-1;return g.Zc(0==this.B?Math.round(a*this.o/this.K):Math.round(1E3*a/this.B),0,b)};
g.h.Bo=function(){return this.o-1};
g.h.Pv=function(){return this.o?0:-1};
g.h.Qv=function(){};g.E(eF,XE);eF.prototype.A=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var k=this.D(f-1,e,d[f],b);180>k.getHeight()&&c.push(k)}return c};
eF.prototype.D=function(a,b,c,d){return new dF(a,b,c,d)};
eF.prototype.J=function(){};g.E(fF,dF);g.h=fF.prototype;g.h.Rl=function(){return this.g?this.g.zg():-1};
g.h.Nk=function(a){var b=this.rows*this.columns*this.H,c=-1,d=-1,e=this.g;e&&(c=e.Jb(),d=e.Ve(a));return d>c-b?-1:d};
g.h.Bo=function(){return this.g?this.g.Jb():-1};
g.h.Pv=function(){return this.g?this.g.ue():-1};
g.h.Qv=function(a){this.g=a?a.index:null};g.E(gF,eF);gF.prototype.A=function(a,b){return gF.ga.A.call(this,"$N|"+a,b)};
gF.prototype.D=function(a,b,c){return new fF(a,b,c,this.N.isLive)};
gF.prototype.J=function(a){for(var b=0;b<this.g.length;b++)this.g[b].Qv(a)};g.p(hF,fy);hF.prototype.g=function(){return new ey(this.o)};var kF={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},nF={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};g.qF.prototype.toString=function(){return this.topic};var kZ=g.y("ytPubsub2Pubsub2Instance")||new g.jr;g.jr.prototype.subscribe=g.jr.prototype.subscribe;g.jr.prototype.unsubscribeByKey=g.jr.prototype.Rc;g.jr.prototype.publish=g.jr.prototype.R;g.jr.prototype.clear=g.jr.prototype.clear;g.x("ytPubsub2Pubsub2Instance",kZ,void 0);var tF=g.y("ytPubsub2Pubsub2SubscribedKeys")||{};g.x("ytPubsub2Pubsub2SubscribedKeys",tF,void 0);var vF=g.y("ytPubsub2Pubsub2TopicToKeys")||{};g.x("ytPubsub2Pubsub2TopicToKeys",vF,void 0);var uF=g.y("ytPubsub2Pubsub2IsAsync")||{};
g.x("ytPubsub2Pubsub2IsAsync",uF,void 0);g.x("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.p(CF,g.pF);g.p(DF,g.pF);var nG=new g.qF("aft-recorded",CF),yF=new g.qF("timing-sent",DF);var UF=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};IF.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
JF.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Rb].join(": ")};
FF.o=.1;FF.g=/url\(["']?(http[^'"\)]+)['"]?\)/i;FF.A="mark_iframe_loaded: ";FF.B=20;var oG={vc:!0},YF={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile_polymer/mobile_polymer"]':"mpj",
'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",
'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},iG={ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",plid:"videoId",fmt:"playerInfo.itag",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",yt_vis:"isVisible"},kG="ap c cver ei srt yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_docid ba cmt ncnp nr p pa paused pc prerender psc rc start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
$F={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS"},jG=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],mG=!1,LF=(0,g.z)(UF.clearResourceTimings||UF.webkitClearResourceTimings||UF.mozClearResourceTimings||UF.msClearResourceTimings||UF.oClearResourceTimings||
g.va,UF);var lZ;var mZ=g.Rb,nZ=mZ.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!nZ||2>nZ.length)lZ=void 0;else{var oZ=mZ.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);lZ=oZ&&6==oZ.length?Number(oZ[5].replace("_",".")):0}var ZS=lZ,pZ=0<=ZS;pZ&&0<=g.Rb.search("Safari")&&g.Rb.search("Version");var YG={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"},qZ={},rZ=(qZ.ALWAYS=1,qZ.BY_REQUEST=3,qZ),DG,vG;g.p(g.uG,g.R);g.h=g.uG.prototype;g.h.ge=function(a,b){b?(this.setData(a),WG(this)&&KG(this)):(EG(this,a,!0),this.R("dataupdated"))};
g.h.setData=function(a){a=a||{};a.player_response&&(this.Ua=g.tg(a.player_response));this.re="1"!=a.hlsdvr?!1:MC()?!0:dE&&5>ZS?!1:!0;this.yx=a.ad_query_id;this.adSafetyReason=a.encoded_ad_safety_reason;this.zx=a.agcid;this.Ri="1"==a.infringe||"1"==a.muted;this.pp=a.authkey;this.Ib=a.authuser;this.clientPlaybackNonce||(this.clientPlaybackNonce=a.cpn||XD());this.enableCardio=PD(this.enableCardio,a.enable_cardio);this.enableCardioBeforePlayback=PD(this.enableCardioBeforePlayback,a.enable_cardio_before_playback);
this.endSeconds=RD(this.endSeconds,a.end||a.endSeconds);this.Ej=TD(this.Ej,a.itct);this.Im=PD(this.Im,a.noiba);this.Kh="1"==a.livemonitor;this.va="1"==a.live_playback||!!a.fresca_preroll||!!a.heartbeat_preroll;this.isLiveDestination=PD(this.isLiveDestination,a.is_live_destination);this.isLiveDefaultBroadcast="1"==a.live_default_broadcast;this.isLowLatencyLiveStream="1"==a.is_low_latency_live_stream;a.latency_class&&(this.latencyClass=QD("UNKNOWN",a.latency_class,jZ));this.isMdxPlayback=PD(this.isMdxPlayback,
a.mdx);a.mdx_control_mode&&(this.mdxControlMode=fb(a.mdx_control_mode));this.kg=RD(this.kg,a.reload_count);this.On=TD(this.On,a.reload_reason);this.bo=PD(this.bo,a.show_content_thumbnail);this.Lm=PD(this.Lm,a.utpsa);this.cycToken=a.cyc;this.kv=a.tkn;this.Zg="1"==a.innertube_thumbnail&&this.Ua.videoDetails.thumbnail?oF(this.Ua.videoDetails.thumbnail):mF(a);this.ie=TD(this.ie,a.vvt);this.mdxEnvironment=TD(this.mdxEnvironment,a.mdx_environment);this.kD=a.osig;this.hu=a.ptchn;this.iu=a.oid;this.fk=a.ptk;
this.ju=a.pltype;this.playbackId=a.plid;this.eventId=a.eventid;this.osid=a.osid;this.videoMetadata=a.vm;this.Ln=a.of;this.Ck=a.upt;this.playlistId=TD(this.playlistId,a.list);this.pu=a.pyv_view_beacon_url;this.UG=a.pyv_quartile25_beacon_url;this.VG=a.pyv_quartile50_beacon_url;this.WG=a.pyv_quartile75_beacon_url;this.TG=a.pyv_quartile100_beacon_url;a.remarketing_url&&(this.remarketingUrl=a.remarketing_url);this.Ua&&this.Ua.ji&&this.Ua.ji.cI&&(this.youtubeRemarketingUrl=this.Ua.ji.cI.Dx);this.Ua&&this.Ua.ji&&
this.Ua.ji.ly&&(this.googleRemarketingUrl=this.Ua.ji.ly.Dx);a.ppv_remarketing_url&&(this.ppvRemarketingUrl=a.ppv_remarketing_url);this.lk=a.sdetail;!this.Nn&&a.session_data&&(this.Nn=g.Fs(a.session_data).feature);this.isFling=1==RD(this.isFling?1:0,a.is_fling);this.vnd=RD(this.vnd,a.vnd);this.Ml=TD(this.Ml,a.force_ads_url);this.pf=TD(this.pf,a.ctrl);this.De=TD(this.De,a.ytr);this.Lp=a.ytrcc;this.zu=a.ytrexp;this.mi=SD(this.mi,a.vq);this.si=SD(this.si,a.suggestedQuality);this.vk=PD(this.vk,a.ssrt);
this.videoId=MD(a)||this.videoId;this.vssCredentialsToken=TD(this.vssCredentialsToken,a.vss_credentials_token);this.dh=TD(this.dh,a.vss_credentials_token_type);this.ypcGid=TD(this.ypcGid,a.ypc_gid);this.heartbeatToken=TD(this.heartbeatToken,a.heartbeat_token);this.heartbeatInterval=RD(this.heartbeatInterval,a.heartbeat_interval);this.heartbeatRetries=RD(this.heartbeatRetries,a.heartbeat_retries);this.heartbeatSoftFail=PD(this.heartbeatSoftFail,a.heartbeat_soft_fail);this.Hm=PD(this.Hm,a.ithb);this.Vq=
PD(this.Vq,a.strpro);FG(this.Ua)&&(this.adModule=!0,this.ad.push("ad"));a.adaptive_fmts&&(this.adaptiveFormats=a.adaptive_fmts);this.Ua&&this.Ua.attestation&&this.Ua.attestation.playerAttestationRenderer?this.kh=this.Ua.attestation.playerAttestationRenderer.challenge:void 0!=a.atc&&(this.kh=a.atc);a.license_info&&(this.Yb=XG(a.license_info));a.allow_embed&&(this.allowEmbed="1"==a.allow_embed);a.backgroundable&&(this.backgroundable="1"==a.backgroundable);a.autonav&&(this.Hj="1"==a.autonav);a.autoplay&&
(this.mf="1"==a.autoplay);if(a.iv_load_policy)this.Ne=QD(this.Ne,a.iv_load_policy,qE);else{var b=wG(this.Ua);b&&b.loadPolicy&&(this.Ne=rZ[b.loadPolicy])}a.cc_lang_pref&&(this.Pe=TD(a.cc_lang_pref,this.Pe));a.cc_load_policy&&(this.Qe=QD(this.Qe,a.cc_load_policy,qE));"0"==a.dash&&(this.Yp=!0);if(a.dashmpd){this.jd=g.Rg(a.dashmpd,{cpn:this.clientPlaybackNonce});b=/\/s\/([0-9A-F.]+)/;var c=b.exec(this.jd);c&&(c=vs(c[1]),this.jd=this.jd.replace(b,"/signature/"+c))}a.delay&&(this.Rd=fb(a.delay));a.drm_session_id&&
(this.drmSessionId=a.drm_session_id);void 0!=a.end&&(this.clipEnd=a.end);a.fair_play_cert&&window.atob&&(this.fairPlayCert=(0,window.atob)(a.fair_play_cert));a.fmt_list&&(this.fmtList=a.fmt_list);a.fresca_preroll&&this.ad.push("fresca");a.heartbeat_preroll&&this.ad.push("heartbeat");a.idpj&&(this.Cg=fb(a.idpj));a.ismb&&(this.xe=fb(a.ismb));a.is_listed&&(this.isListed=PD(this.isListed,a.is_listed));a.paid_content_overlay_duration_ms&&(this.gu=fb(a.paid_content_overlay_duration_ms));a.paid_content_overlay_text&&
(this.NG=a.paid_content_overlay_text);a.url_encoded_fmt_stream_map&&(this.vf=a.url_encoded_fmt_stream_map);a.hls_formats&&(this.hlsFormats=a.hls_formats);a.hlsvp&&(this.hlsvp=a.hlsvp);a.length_seconds&&(this.lengthSeconds=fb(a.length_seconds));a.live_chunk_readahead&&(this.liveChunkReadahead=RD(this.liveChunkReadahead,a.live_chunk_readahead));a.live_start_walltime&&(this.liveStartWalltime=fb(a.live_start_walltime));a.live_manifest_duration&&(this.Pm=fb(a.live_manifest_duration));a.ldpj&&(this.Nh=
fb(a.ldpj));a.player_params&&(this.playerParams=a.player_params);a.relative_loudness&&(this.relativeLoudness=fb(a.relative_loudness),(0,window.isFinite)(this.relativeLoudness)&&(this.np=Math.min(1,Math.pow(10,-this.relativeLoudness/20))));a.partnerid&&(this.lf=fb(a.partnerid));a.probe_url&&(this.probeUrl=CA(g.Rg(a.probe_url,{cpn:this.clientPlaybackNonce})));a.profile_picture&&(this.profilePicture=TD(a.profile_picture,this.profilePicture));a.pyv_billable_url&&g.HY.test(a.pyv_billable_url)&&(this.ik=
a.pyv_billable_url);a.pyv_conv_url&&g.HY.test(a.pyv_conv_url)&&(this.Rg=a.pyv_conv_url);a.video_masthead_ad_quartile_urls&&(b=a.video_masthead_ad_quartile_urls,this.Vm=b.quartile_0_url,this.qr=b.quartile_25_url,this.rr=b.quartile_50_url,this.sr=b.quartile_75_url,this.pr=b.quartile_100_url);"1"==a.spacecast_playback&&(this.ad.push("spacecast"),this.spacecastModule=!0,this.og.QG=!0);a.spacecast_addrs&&(this.spacecastModule=!0,b={},b.addresses=a.spacecast_addrs.split(","),b.probe=!0,a.spacecast_query_params&&
(b.applianceQueryParams=a.spacecast_query_params),this.og.init=b);0<this.startSeconds||(this.Uq=this.startSeconds=RD(this.startSeconds,a.start||a.startSeconds));void 0==a.start||"1"==a.resume||this.va||(this.clipStart=a.start);a.two_stage_token&&(this.uf=a.two_stage_token);a.url_encoded_third_party_media&&(this.Yg=Ms(a.url_encoded_third_party_media));a.watch_ajax_token&&(this.watchAjaxToken=a.watch_ajax_token);a.ypc_module&&this.ad.push("ypc");a.ypc_clickwrap_module&&this.ad.push("ypc_clickwrap");
this.wi=TD(this.wi,a.ucid);(0,g.G)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(b){a[b]&&(this.hd[b]=a[b])},this);
this.hd.focEnabled=PD(this.hd.focEnabled,a.focEnabled);this.hd.rmktEnabled=PD(this.hd.rmktEnabled,a.rmktEnabled);this.tb=a;EG(this,a,!1);IG(this)||(this.adaptiveFormats&&!this.va?(LG(this,HB(MG(this,this.adaptiveFormats),this.Yb,this.lengthSeconds,void 0)),CB(this.oa)&&(this.Dg=!0)):this.jd&&(this.qh=!0));a.adpings&&(this.pl=a.adpings?g.Gs(a.adpings):null);a.feature&&(this.jg=a.feature);a.referrer&&(this.referrer=a.referrer);a.multifeed_metadata_list&&(this.Ef=Ms(a.multifeed_metadata_list));this.clientScreenNonce=
TD(this.clientScreenNonce,a.csn);this.rootVeType=RD(this.rootVeType,a.root_ve_type);a.unplugged_location_info&&(this.rg=a.unplugged_location_info);a.unplugged_partner_opt_out&&(this.bh=TD("",a.unplugged_partner_opt_out));a.partial_spherical&&(this.partialSpherical="1"==a.partial_spherical);a.fflags&&(b=g.Fs(a.fflags),b.enable_spherical_kabuki&&(this.cq="true"==b.enable_spherical_kabuki));this.Jh=TD(this.Jh,a.internal_ip_override);this.innertubez=TD(this.innertubez,a.innertubez)};
g.h.Kc=function(){return!this.va||this.re};
g.h.uz=function(a){(this.ae=a)&&"fairplay"==this.ae.g&&(this.ae.fairPlayCert=this.fairPlayCert);KG(this)};
g.h.ec=function(){return!(!this.oa||!this.oa.o)};
g.h.dE=function(a){if(!this.fa()){if(this.xk){var b=RB(a,this.xk);b&&(a=b)}LG(this,a);this.va&&this.oa.subscribe("refresh",this.Gt,this);g.PF("mrc");CB(this.oa)&&(this.Dg=!0);KG(this)}};
g.h.cE=function(a){this.fa()||(this.df=!1,this.R("dataloaderror",new g.KE("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.h.Gt=function(){this.fa()||(this.oa.isLive||this.oa.unsubscribe("refresh",this.Gt,this),this.Cp())};
g.h.Cp=function(){var a=this.oa.by(this.Om);0<a.length&&(this.R("cuepointupdated",a),this.Om+=a.length)};
g.h.Fz=function(a){if(this.spacecastFormatMap){var b=MG(this,this.spacecastFormatMap);return WE(a,b,OG(this,a)).then(this.tk,void 0,this).then(this.iq,void 0,this)}return rt()};
g.h.Cz=function(a,b){var c=b||IG(this);if(this.oa&&!c){if(!a.C){c=this.oa;var d=this.va;if(!c.g["0"]){var e=new Sx(0,0,0,void 0,void 0,"auto");e=new Xx("0","",void 0,e);c.g["0"]=d?new cB(new g.DA("http://www.youtube.com/videoplayback"),e,"fake"):new g.xB(new g.DA("http://www.youtube.com/videoplayback"),e,new g.Kz(0,0),new g.Kz(0,0),0,window.NaN)}}return xD(a.T,this.oa,this.ae,!1,HE(a)).then(this.Yn,void 0,this)}return rt()};
g.h.Dz=function(a){if(this.hlsFormats){var b=MG(this,this.hlsFormats);return UE(a,b,this.xe).then(this.tk,void 0,this)}return rt()};
g.h.Gz=function(a){if(this.Yg&&this.br){var b=iF(this.Yg);a=LC(a.T,b,wE(a)).then(this.tk,void 0,this)}else a=rt();return a};
g.h.Ez=function(a){var b=MG(this,this.vf,this.fmtList);if(this.hlsvp){var c=this.hlsvp,d=this.xe,e={cpn:this.clientPlaybackNonce};-1==c.indexOf("/ibw/")&&(e.ibw=d?String(d):"1369843");c={url:g.Rg(c,e),type:"application/x-mpegURL",quality:"auto",itag:"93"};b.push(c)}return WE(a,b,OG(this,a)).then(this.tk,void 0,this)};
g.h.Yn=function(a){this.Ra=a;this.Xe=this.Xe||/^r/.test(this.clientPlaybackNonce)&&!!this.Ra.videoInfos.length&&1080<this.Ra.videoInfos[0].video.o;a=this.Ra?this.Ra.audioTracks:[];a=a.concat(this.ij);for(var b=0;b<this.mh.length;b++)for(var c=this.mh[b],d=0;d<a.length;d++){var e=a[d],f=e.Sb.id==c.audioTrackId;if(e.Sb.isDefault&&b==this.zl||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];g.r(c.defaultCaptionTrackIndex)&&
(e.Hl=this.captionTracks[c.defaultCaptionTrackIndex]);g.r(c.forcedCaptionTrackIndex)&&(e.uh=this.captionTracks[c.forcedCaptionTrackIndex]);e.tp=c.visibility||"UNKNOWN"}}};
g.h.tk=function(a){this.Qg=a;this.Yn(new GC((0,g.H)(this.Qg,function(a){return a.kd})))};
g.h.iq=function(){var a=bd(this.Ra.videoInfos,function(a,c){return c.video.isAccelerated&&(!a||a.height<c.video.height)?c.video:a},null);
a&&(this.si=this.mi=a=iy(a.quality,a.quality,!0))};
g.h.wc=function(){var a={};this.Ca&&(a.fmt=Wx(this.Ca),this.tc&&Wx(this.tc)!=Wx(this.Ca)&&(a.afmt=Wx(this.tc)));a.plid=this.playbackId;a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.Ri&&(a.infringe=1);this.Zd&&(a.splay=1);this.va&&(a.live=this.re?"dvr":"live");this.mf&&(a.autoplay=1);this.lk&&(a.sdetail=this.lk);this.lf&&(a.partnerid=this.lf);this.osid&&(a.osid=this.osid);return a};
g.h.getStoryboardFormat=function(){if(this.Ua&&this.Ua.storyboards){var a=this.Ua.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.tb.storyboard_spec||this.tb.live_storyboard_spec};
g.h.zh=function(){return this.oa&&!(0,window.isNaN)(this.oa.zh())?this.oa.zh():this.lengthSeconds};
g.h.Lb=function(){return this.oa&&!(0,window.isNaN)(this.oa.Lb())?this.oa.Lb():0};
g.h.ac=function(){return!this.fa()&&!(!this.videoId&&!this.Yg)};
g.h.Nb=function(){return WG(this)&&!this.qh&&!this.Dg};
g.h.Nu=function(){var a={format:"RAW",method:"GET",withCredentials:this.Eu};this.Ug&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData});0<this.Vl&&(a.timeout=this.Vl);var b=this.Wl;0<this.pk&&(b=g.Is(b,{playerretry:this.pk}));this.xq?zB(ot,b,a).then(xs(this.Jt),xs(this.sE),this):(a.context=this,a.rb=this.Jt,a.onError=this.tm,g.Us(b,a));g.PF("vir");g.PF("vir",void 0,"video_to_ad");this.wq=(0,g.Ru)()};
g.h.ub=function(a,b){if(30==this.lf){var c=this.Zg["default.jpg"];return c?c:this.videoId?g.Rg("//docs.google.com/vt",{id:this.videoId,authuser:this.Ib,authkey:this.pp}):"//docs.google.com/images/doclist/cleardot.gif"}b||(b="hqdefault.jpg");return(c=this.Zg[b])||a.H||"pop1.jpg"==b||"pop2.jpg"==b||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b?c:zE(a,this.videoId,b)};
g.h.Jt=function(a){if(!this.fa()){var b=a.responseText;if(b){this.df=!1;var c=g.Gs(b);this.Xq&&NE(c);"fail"==c.status?this.R("onStatusFail",c):(g.PF("virc"),g.PF("virc",void 0,"video_to_ad"),(0,g.G)(g.sZ,function(a){a in this.tb&&(c[a]=this.tb[a])},this),this.setData(c),WG(this)?KG(this):this.R("dataloaderror",new g.KE("manifest.net.retryexhausted",!0,{successButUnplayable:"1"})))}else this.tm(a)}};
g.h.sE=function(a){this.tm(a.g)};
g.h.tm=function(a){if(!this.fa()){var b=a?a.status:-1;a=this.pk>=this.Qn||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=(((0,g.Ru)()-this.wq)/1E3).toFixed(3);b={backend:"gvi",rc:b,rt:d};a&&this.Qn?(c="manifest.net.retryexhausted",b.urllen=this.Wl.length):a||(this.pk++,this.Mu.start());this.R("dataloaderror",new g.KE(c,a,b))}};
g.h.getPlayerResponse=function(){return this.Ua};
g.h.getPlaylistId=function(){return null};
g.h.wb=function(){return this};
g.h.xj=function(a){return a.getVideoUrl(this.videoId)};
g.h.Ye=function(){return!!this.oa&&this.oa.Ye()};
g.h.Ze=function(){return!!this.oa&&this.oa.Ze()};
g.h.Xd=function(){return!!this.oa&&this.oa.Xd()};
g.h.Uf=function(){return!!this.oa&&this.oa.Uf()};
g.sZ="ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" ");DG="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
vG=["annotations","captions","storyboard"];hH.prototype.update=function(){var a=this.g.o()||0,b=g.gH(this.g);if(a!=this.o||lH(this,a,b)){if(a<this.o||a-this.o>b-this.D+2||lH(this,a,b)||mH(this,b))g.iH(this),this.B=a;this.D=b;this.o=a}};nH.prototype.o=function(){return{ps:this.g.g,el:uE(this.videoData,this.g)}};
nH.prototype.send=function(){if(!this.A){var a=this.o();a=g.Rg(this.g.baseYtUrl+"set_awesome",a);this.g.Sa&&this.videoData.visitorData&&Ks(a)?g.Us(a,{headers:{"X-Goog-Visitor-Id":this.videoData.visitorData}}):g.it(a);this.A=!0}};g.E(oH,nH);
oH.prototype.o=function(){var a=oH.ga.o.call(this);g.Ja(a,this.g.A);g.Ja(a,{html5:"1",video_id:this.videoData.videoId,eurl:this.g.pa,framer:this.g.Mi,list:this.videoData.ho||this.videoData.playlistId,w:g.Zc(this.videoData.Qd/this.videoData.lengthSeconds,0,1),l:this.videoData.lengthSeconds,plid:this.videoData.playbackId,ei:this.videoData.eventId,access_token:this.videoData.oauthToken,tpmt:jH(this.B),cpn:this.videoData.clientPlaybackNonce,feature:this.videoData.jg});this.videoData.adFormat&&(a.adformat=
this.videoData.adFormat);var b;(b=(b=this.videoData.referrer)?b.slice(0,128):"")&&(a.referrer=b);if(this.g.experiments.g("legacy_autoplay_flag")?this.g.da:this.videoData.mf)a.autoplay="1";this.g.Ib&&(a.authuser=this.g.Ib);this.g.pageId&&(a.pageid=this.g.pageId);this.videoData.Zd&&(a.splay="1");this.videoData.subscribed&&(a.subscribed=this.videoData.subscribed);g.Ja(a,oH.ga.o.call(this));g.Ja(a,this.g.A);return a};var ZM={JI:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"ERROR_AUTHENTICATION_EXPIRED",KI:"ERROR_AUTHENTICATION_MALFORMED",LI:"ERROR_AUTHENTICATION_MISSING",QI:"ERROR_BAD_REQUEST",XI:"YTP_ERROR_CANNOT_ACTIVATE_RENTAL",eJ:"ERROR_CGI_PARAMS_MALFORMED",fJ:"ERROR_CGI_PARAMS_MISSING",qJ:"YTP_DEVICE_FALLBACK",vJ:"YTP_ERROR_LICENSE",wJ:"YTP_ERROR_VIDEO_UNAVAILABLE",yJ:"YTP_ERROR_FORMAT_UNAVALIABLE",AJ:"YTP_ERROR_GEO_FAILURE",KJ:"YTP_ERROR_GENERIC_WITHOUT_LINK",LJ:"YTP_HTML5_FLASH_DEPRECATED",
MJ:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",SJ:"YTP_ERROR_INVALID_DRM_MESSAGE",XJ:"LEARN_MORE",kK:"YTP_ERROR_NOT_SIGNED_IN",DK:"YTP_ERROR_PURCHASE_NOT_FOUND",EK:"YTP_ERROR_PURCHASE_REFUNDED",HK:"YTP_ERROR_RENTAL_EXPIRED",ZI:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",aJ:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",cJ:"YTP_ERROR_CAST_TOKEN_FAILED",bJ:"YTP_ERROR_CAST_TOKEN_EXPIRED",dJ:"YTP_ERROR_CAST_TOKEN_MALFORMED",MK:"YTP_ERROR_SERVER_ERROR",XK:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",bL:"YTP_ERROR_STREAM_LICENSE_NOT_FOUND",
YK:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",ZK:"YTP_ERROR_STREAMING_NOT_ALLOWED",aL:"YTP_ERROR_STREAMING_UNAVAILABLE",IK:"YTP_ERROR_RETRYABLE_ERROR",jL:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",iL:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",qL:"YTP_ERROR_UNSUPPORTED_DEVICE",rL:"YTP_ERROR_UNUSUAL_ACTIVITY",sL:"YTP_ERROR_VIDEO_FORBIDDEN",tL:"YTP_ERROR_VIDEO_NOT_FOUND"},pH={300:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",303:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
304:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",305:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"YTP_ERROR_VIDEO_NOT_FOUND",401:"YTP_ERROR_GEO_FAILURE",402:"YTP_ERROR_STREAMING_NOT_ALLOWED",403:"YTP_ERROR_UNSUPPORTED_DEVICE",405:"YTP_ERROR_VIDEO_FORBIDDEN",500:"YTP_ERROR_PURCHASE_NOT_FOUND",501:"YTP_ERROR_RENTAL_EXPIRED",502:"YTP_ERROR_PURCHASE_REFUNDED",5E3:"ERROR_BAD_REQUEST",5001:"ERROR_CGI_PARAMS_MISSING",5002:"ERROR_CGI_PARAMS_MALFORMED",5100:"ERROR_AUTHENTICATION_MISSING",5101:"ERROR_AUTHENTICATION_MALFORMED",
5102:"ERROR_AUTHENTICATION_EXPIRED",5200:"YTP_ERROR_CAST_TOKEN_MALFORMED",5201:"YTP_ERROR_CAST_TOKEN_EXPIRED",5202:"YTP_ERROR_CAST_TOKEN_FAILED",5203:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",5204:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",6E3:"YTP_ERROR_INVALID_DRM_MESSAGE",7E3:"YTP_ERROR_SERVER_ERROR",8E3:"YTP_ERROR_RETRYABLE_ERROR"};var tZ=pZ&&4>ZS?.1:0,YS=new zH;zH.prototype.g=null;zH.prototype.getDuration=function(){return this.duration||0};
zH.prototype.getCurrentTime=function(){return this.currentTime||0};
zH.prototype.o=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.E(AH,g.I);g.h=AH.prototype;g.h.gc=function(){this.g.ended&&this.Hb(0);!this.Ic()&&this.o&&(g.ws(Error("playVideo without src")),CH(this,this.o.g),this.o.o||this.load());this.play();pZ&&7<=ZS&&g.gu(this,"playing",(0,g.z)(function(){g.Es((0,g.z)(this.lq,this,this.getCurrentTime(),0),500)},this))};
g.h.lq=function(a,b){this.g.paused||this.getCurrentTime()>a||10<b||(this.play(),g.Es((0,g.z)(this.lq,this,this.getCurrentTime(),b+1),500))};
g.h.Hb=function(a){0<this.g.readyState&&(pZ&&4>ZS&&(a=Math.max(.1,a)),this.g.currentTime=a)};
g.h.Ae=function(){!this.A&&this.Ic()&&(NC&&0<this.getCurrentTime()&&this.Hb(0),this.g.removeAttribute("src"),this.load(),BH(this,null))};
g.h.addEventListener=function(a,b){this.C.ba(a,b,!1,this);if(!this.B[a]){var c=(0,g.z)(this.EI,this);this.g.addEventListener(a,c);this.B[a]=c}};
g.h.removeEventListener=function(a,b){this.C.Ma(a,b,!1,this)};
g.h.dispatchEvent=function(a){return this.C.dispatchEvent(a)};
g.h.Fp=function(){this.D&&!this.g.muted&&(sz(),this.g.muted=!0)};
g.h.W=function(){this.F&&this.removeEventListener("volumechange",this.Fp);AH.ga.W.call(this)};g.p(NH,g.Me);NH.prototype.preventDefault=function(){g.Me.prototype.preventDefault.call(this);this.o&&this.o.preventDefault()};
NH.prototype.stopPropagation=function(){g.Me.prototype.stopPropagation.call(this);this.o&&this.o.stopPropagation()};var MM=xf(function(){var a="";try{var b=g.Ed("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.OH.prototype.sb=function(){return g.T(this,8)&&!g.T(this,64)&&!g.T(this,2)};
g.OH.prototype.isError=function(){return g.T(this,128)};aI.prototype.isEmpty=function(){return this.endTime==this.startTime};var eI={other:1,none:2,wifi:3,cellular:7};g.p(hI,g.I);
hI.prototype.C=function(a){if(!this.fa()&&(a=0<=a?a:g.gH(this.g),"PL"==this.A&&(!g.fc(this.o)||a>=this.B+30)&&(g.gI(this,a,"vps",[this.A]),this.B=a),!g.fc(this.o)&&!this.U)){kI(this,a);var b=a,c=this.g.F(),d=c.droppedVideoFrames,e=d-this.Z;if(d>c.totalVideoFrames||5E3<e)this.onError("html5.badframedropcount","df."+d+";tf."+c.totalVideoFrames);else 0<e&&g.gI(this,b,"df",[e]);this.Z=d;!this.g.g.experiments.g("disable_webgl_reporting")&&0<this.D&&(g.gI(this,a,"glf",[this.D]),this.D=0);a=lI(this);g.lc(a,
this.g.g.A);a=g.Rg(this.g.g.hh,a);for(var f in this.o)null==this.o[f]?g.ws(Error("Stats report key has invalid value: "+f),"WARNING"):a+="&"+f+"="+this.o[f].join(",");mI(this,a);this.o={}}};
hI.prototype.pa=function(){this.g.videoData.ae&&sI(this,"drm-"+this.g.videoData.ae.g)};
hI.prototype.onError=function(a,b){var c=g.gH(this.g);oI(this,c,a,b);kI(this,c);nI(this)};
hI.prototype.W=function(){g.I.prototype.W.call(this);g.Bs(this.Y)};
var uZ={},qI=(uZ[5]="N",uZ[-1]="N",uZ[3]="B",uZ[0]="EN",uZ[2]="PA",uZ[1]="PL",uZ);tI.prototype.send=function(a){if(!this.aa){var b=vI(this);b=g.Rg(this.Va,b);if(this.J)this.T&&(a={method:"POST",kb:{atr:this.T}},this.Ug&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData}),g.Us(b,a));else{if(this.J)var c=null;else{c=this.F&&Js();var d=this.Ug&&!!this.visitorData;if(c||d){var e={};c&&(e.Authorization="Bearer "+this.F);d&&(e["X-Goog-Visitor-Id"]=this.visitorData);c={headers:e,withCredentials:!0,Nc:a}}else c=null}c?g.Us(b,c):this.D.experiments.g("html5_beacon")&&!a?
lt(b):g.it(b,a)}this.aa=!0}};
tI.prototype.g=function(a){void 0==a&&(a=window.NaN);return(1*a.toFixed(3)).toString()};g.E(wI,g.I);g.h=wI.prototype;g.h.fE=function(a,b){if(!this.fa()){this.F=window.NaN;this.A.update();var c=kH(this.A),d=zI(this,c);b&&(d.C=a);var e=400<this.K;!(1<c.length)&&c[0].isEmpty()||e||(d.o=xI(this,!0,a));d.send();this.K++}};
g.h.onError=function(a,b){if(!this.fa())this.o.onError(a,b)};
g.h.rk=function(a){var b=this.g.g,c=this.g.videoData,d={ns:b.Va,el:uE(c,b),eurl:b.pa,fmt:c.Ca?Wx(c.Ca):0,html5:1,list:c.playlistId,plid:c.playbackId,cpn:c.clientPlaybackNonce,ei:c.eventId,ps:b.g,noflv:1,st:this.g.o(),video_id:c.videoId,metric:a};if(b.experiments.g("legacy_autoplay_flag")?b.da:c.mf)d.autoplay="1";"heartbeat"==a&&(d.tpmt=jH(this.A));g.Ja(d,b.A);BI(this,g.Rg("//www.youtube.com/live_204",d))};
g.h.ze=function(){};
g.h.W=function(){wI.ga.W.call(this);g.Cs(this.F);this.F=window.NaN;var a=this.A;g.Bs(a.F);a.F=window.NaN};g.p(FI,wy);g.h=FI.prototype;g.h.Fa=function(){return JN(this.app)};
g.h.Ar=function(a,b,c,d,e){return zX(this.app,a,b,c,d,e)};
g.h.sA=function(a,b,c){var d=this.app.g.N;b={aj:b,jo:c};if(!d.Ia[a]&&(b.aj||b.jo)){c=d.Ia;var e=b;Object.isFrozen&&!Object.isFrozen(b)&&(e=Object.create(b),Object.freeze(e));c[a]=e;d.R("vast_info_card_add",a)}};
g.h.tA=function(a,b){sX(this.app,a,b||this.playerType)};
g.h.Ig=function(a){return fX(this.app,a)};
g.h.Uh=function(a,b,c,d){nX(this.app,a,c||this.playerType,b,d)};
g.h.jn=function(a,b,c){var d=this.app;b=b||this.playerType||1;c=c||!1;d.wa.get(b+MD(a))||(a=new g.uG(a),pX(d,a,b,c))};
g.h.Jg=function(a,b){xX(this.app,a,b)};
g.h.Sh=function(a){yX(this.app,a)};
g.h.pd=function(a,b,c){HX(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.h.MA=function(a){if(a){var b=this.getPlaylistId();if(!b||b==a.list){var c=a.video;(b=this.app.C)?this.app.K.isFullscreen()&&((c=c[b.bb])&&c.encrypted_id!=b.wb().videoId||(a.index=b.bb)):UW(this.app,{list:a.list,index:a.index,playlist_length:c.length});UI(this.app.C,a);this.ua("onPlaylistUpdate")}}else a=this.app,VW(a),a.o.ua("onPlaylistUpdate")};
g.h.LA=function(){OY()};
g.h.NA=function(a,b){var c=g.W(this.app,this.playerType||1);c&&c.getVideoData().ge(a,b)};
g.h.getPlayerResponse=function(){var a=g.W(this.app,this.playerType);return a?a.getVideoData().getPlayerResponse():null};
g.h.getStoryboardFormat=function(){return this.app.getVideoData().getStoryboardFormat()};
g.h.wA=function(){var a=this.app.g;return{Mb:a.Mb,jb:a.jb}};
g.h.getVideoData=function(){var a=wy.prototype.getVideoData.call(this),b=g.W(this.app,this.playerType);b&&(b=b.getVideoData(),a.backgroundable=b.backgroundable,a.cpn=b.clientPlaybackNonce,a.isLive=b.va,a.itct=b.Ej,a.paidContentOverlayText=QG(b),a.paidContentOverlayDurationMs=RG(b));return a};
g.h.getCurrentTime=function(a){return a?this.app.getCurrentTime(a):wy.prototype.getCurrentTime.call(this)};
g.h.getDuration=function(a){return a?this.app.getDuration(a):wy.prototype.getDuration.call(this)};
g.h.gf=function(){if(3==this.Fa())return g.KN(this.app.B).iB();var a=this.app.getVideoData(),b=g.W(this.app),c=this.app.Kc(),d=a.clipEnd;a=a.clipStart;var e=this.getCurrentTime(),f=this.getDuration(),k=wN(b),l=b.isPeggedToLive(),m=g.W(this.app,void 0),n;m?(m.o&&(n=JH(m.o)),n=0<=n?n:m.getCurrentTime()):n=0;return{allowSeeking:c,clipEnd:d,clipStart:a,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:n,seekableEnd:uN(b,!0),seekableStart:b.Lb()}};
g.h.dn=function(a){return RW(this.app,a)};
g.h.fn=function(a){return!!oz().canPlayType(a)};
g.h.Mr=function(a,b){var c=g.W(this.app,this.playerType);if(c){b=b||a;var d=iy(a,b,!0);g.uv("yt-player-quality",b,2592E3);pN(c,"m",d)}};
g.h.vA=function(){return UG(this.app.getVideoData(),this.app.getCurrentTime())};
g.h.Zf=function(a){var b=this.app,c=g.W(b,this.playerType);c&&b.g.Cb.has(a.toString())&&c.D&&(b=yI(c.D,"engage"),b.H=a,b.send(void 0))};
g.h.Vh=function(a,b,c){var d=this.app.B.o;d&&d.zi()&&d.zo(a,b,c)};
g.h.zA=function(a,b){var c=this.app.B.F;c&&c.da&&nU(c.da,a,b)};
g.h.ff=function(){var a=g.W(this.app,this.playerType);return a?a.bn():this.app.getVideoData().ij};
g.h.ln=function(a){3==this.Fa()&&g.KN(this.app.B).Xh("control_set_audio_track",a);var b=g.W(this.app,this.playerType),c;if(c=b)if(c=!b.fa()&&!g.T(b.A,128)&&!!b.g.Ra.g){c=b.B;if(c.fa())a=!0;else{var d=c.F;a=a.id;d.F="m";d.B=d.H.g[a];d.T=d.B;c.R("audioformatchange",new VI(d.T,d.o,d.F));c.o&&!c.o.g.remove?a=!1:(dL(c),oK(c.g),oK(c.B),tL(c),a=!0)}c=!a}c&&(mN(b),kN(b))};
g.h.gn=function(){var a=g.W(this.app,this.playerType);return a.g.Ra?a.g.Ra.audioTracks:[]};
g.h.xA=function(){var a=g.W(this.app,this.playerType);return a&&a.getVideoData().Ca?g.my(jM(a.xa,a.g)):"unknown"};
g.h.HA=function(a,b){IX(this.app,a,b)};
g.h.uA=function(){var a=this.app.B.D;a&&a.Zx()};
g.h.KA=function(){var a=this.app.B.F;a&&(a.Aa=!1,a.Fe())};
g.h.AA=function(){var a=this.app.B.F;a&&(a.Aa=!0,a.Fe())};
g.h.Lg=function(){return this.app.Oh()};
g.h.JA=function(){return!0};
g.h.Lr=function(a){a=g.EP(this.app.H,a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.h.GA=function(a){this.app.g.enableSafetyMode=a};
g.h.DA=function(a){Pt();EX(this.app,a?2:0)};
g.h.yl=function(){var a=this.app.B.A;a&&a.o&&a.destroy();(a=g.W(this.app))&&tN(a);(a=this.app.B.J)&&a.mz()&&g.IN(this.app.K,!0)};
g.h.Ae=function(){var a=this.app.g;!a.experiments.g("disable_new_pause_state3")&&BE(a)&&"blazer"!=a.g?this.yl():wy.prototype.Ae.call(this)};
g.h.yq=function(){return yN(g.W(this.app,this.playerType),!0)};
g.h.Pj=function(a){this.app.B.g.ro(a,!0)};
g.h.Yf=function(){var a=this.app.B.g;return a?a.Tl():null};
g.h.kn=function(){this.app.B.g.Hu()};
g.h.BA=function(){var a=g.W(this.app,this.playerType);if(!a)return!1;a=a.getVideoData();return!!a&&a.ac()&&!!a.Ca&&a.Ca.video.isAccelerated&&a.Ca.video.A};
g.h.isPeggedToLive=function(){return this.app.isPeggedToLive()};
g.h.FA=function(a){var b=this.app;b.jc=a;b.o.R("minimized")};
g.h.Ph=function(a){return eX(this.app,a)};
g.h.yA=function(){var a=this.app.B.B;if(!a)return{};a=a.Wr();return"Spherical"!=a.shader&&"Spherical3D"!=a.shader?{}:{yaw:g.$c(180*(a.yaw||0)/Math.PI,360),pitch:180*(a.pitch||0)/Math.PI}};
g.h.IA=function(a){var b=this.app.B.B;if(b){var c={shader:"Spherical"};g.ta(a.yaw)&&!(0,window.isNaN)(a.yaw)&&(c.yaw=g.$c(a.yaw,360)*Math.PI/180);g.ta(a.pitch)&&!(0,window.isNaN)(a.pitch)&&(c.pitch=g.Zc(a.pitch,-90,90)*Math.PI/180);b.Xr(c)}};
g.h.CA=function(a){var b=this.app;b.g.Oe=a;b.F&&(a=b.F,a.D&&g.iH(a.D.A),b.g.J&&JX(b))};
g.h.R=function(a,b){for(var c=1;c<arguments.length;++c);this.app.g.jb&&("videodatachange"==a||"audiotrackchanged"==a||"resize"==a||"cardstatechange"==a)&&this.app.Z.R.apply(this.app.Z,arguments);this.app.V.R.apply(this.app.V,arguments)};
g.h.ua=function(a,b){this.app.Z.R.apply(this.app.Z,arguments);this.app.V.R.apply(this.app.V,arguments)};
g.h.hn=function(a){this.R("aduxclicked",a)};
g.h.setVolume=function(a,b){By(this,a,b)};
g.h.mute=function(a){Cy(this,a)};
g.h.ee=function(a){Dy(this,a)};
g.h.nz=function(){return this.app.ka};
g.h.Rh=function(a){if("annotations_module"==a){var b=this.app.B.o;b&&!b.loaded&&b.load()}wy.prototype.Rh.call(this,a)};
g.h.Oj=function(a){if("annotations_module"==a){var b=this.app.B.o;b&&b.loaded&&b.unload()}wy.prototype.Oj.call(this,a)};
g.h.zc=function(a,b,c){if(!b)return null;var d=this.app.B;switch(a){case "ad":return(a=d.A)&&a.D&&a.D(b,c);case "remote":return(a=g.KN(d))&&a.hB(b,c);case "unplugged":return(a=g.V(d.M).Ha?d.C:null)&&a.A(b,c);case "spacecast":return(c=d.T)&&c.C(b);case "annotations_module":return(a=d.o)&&a.qI(b,c);case "creatorendscreen":return(a=d.H)&&a.Y(b,c)}return wy.prototype.zc.call(this,a,b,c)};
g.h.Xf=function(a){var b=this.app.B;switch(a){case "ad":return(b=b.A)&&b.F&&"addata adstate breakscount displaystate getContentVideoData loadedadbreaks midrollfreqcap".split(" ");case "remote":return g.KN(b)&&["casting","receivers","currentReceiver","quickCast"];case "annotations_module":return(b=b.o)&&b.rI();case "unplugged":return(g.V(b.M).Ha?b.C:null)&&["settingsMenuShown","hideSettingsMenu","showSettingsMenu"]}return a?wy.prototype.Xf.call(this,a):(a=wy.prototype.Xf.call(this),b.A&&a.push("ad"),
g.KN(b)&&a.push("remote"),b.o&&a.push("annotations_module"),b.H&&a.push("creatorendscreen"),g.V(b.M).Ha&&b.C&&a.push("unplugged"),a)};
g.h.Kg=function(){var a=this.app.H.Ga();return{width:a.width,height:a.height}};
g.h.EA=function(a){var b=this.app.H;b.H=OD(a,!0);b.je()};
g.h.UH=function(){var a=this.app.B.F;a&&a.B.yb(2,!0)};GI.prototype.reset=function(){NF(this.g)};
GI.prototype.o=function(a,b){g.PF(a,b,this.g)};
GI.prototype.info=function(a,b){g.QF(a,b,this.g)};II.prototype.toString=function(){return this.type+this.id};g.E(g.PI,g.R);g.h=g.PI.prototype;g.h.hasNext=function(a){return this.loop||!!a||this.bb+1<this.cf};
g.h.Yd=function(a){return this.loop||!!a||0<=this.bb-1};
g.h.wb=function(a,b){var c=void 0!=a?a:this.bb;c=this.Ia&&c in this.Ia?this.Ia[this.Pc[c]]:null;var d=null;c&&(b&&(c.autoplay="1"),d=new g.uG(c),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.h.setShuffle=function(a){this.Zu=a;a=this.Pc&&null!=this.Pc[this.bb]?this.Pc[this.bb]:this.bb;this.Pc=[];for(var b=0;b<this.Ia.length;b++)this.Pc.push(b);this.bb=a;this.Mj++;if(this.Zu){a=this.Pc[this.bb];for(b=1;b<this.Pc.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.Pc[b];this.Pc[b]=this.Pc[c];this.Pc[c]=d}for(b=0;b<this.Pc.length;b++)this.Pc[b]==a&&(this.bb=b);this.Mj++}this.R("shuffle")};
g.h.ub=function(a,b){b=b||"hqdefault.jpg";var c=this.Zg[b];if(c||a.H||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b)return c;if(this.gv.length)return zE(a,this.gv[0],b)};
g.h.getLength=function(){return this.cf};
g.h.th=function(a){if(a&&(a=a.videoId,!this.Ia[this.bb]||this.Ia[this.bb].video_id!=a))for(var b=0;b<this.Ia.length;b++)if(this.Ia[b].video_id==a){this.bb=b;break}};
g.h.onReady=function(a){this.ki=a;this.be&&g.Es(this.ki,0)};
g.h.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.h.xj=function(a){return a.getVideoUrl(this.wb().videoId,this.getPlaylistId())};
g.h.W=function(){this.ki=null;g.Le(this.Ia);g.PI.ga.W.call(this)};WI.prototype.forEach=function(a){for(var b=this.o+1;b<this.g.length;b++)a(this.g[b]||0);for(b=0;b<=this.o;b++)a(this.g[b]||0)};
WI.prototype.Fb=function(){var a=[];this.forEach((0,g.z)(a.push,a));return a};
WI.prototype.clear=function(){for(var a=this.g.length,b=0;b<a;b++)this.g[b]=0;this.o=this.g.length-1};cJ.prototype.reset=function(){this.T=eJ(this);this.F=window.NaN;this.K=0;this.g=new bJ(0,0,null);this.B=8;this.D=[];this.A=[];this.C=this.H=window.NaN;this.o=this.J=0};
cJ.prototype.process=function(a){if(this.D.length){if(hJ(this)&&this.D.length+a.byteLength<this.B){iJ(this,a,0);return}var b=this.D.length,c=new window.Uint8Array(b+a.byteLength);c.set(this.D,0);c.set(new window.Uint8Array(a.buffer,a.byteOffset,a.byteLength),b);this.D=[];a=new window.DataView(c.buffer)}for(b=0;b<a.byteLength;){c=a.byteLength-b;var d=window.NaN;if(hJ(this)){if(c<this.B){iJ(this,a,b);return}switch(this.g.type){case 0:case 1836019574:case 1836019558:d=fJ(this,a,b);break;case 1953653094:c=
a;d=b;this.J||(this.J=Zy(jJ(this,c,d),this.o));d=fJ(this,c,d);break;case 1836476516:this.o=aZ(jJ(this,a,b));gJ(this);d=this.g.size-8;break;case 1952867444:(0,window.isNaN)(this.C)||(c=jJ(this,a,b),d=this.N?this.C:gz(c),this.N&&fz(c,d),(0,window.isNaN)(this.F)&&(this.F=d),this.C+=this.J,this.K+=this.J);d=this.g.size-8;break;case 1936286840:c=jJ(this,a,b),d=iz(c),this.o=hz(c),gJ(this),this.J=d,d=this.g.size-8}}else d=Math.min(this.B,c);this.g.offset+=d;this.B-=d;b+=d;if(0==this.B){for(;0!=this.g.type&&
this.g.offset==this.g.size&&this.g.g;)this.g.g.offset+=this.g.size,this.g=this.g.g;switch(this.g.type){case 0:case 1836019574:case 1836019558:case 1953653094:this.B=8;break;default:this.B=this.g.size-8}}}0<a.byteLength&&this.A.push(a)};var tJ=0;g.h=uJ.prototype;g.h.aH=function(a){this.status=a.status;a.ok?(this.C=a.body.getReader(),this.D?(this.H=a.headers,this.V(),this.B=new window.Uint8Array(vJ(this)),yJ(this)):this.C.cancel("Cancelling")):this.Rj()};
g.h.ND=function(a){if(this.D)if((0,g.F)(),a.done)this.C=null,this.Rj();else{a=a.value;this.D({timeStamp:(0,g.F)(),loaded:this.A});this.A+=a.length;var b=a.length>=(!this.xh()&&this.T.V?1:Math.max(vJ(this)/2,16384)),c=a.length+this.g>vJ(this);this.K?((b||c)&&0!==this.g&&wJ(this),b?this.o.push(a):xJ(this,a)):(xJ(this,a),this.A>=(!this.xh()&&this.T.V?1:16384)&&wJ(this));yJ(this)}};
g.h.Rj=function(){this.D&&(this.F=!0,this.N())};
g.h.AF=function(){this.J=!0;this.Rj()};
g.h.ag=function(a){return this.H.get(a)};
g.h.Pq=function(){return!!this.H};
g.h.Ol=function(){return this.A};
g.h.xh=function(){return+this.ag("content-length")};
g.h.Nq=function(){return 200<=this.status&&300>this.status&&!!this.A};
g.h.Km=function(){return!!this.o.length||this.F&&0<this.g};
g.h.Xu=function(){this.o.length||wJ(this);return this.o.shift()};
g.h.Nr=function(){this.o.length||wJ(this);return this.o[0]};
g.h.abort=function(){this.C&&this.C.cancel("Cancelling");this.N=this.D=null};
g.h.cv=function(){return!0};
g.h.yu=function(){return this.J};g.h=zJ.prototype;g.h.PA=function(a){if(!this.o){this.status=this.g.status;try{this.response=this.g.response}catch(b){}this.A=!0;this.B(a)}};
g.h.RA=function(){2==this.g.readyState&&this.C()};
g.h.QA=function(a){this.o||(this.status=this.g.status,this.D(a))};
g.h.Pq=function(){return 2<=this.g.readyState};
g.h.ag=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.ws(b),""}};
g.h.xh=function(){return+this.ag("content-length")};
g.h.Ol=function(){return this.response.byteLength};
g.h.Nq=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.h.Km=function(){return this.A&&!!this.response&&!!this.response.byteLength};
g.h.Xu=function(){var a=this.response;this.response=null;return new window.Uint8Array(a)};
g.h.Nr=function(){return new window.Uint8Array(this.response)};
g.h.abort=function(){this.o=!0;this.g.abort()};
g.h.cv=function(){return!1};
g.h.yu=function(){return!1};g.h=AJ.prototype;g.h.Ud=function(){return this.F};
g.h.start=function(a){FJ(this,2);this.N=gZ++;if(this.o){var b=this.info,c=this.o.g,d=this.o.length;this.H=b.range?new g.Kz(b.range.start+c,b.range.end):Mz(c,d);this.A=g.ZA(this.info,this.V,this.H)}else this.H=this.info.range,this.A=g.ZA(this.info,this.V);this.A.set("rn",this.N.toString());0<=a&&this.A.set("rbuf",(1E3*a).toFixed().toString());a=g.RA(this.A);try{var e=(0,g.z)(this.GG,this),f=(0,g.z)(this.JG,this),k=(0,g.z)(this.IG,this),l=(0,g.z)(this.HG,this);this.g=this.C.U&&"function"==typeof window.fetch&&
window.ReadableStream&&GJ(this)?new uJ(a,f,k,e,l,this.C):new zJ(a,f,k,e,l)}catch(m){this.F="net.ssl";FJ(this,7);return}0<this.C.N&&(this.D=g.Es((0,g.z)(this.Du,this),this.C.N))};
g.h.JG=function(){this.T=0;this.info.o.C=(0,g.Ru)();var a=DJ(this);a.A=(0,g.Ru)();a.o+=1;a=this.timing;a.o=(0,g.F)();a.D=a.o;a.A=0;a.N=a.o;a.K=0;a.F&&(a.F=[]);a.Y=!1;a.aa=!1;a.C=0;a.H=EC(a.g);sJ(a);a.T=(a.U-a.o)/1E3};
g.h.IG=function(a){if(!this.fa()){this.B=this.g.status;LJ(this,!1);var b=this.timing,c=a.timeStamp;a=a.loaded;c=c>b.o&&4E12>c?c:(0,g.F)();pJ(b,c,a);50>c-b.D&&(qJ(b)||!b.g.policy.J)||oJ(b,c,a);b=this.timing;b.A>b.ha&&b.A>b.g.policy.g&&4>this.state?FJ(this,4):IJ(this)&&KJ(this)&&FJ(this,Math.max(3,this.state))}};
g.h.HG=function(){if(!this.fa()&&!this.K&&this.g.Pq()&&this.g.ag("X-Walltime-Ms")){var a=(0,window.parseInt)(this.g.ag("X-Walltime-Ms"),10);this.K=((0,g.F)()-a)/1E3}};
g.h.GG=function(){var a=this.g;if(!this.fa()&&a){this.D&&(g.Cs(this.D),this.D=window.NaN);this.B=a.status;var b=!1;if(400<=a.status)b=!0,this.F="net.badstatus";else if(a.Nq()){var c="";JJ(this)&&(c=a.Nr(),2048<c.length?c="":(c=String.fromCharCode.apply(String,c),c=KA.test(c)?c:""));if(c){a=DJ(this);(0,g.Ru)();a.o=0;a.Kd=0;a.g=0;a=this.info;var d=this.A,e=a.o;d.g===e.A&&(e.A=SA(d,c));d.g===e.o&&(e.o=SA(d,c));a.requestId=d.get("req_id");FJ(this,5)}else if(c=a.Ol(),(d=!!this.H&&this.H.length)&&d!=c||
a.yu())b=!0,this.F="net.closed";else{LJ(this,!0);e=GJ(this)?this.g.ag("X-Bandwidth-Est"):0;a=this.timing;d=(0,g.F)();e=e?(0,window.parseInt)(e,10):0;if(!a.Y){a.Y=!0;d=d>a.o&&4E12>d?d:(0,g.F)();pJ(a,d,c);oJ(a,d,c);a.J&&e?wC(a.g,a.A/e,a.A):(e=(d-a.o)/1E3,(e<=a.g.policy.A||!a.g.policy.A)&&!a.aa&&qJ(a)&&wC(a.g,e,c),qJ(a)&&yC(a.g,c,a.C));c=a.g;d=(d-a.o)/1E3;e=a.T;var f=a.ca;c.C.g(d,a.A/d);c.F=(0,g.Ru)();f||c.o.g(1,d-e);a.B&&(a.B=!1)}a=DJ(this);(0,g.Ru)();a.o=0;a.Kd=0;a.g=0;this.info.o.g=0;FJ(this,6)}}else b=
!0,this.F="net.connect";b&&(EJ(this),(0,g.F)(),"net.connect"==this.F?(b=DJ(this),b.Kd+=1):(b=DJ(this),b.g+=1),this.info.o.g++,FJ(this,7))}};
g.h.Du=function(){this.D=window.NaN;if(!this.fa()){var a=(0,g.F)(),b=!1;if(qJ(this.timing)){var c=this.timing.U;sJ(this.timing);this.timing.U-c>=.8*this.C.N?(this.T++,b=this.T>=this.C.Aa):this.T=0}else b=this.timing,b=5E3<a-(b.o+1E3*b.H.delay);if(b){b=this.timing;a=a>b.o&&4E12>a?a:(0,g.F)();pJ(b,a,1024*b.K);c=(a-b.o)/1E3;if(!b.J)if(qJ(b))b.C+=(a-b.D)/1E3,yC(b.g,b.Z,b.C);else{var d=b.g;d.D.g(1,c);xC(d);b.V=a}d=b.g;var e=b.T,f=b.ca;d.C.g(c,b.A/c);d.F=(0,g.Ru)();f||d.o.g(1,c-e);AC(b.g,(a-b.D)/1E3,0);
b=DJ(this);b.Kd+=1;this.info.o.g+=1;HJ(this);this.F="net.timeout";FJ(this,7)}else this.D=g.Es((0,g.z)(this.Du,this),this.C.N)}};
g.h.fa=function(){return-1==this.state};
g.h.dispose=function(){Qz(this.info.g[0])&&6!=this.state&&(this.info.g[0].ea.o=!1);FJ(this,-1);this.J=null;HJ(this);g.Cs(this.D);this.D=window.NaN};
AJ.DEBUG=!1;g.p(MJ,g.R);bK.prototype.start=function(){this.o=!0};
bK.prototype.reset=function(){this.g=this.o=!1};cK.prototype.Y=function(a,b){switch(b.info.type){case 1:case 2:this.V(b);break;case 4:var c=b.info.ea.Sr(b),d=b.info,e=this.g;e&&e.ea==d.ea&&e.type==d.type&&(d.range&&e.range?e.range.start==d.range.start&&e.range.end==d.range.end:e.range==d.range)&&e.ra==d.ra&&e.Ea==d.Ea&&e.La==d.La&&(this.g=g.jb(c).info);(0,g.G)(c,(0,g.z)(this.Y,this,a));break;case 3:QJ(this.o,a,b)}};
cK.prototype.V=function(a){if(1==a.info.type){var b=qA(a);Yx(a.info.ea.info)&&!Zx(a.info.ea.info)&&(eA(new Yz(b)),dA([408125543,374648427,174,224],21936,b));a.info.ea.info.video&&bB(a.info.ea,b);2==a.info.ea.info.containerType&&a.info.ea.info.video&&fA(b)}a.info.ea.wm(a)};
cK.prototype.Z=function(a){this.B=a=a.info;this.H&&this.B.g&&(this.H=!1);a.ea.info.g>=this.J&&(this.J=a.ea.info.g)};
cK.prototype.getDuration=function(){return this.Da.index.sj()};QK.prototype.send=function(){g.Us(this.o,{format:"RAW",responseType:"arraybuffer",timeout:1E4,Nc:this.A,Oc:this.A,context:this});this.g=(0,g.Ru)()};
QK.prototype.A=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:(((0,g.Ru)()-this.g)/1E3).toFixed(3),shost:g.Gg(this.o),trigger:this.D};204==a.status||a.response?this.B&&this.B(LE(b)):this.C(new g.KE("pathprobe.net",!1,b))};var vZ=1024/48E3;g.E(YK,g.I);YK.prototype.D=function(a){for(var b=arguments.length-1;0<=b;b--){var c=arguments[b];if(c){g.xb(this.o,c);var d=this.g,e=d.g;c=g.Gb(e,c,d.o);0<=c&&g.vb(e,c)}}this.A()};
YK.prototype.reset=function(){this.C=this.J=!1;this.F.stop();this.g.g=[];this.o=[];this.A();this.H=null};
YK.prototype.A=function(){this.K=!0;if(!this.N){for(var a=3;this.K&&a;){this.K=!1;this.N=!0;if(this.C&&!this.J){this.F.stop();var b=this.T();g.T(b,32)&&this.U.start();for(var c=g.T(this.T(),2)?0x8000000000000:1E3*this.aa(),d=g.T(b,2),e=[],f=[],k=0;k<this.o.length;k++){var l=this.o[k];l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l)}e=e.concat(bL(this,f));if(d)b=UK(this.g,0x7ffffffffffff),b=b.concat(WK(this.g));else if(this.B<=c&&b.sb()&&!g.T(b,16)&&!g.T(b,32)){b=this.g;d=c;f=[];for(k=
VK(b,this.B);k<b.g.length&&!(l=b.g[k],(l.end<=d||l.contains(d))&&f.push(l),l.start>d);++k);b=f}else b=UK(this.g,c);e=e.concat(aL(this,b));this.B=c;!this.J&&this.H&&(this.H=null);c=e;for(e=0;e<c.length;e++)b=c[e],d=b[1],1==b[0]?(d.g&&d.g.R("onEnter",d),this.V("crn_"+d.namespace,d)):(d.g&&d.g.R("onExit",d),this.V("crx_"+d.namespace,d))}this.N=!1;a--}this.T().sb()&&(a=XK(this.g,this.B),null!=a&&0x7ffffffffffff>a&&(a=(a-this.B)/this.Y(),this.F.start(a)))}};
YK.prototype.W=function(){this.H=this.g=this.o=null;YK.ga.W.call(this)};g.p(cL,g.R);g.h=cL.prototype;g.h.initialize=function(a,b,c,d){a=a||0;var e=this.F;d=d&&d.id;e.F="i";"auto"!=qy()&&(e.F="s");DK(e,b);MK(e,d);e.T=e.B;NK(e);e.o=e.g;b=LK(e);this.B=new cK(this.A,b.audio);this.g=new cK(this.A,b.video);AL(this,this.B);AL(this,this.g);this.g.o.U=this.B.o;this.R("videoformatchange",b);this.V=this.g.D;this.C=a;c?(this.H=!0,uL(this)):this.A.D?gL(this):(a=0==this.C,eL(this,this.g,a),eL(this,this.B,a),this.seek(this.C),fL(this,"gv"))};
g.h.resume=function(){if(this.H||this.Z)this.Z=this.H=!1};
g.h.KF=function(a){if(!this.fa()&&3<=a.state){var b=a.info.g[0].ea,c=!this.ha&&b.info.video,d=!this.Y&&b.info.audio,e=Math.max(0,a.info.g[0].A-this.C);if(this.A.wa&&5<=a.state){var f=nJ(a.timing),k=a.timing;f={rn:a.N.toString(),rt:f.rt,pt:f.pt,stall:f.stall,elt:f.elbowTime,elb:f.elbowBytes,rqd:k.F?k.F.join(""):""};k=f.rqd;delete f.rqd;if(k)for(var l=0;256*l<k.length;l++)this.Wf("rqd",LE({rn:f.rn,ix:l,d:k.substring(256*l,256*(l+1))}));this.Wf("rqs",LE(f))}if(5<=a.state&&5==a.info.g[0].type)a.dispose();
else{if(5==a.state)c?fL(this,"vrr"):d&&fL(this,"arr"),a.start(e);else if(6==a.state||this.A.U&&3<=a.state&&!(5<=a.state)){c?(this.ha=a.A?g.RA(a.A):"",cv(4)):d&&(this.Y=a.A?g.RA(a.A):"");b=b.info.video?this.g:this.B;this.D.o&&(b.D=!1,a.K&&this.Ha.g(1,a.K));if(c=Qz(a.info.g[0]))c=a.info,c=!!Qz(c.g[c.g.length-1]);c&&(0,g.G)(a.o.A,b.V,b);this.Xc()}else if(4==a.state)this.Xc(),c&&cv(4);else if(7==a.state&&EJ(a)){d=(b.info.video&&1<b.B.g||410==a.B||500==a.B||503==a.B)&&10&&!IK(this.F);e=CJ(a);c=b.info.video?
this.g:this.B;d&&(e.stun="1");zL(this,!1,a.Ud(),e);if(this.fa())return;d&&(d=this.F,b=b.info,IK(d),d.ca=b,d.V=(0,g.Ru)(),d.U=-1,DK(d,d.D));for(b=0;b<c.A.length&&a!==c.A[b];b++);if(b==c.A.length)jK(c,a);else{for(;b<c.A.length;)jK(c,c.A.pop());3==a.info.g[0].type?(a.o&&a.o.B?(b=a.o.B,b=new Oz(b.type,b.ea,b.range,b.ra,b.startTime+b.duration,0,b.Ea+b.La,0,!1)):(b=a.info.g[0],b=new Oz(b.type,b.ea,b.range,b.ra,b.startTime,0,b.Ea,0,!1)),c.g=b):c.g=null}this.Xc()}else Qz(a.info.g[0])?(b.D=!0,this.Xc()):zL(this,
!0,"net.retryexhausted",CJ(a));this.A.Qa&&5<=a.state&&EJ(a)&&VA(a.info.o,this.Ja)&&(b=wA(this.Ja,HA(a.info.o.A)),c=this.A.Qa*Math.pow(1.6,b.o),b.g||b.A+c>(0,g.Ru)()||(a=a.info,a.range?(b=Mz(a.range.start,Math.min(4096,a.range.length)),a=new Oz(5,a.g[0].ea,b),a=new YA([a]),a.C=!1):a=null,a&&rL(this,a)))}}};
g.h.Xc=function(){this.Ka=window.NaN;this.Qa.stop();kL(this);if(this.o&&Cz(this.o)&&!Ez(this.o))if(this.D.isLive)(0,window.isNaN)(this.J)?(this.J=this.C+3600,this.o.A.duration=this.J):this.J<=this.C+1800&&(this.J=Math.max(this.J+1800,this.C+3600),this.o.A.duration=this.J);else{var a=Math.max(this.B.getDuration(),this.g.getDuration());(!(0,window.isFinite)(this.J)||this.J!=a)&&0<a&&(this.J=this.o.A.duration=a)}if(!this.fa())if(TB(this.D)&&3==this.D.F)zL(this,!0,"manifest.net.retryexhausted",{rc:this.D.T.toString()});
else if(this.D.isLive&&(vK(this.g)||vK(this.B)))this.R("seekplayerrequired",window.Infinity);else if("prerender"==window.document.webkitVisibilityState)uL(this);else if(kL(this),fK(this.g,this.C),!this.fa()&&(fK(this.B,this.C),!this.fa())){if(this.D.o){wK(this.g);wK(this.B);var b=-1!=this.g.C;a=-1!=this.B.C;if(!b||!a)if(b=!b&&NJ(this.g.o),a=!a&&NJ(this.B.o),b||a){a=b?this.g:this.B;b=b?this.B:this.g;var c=NJ(a.o).info.ra;if(-1!=b.C&&b.C!=c){var d=b.C;nK(a,0);iK(a,window.Infinity);a.g.ra=d-1;zL(this,
!1,"qoe.avsync",{start:"1",target:b.C,actual:c})}else a.C=c}(a=NJ(this.g.o))&&a.o&&(this.xa=NJ(this.g.o).o.D)}this.A.D&&(this.B.Da.o&&this.g.Da.o||(!this.H||FC(this.N)?gL(this):uL(this)));if(this.o&&!lL(this,this.B,this.o.g)&&!lL(this,this.g,this.o.o)&&!vL(this)){if(this.T){a=!!this.T.g;b=this.T;var e=this.B;c=vH(this.o.o.buffered);if(b.g)b:if((d=(0,g.F)()/1E3-b.B<b.o.Xa)&&!b.g.fa()&&!(5<=b.g.state)&&rJ(b.g.timing)<b.A)b=window.NaN;else{e=SK(b,b.C,b.D);if(!(0,window.isNaN)(e)&&((0,window.isNaN)(c)||
c<e)){if(d){b.F=!0;b=window.NaN;break b}e=window.NaN}b.g=null;b.C=null;b.D=null;b.A=window.NaN;b.B=window.NaN;b.F=!1;b=e}else{if((c=NJ(e.o))&&(d=c.o)&&d.D&&d.C&&(e=e.A.length?e.A[0]:null)&&3<=e.state&&7!=e.state&&IJ(e)&&0==e.info.A&&SK(b,d,c.info)){var f=b.o.Hi*vZ;b.g=e;b.C=d;b.D=c.info;b.A=f;b.B=(0,g.F)()/1E3}b=window.NaN}c=!!this.T.g;a!=c&&this.Wf("ssr",c?"start":"stop."+b);b&&this.R("seekplayerrequired",b,!0)}(a=xL(this,this.g,this.o.o,null))&&!this.pa&&(this.pa=(0,g.F)(),fL(this,"vda"),g.PF("vda",
void 0,"video_to_ad"),this.ka&&cv(4));if(!Dz(this.o)){b=uH(this.o.o.buffered,this.C+qL);if(!(0,window.isNaN)(b)||hK(this.g)||!this.o.g.buffered.length){if(hK(this.g)||this.A.Ie)b=window.NaN;b=xL(this,this.B,this.o.g,b);a=a||b;b&&!this.ka&&(this.ka=(0,g.F)(),fL(this,"ada"),g.PF("ada",void 0,"video_to_ad"),this.pa&&cv(4))}hK(this.g)&&hK(this.B)&&Cz(this.o)&&!Ez(this.o)&&(b=this.o,Cz(b)&&b.A.endOfStream(),b=this.N,py(EC(b)),b.B=(0,g.Ru)());a&&!Gz(this.o)&&tL(this)}}dL(this);this.A.D||(eL(this,this.g,
!1),eL(this,this.B,!1));this.g.Da.D||this.B.Da.D?zL(this,!0,"net.retryexhausted",{metadata:"1",video:this.g.Da.D?"1":"0",audio:this.B.Da.D?"1":"0"}):(oL(this,this.g,this.B)&&sL(this,this.g,this.B),oL(this,this.B,this.g)&&sL(this,this.B,this.g),this.A.Je&&this.aa&&!this.H&&FC(this.N)&&(BL(this,this.aa,"cms"),this.aa="",this.A.Bf&&(a=FA(JA(this.B.Da.B.B,0)),BL(this,a,"redir"),BL(this,a.replace("redirector.googlevideo.com","www.youtube.com"),"www-redir"))),this.D.B&&uL(this),this.T&&(a=this.T,a.g?(b=
0,a.g.fa()||5<=a.g.state||(b=1E3*(a.A-rJ(a.g.timing))),a=0<b?b+1:a.F?Math.max(0,1E3*(a.B+a.o.Xa)-(0,g.F)()):0):a=window.NaN,(0,window.isNaN)(a)||this.Qa.Jc(a)))}};
g.h.Zj=function(a){a=(a=a?this.B:this.g)&&a.B;zL(this,!0,"fmt.unplayable",a?Uz(a):void 0)};
g.h.PE=function(a){zL(this,!0,"fmt.unparseable",a)};
g.h.TE=function(a){zL(this,!1,"qoe.avsync",a)};
g.h.QE=function(a,b){this.D.o&&yL(this,b,a==this.g)};
g.h.RE=function(a,b){if(this.D.o){var c=this.D,d=a==this.g,e;for(e in c.g)if(!!c.g[e].info.video==d){var f=c.g[e].index,k=eB(f,b.ra);0<=k&&f.segments.splice(k,1)}}};
g.h.SE=function(a,b){this.D.o&&yL(this,b,a==this.g)};
g.h.OE=function(a,b){if(this.g.Da.index.Jb()<=b){var c=this.D;c.N.push(a);c.R("cuepointsadded")}};
g.h.seek=function(a){if(this.fa())return Uf();if(this.g.D||this.B.D)return Tf();kL(this);this.Va=(0,g.Ru)();dL(this,a);var b=this.g.g,c=CL(this,this.g,a,this.o&&this.o.o),d=CL(this,this.B,c,this.o&&this.o.g);this.C=Math.max(a,c,d);this.U=!0;this.D.o&&this.A.ka&&(c=this.g.g.ra,fB(this.g.Da.index,c)||b&&b.ra==c||(this.V=!0));tL(this);return Tf(a)};
g.h.W=function(){jL(this);this.B&&(kK(this.B),kK(this.g));g.Bs(this.Sa);g.Cs(this.ca);this.Qa.dispose();g.R.prototype.W.call(this)};
g.h.Pr=function(){return this.Ha.o()||0};
g.h.Wf=function(a,b,c){this.R("ctmp",a,b,void 0===c?!1:c)};
var qL=2/24;g.p(KL,g.I);g.h=KL.prototype;g.h.WA=function(a){this.F.call(this.A,new window.Uint8Array(a.message))};
g.h.XA=function(){this.K.call(this.A,this.g.keyStatuses)};
g.h.At=function(a,b){g.ws(b);var c=a;b instanceof window.DOMException&&(c+=";n."+b.name+";m."+b.message);this.D.call(this.A,c)};
g.h.Rt=function(a){this.F.call(this.A,a.message)};
g.h.Qt=function(a){if(this.o){var b=this.o.error.code;a=this.o.error.systemCode}else b=a.errorCode&&a.errorCode.code,a=a.systemCode;this.D.call(this.A,";c."+b+";sc."+a)};
g.h.Pt=function(){this.J.call(this.A)};
g.h.update=function(a){if(this.g)return this.g.update(a).then(null,xs((0,g.z)(this.At,this,"t.u")));this.o?this.o.update(a):this.C.addKey?this.C.addKey(this.N.o,a,this.H,this.sessionId):this.C.webkitAddKey(this.N.o,a,this.H,this.sessionId);return tt()};
g.h.W=function(){this.g&&this.g.close();this.C=null;g.I.prototype.W.call(this)};g.p(NL,g.I);NL.prototype.K=function(a){var b=RL(this,a);b&&b.Rt(a)};
NL.prototype.J=function(a){var b=RL(this,a);b&&b.Qt(a)};
NL.prototype.H=function(a){(a=RL(this,a))&&a.Pt()};
NL.prototype.W=function(){this.o=null;g.I.prototype.W.call(this)};g.p(TL,g.I);g.h=TL.prototype;g.h.Tr=function(a){this.T=a};
g.h.UA=function(a){if(!this.fa()){this.K||(g.PF("drm_gk_f"),this.K=!0,this.o.R("newsession",this));if(cC(this.B)){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new window.DOMParser).parseFromString(b,"text/xml").querySelector("Challenge");a=new window.Uint8Array(je(a.childNodes[0].data))}if(dC(this.B))for(b=g.he(a),a=new window.Uint8Array(new window.ArrayBuffer(b.length)),c=0;c<b.length;c++)a[c]=b.charCodeAt(c);a=new HL(a,++this.U);this.Qu(a)}};
g.h.SA=function(){this.fa()||this.D||(this.o.R("sessionready"),this.D=!0)};
g.h.VA=function(a){var b=this;this.fa()||(a.forEach(function(a,d){var c=cC(b.B)?d:a,f=g.he(new window.Uint8Array(cC(b.B)?a:d),!0).replace(/[\.]{1,2}$/,"");b.g[f]?b.g[f].status=c:b.g[f]={type:"",status:c}}),this.o.R("keystatuseschange",this))};
g.h.Qu=function(a){g.PF("drm_net_s");a={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,rb:(0,g.z)(this.CE,this,a),onError:(0,g.z)(this.Kt,this,a)};var b=this.J;if(this.T){var c=this.T;b=Sg(g.Wg(b,"access_token"),"access_token",c)}g.Us(b,a)};
g.h.CE=function(a,b){if(!this.fa())if(0!=b.status&&b.response){g.PF("drm_net_r");var c=new window.Uint8Array(b.response);if(c=JL(c))if(0!=c.statusCode)VL(this,"drm.auth",!0,"t.f;c."+c.statusCode,g.qH(c.statusCode));else{g.PF("drm_kr_s");var d=null,e=c.headers["Heartbeat-Url"];e&&(d=new GL(e,(0,window.parseInt)(c.headers["Heartbeat-Interval-Secs"],10)||60,(0,window.parseInt)(c.headers["Heartbeat-Num-Retries"],10)||4));d&&this.o.R("newlicense",d);!(d=c.headers["Authorized-Format-Types"])||cC(this.B)&&
!this.Y||(this.H=d.split(","),LL(this.A)||this.o.R("keystatuseschange",this));c.headers["Key-Ids"]&&(this.g=WL(c.headers["Key-Ids"]));dC(this.B)&&(c.message=new window.Uint8Array(je(String.fromCharCode.apply(null,c.message))));this.A.update(c.message).then(function(){g.PF("drm_kr_f")});
this.D&&(this.N=(0,g.Ru)())}else VL(this,"drm.net",!0,"t.p","YTP_ERROR_SERVER_ERROR")}else this.Kt(a,b)};
g.h.TA=function(a){this.fa()||VL(this,"drm.keyerror",!0,"t.s"+a)};
g.h.Kt=function(a,b){var c=!1;if(3<=a.g.o||this.V&&36E4<(0,g.Ru)()-this.N){var d="drm.net.retryexhausted";c=!0}else d=b.status?"drm.net.badstatus":"drm.net.connect";VL(this,d,c,"t.r;c."+b.status);if(this.V&&this.D?0:!c&&this.U==a.number)d=a.g.getValue(),d=new g.O((0,g.z)(this.Qu,this,a),d),g.J(this,d),d.start(),d=a.g,d.g=Math.min(d.C,d.g*d.F),d.A=Math.min(d.C,d.g+(d.D?Math.round(d.D*(Math.random()-.5)*2*d.g):0)),d.o++};
g.h.W=function(){this.o=null;g.I.prototype.W.call(this)};ZL.prototype.get=function(a){a=this.th(a);return-1!=a?this.values[a]:null};
ZL.prototype.remove=function(a){a=this.th(a);-1!=a&&(this.keys.splice(a,1),this.values.splice(a,1))};
ZL.prototype.set=function(a,b){var c=this.th(a);-1!=c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
ZL.prototype.th=function(a){return g.ob(this.keys,function(b){return g.Mb(a,b)})};g.p(aM,g.R);g.h=aM.prototype;g.h.mE=function(a){a=new ML(new window.Uint8Array(a.initData),a.initDataType);dM(this,a,!0)};
g.h.fF=function(a){dM(this,new ML(a.initData,a.contentType),!0)};
g.h.ME=function(){this.fa()||(this.J=!0,cM(this))};
g.h.AD=function(a){if(!this.fa()){g.ws(a);var b="t.a";a instanceof window.DOMException&&(b+=";n."+a.name+";m."+a.message);this.R("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}};
g.h.iF=function(a){this.fa()||!a||this.V||(this.V=a,this.R("heartbeatparams",a))};
g.h.jF=function(){this.fa()||(this.o.shift(),cM(this))};
g.h.WF=function(){if(bC(this.g)&&(this.aa--,0==this.aa)){var a=this.C;a.o.msSetMediaKeys(a.A)}};
g.h.YA=function(a){if(!this.fa()){var b=[];if(LL(a.A))for(var c in a.g)"usable"==a.g[c].status&&b.push(a.g[c].type);else b=a.H;a=b;a=g.rb(a,"UHD2")?"highres":g.rb(a,"UHD1")?"hd2160":g.rb(a,"HD")?"hd1080":g.rb(a,"HD720")?"hd720":"large";ny(this.H,a)||(this.H=iy("auto",a,!1),this.R("qualitychange"))}};
g.h.W=function(){this.g.A&&this.K.setMediaKeys(null);this.K=null;this.o=[];for(var a=g.na(this.A.values),b=a.next();!b.done;b=a.next())b.value.dispose();a=this.A;a.keys=[];a.values=[];this.B&&(this.B.dispose(),this.B=null);this.D=null;g.R.prototype.W.call(this)};gM.prototype.C=function(){var a=g.y("yt.abuse.botguardInitialized");return a&&a()?(a=g.y("yt.abuse.invokeBotguard")())?"r1a="+a:null:null};
gM.prototype.D=function(a){return"r3a="+Math.floor(this.g.lengthSeconds%fb(a.c3a))};
gM.prototype.B=function(a){a=fb(a.c);var b=g.y("yt.abuse.dclkstatus.checkDclkStatus")();return"r6a="+(a^b)};kM.prototype.then=function(a,b){return this.ou.then(a,b)};
kM.prototype.resolve=function(a){this.g(a)};
kM.prototype.reject=function(a){this.o(a)};
g.p(lM,g.R);lM.prototype.getCurrentTime=function(){return(0,window.isNaN)(this.A)?this.o?this.o.getCurrentTime():window.NaN:this.A};g.E(rM,AH);g.h=rM.prototype;g.h.la=function(){return this.g};
g.h.Ic=function(){return this.g.src};
g.h.Tb=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.h.de=function(a){this.Tb()!=a&&(this.g.playbackRate=a);return a};
g.h.fn=function(a,b){return this.g.canPlayType(a,b)};
g.h.getCurrentTime=function(){return this.g.currentTime};
g.h.getDuration=function(){return this.g.duration};
g.h.load=function(){var a=this.g.playbackRate;this.g.load();this.g.playbackRate=a};
g.h.pause=function(){this.g.pause()};
g.h.play=function(){var a=this.g.play();a&&a.then&&a.then(void 0,function(a){1E-4>Math.random()&&g.ws(a)})};
g.h.Ud=function(){return this.g.error?this.g.error.code:null};
g.h.setSize=function(a){return g.Jh(this.g,a)};
g.h.getVolume=function(){return this.g.volume};
g.h.setVolume=function(a){sz();this.g.volume=a};
g.h.EI=function(a){this.dispatchEvent(new NH(this,a.type,a))};
g.h.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.h.removeAttribute=function(a){this.g.removeAttribute(a)};
g.h.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.h.W=function(){for(var a in this.B)this.g.removeEventListener(a,this.B[a]);rM.ga.W.call(this)};g.E(sM,g.I);g.h=sM.prototype;g.h.start=function(){this.o.start()};
g.h.stop=function(){this.o.stop()};
g.h.yk=function(a,b,c){this.A[a]=b;this.g[a]=new uM(!!c)};
g.h.clear=function(){for(var a in this.g)this.g[a].clear()};
g.h.iH=function(){for(var a in this.A)this.g[a].update(this.A[a]());this.o.start()};
uM.prototype.update=function(a){this.A?(XI(this.g,a-this.o||0),this.o=a):XI(this.g,a)};
uM.prototype.clear=function(){this.g.clear();this.o=0};g.p(AM,g.R);g.h=AM.prototype;g.h.W=function(){g.Cs(this.ha);g.Bs(this.fb);g.Cs(this.Db);var a=vM();a&&window.document.removeEventListener(a,this.Ge,!1);DM(this);EM(this);BM(this);bN(this);g.Le(this.ka,this.g);this.Z=null;this.Va=!1};
g.h.getVideoData=function(){return this.g};
g.h.Ep=function(){if(this.g.Nb())g.T(this.A,128)||(this.g.Nb(),this.bc=this.Ja.g=!0,4!=this.dd&&(this.ca=g.Ab(this.g.ad)),g.NG(this.g,this.C,this.Ka).then(this.jq,this.jq,this),this.Fc("loudness",""+this.g.relativeLoudness.toFixed(3),!0));else{var a=this.g;if(a.va&&a.adaptiveFormats&&!a.Oq&&(g.$G(a)||this.C.experiments.g("html5_manifestless_always"))){a=this.g;var b=this.C.experiments;if(!IG(a)){a.Oq=!0;var c=HB(MG(a,a.adaptiveFormats),a.Yb,a.lengthSeconds,!0,b);!b.g("html5_manifestless_vp9")&&HG(c)||
a.zm?c.dispose():(a.qh=!1,LG(a,c),c.subscribe("cuepointsadded",a.Cp,a),CB(a.oa)&&(a.Dg=!0));KG(a)}}else if(this.g.qh)a=this.g,b=this.C.experiments,a.df=!0,a.qh=!1,KA.test(a.jd)||g.ws(Error("DASH MPD Origin invalid: "+a.jd),"WARNING"),c=a.jd,c=g.Rg(c,{mpd_version:b.o("dash_manifest_version")||4}),a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||!b.g("html5_live_disable_dg_pacing")||(c=g.Rg(c,{pacing:0})),QB(new BB(c,b,a.va),c).then(a.dE,a.cE,a),g.PF("mrs");else if(this.g.Dg)this.D&&(a=this.D.o,
sI(a,"protected"),a.g.videoData.ae?a.pa():a.g.videoData.subscribe("dataloaded",a.pa,a)),a=this.g,b=this.C.T,c=this.C.experiments,CB(a.oa),b=new iC(TC(b,a.oa),c),g.J(a,b),a.Dg=!1,a.df=!0,a=(0,g.z)(a.uz,a),b.B=a,gC(b.C)?b.D():nC(b);else if(!this.g.df&&this.bc){a:{b=this.C;a=this.g;var d=this.Xa.Ga(),e=this.Ie(),f=this.C.ca;switch(a.lf){case 38:b=a.videoId.indexOf(":");a=g.Rg("//play.google.com/books/volumes/"+a.videoId.slice(0,b)+"/content/media",{aid:a.videoId.slice(b+1),sig:a.kD});break a;case 30:c=
"https://docs.google.com/get_video_info";b.experiments.g("restore_nonsense_docs_behavior")&&b.baseYtUrl!=sE.prototype.baseYtUrl&&(c=b.baseYtUrl+"get_video_info");a=g.Rg(c,{docid:a.videoId,authuser:a.Ib,authkey:a.pp,eurl:b.pa});break a;case 33:a=g.Rg("//google-liveplayer.appspot.com/get_video_info",{key:a.videoId});break a;default:c={html5:"1",video_id:a.videoId,cpn:a.clientPlaybackNonce,eurl:b.pa,ps:b.g,el:uE(a,b),hl:b.jc,list:a.playlistId,agcid:a.zx,aqi:a.yx,sts:17353,lact:g.Wu()},g.Ja(c,b.A),b.pe&&
(c.ecver=b.pe),b.forcedExperiments&&(c.forced_experiments=b.forcedExperiments),a.ie?(c.vvt=a.ie,a.mdxEnvironment&&(c.mdx_environment=a.mdxEnvironment)):a.oauthToken&&(c.access_token=a.oauthToken),a.adFormat&&(c.adformat=a.adFormat),b.Pe&&(c.cc_lang_pref=b.Pe),b.Qe&&2!=b.Qe&&(c.cc_load_policy=b.Qe),b.mute&&(c.mute=b.mute),a.Ne&&2!=b.Ne&&(c.iv_load_policy=a.Ne),a.Ej&&(c.itct=a.Ej),vE(b,a,f)&&(c.autoplay="1"),a.Hj&&(c.autonav="1"),a.Im&&(c.noiba="1"),a.isMdxPlayback&&(c.mdx="1",c.ytr=a.De),a.mdxControlMode&&
(c.mdx_control_mode=a.mdxControlMode),a.Lp&&(c.ytrcc=a.Lp),a.Lm&&(c.utpsa="1"),a.isFling&&(c.is_fling="1"),a.vnd&&(c.vnd=a.vnd),a.Ml&&(c.force_ad_param_ad_type="video_ad",c.force_ad_param_url=a.Ml,c.force_ad_param_break_type="1",c.force_ad_param_offset_value=0),d.width&&(c.width=d.width),d.height&&(c.height=d.height),a.Zd&&(c.splay="1"),a.ypcPreview&&(c.ypc_preview="1"),b.Ka&&(c.content_v=b.Ka),a.Kh&&(c.livemonitor=1),b.Ib&&(c.authuser=b.Ib),b.pageId&&(c.pageid=b.pageId),b.bc&&(c.ei=b.bc),b.Le&&(c.ssl_stream=
"1"),b.o&&(c.iframe="1"),a.uf&&(c.tst=a.uf),a.contentCheckOk&&(c.cco="1"),a.racyCheckOk&&(c.rco="1"),b.jb&&a.liveStartWalltime&&(c.live_start_walltime=a.liveStartWalltime),b.jb&&a.Pm&&(c.live_manifest_duration=a.Pm),b.jb&&a.playerParams&&(c.player_params=a.playerParams),b.jb&&a.cycToken&&(c.cyc=a.cycToken),b.jb&&a.kv&&(c.tkn=a.kv),0!=e&&(c.vis=e),b.enableSafetyMode&&(c.enable_safety_mode="1"),b.widgetReferrer&&(c.widget_referrer=b.widgetReferrer.substring(0,128)),(d=b.U.embedding_app)&&(c.embedding_app=
d),(d=b.U.developer_api_key)&&(c.developer_api_key=d),(d=g.JG(a))&&(c.uloc=d),a.Jh&&(c.internalipoverride=a.Jh),a.innertubez&&(c.innertubez=a.innertubez),a.Vq&&(c.strpro="1"),b.jb&&a.Lf&&(c.wpid=a.Lf),a=g.Rg(b.baseYtUrl+"get_video_info",c)}}b=2;this.C.isAd()&&(b=0);c=this.g;d=this.C.Sa;e=this.C.experiments;f=this.C.Mb;c.fa()||(c.Wl=a,c.Qn=b,c.Ug=!!d,c.Xq=!!f,e&&(c.Eu=!e.g("disable_gvi_cors"),c.Vl=e.o("html5_get_video_info_timeout_ms")||0,c.xq=e.g("html5_get_video_info_promiseajax")),c.df=!0,c.Nu())}}};
g.h.jq=function(){if(GG(this.g)){if(this.g.va){this.T=new YI;this.U=new $I(this.g,this.C.experiments);if(this.D){var a=aJ(this.U);pI(this.D.o,a)}RM(this,uN(this,!1),!0)}this.g.Ra.g&&g.qN(this);pN(this,"i");this.T&&(this.g.ec()?(a=(0,g.z)(this.B.Pr,this.B),this.T.A=a):this.g.oa&&(a=(0,g.z)(this.g.oa.OA,this.g.oa),this.T.A=a))}this.Qa&&iN(this);a=this.g;a.endSeconds&&a.endSeconds>a.startSeconds&&FM(this,a.endSeconds);HM(this,"dataloaded");this.V.o?OM(this):this.Qa&&IM(this,RH(RH(this.A,512),1))};
g.h.logEvent=function(a,b){if(this.D){var c=this.D,d={};d.rt=g.gH(c.g).toFixed(3);g.Ja(d,dI(c.g));var e=c.g.g,f=c.g.videoData,k=f.Nn||e.jg;k={ns:e.Va,html5:"1",el:uE(f,e),ps:e.g,fexp:e.experiments.experimentIds.join(",")||void 0,feature:k||void 0,ctrl:f.pf||void 0,ytr:f.De||void 0,list:f.playlistId,d:e.ne,f:e.gh};if(e.experiments.g("legacy_autoplay_flag")?e.da:f.mf)k.autoplay="1";f.subscribed&&(k.subscribed=f.subscribed);g.Ja(d,k);delete d.fexp;g.Ja(d,a);d=g.Ns(c.g.g.baseYtUrl+"player_204",d);BI(c,
d,b)}};
g.h.isPeggedToLive=function(){return this.Aa};
g.h.Vz=function(){return this.A};
g.h.getPlayerType=function(){return this.dd};
g.h.bn=function(){var a=this.getVideoData(),b=a.tc;if(!b)return a.ij;var c=g.nb(this.g.Ra?this.g.Ra.audioTracks:[],function(a){return a.id==b.id});
return c?c:a.ij};
g.h.yG=function(){this.C.experiments.o("html5_background_quality_cap")&&this.B&&pN(this,"v");this.C.ol&&!this.g.backgroundable&&this.o&&(wM()&&this.o.o?(this.Fc("bgmobile","suspend"),$M(this,!0)):iN(this)&&this.Fc("bgmobile","resume"))};
g.h.NE=function(a){if(this.pe)this.cd=!0;else{var b=this.getDuration();!b&&this.g.ec()&&(b=3600);a.A.duration=b;g.hL(this.B,a)}};
g.h.xE=function(a){if(this.H){var b=this.H;if(bC(b.g)){for(var c=new window.Uint8Array(0),d=new window.DataView(a.buffer,a.byteOffset,a.length),e=0;e<a.length-8;){var f=d.getUint32(e);if(1>=f)break;var k=d.getUint32(e+4);if(1836019574==k)e+=8;else{if(1886614376==k){k=a.subarray(e,e+f);var l=new window.Uint8Array(c.length+k.length);l.set(c);l.set(k,c.length);c=l}e+=f}}a=c;0!=a.length&&dM(b,new ML(a),!1)}}};
g.h.GE=function(a){WM(this,a.reason,a.video.info,a.audio.info);var b=TG(this.g);b&&b.J(a.video);this.T&&(this.T.o=a.audio.index)};
g.h.FE=function(a){VM(this,a.reason,a.audio.info)};
g.h.Gg=function(a){if("html5.invalidstate"==a.errorCode&&this.o){var b=this.o.Ud();a.details.merr=b?b.toString():"0"}b=/^pp/.test(this.g.clientPlaybackNonce);rN(a)?g.T(this.A,4)?(this.oe=!0,EM(this)):fN(this):sN(a)&&this.g.Ra.o?(this.Fc("highrepfallback","1",!0),cH(this.g),mN(this),kN(this)):a.g?(b=this.B?this.B.F.D:null,b=sN(a)&&b&&b.isLocked()?"YTP_ERROR_FORMAT_UNAVALIABLE":void 0,g.KM(this,a.errorCode,b,LE(a.details))):this.D&&(this.D.onError(a.errorCode,LE(a.details)),b&&"manifest.net.connect"==
a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.g.clientPlaybackNonce+"&t="+(0,g.Ru)(),(new QK(a,"manifest",(0,g.z)(function(a){this.Fc("pathprobe",a)},this),(0,g.z)(function(a){this.onError(a.errorCode,LE(a.details))},this.D))).send()))};
g.h.an=function(){if(!(0,window.isNaN)(this.Y)&&this.o){var a=this.getDuration(),b=this.C.experiments.g("legacy_html5_seek_end")?Math.floor(a):uN(this,!1);!this.g.va&&this.Y>=b?(this.Y=a,this.R("endseeking",this),TM(this,!0),yM(this)):(this.B&&this.B.seek(this.Y),(!this.g.va||1<=this.o.g.readyState)&&this.o.Hb(this.Y),this.B&&!g.T(this.A,2)&&IM(this,RH(this.A,16)))}this.ka&&(this.ka.dispose(),this.ka=null);g.T(this.A,32)&&(IM(this,RH(SH(this.A,32),16)),this.R("endseeking",this))};
g.h.getCurrentTime=function(){if(this.N&&!(0,window.isNaN)(this.N.getCurrentTime()))return this.N.getCurrentTime();if(!(0,window.isNaN)(this.Y))return this.Y;var a=0;this.o&&1<=this.o.g.readyState?a=this.o.getCurrentTime():this.g&&(a=this.g.Qd||this.g.startSeconds||0);return a};
g.h.getDuration=function(){return this.g.lengthSeconds?this.g.lengthSeconds:uN(this,!1)?uN(this,!1):0};
g.h.gy=function(){var a=new uC;if(this.B){var b=this.C.schedule;a.C=b.J;a.H=b.K;a.o=CC(b);a.g="d."+zC(b).toFixed(2)+";st."+(1E9*BC(b)).toFixed(2)+";bw."+b.A.o().toFixed(0)+";abw."+b.C.o().toFixed(0)+";v50."+sC(b.o,.5).toFixed(2)+";v92."+sC(b.o,.92).toFixed(2)+";v96."+sC(b.o,.96).toFixed(2)+";v98."+sC(b.o,.98).toFixed(2);b.g&&(a.g+=";ltbw."+b.g.o().toFixed(0));b=this.B;b.o&&!Dz(b.o)&&(a.A=hK(b.g)?b.g.B.o:xH(b.o.o.buffered,b.C),a.D=hK(b.B)?b.B.B.o:xH(b.o.g.buffered,b.C));a.o=AK(b.K)}else this.o&&(a.A=
IH(this.o));this.C.experiments.g("html5_new_e2e_latency_tracking")?a.B=this.qq():this.T&&ZI(this.T,a);return a};
g.h.vG=function(){this.H&&bM(this.H,this.g.oauthToken);HM(this)};
g.h.uG=function(a){g.KM(this,"auth",(0,window.unescape)(a.reason),a.errordetail||"sec."+a.errorcode)};
g.h.Xz=function(a){var b=a.target.Ic();if(this.o&&this.o.Ic()&&this.o.Ic()==b){var c=!1;switch(a.type){case "error":if(!this.oc&&0<this.o.Ud()){this.oc=!0;if(a=this.C.experiments.g("html5_progressive_signature_reload"))a=this.g,a=a.nf?+g.Ls(a.nf.g().g).expire<Date.now()/1E3+1800:!1;this.D&&(c={e:MH(this.o)},this.K&&(c.msopened=""+ +!!this.K.g),a&&(c.stale="1"),this.D.onError("qoe.restart",LE(c)));if(a){fN(this);return}if(cE("philips"))try{window.close()}catch(n){}this.Mn();return}break;case "durationchange":var d=
this.o.getDuration();(!this.K||(0,window.isFinite)(d)&&0<d)&&1!=d&&this.g.lengthSeconds!=d&&(this.g.lengthSeconds=d,HM(this));break;case "ratechange":this.B&&(this.B.K.A=Math.max(1,this.o.Tb()));d=this.F;d.C=!0;d.A();break;case "loadedmetadata":this.g.startSeconds&&(0<(this.o.g.seekable||wH()).length?this.o.g.currentTime=this.g.startSeconds:(this.wa=this.g.startSeconds,TM(this,!0)));case "loadstart":g.Bs(this.fb);this.Dl()||(this.fb=g.Ds((0,g.z)(this.Dl,this),100));break;case "progress":this.wa&&
this.o&&(d=this.o.g.seekable||wH(),d.length&&d.end(0)>this.wa&&(this.o.g.currentTime=this.wa,this.wa=window.NaN,this.jc=this.pa.O(this.o,"canplay",this.eE,this)));case "suspend":vN(this);this.R("onLoadProgress",this,xN(this));g.T(this.A,8)&&(this.Af?c=!0:this.Bf&&((0,window.isNaN)(this.Cc)||this.Cc+1<this.o.getCurrentTime())&&(c=!0,this.Cc=this.o.getCurrentTime()));break;case "seeked":AN(this);break;case "seeking":d=this.C.experiments.g("disable_html5_videoplayer_seeking_time")?this.o.getCurrentTime():
this.getCurrentTime();this.B&&this.B.seek(d);var e=this.Wa;e.g=d;e.o=!0;break;case "playing":this.J.o("plev");g.PF("plev",void 0,"video_to_ad");this.ne&&(this.ne=!1,hN(this)||RM(this,window.Infinity,!0));g.Cs(this.Db);this.Db=window.NaN;break;case "timeupdate":d=this.o&&!this.o.getCurrentTime();e=this.o&&0==this.o.g.readyState;if(d&&(!this.Sa||e))return;this.Sa|=!!this.o.getCurrentTime();this.Dl();AN(this);vN(this);if(!this.o||this.o.Ic()!=b)return;this.R("onVideoProgress",this,this.o.getCurrentTime());
this.T&&this.Aa&&(d=this.T,e=this.o.getCurrentTime(),!d.o||e>=d.B&&e<d.C||(e=d.o.Ve(e),-1!=e&&(d.B=d.o.Ed(e),d.C=d.B+d.o.getDuration(e),e=(0,g.F)()/1E3-d.o.mn(e),d.A&&(e-=d.A()),XI(d.D,e),d.g.push(e))));break;case "waiting":if(0<(this.o.g.played||wH()).length&&0==HH(this.o).length&&0<this.o.getCurrentTime()&&5>this.o.getCurrentTime()&&this.B)return;break;case "resize":this.g.Ca&&"auto"==this.g.Ca.video.quality&&this.R("internalvideoformatchange",this.g,!1)}if(this.o&&this.o.Ic()==b){this.R("videoelementevent",
a);a:{b=this.A;var f=this.Wa,k=this.Cf,l=this.C.experiments.g("html5_timeupdate_readystate_check");if(!g.T(b,128)){d=b.o;e=b.g;var m=a.target;if(!g.T(b,64)||"ended"!=a.type&&"pause"!=a.type)if("pause"==a.type&&m.g.ended||"ended"==a.type&&(m.g.ended||1>Math.abs(m.getCurrentTime()-m.getDuration())))0<m.g.networkState&&m.Ic()&&(d=14,e=null);else if("pause"==a.type)g.T(b,256)?(d^=256)||(d=64):g.T(b,32)||g.T(b,2)||g.T(b,4)||(d=4,g.T(b,1)&&g.T(b,8)&&(d|=1),e=null);else if("playing"==a.type)d=8,e=null,g.T(b,
32)&&(d|=32),k&&g.T(b,1)&&PH(f,m)&&(d|=1);else if("error"==a.type){b:{if(2==m.Ud())f="progressive.net.retryexhausted";else if(3==m.Ud())f="fmt.decode";else if(4==m.Ud())f="fmt.unplayable";else if(5==m.Ud())f="drm.unavailable";else{m=null;break b}l="mediaElem.1";m.g.error&&m.g.error.message&&(l+=";msg."+(m.g.error?m.g.error.message:""));.001>Math.random()&&(l+=";gpu."+MM());m={errorCode:f,errorDetail:l,message:g.Q("YTP_ERROR_GENERIC_WITHOUT_LINK"),messageKey:"YTP_ERROR_GENERIC_WITHOUT_LINK"}}m&&(e=
m,d|=128)}else if("progress"==a.type)VH(b)&&PH(f,m)&&(d|=1);else if("seeked"==a.type)d&=-17;else if("seeking"==a.type)d|=16,0>=IH(m)&&(d|=1),d&=-3;else if("waiting"==a.type)g.T(b,2)||(d|=1);else if("timeupdate"==a.type)k=2<m.g.readyState,f.A|=k,g.T(b,16)||g.T(b,4)||(PH(f,m)?d|=1:l&&!k&&f.A||(d&=-2)),1<m.g.readyState&&0<m.getCurrentTime()&&(d&=-65);else break a;b=QH(b,d,e)}}!g.T(this.A,1)&&g.T(b,1)&&DN(this,"evt_"+a.type);IM(this,b);c&&this.o.play()}}};
g.h.pD=function(a){a="available"==a.o.availability;a!=this.sc&&(this.sc=a,this.R("airplayavailabilitychange"))};
g.h.qD=function(){var a=!!this.o.g.webkitCurrentPlaybackTargetIsWireless;a!=this.Ka&&(this.Ka=a)&&(g.NG(this.g,this.C,this.Ka),pN(this,"m"));this.R("airplayactivechange")};
g.h.Dl=function(){var a=this.o;a&&this.Sa&&!this.g.Se&&!hG("vfp",this.J.g)&&2<=a.g.readyState&&!a.g.ended&&0<vH(HH(a))&&this.J.o("vfp");if((a=this.o)&&!this.g.Se&&0<a.getDuration()&&(!hG("pbp",this.J.g)&&a.g.paused&&2<=a.g.readyState&&0<vH(HH(a))&&this.J.o("pbp"),0<a.getCurrentTime())){g.Bs(this.fb);g.Cs(this.ha);this.ha=window.NaN;this.g.Se=!0;zN(this);if(this.D){a=this.D;if(!a.B){var b=yI(a,"playback");a.J=[10+a.g.videoData.Cg,10,10,40+a.g.videoData.Nh-a.g.videoData.Cg,40];var c=a.A;g.Bs(c.F);c.F=
window.NaN;c.F=g.Ds((0,g.z)(c.update,c),100);c.D=g.gH(c.g);c.A=fH(c.g);b.o=xI(a,!0);b.Ja=!0;b.send();a.g.videoData.fk&&(b=a.g.g,c=a.g.videoData,b=g.Rg(b.baseYtUrl+"ptracking",{html5:"1",video_id:c.videoId,cpn:c.clientPlaybackNonce,plid:c.playbackId,ei:c.eventId,ptk:c.fk,oid:c.iu,ptchn:c.hu,pltype:c.ju,content_v:b.Ka}),BI(a,b));a.g.videoData.enableCardio&&(a.rk("playback"),a.C||EI(a));a.g.videoData.Rd||DI(a);a.B=!0;a=a.A;a.o=a.g.o();a.D=g.gH(a.g);!(0==a.B&&5>a.o)&&2<a.o-a.B&&(a.B=a.o)}g.Es((0,g.z)(this.Sn,
this),4500)}this.R("playbackstarted");g.$u()&&((a=g.y("yt.scheduler.instance.clearPriorityThreshold"))?a():cv(0));return!0}return!1};
g.h.eE=function(){this.jc&&(this.pa.Ma(this.jc),delete this.jc,this.o.gc())};
g.h.Dy=function(){if(this.o){var a=this.getCurrentTime();if(g.T(this.A,8)&&sH(this.Wa,a,(0,g.Ru)(),IH(this.o))){var b=this.getDuration();!this.g.va&&b&&1.1>Math.abs(b-a)?this.o.g.loop?RM(this,0,!0):yM(this):(g.XH(this.A)||DN(this,"progress_fix"),IM(this,RH(this.A,1)))}else g.T(this.A,4)&&g.XH(this.A)&&5<IH(this.o)&&IM(this,SH(this.A,1));vN(this)}};
g.h.ay=function(){return this.B?AK(this.B.K):CC(this.C.schedule)};
g.h.nq=function(){return this.o?IH(this.o):0};
g.h.fy=function(){return this.C.schedule.J};
g.h.qq=function(){if(!(this.g.va&&this.g.oa&&this.B&&this.Aa))return window.NaN;var a=this.g.ec()?this.B.Pr():this.g.oa.H;return(0,g.F)()/1E3-wN(this)-a};
g.h.gH=function(){var a;if(a=g.T(this.A,1)&&this.B){a=this.B;var b=this.getCurrentTime();a=!(!a.o||Dz(a.o)||Ez(a.o)||EL(b,a.g,a.o.o)&&EL(b,a.B,a.o.g))}a&&(a=DL(this.B),this.Fc("reseek",LE({cur:a.lct,vb:a.lvb,ab:a.lab})),RM(this,this.getCurrentTime(),!0))};
g.h.qy=function(){this.g.va||this.R("connectionissue")};
g.h.lH=function(){this.o.Hb(this.o.getCurrentTime()+.1)};
g.h.hF=function(a){var b={};g.Ja(b,this.C.A);b.cpn=this.g.clientPlaybackNonce;this.g.ie&&(b.vvt=this.g.ie,this.g.mdxEnvironment&&(b.mdx_environment=this.g.mdxEnvironment));this.C.Ib&&(b.authuser=this.C.Ib);this.C.pageId&&(b.pageid=this.C.pageId);g.lc(a.F,b);SL(a,a.J)};
g.h.AE=function(a,b,c,d){d=void 0===d?"YTP_ERROR_LICENSE":d;c=c.substr(0,256);"drm.keyerror"==a&&1<this.H.A.keys.length&&96>this.He&&!this.C.experiments.g("html5_disable_drm_reload")&&(a="drm.sessionlimitexhausted",b=!1);if(b)g.KM(this,a,d,c);else if(this.D)this.D.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.He++,this.Mn())};
g.h.BE=function(){pN(this,"r");HM(this)};
g.h.Wz=function(a){this.R("heartbeatparams",a)};
g.h.Lt=function(){if(!this.g.Se&&this.o){var a="0";0<this.o.g.readyState&&5<=IH(this.o)&&this.g.Ra.g&&(IM(this,RH(this.A,1)),DN(this,"load_soft_timeout"),this.R("playbackstalledatstart"),a="1");this.D&&(a={preroll:""+ +QM(this),restartmsg:a},this.B&&g.Ja(a,DL(this.B)),this.o&&g.Ja(a,LH(this.o)),this.D.onError("qoe.start15s",LE(a)));this.R("loadsofttimeout")}};
g.h.Sn=function(){if(!this.Va){var a=new gM(this.g);if("c1a"in a.o){var b=g.y("yt.abuse.botguardInitialized");b=!(b&&b())}else b=!1;if(b)g.Es((0,g.z)(this.Sn,this),4500);else{if(a.g&&a.g.kh){b=[a.g.kh];for(var c in a.A)if(a.o[c]&&a.A[c]){var d=a.A[c](a.o);d&&b.push(d)}a=b.join("&")}else a=null;a&&this.D&&(c=this.D,c.N||(b=yI(c,"atr"),b.T=a,b.send(),c.N=!0),this.Va=!0)}}};
g.h.Lb=function(){return this.g.Lb()};
g.h.zr=function(){return this.Ha};
g.h.Ul=function(){if(this.o)a:{var a=this.o;var b={};if(a.g){if(a.g.getVideoPlaybackQuality){a=a.g.getVideoPlaybackQuality();break a}a.g.webkitDecodedFrameCount&&(b.totalVideoFrames=a.g.webkitDecodedFrameCount,b.droppedVideoFrames=a.g.webkitDroppedFrameCount)}a=b}else a={};return a};
g.h.Mn=function(){this.o&&(this.K?mN(this):(this.g.nf&&this.g.nf.A(this.C.experiments),this.o.Ae()),kN(this))};
g.h.Fc=function(a,b,c){if(this.D){var d=this.D;d.fa()||iI(d.o,a,b,void 0===c?!1:c)}};g.p(EN,FI);g.h=EN.prototype;g.h.getPlayerType=function(){return this.playerType};
g.h.getRootNode=function(){return g.MN(this).element};
g.h.ce=function(){return this.app.C};
g.h.getVideoData=function(a){return(a=g.W(this.app,a||this.playerType))&&a.getVideoData()};
g.h.isFullscreen=function(){return this.app.g.ca};
g.h.gc=function(a){3==this.Fa()?g.KN(this.app.B).Xh("control_play"):GX(this.app,a)};
g.h.Ae=function(a){tN(g.W(this.app,a))};
g.h.addEventListener=function(a,b){this.app.V.subscribe(a,b)};
g.h.removeEventListener=function(a,b){this.app.V.unsubscribe(a,b)};
g.h.Th=function(a){this.Mr(a,a)};
g.h.Ph=function(a){return eX(this.app,a)};
g.h.getVideoUrl=function(a,b,c,d){var e=this.Fa(),f=2==e;if(d&&f||3==e)f=!1,e=1;d=this.getVideoData(e);if(!d)return"";var k;a||d.va||(k=Math.floor(this.getCurrentTime(e)));return this.app.g.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,k,b,c)};
g.h.Vh=function(a,b,c){var d=g.FN(this).o;d&&d.zo(a,b,c)};
g.h.Kc=function(){var a=g.W(this.app,1);if(!a)return!1;var b=a.getVideoData();return b.ac()&&!g.$G(b)&&2!=this.Fa()&&(!QM(a)||3==this.Fa())};
g.h.Zf=function(a,b){var c=this.app,d=g.W(c,this.playerType);d&&c.g.Cb.has(a.toString())?d.D?(c=yI(d.D,"engage"),c.H=a,c.send(b)):b&&b():b&&b()};
g.h.de=function(a,b){cX(this.app,a,b)};
g.h.setVolume=function(a){a=g.Zc(a,0,100);Ay(this.app,{volume:a,muted:this.yc()},!0)};
g.h.mute=function(){Ay(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.h.ee=function(){Ay(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};
g.h.Bh=function(){return g.W(this.app)};sO.prototype.fetch=function(a){var b=this;if(!/\[BISCOTTI_ID\]/.test(a))return uO(this,a);var c=1===this.o;c&&this.g.app.J.o("a_bid_s");var d=qO();return null!=d?(c&&this.g.app.J.o("a_bid_f"),uO(this,a,d)):rO().then(function(d){c&&b.g.app.J.o("a_bid_f");return uO(b,a,d)})};g.p(vO,g.Fy);g.p(yO,wO);var BO=1;g.E(g.EO,g.I);g.h=g.EO.prototype;g.h.na=function(a,b){g.r(b)?Jd(a,this.element,b):a.appendChild(this.element)};
g.h.detach=function(){g.Kd(this.element)};
g.h.update=function(a){for(var b in a)this.ma(b,a[b])};
g.h.ma=function(a,b){var c=this.Ja["{{"+a+"}}"];c&&GO(this,c[0],c[1],b)};
g.h.W=function(){this.ia={};this.Ja={};this.detach();g.EO.ga.W.call(this)};g.p(HO,wO);g.E(g.X,g.EO);g.h=g.X.prototype;g.h.zb=function(a,b){this.ma(b||"content",a)};
g.h.show=function(){this.g||(g.IO(this.element,""),this.g=!0)};
g.h.hide=function(){this.g&&(g.IO(this.element,"none"),this.g=!1)};
g.h.ba=function(a,b,c){return this.O(this.element,a,b,c)};
g.h.O=function(a,b,c,d){c=(0,g.z)(c,d||this);d={target:a,type:b,listener:c};this.aa.push(d);a.addEventListener(b,c);return d};
g.h.Ma=function(a){for(var b=0;b<this.aa.length;b++)if(this.aa[b]==a){a=this.aa.splice(b,1)[0];a.target.removeEventListener(a.type,a.listener);break}};
g.h.focus=function(){g.Vd(this.element);this.element.focus()};
g.h.W=function(){for(;this.aa.length;){var a=this.aa.pop();a.target.removeEventListener(a.type,a.listener)}g.X.ga.W.call(this)};g.p(VO,g.X);g.p(YO,VO);YO.prototype.C=function(a){g.hu(a);WO(this,this.o.onClickCommands);a=this.o.clickthroughEndpoint;a=void 0===a?null:a;null!=a&&SO(a,this.A)};g.p(ZO,HO);ZO.prototype.B=function(){return null};
ZO.prototype.A=function(){return this.C};
ZO.prototype.o=function(a,b){return new YO(a,this.g,b)};g.p($O,wO);g.p(dP,wO);dP.prototype.isListed=function(){return this.F};
dP.prototype.isSkippable=function(){return null!=this.C};g.p(fP,VO);fP.prototype.D=function(a){a=a.o;"companion-setup-complete"==a.data?(this.o.setupParams&&a.source.postMessage(this.o.setupParams,"*"),a=a.source.frameElement,a.parentNode.style.cssText="",a.width=this.o.iframeWidth,a.height=this.o.iframeHeight):"pause-video"==a.data&&this.B.Ub()};g.p(gP,HO);gP.prototype.B=function(){var a=new zO;a.src=this.g.iframeUrl||null;a.width=this.g.iframeWidth||0;a.height=this.g.iframeHeight||0;var b=new AO;b.o=a;return b};
gP.prototype.A=function(){return[new g.hd(300,60)]};
gP.prototype.o=function(a){return new fP(a,this.g)};g.p(lP,g.R);lP.prototype.dispose=function(){this.g.clear();g.R.prototype.dispose.call(this)};
var mP=null;g.x("ytads.bulleit.getVideoMetadata",function(a){a=nP().g.get(a);return null!=a?a.Rs():{}},void 0);
g.x("ytads.bulleit.triggerExternalActivityEvent",function(a,b,c){var d=nP();c=pP(c);null!=c&&d.R(c,{queryId:a,viewabilityString:b})},void 0);g.p(tP,g.I);var AP=["CPN","MIDROLL_POS","SDKV","SLOT_POS"];g.p(FP,g.I);FP.prototype.J=function(a){a.baseUrl&&JP(this,a.baseUrl,{})};g.p(PP,g.R);g.h=PP.prototype;g.h.Rs=function(){return{}};
g.h.getDuration=function(){return this.g.getDuration(2)};
g.h.jm=function(){GP(this.o,"pause")};
g.h.lm=function(){this.F||this.pm();var a=this.o;a.A.hasOwnProperty("pause")&&GP(a,"resume")};
g.h.xm=function(){var a=this.o;KP(a,0,!0);LP(a,0,0,!0);GP(a,"complete")};
g.h.im=function(){MP(this.o,"abandon")};
g.h.nm=function(){MP(this.o,"skip")};
g.h.pm=function(){HP(this.o);this.F=!0};
g.h.Ih=function(a){var b=this.o;zP(b.g,3,"There was an error playing the video ad. Error code: "+a);GP(b,"error")};
g.h.qu=function(){this.R("b")};
g.h.ru=function(){this.R("f")};
g.h.tu=function(){this.R("g")};
g.h.uu=function(){this.R("h")};
g.h.vu=function(){this.R("i")};
g.h.wu=function(){this.R("j")};
g.h.xu=function(){this.R("n")};
g.h.dispose=function(){QP(this,this.C,3);this.C=[];this.A.unsubscribe("b",this.qu,this);this.A.unsubscribe("f",this.ru,this);this.A.unsubscribe("g",this.tu,this);this.A.unsubscribe("h",this.uu,this);this.A.unsubscribe("i",this.vu,this);this.A.unsubscribe("j",this.wu,this);this.A.unsubscribe("n",this.xu,this);oP(this.A,this);g.R.prototype.dispose.call(this)};g.p(SP,PP);SP.prototype.Pg=function(){HP(this.o)};
SP.prototype.Aj=function(){};g.p(TP,NP);g.p(UP,PP);UP.prototype.Pg=function(){var a=new TP(this.B.g,BP(this.macros));RP(this,[a])};
UP.prototype.Aj=function(){};g.p(WP,NP);g.p(XP,NP);g.p(YP,NP);g.p(ZP,NP);g.p($P,NP);g.p(aQ,NP);g.p(bQ,NP);g.p(cQ,PP);g.h=cQ.prototype;g.h.Fx=function(a){if((a=g.tg(a.response))&&a.items&&a.items.length){a=a.items[0].snippet;if(a){var b=a.title;var c=g.ac(a,"thumbnails","default","url")}(a=this.B.U)&&b&&c?c=[new $P(a),new XP(c),new aQ(b)]:(g.ws(Error("Channel metadata contains null for "+(a?b?"channel icon thumbnail.":"channel name.":"video title."))),c=[]);RP(this,c)}};
g.h.Rs=function(){var a=this.g.getCurrentTime(2),b=this.B.A;var c=this.g;c=qP(c)&&1==c.Ig(2);return{currentTime:a,duration:b,isPlaying:c,isVpaid:!1,isYouTube:!0,volume:this.g.getVolume()/100}};
g.h.Pg=function(){var a=rP(this.B);this.g.Uh(a,!0,2);this.D.start()};
g.h.jm=function(){PP.prototype.jm.call(this);this.R("k",2)};
g.h.lm=function(){PP.prototype.lm.call(this);this.R("l",1)};
g.h.pm=function(){PP.prototype.pm.call(this);this.D.stop();this.g.yc()&&GP(this.o,this.g.yc()?"mute":"unmute");this.R("l",1);gQ(this)};
g.h.xm=function(){PP.prototype.xm.call(this);jQ(this,"e")};
g.h.im=function(){PP.prototype.im.call(this);jQ(this,"a")};
g.h.nm=function(){PP.prototype.nm.call(this);jQ(this,"e")};
g.h.Ih=function(a){PP.prototype.Ih.call(this,a);jQ(this,"e")};
g.h.vy=function(){this.Ih("net.timeout")};
g.h.Aj=function(a){switch(a){case "ad-channel-thumbnail":case "advertiser-name":a=g.V(this.g).Z+"://"+xE(g.V(this.g))+"/channel/"+this.B.B;g.RO(a);break;case "ad-title":this.g.Ub();g.RO(this.g.getVideoUrl());break;case "visit-advertiser":this.g.Ub();if(a=this.B.D){var b=this.o,c=a.loggingUrls||null;c&&(0,g.G)(c,b.J,b);a.urlEndpoint&&a.urlEndpoint.url&&g.RO(a.urlEndpoint.url)}MP(this.o,"clickthrough");break;case "skip-button":this.nm()}};g.p(oQ,g.R);g.h=oQ.prototype;g.h.qm=function(a){var b=(0,window.parseInt)(a.getId(),10);(0,window.isNaN)(b)||(this.C=a,-0x8000000000000==this.C.start||bR(this.A,[this.C]),WQ(this.A,this),(0,g.G)(this.o.K,this.Ts,this),(0,g.G)(this.o.F,this.PG,this),(0,g.G)(this.o.H,this.mH,this),this.B.o=!1,dG("video_to_ad",["apbs"]),g.sb(this.o.g)?g.sb(this.o.o)?rQ(this):qQ(this,this.o.o[0]):(pQ(this,this.o.g),sQ(this)))};
g.h.Wj=function(a){a=void 0===a?!1:a;this.bi(0);var b=this.g;b.unsubscribe("a",g.A(this.Wj),this);b.unsubscribe("b",this.mt,this);b.unsubscribe("e",this.Wj,this);b.unsubscribe("f",this.ot,this);b.unsubscribe("g",this.qt,this);b.unsubscribe("h",this.ut,this);b.unsubscribe("i",this.vt,this);b.unsubscribe("j",this.wt,this);b.unsubscribe("k",this.bi,this);b.unsubscribe("l",this.bi,this);b.unsubscribe("onAdUxUpdate",this.Ss,this);b.unsubscribe("n",this.xt,this);g.Ke(this.g);this.g=null;a?rQ(this,a):sQ(this)};
g.h.mt=function(){null!=this.g&&MP(this.g.o,"active_view_measurable")};
g.h.ot=function(){null!=this.g&&MP(this.g.o,"active_view_fully_viewable_audible_half_duration")};
g.h.qt=function(){};
g.h.ut=function(){};
g.h.vt=function(){};
g.h.wt=function(){};
g.h.xt=function(){null!=this.g&&MP(this.g.o,"active_view_viewable")};
g.h.bi=function(a){var b=this.A.M.app;1==a&&(b.J.o("vr"),b.pa||(b.pa=zF(b.Ft,b)),zN(b.F),HI(b.J,AX(b)));var c=b.g;(g.IE(c)&&c.jb||g.hE(c))&&b.o.ua("onAdStateChange",a)};
g.h.Ss=function(a){this.A.M.ua("onAdUxUpdate",a)};
g.h.PG=function(a){a=kQ(this.M,a,this.H);a.Pg();g.Ke(a)};
g.h.mH=function(a){a=kQ(this.M,a,this.H);var b=a.o;zP(b.g,0,"No playable media files can be selected");GP(b,"error");g.Ke(a)};
g.h.Ts=function(a){(a=a.baseUrl)&&g.it(a,void 0,Ho.Jj(a))};g.p(wQ,g.R);wQ.prototype.qm=function(a){var b=this;this.A=a;this.B.fetch(this.o.D).then(function(a){b.fa()||(a=xQ(a),a.ar||(-0x8000000000000==b.A.start?(a.isEmpty||UQ(b.g,a.ql),SQ(b.g)):(bR(b.g,[b.A]),a.isEmpty||UQ(b.g,a.ql))))})};yQ.prototype.showCompanion=function(a,b,c){return zQ(this).then(function(){return DQ(a,b,c)})};FQ.prototype.showCompanion=function(a,b){b.g||(b.g=a);this.M.ua("updatekevlarcompanion",b)};g.p(HQ,PP);HQ.prototype.qm=function(a){bR(this.H,[a]);this.Pg()};
HQ.prototype.Pg=function(){var a=this;WQ(this.H,this);if(sP(this.g)){var b=this.g.getVideoData(1),c=this.B.B();null!=c&&this.J.showCompanion(b.videoId,c)}else{var d=this.B.A();GQ(this.J).then(function(b){if(b=IQ(d,b)){var c=a.B.o(a.g,b);if(null!=c){g.J(a,c);var e=a.J;e.g&&e.g.showCompanion(c.element,b.width,b.height)}}})}};
HQ.prototype.Aj=function(){};var JQ=null,LQ=null;g.x("yt.www.ads.eventcache.getLastCompanionData",function(){return JQ},void 0);
g.x("yt.www.ads.eventcache.getLastPlaShelfData",function(){return LQ},void 0);g.p(PQ,g.R);g.h=PQ.prototype;g.h.init=function(){var a=this.M.getVideoData().getPlayerResponse()||{};vQ(a);if(sP(this.M)){var b=zy(this.M);b.addEventListener("updatekevlarcompanion",KQ);b.addEventListener("onPlaShelfInfoCardsReady",MQ);window.addEventListener("yt-navigate-start",NQ)}this.D.O(this.M,"applicationplayerstatechange",this.RC);a=QQ(a);null!=a&&(UQ(this,a),TQ(this));this.D.O(this.M,"crn_ad",this.Xj,this);this.D.O(this.M,"crx_ad",this.SC,this);SQ(this);g.Kf(this.PH,this)};
g.h.W=function(){g.ku(this.D);sP(this.M)&&OQ(zy(this.M));g.Tb(this.o,function(a){XQ(this,a)},this);
tQ(this);this.A=[];this.H=[];this.C=null;g.Ke(this.F);this.F=null;this.o={};g.R.prototype.W.call(this)};
g.h.Xj=function(a){if(!a.o){this.C=null;var b=g.LN(this.M);g.T(b,32)||g.T(b,16)?this.C=a:(b=a.getId(),b in this.o&&this.o[b].qm(a))}};
g.h.SC=function(a){a.o&&(a.o=!1);a==this.C&&(this.C=null)};
g.h.UC=function(a){if(this.g){var b=this.g;null!=b.g&&(a=a.state,g.T(a,2)?(a=b.B,a.o=!1,a.K?dG("ad_to_video",["pbresume"]):dG("ad_to_ad",["apbs"]),b.g.xm()):a.sb()?(a=b.B,a.D&&!a.o&&(a.J=!1,a.o=!0,"ad_to_video"!=a.g&&g.PF("apbs",void 0,a.g)),b.g.lm()):g.T(a,4)?b.g.jm():a.isError()&&b.g.Ih(a.g.errorCode))}};
g.h.RC=function(a){0>$H(a,16)&&this.C&&this.Xj(this.C)};
g.h.VC=function(){if(qP(this.M)&&this.g){var a=this.M.getCurrentTime(2),b=this.g.g;if(b.F){var c=b.o;b=b.getDuration();0<b&&(KP(c,a),LP(c,a,b))}}};
g.h.QC=function(){if(this.g){var a=this.g;null!=a.g&&a.g.im()}};
g.h.mD=function(a){if(this.g){var b=this.g;null!=b.g&&b.g.Aj(a)}};
g.h.WC=function(){if(2==this.M.Fa()&&this.g){var a=this.g.g;GP(a.o,a.g.yc()?"mute":"unmute")}};
g.h.TC=function(a){this.g&&GP(this.g.g.o,a?"fullscreen":"end_fullscreen")};
g.h.PH=function(){var a=this.A.filter(function(a){return-0x8000000000000!=a.start});
cO(this.M,a)};g.E(g.cR,g.R);g.h=g.cR.prototype;g.h.load=function(){this.loaded=!0};
g.h.unload=function(){this.loaded=!1};
g.h.Ac=function(){return!0};
g.h.W=function(){this.loaded&&this.unload();g.cR.ga.W.call(this)};
g.h.Nv=function(){return{}};g.E(dR,g.cR);g.h=dR.prototype;g.h.Ov=function(){return-1};
g.h.create=function(){this.o||(g.L(this.g.getRootNode(),this.A+"-created"),this.C.O(this.g,"crn_"+this.A,this.aE),this.C.O(this.g,"crx_"+this.A,this.bE),this.o=!0)};
g.h.destroy=function(){g.M(this.g.getRootNode(),this.A+"-created");g.ku(this.C);this.o=!1;this.R("destroyed",this.A)};
g.h.aE=function(){};
g.h.bE=function(){};
g.h.W=function(){this.o&&this.destroy();dR.ga.W.call(this)};g.E(g.eR,g.X);g.eR.prototype.subscribe=function(a,b,c){return this.Y.subscribe(a,b,c)};
g.eR.prototype.unsubscribe=function(a,b,c){return this.Y.unsubscribe(a,b,c)};
g.eR.prototype.Rc=function(a){return this.Y.Rc(a)};
g.eR.prototype.R=function(a,b){return this.Y.R.apply(this.Y,arguments)};g.E(g.fR,g.I);g.h=g.fR.prototype;g.h.show=function(a){1!=this.g&&2!=this.g&&(3==this.g&&this.Ek(),4==this.g?(this.o.show(),this.g=null,this.A.stop()):this.o.g||(gR(this,!0),this.g=1,a?this.A.start(a):this.Ek()))};
g.h.hide=function(){3!=this.g&&(1==this.g||2==this.g?(this.o.hide(),this.g=null,this.A.stop()):this.o.g&&(gR(this,!0),this.g=3,this.A.start(this.B)))};
g.h.Ek=function(){switch(this.g){case 1:this.o.show();this.g=2;this.A.start(10);break;case 2:gR(this,!1);this.g=null;break;case 3:this.o.hide();gR(this,!1);this.g=4;this.A.start(0);break;case 4:this.g=null}};
g.h.stop=function(){for(;null!=this.g&&4!=this.g;)this.A.stop(),this.Ek()};
g.h.W=function(){this.o.fa()||this.o.element.removeAttribute("aria-hidden");g.fR.ga.W.call(this)};g.p(hR,g.eR);g.h=hR.prototype;g.h.init=function(){null!=this.H&&lR(this,this.element,this.H)};
g.h.clear=function(){};
g.h.hide=function(){g.eR.prototype.hide.call(this);null!=this.H&&mR(this,this.element,!1)};
g.h.show=function(){g.eR.prototype.show.call(this);null!=this.H&&mR(this,this.element,!0)};
g.h.getImageUrl=function(a){a=void 0===a?null:a;return null==a||(a=a.thumbnail,null==a||null==a.thumbnails||g.sb(a.thumbnails)||null==a.thumbnails[0].url)?"":g.$a(a.thumbnails[0].url)};
g.h.click=function(a){mO(this.o,a)&&g.kO(this.o,a)};g.p(nR,hR);g.h=nR.prototype;
g.h.init=function(a,b){if("ad-preview"==a.componentType){this.J=a.adPreviewRenderer;this.H=this.J.trackingParams||null;var c=this.J,d=c.durationMilliseconds;null!=d&&0!==d?(((0,window.isNaN)(d)||0>d)&&g.ws(Error("durationMilliseconds was specified incorrectly in AdPreviewRenderer with a value of: "+d),"ERROR"),this.D=d):this.D=1E3*this.o.getDuration(2);null!=c.templatedCountdown?(d=c.templatedCountdown.templatedAdText,null!=d?this.B=d:g.ws(Error("adPreviewRenderer.templatedCountdown was defined but did not contain a templatedAdText"),"ERROR")):
null!=c.staticPreview&&(this.B=c.staticPreview,this.A.ma("previewText",iR(this.B)));d=this.o.getVideoData().bo;g.sa(d)&&d&&c.thumbnail?(c=this.getImageUrl(c.thumbnail),this.A.ma("previewImage",c)):g.Mh(this.A.ia["ytp-ad-preview-image"],!1);this.C||(this.C=this.O(this.o,"progresssync",this.Us));hR.prototype.init.call(this,a,b);this.show()}};
g.h.show=function(){this.F.show();this.Us();hR.prototype.show.call(this)};
g.h.XC=function(a){0<$H(a,2)&&(oR(this),this.hide())};
g.h.clear=function(){oR(this);this.F.hide();this.hide();mR(this,this.element,!1)};
g.h.Us=function(){var a=1E3*this.o.getCurrentTime(2);a>=this.D?(oR(this),this.F.hide()):this.B&&this.B.isTemplated&&(a=Math.max(0,Math.ceil((this.D-a)/1E3)),a!=this.K&&(this.A.ma("previewText",iR(this.B,{TIME_REMAINING:a})),this.K=a))};g.p(rR,hR);g.h=rR.prototype;g.h.init=function(a){"ad-attribution-bar"==a.componentType?(this.A.hide(),this.D=a.adBadgeText,this.C||(this.C=this.O(this.o,"progresssync",this.Vs)),g.N(this.element,"ytp-ad-clickable",!1),this.Vs(),this.A.show(),this.show()):"visit-advertiser"==a.componentType&&a.visitAdvertiserLabel&&(a=g.$a(g.tG(a.visitAdvertiserLabel)),g.LO(this.B,!Ma(a)),this.B.update({visitAdvertiserText:a}),this.show())};
g.h.clear=function(){this.hide();this.A.hide();this.B.hide();this.Ma(this.C);this.C=null};
g.h.lD=function(){};
g.h.zG=function(a){g.hu(a);this.o.hn("visit-advertiser")};
g.h.Vs=function(){var a=this.o.getDuration(2),b=this.o.getCurrentTime(2);a=g.pR(a-b);b=this.D||"";this.F&&g.Sd(this.F,b?b+" \u00b7 "+a:a)};g.p(tR,hR);g.h=tR.prototype;
g.h.init=function(a,b){if("invideo-overlay"==a.componentType){this.A=a.renderer;this.H=this.A.trackingParams||null;this.K=this.A.onClickCommands||[];this.J=b;var c;if(c=this.A.contentSupportedRenderer)if(c=this.A.contentSupportedRenderer,uR(this),c.textOverlayAdContentRenderer){c=c.textOverlayAdContentRenderer;var d=iR(c.title),e=iR(c.description);Ma(d)||Ma(e)?c=!1:(lR(this,this.D.element,c.trackingParams||null),this.D.ma("title",iR(c.title)),this.D.ma("description",iR(c.description)),this.D.ma("displayUrl",
iR(c.displayUrl)),c.navigationEndpoint&&Bb(this.K,c.navigationEndpoint),vR(this,this.D),this.D.show(),mR(this,this.D.element,!0),c=!0)}else if(c.enhancedTextOverlayAdContentRenderer)c=c.enhancedTextOverlayAdContentRenderer,d=iR(c.title),e=iR(c.description),Ma(d)||Ma(e)?c=!1:(lR(this,this.B.element,c.trackingParams||null),this.B.ma("title",iR(c.title)),this.B.ma("description",iR(c.description)),this.B.ma("displayUrl",iR(c.displayUrl)),this.B.ma("imageUrl",this.getImageUrl(c.image)),c.navigationEndpoint&&
Bb(this.K,c.navigationEndpoint),this.N=c.imageNavigationEndpoint||null,vR(this,this.B),this.B.show(),mR(this,this.B.element,!0),c=!0);else if(c.imageOverlayAdContentRenderer){c=c.imageOverlayAdContentRenderer;b:{d=c.image;d=void 0===d?null:d;if(null!=d&&(d=d.thumbnail,null!=d&&null!=d.thumbnails&&!g.sb(d.thumbnails)&&null!=d.thumbnails[0].width&&null!=d.thumbnails[0].height)){d=new g.hd(d.thumbnails[0].width||0,d.thumbnails[0].height||0);break b}d=new g.hd(0,0)}0==d.width||0==d.height?c=!1:(lR(this,
this.C.element,c.trackingParams||null),this.C.ma("imageUrl",this.getImageUrl(c.image)),this.C.ma("width",d.width),this.C.ma("height",d.height),c.navigationEndpoint&&Bb(this.K,c.navigationEndpoint),g.rh(this.C.ia["ytp-ad-image-overlay"],"max-width",d.width+"px"),vR(this,this.C),this.C.show(),mR(this,this.C.element,!0),c=!0)}else c=!1;c&&(hR.prototype.init.call(this,a,b),this.F.start(),this.show(),wR(this,!0),TO(this.A&&this.A.impressionCommands?this.A.impressionCommands:[],this.J))}};
g.h.clear=function(){uR(this);this.hide();wR(this,!1);this.F.reset()};
g.h.ci=function(a,b){var c=g.ic(this.J),d=g.Ih(b,a).floor();c.I_X={toString:function(){return d.x.toString()}};
c.I_Y={toString:function(){return d.y.toString()}};
TO(this.K,c)};
g.h.jG=function(){this.N&&SO(this.N,this.J)};
g.h.Bn=function(){this.hide();wR(this,!1);this.F.reset();a:{if(this.A&&this.A.closeButton&&this.A.closeButton.buttonRenderer){var a=this.A.closeButton.buttonRenderer;if(a.serviceEndpoint){a=[a.serviceEndpoint];break a}}a=[]}TO(a,this.J)};
g.h.Fn=function(){var a=this.A&&this.A.attributionEndpoint?this.A.attributionEndpoint:null;null!=a&&SO(a,this.J)};
g.p(sR,g.I);g.h=sR.prototype;g.h.reset=function(){this.D=!1;this.g.stop();this.A.stop();this.o=!1;g.M(this.C,this.B)};
g.h.start=function(){this.reset();this.g.start()};
g.h.cF=function(){this.o&&(this.o=!1,g.M(this.C,this.B));this.A.stop();this.g.stop()};
g.h.ZE=function(){this.D?this.A.start():this.g.start()};
g.h.qp=function(){this.o||(this.o=!0,g.L(this.C,this.B),this.D=!0)};g.p(xR,hR);g.h=xR.prototype;
g.h.init=function(a,b){if("skip-button"==a.componentType){this.T=b;this.A=a.skipAdRenderer;this.H=this.A.trackingParams||null;this.N=!1;this.D=a.g;if((0,window.isNaN)(this.D)||0>this.D)this.D=5E3;var c=this.A&&this.A.preskipRenderer&&this.A.preskipRenderer.adPreviewRenderer||{};g.fc(c)&&g.ws(Error("AdPreviewRenderer was not set in player response."),"ERROR");lR(this,this.B.element,c.trackingParams||null);c.staticPreview?this.J=c.staticPreview:c.templatedCountdown&&(this.J=c.templatedCountdown.templatedAdText||
null);c.thumbnail&&(c=this.getImageUrl(c.thumbnail),this.B.ma("preskipTextImage",c));c=this.A&&this.A.skippableRenderer&&this.A.skippableRenderer.skipButtonRenderer||{};g.fc(c)&&g.ws(Error("SkipButtonRenderer was not set in player response."),"ERROR");lR(this,this.C.element,c.trackingParams||null);c.message&&(c=iR(c.message),0===c.length&&(c=g.Q("YTP_SKIP_AD")),this.C.ma("skipText",c));this.F||(this.F=this.O(this.o,"progresssync",this.Ws));hR.prototype.init.call(this,a,b);this.show()}};
g.h.show=function(){this.K.show();this.Ws();hR.prototype.show.call(this);mR(this,this.B.element,!0)};
g.h.YC=function(a){0<$H(a,2)&&(yR(this),this.hide())};
g.h.clear=function(){yR(this);this.hide()};
g.h.hide=function(){this.U.hide();mR(this,this.C.element,!1);this.K.hide();mR(this,this.B.element,!1);hR.prototype.hide.call(this)};
g.h.bG=function(a){g.hu(a);this.N&&(this.click(this.C.element),this.o.hn("skip-button"),TO(this.A&&this.A.skippableRenderer&&this.A.skippableRenderer.skipButtonRenderer&&this.A.skippableRenderer.skipButtonRenderer.onClickCommands||[],this.T))};
g.h.Ws=function(){var a=1E3*this.o.getCurrentTime(2);a>=this.D?(yR(this),this.K.hide(),mR(this,this.B.element,!1),this.U.show(),mR(this,this.C.element,!0),this.N=!0,TO(this.A&&this.A.skippableRenderer&&this.A.skippableRenderer.impressionCommands||[],this.T)):(a=Math.max(0,Math.ceil((this.D-a)/1E3)),a!=this.V&&(this.J&&this.B.ma("preskipText",iR(this.J,{TIME_REMAINING:a})),this.V=a))};g.p(BR,g.iu);BR.prototype.B=function(a){null!=a&&(0,g.G)(a,(0,g.z)(function(a){if(a instanceof OP){var b=a.content;if(null!=b){var d=hc(this.A,b.componentType,null),e=b.macros?b.macros:{};if(d)switch(a.actionType){case 1:a={};g.lc(a,e,this.D);d.init(b,a);break;case 3:d.clear(b)}}}},this))};
BR.prototype.C=function(){g.Tb(this.A,function(a){a.clear(null)})};g.p(CR,dR);g.h=CR.prototype;g.h.create=function(){var a=this.g.getVideoData().getPlayerResponse()||{};vQ(a)&&(dR.prototype.create.call(this),this.B=new PQ(this.g,new sO(this.g)),this.B.init())};
g.h.destroy=function(){dR.prototype.destroy.call(this);var a=this.B;this.B=null;a.dispose()};
g.h.Ac=function(){return!1};
g.h.vB=function(){var a=this.B,b=a.M.getVideoData(2);return b?b.isListed&&!g.hE(g.V(a.M)):!1};
g.h.Yr=function(a){var b=this.B;switch(a){case "control_play":qP(b.M)&&kN(b.M.Bh());break;case "control_pause":qP(b.M)&&TM(b.M.Bh())}};
g.h.Ov=function(){return-1};var ER=(1E9*Math.random()>>>0).toString(),DR={};var wZ=[2,5];var xZ=!1,yZ=!1;g.Cu("showCompanionAdLoaded",function(){if(yZ){var a=g.y("window.google_show_companion_ad");var b=g.y("yt.www.watch.ads.getGlobals");g.Ca(a)&&g.Ca(b)?(b=b(),b=!(!b||!b.length)):b=!1;b?a():yZ=!0;yZ=!1}});
g.Cu("watchAdsInit",function(){if(xZ){xZ=!1;var a=g.y("yt.www.watch.ads.loadAfc");g.Ca(a)?a():xZ=!0}});GR.prototype.getLength=function(){return this.g-this.o};JR.prototype.update=function(a,b,c,d){this.width=b;this.A=c;this.C=d;this.g=b-c-d;this.B=g.Zc(a-c,0,this.g);this.position=this.B+c;this.o=this.B/this.g};new function(a,b){this.o=a;this.g=g.ta(b)?b:null;if(g.rb(wZ,this.o)){if(!g.ta(this.g)||0>this.g)throw Error("Must have valid offset");}else if(null!==this.g)throw Error("Must not have offset");}(1);g.E(LR,g.I);g.h=LR.prototype;g.h.Tp=function(){if(!this.g){var a=this.Tp;if("lb3"==g.V(this.M).g)var b=!1;else b=this.M.getVideoData(),b=b.Zi||b.captionTracks.length||b.va&&b.oa&&null!=b.oa.g.en?!0:!1;(a=PR(this,"captions",a,b))&&!this.g&&(this.g=a,this.M.ua("onApiChange"))}};
g.h.Pp=function(){this.J=this.J||PR(this,"endscreen",this.Pp,g.MR(this))};
g.h.Vp=function(){var a;if(!(a=this.B)){a=this.Vp;var b=this.M.getVideoData();var c=g.V(this.M).experiments,d=g.$s()&&(Zs("ps4 vr")||Zs("ps4 pro vr")),e=d&&c.g("enable_spherical_ps4");d=d&&c.g("enable_mesh_ps4");var f=c.g("enable_mesh_cobalt"),k=c.g("enable_spherical_kabuki")||b.cq,l=GE(g.V(this.M));b=b.Xd()?d||f||k||l||c.g("html5_enable_spherical"):b.Ye()?l||e||!1||k||c.g("html5_enable_spherical"):b.Ze()?l||e||!1||c.g("html5_enable_spherical3d"):b.Uf()?l||c.g("html5_enable_anaglyph3d"):l&&(c.g("enable_webgl_noop")||
c.g("enable_white_noise"));a=PR(this,"webgl",a,b)}this.B=a};
g.h.Xp=function(){this.U=this.U||PR(this,"ypc",this.Xp,g.ZG(this.M.getVideoData(),"ypc_module"))};
g.h.Wp=function(){this.V=this.V||PR(this,"ypc_clickwrap",this.Wp,g.ZG(this.M.getVideoData(),"ypc_clickwrap_module"))};
g.h.Sp=function(){this.T=this.T||PR(this,"spacecast",this.Sp,this.M.getVideoData().spacecastModule)};
g.h.Rp=function(){this.N=this.N||PR(this,"heartbeat",this.Rp,g.ZG(this.M.getVideoData(),"ypc_license_checker_module"))};
g.h.Np=function(){if(!this.o){var a=this.Np;var b=g.V(this.M);if("3"==b.B)b=!1;else if(b.N.isEmpty()&&"annotation-editor"!=b.g&&"live-dashboard"!=b.g){var c=this.M.getVideoData();b=b.experiments.g("disable_new_iv_module_create_logic")?g.ZG(c,"iv3_module"):!!c.Od}else b=!0;if(this.o=PR(this,"annotations_module",a,b)){a=this.o;for(var d in this.Z)a.subscribe(d,this.Z[d]);this.M.ua("onApiChange")}}};
g.h.Qp=function(){this.D=this.D||PR(this,"fresca",this.Qp,g.ZG(this.M.getVideoData(),"fresca_module"))};
g.h.Fl=function(){this.K||(this.K=PR(this,"remote",this.Fl,g.V(this.M).qb))&&this.K.create()};
g.h.Up=function(){this.C||(this.C=PR(this,"unplugged",this.Up,g.V(this.M).Ha))&&this.C.init()};
g.h.Op=function(){if(!this.H){var a=this.Op;var b=g.V(this.M);"3"==b.B?b=!1:"creator-endscreen-editor"==b.g?b=!0:(b=this.M.getVideoData(),b=!!b&&!!g.dH(b));(this.H=PR(this,"creatorendscreen",a,b))&&this.M.ua("onApiChange")}};
g.h.W=function(){LR.ga.W.call(this);QR(this,!0)};g.E(SR,g.X);SR.B="(max-width: 656px)";SR.A="(min-width: 657px)";SR.o="(min-width: 1294px) and (min-height: 630px)";SR.g="(min-width: 1720px) and (min-height: 980px)";g.h=SR.prototype;g.h.cz=function(){this.D=new g.ch(0,0,0,0);this.B=new g.ch(0,0,0,0)};
g.h.Do=function(a){g.np(this.element,arguments)};
g.h.je=function(){if(this.o){var a=this.Ga();if(!a.isEmpty()){var b=!g.id(a,g.gh(this.B)),c=TR(this);b&&(this.B.width=a.width,this.B.height=a.height);a=this.app.g;(c||b||a.ka)&&this.app.o.R("resize",this.Ga())}}};
g.h.BI=function(a,b){XR(this,b)};
g.h.CI=function(a){a.getVideoData()&&XR(this,a.getVideoData())};
g.h.Ga=function(){var a=this.app.g,b=this.app.g.experiments.g("legacy_cougar_fullscreen_optimization")?g.Qt()==this.element:this.app.K.isFullscreen();if(b&&at())return new g.hd(window.outerWidth,window.outerHeight);if(b||a.Li){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.C&&this.C.media==a||(this.C=window.matchMedia(a));var c=this.C&&this.C.matches}if(c)return new g.hd(window.innerWidth,window.innerHeight)}else if(this.T&&!this.app.Ja)for(a=
0;a<this.T.length;a++)if(b=this.T[a],b.query.matches)return new g.hd(b.size.width,b.size.height);return new g.hd(this.element.clientWidth,this.element.clientHeight)};
g.h.Cy=function(){this.o&&UR(this);(this.app.g.experiments.g("player_state_change_resize_killswitch")||bS(this)!=this.J)&&this.je()};
g.h.DI=function(){UR(this)};
g.h.W=function(){this.A&&(this.A.disconnect(),this.A=null);this.F&&g.Du(this.F);this.o=null;SR.ga.W.call(this)};g.E(cS,g.R);g.h=cS.prototype;g.h.yI=function(a){a=cu(a);if(!fd(a,this.C)){var b=2;this.F&&(b|=8);this.C=a;this.yb(b,!0)}};
g.h.bD=function(){this.F&&this.yb(8,!0);this.yb(2,!1)};
g.h.Co=function(a){var b=cu(a);fd(b,this.C)||(this.C=b,(a=g.au(a))&&this.V(a)&&(this.yb(4,!0),this.g.Ma(this.B),this.B=this.g.O(this.A,"mouseover",this.Sv),this.N=this.g.O(this.A,"mouseout",this.Sv)))};
g.h.Sv=function(a){a=du(a);a&&this.V(a)||(this.C=new g.ed(window.NaN,window.NaN),dS(this))};
g.h.sz=function(){this.yb(1,!0)};
g.h.Vx=function(a){a=g.au(a);a instanceof window.Element&&!(0<a.tabIndex)||this.yb(1,!0)};
g.h.Rv=function(){this.F=!0;this.g.Ma(this.D);this.D=this.g.O(window.document,"mouseup",this.zI)};
g.h.zI=function(){this.F=!1;this.yb(8,!1);this.g.Ma(this.D);this.D=this.g.O(this.A,"mousedown",this.Rv)};
g.h.Tv=function(a){if(a=a.changedTouches[0])this.Y=a.identifier,this.g.Ma(this.H),this.H=this.g.O(this.A,"touchend",this.AI,void 0,!0),this.yb(1024,!0)};
g.h.AI=function(a){for(var b,c=0;c<a.changedTouches.length;c++){var d=a.changedTouches[c];if(d.identifier==this.Y){b=d;break}}b&&(this.g.Ma(this.H),this.H=this.g.O(this.A,"touchstart",this.Tv,void 0,!0),this.yb(1024,!1))};
g.h.yb=function(a,b){var c=!this.o;b?(this.o|=a,a&1&&this.J.start(),a&2&&this.K.start()):(this.o&=~a,a&1&&this.J.stop(),a&2&&this.K.stop(),a&512&&this.T.stop());this.o&512&&!(this.o&128)&&this.T.Jc(this.U);var d=!this.o;c!=d&&this.R("autohideupdate",d)};g.E(fS,g.X);fS.prototype.show=function(){fS.ga.show.call(this);this.N()};
fS.prototype.N=function(){var a=1-1/1.5;this.B=(this.B+this.J)%(this.width*a);this.C=(this.C+this.H)%(this.height*a);this.A.drawImage(this.K,-1*this.B,-1*this.C);this.A.fillRect(0,this.D,this.width,75);this.D=(this.D+75+7)%this.height-75;this.o.isActive()||this.F.Jc()};
fS.prototype.hide=function(){this.o.stop();this.F.stop();fS.ga.hide.call(this)};g.E(mS,g.X);var zZ=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;mS.prototype.show=function(){mS.ga.show.call(this);nS(this,function(a){a.show()})};
mS.prototype.hide=function(){mS.ga.hide.call(this);nS(this,function(a){a.hide()})};
mS.prototype.C=function(a){if(g.iS(a,this.o,!BE(g.V(this.o)))){a={as3:!1,html5:!0,player:!0,cpn:this.o.getVideoData().clientPlaybackNonce};var b=this.o;b.ua("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:a});b.isFullscreen()&&g.ON(b)}};g.wa(XS);var KW=g.y("yt.player.utils.VideoTagPool.instance")||XS.getInstance();g.x("yt.player.utils.VideoTagPool.instance",KW,void 0);g.h=XS.prototype;g.h.hq=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)aT(this)}};
g.h.iy=function(a,b){if(this.g.length)return this.g.pop();var c=aT(this,a,b);a||g.xb(this.g,c);return c};
g.h.dH=function(a){if(a&&g.rb(this.o,a)){a.src&&(NC&&0<a.readyState&&(a.currentTime=Math.max(tZ,0)),a.removeAttribute("src"),a.load(),a.g&&a.g.o&&(a.g&&a.g.dispose(),a.g=null));for(var b in Wt)Wt[b][0]==a&&g.$t(b);g.xb(this.o,a);g.xb(this.A,a)}};
g.h.dz=function(a){return this.g.length>=(a||1)};
g.h.vx=function(){for(var a=this.A.length-1;0<=a;a--)$S(this,this.A[a]);this.g.length==this.o.length&&4<=this.g.length||(4>this.o.length?this.hq(4):(this.g=[],(0,g.G)(this.o,function(a){$S(this,a)},this)))};
XS.prototype.fillPool=XS.prototype.hq;XS.prototype.getTag=XS.prototype.iy;XS.prototype.releaseTag=XS.prototype.dH;XS.prototype.hasTags=XS.prototype.dz;XS.prototype.activateTags=XS.prototype.vx;g.E(bT,g.X);g.E(dT,g.X);dT.prototype.show=function(){dT.ga.show.call(this);this.H()};
dT.prototype.hide=function(){dT.ga.hide.call(this);this.F.stop()};
dT.prototype.H=function(){var a=g.W(this.o),b=this.o.getVideoData(),c=this.o.o,d=c.app.D.la(),e=this.o.g,f=a.Ul(),k=tM(a.aa,"bandwidth"),l=8*g.jb(k)/1024,m=tM(a.aa,"networkactivity"),n=g.jb(m)/1024,q=b.va,t=tM(a.aa,"livelatency"),v=g.jb(t),D=tM(a.aa,"bufferhealth"),C=g.jb(D);if(120<v||0>v)v="Uncertain";else{if(b.latencyClass&&"UNKNOWN"!=b.latencyClass)switch(b.latencyClass){case "NORMAL":var B="Optimized for Normal Latency";break;case "LOW":B="Optimized for Low Latency";break;case "ULTRALOW":B="Optimized for Ultra Low Latency";
break;default:B="Unknown Latency Setting"}else B=b.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";v=v.toFixed(1)+" s, "+B}a.H?(B=a.H.g,B=B.g+" / "+B.o,hy($L,XM(a))&&(B+=", SD only")):B="";var U=g.CE(),Z=UG(b,a.getCurrentTime());Z=Z?Z.sequence:window.NaN;c=g.SN(c).infopanel;var Aa=b.videoId,pa=b.clientPlaybackNonce,ua=b.clientPlaybackNonce?"":"display:none";f=f.totalVideoFrames?""+(f.droppedVideoFrames||0)+"/"+f.totalVideoFrames:"-";var Wd=a.B?a.B.Aa:"",Qb;a:{if(b.vf&&
(Qb=b.vf.match(/url=(https?)/))&&2==Qb.length){Qb=Qb[1];break a}Qb=""}d={video_id:Aa,cpn:pa,cpn_style:ua,mime:"",dash:"no",dropped_frames:f,stream_host:Wd,stream_type:Qb||e.Z,dimensions:d.clientWidth+" x "+d.clientHeight+(1<U?" * "+U:""),resolution:d.videoWidth+" x "+d.videoHeight,volume:Math.round(this.o.K.getVolume())+"%",relative_loudness:b.relativeLoudness.toFixed(1)+" db",bandwidth_kbps:l.toFixed(0)+" Kbps",buffer_health_seconds:C.toFixed(1)+" s",live_latency_style:q?"":"display:none",live_latency_message:v,
drm_style:B?"":"display:none",drm:B,sequence_number:Z,sequence_number_style:"display:none",network_activity_bytes:n.toFixed(0)+" KB",shader_info:c,shader_info_style:c?"":"display:none"};b.Ca&&(e=$x(b.Ca)?"yes":"no",e+=" ("+Wx(b.Ca),b.tc&&$x(b.Ca)&&(e+="/"+Wx(b.tc)),e+=")",b.ec()&&(e+=" Manifestless"),d.dash=e,d.mime=b.Ca.mimeType,e=b.Ca.video.fps,1<e&&(d.resolution+="@"+e),b.Ca.video.g||b.Ca.video.primaries?(e=b.Ca.video.g||"unknown","smpte2084"==e?e+=" (PQ)":"arib-std-b67"==e&&(e+=" (HLG)"),d.color=
e+" / "+(b.Ca.video.primaries||"unknown"),d.color_style=""):d.color_style="display:none");(a=UM(a))&&a.video&&(d.optimal_resolution=a.video.width+" x "+a.video.height,1<a.video.fps&&(d.optimal_resolution+="@"+a.video.fps));cT(this.A,k);cT(this.D,m);cT(this.C,t);cT(this.B,D);this.update(d);this.F.start()};g.E(eT,g.I);eT.prototype.get=function(a){var b=g.nb(this.o,function(b){return b[0]==a});
return b?b[1]:null};
eT.prototype.set=function(a,b){this.remove(a,!0);for(this.o.push([a,b]);this.o.length>this.A;){var c=this.o.shift();this.g&&this.g(c[1])}};
eT.prototype.remove=function(a,b){if(b&&this.g){var c=this.get(a);if(c)this.g(c);else return}yb(this.o,function(b){return b[0]==a})};
eT.prototype.W=function(){this.g&&(0,g.G)(this.o,function(a){this.g(a[1])},this)};g.p(gT,g.I);gT.prototype.A=function(a){this.g=a[a.length-1].intersectionRatio};
gT.prototype.W=function(){g.I.prototype.W.call(this);this.g=null;this.o&&this.o.disconnect()};g.AZ=xf(function(){var a=g.w.AudioContext||g.w.webkitAudioContext;try{return new a}catch(b){return b.name}});g.p(hT,g.X);hT.prototype.show=function(){g.X.prototype.show.call(this);this.o.Jc()};
hT.prototype.hide=function(){this.A.stop();g.X.prototype.hide.call(this)};g.p(nT,g.X);g.h=nT.prototype;g.h.show=function(){this.g||(this.C.O(this.o,"videodatachange",this.A.Jc,this.A),this.C.O(this.o,"videoplayerreset",this.A.Jc,this.A));g.X.prototype.show.call(this)};
g.h.hide=function(){this.C&&g.ku(this.C);g.X.prototype.hide.call(this)};
g.h.WB=function(a){var b=g.V(this.o);b.experiments.g("disable_new_pause_state3")&&BE(b)&&(a=WH(a.state)&&!WH(a.g)||NN(this.o)&&g.T(a.state,2),g.rh(this.element,"transition-delay",a?"2s":""));this.A.Jc()};
g.h.LG=function(){this.A.Jc()};
g.h.VB=function(){this.B.stop();this.hide();this.A.Jc()};
g.h.xs=function(){var a=g.LN(this.o);if(3==this.o.Fa()&&(a.sb()||g.T(a,4)))var b=!0;else(b=g.FN(this.o).U)&&b.xH()?b=!0:(b=g.V(this.o),b=g.T(a,2)&&HN(this.o)&&b.xa?!0:!1);b?(b=!0,window.document.activeElement==this.Lh&&this.o.getRootNode().focus(),this.Lh.style.display="none"):(this.Lh.style.display="",WH(a)?b=!0:(b=!g.V(this.o).experiments.g("disable_new_pause_state3"),b=!g.T(a,2)||HN(this.o)||b&&g.vX(this.o.app)?!1:!0));b?(this.B.show(),this.RH(this.o.ce(),this.o.getVideoData())):(this.B.hide(),
g.T(a,1)||this.B.stop())};
g.h.RH=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c=g.V(this.o);b=g.na(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,!(!d||d instanceof g.uG&&!d.videoId)){var e=g.MN(this.o).Ga();var f=g.CE(),k=e.width*f;f*=e.height;if(1280<k||720<f)if(e=d.ub(c,"maxresdefault.jpg"))break;if(c.experiments.g("enable_popular_thumbnail_size_serving_for_embeds")){if(854<k||480<f)if(e=d.ub(c,"hq720.jpg")||d.ub(c,"maxresdefault.jpg"))break;if(640<k||360<f)if(e=d.ub(c,"pop2.jpg"))break;
if(560<k||315<f)if(e=d.ub(c,"sddefault.jpg"))break;if(480<k||270<f)if(e=d.ub(c,"pop1.jpg"))break}if(640<k||480<f)if(e=d.ub(c,"maxresdefault.jpg"))break;if(c.experiments.g("enable_embed_quality_improvement")){if(480<k||360<f)if(e=d.ub(c,"sddefault.jpg"))break;if(320<k||180<f)if(e=d.ub(c,"hqdefault.jpg"))break;if(120<k||90<f)if(e=d.ub(c,"mqdefault.jpg"))break}if(320<k||180<f)if(e=d.ub(c,"sddefault.jpg")||d.ub(c,"hqdefault.jpg")||d.ub(c,"mqdefault.jpg"))break;if(e=d.ub(c,"default.jpg"))break}this.D.style.backgroundImage=
e?"url("+e+")":""};g.p(pT,g.iu);pT.prototype.C=function(){this.B();var a=g.V(this.M),b=this.M.getVideoData(),c=[];a.H||c.push({src:b.ub(a,"mqdefault.jpg"),sizes:"320x180"});this.g.metadata=new window.MediaMetadata({title:b.title,artist:b.author,artwork:c});a=NN(this.M);this.o.has("nexttrack")!=a&&(c=b=null,a&&(b=(0,g.z)(function(){iT(this.A,gs(),g.Q("YTP_NEXT"));this.M.Jg()},this),c=(0,g.z)(function(){mT(this.A);
this.M.Sh()},this)),oT(this,"nexttrack",b),oT(this,"previoustrack",c))};
pT.prototype.B=function(){var a=g.LN(this.M);a=a.isError()?"none":VH(a)?"playing":"paused";this.g.playbackState=a};
pT.prototype.W=function(){this.g.playbackState="none";this.g.metadata=null;for(var a=g.na(this.o),b=a.next();!b.done;b=a.next())oT(this,b.value,null);g.iu.prototype.W.call(this)};g.p(qT,g.X);qT.prototype.T=function(a,b){rT(this,b);this.D&&sT(this,this.D)};
qT.prototype.N=function(a){var b=this.M.getVideoData();this.A!=b.videoId&&rT(this,b);this.o&&sT(this,a.state);this.D=a.state};
qT.prototype.K=function(){this.C.hide();this.A&&(this.B[this.A]=(this.B[this.A]||0)+((0,g.F)()-this.H));this.H=0};g.p(uT,g.X);uT.prototype.hide=function(){this.o.stop();this.B.style.display="none";g.X.prototype.hide.call(this)};
uT.prototype.C=function(a){tT(this,a.state)};
uT.prototype.D=function(){tT(this,g.LN(this.A))};
uT.prototype.F=function(){this.B.style.display="block"};g.p(vT,g.eR);g.h=vT.prototype;g.h.show=function(){var a=xT(this);g.eR.prototype.show.call(this);this.Z&&(this.J.O(window,"blur",this.ob),this.J.O(window.document,"click",this.qC));a||this.R("show",!0)};
g.h.hide=function(){var a=xT(this);g.eR.prototype.hide.call(this);wT(this);a&&this.R("show",!1)};
g.h.qd=function(a,b){this.C=a;this.N.show();b?(this.K||(this.K=this.J.O(this.M,"appresize",this.lp)),this.lp()):this.K&&(this.J.Ma(this.K),this.K=null);a&&(a.getAttribute("aria-haspopup"),a.setAttribute("aria-expanded",!0),window.document.activeElement&&g.Rd(a,window.document.activeElement)&&this.focus())};
g.h.lp=function(){qW(g.FN(this.M).F,this.element,this.C)};
g.h.ob=function(){var a=xT(this);wT(this);this.N.hide();a&&this.R("show",!1)};
g.h.tf=function(a,b){xT(this)?this.ob():this.qd(a,b)};
g.h.qC=function(a){var b=eu(a);b&&(g.Rd(this.element,b)||this.C&&g.Rd(this.C,b)||!g.qR(a))||this.ob()};g.p(zT,vT);zT.prototype.D=function(a){a?(yT(this),this.qd()):this.ob()};
zT.prototype.onClick=function(){this.A||(this.A=!0,g.TN(this.o,"mutedAutoplayClick",{videoPlayedSeconds:this.o.getCurrentTime()-this.o.getVideoData().Uq}));this.o.ee()};g.p(AT,g.iu);g.h=AT.prototype;g.h.init=function(){var a=g.LN(this.g);this.sk(a);this.sg();this.Id()};
g.h.rs=function(a,b){if(this.Ha!=b.videoId){this.Ha=b.videoId;var c=this.B;c.U=b&&0<b.Ef.length?5E3:3E3;c.yb(512,!0);this.sg()}};
g.h.uF=function(){this.rs(0,this.g.getVideoData())};
g.h.Wg=function(){var a=g.VN(this.g)&&g.WN(this.g);(a=this.Aa||a)||(a=g.FN(this.g).D,a=!!a&&a.bB());return a||this.Wa||this.g.app.jc};
g.h.Fe=function(){var a=!this.Wg();g.N(this.g.getRootNode(),"ytp-menu-shown",!a)};
g.h.OB=function(a){if(!g.Rd(this.g.getRootNode(),a))return!1;for(;a&&!g.Vd(a);)a=a==this.g.getRootNode()?null:g.Qd(a);return!!a};
g.h.Gn=function(a){var b=this.g.getRootNode();g.N(b,"ytp-autohide",a);a&&(this.K=!1,g.M(b,"ytp-touch-mode"));b=this.g;a=!a;b.ua("onVideoAreaChange");b.ua(a?"onShowControls":"onHideControls")};
g.h.SF=function(a){if(WH(g.LN(this.g))&&!g.V(this.g).Ja){var b=this.g.getVideoData();b.videoId&&this.g.jn(bH(b))}this.B.o||BT(this,eu(a))||xT(this.Y)||(g.LN(this.g),g.hu(a));this.K=!0;g.L(this.g.getRootNode(),"ytp-touch-mode");this.B.yb(2,!0)};
g.h.OF=function(a){g.qR(a)&&xT(this.Y)?(this.Y.onClick(),2==this.g.Fa()&&this.g.gc()):BT(this,eu(a))||(this.B.yb(2,!0),g.qR(a)&&(this.kj()?g.hu(a):(a=g.LN(this.g),g.T(a,2)&&HN(this.g)||jT(this.F,!VH(a)),g.V(this.g).Aa&&!WH(a)?this.ca.isActive()?(this.F.hide(),this.ca.stop()):this.ca.start():this.ts())))};
g.h.ts=function(){var a=g.LN(this.g);g.T(a,2)&&HN(this.g)||(VH(a)?this.g.Ub():this.g.gc())};
g.h.PF=function(a){BT(this,eu(a))||3!=this.g.Fa()&&g.ON(this.g)};
g.h.QF=function(a){CT(this,.3,a.scale);g.hu(a)};
g.h.RF=function(a){CT(this,.1,a.scale)};
g.h.Id=function(){var a=this.Wc(),b=g.MN(this.g).Ga(),c=this.g.isFullscreen(),d=this.g.getRootNode();g.V(this.g).experiments.g("autohide_resize_killswitch")||g.bt&&dS(this.B);g.N(d,"ytp-fullscreen",c);g.N(d,"ytp-small-mode",!a&&(480>b.width||270>b.height));g.N(d,"ytp-big-mode",a);this.D&&lS(this.D,b)};
g.h.wF=function(a){this.sk(a.state);this.sg()};
g.h.sg=function(){var a=2==this.g.Fa(),b=!0;a&&(b=g.FN(this.g).A.vB());var c=g.V(this.g),d=c.experiments.g("embed_show_infobar_on_playback")&&c.o&&!c.F&&5==this.g.app.T;a=!!this.Ha&&!g.GN(this.g)&&(a?b:c.sc||this.g.isFullscreen()||d);this.N!=a&&(this.N=a,g.N(this.g.getRootNode(),"ytp-hide-info-bar",!a))};
g.h.sk=function(a){var b=WH(a);b!=this.Db&&(this.Db=b,this.Va&&this.Ma(this.Va),this.Va=this.O(g.MN(this.g),"touchstart",this.SF,void 0,b));var c=this.B,d;(d=a.sb()&&!g.T(a,32))||(d=g.FN(this.g).N,d=!!d&&d.dB());c.yb(128,!d);c=3==this.g.Fa();this.B.yb(256,c);c=this.g.getRootNode();g.T(a,2)?d=["ended-mode"]:(d=[],g.T(a,8)?d.push("playing-mode"):g.T(a,4)&&d.push("paused-mode"),g.T(a,1)&&!g.T(a,32)&&d.push("buffering-mode"),g.T(a,32)&&d.push("seeking-mode"),g.T(a,64)&&d.push("unstarted-mode"));g.Mb(this.pa,
d)||(g.op(c,this.pa),this.pa=d,g.np(c,d));d=g.V(this.g);var e=g.T(a,2);g.N(c,"ytp-hide-controls",("3"==d.B?!e:"1"!=d.B)||b);g.N(c,"ytp-native-controls","3"==d.B&&!b&&!e);if(g.T(a,128)){this.D||(this.D=new mS(this.g),g.J(this,this.D),this.D.na(c),g.gO(this.g,this.D.element,4));b=this.D;a=a.g;for(c=0;c<b.B.length;c++)b.Ma(b.B[c]);b.B=[];c=a.messageKey;d=g.V(b.o);"play"!=d.g||"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c&&"YTP_ERROR_UNSUPPORTED_DEVICE"!=c||(c="YTP_HTML5_FLASH_DEPRECATED");if("YTP_ERROR_GENERIC_WITHOUT_LINK"!=
c||d.Mb)if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c||d.Mb)if("YTP_HTML5_FLASH_DEPRECATED"==c)b.zb(zS(b,c,"//support.google.com/googleplay/answer/2844198#movies",!1,!0,"YTP_ERROR_VIDEO_UNAVAILABLE"));else{a=a.message.split(zZ);c=[];for(d=0;d<a.length;d+=3){e=a[d++].split("\n");c.push(e[0]);for(var f=1;f<e.length;f++)c.push({G:"br"}),c.push(e[f]);d<a.length&&c.push({G:"a",P:{href:a[d],target:a[d+1]},I:[a[d+2]]})}b.zb({G:"span",I:c})}else b.zb(zS(b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",
"//"+xE(d)+"/html5"));else if(b.zb(zS(b,"YTP_ERROR_GENERIC_WITH_LINK_AND_CPN","//support.google.com/youtube/?p=player_error1",!0)),d.ka&&!d.o)for(a=(0,g.z)(b.C,b),d=b.element.getElementsByTagName("a"),e=0;e<d.length;e++)c=b.O(d[e],"click",a),b.B.push(c);this.D.show()}else this.D&&(this.D.dispose(),this.D=null)};
g.h.kj=function(){return g.VN(this.g)&&g.WN(this.g)?(this.g.Vh(!1,!1),!0):g.GN(this.g)?(g.IN(this.g,!0),!0):!1};
g.h.PB=function(a){this.Wa=a;this.Fe()};
g.h.Wc=function(){return!1};g.E(DT,g.eR);DT.prototype.B=function(){var a=this.A.gf();a=IR(new GR(a.seekableStart,a.seekableEnd),a.current,0);this.D.style.width=100*a+"%"};
DT.prototype.C=function(){g.hE(g.V(this.A))||(2==this.A.Fa()?this.o||(this.show(),this.o=this.O(this.A,"progresssync",this.B),this.B()):this.o&&(this.hide(),this.Ma(this.o),this.o=null))};g.p(FT,g.X);FT.prototype.W=function(){this.o&&this.o();g.X.prototype.W.call(this)};
FT.prototype.F=function(){g.Eu("iv-button-mouseover")};
FT.prototype.D=function(a){g.VN(this.M);var b=g.mp(this.M.getRootNode(),"ytp-cards-teaser-shown");g.Eu("iv-teaser-clicked",b);a=0==a.screenX&&0==a.screenY;this.M.Vh(!g.WN(this.M),a,g.XY.hp)};g.p(HT,g.X);g.h=HT.prototype;g.h.tv=function(){g.VN(this.M)&&g.WN(this.M)&&this.g&&3!=this.C.g&&this.Zh()};
g.h.RB=function(){this.Zh();g.Eu("iv-teaser-clicked",!!this.o);this.M.Vh(!0,!1,g.XY.hp)};
g.h.QB=function(){g.Eu("iv-teaser-mouseover");this.o&&this.o.stop()};
g.h.iG=function(a){this.o||!a||g.WN(this.M)||this.A&&this.A.isActive()||(IT(this,a),g.Eu("iv-teaser-shown"))};
g.h.us=function(){this.H.stop();this.o&&this.o.isActive()&&this.J.start()};
g.h.kf=function(){this.J.stop();this.o&&!this.o.isActive()&&this.H.start()};
g.h.eF=function(){this.o&&this.o.stop()};
g.h.bF=function(){this.Zh()};
g.h.Zh=function(){!this.o||this.B&&this.B.isActive()||(this.C.hide(),g.M(this.M.getRootNode(),"ytp-cards-teaser-shown"),this.B=new g.O(function(){for(var a=g.na(this.D),b=a.next();!b.done;b=a.next())this.Ma(b.value);this.D=[];this.o&&(this.o.dispose(),this.o=null);ET(this.F,!0)},330,this),this.B.start())};
g.h.W=function(){var a=this.M.getRootNode();a&&g.M(a,"ytp-cards-teaser-shown");g.Le(this.A,this.B,this.o);g.X.prototype.W.call(this)};g.p(g.KT,g.eR);g.KT.prototype.ma=function(a,b){g.eR.prototype.ma.call(this,a,b);this.R("size-change")};g.p(MT,g.eR);MT.prototype.ca=function(){this.R("size-change")};
MT.prototype.focus=function(){this.U.focus()};
MT.prototype.ha=function(){this.R("back")};g.p(g.NT,MT);g.NT.prototype.V=function(){this.F.R("size-change")};
g.NT.prototype.focus=function(){for(var a=0,b=0;b<this.Ia.length;b++)if("true"==this.Ia[b].element.getAttribute("aria-checked")){a=b;break}this.Ia[a].focus()};g.p(g.ST,vT);g.h=g.ST.prototype;g.h.show=function(){vT.prototype.show.call(this);this.ti()};
g.h.hide=function(){vT.prototype.hide.call(this);1<this.o.length&&g.XT(this)};
g.h.ti=function(){ZT(this);this.g&&(UT(this),g.Jh(this.element,this.size))};
g.h.ud=function(){var a=this.o.pop(),b=TT(this);VT(this,a,b,!0)};
g.h.yH=function(a,b,c){this.F.dispose();this.F=null;g.L(this.element,"ytp-popup-animating");c?(g.L(a.element,"ytp-panel-animate-forward"),g.M(b.element,"ytp-panel-animate-back")):(g.L(a.element,"ytp-panel-animate-back"),g.M(b.element,"ytp-panel-animate-forward"));g.Jh(this.element,this.size);this.D=new g.O(g.A(this.rD,a,b),250,this);this.D.start()};
g.h.rD=function(a){g.M(this.element,"ytp-popup-animating");a.detach();g.op(a.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);this.D.dispose();this.D=null};
g.h.iC=function(a){if(!g.fu(a))switch(g.bu(a)){case 27:this.ob();g.hu(a);break;case 37:1<this.o.length&&this.ud();g.hu(a);break;case 39:g.hu(a)}};
g.h.focus=function(){TT(this).focus()};
g.h.W=function(){vT.prototype.W.call(this);this.F&&this.F.dispose();this.D&&this.D.dispose()};g.p($T,g.KT);$T.prototype.o=function(a){g.fu(a)||39!=g.bu(a)||(this.element.click(),g.hu(a))};g.p(bU,g.KT);bU.prototype.J=function(){cU(this,!this.o);this.R("select",this.o)};
bU.prototype.getValue=function(){return this.o};g.p(fU,g.NT);g.h=fU.prototype;g.h.ZD=function(){KO(this.H.element)};
g.h.qE=function(){gU(this,this.M.Ph(!0))&&iT(this.N.F,{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",P:{d:"M13.5 24.3L7.2 18.0l-2.1 2.1L13.5 28.5 31.5 10.5l-2.1-2.1L13.5 24.3z",fill:"#fff"}}]})};
g.h.rE=function(){gU(this,this.M.Er())&&iT(this.N.F,g.Xr?{G:"div",X:["ytp-icon","ytp-icon-code"]}:{G:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",P:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]});g.kO(this.M,this.o.element)};
g.h.uE=function(){gU(this,this.M.getVideoUrl(!0,!0))&&iT(this.N.F,fs());g.kO(this.M,this.B.element)};
g.h.tE=function(){gU(this,this.M.getVideoUrl(!1,!0))&&iT(this.N.F,fs());g.kO(this.M,this.A.element)};
g.h.IE=function(a){cU(this.D,a)};
g.h.JE=function(){var a=this.D.getValue();bX(this.M.app,a);this.K.ob();g.kO(this.M,this.D.element)};
g.h.IF=function(a){var b=g.W(this.M.app);b&&b.Gg(new g.KE("feedback",!1,{gpu:MM()}));if(g.iS(a,this.M,!BE(g.V(this.M)))){a=this.M;b=b={as3:!1,html5:!0,player:!0};var c=a.yq();c.debug_error&&(b.player_error=c.debug_error.errorCode,b.player_error_details=c.debug_error.errorDetail);b.debug_text=a.Ph(!0);a.ua("onFeedbackStartRequest",b);a.isFullscreen()&&g.ON(a)}this.K.ob()};
g.h.ZF=function(){this.M.Kr();this.K.ob()};
g.h.TB=function(a,b){eU(this,b)};g.p(jU,g.ST);g.h=jU.prototype;g.h.show=function(){this.H||(this.H=new fU(this.A,this.V,this),g.J(this,this.H),g.WT(this,this.H));g.ST.prototype.show.call(this);g.lO(this.A,this.element,!0);hU(this.H,!0)};
g.h.hide=function(){iU(this);g.ST.prototype.hide.call(this);g.lO(this.A,this.element,!1);this.H&&hU(this.H,!1)};
g.h.YD=function(a){var b=eu(a);this.g||b&&(g.Yd(b,"a")||g.Zd(b,"ytp-no-contextmenu"))||(g.hu(a),kU(this),this.element.style.left="",this.element.style.top="",a=cu(a),a.x++,a.y++,this.qd(),b=g.Eh(window.document.body),a=g.ir(a,this.size,0,void 0,b,5),g.zh(this.element,g.hh(a.rect)),g.ku(this.B),this.B.O(window.document,"contextmenu",this.jE),this.B.O(this.A,"fullscreentoggled",this.UB),this.B.O(this.A,"pageTransition",this.oF))};
g.h.jE=function(a){g.fu(a)||g.Rd(this.element,eu(a))||this.ob()};
g.h.UB=function(){this.ob();kU(this)};
g.h.oF=function(){this.ob()};var BZ,CZ;BZ=[{option:g.ZY.nl,message:"YTP_COLOR_WHITE"},{option:g.ZY.hx,message:"YTP_COLOR_YELLOW"},{option:g.ZY.Bw,message:"YTP_COLOR_GREEN"},{option:g.ZY.qw,message:"YTP_COLOR_CYAN"},{option:g.ZY.cw,message:"YTP_COLOR_BLUE"},{option:g.ZY.Iw,message:"YTP_COLOR_MAGENTA"},{option:g.ZY.To,message:"YTP_COLOR_RED"},{option:g.ZY.Qk,message:"YTP_COLOR_BLACK"}];CZ=[{option:0,text:"0%"},{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}];
g.oU=[{option:"fontFamily",message:"YTP_FONT_FAMILY",options:[{option:g.$Y.No,message:"YTP_FONT_FAMILY_MONO_SERIF"},{option:g.$Y.Ro,message:"YTP_FONT_FAMILY_PROP_SERIF"},{option:g.$Y.Mo,message:"YTP_FONT_FAMILY_MONO_SANS"},{option:g.$Y.Vk,message:"YTP_FONT_FAMILY_PROP_SANS"},{option:g.$Y.CASUAL,message:"YTP_FONT_FAMILY_CASUAL"},{option:g.$Y.CURSIVE,message:"YTP_FONT_FAMILY_CURSIVE"},{option:g.$Y.al,message:"YTP_FONT_FAMILY_SMALL_CAPS"}]},{option:"color",message:"YTP_FONT_COLOR",options:BZ},{option:"fontSizeIncrement",
message:"YTP_FONT_SIZE",options:[{option:-2,text:"50%"},{option:-1,text:"75%"},{option:0,text:"100%"},{option:1,text:"150%"},{option:2,text:"200%"},{option:3,text:"300%"},{option:4,text:"400%"}]},{option:"background",message:"YTP_BACKGROUND_COLOR",options:BZ},{option:"backgroundOpacity",message:"YTP_BACKGROUND_OPACITY",options:CZ},{option:"windowColor",message:"YTP_WINDOW_COLOR",options:BZ},{option:"windowOpacity",message:"YTP_WINDOW_OPACITY",options:CZ},{option:"charEdgeStyle",message:"YTP_CHAR_EDGE_STYLE",
options:[{option:g.YY.NONE,message:"YTP_EDGE_STYLE_NONE"},{option:g.YY.DROP_SHADOW,message:"YTP_EDGE_STYLE_DROP_SHADOW"},{option:g.YY.RAISED,message:"YTP_EDGE_STYLE_RAISED"},{option:g.YY.DEPRESSED,message:"YTP_EDGE_STYLE_DEPRESSED"},{option:g.YY.gp,message:"YTP_EDGE_STYLE_OUTLINE"}]},{option:"textOpacity",message:"YTP_FONT_OPACITY",options:[{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}]}];g.p(lU,g.iu);g.h=lU.prototype;
g.h.Jq=function(a){var b=!1,c=g.bu(a),d=eu(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,k=!1,l=g.V(this.g);g.fu(a)?(e=!1,k=!0):l.oe&&(e=!1);if(9==c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"==d.tagName||"A"==d.tagName||"INPUT"==d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!=m&&"button"!=m&&0!=m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"==d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),d=38==
c?d.previousSibling:d.nextSibling,"slider"==m?b=!0:e&&("option"==m?(d&&"option"==d.getAttribute("role")&&d.focus(),f=b=!0):m&&0==m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0==d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if((d=g.FN(this.g).B)&&e&&!f&&d.B&&d.B.g)switch(c){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:f=d.B.Fq(c)}l.Mb||!e||f||(f=String.fromCharCode(c).toLowerCase(),this.A+=f,0=="awesome".indexOf(this.A)?(f=!0,7==this.A.length&&g.pp(this.g.getRootNode(),
"ytp-color-party")):(this.A=f,f=0=="awesome".indexOf(this.A)));if(e&&!f){switch(c){case 32:k=!VH(g.LN(this.g));jT(this.o,k);k?this.g.gc():this.g.Ub();k=f=!0;break;case 37:this.g.Kc()&&(iT(this.o,ms()),this.g.pd(-5*this.g.Tb()),k=f=!0);break;case 39:this.g.Kc()&&(iT(this.o,es()),this.g.pd(5*this.g.Tb()),k=f=!0);break;case 38:k=Math.min(this.g.getVolume()+5,100);kT(this.o,k,!1);this.g.setVolume(k);k=f=!0;break;case 40:k=Math.max(this.g.getVolume()-5,0);kT(this.o,k,!0);this.g.setVolume(k);k=f=!0;break;
case 27:this.D()&&(k=f=!0);break;case 36:this.g.Hb(0);k=f=!0;break;case 35:this.g.Hb(window.Infinity),k=f=!0}if("3"!=l.B)switch(c){case 67:g.FN(this.g).g&&(k=this.g.Gb("captions","track"),(f=g.FN(this.g).g)&&f.lv(),f=this.o,k=k&&k.displayName?g.Q("YTP_SUBTITLES_OFF"):g.Q("YTP_SUBTITLES_ON"),iT(f,ps(),k),k=f=!0);break;case 79:pU(this,"textOpacity")&&(f=!0);break;case 87:pU(this,"windowOpacity")&&(f=!0);break;case 187:pU(this,"fontSizeIncrement",!1,!0)&&(f=!0);break;case 189:pU(this,"fontSizeIncrement",
!0,!0)&&(f=!0)}var n;48<=c&&57>=c?n=c-48:96<=c&&105>=c&&(n=c-96);null!=n&&(k=this.g.gf(),this.g.Hb(n/10*(k.seekableEnd-k.seekableStart)+k.seekableStart),k=f=!0)}}b&&this.Wn(!0);(b||k)&&this.C.yb(2,!0);(f||e&&nU(this,c,a.shiftKey))&&g.hu(a);l.jb&&(a={keyCode:g.bu(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.fu(a),fullscreen:this.g.isFullscreen()},this.g.ua("onKeyPress",a))};
g.h.Kq=function(a){a=g.bu(a);var b=g.FN(this.g).B;b&&b.B&&b.B.g&&b.B.Hq(a);9==a&&this.Wn(!0)};
g.h.Wn=function(a){g.N(this.g.getRootNode(),"ytp-probably-keyboard-focus",a);g.N(this.F.element,"ytp-probably-keyboard-focus",a)};
g.h.zs=function(a){g.FN(this.g).g&&this.g.zc("captions","sampleSubtitles",a)};
g.h.W=function(){g.xp(this.B);g.iu.prototype.W.call(this)};g.p(rU,g.X);g.h=rU.prototype;g.h.hide=function(){g.M(this.o.getRootNode(),"ytp-expand-pause-overlay");g.X.prototype.hide.call(this)};
g.h.PD=function(){this.V=!0;g.M(this.o.getRootNode(),"ytp-expand-pause-overlay");this.H.focus()};
g.h.RD=function(){this.V=!1;g.L(this.o.getRootNode(),"ytp-expand-pause-overlay")};
g.h.jC=function(){tU(this,this.C-this.F)};
g.h.kC=function(){tU(this,this.C+this.F)};
g.h.TD=function(a,b){if(g.iS(b,this.o,this.da)){var c=this.A[a],d=c.wb().videoId,e=c.getPlaylistId();g.uX(this.o.app,d,c.Qc,e,void 0,void 0)}};
g.h.lC=function(){this.un(g.MN(this.o).Ga())};
g.h.mC=function(a){g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32)||(g.T(a.state,4)&&!g.T(a.state,2)?this.A.length&&(this.V||(g.L(this.o.getRootNode(),"ytp-expand-pause-overlay"),sU(this)),this.J.show()):this.J.hide())};
g.h.un=function(a){var b=16/9,c=this.Z.Wc();a=a.width-(c?136:68);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ia["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.N.style.height=b+"px";this.U=c;this.F=a;this.C=0;this.vv(0);sU(this)};
g.h.nC=function(){var a=this.o.getVideoData();a.fe?(a=(0,g.Md)(a.fe,function(a){return a&&!a.list}),this.A=(0,g.H)(a,function(a){return g.fT(a)})):this.A.length=0;
uU(this)};
g.h.vv=function(a){this.N.scrollLeft=-a};
g.p(qU,g.I);qU.prototype.start=function(a,b,c){this.g=a;this.H=b;this.D=c;this.F=(0,g.Ru)();this.A()};
qU.prototype.A=function(){var a=(0,g.Ru)()-this.F,b=this.B;a=fq(b,a/this.D);if(0==a)b=b.F;else if(1==a)b=b.H;else{var c=ad(b.F,b.C,a),d=ad(b.C,b.D,a);b=ad(b.D,b.H,a);c=ad(c,d,a);d=ad(d,b,a);b=ad(c,d,a)}b=g.Zc(b,0,1);this.C((this.H-this.g)*b+this.g);1>b&&this.o.start()};g.p(vU,g.X);vU.prototype.A=function(a){g.iS(a,this.o)&&this.o.Gr(this.bb)};g.p(wU,vT);g.h=wU.prototype;g.h.show=function(){vT.prototype.show.call(this);this.F.O(this.A,"videodatachange",this.vn);this.F.O(this.A,"onPlaylistUpdate",this.vn);this.vn()};
g.h.hide=function(){vT.prototype.hide.call(this);g.ku(this.F);xU(this,null)};
g.h.vn=function(){xU(this,this.A.ce())};
g.h.mk=function(){var a=this.o.Mj;if(a==this.H)this.B.element.setAttribute("aria-checked",!1),this.B=this.D[this.o.bb];else{for(var b=g.na(this.D),c=b.next();!c.done;c=b.next())c.value.dispose();b=this.o.getLength();this.D=[];for(c=0;c<b;c++){var d=new vU(this.A,this.o,c);this.D.push(d);d.na(this.Ia)}this.B=this.D[this.o.bb];this.H=a}this.B.element.setAttribute("aria-checked",!0)};
g.h.lG=function(a){var b=this.A.getVideoUrl(!0);jS(b,this.A,a)};
g.h.focus=function(){this.B.focus()};
g.h.W=function(){this.hide();vT.prototype.W.call(this)};g.p(yU,g.X);yU.prototype.A=function(){g.N(this.element,"ytp-playlist-menu-button-tiny",400>g.MN(this.B).Ga().width);this.o&&2!=this.B.Fa()?(this.update({text:g.Q("YTP_PLAYLIST_POSITION",{CURRENT_POSITION:this.o.bb+1,PLAYLIST_LENGTH:this.o.getLength()}),title:g.Q("YTP_PLAYLIST_NAME",{PLAYLIST_NAME:this.o.title})}),this.g||(this.show(),$U(this.C))):this.g&&(this.hide(),$U(this.C))};
yU.prototype.D=function(){this.o&&this.o.unsubscribe("shuffle",this.A,this);(this.o=this.B.ce())&&this.o.subscribe("shuffle",this.A,this);this.A()};g.p(zU,g.X);zU.prototype.B=function(a){g.LO(this,g.T(a.state,2))};
zU.prototype.A=function(){g.LN(this.o);this.o.gc()};g.p(AU,vT);g.h=AU.prototype;g.h.rF=function(a){a=eu(a);g.Rd(this.T,a)||g.Rd(this.F,a)||this.tf()};
g.h.ob=function(){vT.prototype.ob.call(this);this.A.xg(this.element)};
g.h.show=function(){var a=this.g;vT.prototype.show.call(this);this.Hs();a||this.o.ua("onSharePanelOpened")};
g.h.Hs=function(){g.L(this.element,"ytp-share-panel-loading");g.M(this.element,"ytp-share-panel-fail");var a=this.o.getVideoData(),b=this.o.getPlaylistId(),c=b&&this.H.checked;g.N(this.element,"ytp-share-panel-has-playlist",!!b);var d={action_get_share_info:1,feature:"player_embedded",video_id:a.videoId},e=g.V(this.o);e.Ib&&(d.authuser=e.Ib);e.pageId&&(d.pageid=e.pageId);c&&(d.list=b);g.Us(g.V(this.o).baseYtUrl+"share_ajax",{method:"GET",onError:(0,g.z)(this.Gs,this),rb:(0,g.z)(function(a,b){if(b){if(b.actions&&
wu(b.actions),!this.fa()){g.M(this.element,"ytp-share-panel-loading");CU(this);for(var c=b.links,d=0,e=0;e<c.length&&3>d;e++){var f=c[e],k=BU(f.img);k&&(k=new g.X({G:"a",X:["ytp-share-panel-service-button","ytp-button"],P:{href:f.url,target:"_blank",title:f.sname},I:[k]}),k.ba("click",g.A(this.VF,f.url)),g.Je(k,GT(this.A,k.element)),this.B.push(k),d++)}c=new g.X({G:"a",X:["ytp-share-panel-service-button","ytp-button"],I:[{G:"span",L:"ytp-share-panel-service-button-more",I:[g.Xr?{G:"div",X:["ytp-icon",
"ytp-icon-share-more"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},I:[{G:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{G:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],P:{href:b.more,target:"_blank",title:g.Q("YTP_MORE")}});c.ba("click",(0,g.z)(this.YE,this,b.more));g.Je(c,GT(this.A,c.element));this.B.push(c);this.ma("buttons",this.B)}}else this.Gs()},this),
Wb:d,withCredentials:!0});a=e.getVideoUrl(a.videoId,c?b:void 0,void 0,!0);this.ma("link",a);this.ma("linkText",a);KO(this.D)};
g.h.Gs=function(){g.M(this.element,"ytp-share-panel-loading");g.L(this.element,"ytp-share-panel-fail")};
g.h.VF=function(a,b){if(g.qR(b)){var c=void 0;c=void 0===c?{}:c;c.target=c.target||"YouTube";c.width=c.width||"600";c.height=c.height||"600";var d=c;d||(d={});c=window;var e=a instanceof Mc?a:Qc("undefined"!=typeof a.href?a.href:String(a));var f=d.target||a.target,k=[];for(l in d)switch(l){case "width":case "height":case "top":case "left":k.push(l+"="+d[l]);break;case "target":case "noreferrer":break;default:k.push(l+"="+(d[l]?1:0))}var l=k.join(",");sc()&&c.navigator&&c.navigator.standalone&&f&&
"_self"!=f?(l=c.document.createElement("A"),g.Wc(l,e),l.setAttribute("target",f),d.noreferrer&&l.setAttribute("rel","noreferrer"),e=window.document.createEvent("MouseEvent"),e.initMouseEvent("click",!0,!0,c,1),l.dispatchEvent(e),c={}):d.noreferrer?(c=c.open("",f,l),e=Nc(e),c&&(g.FE&&-1!=e.indexOf(";")&&(e="'"+e.replace(/'/g,"%27")+"'"),c.opener=null,e=Yc(Fc("b/12014412, meta tag with sanitized URL"),'<META HTTP-EQUIV="refresh" content="0; url='+Va(e)+'">'),c.document.write(g.Uc(e)),c.document.close())):
c=c.open(Nc(e),f,l);c&&(c.opener||(c.opener=window),c.focus());g.hu(b)}};
g.h.YE=function(a,b){jS(a,this.o,b)&&this.o.ua("SHARE_CLICKED")};
g.h.CC=function(a){!a&&xT(this)&&this.tf()};
g.h.focus=function(){this.D.focus()};
g.h.W=function(){vT.prototype.W.call(this);CU(this)};g.p(DU,g.X);DU.prototype.F=function(){this.H.tf(this.element,!1);g.kO(this.o,this.element)};
DU.prototype.C=function(){var a=g.V(this.o);this.ma("icon",a.experiments.g("embed_new_share_icon")&&a.o?g.Xr?{G:"div",X:["ytp-icon","ytp-icon-ios-share"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"-6 -6 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-0.9 2-2 2H6c-1.11 0-2-0.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"}}]}:g.Xr?{G:"div",X:["ytp-icon","ytp-icon-sharrow"]}:{G:"svg",
P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]});a=a.Ji&&2!=this.o.Fa();var b=g.MN(this.o).Ga().width;this.B=!!this.o.getVideoData().videoId&&300<=b&&!a;g.N(this.A,"ytp-share-button-visible",this.B);a=480<b;b=g.V(this.o);b.experiments.g("enable_share_button_title")&&
b.o&&(g.N(this.A,"ytp-show-share-title",a),this.ma("share",a?g.Q("YTP_SHARE"):""));g.lO(this.o,this.element,this.B&&this.D)};
DU.prototype.W=function(){g.X.prototype.W.call(this);g.M(this.A,"ytp-share-button-visible")};g.p(EU,g.X);EU.prototype.B=function(){var a=g.W(this.o.app);a&&a.o.g.webkitShowPlaybackTargetPicker()};
EU.prototype.A=function(){var a=g.W(this.o.app);g.LO(this,!!a&&a.sc);this.ma("icon",g.XN(this.o)?g.Xr?{G:"div",X:["ytp-icon","ytp-icon-airplay-on"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.Xr?{G:"div",X:["ytp-icon","ytp-icon-airplay-off"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.p(FU,g.eR);g.h=FU.prototype;g.h.ZB=function(a){g.T(a.state,32)?GU(this,this.o.getVideoData()):this.H.hide()};
g.h.Uj=function(){var a=this.o.gf(),b=a.current,c=YE(this.gb,141);b=this.gb.g[c].Nk(b);b!=this.N&&(c=$E(this.gb,b,141),this.D=KR(this.ca,c,141,141,!0),g.zh(this.da,(this.J-this.D.width)/2),this.N=b);g.Sd(this.ha,g.pR(this.U?a.current-a.seekableEnd:a.current));g.bv(this.K);a=(0,g.z)(this.Fk,this);this.K=g.av(a,1,void 0);this.T.Ag()};
g.h.aC=function(a,b){GU(this,b)};
g.h.Fk=function(){g.Mh(this.A,!1);g.bv(this.K);var a=Math.round(.5*this.D.width),b=Math.round(.5*this.D.height),c=this.o.gf(),d=c.current/(c.seekableEnd-c.seekableStart);c=this.gb.g[0].Pv();var e=this.gb.g[0].Bo();d=a*(e-c+1)*d-this.J/2;var f=Math.floor(d/a)+c;e=Math.min(f+Math.min(20,Math.ceil(this.J/a)),e);f=Math.max(f,c);var k;if(this.C>=f&&this.B<=e){for(k=this.C;k>e;k--)g.Kd(this.A.children[k-this.B]);for(k=f-1;k>=this.B;k--)g.Kd(this.A.children[k-this.B]);for(k=this.B-1;k>=f;k--)this.A.insertBefore(HU(this,
k,a,b),this.A.firstChild);k=this.C+1}else g.Hd(this.A),k=f;for(;k<=e;k++){var l=HU(this,k,a,b);this.A.appendChild(l)}for(k=f;k<=e;k++)g.rh(this.A.children[k-f],"transform","translatex("+(-d+(k-c)*a)+"px)");this.B=f;this.C=e;g.Mh(this.A,!0)};
g.h.YB=function(){for(var a=this.B;a<=this.C;a++)bF(this.gb,a,this.D.width)};
g.h.XB=function(){var a=g.MN(this.o).Ga();this.J!=a.width&&(this.J=a.width,this.gb&&(this.Uj(),this.Fk()))};
g.h.bC=function(a){this.element.style.g=a+"px"};
g.h.show=function(){g.eR.prototype.show.call(this);mW(this.Z,!1)};
g.h.hide=function(){this.gb&&GU(this,null);g.eR.prototype.hide.call(this);mW(this.Z,!0)};
g.h.W=function(){GU(this,null);g.eR.prototype.W.call(this)};
FU.g=200;g.p(IU,g.X);g.h=IU.prototype;g.h.dC=function(a){g.T(a.state,32)?KU(this,this.o.getVideoData()):this.g&&(g.T(a.state,16)||g.T(a.state,1))||this.B.hide()};
g.h.fC=function(a,b){KU(this,b)};
g.h.eC=function(){var a=g.LN(this.o);(g.T(a,32)||g.T(a,16))&&JU(this)};
g.h.cC=function(){this.C=window.NaN;JU(this)};
g.h.hide=function(){this.gb&&KU(this,null);g.X.prototype.hide.call(this)};g.p(MU,g.X);g.h=MU.prototype;g.h.gC=function(){g.V(this.A).Aa?(g.UN(this.A,this.A.isFullscreen()?"fullscreen_exit":"fullscreen_enter"),g.ON(this.A)):this.o.tf(this.element,!0)};
g.h.It=function(){LU(this);this.o.qd(this.element,!0)};
g.h.hC=function(){g.Qt()==this.A.getRootNode()?this.C.start():(this.C.stop(),this.o&&this.o.hide())};
g.h.Hx=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!=a>b){var e=c;c=d;d=e}a>c&&b>d&&this.It()}};
g.h.ys=function(){g.LO(this,kS(this.A))};
g.h.Tu=function(a){if(a){var b=g.Xr?{G:"div",X:["ytp-icon","ytp-icon-full-screen-close"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"g",L:"ytp-fullscreen-button-corner-2",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-3",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-0",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",
P:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-1",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.Q("YTP_EXIT_FULLSCREEN");window.document.activeElement==this.element&&this.A.getRootNode().focus()}else b=g.Xr?{G:"div",X:["ytp-icon","ytp-icon-full-screen"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"g",L:"ytp-fullscreen-button-corner-0",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",
P:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-1",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-2",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{G:"g",L:"ytp-fullscreen-button-corner-3",I:[{G:"path",Ba:!0,L:"ytp-svg-fill",P:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.Q("YTP_FULLSCREEN");this.ma("icon",
b);this.ma("title",this.o?null:a);$U(this.D.o)};
g.h.W=function(){this.o||(this.B(),this.B=null);g.X.prototype.W.call(this)};g.p(NU,vT);g.h=NU.prototype;g.h.show=function(){var a=this.g;vT.prototype.show.call(this);a||(this.B.O(this.o,"presentingplayerstatechange",this.tn),this.B.O(this.o,"videodatachange",this.tn),this.tn())};
g.h.hide=function(){this.B&&(g.ku(this.B),vT.prototype.hide.call(this))};
g.h.tn=function(){var a=this.o.getVideoData(),b=a.Ef,c;for(c=0;c<b.length;c++){var d=this.A[c];d||(d=new g.X({G:"button",X:["ytp-multicam-menu-item","ytp-button"],P:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},I:[{G:"div",L:"ytp-multicam-menu-item-title",I:["{{cameraName}}"]}]}),d.ba("click",g.A(this.SD,c),this),d.na(this.Ia),this.A[c]=d);var e=b[c],f=e.id;if(f!=d.element.getAttribute("data-id")){var k=e.thumbnail_url;!k&&f&&(k=zE(g.V(this.o),f,"default.jpg"));d.element.style.backgroundImage=
k?"url("+k+")":""}d.update({cameraName:e.title,videoId:f,selected:f==a.videoId?!0:null})}for(;c<this.A.length;)this.A.pop().dispose();c=g.LN(this.o);a=b.length||!a.Nb();VH(c)||g.T(c,4)||a||!xT(this)||this.tf()};
g.h.SD=function(a){this.o.getVideoData();var b=this.o;a=this.o.getVideoData().Ef[a];var c=g.W(b.app,1).getVideoData(),d=b.getCurrentTime();a.id==c.videoId?g.W(b.app)!=g.W(b.app,1)&&(VQ(b.app,1),c.va||b.Hb(d)):(VQ(b.app,4),nX(b.app,{videoId:a.id,title:c.title,start:c.va?null:d,multifeed_metadata_list:c.tb.multifeed_metadata_list},4))};
g.h.focus=function(){for(var a=this.o.getVideoData(),b=a.Ef,c=0;c<b.length;c++)if(b[c].id==a.videoId){this.A[c].focus();break}};
g.h.W=function(){g.Le(this.A);vT.prototype.W.call(this)};g.p(OU,g.X);OU.prototype.F=function(a){this.B("newdata"==a)};
OU.prototype.B=function(a){var b=this.o.getVideoData(),c=b.Ef,d=g.LN(this.o);d=(VH(d)||g.T(d,4))&&0<c.length;g.LO(this,d);a&&(this.C=!0);if(d){this.C&&this.D.Jc();a=null;d="";for(var e=0;e<c.length;e++)if(c[e].id==b.videoId){a=c[e].title;d=g.Q("YTP_MULTICAM_INDEX",{CAMERA_INDEX:e+1,CAMERA_COUNT:c.length})+"\n";break}this.update({text:d+a,preview:b.ub(g.V(this.o),"default.jpg")});$U(this.A)}else this.D.stop()};
OU.prototype.H=function(){oW(this.A,this.element,g.Q("YTP_MORE_CAMERAS_AVAILABLE"));this.C=!1};g.p(PU,g.I);PU.prototype.o=function(){var a=(0,g.Ru)()-this.B;a=a<this.g?a/this.g:1;this.C(eq(DZ,a));1>a&&this.A.start()};
var DZ=new dq(0,0,.4,0,.2,1,1,1),VU=/[0-9.-]+|[^0-9.-]+/g;g.p(XU,g.X);XU.prototype.qc=function(a){this.B=300<=a.width;g.LO(this,this.B);g.lO(this.o,this.element,this.B&&this.H)};
XU.prototype.ha=function(){g.V(this.o).J?this.o.yc()?(g.UN(this.o,"unmute"),this.o.ee()):(g.UN(this.o,"mute"),this.o.mute()):this.Z.tf(this.element,!0);g.kO(this.o,this.element)};
XU.prototype.ca=function(a){WU(this,a.volume,a.muted)};
var aV=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],bV=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.p(cV,g.X);cV.prototype.A=function(){var a=g.W(this.o.app);a&&(a=a.o,a.g.webkitSetPresentationMode("picture-in-picture"==a.g.webkitPresentationMode?"inline":"picture-in-picture"))};g.p(eV,g.X);eV.prototype.H=function(a){dV(this,a.state)};
eV.prototype.F=function(){g.N(this.element,"ytp-play-button-playlist",NN(this.o))};
eV.prototype.J=function(){2==this.A?g.UN(this.o,"pause"):3==this.A?g.UN(this.o,"replay"):1==this.A?g.UN(this.o,"play"):4==this.A&&g.UN(this.o,"stop");VH(g.LN(this.o))?this.o.Ub():this.o.gc()};
eV.prototype.W=function(){this.B&&this.B();g.X.prototype.W.call(this)};g.p(hV,g.X);g.h=hV.prototype;g.h.Ng=function(){iV(this);this.H&&(this.Ma(this.H),this.H=null);this.F=this.o.getVideoData(1);if(this.A=this.o.ce())this.A.subscribe("shuffle",this.Ng,this),this.H=this.O(this.o,"progresssync",this.oC);this.D=jV(this);gV(this);this.qc(g.MN(this.o).Ga())};
g.h.qc=function(a){a=void 0===a?g.MN(this.o).Ga():a;var b=NN(this.o)||this.B&&g.hO(this.o)||kV(this);g.LO(this,b&&(this.B||400<=a.width))};
g.h.pC=function(a){g.UN(this.o,this.B?"next":"previous");var b=!0;this.K?b=g.iS(a,this.o):g.hu(a);b&&(this.B?this.o.Jg(!0):this.D?this.o.Hb(0):this.o.Sh(!0))};
g.h.oC=function(){var a=jV(this);a!=this.D&&(this.D=a,gV(this))};
g.h.W=function(){this.C&&(this.C(),this.C=null);iV(this);g.X.prototype.W.call(this)};g.p(mV,g.eR);g.h=mV.prototype;g.h.tC=function(a){if(!g.fu(a)){var b=!1;switch(g.bu(a)){case 36:this.A.Hb(0);b=!0;break;case 35:this.A.Hb(window.Infinity);b=!0;break;case 34:this.A.pd(-60);b=!0;break;case 33:this.A.pd(60);b=!0;break;case 38:this.A.pd(5);b=!0;break;case 40:this.A.pd(-5),b=!0}b&&g.hu(a)}};
g.h.As=function(a,b){lV(this,b,"newdata"==a)};
g.h.By=function(){this.As("newdata",this.A.getVideoData())};
g.h.sC=function(){tV(this.A.getVideoData())?g.LN(this.A).sb()&&uV(this,!0):uV(this,!1)};
g.h.rC=function(a){0<$H(a,64)||!tV(this.A.getVideoData())?uV(this,!1):VH(a.state)&&0>$H(a,64)&&uV(this,!0);this.B&&!g.T(a.state,32)&&3!=this.A.Fa()&&this.B.cancel()};
g.h.wC=function(a,b,c){var d=g.Dh(this.element),e=wV(this).g,f=c?c.getAttribute("data-tooltip"):void 0;f&&(a=IR(this.o,Number(c.getAttribute("data-position")),0)*e+g.Dh(this.qb).x);this.xa.x=a-d.x;this.xa.y=b-d.y;c=wV(this);a=HR(this.o,c.o);d=f||g.pR(this.Aa?a-this.o.g:a);b=this.Ha;c=c.position+this.bc;f=!!f;b.da||(3==b.o&&b.Cd(),1!=b.o&&(b.element.className="ytp-tooltip ytp-bottom",b.o=1,b.K&&b.J.show(),b.B=TG(b.T.getVideoData()),b.B&&b.B.subscribe("l",b.Os,b)),b.update({text:d,title:""}),g.N(b.element,
"ytp-text-detail",!!f),d=-1,b.B&&(d=YE(b.B,160*b.D),d=b.B.g[d].Nk(a)),rW(b,d),pW(b,!!f,c));g.N(this.A.getRootNode(),"ytp-progress-bar-hover",!g.T(g.LN(this.A),64));pV(this)};
g.h.vC=function(){var a=this.Ha;1==a.o&&a.Cd();g.M(this.A.getRootNode(),"ytp-progress-bar-hover")};
g.h.uC=function(a,b){g.Bs(this.D);this.D=window.NaN;this.Cb=b;this.A.Hb(HR(this.o,wV(this).o),!1);g.L(this.element,"ytp-drag");(this.Ka=VH(g.LN(this.A)))&&this.A.Ub()};
g.h.xC=function(){this.Z=0;g.M(this.element,"ytp-pull-ui");g.M(this.element,"ytp-pulling");if(0<this.H){var a=(0,g.Ru)(),b=this.H,c=wV(this).position;g.Bs(this.D);this.D=JO((0,g.z)(this.Es,this,a,b,c))}if(g.T(g.LN(this.A),32)||3==this.A.Fa())this.A.Hb(HR(this.o,wV(this).o)),g.M(this.element,"ytp-drag"),this.Ka&&!g.T(g.LN(this.A),2)&&this.A.gc()};
g.h.Es=function(a,b,c){var d=1-Math.pow(1-((0,g.Ru)()-a)/200,3),e=c+d*(this.F*this.C-c);if(0>d||1<d)d=1;vV(this,(1-d)*b,e,this.F);this.D=1>d?JO((0,g.z)(this.Es,this,a,b,c)):window.NaN};
g.h.yC=function(a,b){var c=!1,d=!1,e=wV(this);3600<=this.o.getLength()&&(vV(this,this.Cb-b-10,e.position,e.o),d=!0,c=this.H>.1*(this.J?60:40),e=wV(this));g.N(this.element,"ytp-pull-ui",d);c&&g.L(this.element,"ytp-pulling");c=0;e.A&&0>=e.position?c=-1:e.C&&e.position>=e.width&&(c=1);(0,window.isNaN)(this.D)||c&&c==this.Z||g.Cs(this.D);c&&(this.D=JO((0,g.z)(this.Ds,this,(0,g.Ru)(),this.K)));this.Z=c;this.A.Hb(HR(this.o,e.o),!1)};
g.h.Ds=function(a,b){if(this.Z){var c=this.C*(this.V-1);this.K=g.Zc(b+this.Z*((0,g.Ru)()-a)*.3,0,c);oV(this);this.A.Hb(HR(this.o,wV(this).o),!1);0<this.K&&this.K<c&&(this.D=JO((0,g.z)(this.Ds,this,a,b)))}};
g.h.Cs=function(){this.ma("clipstarticon",as());this.ma("clipendicon",as());g.L(this.element,"ytp-clip-hover")};
g.h.Bs=function(){this.ma("clipstarticon",cs());this.ma("clipendicon",bs());g.M(this.element,"ytp-clip-hover")};
g.h.Vj=function(){this.T=0;this.N=window.Infinity;sV(this);nV(this,this.F,this.ha)};
g.h.Fs=function(a){a=g.na(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.getId();if(!this.U[c]){var d=g.Ed("DIV");b.tooltip&&(d.setAttribute("data-tooltip",b.tooltip),d.setAttribute("data-position",b.start/1E3));this.U[c]=b;this.ka[c]=d;xV(this,b,d);"ytp-chapter-marker"==b.style?this.oc.appendChild(d):this.jc.appendChild(d)}}else zV(this,b)};
g.h.zC=function(a){a=g.na(a);for(var b=a.next();!b.done;b=a.next())zV(this,b.value)};
g.h.W=function(){g.Cs(this.D);this.D=window.NaN;rV(this,!1);g.eR.prototype.W.call(this)};g.p(AV,bU);AV.prototype.C=function(){g.FN(this.M).o&&3!=this.M.Fa()?this.A||(SV(this.B,this),this.A=!0):this.A&&(TV(this.B,this),this.A=!1);var a=g.FN(this.M).o;cU(this,!!a&&a.loaded)};
AV.prototype.D=function(a){a?this.M.Rh("annotations_module"):this.M.Oj("annotations_module")};
AV.prototype.W=function(){this.A&&TV(this.B,this);bU.prototype.W.call(this)};g.p(g.BV,g.KT);g.h=g.BV.prototype;g.h.open=function(){g.WT(this.A,this.C)};
g.h.Gd=function(a){if(this.D){var b=this.o[this.D];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked")}this.o[a].element.setAttribute("aria-checked",!0);this.zb(this.Fd(a));this.D=a};
g.h.enable=function(a){this.H?a||(this.H=!1,this.Og(!1)):a&&(this.H=!0,this.Og(!0))};
g.h.Og=function(a){a?SV(this.A,this):TV(this.A,this)};
g.h.hc=function(a){this.R("select",a)};
g.h.BC=function(a){"true"!=this.o[a].element.getAttribute("aria-disabled")&&this.hc(a)};
g.h.Fd=function(a){return a.toString()};
g.h.AC=function(a){g.fu(a)||39!=g.bu(a)||(this.open(),g.hu(a))};
g.h.W=function(){this.H&&TV(this.A,this);g.KT.prototype.W.call(this);for(var a in this.o)this.o[a].dispose()};g.p(DV,g.BV);DV.prototype.F=function(){var a=this.M.gn();1<a.length?(g.CV(this,(0,g.H)(a,this.B)),this.K=g.Nb(a,this.B,this),this.J.zb(a.length?" ("+a.length+")":""),this.R("size-change"),this.Gd(this.B(this.M.ff())),this.enable(!0)):this.enable(!1)};
DV.prototype.hc=function(a){g.BV.prototype.hc.call(this,a);this.M.ln(this.K[a]);this.A.ud()};
DV.prototype.B=function(a){return a.toString()};g.p(EV,bU);EV.prototype.C=function(){var a=this.M.Fa();if(2!=a&&3!=a&&g.hO(this.M))this.B||(SV(this.D,this),this.B=!0,this.A.push(this.O(this.M,"videodatachange",this.C)),this.A.push(this.O(this.M,"videoplayerreset",this.C)),this.A.push(this.O(this.M,"onPlaylistUpdate",this.C)),this.A.push(this.O(this.M,"autonavchange",this.F)),this.F(this.M.getVideoData().autonavState));else if(this.B){TV(this.D,this);this.B=!1;a=g.na(this.A);for(var b=a.next();!b.done;b=a.next())this.Ma(b.value)}};
EV.prototype.F=function(a){cU(this,1!=a)};
EV.prototype.H=function(a){this.M.app.o.ua("onAutonavChangeRequest",1!=(a?2:1))};
EV.prototype.W=function(){this.B&&TV(this.D,this);bU.prototype.W.call(this)};g.p(FV,g.BV);FV.prototype.B=function(){var a=this.M.Fa();if(2!=a&&3!=a&&(this.F=RN(this.M),this.K=g.PN(this.M),a=this.M.cn(),g.eO(this.M)&&g.fO(this.M)&&a.unshift("missing-qualities"),g.CV(this,a),a.length)){this.N();this.enable(!0);return}this.enable(!1)};
FV.prototype.N=function(){var a=g.QN(this.M);this.o[a]&&(this.J=this.M.Qh(),this.Gd(a),"auto"==a&&this.zb(this.Fd(a)),RN(this.M)!=this.F&&this.B())};
FV.prototype.hc=function(a){"missing-qualities"!=a&&(g.BV.prototype.hc.call(this,a),this.M.Th(a),this.A.ob())};
FV.prototype.Fd=function(a,b){b=void 0===b?!1:b;if("missing-qualities"==a)return{G:"a",P:{href:"https://support.google.com/youtube/?p=missing_quality",target:"_blank"},I:[g.Q("YTP_MISSING_FORMATS")]};var c={G:"div",I:[GV(this,a)]},d=g.QN(this.M);b||"auto"!=d||"auto"!=a||(c.I.push(" "),c.I.push(GV(this,this.J,["ytp-menu-label-secondary"])));return c};g.p(HV,g.X);HV.prototype.qc=function(a){g.LO(this,this.B&&400<=a.width)};
HV.prototype.C=function(){g.UN(this.M,"settings");if(this.A.g)this.A.ob();else{var a=g.FN(this.M).g;a&&!a.loaded&&(a.nn("tracklist",{includeAsr:!0}).length||a.load());this.A.qd(this.element)}};
HV.prototype.o=function(){var a=this.M.Fa(),b=2!=a&&3!=a,c=g.SN(this.M),d=b&&!!g.FN(this.M).B;a=d&&1==c.displayMode;c=d&&2==c.displayMode;b=(d=a||c)||!b?null:this.M.Qh();g.N(this.element,"ytp-hd-quality-badge","hd720"==b||"hd1080"==b||"hd1440"==b);g.N(this.element,"ytp-4k-quality-badge","hd2160"==b);g.N(this.element,"ytp-5k-quality-badge","hd2880"==b);g.N(this.element,"ytp-8k-quality-badge","highres"==b);g.N(this.element,"ytp-3d-badge-grey",d&&a);g.N(this.element,"ytp-3d-badge",d&&c)};g.p(JV,g.BV);g.h=JV.prototype;g.h.wn=function(a){return a.toString()};
g.h.Fd=function(a){return"1"==a?g.Q("YTP_NORMAL_SPEED"):a.toString()};
g.h.Is=function(){var a=this.M.Fa();this.enable(2!=a&&3!=a)};
g.h.Og=function(a){g.BV.prototype.Og.call(this,a);a?(this.B=this.O(this.M,"onPlaybackRateChange",this.DC),g.CV(this,(0,g.H)(this.M.Hg(),this.wn)),this.Gd(this.wn(this.M.Tb()))):(this.Ma(this.B),this.B=null)};
g.h.DC=function(a){this.Gd(this.wn(a))};
g.h.hc=function(a){g.BV.prototype.hc.call(this,a);this.M.de((0,window.parseFloat)(a),!0);this.A.ud()};g.p(LV,g.BV);g.h=LV.prototype;g.h.Gd=function(a){g.BV.prototype.Gd.call(this,a)};
g.h.Ms=function(a){return a.option.toString()};
g.h.Fd=function(a){return KV(this.N[a])};
g.h.hc=function(a){g.BV.prototype.hc.call(this,a);this.R("settingChange",this.K,this.N[a].option)};
g.h.Ns=function(a){this.R("settingChange",this.K+"Override",!a);this.A.ud()};g.p(MV,g.NT);MV.prototype.A=function(a,b){this.R("settingChange",a,b)};g.p(OV,g.BV);OV.prototype.F=function(a){return a.languageCode};
OV.prototype.Fd=function(a){return this.B[a].languageName||""};
OV.prototype.hc=function(a){this.R("select",a);g.XT(this.A)};g.p(PV,g.BV);g.h=PV.prototype;g.h.An=function(a){return g.fc(a)?"__off__":a.displayName};
g.h.Fd=function(a){return"__off__"==a?g.Q("YTP_LANGUAGE_OFF"):"__translate__"==a?g.Q("YTP_AUTO_TRANSLATE"):"__contribute__"==a?g.Q("YTP_CONTRIBUTE_MENU_ITEM"):("__off__"==a?{}:this.B[a]).displayName};
g.h.hc=function(a){"__translate__"==a?this.F.open():"__contribute__"==a?(this.M.Ub(),this.M.isFullscreen()&&g.ON(this.M),a=g.AE(g.V(this.M),this.M.getVideoData()),g.RO(a)):(this.M.zc("captions","track","__off__"==a?{}:this.B[a]),g.BV.prototype.hc.call(this,a),this.A.ud())};
g.h.ai=function(){var a=-1!=this.M.Xf().indexOf("captions"),b=this.M.getVideoData().nh;if(a||b){if(a){var c=this.M.Gb("captions","track");var d=this.M.Gb("captions","tracklist",{includeAsr:!0});var e=this.M.Gb("captions","translationLanguages");this.B=g.Nb(d,this.An,this);var f=(0,g.H)(d,this.An);if(e.length){var k=this.F;var l=e;k.B=g.Nb(l,k.F,k);g.CV(k,(0,g.H)(l,k.F));f.push("__translate__")}k=this.An(c)}else this.B={},f=[],k="__off__";f.unshift("__off__");this.B.__off__={};b&&f.unshift("__contribute__");
this.B[k]||(this.B[k]=c,f.push(k));g.CV(this,f);this.Gd(k);a?(NV(this.K,this.M.Yf()),this.J.zb(d.length?" ("+d.length+")":""),this.R("size-change"),a&&e.length&&this.o.__translate__.element.setAttribute("aria-disabled",!!g.fc(c))):(this.J.zb(""),this.R("size-change"));this.enable(!0)}else this.enable(!1)};
g.h.Ls=function(a){this.M.zc("captions","sampleSubtitles",a)};
g.h.KC=function(a){var b=this.M.Gb("captions","track");b=g.ic(b);b.translationLanguage=this.F.B[a];this.M.zc("captions","track",b)};
g.h.JC=function(a,b){if("reset"==a)this.M.kn();else{var c={};c[a]=b;this.M.Pj(c)}this.Ls(!0);this.N.start();NV(this.K,this.M.Yf())};
g.h.W=function(){g.xp(this.N);g.BV.prototype.W.call(this)};g.p(QV,g.ST);QV.prototype.qd=function(a){RV(this);0<this.B.Ia.length&&g.ST.prototype.qd.call(this,a)};
QV.prototype.show=function(){g.ST.prototype.show.call(this);g.L(this.A.getRootNode(),"ytp-settings-shown")};
QV.prototype.hide=function(){g.ST.prototype.hide.call(this);g.M(this.A.getRootNode(),"ytp-settings-shown")};g.p(UV,g.X);
UV.prototype.o=function(){var a=!1;-1!=this.M.Xf().indexOf("remote")&&(a=1<this.M.Gb("remote","receivers").length);g.LO(this,a&&400<=g.MN(this.M).Ga().width);var b=1;a&&this.M.Gb("remote","casting")&&(b=2);if(this.A!=b){this.A=b;switch(b){case 1:this.ma("icon",g.Xr?{G:"div",X:["ytp-icon","ytp-icon-cast-desktop-off"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",fill:"#fff"}}]});
break;case 2:this.ma("icon",g.Yr())}g.N(this.element,"ytp-remote-button-active",!!this.M.Gb("remote","casting"))}};
UV.prototype.C=function(){g.UN(this.M,"remote");if(this.M.Gb("remote","quickCast"))this.M.zc("remote","quickCast",!0);else{var a=this.B,b=this.element;if(xT(a))a.ob();else{RV(a);a:{var c=g.na(a.B.Ia);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0==d.priority){c=d;break a}c=null}c&&(c.open(),a.qd(b));a.qd(b)}}};g.p(VV,g.X);VV.prototype.F=function(){g.UN(this.o,this.o.app.Ja?"size_small":"size_large");var a=this.o.app,b=!a.Ja;a.g.experiments.g("player_legacy_set_size_style")&&IX(a,!0,b);a.o.ua("SIZE_CLICKED",b)};
VV.prototype.A=function(){g.LO(this,this.o.app.dd&&!this.o.isFullscreen()&&3!=this.o.Fa());if(this.g){var a=this.o.app.Ja;if(this.B!=a){var b=a?g.Xr?{G:"div",X:["ytp-icon","ytp-icon-default-view"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},I:[{G:"path",Ba:!0,P:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.Xr?{G:"div",X:["ytp-icon","ytp-icon-theater-mode"]}:{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},I:[{G:"path",Ba:!0,P:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};g.V(this.o).V||null==this.B?this.ma("icon",b):UU(this.D,this.element,b);a=(this.B=a)?g.Q("YTP_DEFAULT_VIEW"):g.Q("YTP_THEATER_MODE");this.ma("title",a);$U(this.C)}}};g.p(WV,g.X);WV.prototype.B=function(){g.UN(this.A,"subtitles");var a=g.FN(this.A).g;a&&a.lv()};
WV.prototype.o=function(){var a=!!g.FN(this.A).g;g.LO(this,a&&300<=g.MN(this.A).Ga().width);a&&this.ma("pressed",!!this.A.Gb("captions","track").displayName)};g.p(XV,g.X);
XV.prototype.C=function(){var a=g.MN(this.o).Ga().width,b=350<=a&&(!this.B||!g.T(g.LN(this.o),64));g.LO(this,b);g.N(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.o.gf();b&&(b=g.pR(a.current),this.H!=b&&(this.ma("currenttime",b),this.H=b),b=g.pR(a.duration),this.J!=b&&(this.ma("duration",b),this.J=b));this.B&&(a=a.isPeggedToLive,this.F!=a&&(this.F=a,this.C(),b=this.D.element,(b.disabled=a)?this.A&&(this.A(),this.A=null,b.removeAttribute("title")):(b.title=g.Q("YTP_GOTO_LIVE_TOOLTIP"),this.A=
GT(this.K,this.D.element))))};
XV.prototype.T=function(a,b){this.B=b.va;g.N(this.element,"ytp-live",this.B);this.C()};
XV.prototype.N=function(a){a.target==this.D.element?(g.UN(this.o,"live"),this.o.Hb(window.Infinity),this.o.gc()):g.UN(this.o,"time")};
XV.prototype.W=function(){this.A&&this.A();g.X.prototype.W.call(this)};g.p(ZV,g.X);g.h=ZV.prototype;g.h.LC=function(){var a=this.F.Wc();this.H!=a&&(this.H=a,YV(this,this.o.getVolume(),this.o.yc()))};
g.h.qc=function(a){g.LO(this,350<=a.width)};
g.h.fG=function(a){if(!g.fu(a)){var b=g.bu(a),c=null;37==b?c=this.C-5:39==b?c=this.C+5:36==b?c=0:35==b&&(c=100);null!=c&&(c=g.Zc(c,0,100),0==c?this.o.mute():(this.o.yc()&&this.o.ee(),this.o.setVolume(c)),g.hu(a))}};
g.h.MC=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.o.setVolume(this.C+(0>b?-10:10)):this.o.setVolume(this.C+g.Zc(b/10,-10,10));g.hu(a)};
g.h.eG=function(){g.UN(this.o,"volume");$V(this,this.B,!0,this.A,this.F.K);this.V=this.C;this.o.yc()&&this.o.ee()};
g.h.dG=function(a){a-=g.Dh(this.U).x;this.o.setVolume(100*g.Zc(a/(this.H?78:52),0,1))};
g.h.cG=function(){$V(this,this.B,!1,this.A,this.F.K);0==this.C&&(this.o.mute(),this.o.setVolume(this.V))};
g.h.NC=function(a){YV(this,a.volume,a.muted)};
g.h.Dp=function(){$V(this,this.B,this.D,this.A,this.F.K)};
g.h.Ps=function(a){$V(this,this.B,this.D,a,this.F.K)};
g.h.Uu=function(a){g.N(this.element,"ytp-volume-control-hover",a);$V(this,a,this.D,this.A,this.F.K)};
g.h.W=function(){g.X.prototype.W.call(this);g.M(this.T,"ytp-volume-slider-active")};g.p(aW,g.X);aW.prototype.C=function(){this.A=!!this.o.getVideoData().videoId;g.LO(this,this.A);g.lO(this.o,this.element,this.A&&this.B);if(this.A){var a=this.o.getVideoUrl(!0,!1,!1,!0);this.ma("url",a)}};
aW.prototype.D=function(a){g.UN(this.o,"youtube");var b=this.o.getVideoUrl(!g.qR(a),!1,!0,!0);jS(b,this.o,a);g.kO(this.o,this.element)};g.p(bW,g.iu);g.h=bW.prototype;g.h.yn=function(){var a=this.B;qV(a);var b=a.A.getCurrentTime();(b<a.T||b>a.N)&&a.Vj();this.U.C()};
g.h.Ks=function(){this.qo();!this.N.o||this.yn()};
g.h.wE=function(){this.yn();this.F.start()};
g.h.qo=function(){var a;if(a=!g.V(this.M).isMobile){a=this.B;var b=2*a.C*g.CE();a=300>1E3*a.o.getLength()/a.A.Tb()/b}a=a&&g.LN(this.M).sb()&&!!window.requestAnimationFrame;b=!a;this.N.o||(a=b=!1);b?this.H||(this.H=this.O(this.M,"progresssync",this.yn)):this.H&&(this.Ma(this.H),this.H=null);a?this.F.isActive()||this.F.start():this.F.stop()};
g.h.SH=function(a){mW(this.A.o,!a)};
g.h.zn=function(){var a=this.A.Wc(),b=g.MN(this.M).Ga(),c=dW(this),d=Math.max(b.width-2*c,100);if(this.Y!=b.width||this.V!=a){this.Y=b.width;this.V=a;var e=eW(this);this.o.element.style.width=e+"px";this.o.element.style.left=c+"px";var f=this.B;f.bc=c;f.C=e;f.J=a;oV(f);this.A.o.ca=e}c=this.g;b=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-(this.A.Wc()?72:50))));c.U=Math.min(570*(a?1.5:1),d);c.T=b;c.ti();this.qo()};
g.h.la=function(){return this.o.element};g.p(g.fW,g.X);g.fW.prototype.A=function(){g.L(this.element,"ytp-sb-subscribed")};
g.fW.prototype.B=function(){g.M(this.element,"ytp-sb-subscribed")};g.p(hW,g.X);hW.prototype.Y=function(a){g.UN(this.o,"title");g.kO(this.o,this.element);var b=this.o.getVideoUrl(!g.qR(a),!1,!0);jS(b,this.o,a)};
hW.prototype.Z=function(a,b,c){var d=c.user_info;if(d){b=d.channel_logo_url||d.image_url;c=d.channel_title||d.username;var e=d.channel_url,f=d.channel_external_id;d=d.subscriber_count;b&&e&&c&&g.lF.test(b)&&iW(this,a,f,c,e,b,d)}};
hW.prototype.H=function(){jW(this);var a=this.o.getVideoData();this.ma("title",a.title);this.B&&(this.B.o=a.wi);var b=g.V(this.o);if(b.experiments.g("embed_view_count")){var c=a.shortViewCount;g.N(this.o.getRootNode(),"ytp-show-title-view-count",!!c);this.ma("viewCount",c)}!b.H&&a.videoId?(this.ma("url",this.o.getVideoUrl(!0)),this.A||(this.A=this.O(this.V,"click",this.Y))):this.A&&(this.ma("url",null),this.Ma(this.A),this.A=null)};g.p(kW,g.X);g.h=kW.prototype;g.h.dF=function(a){3==this.o&&this.Cd();a=a.currentTarget;this.o||(a.removeEventListener("mouseover",this.U),a.addEventListener("mouseout",this.ha),nW(this,a,2))};
g.h.aF=function(a){(a=du(a))&&g.Rd(this.A,a)||this.Cd()};
g.h.Os=function(a,b){if(a<=this.C&&this.C<=b){var c=this.C;this.C=window.NaN;rW(this,c)}};
g.h.yz=function(){bF(this.B,this.C,160*this.D)};
g.h.Cd=function(){switch(this.o){case 2:this.A.removeEventListener("mouseout",this.ha),this.A.addEventListener("mouseover",this.U);case 3:3==this.o&&this.Z.stop();this.T.removeEventListener("appresize",this.V);this.N||this.A.setAttribute("title",this.F);this.F="";this.A=null;break;case 1:this.B&&(this.B.unsubscribe("l",this.Os,this),this.B=null),this.T.removeEventListener("videoready",this.V),this.Y.stop()}this.o=null;this.K&&this.J.hide()};
g.h.xg=function(){if(this.A)for(var a=0;a<arguments.length;a++)g.Rd(arguments[a],this.A)&&this.Cd()};
g.h.W=function(){null!=this.o&&this.Cd();g.X.prototype.W.call(this)};g.x("yt.pubsub.publish",g.Eu,void 0);g.p(vW,g.X);g.h=vW.prototype;g.h.qc=function(a){this.C=300<=a.width;g.LO(this,this.C);a=480<a.width;var b=g.V(this.o);b.experiments.g("enable_watch_later_button_title")&&b.o&&(g.N(this.H,"ytp-show-watch-later-title",a),this.ma("watch_later",a?g.Q("YTP_WATCH_LATER_2"):""));g.lO(this.o,this.element,this.C&&this.J)};
g.h.BG=function(){this.A=!0;this.B=!1;uW(this,1);g.V(this.o).isMobile&&oW(this.F,this.element);g.V(this.o).jb&&this.o.ua("WATCH_LATER_VIDEO_ADDED")};
g.h.OC=function(){g.UN(this.o,"watchlater");g.kO(this.o,this.element);var a=this.o.getVideoData().videoId;g.V(this.o).Ib?tW(this,a):g.sW(function(){ry({videoId:a});window.location.reload()},null,"wl_button",800,600)};
g.h.CG=function(a,b){this.B=!1;var c=g.Q("YTP_ERROR_GENERIC_WITHOUT_LINK");b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);uW(this,4,c);g.V(this.o).jb&&this.o.ua("WATCH_LATER_ERROR",c)};
g.h.DG=function(){this.B=this.A=!1;uW(this,2);g.V(this.o).jb&&this.o.ua("WATCH_LATER_VIDEO_REMOVED")};
g.h.PC=function(){this.B=this.A=!1;uW(this,2)};g.p(wW,g.X);wW.prototype.D=function(a){g.LO(this,!g.T(a.state,2))};
wW.prototype.B=function(){if(this.A.getVideoData().videoId){var a=this.A.getVideoUrl(!0,!1,!1,!0);this.ma("url",a);this.o||(this.o=this.ba("click",this.C))}else this.o&&(this.ma("url",null),this.Ma(this.o),this.o=null)};
wW.prototype.C=function(a){var b=this.A.getVideoUrl(!g.qR(a),!1,!0,!0);jS(b,this.A,a)};g.p(xW,AT);g.h=xW.prototype;g.h.Jl=function(a,b){b?this.U=a:this.U=null;this.Fe()};
g.h.Kl=function(a,b){if(b)this.H.push(a);else for(var c=this.H.length;0<=c;c--)if(this.H[c]==a){this.H.splice(c,1);break}this.B.yb(64,0<this.H.length)};
g.h.Wg=function(){g.VN(this.g)&&g.WN(this.g);return!!this.U||AT.prototype.Wg.call(this)};
g.h.Fe=function(){var a=!this.Wg(),b=a&&g.VN(this.g)&&!g.T(g.LN(this.g),2);a?(this.Sa.show(),this.Ta.show()):(this.Sa.hide(),this.Ta.hide(),this.o.xg(this.C.element));b?this.V.A.show():this.V.A.hide();this.A&&cW(this.A,!a);AT.prototype.Fe.call(this)};
g.h.Gn=function(a){a&&(this.o.xg(this.C.element),this.A&&this.o.xg(this.A.la()));AT.prototype.Gn.call(this,a)};
g.h.SB=function(a){var b=this.g.getRootNode();a?b.parentElement?(b.setAttribute("aria-label",g.Q("YTP_PLAYER_FULLSCREEN")),b.parentElement.insertBefore(this.Z.element,b),b.parentElement.insertBefore(this.aa.element,b.nextSibling)):g.ws(Error("Player not in DOM.")):(b.setAttribute("aria-label",g.Q("YTP_PLAYER_NORMAL")),this.Z.detach(),this.aa.detach());this.Id();this.sg()};
g.h.Wc=function(){return this.g.isFullscreen()||!1};
g.h.Id=function(){var a=this.Wc();this.o.D=a?1.5:1;g.N(this.J.element,"ytp-big-mode",a);AT.prototype.Id.call(this)};
g.h.sg=function(){AT.prototype.sg.call(this);g.lO(this.g,this.Ka.element,!!this.N);var a=this.Qa,b=!!this.N;a.D=b;g.lO(a.o,a.element,a.B&&b);this.ka&&(a=this.ka,b=!!this.N,a.J=b,g.lO(a.o,a.element,a.C&&b));if(!this.N)for(this.o.xg(this.C.element),a=0;a<this.ha.length;a++)b=this.ha[a],xT(b)&&b.ob()};
g.h.sk=function(a){this.A&&cW(this.A,this.Wg());AT.prototype.sk.call(this,a)};
g.h.lF=function(){this.B.yb(128,!1)};
g.h.kj=function(){return this.J.g?(this.J.ob(),!0):this.H.length?(this.H[this.H.length-1].ob(),!0):this.U?(this.U.ob(),!0):AT.prototype.kj.call(this)};
g.h.vH=function(a,b){this.qb=b;this.Kl(a,b);this.ws()};
g.h.ws=function(){var a=this.qb||xT(this.J);this.Ja!=a&&(this.Ja=a,this.g.ua("onAutonavPauseRequest",this.Ja))};
g.h.Wx=function(){yW(this,this.g.getRootNode(),!0).focus()};
g.h.Xx=function(){yW(this,this.g.getRootNode(),!1).focus()};zW.prototype.click=function(a){var b=a.getAttribute("data-visual-id");g.rb(this.g,a);g.rb(this.o,b);iO(this,"onLogVeClicked",{id:b})};
zW.prototype.F=function(a){g.rb(this.g,a);var b=a.getAttribute("data-visual-id");g.xb(this.g,a);g.xb(this.A,b);g.xb(this.o,b);a.removeAttribute("data-visual-id")};
zW.prototype.pause=function(){this.B=!0};
zW.prototype.resume=function(){this.B=!1;for(var a=g.na(this.C),b=a.next();!b.done;b=a.next())b=b.value,iO(this,b.type,b.data);this.C.length=0};g.p(FW,g.I);g.h=FW.prototype;g.h.yD=function(){IW(this)||g.YW(this,5)};
g.h.tF=function(a){IW(this)||(BX(this),VH(a.A)&&GX(this))};
g.h.getVideoData=function(){return this.F.getVideoData()};
g.h.wc=function(){var a=this.F?this.F.Ul():{},b=this.B,c={};b.g&&g.Ja(c,b.g.nB());g.Ja(a,c);this.B.A&&g.Ja(a,null);a.fs=this.o.isFullscreen();a.volume=Math.round(this.K.getVolume());a.mos=this.K.yc()?1:0;this.g.experiments.g("html5_enable_embedded_player_visibility_signals")&&this.g.o&&(this.sc&&(b=this.sc,b=null==b.g?null:Math.round(100*b.g)/100,null!=b&&(a.inview=b)),b=this.H.Ga(),0<b.height&&0<b.width&&(b=[Math.round(b.height),Math.round(b.width)],c=g.CE(),1<c&&b.push(c),a.size=b.join(":")));return a};
g.h.getCurrentTime=function(a){return 3==JN(this)?g.KN(this.B).getCurrentTime():(a=g.W(this,a))?a.getCurrentTime():0};
g.h.getDuration=function(a){return(a=g.W(this,a))?a.getDuration():0};
g.h.Tz=function(a){switch(a.type){case "loadedmetadata":hG("fvb",this.J.g)||this.J.o("fvb");g.PF("fvb",void 0,"video_to_ad");this.Xa.start();break;case "loadstart":hG("gv",this.J.g)||this.J.o("gv");g.PF("gv",void 0,"video_to_ad");break;case "progress":case "timeupdate":!hG("l2s",this.J.g)&&2<=vH(HH(a.target))&&this.J.o("l2s");break;case "playing":g.FE&&this.Xa.start();var b=this.B.B;a="none"==vh(this.D.g,"display")||0==g.Lh(this.D.g).Rb();b=!bS(this.H)||b||!this.g.C||this.g.Oe;a&&!b&&(this.F.Fc("hidden",
"1",!0),this.getVideoData().kg||FX(this,"hidden",!0))}};
g.h.EE=function(a,b){this.o.ua("onLoadProgress",b)};
g.h.gG=function(){this.o.R("playbackstalledatstart")};
g.h.Uz=function(a,b){this.o.ua("onVideoProgress",b)};
g.h.Rz=function(){this.K.R("progresssync")};
g.h.Oz=function(a){!this.g.experiments.g("disable_live_head_slowdown")&&0<$H(a,1)&&!g.T(a.state,64)&&QW(this).va&&hN(this.A)&&1<this.o.Tb()&&cX(this,1,!0);var b;if(b=0<$H(a,2))this.C&&(g.mE(this.g)||this.o.isFullscreen()&&!this.Aa)&&g.vX(this)?(xX(this,!1,!this.g.experiments.g("legacy_autoplay_flag")),b=!0):b=!1,b=!b;b&&(b=this.A.o)&&Rt(b.g);g.T(a.state,128)&&(b=a.state,oX(this),b=b.g,this.o.ua("onError",VY[b.errorCode]||5),this.o.ua("onDetailedError",b));a.state.sb()&&!g.XH(a.state)&&(b=this.getVideoData(),
g.QF("cpn",b.clientPlaybackNonce,"ad_to_video"),b.videoId&&g.QF("docid",b.videoId,"ad_to_video"),b.playbackId&&g.QF("plid",b.playbackId,"ad_to_video"),g.PF("pbresume",void 0,"ad_to_video"));this.o.R("applicationplayerstatechange",a)};
g.h.fu=function(a){3!=JN(this)&&(!g.T(a.state,32)&&0>$H(a,16)&&(!g.T(a.state,8)||g.T(a.state,64)||this.D.g.ended||g.T(a.state,2)||GX(this)),this.o.R("presentingplayerstatechange",a))};
g.h.Qz=function(a){0<$H(a,4)&&this.o.app.ka&&(ZW(this,!1),this.o.ee());aX(this,YH(a.state))};
g.h.wD=function(a){"newdata"==a&&gX(this)};
g.h.BD=function(){this.o.ua("onPlaybackAudioChange",this.o.ff().Sb.name)};
g.h.wG=function(a){var b=this.F.getVideoData();a==b&&this.o.ua("onPlaybackQualityChange",a.Ca.video.quality)};
g.h.Zm=function(a,b,c){if("newdata"==a)QR(this.B),this.o.R("videoplayerreset",b);else{if(!this.D)return;if("dataloaded"==a)if(b.C.ge(c.tb),this.F==this.A){if(this.g.experiments.g("disable_sap_error_check")||!this.A.A.isError()){var d=IW(this);!d&&QW(this);var e=QW(this);!VG(e)||d||GG(this.A.g)?(e.Nb(),d&&g.YW(this,6),PW(this),d||(e=this.B.A)&&!e.o&&NR(this.B)&&this.B.A.create()):(d=e.va&&!g.RC()?"html5.unsupportedlive":"fmt.noneavailable",g.KM(this.A,d,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nosupported.1;f18."+
+(0<=e.vf.indexOf("itag=18"))+";f43."+ +(0<=e.vf.indexOf("itag=43"))))}}else PW(this);1==b.getPlayerType()&&(this.g.J&&JX(this),this.getVideoData().va&&!this.g.hD&&g.KM(this.A,"html5.unsupportedlive","YTP_DEVICE_FALLBACK",void 0),c.Nb()&&(c.ik||c.Vm||c.hd.focEnabled||c.hd.rmktEnabled||this.getVideoData().pl)&&(e=this.getVideoData(),jX(this,"part2viewed",1,0x8000000000000),jX(this,"engagedview",Math.max(1,1E3*e.Rd),0x8000000000000),e.va||(e=1E3*e.lengthSeconds,jX(this,"videoplaytime25",.25*e,e),jX(this,
"videoplaytime50",.5*e,e),jX(this,"videoplaytime75",.75*e,e),jX(this,"videoplaytime100",e,0x8000000000000),jX(this,"conversionview",e,0x8000000000000))));this.o.R("videodatachange",a,c,b.getPlayerType())}this.g.jb&&this.o.ua("onVideoDataChange",{type:a,playertype:b.getPlayerType()});a=c.clientScreenNonce;c=c.rootVeType;!this.g.experiments.g("player_change_screen_killswitch")&&a&&c&&(b=this.aa,a!=b.D&&(b.D=a,iO(b,"onScreenChanged",{csn:a,root_ve_type:c}),b.o.length&&iO(b,"onLogVesShown",{ids:b.o}),
b.A=g.Ab(b.o)))};
g.h.bj=function(){UW(this,null);this.o.ua("onPlaylistUpdate")};
g.h.zt=function(a){var b=a.getId(),c=QW(this);if("part2viewed"==b)c.pu&&g.it(c.pu),c.Vm&&g.it(c.Vm);else if("conversionview"==b){var d=this.A;d.D&&CI(d.D)}else"engagedview"==b&&g.it(c.ik);c.Rg&&(d=kX(this,c.Rg,a.getId()),g.it(d));switch(b){case "videoplaytime25":c.qr&&g.it(c.qr);g.it(c.UG);break;case "videoplaytime50":c.rr&&g.it(c.rr);g.it(c.VG);break;case "videoplaytime75":c.sr&&g.it(c.sr);g.it(c.WG);break;case "videoplaytime100":c.pr&&g.it(c.pr),g.it(c.TG)}(b=this.getVideoData().pl)&&b[a.getId()]&&
(c=b[a.getId()],g.it(c,void 0,EY.test(c)||FY.test(c)||GY.test(c)),b=b[a.getId()+"gaia"],g.it(b,void 0,EY.test(b)||FY.test(b)||GY.test(b)));this.A.F.D(a)};
g.h.isPeggedToLive=function(){return this.A.isPeggedToLive()};
g.h.Sz=function(a,b){var c=a.getVideoData();if(1==this.T||2==this.T)c.startSeconds=b;2==this.T?WW(this):this.o.R("seekto",b)};
g.h.nD=function(){this.o.R("airplayactivechange")};
g.h.oD=function(){this.o.R("airplayavailabilitychange")};
g.h.FD=function(){this.o.R("beginseeking")};
g.h.nE=function(){this.o.R("endseeking")};
g.h.Jn=function(){var a=this.C.wb(),b=this.getVideoData();b.mf||!this.ha?(b=b.Zd,a=mX(this,a),b&&qX(this,a)):a&&rX(this,a);this.o.ua("onPlaylistUpdate")};
g.h.uD=function(a){this.o.ua("onCueRangeEnter",a.getId())};
g.h.vD=function(a){this.o.ua("onCueRangeExit",a.getId())};
g.h.zD=function(){this.pa||(this.pa=zF(this.Ft,this));HI(this.J,AX(this));if(this.g.experiments.g("html5_playlist_preload")&&g.vX(this)){var a=this.C.wb(RI(this.C));a&&pX(this,a,1,!1)}};
g.h.xD=function(){var a=QW(this),b=this.A.F.g.g||[],c=this.Va.videoplaytime100;this.g.experiments.g("send_pyv_ad_mt_and_abandon_pings")&&a.Rg&&0<=b.indexOf(c)&&(a=kX(this,a.Rg,"video_abandon"),g.it(a))};
g.h.yE=function(){this.K.R("internalAbandon")};
g.h.Ft=function(a){a=a.g;if(!(0,window.isNaN)(a)&&0<a&&this.A){var b=this.A;b.D&&0<a&&(b.D.o.o.aft=[a])}};
g.h.WE=function(){this.En()};
g.h.XE=function(){this.En()};
g.h.En=function(){this.g.jb&&this.F?this.o.ua("onApiChange",this.F.getPlayerType()):this.o.ua("onApiChange")};
g.h.UE=function(){var a={volume:g.Zc(Math.floor(100*this.D.getVolume()),0,100),muted:this.D.g.muted};a.muted||ZW(this,!1);this.N=g.ic(a);this.o.ua("onVolumeChange",a)};
g.h.pE=function(){var a=g.Qt();EX(this,a==this.H.element?1:0);DX(this,!!a&&g.Rd(this.H.element,a))};
g.h.MF=function(){2!=this.Wa&&EX(this,g.Qt()==this.H.element?1:0);this.g.Fi&&this.getVideoData()&&!this.getVideoData().backgroundable&&this.D&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&Rt(this.D.g)};
g.h.DE=function(a){3!=JN(this)&&this.o.R("liveviewshift",a)};
g.h.LF=function(a){var b=g.EP(this.H);g.eh(this.Dc,b)||(this.Dc=b,this.F&&pN(this.F,"r"),!this.g.experiments.g("disable_app_resize")&&this.A&&this.A!=this.F&&pN(this.A,"r"),1==this.Wa&&this.Ka&&DX(this,!0));this.oc&&g.id(this.oc,a)||(this.o.R("appresize",a),this.oc=a)};
g.h.Kc=function(){return this.K.Kc()};
g.h.aG=function(){FX(this,"signature")};
g.h.gF=function(){MW(this);LW(this)};
g.h.WD=function(){this.o.ua("CONNECTION_ISSUE")};
g.h.Pz=function(a){this.o.R("heartbeatparams",a)};
g.h.Oh=function(){var a=this.o.isFullscreen()||kE(this.g),b=this.o.app.jc;return g.XN(this.o)?4:wM()?3:a?2:b?1:0};
g.h.W=function(){this.A.dispose();MW(this);g.Le(g.Zb(this.Ta),this.C);g.xF(this.pa);this.pa=0;this.Ha&&this.Ha.dispose();g.I.prototype.W.call(this)};
var EZ={};g.x("yt.player.Application.create",function(a,b){try{var c=g.u(a)?a:"player"+g.Ga(a);if(EZ[c]){try{EZ[c].dispose()}catch(e){g.ws(e)}EZ[c]=null}var d=new FW(a,b);g.Je(d,function(){EZ[c]=null});
return EZ[c]=d}catch(e){throw g.ws(e),e.stack;}},void 0);
var FZ=g.y("ytcsi.tick");FZ&&FZ("pe");})(_yt_player);

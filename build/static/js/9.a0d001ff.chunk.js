(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[9],{223:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(46),i=a.n(s),n=a(47),r=a(43),l=a(0),o=a(93),d=a(217),j=a(42),b=a(16),m=a(50),O=a(45),u=a(2),h=a(49),x=a(1);t.default=function(e){var t=Object(l.useState)(!1),a=Object(r.a)(t,2),s=a[0],f=a[1],p=Object(u.f)();e.location.state||p.push("/shop");var v=Object(l.useState)({order_note:""}),N=Object(r.a)(v,2),g=N[0],y=N[1],w=function(){var t=Object(n.a)(i.a.mark((function t(a){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={order:Object.assign(e.location.state?e.location.state.order:"",g),product:e.location.state?e.location.state.product:""},console.log(c),t.next=4,O.a.post("/order",c);case 4:!0===t.sent.data.success?p.push("/thankyou"):(f(!1),alert("something went wrong, please try again later"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{}),Object(x.jsx)("div",{className:"order-now",children:Object(x.jsxs)("div",{className:"forms",children:[Object(x.jsxs)("div",{className:"stepper-wrapper",children:[Object(x.jsxs)("div",{className:"stepper-item completed ",children:[Object(x.jsx)("div",{className:"step-counter",children:"1"}),Object(x.jsx)("div",{className:"step-name",children:"\xe9tape 1 "})]}),Object(x.jsxs)("div",{className:"stepper-item completed ",children:[Object(x.jsx)("div",{className:"step-counter",children:"2"}),Object(x.jsx)("div",{className:"step-name",children:"\xe9tape 2"})]}),Object(x.jsxs)("div",{className:"stepper-item completed active ",children:[Object(x.jsx)("div",{className:"step-counter",children:"3"}),Object(x.jsx)("div",{className:"step-name",children:"\xe9tape 3"})]})]}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(o.a.Group,{className:"mb-3",children:[Object(x.jsx)(o.a.Label,{children:"Note de commande (facultatif)"}),Object(x.jsx)(o.a.Control,{as:"textarea",rows:3,placeholder:"",onChange:function(e){y(Object(c.a)(Object(c.a)({},g),{},{order_note:e.target.value}))}})]})}),Object(x.jsx)(b.b,{to:"/order/step2",children:Object(x.jsx)(d.a,{children:"previous"})}),Object(x.jsxs)(d.a,{className:"float-end d-flex ",onClick:function(){w(),f(!0)},children:["submit",s?Object(x.jsx)(j.a,{as:"span",animation:"border",size:"sm",role:"status",className:"mx-2 mt-1"}):null]})]})}),Object(x.jsx)(h.a,{})]})}},44:function(e,t,a){"use strict";t.a="https://nanybackendforadmin.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(55),s=a.n(c);t.a=s.a.create({baseURL:"https://nanybackendforadmin.herokuapp.com"})},49:function(e,t,a){"use strict";a(0);var c=a(218),s=a(216),i=a(71),n=a(217),r=a(17),l=a(16),o=a(52),d=a(48),j=a.n(d),b=a(1);t.a=function(){return Object(b.jsx)(j.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:r.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Pages"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Liens rapides"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(i.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Play Store"})]})})]})]}),Object(b.jsx)(i.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,a){"use strict";var c=a(46),s=a.n(c),i=a(47),n=a(43),r=a(0),l=a(51),o=a(230),d=a(216),j=a(71),b=a(217),m=a(16),O=a(44),u=(a(23),a(1)),h=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),i=Object(n.a)(s,2),h=i[0],x=i[1],f=Object(r.useRef)();Object(r.useEffect)((function(){var e=setInterval((function(){x(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(u.jsx)(l.c,{size:30}),Object(u.jsx)("span",{className:"items",children:h.length})," "]}),a?Object(u.jsxs)(o.a,{ref:f,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)("h5",{children:["Mon Chariot"," ",Object(u.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(u.jsx)(o.a.Body,{className:"dropdown",children:h.length>0?Object(u.jsxs)(u.Fragment,{children:[h.map((function(e){return Object(u.jsxs)(d.a,{className:"each-item",children:[Object(u.jsx)(j.a,{xs:"3",className:"cartdropdown",children:Object(u.jsx)("img",{src:O.a+e.image[0],height:"60",width:"60",alt:""})}),Object(u.jsxs)(j.a,{xs:"9",children:[Object(u.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(u.jsx)(m.b,{to:"/cart",children:Object(u.jsx)(b.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(u.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},x=a(218),f=a(227),p=a(212),v=a(17),N=a(48),g=a.n(N),y=a(54),w=a.n(y),k=a(45),I=g.a.Link,C=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],l=a[1],o=Object(r.useState)({image:"",text:"",buttontext:"",link:""}),N=Object(n.a)(o,2),g=N[0],y=N[1],P=Object(r.useRef)(null),F=Object(r.useRef)(),R=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?y(t.data.data[0]):y([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){R();var e=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.current&&!P.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),c&&F.current.classList.add("shop"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"sticky",children:[Object(u.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(d.a,{className:"justify-content-center pt-2",children:[Object(u.jsx)(j.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(u.jsx)("img",{className:"",src:O.a+g.image,alt:"",height:"35",width:"35"})}),Object(u.jsx)(j.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(u.jsxs)("p",{className:" pt-2 ",children:[" ",g.text," "]})}),Object(u.jsx)(j.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(u.jsx)(m.b,{to:g.link,children:Object(u.jsx)(b.a,{className:"my-1",children:g.button_text})})})]})})}),Object(u.jsx)("div",{className:"top-f-nav",children:Object(u.jsx)(f.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(f.a.Brand,{href:"#",children:Object(u.jsx)("img",{src:v.a,width:"100%",height:"80",alt:""})}),Object(u.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(u.jsx)(h,{})}),Object(u.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(f.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(u.jsx)(p.a,{className:"",children:Object(u.jsxs)(w.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.c,{to:"/",className:"nav-link ",children:"Accueil"})}),C.map((function(e,t){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(I,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(m.c,{to:"/shop",className:"nav-link ",ref:F,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(u.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(u.jsx)(h,{})})]})})})]})})})]})})}},56:function(e,t,a){"use strict";var c=function(){};e.exports=c},93:function(e,t,a){"use strict";var c=a(7),s=a(13),i=a(14),n=a.n(i),r=a(9),l=a.n(r),o=a(0),d=a(1),j=["as","className","type","tooltip"],b={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},m=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,r=e.className,l=e.type,o=void 0===l?"valid":l,b=e.tooltip,m=void 0!==b&&b,O=Object(s.a)(e,j);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},O),{},{ref:t,className:n()(r,"".concat(o,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=b;var O=m,u=o.createContext({}),h=a(15),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.className,l=e.type,j=void 0===l?"checkbox":l,b=e.isValid,m=void 0!==b&&b,O=e.isInvalid,f=void 0!==O&&O,p=e.as,v=void 0===p?"input":p,N=Object(s.a)(e,x),g=Object(o.useContext)(u).controlId;return i=Object(h.a)(i,"form-check-input"),Object(d.jsx)(v,Object(c.a)(Object(c.a)({},N),{},{ref:t,type:j,id:a||g,className:n()(r,i,m&&"is-valid",f&&"is-invalid")}))}));f.displayName="FormCheckInput";var p=f,v=["bsPrefix","className","htmlFor"],N=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.htmlFor,l=Object(s.a)(e,v),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:t,htmlFor:r||j,className:n()(i,a)}))}));N.displayName="FormCheckLabel";var g=N,y=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.bsSwitchPrefix,l=e.inline,j=void 0!==l&&l,b=e.disabled,m=void 0!==b&&b,x=e.isValid,f=void 0!==x&&x,v=e.isInvalid,N=void 0!==v&&v,w=e.feedbackTooltip,k=void 0!==w&&w,I=e.feedback,C=e.feedbackType,P=e.className,F=e.style,R=e.title,S=void 0===R?"":R,L=e.type,T=void 0===L?"checkbox":L,z=e.label,A=e.children,V=e.as,_=void 0===V?"input":V,E=Object(s.a)(e,y);i=Object(h.a)(i,"form-check"),r=Object(h.a)(r,"form-switch");var q=Object(o.useContext)(u).controlId,H=Object(o.useMemo)((function(){return{controlId:a||q}}),[q,a]),U=null!=z&&!1!==z&&!A,B=Object(d.jsx)(p,Object(c.a)(Object(c.a)({},E),{},{type:"switch"===T?"checkbox":T,ref:t,isValid:f,isInvalid:N,disabled:m,as:_}));return Object(d.jsx)(u.Provider,{value:H,children:Object(d.jsx)("div",{style:F,className:n()(P,z&&i,j&&"".concat(i,"-inline"),"switch"===T&&r),children:A||Object(d.jsxs)(d.Fragment,{children:[B,U&&Object(d.jsx)(g,{title:S,children:z}),I&&Object(d.jsx)(O,{type:C,tooltip:k,children:I})]})})})}));w.displayName="FormCheck";var k=Object.assign(w,{Input:p,Label:g}),I=a(18),C=(a(56),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=o.forwardRef((function(e,t){var a,i,r=e.bsPrefix,l=e.type,j=e.size,b=e.htmlSize,m=e.id,O=e.className,x=e.isValid,f=void 0!==x&&x,p=e.isInvalid,v=void 0!==p&&p,N=e.plaintext,g=e.readOnly,y=e.as,w=void 0===y?"input":y,k=Object(s.a)(e,C),P=Object(o.useContext)(u).controlId;(r=Object(h.a)(r,"form-control"),N)?a=Object(I.a)({},"".concat(r,"-plaintext"),!0):(i={},Object(I.a)(i,r,!0),Object(I.a)(i,"".concat(r,"-").concat(j),j),a=i);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},k),{},{type:l,size:b,ref:t,readOnly:g,id:m||P,className:n()(O,a,f&&"is-valid",v&&"is-invalid","color"===l&&"".concat(r,"-color"))}))}));P.displayName="FormControl";var F=Object.assign(P,{Feedback:O}),R=a(57),S=Object(R.a)("form-floating"),L=["controlId","as"],T=o.forwardRef((function(e,t){var a=e.controlId,i=e.as,n=void 0===i?"div":i,r=Object(s.a)(e,L),l=Object(o.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(u.Provider,{value:l,children:Object(d.jsx)(n,Object(c.a)(Object(c.a)({},r),{},{ref:t}))})}));T.displayName="FormGroup";var z=T,A=a(71),V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,r=e.bsPrefix,l=e.column,j=e.visuallyHidden,b=e.className,m=e.htmlFor,O=Object(s.a)(e,V),x=Object(o.useContext)(u).controlId;r=Object(h.a)(r,"form-label");var f="col-form-label";"string"===typeof l&&(f="".concat(f," ").concat(f,"-").concat(l));var p=n()(b,r,j&&"visually-hidden",l&&f);return m=m||x,l?Object(d.jsx)(A.a,Object(c.a)({ref:t,as:"label",className:p,htmlFor:m},O)):Object(d.jsx)(i,Object(c.a)({ref:t,className:p,htmlFor:m},O))}));_.displayName="FormLabel",_.defaultProps={column:!1,visuallyHidden:!1};var E=_,q=["bsPrefix","className","id"],H=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.id,l=Object(s.a)(e,q),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:t,className:n()(i,a),id:r||j}))}));H.displayName="FormRange";var U=H,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,r=e.htmlSize,l=e.className,j=e.isValid,b=void 0!==j&&j,m=e.isInvalid,O=void 0!==m&&m,x=e.id,f=Object(s.a)(e,B),p=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},f),{},{size:r,ref:t,className:n()(l,a,i&&"".concat(a,"-").concat(i),b&&"is-valid",O&&"is-invalid"),id:x||p}))}));J.displayName="FormSelect";var M=J,G=["bsPrefix","className","as","muted"],D=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.as,l=void 0===r?"small":r,o=e.muted,j=Object(s.a)(e,G);return a=Object(h.a)(a,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},j),{},{ref:t,className:n()(i,a,o&&"text-muted")}))}));D.displayName="FormText";var Q=D,K=o.forwardRef((function(e,t){return Object(d.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));K.displayName="Switch";var W=Object.assign(K,{Input:k.Input,Label:k.Label}),X=["bsPrefix","className","children","controlId","label"],Y=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.children,l=e.controlId,o=e.label,j=Object(s.a)(e,X);return a=Object(h.a)(a,"form-floating"),Object(d.jsxs)(z,Object(c.a)(Object(c.a)({ref:t,className:n()(i,a),controlId:l},j),{},{children:[r,Object(d.jsx)("label",{htmlFor:l,children:o})]}))}));Y.displayName="FloatingLabel";var Z=Y,$=["className","validated","as"],ee={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},te=o.forwardRef((function(e,t){var a=e.className,i=e.validated,r=e.as,l=void 0===r?"form":r,o=Object(s.a)(e,$);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},o),{},{ref:t,className:n()(a,i&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:z,Control:F,Floating:S,Check:k,Switch:W,Label:E,Text:Q,Range:U,Select:M,FloatingLabel:Z})}}]);
//# sourceMappingURL=9.a0d001ff.chunk.js.map
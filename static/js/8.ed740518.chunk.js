(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[8],{221:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(43),i=a(0),n=a(93),r=a(217),l=a(50),o=a(49),j=a(2),d=a(1);t.default=function(e){var t=Object(j.f)();e.location.state||t.push("/shop");var a=Object(i.useState)(!1),b=Object(s.a)(a,2),m=b[0],O=b[1],u=e.location.state?e.location.state.product:[],h=e.location.state?e.location.state.total:[],x=[];console.log(h),u.map((function(t){return x.push({product:t._id,quantity:t.quantity,color:e.location.state.color?e.location.state.color:t.color,price:e.location.state.price?e.location.state.price:t.price})}));var p=Object(i.useState)({name:null,email:null,mobile:null,total:h}),f=Object(s.a)(p,2),v=f[0],N=f[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{}),Object(d.jsx)("div",{className:"order-now",children:Object(d.jsxs)("div",{className:"forms",children:[Object(d.jsxs)("div",{className:"stepper-wrapper",children:[Object(d.jsxs)("div",{className:"stepper-item completed ",children:[Object(d.jsx)("div",{className:"step-counter",children:"1"}),Object(d.jsx)("div",{className:"step-name",children:"\xe9tape 1 "})]}),Object(d.jsxs)("div",{className:"stepper-item ",children:[Object(d.jsx)("div",{className:"step-counter",children:"2"}),Object(d.jsx)("div",{className:"step-name",children:"\xe9tape 2"})]}),Object(d.jsxs)("div",{className:"stepper-item ",children:[Object(d.jsx)("div",{className:"step-counter",children:"3"}),Object(d.jsx)("div",{className:"step-name",children:"\xe9tape 3"})]})]}),Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(n.a.Group,{className:"mb-3",children:[Object(d.jsx)(n.a.Label,{children:" Nom"}),Object(d.jsx)(n.a.Control,{type:"text",placeholder:"entrez votre nom",value:v.name,onChange:function(e){N(Object(c.a)(Object(c.a)({},v),{},{name:e.target.value}))}})]}),Object(d.jsxs)(n.a.Group,{className:"mb-3",children:[Object(d.jsx)(n.a.Label,{children:"E-mail"}),Object(d.jsx)(n.a.Control,{type:"email",placeholder:"entrez votre e-mail",value:v.email,onChange:function(e){N(Object(c.a)(Object(c.a)({},v),{},{email:e.target.value}))}})]}),Object(d.jsxs)(n.a.Group,{children:[Object(d.jsx)(n.a.Label,{children:"um\xe9ro de t\xe9l\xe9phone"}),Object(d.jsx)(n.a.Control,{type:"Number",placeholder:"XXXXXXXXXXXX",value:v.mobile,onChange:function(e){N(Object(c.a)(Object(c.a)({},v),{},{mobile:e.target.value}))}})]})]}),m?Object(d.jsx)("small",{className:"text-center text-danger",children:" Tous les champs sont requis"}):null,Object(d.jsx)(r.a,{className:"float-end mt-3",onClick:function(){v.name&&v.email&&v.mobile?t.push({pathname:"/order/step2",state:{order:v,product:u}}):O(!0)},children:" suivante"})]})}),Object(d.jsx)(o.a,{})]})}},44:function(e,t,a){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(55),s=a.n(c);t.a=s.a.create({baseURL:"https://nanyapp2.herokuapp.com"})},49:function(e,t,a){"use strict";a(0);var c=a(218),s=a(216),i=a(70),n=a(217),r=a(17),l=a(16),o=a(52),j=a(48),d=a.n(j),b=a(1);t.a=function(){return Object(b.jsx)(d.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:r.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Pages"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Liens rapides"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(b.jsxs)(i.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(i.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Play Store"})]})})]})]}),Object(b.jsx)(i.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,a){"use strict";var c=a(46),s=a.n(c),i=a(47),n=a(43),r=a(0),l=a(51),o=a(230),j=a(216),d=a(70),b=a(217),m=a(16),O=a(44),u=(a(23),a(1)),h=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),i=Object(n.a)(s,2),h=i[0],x=i[1],p=Object(r.useRef)();Object(r.useEffect)((function(){var e=setInterval((function(){x(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(u.jsx)(l.c,{size:30}),Object(u.jsx)("span",{className:"items",children:h.length})," "]}),a?Object(u.jsxs)(o.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)("h5",{children:["Mon Chariot"," ",Object(u.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(u.jsx)(o.a.Body,{className:"dropdown",children:h.length>0?Object(u.jsxs)(u.Fragment,{children:[h.map((function(e){return Object(u.jsxs)(j.a,{className:"each-item",children:[Object(u.jsx)(d.a,{xs:"3",className:"cartdropdown",children:Object(u.jsx)("img",{src:O.a+e.image[0],height:"60",width:"60",alt:""})}),Object(u.jsxs)(d.a,{xs:"9",children:[Object(u.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(u.jsx)(m.b,{to:"/cart",children:Object(u.jsx)(b.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(u.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},x=a(218),p=a(227),f=a(212),v=a(17),N=a(48),g=a.n(N),y=a(54),w=a.n(y),k=a(45),I=g.a.Link,C=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],l=a[1],o=Object(r.useState)({image:"",text:"",buttontext:"",link:""}),N=Object(n.a)(o,2),g=N[0],y=N[1],P=Object(r.useRef)(null),F=Object(r.useRef)(),R=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?y(t.data.data[0]):y([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){R();var e=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.current&&!P.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),c&&F.current.classList.add("shop"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"sticky",children:[Object(u.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(j.a,{className:"justify-content-center pt-2",children:[Object(u.jsx)(d.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(u.jsx)("img",{className:"",src:O.a+g.image,alt:"",height:"35",width:"35"})}),Object(u.jsx)(d.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(u.jsxs)("p",{className:" pt-2 ",children:[" ",g.text," "]})}),Object(u.jsx)(d.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(u.jsx)(m.b,{to:g.link,children:Object(u.jsx)(b.a,{className:"my-1",children:g.button_text})})})]})})}),Object(u.jsx)("div",{className:"top-f-nav",children:Object(u.jsx)(p.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a.Brand,{href:"#",children:Object(u.jsx)("img",{src:v.a,width:"100%",height:"80",alt:""})}),Object(u.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(u.jsx)(h,{})}),Object(u.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(p.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(u.jsx)(f.a,{className:"",children:Object(u.jsxs)(w.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.c,{to:"/",className:"nav-link ",children:"Accueil"})}),C.map((function(e,t){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(I,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(m.c,{to:"/shop",className:"nav-link ",ref:F,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(u.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(u.jsx)(h,{})})]})})})]})})})]})})}},56:function(e,t,a){"use strict";var c=function(){};e.exports=c},93:function(e,t,a){"use strict";var c=a(7),s=a(13),i=a(14),n=a.n(i),r=a(9),l=a.n(r),o=a(0),j=a(1),d=["as","className","type","tooltip"],b={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},m=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,r=e.className,l=e.type,o=void 0===l?"valid":l,b=e.tooltip,m=void 0!==b&&b,O=Object(s.a)(e,d);return Object(j.jsx)(i,Object(c.a)(Object(c.a)({},O),{},{ref:t,className:n()(r,"".concat(o,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=b;var O=m,u=o.createContext({}),h=a(15),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.className,l=e.type,d=void 0===l?"checkbox":l,b=e.isValid,m=void 0!==b&&b,O=e.isInvalid,p=void 0!==O&&O,f=e.as,v=void 0===f?"input":f,N=Object(s.a)(e,x),g=Object(o.useContext)(u).controlId;return i=Object(h.a)(i,"form-check-input"),Object(j.jsx)(v,Object(c.a)(Object(c.a)({},N),{},{ref:t,type:d,id:a||g,className:n()(r,i,m&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var f=p,v=["bsPrefix","className","htmlFor"],N=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.htmlFor,l=Object(s.a)(e,v),d=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-check-label"),Object(j.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:t,htmlFor:r||d,className:n()(i,a)}))}));N.displayName="FormCheckLabel";var g=N,y=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.bsSwitchPrefix,l=e.inline,d=void 0!==l&&l,b=e.disabled,m=void 0!==b&&b,x=e.isValid,p=void 0!==x&&x,v=e.isInvalid,N=void 0!==v&&v,w=e.feedbackTooltip,k=void 0!==w&&w,I=e.feedback,C=e.feedbackType,P=e.className,F=e.style,R=e.title,S=void 0===R?"":R,L=e.type,T=void 0===L?"checkbox":L,z=e.label,X=e.children,A=e.as,V=void 0===A?"input":A,_=Object(s.a)(e,y);i=Object(h.a)(i,"form-check"),r=Object(h.a)(r,"form-switch");var q=Object(o.useContext)(u).controlId,E=Object(o.useMemo)((function(){return{controlId:a||q}}),[q,a]),G=null!=z&&!1!==z&&!X,H=Object(j.jsx)(f,Object(c.a)(Object(c.a)({},_),{},{type:"switch"===T?"checkbox":T,ref:t,isValid:p,isInvalid:N,disabled:m,as:V}));return Object(j.jsx)(u.Provider,{value:E,children:Object(j.jsx)("div",{style:F,className:n()(P,z&&i,d&&"".concat(i,"-inline"),"switch"===T&&r),children:X||Object(j.jsxs)(j.Fragment,{children:[H,G&&Object(j.jsx)(g,{title:S,children:z}),I&&Object(j.jsx)(O,{type:C,tooltip:k,children:I})]})})})}));w.displayName="FormCheck";var k=Object.assign(w,{Input:f,Label:g}),I=a(18),C=(a(56),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=o.forwardRef((function(e,t){var a,i,r=e.bsPrefix,l=e.type,d=e.size,b=e.htmlSize,m=e.id,O=e.className,x=e.isValid,p=void 0!==x&&x,f=e.isInvalid,v=void 0!==f&&f,N=e.plaintext,g=e.readOnly,y=e.as,w=void 0===y?"input":y,k=Object(s.a)(e,C),P=Object(o.useContext)(u).controlId;(r=Object(h.a)(r,"form-control"),N)?a=Object(I.a)({},"".concat(r,"-plaintext"),!0):(i={},Object(I.a)(i,r,!0),Object(I.a)(i,"".concat(r,"-").concat(d),d),a=i);return Object(j.jsx)(w,Object(c.a)(Object(c.a)({},k),{},{type:l,size:b,ref:t,readOnly:g,id:m||P,className:n()(O,a,p&&"is-valid",v&&"is-invalid","color"===l&&"".concat(r,"-color"))}))}));P.displayName="FormControl";var F=Object.assign(P,{Feedback:O}),R=a(57),S=Object(R.a)("form-floating"),L=["controlId","as"],T=o.forwardRef((function(e,t){var a=e.controlId,i=e.as,n=void 0===i?"div":i,r=Object(s.a)(e,L),l=Object(o.useMemo)((function(){return{controlId:a}}),[a]);return Object(j.jsx)(u.Provider,{value:l,children:Object(j.jsx)(n,Object(c.a)(Object(c.a)({},r),{},{ref:t}))})}));T.displayName="FormGroup";var z=T,X=a(70),A=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],V=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,r=e.bsPrefix,l=e.column,d=e.visuallyHidden,b=e.className,m=e.htmlFor,O=Object(s.a)(e,A),x=Object(o.useContext)(u).controlId;r=Object(h.a)(r,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var f=n()(b,r,d&&"visually-hidden",l&&p);return m=m||x,l?Object(j.jsx)(X.a,Object(c.a)({ref:t,as:"label",className:f,htmlFor:m},O)):Object(j.jsx)(i,Object(c.a)({ref:t,className:f,htmlFor:m},O))}));V.displayName="FormLabel",V.defaultProps={column:!1,visuallyHidden:!1};var _=V,q=["bsPrefix","className","id"],E=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.id,l=Object(s.a)(e,q),d=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-range"),Object(j.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:t,className:n()(i,a),id:r||d}))}));E.displayName="FormRange";var G=E,H=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,r=e.htmlSize,l=e.className,d=e.isValid,b=void 0!==d&&d,m=e.isInvalid,O=void 0!==m&&m,x=e.id,p=Object(s.a)(e,H),f=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-select"),Object(j.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:r,ref:t,className:n()(l,a,i&&"".concat(a,"-").concat(i),b&&"is-valid",O&&"is-invalid"),id:x||f}))}));U.displayName="FormSelect";var B=U,J=["bsPrefix","className","as","muted"],M=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.as,l=void 0===r?"small":r,o=e.muted,d=Object(s.a)(e,J);return a=Object(h.a)(a,"form-text"),Object(j.jsx)(l,Object(c.a)(Object(c.a)({},d),{},{ref:t,className:n()(i,a,o&&"text-muted")}))}));M.displayName="FormText";var D=M,Q=o.forwardRef((function(e,t){return Object(j.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));Q.displayName="Switch";var K=Object.assign(Q,{Input:k.Input,Label:k.Label}),W=["bsPrefix","className","children","controlId","label"],Y=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.children,l=e.controlId,o=e.label,d=Object(s.a)(e,W);return a=Object(h.a)(a,"form-floating"),Object(j.jsxs)(z,Object(c.a)(Object(c.a)({ref:t,className:n()(i,a),controlId:l},d),{},{children:[r,Object(j.jsx)("label",{htmlFor:l,children:o})]}))}));Y.displayName="FloatingLabel";var Z=Y,$=["className","validated","as"],ee={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},te=o.forwardRef((function(e,t){var a=e.className,i=e.validated,r=e.as,l=void 0===r?"form":r,o=Object(s.a)(e,$);return Object(j.jsx)(l,Object(c.a)(Object(c.a)({},o),{},{ref:t,className:n()(a,i&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:z,Control:F,Floating:S,Check:k,Switch:K,Label:_,Text:D,Range:G,Select:B,FloatingLabel:Z})}}]);
//# sourceMappingURL=8.ed740518.chunk.js.map
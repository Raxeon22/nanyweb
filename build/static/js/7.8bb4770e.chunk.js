(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[7],{214:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(43),r=a(0),n=a(83),i=a(209),l=a(42),o=a(15),d=a(52),j=a(2),b=a(51),O=a(1);t.default=function(e){var t=Object(j.f)(),a=Object(r.useState)([]),m=Object(s.a)(a,2),u=(m[0],m[1],Object(r.useState)("next")),h=Object(s.a)(u,2),x=h[0],p=h[1],f=Object(r.useState)({address:"",city:"",country:"",postalCode:0}),v=Object(s.a)(f,2),N=v[0],g=v[1];return e.location.state||t.push("/shop"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{}),Object(O.jsx)("div",{className:"order-now",children:Object(O.jsxs)("div",{className:"forms",children:[Object(O.jsxs)("div",{className:"stepper-wrapper",children:[Object(O.jsxs)("div",{className:"stepper-item completed ",children:[Object(O.jsx)("div",{className:"step-counter",children:"1"}),Object(O.jsx)("div",{className:"step-name",children:"step 1 "})]}),Object(O.jsxs)("div",{className:"stepper-item completed active",children:[Object(O.jsx)("div",{className:"step-counter",children:"2"}),Object(O.jsx)("div",{className:"step-name",children:"step 2"})]}),Object(O.jsxs)("div",{className:"stepper-item ",children:[Object(O.jsx)("div",{className:"step-counter",children:"3"}),Object(O.jsx)("div",{className:"step-name",children:"step 3"})]})]}),Object(O.jsxs)(n.a,{children:[Object(O.jsxs)(n.a.Group,{className:"mb-3",children:[Object(O.jsx)(n.a.Label,{children:"Address"}),Object(O.jsx)(n.a.Control,{type:"text",value:N.address,onChange:function(e){g(Object(c.a)(Object(c.a)({},N),{},{address:e.target.value}))},placeholder:"Address"})]}),Object(O.jsxs)(n.a.Group,{className:"mb-3",children:[Object(O.jsx)(n.a.Label,{children:"City"}),Object(O.jsx)(n.a.Control,{type:"text",value:N.city,onChange:function(e){g(Object(c.a)(Object(c.a)({},N),{},{city:e.target.value}))},placeholder:"City"})]}),Object(O.jsxs)(n.a.Group,{className:"mb-3",children:[Object(O.jsx)(n.a.Label,{children:"Country"}),Object(O.jsx)(n.a.Control,{type:"text",value:N.country,onChange:function(e){g(Object(c.a)(Object(c.a)({},N),{},{country:e.target.value}))},placeholder:"Country"})]}),Object(O.jsxs)(n.a.Group,{className:"mb-3",children:[Object(O.jsx)(n.a.Label,{children:"postal Code"}),Object(O.jsx)(n.a.Control,{type:"text",value:N.postalCode,onChange:function(e){g(Object(c.a)(Object(c.a)({},N),{},{postalCode:e.target.value}))},placeholder:"Postal code"})]})]}),Object(O.jsx)(o.b,{to:"/order/step1",children:Object(O.jsx)(i.a,{children:"previous"})}),Object(O.jsxs)(i.a,{className:"float-end ",onClick:function(){p(Object(O.jsx)(l.a,{as:"span",animation:"border",size:"sm",role:"status",className:"mx-4"})),t.push({pathname:"/order/step3",state:{order:Object.assign(e.location.state?e.location.state.order:"",N),product:e.location.state?e.location.state.product:""}})},children:[" ",x]})]})}),Object(O.jsx)(b.a,{})]})}},44:function(e,t,a){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(59),s=a.n(c);t.a=s.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,a){"use strict";var c=a(7),s=a(46),r=a.n(s),n=a(47),i=a(43),l=a(0),o=a(48),d=a(53),j=a.n(d),b=(a(54),a(55),a(45)),O=a(44),m=a(15),u=a(221),h=a(208),x=a(67),p=a(42),f=a(1);t.a=function(e){var t=e.show,a={dots:!1,infinite:!0,speed:700,slidesToShow:t||4,slidesToScroll:1,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]},s=Object(l.useState)(!1),d=Object(i.a)(s,2),v=d[0],N=d[1];return Object(l.useEffect)((function(){function e(){return(e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/product",{});case 2:!0===(t=e.sent).data.success&&N(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(f.jsxs)("div",{className:"new-arrivals",children:[Object(f.jsxs)("h3",{children:[" ",e.heading," "]}),v?Object(f.jsx)(j.a,Object(c.a)(Object(c.a)({className:"react-slider"},a),{},{children:v.map((function(e){return Object(f.jsx)("div",{className:"each-slid",children:Object(f.jsxs)(u.a,{className:"each-card",children:[Object(f.jsx)(u.a.Img,{variant:"top"}),Object(f.jsx)(m.b,{to:"/shop/product/".concat(e._id),children:Object(f.jsx)("img",{src:O.a+e.image[0],alt:"",width:"100%",height:"280"})}),Object(f.jsx)(u.a.Body,{children:Object(f.jsx)(u.a.Title,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(x.a,{xs:"9",style:{textAlign:"left"},children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(x.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(t.push(e.color[0].name),e.color=t,e.quantity=1,e.size=e.size[0].length[0],localStorage.getItem("order")&&localStorage.getItem("order").length){var a=JSON.parse(localStorage.getItem("order"));a.push(e),localStorage.setItem("order",JSON.stringify(a))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(o.c,{size:25,color:" white"})})})]})})})]})},e._id)}))})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(p.a,{animation:"border",variant:"dark"})})]})}},51:function(e,t,a){"use strict";a(0);var c=a(210),s=a(208),r=a(67),n=a(209),i=a(17),l=a(15),o=a(56),d=a(50),j=a.n(d),b=a(1);t.a=function(){return Object(b.jsx)(j.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(r.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(r.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Support"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(r.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"\xc0 propos de nous"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"\xc0 propos de nous"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Comment \xe7a fonctionne"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Prestations de service"})})]})]}),Object(b.jsxs)(r.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(r.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(r.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(n.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Jouer au magasin"})]})})]})]}),Object(b.jsx)(r.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},52:function(e,t,a){"use strict";var c=a(46),s=a.n(c),r=a(47),n=a(43),i=a(0),l=a(48),o=a(221),d=a(208),j=a(67),b=a(209),O=a(15),m=a(44),u=(a(23),a(1)),h=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)([]),r=Object(n.a)(s,2),h=r[0],x=r[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){x(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(u.jsx)(l.c,{size:30}),Object(u.jsx)("span",{className:"items d-none d-lg-block",children:h.length})," "]}),a?Object(u.jsxs)(o.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)("h5",{children:["My Cart"," ",Object(u.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(u.jsx)(o.a.Body,{className:"dropdown",children:h.length>0?Object(u.jsxs)(u.Fragment,{children:[h.map((function(e){return Object(u.jsxs)(d.a,{className:"each-item",children:[Object(u.jsx)(j.a,{xs:"3",className:"cartdropdown",children:Object(u.jsx)("img",{src:m.a+e.image[0],height:"60",width:"60",alt:""})}),Object(u.jsxs)(j.a,{xs:"9",children:[Object(u.jsxs)("h6",{children:[" ",e.name," "]}),"price: ",e.price]})]})})),Object(u.jsx)(O.b,{to:"/cart",children:Object(u.jsx)(b.a,{className:"mt-1",variant:"light",children:"VIEW ALL CART"})})]}):Object(u.jsx)("i",{children:"No cart added yet"})})]}):null]})},x=a(210),p=a(205),f=a(17),v=a(50),N=a.n(v),g=a(58),y=a.n(g),w=a(45),k=(a(49),N.a.Link),S=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),a=Object(n.a)(t,2),c=a[0],l=a[1],o=Object(i.useState)(!1),v=Object(n.a)(o,2),N=v[0],g=v[1],C=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),I=Object(n.a)(C,2),F=I[0],P=I[1],R=Object(i.useRef)(),T=Object(i.useRef)(),L=Object(i.useRef)(null),z=Object(i.useRef)(),A=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?P(t.data.data[0]):P([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){A();var e=function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.current&&!L.current.contains(t.target)&&g(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),N&&z.current.classList.add("shop"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"sticky",children:[Object(u.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(d.a,{className:"justify-content-center pt-2",children:[Object(u.jsx)(j.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(u.jsx)("img",{className:"",src:m.a+F.image,alt:"",height:"35",width:"35"})}),Object(u.jsx)(j.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(u.jsxs)("p",{className:" pt-2 ",children:[" ",F.text," "]})}),Object(u.jsx)(j.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(u.jsx)(O.b,{to:F.link,children:Object(u.jsx)(b.a,{className:"mt-1",children:F.button_text})})})]})})}),Object(u.jsx)("div",{className:"top-f-nav",children:Object(u.jsx)(p.a,{ref:T,className:"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:Object(u.jsx)("img",{src:f.a,width:"100%",height:"auto",alt:""})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){var e=R.current;c?(e.classList.remove("show"),l(!1)):(e.classList.add("show"),l(!0))},children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{ref:R,className:"collapse navbar-collapse justify-content-end ",id:"navbarSupportedContent",children:Object(u.jsx)("div",{className:"navbar-nav ",children:Object(u.jsxs)(y.a,{className:"scrollspy",items:["MAISON","SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(O.c,{to:"/",className:"nav-link ",children:"MAISON"})}),S.map((function(e,t){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(k,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},t.toString())})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(O.c,{to:"/shop",className:"nav-link ",ref:z,onMouseEnter:function(){e.shop&&g(!0)},children:[" ","Boutique"," "]})}),Object(u.jsx)("li",{className:"nav-item pt-1 number ",children:Object(u.jsx)(h,{})})]})})})]})})})]})})}},60:function(e,t,a){"use strict";var c=function(){};e.exports=c},83:function(e,t,a){"use strict";var c=a(7),s=a(13),r=a(14),n=a.n(r),i=a(9),l=a.n(i),o=a(0),d=a(1),j=["as","className","type","tooltip"],b={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},O=o.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.className,l=e.type,o=void 0===l?"valid":l,b=e.tooltip,O=void 0!==b&&b,m=Object(s.a)(e,j);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},m),{},{ref:t,className:n()(i,"".concat(o,"-").concat(O?"tooltip":"feedback"))}))}));O.displayName="Feedback",O.propTypes=b;var m=O,u=o.createContext({}),h=a(16),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=o.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,i=e.className,l=e.type,j=void 0===l?"checkbox":l,b=e.isValid,O=void 0!==b&&b,m=e.isInvalid,p=void 0!==m&&m,f=e.as,v=void 0===f?"input":f,N=Object(s.a)(e,x),g=Object(o.useContext)(u).controlId;return r=Object(h.a)(r,"form-check-input"),Object(d.jsx)(v,Object(c.a)(Object(c.a)({},N),{},{ref:t,type:j,id:a||g,className:n()(i,r,O&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var f=p,v=["bsPrefix","className","htmlFor"],N=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.htmlFor,l=Object(s.a)(e,v),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:t,htmlFor:i||j,className:n()(r,a)}))}));N.displayName="FormCheckLabel";var g=N,y=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=o.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,i=e.bsSwitchPrefix,l=e.inline,j=void 0!==l&&l,b=e.disabled,O=void 0!==b&&b,x=e.isValid,p=void 0!==x&&x,v=e.isInvalid,N=void 0!==v&&v,w=e.feedbackTooltip,k=void 0!==w&&w,S=e.feedback,C=e.feedbackType,I=e.className,F=e.style,P=e.title,R=void 0===P?"":P,T=e.type,L=void 0===T?"checkbox":T,z=e.label,A=e.children,_=e.as,V=void 0===_?"input":_,E=Object(s.a)(e,y);r=Object(h.a)(r,"form-check"),i=Object(h.a)(i,"form-switch");var J=Object(o.useContext)(u).controlId,q=Object(o.useMemo)((function(){return{controlId:a||J}}),[J,a]),G=null!=z&&!1!==z&&!A,M=Object(d.jsx)(f,Object(c.a)(Object(c.a)({},E),{},{type:"switch"===L?"checkbox":L,ref:t,isValid:p,isInvalid:N,disabled:O,as:V}));return Object(d.jsx)(u.Provider,{value:q,children:Object(d.jsx)("div",{style:F,className:n()(I,z&&r,j&&"".concat(r,"-inline"),"switch"===L&&i),children:A||Object(d.jsxs)(d.Fragment,{children:[M,G&&Object(d.jsx)(g,{title:R,children:z}),S&&Object(d.jsx)(m,{type:C,tooltip:k,children:S})]})})})}));w.displayName="FormCheck";var k=Object.assign(w,{Input:f,Label:g}),S=a(18),C=(a(60),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=o.forwardRef((function(e,t){var a,r,i=e.bsPrefix,l=e.type,j=e.size,b=e.htmlSize,O=e.id,m=e.className,x=e.isValid,p=void 0!==x&&x,f=e.isInvalid,v=void 0!==f&&f,N=e.plaintext,g=e.readOnly,y=e.as,w=void 0===y?"input":y,k=Object(s.a)(e,C),I=Object(o.useContext)(u).controlId;(i=Object(h.a)(i,"form-control"),N)?a=Object(S.a)({},"".concat(i,"-plaintext"),!0):(r={},Object(S.a)(r,i,!0),Object(S.a)(r,"".concat(i,"-").concat(j),j),a=r);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},k),{},{type:l,size:b,ref:t,readOnly:g,id:O||I,className:n()(m,a,p&&"is-valid",v&&"is-invalid","color"===l&&"".concat(i,"-color"))}))}));I.displayName="FormControl";var F=Object.assign(I,{Feedback:m}),P=a(62),R=Object(P.a)("form-floating"),T=["controlId","as"],L=o.forwardRef((function(e,t){var a=e.controlId,r=e.as,n=void 0===r?"div":r,i=Object(s.a)(e,T),l=Object(o.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(u.Provider,{value:l,children:Object(d.jsx)(n,Object(c.a)(Object(c.a)({},i),{},{ref:t}))})}));L.displayName="FormGroup";var z=L,A=a(67),_=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],V=o.forwardRef((function(e,t){var a=e.as,r=void 0===a?"label":a,i=e.bsPrefix,l=e.column,j=e.visuallyHidden,b=e.className,O=e.htmlFor,m=Object(s.a)(e,_),x=Object(o.useContext)(u).controlId;i=Object(h.a)(i,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var f=n()(b,i,j&&"visually-hidden",l&&p);return O=O||x,l?Object(d.jsx)(A.a,Object(c.a)({ref:t,as:"label",className:f,htmlFor:O},m)):Object(d.jsx)(r,Object(c.a)({ref:t,className:f,htmlFor:O},m))}));V.displayName="FormLabel",V.defaultProps={column:!1,visuallyHidden:!1};var E=V,J=["bsPrefix","className","id"],q=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.id,l=Object(s.a)(e,J),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:t,className:n()(r,a),id:i||j}))}));q.displayName="FormRange";var G=q,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],H=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.size,i=e.htmlSize,l=e.className,j=e.isValid,b=void 0!==j&&j,O=e.isInvalid,m=void 0!==O&&O,x=e.id,p=Object(s.a)(e,M),f=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:i,ref:t,className:n()(l,a,r&&"".concat(a,"-").concat(r),b&&"is-valid",m&&"is-invalid"),id:x||f}))}));H.displayName="FormSelect";var U=H,B=["bsPrefix","className","as","muted"],D=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,l=void 0===i?"small":i,o=e.muted,j=Object(s.a)(e,B);return a=Object(h.a)(a,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},j),{},{ref:t,className:n()(r,a,o&&"text-muted")}))}));D.displayName="FormText";var Q=D,W=o.forwardRef((function(e,t){return Object(d.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));W.displayName="Switch";var $=Object.assign(W,{Input:k.Input,Label:k.Label}),K=["bsPrefix","className","children","controlId","label"],X=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.children,l=e.controlId,o=e.label,j=Object(s.a)(e,K);return a=Object(h.a)(a,"form-floating"),Object(d.jsxs)(z,Object(c.a)(Object(c.a)({ref:t,className:n()(r,a),controlId:l},j),{},{children:[i,Object(d.jsx)("label",{htmlFor:l,children:o})]}))}));X.displayName="FloatingLabel";var Y=X,Z=["className","validated","as"],ee={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},te=o.forwardRef((function(e,t){var a=e.className,r=e.validated,i=e.as,l=void 0===i?"form":i,o=Object(s.a)(e,Z);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},o),{},{ref:t,className:n()(a,r&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:z,Control:F,Floating:R,Check:k,Switch:$,Label:E,Text:Q,Range:G,Select:U,FloatingLabel:Y})}}]);
//# sourceMappingURL=7.8bb4770e.chunk.js.map
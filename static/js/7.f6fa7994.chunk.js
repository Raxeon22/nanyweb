(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[7],{214:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(43),n=a(0),r=a(85),i=a(209),l=a(15),o=a(52),d=a(2),j=a(51),b=a(1);t.default=function(e){var t=Object(d.f)(),a=Object(n.useState)([]),O=Object(s.a)(a,2),m=(O[0],O[1],Object(n.useState)({address:"",city:"",country:"",postalCode:0})),u=Object(s.a)(m,2),h=u[0],p=u[1];return e.location.state||t.push("/shop"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{}),Object(b.jsx)("div",{className:"order-now",children:Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsxs)("div",{className:"stepper-wrapper",children:[Object(b.jsxs)("div",{className:"stepper-item completed ",children:[Object(b.jsx)("div",{className:"step-counter",children:"1"}),Object(b.jsx)("div",{className:"step-name",children:"step 1 "})]}),Object(b.jsxs)("div",{className:"stepper-item completed active",children:[Object(b.jsx)("div",{className:"step-counter",children:"2"}),Object(b.jsx)("div",{className:"step-name",children:"step 2"})]}),Object(b.jsxs)("div",{className:"stepper-item ",children:[Object(b.jsx)("div",{className:"step-counter",children:"3"}),Object(b.jsx)("div",{className:"step-name",children:"step 3"})]})]}),Object(b.jsxs)(r.a,{children:[Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"Address"}),Object(b.jsx)(r.a.Control,{type:"text",value:h.address,onChange:function(e){p(Object(c.a)(Object(c.a)({},h),{},{address:e.target.value}))},placeholder:"Address"})]}),Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"City"}),Object(b.jsx)(r.a.Control,{type:"text",value:h.city,onChange:function(e){p(Object(c.a)(Object(c.a)({},h),{},{city:e.target.value}))},placeholder:"City"})]}),Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"Country"}),Object(b.jsx)(r.a.Control,{type:"text",value:h.country,onChange:function(e){p(Object(c.a)(Object(c.a)({},h),{},{country:e.target.value}))},placeholder:"Country"})]}),Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"postal Code"}),Object(b.jsx)(r.a.Control,{type:"text",value:h.postalCode,onChange:function(e){p(Object(c.a)(Object(c.a)({},h),{},{postalCode:e.target.value}))},placeholder:"Postal code"})]})]}),Object(b.jsx)(l.b,{to:"/order/step1",children:Object(b.jsx)(i.a,{children:"previous"})}),Object(b.jsx)(l.b,{to:{pathname:"/order/step3",state:{order:Object.assign(e.location.state?e.location.state.order:"",h),product:e.location.state?e.location.state.product:""}},children:Object(b.jsx)(i.a,{className:"float-end",children:"next"})})]})}),Object(b.jsx)(j.a,{})]})}},44:function(e,t,a){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(59),s=a.n(c);t.a=s.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,a){"use strict";var c=a(7),s=a(46),n=a.n(s),r=a(47),i=a(43),l=a(0),o=a(48),d=a(53),j=a.n(d),b=(a(54),a(55),a(45)),O=a(44),m=a(15),u=a(221),h=a(208),p=a(67),x=a(42),f=a(1);t.a=function(e){var t=e.show,a={dots:!1,infinite:!0,speed:700,slidesToShow:t||4,slidesToScroll:1,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]},s=Object(l.useState)(!1),d=Object(i.a)(s,2),v=d[0],N=d[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/product",{});case 2:!0===(t=e.sent).data.success&&N(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(f.jsxs)("div",{className:"new-arrivals",children:[Object(f.jsxs)("h3",{children:[" ",e.heading," "]}),v?Object(f.jsx)(j.a,Object(c.a)(Object(c.a)({className:"react-slider"},a),{},{children:v.map((function(e){return Object(f.jsx)("div",{className:"each-slid",children:Object(f.jsxs)(u.a,{className:"each-card",children:[Object(f.jsx)(u.a.Img,{variant:"top"}),Object(f.jsx)(m.b,{to:"/shop/product/".concat(e._id),children:Object(f.jsx)("img",{src:O.a+e.image[0],alt:"",width:"100%",height:"280"})}),Object(f.jsx)(u.a.Body,{children:Object(f.jsx)(u.a.Title,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(p.a,{xs:"9",style:{textAlign:"left"},children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(p.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(e.color.map((function(e){return t.push(e.name)})),e.color=t,e.quantity=1,e.size=e.size[0][Object.keys(e.size[0])[0]],localStorage.getItem("order")&&localStorage.getItem("order").length){var a=JSON.parse(localStorage.getItem("order"));a.push(e),localStorage.setItem("order",JSON.stringify(a))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(o.c,{size:25,color:" white"})})})]})})})]})},e._id)}))})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.a,{animation:"border",variant:"dark"})})]})}},51:function(e,t,a){"use strict";a(0);var c=a(210),s=a(208),n=a(67),r=a(209),i=a(17),l=a(15),o=a(56),d=a(50),j=a.n(d),b=a(1);t.a=function(){return Object(b.jsx)(j.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Support"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"\xc0 propos de nous"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"\xc0 propos de nous"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Comment \xe7a fonctionne"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Prestations de service"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Jouer au magasin"})]})})]})]}),Object(b.jsx)(n.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},52:function(e,t,a){"use strict";var c=a(46),s=a.n(c),n=a(47),r=a(43),i=a(0),l=a(48),o=a(221),d=a(208),j=a(67),b=a(209),O=a(15),m=a(44),u=(a(23),a(1)),h=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)([]),n=Object(r.a)(s,2),h=n[0],p=n[1],x=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){p(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));var f=h?"400px":"auto";return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(u.jsx)(l.c,{size:30}),Object(u.jsx)("span",{className:"items d-none d-lg-block",children:h.length})," "]}),a?Object(u.jsxs)(o.a,{ref:x,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:f},children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)("h5",{children:["My Cart"," ",Object(u.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(u.jsxs)(o.a.Body,{className:"dropdown",children:[(h.length>0?h:[]).map((function(e){return Object(u.jsxs)(d.a,{className:"each-item",children:[Object(u.jsx)(j.a,{xs:"3",className:"cartdropdown",children:Object(u.jsx)("img",{src:m.a+e.image[0],height:"60",width:"60",alt:""})}),Object(u.jsxs)(j.a,{xs:"9",children:[Object(u.jsxs)("h6",{children:[" ",e.name," "]}),"price: ",e.price]})]})})),Object(u.jsx)(O.b,{onClick:function(){h.map((function(e,t){h[t].quantity=h[t].quantity>1?h[t].quantity:1,h[t].color=h[t].color[0]?h[t].color[0]:" "}))},to:{pathname:"/order/step1",state:{product:h}},children:Object(u.jsx)(b.a,{className:"mt-3",variant:"light",children:"CHECK OUT"})}),Object(u.jsx)(O.b,{to:"/cart",children:Object(u.jsx)(b.a,{className:"mt-1",variant:"light",children:"VIEW ALL CART"})})]})]}):null]})},p=a(60),x=a(210),f=a(205),v=a(17),N=a(50),g=a.n(N),y=a(58),w=a.n(y),k=a(45),S=a(49),C=g.a.Link,I=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),c=a[0],l=a[1],o=Object(i.useState)(!1),N=Object(r.a)(o,2),g=N[0],y=N[1],P=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),F=Object(r.a)(P,2),R=F[0],T=F[1],L=Object(i.useRef)(),z=Object(i.useRef)(),_=Object(i.useRef)(null),A=Object(i.useRef)(),E=function(){var e=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?T(t.data.data[0]):T([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){E();var e=function(){var e=Object(n.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.current&&!_.current.contains(t.target)&&(y(!1),A.current.classList.remove("shop"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),g&&A.current.classList.add("shop"),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"sticky",children:[Object(u.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(d.a,{className:"justify-content-center pt-2",children:[Object(u.jsx)(j.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(u.jsx)("img",{className:"",src:m.a+R.image,alt:"",height:"35",width:"35"})}),Object(u.jsx)(j.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(u.jsxs)("p",{className:" pt-2 ",children:[" ",R.text," "]})}),Object(u.jsx)(j.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(u.jsx)(O.b,{to:R.link,children:Object(u.jsx)(b.a,{className:"mt-1",children:R.button_text})})})]})})}),Object(u.jsx)("div",{className:"top-f-nav",children:Object(u.jsx)(f.a,{ref:z,className:"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:Object(u.jsx)("img",{src:v.a,width:"100%",height:"auto",alt:""})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){var e=L.current;c?(e.classList.remove("show"),l(!1)):(e.classList.add("show"),l(!0))},children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{ref:L,className:"collapse navbar-collapse justify-content-end ",id:"navbarSupportedContent",children:Object(u.jsx)("div",{className:"navbar-nav ",children:Object(u.jsxs)(w.a,{className:"scrollspy",items:["MAISON","SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(O.c,{to:"/",className:"nav-link ",children:"MAISON"})}),I.map((function(e,t){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(C,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},t.toString())})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(O.c,{to:"/shop",className:"nav-link ",ref:A,onMouseEnter:function(){e.shop&&y(!0)},children:[" ","Boutique"," ",e.shop?Object(u.jsxs)("span",{children:[" ",Object(u.jsx)(p.a,{size:20})," "]}):null," "]})}),Object(u.jsx)("li",{className:"nav-item pt-1 number ",children:Object(u.jsx)(h,{})})]})})})]})})})]}),g?Object(u.jsx)("div",{className:"product-cards animate__animated animate__fadeInUp animate__fast\t",ref:_,children:Object(u.jsx)(x.a,{children:Object(u.jsx)(S.a,{show:"3"})})}):null]})}},61:function(e,t,a){"use strict";var c=function(){};e.exports=c},85:function(e,t,a){"use strict";var c=a(7),s=a(13),n=a(14),r=a.n(n),i=a(9),l=a.n(i),o=a(0),d=a(1),j=["as","className","type","tooltip"],b={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},O=o.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,i=e.className,l=e.type,o=void 0===l?"valid":l,b=e.tooltip,O=void 0!==b&&b,m=Object(s.a)(e,j);return Object(d.jsx)(n,Object(c.a)(Object(c.a)({},m),{},{ref:t,className:r()(i,"".concat(o,"-").concat(O?"tooltip":"feedback"))}))}));O.displayName="Feedback",O.propTypes=b;var m=O,u=o.createContext({}),h=a(16),p=["id","bsPrefix","className","type","isValid","isInvalid","as"],x=o.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,i=e.className,l=e.type,j=void 0===l?"checkbox":l,b=e.isValid,O=void 0!==b&&b,m=e.isInvalid,x=void 0!==m&&m,f=e.as,v=void 0===f?"input":f,N=Object(s.a)(e,p),g=Object(o.useContext)(u).controlId;return n=Object(h.a)(n,"form-check-input"),Object(d.jsx)(v,Object(c.a)(Object(c.a)({},N),{},{ref:t,type:j,id:a||g,className:r()(i,n,O&&"is-valid",x&&"is-invalid")}))}));x.displayName="FormCheckInput";var f=x,v=["bsPrefix","className","htmlFor"],N=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.htmlFor,l=Object(s.a)(e,v),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:t,htmlFor:i||j,className:r()(n,a)}))}));N.displayName="FormCheckLabel";var g=N,y=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=o.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,i=e.bsSwitchPrefix,l=e.inline,j=void 0!==l&&l,b=e.disabled,O=void 0!==b&&b,p=e.isValid,x=void 0!==p&&p,v=e.isInvalid,N=void 0!==v&&v,w=e.feedbackTooltip,k=void 0!==w&&w,S=e.feedback,C=e.feedbackType,I=e.className,P=e.style,F=e.title,R=void 0===F?"":F,T=e.type,L=void 0===T?"checkbox":T,z=e.label,_=e.children,A=e.as,E=void 0===A?"input":A,V=Object(s.a)(e,y);n=Object(h.a)(n,"form-check"),i=Object(h.a)(i,"form-switch");var q=Object(o.useContext)(u).controlId,J=Object(o.useMemo)((function(){return{controlId:a||q}}),[q,a]),G=null!=z&&!1!==z&&!_,M=Object(d.jsx)(f,Object(c.a)(Object(c.a)({},V),{},{type:"switch"===L?"checkbox":L,ref:t,isValid:x,isInvalid:N,disabled:O,as:E}));return Object(d.jsx)(u.Provider,{value:J,children:Object(d.jsx)("div",{style:P,className:r()(I,z&&n,j&&"".concat(n,"-inline"),"switch"===L&&i),children:_||Object(d.jsxs)(d.Fragment,{children:[M,G&&Object(d.jsx)(g,{title:R,children:z}),S&&Object(d.jsx)(m,{type:C,tooltip:k,children:S})]})})})}));w.displayName="FormCheck";var k=Object.assign(w,{Input:f,Label:g}),S=a(18),C=(a(61),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=o.forwardRef((function(e,t){var a,n,i=e.bsPrefix,l=e.type,j=e.size,b=e.htmlSize,O=e.id,m=e.className,p=e.isValid,x=void 0!==p&&p,f=e.isInvalid,v=void 0!==f&&f,N=e.plaintext,g=e.readOnly,y=e.as,w=void 0===y?"input":y,k=Object(s.a)(e,C),I=Object(o.useContext)(u).controlId;(i=Object(h.a)(i,"form-control"),N)?a=Object(S.a)({},"".concat(i,"-plaintext"),!0):(n={},Object(S.a)(n,i,!0),Object(S.a)(n,"".concat(i,"-").concat(j),j),a=n);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},k),{},{type:l,size:b,ref:t,readOnly:g,id:O||I,className:r()(m,a,x&&"is-valid",v&&"is-invalid","color"===l&&"".concat(i,"-color"))}))}));I.displayName="FormControl";var P=Object.assign(I,{Feedback:m}),F=a(62),R=Object(F.a)("form-floating"),T=["controlId","as"],L=o.forwardRef((function(e,t){var a=e.controlId,n=e.as,r=void 0===n?"div":n,i=Object(s.a)(e,T),l=Object(o.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(u.Provider,{value:l,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},i),{},{ref:t}))})}));L.displayName="FormGroup";var z=L,_=a(67),A=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],E=o.forwardRef((function(e,t){var a=e.as,n=void 0===a?"label":a,i=e.bsPrefix,l=e.column,j=e.visuallyHidden,b=e.className,O=e.htmlFor,m=Object(s.a)(e,A),p=Object(o.useContext)(u).controlId;i=Object(h.a)(i,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var f=r()(b,i,j&&"visually-hidden",l&&x);return O=O||p,l?Object(d.jsx)(_.a,Object(c.a)({ref:t,as:"label",className:f,htmlFor:O},m)):Object(d.jsx)(n,Object(c.a)({ref:t,className:f,htmlFor:O},m))}));E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};var V=E,q=["bsPrefix","className","id"],J=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.id,l=Object(s.a)(e,q),j=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:t,className:r()(n,a),id:i||j}))}));J.displayName="FormRange";var G=J,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,i=e.htmlSize,l=e.className,j=e.isValid,b=void 0!==j&&j,O=e.isInvalid,m=void 0!==O&&O,p=e.id,x=Object(s.a)(e,M),f=Object(o.useContext)(u).controlId;return a=Object(h.a)(a,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},x),{},{size:i,ref:t,className:r()(l,a,n&&"".concat(a,"-").concat(n),b&&"is-valid",m&&"is-invalid"),id:p||f}))}));U.displayName="FormSelect";var H=U,B=["bsPrefix","className","as","muted"],D=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,l=void 0===i?"small":i,o=e.muted,j=Object(s.a)(e,B);return a=Object(h.a)(a,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},j),{},{ref:t,className:r()(n,a,o&&"text-muted")}))}));D.displayName="FormText";var K=D,Q=o.forwardRef((function(e,t){return Object(d.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));Q.displayName="Switch";var W=Object.assign(Q,{Input:k.Input,Label:k.Label}),$=["bsPrefix","className","children","controlId","label"],X=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.children,l=e.controlId,o=e.label,j=Object(s.a)(e,$);return a=Object(h.a)(a,"form-floating"),Object(d.jsxs)(z,Object(c.a)(Object(c.a)({ref:t,className:r()(n,a),controlId:l},j),{},{children:[i,Object(d.jsx)("label",{htmlFor:l,children:o})]}))}));X.displayName="FloatingLabel";var Y=X,Z=["className","validated","as"],ee={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},te=o.forwardRef((function(e,t){var a=e.className,n=e.validated,i=e.as,l=void 0===i?"form":i,o=Object(s.a)(e,Z);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},o),{},{ref:t,className:r()(a,n&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:z,Control:P,Floating:R,Check:k,Switch:W,Label:V,Text:K,Range:G,Select:H,FloatingLabel:Y})}}]);
//# sourceMappingURL=7.f6fa7994.chunk.js.map
(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[14],{220:function(e,t,c){"use strict";c.r(t);c(0);var s=c(16),a=c(50),n=c(217),r=c(49),i=c(1);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.a,{header:!0,shop:!0}),Object(i.jsxs)("div",{className:"thank-you my-5 mx-2",children:[Object(i.jsxs)("h2",{children:["LA PAGE QUE VOUS CHERCHEZ EST INTROUVABLE ",Object(i.jsx)("b",{children:":("})]}),Object(i.jsx)(s.b,{to:"/",children:Object(i.jsx)(n.a,{variant:"light",children:"Back Home "})})]}),Object(i.jsx)(r.a,{})]})}},44:function(e,t,c){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,c){"use strict";var s=c(55),a=c.n(s);t.a=a.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,c){"use strict";c(0);var s=c(218),a=c(216),n=c(70),r=c(217),i=c(17),l=c(16),j=c(52),o=c(48),d=c.n(o),h=c(1);t.a=function(){return Object(h.jsx)(d.a.Element,{id:"footer",children:Object(h.jsx)("footer",{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(a.a,{children:[Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(h.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("h6",{children:"Pages"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("h6",{children:"Liens rapides"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(h.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(h.jsxs)(a.a,{children:[Object(h.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(h.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(h.jsx)(j.a,{size:22}),Object(h.jsx)("span",{children:"Apple Store"})]})}),Object(h.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(h.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(h.jsx)(j.c,{size:22}),Object(h.jsx)("span",{children:"Play Store"})]})})]})]}),Object(h.jsx)(n.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,c){"use strict";var s=c(46),a=c.n(s),n=c(47),r=c(43),i=c(0),l=c(51),j=c(230),o=c(216),d=c(70),h=c(217),b=c(16),x=c(44),u=(c(23),c(1)),O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),O=n[0],m=n[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){m(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("span",{onClick:function(){return s((function(e){return!e}))},children:[" ",Object(u.jsx)(l.c,{size:30}),Object(u.jsx)("span",{className:"items",children:O.length})," "]}),c?Object(u.jsxs)(j.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(u.jsx)(j.a.Header,{children:Object(u.jsxs)("h5",{children:["Mon Chariot"," ",Object(u.jsx)("span",{onClick:function(){return s((function(e){return!e}))},children:" \xd7"})]})}),Object(u.jsx)(j.a.Body,{className:"dropdown",children:O.length>0?Object(u.jsxs)(u.Fragment,{children:[O.map((function(e){return Object(u.jsxs)(o.a,{className:"each-item",children:[Object(u.jsx)(d.a,{xs:"3",className:"cartdropdown",children:Object(u.jsx)("img",{src:x.a+e.image[0],height:"60",width:"60",alt:""})}),Object(u.jsxs)(d.a,{xs:"9",children:[Object(u.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(u.jsx)(b.b,{to:"/cart",children:Object(u.jsx)(h.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(u.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},m=c(218),p=c(227),f=c(212),g=c(17),N=c(48),v=c.n(N),k=c(54),y=c.n(k),w=c(45),C=v.a.Link,A=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),s=c[0],l=c[1],j=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),N=Object(r.a)(j,2),v=N[0],k=N[1],E=Object(i.useRef)(null),S=Object(i.useRef)(),R=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?k(t.data.data[0]):k([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){R();var e=function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.current&&!E.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),s&&S.current.classList.add("shop"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"sticky",children:[Object(u.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(u.jsx)(m.a,{children:Object(u.jsxs)(o.a,{className:"justify-content-center pt-2",children:[Object(u.jsx)(d.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(u.jsx)("img",{className:"",src:x.a+v.image,alt:"",height:"35",width:"35"})}),Object(u.jsx)(d.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(u.jsxs)("p",{className:" pt-2 ",children:[" ",v.text," "]})}),Object(u.jsx)(d.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(u.jsx)(b.b,{to:v.link,children:Object(u.jsx)(h.a,{className:"my-1",children:v.button_text})})})]})})}),Object(u.jsx)("div",{className:"top-f-nav",children:Object(u.jsx)(p.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(p.a.Brand,{href:"#",children:Object(u.jsx)("img",{src:g.a,width:"100%",height:"80",alt:""})}),Object(u.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(u.jsx)(O,{})}),Object(u.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(p.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(u.jsx)(f.a,{className:"",children:Object(u.jsxs)(y.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.c,{to:"/",className:"nav-link ",children:"Accueil"})}),A.map((function(e,t){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(C,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(b.c,{to:"/shop",className:"nav-link ",ref:S,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(u.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(u.jsx)(O,{})})]})})})]})})})]})})}}}]);
//# sourceMappingURL=14.3b0cb130.chunk.js.map
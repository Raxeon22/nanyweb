(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[12],{226:function(e,t,c){"use strict";c.r(t);var s=c(46),n=c.n(s),a=c(47),r=c(43),i=c(0),l=c(218),j=c(216),d=c(71),o=c(217),b=c(50),h=c(16),x=c(44),O=c(49),m=c(1);t.default=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],u=Object(i.useState)([]),p=Object(r.a)(u,2),f=p[0],g=(p[1],0);Object(i.useEffect)((function(){var e=function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,JSON.parse(localStorage.getItem("order"));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(){var e=Object(a.a)(n.a.mark((function e(t,c){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.splice(c,1),localStorage.setItem("order",JSON.stringify(t)),e.t0=s,e.next=5,JSON.parse(localStorage.getItem("order"));case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{shop:!0,Homelink:"home"}),Object(m.jsx)(l.a,{children:Object(m.jsxs)("div",{className:"shopping-cart",children:[Object(m.jsx)("h1",{children:"Caddie"}),Object(m.jsx)("div",{className:"d-none d-lg-block",children:Object(m.jsxs)(j.a,{className:"items-heading ",children:[Object(m.jsx)(d.a,{lg:"3",md:"3",children:Object(m.jsx)("p",{children:"Image"})}),Object(m.jsx)(d.a,{lg:"5",md:"5",children:Object(m.jsx)("p",{children:"Nom du produit"})}),Object(m.jsx)(d.a,{lg:"1",md:"1",children:Object(m.jsx)("p",{children:"Prix \u200b\u200bunitaire"})}),Object(m.jsx)(d.a,{lg:"1",md:"1",children:Object(m.jsx)("p",{children:"qualit\xe9"})}),Object(m.jsx)(d.a,{lg:"1",md:"1",children:Object(m.jsx)("p",{children:"total"})}),Object(m.jsx)(d.a,{lg:"1",md:"1",children:Object(m.jsx)("p",{children:"Action"})})]})}),Object(m.jsx)("hr",{}),(c?c.length:[].length)>0?c.map((function(e,t){return g+=e.price*e.quantity,f[t]=e.quantity,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(j.a,{className:"each-item",children:[Object(m.jsx)(d.a,{lg:"3",md:"3",xs:"6",children:Object(m.jsx)("img",{src:x.a+e.image[0],alt:""})}),Object(m.jsx)(d.a,{lg:"1",md:"3",xs:"6",className:"mt-2 d-block d-lg-none",children:Object(m.jsx)("span",{onClick:function(){N(c,t)},children:"\xd7"})}),Object(m.jsxs)(d.a,{lg:"5",md:"6",xs:"12",children:[Object(m.jsx)("small",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsxs)("small",{children:["couleur: ",e.color.map((function(e){return"".concat(e,", ")}))]}),Object(m.jsx)("br",{}),Object(m.jsxs)("small",{children:["size: ",e.size.map((function(e){return"".concat(e,", ")}))]}),Object(m.jsx)("br",{}),Object(m.jsxs)("small",{className:"d-block d-lg-none",children:["le prix: ",e.price]}),Object(m.jsxs)("small",{className:"d-block d-lg-none",children:["qualit\xe9: ",f[t]]}),Object(m.jsxs)("small",{className:"d-block d-lg-none",children:["total: ",f[t]?e.price*f[t]:e.price]}),Object(m.jsx)("br",{})]}),Object(m.jsxs)(d.a,{lg:"1",md:"3",className:"d-none d-lg-block",children:[" ",Object(m.jsx)("p",{children:e.price})]}),Object(m.jsx)(d.a,{lg:"1",md:"3",className:"d-none d-lg-block",children:Object(m.jsx)("div",{className:"quantity d-flex",children:Object(m.jsxs)("p",{className:"",children:[" ",f[t]," "]})})}),Object(m.jsxs)(d.a,{lg:"1",md:"3",xs:"4",className:"d-none d-lg-block",children:[" ",Object(m.jsx)("p",{children:f[t]?e.price*f[t]:e.price})," "]}),Object(m.jsx)(d.a,{lg:"1",md:"3",xs:"1",className:"mt-4 d-none d-lg-block",children:Object(m.jsx)("span",{onClick:function(){N(c,t)},children:"\xd7"})})]}),Object(m.jsx)("hr",{})]})})):Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"Aucun article dans le panier"})}),Object(m.jsx)(j.a,{className:"justify-content-end text-center subtotal",children:Object(m.jsxs)(d.a,{lg:"3",children:[Object(m.jsxs)("h4",{children:["Subtotal: $"," ",g]}),Object(m.jsx)(h.b,{to:{pathname:"/order/step1",state:{product:c,total:g}},children:Object(m.jsx)(o.a,{variant:"dark",className:"w-100",children:"V\xe9rifier"})})]})})]})}),Object(m.jsx)(O.a,{})]})}},44:function(e,t,c){"use strict";t.a="https://nanybackendforadmin.herokuapp.com/image/"},45:function(e,t,c){"use strict";var s=c(55),n=c.n(s);t.a=n.a.create({baseURL:"https://nanybackendforadmin.herokuapp.com"})},49:function(e,t,c){"use strict";c(0);var s=c(218),n=c(216),a=c(71),r=c(217),i=c(17),l=c(16),j=c(52),d=c(48),o=c.n(d),b=c(1);t.a=function(){return Object(b.jsx)(o.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsxs)(a.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(a.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Pages"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(a.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Liens rapides"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(b.jsxs)(a.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(n.a,{children:[Object(b.jsx)(a.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(j.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(a.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(j.c,{size:22}),Object(b.jsx)("span",{children:"Play Store"})]})})]})]}),Object(b.jsx)(a.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,c){"use strict";var s=c(46),n=c.n(s),a=c(47),r=c(43),i=c(0),l=c(51),j=c(230),d=c(216),o=c(71),b=c(217),h=c(16),x=c(44),O=(c(23),c(1)),m=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),m=a[0],u=a[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){u(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(O.jsxs)("div",{className:"cart",children:[Object(O.jsxs)("span",{onClick:function(){return s((function(e){return!e}))},children:[" ",Object(O.jsx)(l.c,{size:30}),Object(O.jsx)("span",{className:"items",children:m.length})," "]}),c?Object(O.jsxs)(j.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(O.jsx)(j.a.Header,{children:Object(O.jsxs)("h5",{children:["Mon Chariot"," ",Object(O.jsx)("span",{onClick:function(){return s((function(e){return!e}))},children:" \xd7"})]})}),Object(O.jsx)(j.a.Body,{className:"dropdown",children:m.length>0?Object(O.jsxs)(O.Fragment,{children:[m.map((function(e){return Object(O.jsxs)(d.a,{className:"each-item",children:[Object(O.jsx)(o.a,{xs:"3",className:"cartdropdown",children:Object(O.jsx)("img",{src:x.a+e.image[0],height:"60",width:"60",alt:""})}),Object(O.jsxs)(o.a,{xs:"9",children:[Object(O.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(O.jsx)(h.b,{to:"/cart",children:Object(O.jsx)(b.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(O.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},u=c(218),p=c(227),f=c(212),g=c(17),N=c(48),v=c.n(N),k=c(54),y=c.n(k),w=c(45),S=v.a.Link,C=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),s=c[0],l=c[1],j=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),N=Object(r.a)(j,2),v=N[0],k=N[1],I=Object(i.useRef)(null),A=Object(i.useRef)(),q=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?k(t.data.data[0]):k([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){q();var e=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.current&&!I.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),s&&A.current.classList.add("shop"),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"sticky",children:[Object(O.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(d.a,{className:"justify-content-center pt-2",children:[Object(O.jsx)(o.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(O.jsx)("img",{className:"",src:x.a+v.image,alt:"",height:"35",width:"35"})}),Object(O.jsx)(o.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(O.jsxs)("p",{className:" pt-2 ",children:[" ",v.text," "]})}),Object(O.jsx)(o.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(O.jsx)(h.b,{to:v.link,children:Object(O.jsx)(b.a,{className:"my-1",children:v.button_text})})})]})})}),Object(O.jsx)("div",{className:"top-f-nav",children:Object(O.jsx)(p.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p.a.Brand,{href:"#",children:Object(O.jsx)("img",{src:g.a,width:"100%",height:"80",alt:""})}),Object(O.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(O.jsx)(m,{})}),Object(O.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(p.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(O.jsx)(f.a,{className:"",children:Object(O.jsxs)(y.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.c,{to:"/",className:"nav-link ",children:"Accueil"})}),C.map((function(e,t){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(S,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(h.c,{to:"/shop",className:"nav-link ",ref:A,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(O.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(O.jsx)(m,{})})]})})})]})})})]})})}}}]);
//# sourceMappingURL=12.33d897c9.chunk.js.map
(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[12],{231:function(e,t,a){"use strict";a.r(t);var c=a(46),s=a.n(c),n=a(47),r=a(43),i=a(0),l=a(50),j=a(218),o=a(216),d=a(70),h=a(230),b=a(42),u=a(16),x=a(51),O=(a(23),a(66)),m=a(45),p=a(44),f=a(1),g=function(e){for(var t=e.dataPerPage,a=e.totalPages,c=e.Paginate,s=[],n=1;n<=Math.ceil(a/t);n++)s.push(n);var l=Object(i.useState)(1),j=Object(r.a)(l,2),o=j[0],d=j[1];return console.log(o),Object(f.jsxs)("nav",{className:"pagination-custom","aria-label":"Pagination",children:[Object(f.jsx)("li",{className:"",children:Object(f.jsx)("span",{className:"sr-only ",children:"Prev"})}),s.map((function(e){return Object(f.jsx)("li",{style:{listStyle:"none"},onClick:function(){c(e),d(e)},className:"each-number",children:e})})),Object(f.jsx)("li",{className:"",children:Object(f.jsx)("span",{className:"sr-only",children:"Next"})})]})},v=a(49);t.default=function(e){var t=Object(i.useState)(""),a=Object(r.a)(t,2),c=a[0],N=a[1],y=Object(i.useState)([]),S=Object(r.a)(y,2),k=S[0],w=S[1],I=Object(i.useState)([]),_=Object(r.a)(I,2),P=_[0],C=_[1];function T(){return(T=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/category",{});case 2:!0===(t=e.sent).data.success?w(t.data.data):w([]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return A.apply(this,arguments)}function A(){return(A=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/product?category="+t,{});case 2:if(!0!==(a=e.sent).data.success){e.next=8;break}return e.next=6,C(a.data.data);case 6:e.next=8;break;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/product",{});case 2:if(!0!==(t=e.sent).data.success){e.next=8;break}return e.next=6,C(t.data.data);case 6:e.next=8;break;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){T.apply(this,arguments)}(),function(){R.apply(this,arguments)}(),e.location.state&&(E(e.location.state.item._id),N(e.location.state.item.heading))}),[]);var z=Object(i.useState)(1),J=Object(r.a)(z,2),L=J[0],q=J[1],U=Object(i.useState)(3),B=Object(r.a)(U,2),F=B[0],V=B[1],D=L*F,M=D-F,H=P.slice(M,D),$=P.length;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{}),Object(f.jsx)("div",{className:" products new-arrivals animate__animated animate__fadeInUp animate__fast",children:Object(f.jsx)(j.a,{fluid:!0,children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(d.a,{md:"6",lg:"3",xs:"12",className:"text-right mb-4",children:Object(f.jsxs)("div",{className:"filter-by",children:[Object(f.jsx)("h6",{children:"Filtrer les R\xe9sultats par"}),k.map((function(e,t){return Object(f.jsx)(u.b,{to:"/shop",onClick:function(){N(e.heading),E(e.heading)},children:Object(f.jsxs)("p",{children:[" ",e.heading," "]})},e._id)}))]})}),Object(f.jsxs)(d.a,{md:"12",xs:"12",lg:"9",className:"shop-cards",children:[Object(f.jsx)("h1",{className:"heading",children:c}),Object(f.jsx)(o.a,{children:H?H.map((function(e,t){return Object(f.jsx)(d.a,{xs:"12",md:"6",lg:"4",sm:"6",children:Object(f.jsxs)(h.a,{className:"each-card",children:[Object(f.jsx)(h.a.Img,{variant:"top"}),Object(f.jsx)(u.b,{to:{pathname:"/shop/product/".concat(e._id)},children:Object(f.jsx)("img",{src:p.a+e.image[0],width:"100%",height:"280",alt:"products"})}),Object(f.jsx)(h.a.Body,{children:Object(f.jsx)(h.a.Title,{children:Object(f.jsxs)(o.a,{children:[Object(f.jsxs)(d.a,{xs:"9",children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(d.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(t.push(e.color[0].name),e.color=t,e.quantity=1,e.size=e.size[0].length[0],localStorage.getItem("order")&&localStorage.getItem("order").length){var a=JSON.parse(localStorage.getItem("order"));a.push(e),localStorage.setItem("order",JSON.stringify(a))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(x.c,{size:25,color:" white"})})})]})})})]})},e._id)})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(b.a,{animation:"border",variant:"dark"})})}),Object(f.jsx)(g,{dataPerPage:F,totalPages:$,currentData:H,Paginate:function(e){q(e)},setDataPerPage:V})]})]})})}),Object(f.jsx)(O.a,{heading:"NOUVELLES ARRIV\xc9ES"}),Object(f.jsx)(v.a,{})]})}},44:function(e,t,a){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(55),s=a.n(c);t.a=s.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,a){"use strict";a(0);var c=a(218),s=a(216),n=a(70),r=a(217),i=a(17),l=a(16),j=a(52),o=a(48),d=a.n(o),h=a(1);t.a=function(){return Object(h.jsx)(d.a.Element,{id:"footer",children:Object(h.jsx)("footer",{children:Object(h.jsx)(c.a,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(h.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("h6",{children:"Pages"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(h.jsx)("h6",{children:"Liens rapides"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(h.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(h.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(h.jsxs)(s.a,{children:[Object(h.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(h.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(h.jsx)(j.a,{size:22}),Object(h.jsx)("span",{children:"Apple Store"})]})}),Object(h.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(h.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(h.jsx)(j.c,{size:22}),Object(h.jsx)("span",{children:"Play Store"})]})})]})]}),Object(h.jsx)(n.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,a){"use strict";var c=a(46),s=a.n(c),n=a(47),r=a(43),i=a(0),l=a(51),j=a(230),o=a(216),d=a(70),h=a(217),b=a(16),u=a(44),x=(a(23),a(1)),O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)([]),n=Object(r.a)(s,2),O=n[0],m=n[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){m(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(x.jsxs)("div",{className:"cart",children:[Object(x.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(x.jsx)(l.c,{size:30}),Object(x.jsx)("span",{className:"items",children:O.length})," "]}),a?Object(x.jsxs)(j.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(x.jsx)(j.a.Header,{children:Object(x.jsxs)("h5",{children:["Mon Chariot"," ",Object(x.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(x.jsx)(j.a.Body,{className:"dropdown",children:O.length>0?Object(x.jsxs)(x.Fragment,{children:[O.map((function(e){return Object(x.jsxs)(o.a,{className:"each-item",children:[Object(x.jsx)(d.a,{xs:"3",className:"cartdropdown",children:Object(x.jsx)("img",{src:u.a+e.image[0],height:"60",width:"60",alt:""})}),Object(x.jsxs)(d.a,{xs:"9",children:[Object(x.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(x.jsx)(b.b,{to:"/cart",children:Object(x.jsx)(h.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(x.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},m=a(218),p=a(227),f=a(212),g=a(17),v=a(48),N=a.n(v),y=a(54),S=a.n(y),k=a(45),w=N.a.Link,I=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),c=a[0],l=a[1],j=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),v=Object(r.a)(j,2),N=v[0],y=v[1],_=Object(i.useRef)(null),P=Object(i.useRef)(),C=function(){var e=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?y(t.data.data[0]):y([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){C();var e=function(){var e=Object(n.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.current&&!_.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),c&&P.current.classList.add("shop"),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"sticky",children:[Object(x.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(o.a,{className:"justify-content-center pt-2",children:[Object(x.jsx)(d.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(x.jsx)("img",{className:"",src:u.a+N.image,alt:"",height:"35",width:"35"})}),Object(x.jsx)(d.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(x.jsxs)("p",{className:" pt-2 ",children:[" ",N.text," "]})}),Object(x.jsx)(d.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(x.jsx)(b.b,{to:N.link,children:Object(x.jsx)(h.a,{className:"my-1",children:N.button_text})})})]})})}),Object(x.jsx)("div",{className:"top-f-nav",children:Object(x.jsx)(p.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(p.a.Brand,{href:"#",children:Object(x.jsx)("img",{src:g.a,width:"100%",height:"80",alt:""})}),Object(x.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(x.jsx)(O,{})}),Object(x.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(p.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(x.jsx)(f.a,{className:"",children:Object(x.jsxs)(S.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(b.c,{to:"/",className:"nav-link ",children:"Accueil"})}),I.map((function(e,t){return Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(w,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(b.c,{to:"/shop",className:"nav-link ",ref:P,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(x.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(x.jsx)(O,{})})]})})})]})})})]})})}},66:function(e,t,a){"use strict";var c=a(7),s=a(46),n=a.n(s),r=a(47),i=a(43),l=a(0),j=a(51),o=a(60),d=a.n(o),h=(a(61),a(62),a(45)),b=a(44),u=a(16),x=a(230),O=a(216),m=a(70),p=a(42),f=a(1);t.a=function(e){var t=e.show,a={dots:!1,infinite:!0,speed:700,slidesToShow:t||4,slidesToScroll:1,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]},s=Object(l.useState)(!1),o=Object(i.a)(s,2),g=o[0],v=o[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/product",{});case 2:!0===(t=e.sent).data.success&&v(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(f.jsxs)("div",{className:"new-arrivals",children:[Object(f.jsxs)("h3",{children:[" ",e.heading," "]}),g?Object(f.jsx)(d.a,Object(c.a)(Object(c.a)({className:"react-slider"},a),{},{children:g.map((function(e){return Object(f.jsx)("div",{className:"each-slid",children:Object(f.jsxs)(x.a,{className:"each-card",children:[Object(f.jsx)(x.a.Img,{variant:"top"}),Object(f.jsx)(u.b,{to:"/shop/product/".concat(e._id),children:Object(f.jsx)("img",{src:b.a+e.image[0],alt:"",width:"100%",height:"280"})}),Object(f.jsx)(x.a.Body,{children:Object(f.jsx)(x.a.Title,{children:Object(f.jsxs)(O.a,{children:[Object(f.jsxs)(m.a,{xs:"9",style:{textAlign:"left"},children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(m.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(t.push(e.color[0].name),e.color=t,e.quantity=1,e.size=e.size[0].length[0],localStorage.getItem("order")&&localStorage.getItem("order").length){var a=JSON.parse(localStorage.getItem("order"));a.push(e),localStorage.setItem("order",JSON.stringify(a))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(j.c,{size:25,color:" white"})})})]})})})]})},e._id)}))})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(p.a,{animation:"border",variant:"dark"})})]})}}}]);
//# sourceMappingURL=12.e67316d8.chunk.js.map
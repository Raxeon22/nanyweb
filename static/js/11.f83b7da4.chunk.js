(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[11],{232:function(e,t,c){"use strict";c.r(t);var s=c(94),a=c(46),n=c.n(a),r=c(47),i=c(43),l=c(0),o=c(50),j=c(49),d=c(51),b=c(16),h=c(129),u=c(45),O=c(218),x=c(216),m=c(70),p=c(217),f=c(219),g=c(234),v=c(42),N=c(7),k=c(60),y=c.n(k),S=(c(61),c(62),c(44)),w=c(2),T=c(1),C=function(){var e=Object(w.g)().id,t=Object(l.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1];Object(l.useEffect)((function(){var t=function(){var t=Object(r.a)(n.a.mark((function t(){var c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("/product?_id=".concat(e));case 3:c=t.sent,s=c.data,a(s.data[0].image),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}));var o={customPaging:function(e){return Object(T.jsx)("button",{children:Object(T.jsx)("img",{alt:"products",src:S.a+s[e]})})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplaySpeed:2e3,cssEase:"linear",autoPlay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(T.jsx)("div",{className:"indiv-showcase",children:Object(T.jsx)(y.a,Object(N.a)(Object(N.a)({className:"react-slider"},o),{},{children:s.map((function(e){return Object(T.jsx)("div",{className:"each-slid overflow-hidden",children:Object(T.jsx)("img",{src:S.a+e,width:"100%",height:"400",alt:"",className:"p-1"})})}))}))})},I=c(66),_=c(52);t.default=function(e){var t=Object(l.useState)(!1),c=Object(i.a)(t,2),a=c[0],N=c[1],k=Object(l.useState)(1),y=Object(i.a)(k,2),S=y[0],A=y[1],E=Object(l.useState)([]),q=Object(i.a)(E,2),z=q[0],R=q[1],J=Object(l.useState)(1),P=Object(i.a)(J,2),L=P[0],B=P[1],U=Object(l.useState)([]),F=Object(i.a)(U,2),K=F[0],Q=F[1],D=Object(w.g)().id;Object(l.useEffect)((function(){var e=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/product?_id=".concat(D));case 3:t=e.sent,c=t.data,N(c.data),B(c.data[0].quantity),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()})),S<1?(alert("quantity cannot be in minus"),A(1)):S>L&&alert("Quantity Exceed");return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(o.a,{header:!1,shop:!1}),a?a.map((function(e,t){return Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(x.a,{className:"indiv-product",children:[Object(T.jsx)(m.a,{xs:"12",lg:"5",md:"6",children:Object(T.jsx)(C,{images:e.image})}),Object(T.jsxs)(m.a,{xs:"12",lg:"7",md:"6",className:"product-about",children:[Object(T.jsx)("h4",{className:"product-name",children:e.name}),Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("span",{className:"product_key mt-2",children:"price:"}),Object(T.jsxs)("h3",{children:[e.price,Object(T.jsx)("small",{children:"$"})," "]})]}),Object(T.jsxs)("div",{className:"color d-flex",children:[Object(T.jsx)("span",{className:"product_key mt-1",children:" colors: "}),e.color.map((function(e){return Object(T.jsx)("div",{className:"form-check",children:Object(T.jsx)("input",{style:{backgroundColor:e.code},custom:!0,id:"checkbox".concat(e),checked:e._color,onChange:function(t){return function(e,t){e.target.checked?Q([].concat(Object(s.a)(K),[t])):Q(K.filter((function(e){return e!==t})))}(t,e.name)},className:"form-check-input",type:"checkbox",value:e.name})},e.code)}))]}),e.size.map((function(e,t){return Object(T.jsxs)("div",{className:"d-flex mt-2 size",children:[Object(T.jsxs)("span",{className:"product_key mt-2",children:[Object.keys(e)[t],":"]}),Object.values(e)[t].map((function(t,c){return Object(T.jsxs)("div",{className:"form-check",children:[Object(T.jsx)("input",{className:"form-check-input",type:"checkbox",custom:!0,id:"checkbox".concat(e),checked:t._size,onChange:function(e){return function(e,t){e.target.checked?R([].concat(Object(s.a)(z),[t])):R(z.filter((function(e){return e!==t})))}(e,t)}}),Object(T.jsxs)("label",{children:[t," "]})]})}))]})})),Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:"quantity d-flex",children:[Object(T.jsx)("span",{className:"product_key mt-2",children:"Quantity:"}),Object(T.jsx)("i",{onClick:function(){A(S+1),console.log(S)},children:Object(T.jsx)(d.b,{})}),Object(T.jsxs)("p",{className:"p-2",children:[" ",S," "]}),Object(T.jsx)("i",{onClick:function(){return A(S-1)},children:Object(T.jsx)(d.a,{})})]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:"d-flex",children:[0!==K.length&&0!==z.length?Object(T.jsx)(b.b,{to:{pathname:"/order/step1",state:{product:[a[0]]}},children:Object(T.jsxs)(p.a,{onClick:function(){a[0].quantity=S,a[0].color=K,a[0].size=z},children:[" ",Object(T.jsx)(_.f,{className:"m-1"})," Order Now"]})}):Object(T.jsxs)(p.a,{disabled:!0,children:[Object(T.jsx)(_.f,{className:"m-1"})," Order Now "]}),Object(T.jsxs)(p.a,{disabled:0===K.length||0===z.length,className:"mx-3",onClick:function(){if(a[0].quantity=S,a[0].color=K,a[0].size=z,localStorage.getItem("order")){var e=JSON.parse(localStorage.getItem("order"));e.push(a[0]),localStorage.setItem("order",JSON.stringify(e))}else localStorage.setItem("order",JSON.stringify(a))},children:[Object(T.jsx)(h.c,{className:"m-1"})," Add to cart"]})]})]})]}),Object(T.jsx)("div",{className:"product-details",children:Object(T.jsxs)(f.a,{defaultActiveKey:"description",children:[Object(T.jsx)(g.a,{eventKey:"description",title:"Description",children:Object(T.jsx)("p",{children:a[0].description})}),Object(T.jsx)(g.a,{eventKey:"policy",title:"Return Policy",children:Object(T.jsx)("p",{children:"return policy"})})]})})]})})):Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)(v.a,{animation:"border",variant:"dark"})}),Object(T.jsx)(I.a,{heading:"related products"}),Object(T.jsx)(j.a,{})]})}},44:function(e,t,c){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,c){"use strict";var s=c(55),a=c.n(s);t.a=a.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,c){"use strict";c(0);var s=c(218),a=c(216),n=c(70),r=c(217),i=c(17),l=c(16),o=c(52),j=c(48),d=c.n(j),b=c(1);t.a=function(){return Object(b.jsx)(d.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Pages"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Liens rapides"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/shop",children:"Boutique"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/cart",children:"Chariot"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:" Accueil"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Play Store"})]})})]})]}),Object(b.jsx)(n.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},50:function(e,t,c){"use strict";var s=c(46),a=c.n(s),n=c(47),r=c(43),i=c(0),l=c(51),o=c(230),j=c(216),d=c(70),b=c(217),h=c(16),u=c(44),O=(c(23),c(1)),x=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),x=n[0],m=n[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){m(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));return Object(O.jsxs)("div",{className:"cart",children:[Object(O.jsxs)("span",{onClick:function(){return s((function(e){return!e}))},children:[" ",Object(O.jsx)(l.c,{size:30}),Object(O.jsx)("span",{className:"items",children:x.length})," "]}),c?Object(O.jsxs)(o.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:"320px"},children:[Object(O.jsx)(o.a.Header,{children:Object(O.jsxs)("h5",{children:["Mon Chariot"," ",Object(O.jsx)("span",{onClick:function(){return s((function(e){return!e}))},children:" \xd7"})]})}),Object(O.jsx)(o.a.Body,{className:"dropdown",children:x.length>0?Object(O.jsxs)(O.Fragment,{children:[x.map((function(e){return Object(O.jsxs)(j.a,{className:"each-item",children:[Object(O.jsx)(d.a,{xs:"3",className:"cartdropdown",children:Object(O.jsx)("img",{src:u.a+e.image[0],height:"60",width:"60",alt:""})}),Object(O.jsxs)(d.a,{xs:"9",children:[Object(O.jsxs)("h6",{children:[" ",e.name," "]}),"le prix: ",e.price]})]})})),Object(O.jsx)(h.b,{to:"/cart",children:Object(O.jsx)(b.a,{className:"mt-1",variant:"light",children:"VOIR TOUT LE CHARIOT"})})]}):Object(O.jsx)("i",{children:"Pas encore de panier ajout\xe9"})})]}):null]})},m=c(218),p=c(227),f=c(212),g=c(17),v=c(48),N=c.n(v),k=c(54),y=c.n(k),S=c(45),w=N.a.Link,T=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),s=c[0],l=c[1],o=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),v=Object(r.a)(o,2),N=v[0],k=v[1],C=Object(i.useRef)(null),I=Object(i.useRef)(),_=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?k(t.data.data[0]):k([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){_();var e=function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.current&&!C.current.contains(t.target)&&l(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),s&&I.current.classList.add("shop"),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"sticky",children:[Object(O.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(j.a,{className:"justify-content-center pt-2",children:[Object(O.jsx)(d.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(O.jsx)("img",{className:"",src:u.a+N.image,alt:"",height:"35",width:"35"})}),Object(O.jsx)(d.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(O.jsxs)("p",{className:" pt-2 ",children:[" ",N.text," "]})}),Object(O.jsx)(d.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(O.jsx)(h.b,{to:N.link,children:Object(O.jsx)(b.a,{className:"my-1",children:N.button_text})})})]})})}),Object(O.jsx)("div",{className:"top-f-nav",children:Object(O.jsx)(p.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a.Brand,{href:"#",children:Object(O.jsx)("img",{src:g.a,width:"100%",height:"80",alt:""})}),Object(O.jsx)("div",{className:"d-lg-none d-block mobile-cart",children:Object(O.jsx)(x,{})}),Object(O.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(p.a.Collapse,{id:"basic-navbar-nav",style:{justifyContent:"end"},children:Object(O.jsx)(f.a,{className:"",children:Object(O.jsxs)(y.a,{className:"scrollspy",items:["SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.c,{to:"/",className:"nav-link ",children:"Accueil"})}),T.map((function(e,t){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(w,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},e.toString())})),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(h.c,{to:"/shop",className:"nav-link ",ref:I,onMouseEnter:function(){e.shop&&l(!0)},children:[" ","Boutique"," "]})}),Object(O.jsx)("li",{className:"nav-item d-lg-block d-none",children:Object(O.jsx)(x,{})})]})})})]})})})]})})}},66:function(e,t,c){"use strict";var s=c(7),a=c(46),n=c.n(a),r=c(47),i=c(43),l=c(0),o=c(51),j=c(60),d=c.n(j),b=(c(61),c(62),c(45)),h=c(44),u=c(16),O=c(230),x=c(216),m=c(70),p=c(42),f=c(1);t.a=function(e){var t=e.show,c={dots:!1,infinite:!0,speed:700,slidesToShow:t||4,slidesToScroll:1,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]},a=Object(l.useState)(!1),j=Object(i.a)(a,2),g=j[0],v=j[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/product",{});case 2:!0===(t=e.sent).data.success&&v(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(f.jsxs)("div",{className:"new-arrivals",children:[Object(f.jsxs)("h3",{children:[" ",e.heading," "]}),g?Object(f.jsx)(d.a,Object(s.a)(Object(s.a)({className:"react-slider"},c),{},{children:g.map((function(e){return Object(f.jsx)("div",{className:"each-slid",children:Object(f.jsxs)(O.a,{className:"each-card",children:[Object(f.jsx)(O.a.Img,{variant:"top"}),Object(f.jsx)(u.b,{to:"/shop/product/".concat(e._id),children:Object(f.jsx)("img",{src:h.a+e.image[0],alt:"",width:"100%",height:"280"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(O.a.Title,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(m.a,{xs:"9",style:{textAlign:"left"},children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(m.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(t.push(e.color[0].name),e.color=t,e.quantity=1,e.size=e.size[0].length[0],localStorage.getItem("order")&&localStorage.getItem("order").length){var c=JSON.parse(localStorage.getItem("order"));c.push(e),localStorage.setItem("order",JSON.stringify(c))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(o.c,{size:25,color:" white"})})})]})})})]})},e._id)}))})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(p.a,{animation:"border",variant:"dark"})})]})}}}]);
//# sourceMappingURL=11.f83b7da4.chunk.js.map
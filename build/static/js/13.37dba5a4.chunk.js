(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[13],{223:function(e,t,c){"use strict";c.r(t);var s=c(18),a=c(76),n=c(46),r=c.n(n),i=c(47),l=c(43),o=c(0),j=c(52),d=c(51),b=c(48),u=c(15),h=c(122),O=c(45),x=c(210),m=c(208),p=c(67),f=c(209),g=c(211),v=c(225),N=c(42),k=c(7),y=c(53),S=c.n(y),w=(c(54),c(55),c(44)),C=c(2),_=c(1),T=function(){var e=Object(C.g)().id,t=Object(o.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1];Object(o.useEffect)((function(){var t=function(){var t=Object(i.a)(r.a.mark((function t(){var c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/product?_id=".concat(e));case 3:c=t.sent,s=c.data,a(s.data[0].image),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}));var n={customPaging:function(e){return Object(_.jsx)("a",{children:Object(_.jsx)("img",{src:w.a+s[e]})})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplaySpeed:2e3,cssEase:"linear",autoPlay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(_.jsx)("div",{className:"indiv-showcase",children:Object(_.jsx)(S.a,Object(k.a)(Object(k.a)({className:"react-slider"},n),{},{children:s.map((function(e){return Object(_.jsx)("div",{className:"each-slid overflow-hidden",children:Object(_.jsx)("img",{src:w.a+e,width:"100%",height:"400",alt:"",className:"p-1"})})}))}))})},I=c(49),A=c(56);t.default=function(e){var t=Object(o.useState)(!1),c=Object(l.a)(t,2),n=c[0],k=c[1],y=Object(o.useState)(1),S=Object(l.a)(y,2),w=S[0],E=S[1],q=Object(o.useState)([]),z=Object(l.a)(q,2),R=z[0],J=z[1],L=Object(o.useState)(1),P=Object(l.a)(L,2),U=P[0],K=P[1],M=Object(o.useState)([]),B=Object(l.a)(M,2),D=B[0],F=B[1],Q=Object(C.g)().id;Object(o.useEffect)((function(){var e=function(){var e=Object(i.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/product?_id=".concat(Q));case 3:t=e.sent,c=t.data,k(c.data),K(c.data[0].quantity),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),w<1?(alert("quantity cannot be in minus"),E(1)):w>U&&alert("Quantity Exceed");return console.log(D.length),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{header:!1,shop:!1}),n?n.map((function(e,t){return Object(_.jsxs)(x.a,{children:[Object(_.jsxs)(m.a,{className:"indiv-product",children:[Object(_.jsx)(p.a,{xs:"12",lg:"5",md:"6",children:Object(_.jsx)(T,{images:e.image})}),Object(_.jsxs)(p.a,{xs:"12",lg:"7",md:"6",className:"product-about",children:[Object(_.jsx)("h4",{className:"product-name",children:e.name}),Object(_.jsx)("hr",{}),Object(_.jsxs)("div",{className:"d-flex",children:[Object(_.jsx)("span",{className:"product_key mt-2",children:"price:"}),Object(_.jsxs)("h3",{children:[e.price,Object(_.jsx)("small",{children:"$"})," "]})]}),Object(_.jsxs)("div",{className:"color d-flex",children:[Object(_.jsx)("span",{className:"product_key mt-1",children:" colors: "}),e.color.map((function(e,t){return Object(_.jsx)("div",{className:"form-check",children:Object(_.jsx)("input",Object(s.a)({style:{backgroundColor:e.code},custom:!0,id:"checkbox".concat(e),checked:e._color,onChange:function(t){return function(e,t){e.target.checked?F([].concat(Object(a.a)(D),[t])):F(D.filter((function(e){return e!==t})))}(t,e.name)},className:"form-check-input",type:"checkbox",value:e.name},"id","flexCheckDefault"))})}))]}),e.size.map((function(e,t){return Object(_.jsxs)("div",{className:"d-flex mt-2 size",children:[Object(_.jsxs)("span",{className:"product_key mt-2",children:[Object.keys(e)[t],":"]}),Object.values(e)[t].map((function(t,c){return Object(_.jsxs)("div",{className:"form-check",children:[Object(_.jsx)("input",{className:"form-check-input",type:"checkbox",custom:!0,id:"checkbox".concat(e),checked:t._size,onChange:function(e){return function(e,t){e.target.checked?J([].concat(Object(a.a)(R),[t])):J(R.filter((function(e){return e!==t})))}(e,t)}}),Object(_.jsxs)("label",{children:[t," "]})]})}))]})})),Object(_.jsx)("hr",{}),Object(_.jsxs)("div",{className:"quantity d-flex",children:[Object(_.jsx)("span",{className:"product_key mt-2",children:"Quantity:"}),Object(_.jsx)("i",{onClick:function(){return E(w+1)},children:Object(_.jsx)(b.b,{})}),Object(_.jsxs)("p",{className:"p-2",children:[" ",w," "]}),Object(_.jsx)("i",{onClick:function(){return E(w-1)},children:Object(_.jsx)(b.a,{})})]}),Object(_.jsx)("hr",{}),Object(_.jsxs)("div",{className:"d-flex",children:[0!==D.length&&0!==R.length?Object(_.jsx)(u.b,{to:{pathname:"/order/step1",state:{product:[n[0]]}},children:Object(_.jsxs)(f.a,{onClick:function(){n[0].quantity=w,n[0].color=D,n[0].size=R},children:[" ",Object(_.jsx)(A.f,{className:"m-1"})," Order Now"]})}):Object(_.jsxs)(f.a,{disabled:!0,children:[Object(_.jsx)(A.f,{className:"m-1"})," Order Now "]}),Object(_.jsxs)(f.a,{disabled:0===D.length||0===R.length,className:"mx-3",onClick:function(){if(n[0].quantity=w,n[0].color=D,n[0].size=R,localStorage.getItem("order")){var e=JSON.parse(localStorage.getItem("order"));e.push(n[0]),localStorage.setItem("order",JSON.stringify(e))}else localStorage.setItem("order",JSON.stringify(n))},children:[Object(_.jsx)(h.c,{className:"m-1"})," Add to cart"]})]})]})]}),Object(_.jsx)("div",{className:"product-details",children:Object(_.jsxs)(g.a,{defaultActiveKey:"description",children:[Object(_.jsx)(v.a,{eventKey:"description",title:"Description",children:Object(_.jsx)("p",{children:n[0].description})}),Object(_.jsx)(v.a,{eventKey:"policy",title:"Return Policy",children:Object(_.jsx)("p",{children:"return policy"})})]})})]})})):Object(_.jsx)("div",{className:"text-center",children:Object(_.jsx)(N.a,{animation:"border",variant:"dark"})}),Object(_.jsx)(I.a,{heading:"related products"}),Object(_.jsx)(d.a,{})]})}},44:function(e,t,c){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,c){"use strict";var s=c(59),a=c.n(s);t.a=a.a.create({baseURL:"https://nanybackend.herokuapp.com"})},49:function(e,t,c){"use strict";var s=c(7),a=c(46),n=c.n(a),r=c(47),i=c(43),l=c(0),o=c(48),j=c(53),d=c.n(j),b=(c(54),c(55),c(45)),u=c(44),h=c(15),O=c(221),x=c(208),m=c(67),p=c(42),f=c(1);t.a=function(e){var t=e.show,c={dots:!1,infinite:!0,speed:700,slidesToShow:t||4,slidesToScroll:1,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]},a=Object(l.useState)(!1),j=Object(i.a)(a,2),g=j[0],v=j[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/product",{});case 2:!0===(t=e.sent).data.success&&v(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(f.jsxs)("div",{className:"new-arrivals",children:[Object(f.jsxs)("h3",{children:[" ",e.heading," "]}),g?Object(f.jsx)(d.a,Object(s.a)(Object(s.a)({className:"react-slider"},c),{},{children:g.map((function(e){return Object(f.jsx)("div",{className:"each-slid",children:Object(f.jsxs)(O.a,{className:"each-card",children:[Object(f.jsx)(O.a.Img,{variant:"top"}),Object(f.jsx)(h.b,{to:"/shop/product/".concat(e._id),children:Object(f.jsx)("img",{src:u.a+e.image[0],alt:"",width:"100%",height:"280"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(O.a.Title,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(m.a,{xs:"9",style:{textAlign:"left"},children:[Object(f.jsxs)("span",{className:"price",children:[" ",Object(f.jsx)("small",{children:"$"}),e.price," "]}),Object(f.jsxs)("p",{children:[e.name," "]})]}),Object(f.jsx)(m.a,{xs:"2",className:"mt-3",children:Object(f.jsx)("span",{className:"cart_button",onClick:function(){var t=[];if(t.push(e.color[0].name),e.color=t,e.quantity=1,e.size=e.size[0].length[0],localStorage.getItem("order")&&localStorage.getItem("order").length){var c=JSON.parse(localStorage.getItem("order"));c.push(e),localStorage.setItem("order",JSON.stringify(c))}else localStorage.setItem("order",JSON.stringify([e]))},children:Object(f.jsx)(o.c,{size:25,color:" white"})})})]})})})]})},e._id)}))})):Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(p.a,{animation:"border",variant:"dark"})})]})}},51:function(e,t,c){"use strict";c(0);var s=c(210),a=c(208),n=c(67),r=c(209),i=c(17),l=c(15),o=c(56),j=c(50),d=c.n(j),b=c(1);t.a=function(){return Object(b.jsx)(d.a.Element,{id:"footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("img",{src:i.a,alt:"logo",width:"160",height:"auto"}),Object(b.jsx)("p",{className:"mt-2",children:"CARE INC SARL est une jeune entreprise camerounaise cr\xe9\xe9e en JUIN 2020, qui a d\xe9cid\xe9 d'accompagner la population africaine dans la lutte contre la propagation du COVID 19"})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"Support"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/policy",children:"Politique de confidentialit\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/terms-condition",children:"Termes et conditions"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f",children:[Object(b.jsx)("h6",{children:"\xc0 propos de nous"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"\xc0 propos de nous"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Comment \xe7a fonctionne"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:"Prestations de service"})})]})]}),Object(b.jsxs)(n.a,{xs:"12",md:"6",lg:"3",className:"each-row-f mt-4",children:[Object(b.jsx)("p",{children:"T\xe9l\xe9chargez notre application.."}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{variant:"light",className:" d-flex w-100 ",children:[Object(b.jsx)(o.a,{size:22}),Object(b.jsx)("span",{children:"Apple Store"})]})}),Object(b.jsx)(n.a,{xs:"6",className:"my-1 footer-button",children:Object(b.jsxs)(r.a,{className:" d-flex w-100 ",variant:"light",children:[Object(b.jsx)(o.c,{size:22}),Object(b.jsx)("span",{children:"Jouer au magasin"})]})})]})]}),Object(b.jsx)(n.a,{xs:"12",className:"footer-widget",children:"Copyright \xa9 2021 All rights reserved | Raxeon"})]})})})})}},52:function(e,t,c){"use strict";var s=c(46),a=c.n(s),n=c(47),r=c(43),i=c(0),l=c(48),o=c(221),j=c(208),d=c(67),b=c(209),u=c(15),h=c(44),O=(c(23),c(1)),x=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),x=n[0],m=n[1],p=Object(i.useRef)();Object(i.useEffect)((function(){var e=setInterval((function(){m(localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[])}),100);return function(){return clearInterval(e)}}));var f=x?"400px":"auto";return Object(O.jsxs)("div",{className:"cart",children:[Object(O.jsxs)("span",{onClick:function(){return s((function(e){return!e}))},children:[" ",Object(O.jsx)(l.c,{size:30}),Object(O.jsx)("span",{className:"items d-none d-lg-block",children:x.length})," "]}),c?Object(O.jsxs)(o.a,{ref:p,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:f},children:[Object(O.jsx)(o.a.Header,{children:Object(O.jsxs)("h5",{children:["My Cart"," ",Object(O.jsx)("span",{onClick:function(){return s((function(e){return!e}))},children:" \xd7"})]})}),Object(O.jsxs)(o.a.Body,{className:"dropdown",children:[x.length>0?x.map((function(e){return Object(O.jsxs)(j.a,{className:"each-item",children:[Object(O.jsx)(d.a,{xs:"3",className:"cartdropdown",children:Object(O.jsx)("img",{src:h.a+e.image[0],height:"60",width:"60",alt:""})}),Object(O.jsxs)(d.a,{xs:"9",children:[Object(O.jsxs)("h6",{children:[" ",e.name," "]}),"price: ",e.price]})]})})):[],Object(O.jsx)(u.b,{onClick:function(){x.map((function(e,t){x[t].quantity=x[t].quantity>1?x[t].quantity:1,x[t].color=x[t].color[0]?x[t].color[0]:" "}))},to:{pathname:"/order/step1",state:{product:x}},children:Object(O.jsx)(b.a,{className:"mt-3",variant:"light",children:"CHECK OUT"})}),Object(O.jsx)(u.b,{to:"/cart",children:Object(O.jsx)(b.a,{className:"mt-1",variant:"light",children:"VIEW ALL CART"})})]})]}):null]})},m=c(60),p=c(210),f=c(205),g=c(17),v=c(50),N=c.n(v),k=c(58),y=c.n(k),S=c(45),w=c(49),C=N.a.Link,_=[{item:"\xc0 propos de nous",link:"about-us"},{item:"Prestations de service",link:"services"},{item:"Application mobile",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Nous contacter",link:"contact-us"}];t.a=function(e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),s=c[0],l=c[1],o=Object(i.useState)(!1),v=Object(r.a)(o,2),N=v[0],k=v[1],T=Object(i.useState)({image:"",text:"",buttontext:"",link:""}),I=Object(r.a)(T,2),A=I[0],E=I[1],q=Object(i.useRef)(),z=Object(i.useRef)(),R=Object(i.useRef)(null),J=Object(i.useRef)(),L=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/topheader",{});case 2:!0===(t=e.sent).data.success?E(t.data.data[0]):E([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){L();var e=function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.current&&!R.current.contains(t.target)&&(k(!1),J.current.classList.remove("shop"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),N&&J.current.classList.add("shop"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"sticky",children:[Object(O.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(O.jsx)(p.a,{children:Object(O.jsxs)(j.a,{className:"justify-content-center pt-2",children:[Object(O.jsx)(d.a,{md:"2",xs:"2",sm:"2",className:"p-0 ",style:{textAlign:"right"},children:Object(O.jsx)("img",{className:"",src:h.a+A.image,alt:"",height:"35",width:"35"})}),Object(O.jsx)(d.a,{md:"4",lg:"3",xs:"6",sm:"8",className:"p-0",children:Object(O.jsxs)("p",{className:" pt-2 ",children:[" ",A.text," "]})}),Object(O.jsx)(d.a,{md:"2",xs:"3",sm:"2",className:"p-0 smol",target:"_blank",children:Object(O.jsx)(u.b,{to:A.link,children:Object(O.jsx)(b.a,{className:"mt-1",children:A.button_text})})})]})})}),Object(O.jsx)("div",{className:"top-f-nav",children:Object(O.jsx)(f.a,{ref:z,className:"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top",children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)("a",{className:"navbar-brand",href:"#",children:Object(O.jsx)("img",{src:g.a,width:"100%",height:"auto",alt:""})}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){var e=q.current;s?(e.classList.remove("show"),l(!1)):(e.classList.add("show"),l(!0))},children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{ref:q,className:"collapse navbar-collapse justify-content-end ",id:"navbarSupportedContent",children:Object(O.jsx)("div",{className:"navbar-nav ",children:Object(O.jsxs)(y.a,{className:"scrollspy",items:["MAISON","SUR","Prestations de service","Application mobile","faq","Nous contacter"],currentClassName:"isCurrent",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(u.c,{to:"/",className:"nav-link ",children:"MAISON"})}),_.map((function(e,t){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(C,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},t.toString())})),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(u.c,{to:"/shop",className:"nav-link ",ref:J,onMouseEnter:function(){e.shop&&k(!0)},children:[" ","Boutique"," ",e.shop?Object(O.jsxs)("span",{children:[" ",Object(O.jsx)(m.a,{size:20})," "]}):null," "]})}),Object(O.jsx)("li",{className:"nav-item pt-1 number ",children:Object(O.jsx)(x,{})})]})})})]})})})]}),N?Object(O.jsx)("div",{className:"product-cards animate__animated animate__fadeInUp animate__fast\t",ref:R,children:Object(O.jsx)(w.a,{})}):null]})}}}]);
//# sourceMappingURL=13.37dba5a4.chunk.js.map
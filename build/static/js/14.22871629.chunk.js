(this.webpackJsonpnanny=this.webpackJsonpnanny||[]).push([[14,16],{202:function(e,t,a){"use strict";a.r(t);var c=a(46),A=a.n(c),s=a(47),n=a(43);var r=a(0),i=a(52),l=a(60),o=a(16),j=a(45),d=a(190),b=a(191),u=a(68),p=a(78),m=a(192),x=a(193),h=a(204),O=a(7),f=a(56),v=a.n(f),g=(a(57),a(58),a(48)),N=a(44),S=a(2),y=a(1),k=(g.a,g.a,g.a,g.a,g.a,function(e){e.images;var t=Object(S.g)().id,a=Object(r.useState)([]),c=Object(n.a)(a,2),i=c[0],l=c[1];Object(r.useEffect)((function(){var e=function(){var e=Object(s.a)(A.a.mark((function e(){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/product?_id=".concat(t));case 3:a=e.sent,c=a.data,l(c.data[0].image),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}));var o={customPaging:function(e){return Object(y.jsx)("a",{children:Object(y.jsx)("img",{src:N.a+i[e]})})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplaySpeed:2e3,cssEase:"linear",autoPlay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(y.jsx)("div",{className:"indiv-showcase",children:Object(y.jsx)(v.a,Object(O.a)(Object(O.a)({className:"react-slider"},o),{},{children:i.map((function(e){return Object(y.jsx)("div",{className:"each-slid overflow-hidden",children:Object(y.jsx)("img",{src:N.a+e,width:"100%",height:"400",alt:"",className:"p-1"})})}))}))})}),w=a(53),L=a(73);t.default=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),c=a[0],O=a[1],f=Object(r.useState)(1),v=Object(n.a)(f,2),g=v[0],N=v[1],T=Object(r.useState)([]),z=Object(n.a)(T,2),q=z[0],U=z[1],W=Object(S.g)().id;return Object(r.useEffect)((function(){var e=function(){var e=Object(s.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/product?_id=".concat(W));case 3:t=e.sent,a=t.data,O(a.data[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=Object(s.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/color");case 3:t=e.sent,a=t.data,U(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t()}),[]),g<1?(alert("quantity cannot be in minus"),N(1)):g>c.quantity&&(alert("Quantity Exceed"),N(c.quantity)),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(i.a,{header:!1,shop:!1}),Object(y.jsxs)(d.a,{children:[Object(y.jsxs)(b.a,{className:"indiv-product",children:[Object(y.jsx)(u.a,{xs:"12",lg:"5",md:"6",children:Object(y.jsx)(k,{images:c.image})}),Object(y.jsxs)(u.a,{xs:"12",lg:"7",md:"6",className:"product-about",children:[Object(y.jsx)("h4",{className:"product-name",children:c.name}),Object(y.jsx)("p",{className:"instock",children:c.quantity>0?"In Stock":"Out Of Stock"}),Object(y.jsxs)("p",{className:"price mt-2",children:["price: ",Object(y.jsx)("b",{children:c.price+"$"})]}),Object(y.jsxs)("div",{className:"color",children:[Object(y.jsx)("p",{className:"mt-2 mb-2 p-0 d-flex",children:" color:"}),Object(y.jsx)(p.a.Select,{size:"sm",className:"mt-3",style:{width:" auto "},children:q.map((function(e){return Object(y.jsx)("option",{children:e.color})}))})]}),Object(y.jsxs)("div",{className:"quantity d-flex",children:[Object(y.jsxs)("span",{onClick:function(){return N(g+1)},children:[" ",Object(y.jsx)(l.b,{})," "]}),Object(y.jsxs)("p",{className:"p-2",children:[" ",g," "]}),Object(y.jsxs)("span",{onClick:function(){return N(g-1)},children:[Object(y.jsx)(l.a,{})," "]})]})," ",Object(y.jsx)("br",{}),Object(y.jsx)(o.b,{onClick:function(){c.quantity=g,c.color=q||c.color[0]},to:{pathname:"/order/step1",state:{product:[c]}},children:Object(y.jsxs)(m.a,{children:[" ","Order Now"]})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)(m.a,{onClick:function(){if(localStorage.getItem("order")&&localStorage.getItem("order").length){var e=JSON.parse(localStorage.getItem("order"));e.push(c),localStorage.setItem("order",JSON.stringify(e))}else Object.assign(c,{quantity:g,color:q}),function(e){throw new Error('"'+e+'" is read-only')}("product"),localStorage.setItem("order",JSON.stringify([c]))},children:[Object(y.jsx)(L.i,{className:"m-1"})," Add to cart"]}),Object(y.jsxs)("div",{className:"social-icons mt-5",children:[Object(y.jsx)(L.b,{size:"25",color:"blue",className:"m-1"}),Object(y.jsx)(L.j,{size:"25",color:"primary",className:"m-1"}),Object(y.jsx)(L.g,{size:"25",color:"gray",className:"m-1"}),Object(y.jsx)(L.f,{size:"25",color:"red",className:"m-1"})]})]})]}),Object(y.jsx)("div",{className:"product-details",children:Object(y.jsxs)(x.a,{defaultActiveKey:"description",children:[Object(y.jsx)(h.a,{eventKey:"description",title:"Description",children:Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque voluptatibus impedit nemo, porro totam. Vel blanditiis adipisci commodi facere deleniti rerum molestias consectetur?"})}),Object(y.jsx)(h.a,{eventKey:"policy",title:"Return Policy",children:Object(y.jsx)("p",{children:"return policy"})})]})})]}),Object(y.jsx)(w.a,{heading:"related products"})]})}},44:function(e,t,a){"use strict";t.a="https://nanyapp2.herokuapp.com/image/"},45:function(e,t,a){"use strict";var c=a(63),A=a.n(c);t.a=A.a.create({baseURL:"https://nanyapp2.herokuapp.com"})},48:function(e,t,a){"use strict";t.a=a.p+"static/media/headphones.57e3be39.jpg"},49:function(e,t,a){"use strict";t.a=a.p+"static/media/selfie-stick.4e27ea96.jpg"},50:function(e,t,a){"use strict";t.a="data:image/jpeg;base64,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"},51:function(e,t,a){"use strict";a.r(t);var c=a(46),A=a.n(c),s=a(47),n=a(43),r=a(0),i=a(52),l=a(190),o=a(191),j=a(68),d=a(201),b=a(192),u=a(16),p=(a(48),a(49),a(50),a(23),a(53)),m=a(45),x=a(44),h=a(1);t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),c=a[0],O=a[1],f=Object(r.useState)([]),v=Object(n.a)(f,2),g=v[0],N=v[1],S=Object(r.useState)([]),y=Object(n.a)(S,2),k=y[0],w=y[1];function L(){return T.apply(this,arguments)}function T(){return(T=Object(s.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/category",{});case 2:1==(t=e.sent).data.success?N(t.data.data):N([]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return q.apply(this,arguments)}function q(){return(q=Object(s.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/product?category="+t,{});case 2:if(1!=(a=e.sent).data.success){e.next=8;break}return e.next=6,w(a.data.data);case 6:e.next=8;break;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)(Object(s.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(),e.location.state&&(z(e.location.state.item._id),O(e.location.state.item.heading));case 2:case"end":return t.stop()}}),t)}))),[1]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a,{}),Object(h.jsx)("div",{className:" products animate__animated animate__fadeInUp animate__fast",children:Object(h.jsx)(l.a,{fluid:!0,children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(j.a,{md:"3",xs:"12",className:"text-right mb-4",children:Object(h.jsxs)("div",{className:"filter-by",children:[Object(h.jsx)("h6",{children:"Filter Results By"}),g.map((function(e,t){return Object(h.jsxs)(u.b,{to:"/shop",onClick:function(){O(e.heading),z(e._id)},children:[" ",Object(h.jsxs)("p",{children:[" ",e.heading," "]})," "]},t)}))]})}),Object(h.jsxs)(j.a,{md:"9",xs:"12",className:"shop-cards",children:[Object(h.jsx)("h1",{className:"heading",children:c}),Object(h.jsx)(o.a,{children:k?k.map((function(e,t){return Object(h.jsx)(j.a,{xs:"12",md:"4",sm:"6",children:Object(h.jsxs)(d.a,{className:"each-card",children:[Object(h.jsx)(d.a.Img,{variant:"top"}),Object(h.jsx)("img",{src:x.a+e.image,width:"100%",height:"280"}),Object(h.jsx)(d.a.Body,{children:Object(h.jsx)(d.a.Title,{children:Object(h.jsxs)("div",{className:"text-center m-0",children:[Object(h.jsxs)("span",{className:"price",children:[" ",e.price," "]}),Object(h.jsxs)("p",{children:[e.name," "]}),Object(h.jsx)(b.a,{size:"sm",onClick:function(){if(localStorage.getItem("order")&&localStorage.getItem("order").length){var t=JSON.parse(localStorage.getItem("order"));t.push(e),localStorage.setItem("order",JSON.stringify(t))}else localStorage.setItem("order",JSON.stringify([e]))},children:"Add to cart"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.b,{to:{pathname:"/shop/product",state:{val:e}},children:Object(h.jsx)(b.a,{size:"sm",className:"mt-2",children:"View Details"})})]})})})]})},t)})):null})]})]})})}),Object(h.jsx)(p.a,{heading:"new arrivals"})]})}},52:function(e,t,a){"use strict";var c=a(46),A=a.n(c),s=a(47),n=a(43),r=a(0),i=a(60),l=a(201),o=a(191),j=a(68),d=a(192),b=a(16),u=(a(51),a(44)),p=(a(23),a(1)),m=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],A=JSON.parse(localStorage.getItem("order"))?JSON.parse(localStorage.getItem("order")):[],s=Object(r.useRef)(),m=A.length>0?"400px":"auto";return Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsxs)("span",{onClick:function(){return c((function(e){return!e}))},children:[" ",Object(p.jsx)(i.c,{size:30}),Object(p.jsx)("span",{className:"items d-none d-lg-block",children:A.length})," "]}),a?Object(p.jsxs)(l.a,{ref:s,className:"cart-dropdown animate__animated animate__fadeInUp animate__fast",style:{height:m},children:[Object(p.jsx)(l.a.Header,{children:Object(p.jsxs)("h5",{children:["My Cart"," ",Object(p.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:" \xd7"})]})}),Object(p.jsxs)(l.a.Body,{className:"dropdown",children:[Object(p.jsx)(o.a,{className:"each-item",children:(A.length>0?A:[]).map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{xs:"3",className:"cartdropdown",children:Object(p.jsx)("img",{src:u.a+e.image,height:"60",width:"60",alt:""})}),Object(p.jsxs)(j.a,{xs:"9",children:[Object(p.jsxs)("h6",{children:[" ",e.name," "]}),"price: ",e.price]})]})}))}),Object(p.jsx)(b.b,{onClick:function(){A.map((function(e,t){A[t].quantity=1,A[t].color=A[t].color[0]?A[t].color[0]:" "})),console.log(A)},to:{pathname:"/order/step1",state:{product:A}},children:Object(p.jsx)(d.a,{className:"mt-3",variant:"light",children:"CHECK OUT"})}),Object(p.jsx)(b.b,{to:"/cart",children:Object(p.jsx)(d.a,{className:"mt-1",variant:"light",children:"VIEW ALL CART"})})]})]}):null]})},x=a(62),h=a(48),O=a(49),f=a(50),v=a(190),g=a(185),N=a(54),S=a(18),y=a(61),k=a.n(y),w=a(64),L=a.n(w),T=a(45),z=k.a.Link,q=[{item:"About",link:"about-us"},{item:"Services",link:"services"},{item:"Mobile Aplication",link:"mob-app"},{item:"FAQ",link:"faq"},{item:"Contact Us",link:"contact-us"}];h.a,O.a,f.a,t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],i=a[1],h=Object(r.useState)(!1),O=Object(n.a)(h,2),f=O[0],y=O[1],k=Object(r.useState)({image:"",text:"",buttontext:"",link:""}),w=Object(n.a)(k,2),U=w[0],W=w[1],J=Object(r.useRef)(),P=(document.querySelector(".language"),Object(r.useRef)()),R=Object(r.useRef)(null),E=Object(r.useRef)(),H=Object(r.useState)([]),F=Object(n.a)(H,2),X=F[0];F[1];var V=function(){var e=Object(s.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/topheader",{});case 2:1==(t=e.sent).data.success?W(t.data.data[0]):(a={image:N.a,text:"Looking for a babysitting job?",button_text:"Book a nany",link:""},W(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){V();var e=function(){var e=Object(s.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.current&&!R.current.contains(t.target)&&(y(!1),E.current.classList.remove("shop"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),f&&E.current.classList.add("shop"),Object(p.jsxs)("div",{className:"sticky",children:[Object(p.jsx)("div",{className:"header-top text-center",style:{display:"block"},children:Object(p.jsx)(v.a,{children:Object(p.jsxs)(o.a,{className:"justify-content-center py-2",children:[Object(p.jsx)(j.a,{sm:"1",xs:"4",className:"p-0 ",style:{textAlign:"right"},children:Object(p.jsx)("img",{className:"",src:u.a+U.image,alt:"",height:"35",width:"35"})}),Object(p.jsx)(j.a,{sm:"6",xs:"4",className:"p-0",children:Object(p.jsxs)("p",{className:" pt-2 ",children:[" ",U.text," "]})}),Object(p.jsx)(j.a,{sm:"2",xs:"4",className:"p-0 smol",target:"_blank",children:Object(p.jsx)(b.b,{to:U.link,children:Object(p.jsx)(d.a,{class:"mt-1",children:U.button_text})})})]})})}),Object(p.jsxs)("div",{className:"top-f-nav",children:[Object(p.jsx)(g.a,{ref:P,className:"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top",children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)("a",{className:"navbar-brand",href:"#",children:Object(p.jsx)("img",{src:S.a,width:"100%",height:"auto",alt:""})}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){var e=J.current;c?(e.classList.remove("show"),i(!1)):(e.classList.add("show"),i(!0))},children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{ref:J,className:"collapse navbar-collapse justify-content-end ",id:"navbarSupportedContent",children:Object(p.jsx)("div",{className:"navbar-nav ",children:Object(p.jsxs)(L.a,{className:"scrollspy",items:["home","about-us","services","how-it-works","mob-app","faq","contact-us"],currentClassName:"isCurrent",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.c,{to:"/",className:"nav-link ",children:"Home"})}),q.map((function(e,t){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(z,{className:"nav-link cursor-pointer",exact:!0,to:e.link,href:"/",spy:!1,smooth:!1,offset:50,duration:500,spyThrottle:500,children:e.item})},t)})),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(b.c,{to:"/shop",className:"nav-link ",ref:E,onMouseEnter:function(){e.shop&&y(!0)},children:[" ","Shop"," ",e.shop?Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(x.a,{size:20})," "]}):null," "]})}),Object(p.jsx)("li",{className:"nav-item pt-1 number ",children:Object(p.jsx)(m,{})})]})})})]})}),f?Object(p.jsx)("div",{className:"product-cards animate__animated animate__fadeInUp animate__fast\t",ref:R,children:Object(p.jsx)(v.a,{children:Object(p.jsx)(o.a,{children:X.map((function(e,t){return Object(p.jsx)(j.a,{xs:"12",md:"4",children:Object(p.jsx)(b.b,{to:{path:"/shop/product",state:{val:e}},children:Object(p.jsxs)(l.a,{className:"each-product",children:[Object(p.jsx)(l.a.Img,{variant:"top"}),Object(p.jsx)("img",{src:u.a+e.image,width:"100%",height:"280"}),Object(p.jsx)(l.a.Body,{children:Object(p.jsxs)(l.a.Title,{children:[" ",e.name," "]})})]})})},t)}))})})}):null]})]})}},53:function(e,t,a){"use strict";var c=a(7),A=a(46),s=a.n(A),n=a(47),r=a(43),i=a(17),l=a(0),o=a(56),j=a.n(o),d=(a(57),a(58),a(51),a(45)),b=a(44),u=a(16),p=a(201),m=a(192),x=a(1);t.a=function(e){var t,a=(t={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,autoplay:!0},Object(i.a)(t,"speed",500),Object(i.a)(t,"autoplaySpeed",2e3),Object(i.a)(t,"arrows",!0),Object(i.a)(t,"cssEase","linear"),Object(i.a)(t,"responsive",[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]),t),A=Object(l.useState)([]),o=Object(r.a)(A,2),h=o[0],O=o[1];function f(){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/product",{});case 2:1==(t=e.sent).data.success&&O(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)(Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f();case 1:case"end":return e.stop()}}),e)})))),Object(x.jsxs)("div",{className:"new-arrivals",children:[Object(x.jsxs)("h3",{children:[" ",e.heading," "]}),Object(x.jsx)(j.a,Object(c.a)(Object(c.a)({className:"react-slider"},a),{},{children:h.map((function(e){return Object(x.jsx)("div",{className:"each-slid",children:Object(x.jsxs)(p.a,{className:"each-card",children:[Object(x.jsx)(p.a.Img,{variant:"top"}),Object(x.jsx)("img",{src:b.a+e.image[1],width:"100%",height:"280"}),Object(x.jsx)(p.a.Body,{children:Object(x.jsx)(p.a.Title,{children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsxs)("span",{className:"price",children:[" ",e.price," "]}),Object(x.jsxs)("p",{children:[e.name," "]}),Object(x.jsx)(m.a,{size:"sm",className:"button",onClick:function(){if(localStorage.getItem("order")&&localStorage.getItem("order").length){var t=JSON.parse(localStorage.getItem("order"));t.push(e),localStorage.setItem("order",JSON.stringify(t))}else localStorage.setItem("order",JSON.stringify([e]))},children:"Add to cart"}),Object(x.jsx)("br",{}),Object(x.jsx)(u.b,{to:"/shop/product/".concat(e._id),children:Object(x.jsx)(m.a,{size:"sm",className:"mt-2 button",children:"View Details"})})]})})})]})})}))}))]})}},54:function(e,t,a){"use strict";t.a=a.p+"static/media/topimg.a725b7fc.jpg"}}]);
//# sourceMappingURL=14.22871629.chunk.js.map
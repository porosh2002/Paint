(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[8],{42:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(9),s=t(10),c=t(12),i=t(11),m=t(1),o=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={image:[],imageID:n.props.imageID},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;0!==this.state.imageID&&fetch("http://localhost:5000/geTiMagE/".concat(this.state.imageID)).then((function(a){e.setState({image:a})}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.price,l=e.offer,s=e.id;return r.a.createElement("div",null,null!==this.state.image.url?r.a.createElement(n.Suspense,{fallback:r.a.createElement("p",null,"...")},r.a.createElement(m.b,{image:this.state.image,to:"/SingleProduct/".concat(s),className:"card"},r.a.createElement("div",null,r.a.createElement("img",{className:"card-img",src:this.state.image.url,alt:""}),r.a.createElement("p",{className:"pdnm"},a),r.a.createElement("p",{className:"ofr-price"},"TK: ",t),r.a.createElement("p",{className:"offerprice"},"TK : ",Math.floor(t-t*l/100)),r.a.createElement("p",{className:"offerprice ofrprcnt"},l,"% off")))):r.a.createElement(n.Suspense,{fallback:r.a.createElement("p",null,"...")},r.a.createElement("div",null)))}}]),t}(n.Component);a.a=function(e){var a=e.data;return r.a.createElement("div",null,a.length>0?r.a.createElement("div",null,a.map((function(e,a){return e?r.a.createElement("div",{key:a,className:"opscard"},r.a.createElement(o,{id:e._id,name:e.iteam,price:e.price,offer:e.offer,imageID:e.imageID})):null}))):null)}},96:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t(0),r=t.n(n),l=t(9),s=t(10),c=t(12),i=t(11),m=t(1),o=t(94),u=t(77),p=t(78),d=t(95),f=t(79);t(45);o.a.use([u.a,p.a]);var b=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider-main"},r.a.createElement(d.a,{effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(m.b,{to:""},r.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/baba2c89-c706-44b1-a7d8-abbad4649fe41597683284959-women-footwear-dk.jpg",alt:"company-logo"})))),r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(m.b,{to:""},r.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/1b9af71b-64ee-4736-9ee7-1209740a3f4b1597683284668-MnH_Desk.jpg",alt:"company-logo"}))))))}}]),t}(n.Component);o.a.use([u.a,p.a]);var E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider-main"},r.a.createElement(d.a,{className:"swiperSlider",effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},r.a.createElement(f.a,null,r.a.createElement(m.b,{to:""},r.a.createElement("div",{className:"slider-slider-albl"},r.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/563014d8-2c85-495f-9b61-9b4ae4ea09b41597417752779-Freecharge_desktop-strips.jpg",alt:""})))),r.a.createElement(f.a,null,r.a.createElement(m.b,{to:""},r.a.createElement("div",{className:"slider-slider-albl"},r.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/65f8c96e-2c3d-412a-904c-06435a10662a1597381975341-fedral-bank.jpg",alt:""}))))))}}]),t}(n.Component),g=t(42),v=t(56).default,h=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={robots:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.get("http://localhost:5000/AllProduct").then((function(a){e.setState({robots:a.data})}))}}]),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"fpd"},r.a.createElement("h2",{className:"fp"},"Feature Products"),r.a.createElement(g.a,{data:this.state.robots}))}}]),t}(n.Component);function _(){return r.a.createElement("div",{className:"swiperSlider"},r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(h,null))}}}]);
//# sourceMappingURL=8.d3458913.chunk.js.map
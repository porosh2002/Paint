(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[7],{38:function(e,a,t){"use strict";var r=t(0),s=t.n(r),n=t(9),c=t(10),l=t(12),i=t(11),m=t(1),o=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={image:[],imageID:r.props.imageID},r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;0!==this.state.imageID&&fetch("http://localhost:5000/geTiMagE/".concat(this.state.imageID)).then((function(a){e.setState({image:a})}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.price,n=e.offer,c=e.id;return s.a.createElement("div",null,null!==this.state.image.url?s.a.createElement(r.Suspense,{fallback:s.a.createElement("p",null,"...")},s.a.createElement(m.b,{image:this.state.image,to:"/SingleProduct/".concat(c),className:"card"},s.a.createElement("div",null,s.a.createElement("img",{className:"card-img",src:this.state.image.url,alt:""}),s.a.createElement("p",{className:"pdnm"},a),s.a.createElement("p",{className:"ofr-price"},"TK: ",t),s.a.createElement("p",{className:"offerprice"},"TK : ",Math.floor(t-t*n/100)),s.a.createElement("p",{className:"offerprice ofrprcnt"},n,"% off")))):s.a.createElement(r.Suspense,{fallback:s.a.createElement("p",null,"...")},s.a.createElement("div",null)))}}]),t}(r.Component);a.a=function(e){var a=e.robots;return s.a.createElement("div",null,a.map((function(e){return s.a.createElement("div",{className:"opscard"},s.a.createElement(o,{id:e._id,name:e.iteam,price:e.price,offer:e.offer,imageID:e.imageID}))})))}},66:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var r=t(0),s=t.n(r),n=t(9),c=t(10),l=t(12),i=t(11),m=t(1),o=t(63),u=t(50),p=t(51),f=t(64),d=t(52);t(42);o.a.use([u.a,p.a]);var b=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"slider-main"},s.a.createElement(f.a,{effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},s.a.createElement(d.a,null,s.a.createElement(m.b,{to:""},s.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/baba2c89-c706-44b1-a7d8-abbad4649fe41597683284959-women-footwear-dk.jpg",alt:"company-logo"}))),s.a.createElement(d.a,null,s.a.createElement(m.b,{to:""},s.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/1b9af71b-64ee-4736-9ee7-1209740a3f4b1597683284668-MnH_Desk.jpg",alt:"company-logo"})))))}}]),t}(r.Component);o.a.use([u.a,p.a]);var E=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"slider-main"},s.a.createElement(f.a,{className:"swiperSlider",effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},s.a.createElement(d.a,null,s.a.createElement(m.b,{to:""},s.a.createElement("div",{className:"slider-slider-albl"},s.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/563014d8-2c85-495f-9b61-9b4ae4ea09b41597417752779-Freecharge_desktop-strips.jpg",alt:""})))),s.a.createElement(d.a,null,s.a.createElement(m.b,{to:""},s.a.createElement("div",{className:"slider-slider-albl"},s.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/65f8c96e-2c3d-412a-904c-06435a10662a1597381975341-fedral-bank.jpg",alt:""}))))))}}]),t}(r.Component),g=t(38),h=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={robots:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/AllProduct").then((function(e){return e.json()})).then((function(a){e.setState({robots:a})}))}}]),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"fpd"},s.a.createElement("h2",{className:"fp"},"Feature Products"),s.a.createElement(g.a,{robots:this.state.robots}))}}]),t}(r.Component);function v(){return s.a.createElement("div",{className:"swiperSlider"},s.a.createElement(b,null),s.a.createElement(E,null),s.a.createElement(h,null))}}}]);
//# sourceMappingURL=7.24f6879d.chunk.js.map
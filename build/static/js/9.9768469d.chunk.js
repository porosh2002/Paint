(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[9],{38:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(9),r=t(10),o=t(12),i=t(11),s=t(1),m=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={image:[],imageID:l.props.imageID},l}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;0!==this.state.imageID&&fetch("http://localhost:5000/geTiMagE/".concat(this.state.imageID)).then((function(a){e.setState({image:a})}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.price,n=e.offer,r=e.id;return c.a.createElement("div",null,null!==this.state.image.url?c.a.createElement(l.Suspense,{fallback:c.a.createElement("p",null,"...")},c.a.createElement(s.b,{image:this.state.image,to:"/SingleProduct/".concat(r),className:"card"},c.a.createElement("div",null,c.a.createElement("img",{className:"card-img",src:this.state.image.url,alt:""}),c.a.createElement("p",{className:"pdnm"},a),c.a.createElement("p",{className:"ofr-price"},"TK: ",t),c.a.createElement("p",{className:"offerprice"},"TK : ",Math.floor(t-t*n/100)),c.a.createElement("p",{className:"offerprice ofrprcnt"},n,"% off")))):c.a.createElement(l.Suspense,{fallback:c.a.createElement("p",null,"...")},c.a.createElement("div",null)))}}]),t}(l.Component);a.a=function(e){var a=e.robots;return c.a.createElement("div",null,a.map((function(e){return c.a.createElement("div",{className:"opscard"},c.a.createElement(m,{id:e._id,name:e.iteam,price:e.price,offer:e.offer,imageID:e.imageID}))})))}},49:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var l=t(9),c=t(10),n=t(12),r=t(11),o=t(0),i=t.n(o),s=t(38),m=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).menu_div_out=function(){e.setState({filterOpen:!0})},e.menu_div_out2=function(){e.setState({filterOpen:!1})},e.brand=function(a){e.setState({brand:a.target.value})},e.budget1=function(){e.setState({price1:!e.state.price1})},e.budget2=function(){e.setState({price2:!e.state.price2})},e.budget3=function(){e.setState({price3:!e.state.price3})},e.colorred=function(){e.setState({red:!e.state.red})},e.colorGreen=function(){e.setState({green:!e.state.green})},e.colorYello=function(){e.setState({Yellow:!e.state.Yellow})},e.colorOrange=function(){e.setState({orange:!e.state.orange})},e.colorBlack=function(){e.setState({black:!e.state.black})},e.sizechangeS=function(){e.setState({SizeS:!e.state.SizeS})},e.sizechangeM=function(){e.setState({SizeM:!e.state.SizeM})},e.sizechangeL=function(){e.setState({SizeL:!e.state.SizeL})},e.fiftteoffr1=function(){e.setState({offer1:!e.state.offer1})},e.fiftteoffr2=function(){e.setState({offer2:!e.state.offer2})},e.fiftteoffr3=function(){e.setState({offer3:!e.state.offer3})},e.fiftteoffr4=function(){e.setState({offer4:!e.state.offer4})},e.fiftteoffr5=function(){e.setState({offer5:!e.state.offer5})},e.state={filterOpen:!1,robots:[],fiftteoffr:!1,offer1:!1,offer2:!1,offer3:!1,offer4:!1,offer5:!1,SizeS:!1,SizeM:!1,SizeL:!1,red:!1,black:!1,Yellow:!1,green:!1,orange:!1,price1:!1,price2:!1,price3:!1,brand:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/AllProduct").then((function(e){return e.json()})).then((function(a){e.setState({robots:a})}))}}]),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.filterOpen,a=e?{display:"block"}:{display:"none"},t=e?{display:"none"}:{display:"block"},l=this.state,c=l.robots.filter((function(e){return!0!==l.offer1?l.robots:e.offer>10||10===e.offer?e:void 0})),n=c.filter((function(e){return!0!==l.offer2?c:e.offer>20||20===e.offer?e:void 0})),r=n.filter((function(e){return!0!==l.offer3?n:e.offer>30||30===e.offer?e:void 0})),m=r.filter((function(e){return!0!==l.offer4?r:e.offer>40||40===e.offer?e:void 0})),f=m.filter((function(e){return!0!==l.offer5?m:e.offer>50||50===e.offer?e:void 0})),u=f.filter((function(e){return!0!==l.SizeS?f:e.size.includes("S")?e:void 0})),d=u.filter((function(e){return!0!==l.SizeM?u:e.size.includes("M")?e:void 0})),E=d.filter((function(e){return!0!==l.SizeL?d:e.size.includes("L")?e:void 0})),p=E.filter((function(e){return!0!==l.red?E:e.tags.includes("red")?e:void 0})),b=p.filter((function(e){return!0!==l.green?p:e.tags.includes("green")?e:void 0})),N=b.filter((function(e){return!0!==l.orange?b:e.tags.includes("orange")?e:void 0})),h=N.filter((function(e){return!0!==l.black?N:e.tags.includes("black")?e:void 0})),v=h.filter((function(e){return!0!==l.Yellow?h:e.tags.includes("yellow")?e:void 0})),g=v.filter((function(e){return!0!==l.price1?v:e.price<500||500===e.price?e:void 0})),k=g.filter((function(e){return!0!==l.price1?g:e.price<1e3||e.price>500||500===e.price||1e3===e.price?e:void 0})),S=k.filter((function(e){return!0!==l.price1?k:e.price<2e3||e.price>1e3||1e3===e.price||2e3===e.price?e:void 0})),x=S.filter((function(e){return l.brand.length>0?e.BrandName.includes(l.brand.toString())?e:void 0:S}));return i.a.createElement("div",{className:"product-mob-div-container"},this.state.robots.length>0?i.a.createElement(o.Suspense,{fallback:i.a.createElement("p",null,"...")},i.a.createElement("div",null,i.a.createElement(s.a,{robots:x}))):i.a.createElement(o.Suspense,{fallback:i.a.createElement("p",null,"...")},i.a.createElement("div",null)),i.a.createElement("div",{style:a,className:"filter-gelary"},i.a.createElement("div",{className:"product-filter product-filter-mob"},i.a.createElement("p",{className:" title-filter title-main-f"},"Filters"),i.a.createElement("p",{className:"title-filter"},"BRAND"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.brand,name:"isGoing",type:"text",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"Monkey ",i.a.createElement("span",{className:"color-iteam"},"(100)"))))),i.a.createElement("p",{className:"title-filter"},"PRICE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget1,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK :  0tk to 500tk ",i.a.createElement("span",{className:"color-iteam"},"(5)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget2,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK :  500tk to 1,000tk ",i.a.createElement("span",{className:"color-iteam"},"(5)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget3,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK :  1,000tk to 2,000tk ",i.a.createElement("span",{className:"color-iteam"},"(5)"))))),i.a.createElement("p",{className:"title-filter"},"COLOR"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorred,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color"}),i.a.createElement("div",{className:"color-title"},"Red ",i.a.createElement("span",{className:"color-iteam"},"(50)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorGreen,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color1"}),i.a.createElement("div",{className:"color-title"},"Green ",i.a.createElement("span",{className:"color-iteam"},"(10)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorYello,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color2"}),i.a.createElement("div",{className:"color-title"},"Yellow ",i.a.createElement("span",{className:"color-iteam"},"(20)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorOrange,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color3"}),i.a.createElement("div",{className:"color-title"},"Orange ",i.a.createElement("span",{className:"color-iteam"},"(5)")))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorBlack,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color4"}),i.a.createElement("div",{className:"color-title"},"Black ",i.a.createElement("span",{className:"color-iteam"},"(5)"))))),i.a.createElement("p",{className:"title-filter"},"SIZE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeS,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"S ",i.a.createElement("span",{className:"color-iteam"},"(10)"))))),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeM,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"M ",i.a.createElement("span",{className:"color-iteam"},"(55)"))))),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeL,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"L ",i.a.createElement("span",{className:"color-iteam"},"(20)"))))),i.a.createElement("p",{className:"title-filter"},"DISCOUNT RANGE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr1,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"10% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr2,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"20% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr3,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"30% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr4,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"40% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr5,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"50% and avobe")))),i.a.createElement("div",{onClick:this.menu_div_out2,style:a,className:"filter-close"},i.a.createElement("p",null,"Close")))),i.a.createElement("div",{className:"filter-m0b-div"},i.a.createElement("div",{style:t,className:"filter-mob"},i.a.createElement("div",{onClick:this.menu_div_out},i.a.createElement("i",{className:"fas fa-sliders-h"})))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=9.9768469d.chunk.js.map
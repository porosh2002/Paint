(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[13],{41:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),l=a(1);function o(e){var t="/Earn/".concat(e.id),a="/profile/".concat(e.id);return c.a.createElement("div",{className:"dsbrd"},c.a.createElement("div",{className:"links-dsbrd"},c.a.createElement(l.b,{className:"dsLnk",to:a},"Profile"),c.a.createElement(l.b,{className:"dsLnk",to:t},"Earn"),c.a.createElement(l.b,{className:"dsLnk",to:"/Login"},"Logout")))}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(9),c=a(10),l=a(12),o=a(11),r=a(0),s=a.n(r),i=a(1),m=a(41),d=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).deleteAccount=function(){fetch("http://localhost:5000/delete/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"}})},e.onupdateform=function(){fetch("http://localhost:5000/update/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,name:e.state.name})})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onnameChange=function(t){e.setState({name:t.target.value})},e.state={name:void 0,email:void 0,Refferal:void 0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/getuserdata/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({name:t[0].name,email:t[0].email,Refferal:t[0].ownrefferal})}))}}]),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,{id:this.props.match.params.id}),s.a.createElement("div",{className:"dsbrd-cntnt"},s.a.createElement("p",{className:"title"},"Profile :"),s.a.createElement("p",{className:"title-des"},"Name : ",this.state.name),s.a.createElement("p",{className:"title-des"},"Email : ",this.state.email),s.a.createElement("p",{className:"title-des"},"Refferal Number : ",this.state.Refferal),s.a.createElement(i.b,{onClick:this.deleteAccount,to:"/Login",className:"title-des-btn"},"Delete Account")),s.a.createElement("form",{className:"update-form"},s.a.createElement("input",{onChange:this.onnameChange,type:"name",placeholder:"Enter new Name"}),s.a.createElement("input",{onChange:this.onEmailChange,type:"email",placeholder:"Enter new Email"}),s.a.createElement("input",{type:"submit",onClick:this.onupdateform,value:"Update Profile"})))}}]),a}(r.Component)}}]);
//# sourceMappingURL=13.8325fad0.chunk.js.map
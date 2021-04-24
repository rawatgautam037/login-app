(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),l=a.n(i),r=(a(23),a(7)),o=a.n(r),c=a(9),u=a(3),d=a(4),b=a(6),p=a(5),h=a(18),j=a(2),y=new function e(){Object(u.a)(this,e),Object(j.h)(this,{loading:!0,isLoggedIn:!1,username:"",system_ip:"",port:"",time_zone:"",sync_duration:"",isFormSubmit:!1})},m=a(16),x=a(1),v=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"inputField",children:Object(x.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),a}(s.a.Component),g=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"submitButton",children:Object(x.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),a}(s.a.Component),O=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},n}return Object(d.a)(a,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>20||this.setState(Object(m.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(a=e.sent)&&a.success?(y.isLoggedIn=!0,y.username=a.username):a&&0==a.success&&(this.resetForm(),alert(a.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"daily",value:function(){this.setState({daily_showMe:!0,weekly_showMe:!1})}},{key:"weekly",value:function(){this.setState({weekly_showMe:!0,daily_showMe:!1})}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"loginForm",children:[Object(x.jsx)("h2",{children:Object(x.jsx)("center",{style:{color:"#ff884b"},children:"Login"})}),Object(x.jsx)("h1",{children:this.props.dataFromParent}),Object(x.jsx)("label",{style:{marginRight:"45px"},children:"Username"}),Object(x.jsx)(v,{id:"username",type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(x.jsx)("label",{style:{marginRight:"50px"},children:"Password"}),Object(x.jsx)(v,{id:"password",type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(x.jsx)(g,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),a}(s.a.Component),f=(a(13),a(17)),k=[{label:"(GMT -12:00) Eniwetok, Kwajalein",value:"-12:00"},{label:"(GMT -11:00) Midway Island, Samoa",value:"-11:00"},{label:"(GMT -10:00) Hawaii",value:"-10:00"},{label:"(GMT -9:30) Taiohae",value:"-09:50"},{label:"(GMT -9:00) Alaska",value:"-09:00"},{label:"(GMT -8:00) Pacific Time (US & Canada)",value:"-08:00"},{label:"(GMT -7:00) Mountain Time (US & Canada)",value:"-07:00"},{label:"(GMT -6:00) Central Time (US & Canada), Mexico City",value:"-06:00"},{label:"(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",value:"-05:00"},{label:"(GMT -4:30) Caracas",value:"-04:50"},{label:"(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",value:"-04:00"},{label:"(GMT -3:30) Newfoundland",value:"-03:50"},{label:"(GMT -3:00) Brazil, Buenos Aires, Georgetown",value:"-03:00"},{label:"(GMT -2:00) Mid-Atlantic",value:"-02:00"},{label:"(GMT -1:00) Azores, Cape Verde Islands",value:"-01:00"},{label:"(GMT) Western Europe Time, London, Lisbon, Casablanca",value:"+00:00"},{label:"(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",value:"+01:00"},{label:"(GMT +2:00) Kaliningrad, South Africa",value:"+02:00"},{label:"(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",value:"+03:00"},{label:"(GMT +3:30) Tehran",value:"+03:50"},{label:"(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",value:"+04:00"},{label:"(GMT +4:30) Kabul",value:"+04:50"},{label:"(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",value:"+05:00"},{label:"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi",value:"+05:50"},{label:"(GMT +5:45) Kathmandu, Pokhara",value:"+05:75"},{label:"(GMT +6:00) Almaty, Dhaka, Colombo",value:"+06:00"},{label:"(GMT +6:30) Yangon, Mandalay",value:"+06:50"},{label:"(GMT +7:00) Bangkok, Hanoi, Jakarta",value:"+07:00"},{label:"(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",value:"+08:00"},{label:"(GMT +8:45) Eucla",value:"+08:75"},{label:"(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",value:"+09:00"},{label:"(GMT +9:30) Adelaide, Darwin",value:"+09:50"},{label:"(GMT +10:00) Eastern Australia, Guam, Vladivostok",value:"+10:00"},{label:"(GMT +10:30) Lord Howe Island",value:"+10:50"},{label:"(GMT +11:00) Magadan, Solomon Islands, New Caledonia",value:"+11:00"},{label:"(GMT +11:30) Norfolk Island",value:"+11:50"},{label:"(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",value:"+12:00"},{label:"(GMT +12:45) Chatham Islands",value:"+12:75"},{label:"(GMT +13:00) Apia, Nukualofa",value:"+13:00"},{label:"(GMT +14:00) Line Islands, Tokelau",value:"+14:00"}],w=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handlesystem_ip=function(e){n.setState({system_ip:e.target.value})},n.handleport=function(e){n.setState({port:e.target.value})},n.handletime_zone=function(e){n.setState({time_zone:e.label})},n.handleSubmit=function(e){var t=0;e.preventDefault(),""==n.state.sync_duration&&(alert("Please Select Sync Duration"),t=1),""==n.state.time_zone&&(alert("Please select a time zone"),t=1),0==t&&(y.isFormSubmit=!0,y.system_ip=n.state.system_ip,y.port=n.state.port,y.time_zone=n.state.time_zone,y.sync_duration=n.state.sync_duration)},n.state={system_ip:"",port:"",daily_showMe:!1,weekly_showMe:!1,time_zone:"",sync_duration:""},n}return Object(d.a)(a,[{key:"daily",value:function(){this.setState({daily_showMe:!0,weekly_showMe:!1,sync_duration:"daily"})}},{key:"weekly",value:function(){this.setState({weekly_showMe:!0,daily_showMe:!1,sync_duration:"weekly"})}},{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"InfoForm",children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("h5",{children:Object(x.jsxs)("center",{style:{color:"#ff884b"},children:["Welcome ",this.props.username]})}),Object(x.jsx)("center",{children:Object(x.jsx)("p",{style:{color:"yellow"},children:"Please Fill the below Details to proceed"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{style:{marginRight:"40px"},children:"Time Zone"}),Object(x.jsx)("div",{style:{color:"black",fontFamily:"arial",fontSize:20},className:"time_zone",children:Object(x.jsx)(f.a,{placeholder:k[0].label,options:k,onChange:this.handletime_zone})})]}),Object(x.jsxs)("div",{style:{marginTop:"35px"},children:[Object(x.jsx)("label",{style:{marginRight:"46px"},children:"System IP"}),Object(x.jsx)("input",{style:{boxSizing:"border-box",outline:"none",border:"solid 2px #1189de",borderRadius:"4px",color:"#292929",width:"72%",padding:"12px",fontSize:"14px",background:"rgba(255, 255, 255, 1)"},id:"system_ip",type:"text",placeholder:"System IP",value:this.state.system_ip,onChange:this.handlesystem_ip,required:!0})]}),Object(x.jsxs)("div",{style:{marginTop:"35px"},children:[Object(x.jsx)("label",{style:{marginRight:"90px"},children:"Port"}),Object(x.jsx)("input",{style:{boxSizing:"border-box",outline:"none",border:"solid 2px #1189de",borderRadius:"4px",color:"#292929",width:"72%",padding:"12px",fontSize:"14px",background:"rgba(255, 255, 255, 1)"},id:"Port",type:"number",placeholder:"Port",value:this.state.port,onChange:this.handleport,required:!0})]}),Object(x.jsxs)("div",{style:{marginTop:"35px",marginBottom:"35px"},children:[Object(x.jsx)("label",{style:{marginRight:"10px"},children:"Sync Duration"}),Object(x.jsxs)("div",{style:{height:"45px",width:"400px",background:"rgba(255, 255, 255, 1)",display:"inline-block",boxSizing:"border-box",outline:"none",border:"solid 2px #1189de",borderRadius:"4px"},children:[Object(x.jsx)("input",{type:"radio",id:"daily",name:"duration",value:"daily",onClick:function(){return e.daily()},style:{marginLeft:"15px"}}),Object(x.jsx)("label",{style:{color:"#f88f01"},children:"Daily"}),Object(x.jsx)("input",{type:"radio",id:"weekly",name:"duration",value:"weekly",onClick:function(){return e.weekly()},style:{marginLeft:"50px"}}),Object(x.jsx)("label",{style:{color:"#f88f01"},children:"Weekly"})]})]}),this.state.daily_showMe?Object(x.jsxs)("div",{className:"sync_duration_daily",style:{marginLeft:"122px"},children:[Object(x.jsx)("input",{type:"radio",style:{marginLeft:"15px"},id:"every",name:"duration_daily",value:"every",checked:"checked"}),Object(x.jsx)("label",{style:{color:"#ff5e78",paddingRight:"20px"},children:"Every"}),Object(x.jsx)("input",{type:"text",id:"days",style:{width:"30px",height:"20px"},required:!0}),Object(x.jsx)("label",{style:{color:"#6930c3",marginLeft:"5px"},children:"day(s)"})]}):null,this.state.weekly_showMe?Object(x.jsxs)("div",{className:"sync_duration_weekly",style:{marginLeft:"122px"},children:[Object(x.jsx)("label",{style:{color:"#ff5e78",paddingRight:"20px",marginLeft:"8px"},children:"Recur every"}),Object(x.jsx)("input",{type:"text",id:"recur",style:{width:"30px",height:"20px"},required:!0}),Object(x.jsx)("label",{style:{color:"#6930c3",paddingLeft:"5px"},children:"week(s) on:"}),Object(x.jsxs)("p",{style:{padding:"0",margin:"0"},children:[Object(x.jsx)("input",{type:"checkbox",id:"monday",name:"monday",value:"monday"}),Object(x.jsx)("label",{children:" Monday "}),Object(x.jsx)("input",{type:"checkbox",id:"tuesday",name:"tuesday",value:"tuesday"}),Object(x.jsx)("label",{children:" Tuesday "}),Object(x.jsx)("input",{type:"checkbox",id:"wednesday",name:"wednesday",value:"wednesday"}),Object(x.jsx)("label",{children:" Wednesday "}),Object(x.jsx)("input",{type:"checkbox",id:"thursday",name:"thursday",value:"thursday"}),Object(x.jsx)("label",{children:" Thursday "}),Object(x.jsx)("input",{type:"checkbox",id:"friday",name:"friday",value:"friday"}),Object(x.jsx)("label",{children:" Friday "}),Object(x.jsx)("input",{type:"checkbox",id:"saturday",name:"saturday",value:"saturday"}),Object(x.jsx)("label",{children:" Saturday "}),Object(x.jsx)("input",{type:"checkbox",id:"sunday",name:"sunday",value:"sunday"}),Object(x.jsx)("label",{children:" Sunday "})]})]}):null,Object(x.jsx)("input",{type:"submit",value:"Send",style:{width:"40px",minWidth:"280px",marginLeft:"11rem",color:"#565656",padding:"12px",fontSize:"14px",fontWeight:"14px",border:"solid 2px #1189de",borderRadius:"4px",background:"#fff",cursor:"pointer",backgroundColor:"#ff884b"}})]})})}}]),a}(n.Component),M=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"doLogOut",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success&&(y.isLoggedIn=!1,y.username="",y.system_ip="",y.port="",y.time_zone="",y.sync_duration="",y.isFormSubmit=!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"inputField",children:[Object(x.jsxs)("h1",{children:["Welcome ",y.username]}),Object(x.jsxs)("p",{children:["time_zone = ",y.time_zone]}),Object(x.jsxs)("p",{children:["system_ip = ",y.system_ip]}),Object(x.jsxs)("p",{children:["port = ",y.port]}),Object(x.jsxs)("p",{children:["sync_duration = ",y.sync_duration]}),Object(x.jsx)(g,{text:"Log out",disabled:!1,onClick:function(){return e.doLogOut()}})]})}}]),a}(s.a.Component),T=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(y.loading=!1,y.isLoggedIn=!0,y.username=a.username):(y.loading=!1,y.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),y.loading=!1,y.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogOut",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success&&(y.isLoggedIn=!1,y.username="",y.system_ip="",y.port="",y.time_zone="",y.sync_duration="",y.isFormSubmit=!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return y.loading?Object(x.jsx)("div",{className:"app",children:Object(x.jsx)("div",{className:"container",children:"Loading, please wait.."})}):1==y.isLoggedIn&&0==y.isFormSubmit?Object(x.jsx)("div",{className:"app",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(w,{username:y.username})})}):y.isLoggedIn&&y.isFormSubmit?Object(x.jsx)("div",{className:"app",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(M,{})})}):Object(x.jsx)("div",{className:"app",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(O,{})})})}}]),a}(s.a.Component),_=Object(h.a)(T),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),i(e),l(e)}))};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),S()}},[[42,1,2]]]);
//# sourceMappingURL=main.e2131adc.chunk.js.map
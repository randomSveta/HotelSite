(this.webpackJsonphotelsite=this.webpackJsonphotelsite||[]).push([[0],{55:function(e,t,a){e.exports=a(93)},61:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/nice.059a7e39.png"},67:function(e,t,a){e.exports=a.p+"static/media/good.41809629.png"},68:function(e,t,a){e.exports=a.p+"static/media/kind.696cd2ac.png"},69:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),o=a.n(r),c=(a(60),a(61),a(13)),m=a(14),i=a(15),s=a(16),u=a(21),d=a(9),h=a(17),p=a(94),E=a(95),b=a(96);function g(e){return l.a.createElement(d.b,{color:"secondary",className:"",size:"sm",to:"/search?city="+e.hotel.city.toLowerCase().replace(" ","-")},l.a.createElement("img",{src:e.hotel.photo,className:"image-size img-fluid overflow-hidden m-0 p-0",alt:e.hotel.city+" photo"}))}var f=[{id:0,name:"Nice Hotel",city:"Nice City",adress:"Nice Country, Nice City, Nice St., 22",email:"nice_cookie@hotels.com",contacPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(66)},{id:2,name:"Good",city:"Good City",adress:"Good Country, Good City, Good St., 22",email:"good_cookie@hotels.com",contactPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(67)},{id:3,name:"Kind",city:"Kind City",adress:"Kind Country, Kind City, Kind St., 22",email:"kind_cookie@hotels.com",contactPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(68)}];a(69);function N(e){var t=f.map((function(e,t){return l.a.createElement(p.a,{className:"row-m-p row-height justify-content-center align-items-center border",key:t},l.a.createElement(E.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(g,{hotel:e})))}));return l.a.createElement(b.a,{className:"p-0 mx-auto my-0"},l.a.createElement(p.a,{className:"m-0 p-0 home-row justify-content-left align-items-start"},l.a.createElement(E.a,{md:"3",className:"text-center col-m-p"},l.a.createElement(p.a,{className:"row-m-p row-height blue-color-bg"},l.a.createElement(E.a,{xs:"12",className:"m-0 p-0"},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("h3",null,"Choose the city!"))),l.a.createElement(p.a,{className:"row-m-p row-height gray-color-bg"},l.a.createElement(E.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(d.b,{to:"search?city=all"},"Don't want to choose"))),l.a.createElement(p.a,{className:"row-m-p row-height gold-color-bg"},l.a.createElement(E.a,{xs:"12",className:"m-0 p-0"},l.a.createElement("p",null,"something")))),l.a.createElement(E.a,{md:"8",className:"text-center col-m-p"},t)))}var y=a(97),v=a(101),w=a(102),O=a(100),D=a(98),k=a(103),x=a(52),C=a(99),j=a(38),G=a.n(j),S=(a(76),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleDayClick=n.handleDayClick.bind(Object(h.a)(n)),n.handleResetClick=n.handleResetClick.bind(Object(h.a)(n)),n.state=n.getInitialState(),n}return Object(m.a)(a,[{key:"getInitialState",value:function(){return{from:void 0,to:void 0}}},{key:"handleDayClick",value:function(e){var t=j.DateUtils.addDayToRange(e,this.state);this.setState(t)}},{key:"handleResetClick",value:function(){this.setState(this.getInitialState())}},{key:"render",value:function(){var e=this.state,t=e.from,a=e.to,n={start:t,end:a};return l.a.createElement("div",{className:"RangeExample"},l.a.createElement("p",null,!t&&!a&&"Select the first day.",t&&!a&&"Select the last day.",t&&a&&"Selected from ".concat(t.toLocaleDateString()," to\n                ").concat(a.toLocaleDateString())," ",t&&a&&l.a.createElement("button",{className:"link",onClick:this.handleResetClick},"Reset")),l.a.createElement(G.a,{className:"Selectable",numberOfMonths:this.props.numberOfMonths,selectedDays:[t,{from:t,to:a}],modifiers:n,onDayClick:this.handleDayClick,day:new Date,fromMonth:new Date,disabledDays:{before:new Date}}))}}]),a}(l.a.Component));S.defaultProps={numberOfMonths:2};var I=S,P=[{id:0,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:1,hotelId:0,roomNumber:2,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:21},{id:2,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:3,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:4,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20}];function R(e){var t=e.room;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t.id+1),l.a.createElement("td",null,t.hotelId),l.a.createElement("td",null,t.maxGuestsNumber),l.a.createElement("td",null,t.price1guest$)))}var $=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggleDropDownNumber=n.toggleDropDownNumber.bind(Object(h.a)(n)),n.toggleDropDownDate=n.toggleDropDownDate.bind(Object(h.a)(n)),n.state={dropdownNumberOpen:!1,dropdownDateOpen:!1},n}return Object(m.a)(a,[{key:"toggleDropDownNumber",value:function(){this.setState({dropdownNumberOpen:!this.state.dropdownNumberOpen})}},{key:"toggleDropDownDate",value:function(){this.setState({dropdownDateOpen:!this.state.dropdownDateOpen})}},{key:"render",value:function(){var e=P.map((function(e){return l.a.createElement(R,{room:e,key:e.id})}));return l.a.createElement(b.a,{className:"under-nav text-center"},l.a.createElement(p.a,null,l.a.createElement(E.a,{xs:12},l.a.createElement("h1",{className:"text-center"},"Find availible appartments in all our hotels!"))),l.a.createElement(y.a,{className:"row"},l.a.createElement(E.a,{xs:12,sm:7},l.a.createElement(I,null)),l.a.createElement(E.a,{xs:12,sm:3,className:"search-columns"},l.a.createElement(v.a,{addonType:"append",isOpen:this.state.dropdownNumberOpen,toggle:this.toggleDropDownNumber},l.a.createElement(w.a,{caret:!0},"Number of guests"),l.a.createElement(O.a,null,l.a.createElement(D.a,{header:!0},"Adults"),l.a.createElement(D.a,null,"1"),l.a.createElement(D.a,null,"2"),l.a.createElement(D.a,null,"3"),l.a.createElement(D.a,null,"4"),l.a.createElement(D.a,null,"more than 4"),l.a.createElement(D.a,{divider:!0}),l.a.createElement(D.a,{header:!0},"Children from 6 years"),l.a.createElement(D.a,null,"1"),l.a.createElement(D.a,null,"2"),l.a.createElement(D.a,null,"3"),l.a.createElement(D.a,null,"4"),l.a.createElement(D.a,null,"more than 4")))),l.a.createElement(E.a,{sm:2,className:"search-columns"},l.a.createElement(k.a,{addonType:"append"},l.a.createElement(x.a,{color:"secondary"},"Find!")))),l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement("h2",null,"All our rooms"))),l.a.createElement(p.a,null,l.a.createElement(E.a,{xs:12},l.a.createElement(C.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Hotel"),l.a.createElement("th",null,"Number of Guests"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e)))))}}]),a}(l.a.Component);var F=function(e){return l.a.createElement(b.a,{className:"under-nav text-center"},l.a.createElement(p.a,null,l.a.createElement(E.a,{xs:12},l.a.createElement("h1",{className:"text-center"},"About Us"))))};var H=function(e){return l.a.createElement(b.a,{className:"under-nav text-center"},l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement("h1",null,"Contacts"))))};function K(e){return l.a.createElement(b.a,null,l.a.createElement(p.a,{id:"row-welcome",className:"justify-content-center align-items-center"},l.a.createElement(E.a,{className:"text-center"},l.a.createElement("h1",null,"Gallery"))))}var A=[{id:0,title:"Home",url:"/",component:l.a.createElement(N,null)},{id:1,title:"Search",url:"/search",component:l.a.createElement($,null)},{id:2,title:"About",url:"/about",component:l.a.createElement(F,null)},{id:3,title:"Gallery",url:"/gallery",component:l.a.createElement(K,null)},{id:4,title:"Contacts",url:"/contacts",component:l.a.createElement(H,null)}],L=(a(91),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(h.a)(n)),n.state={isOpen:!1},n}return Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=A.map((function(e,t){return l.a.createElement(d.c,{to:e.url,exact:"Home"===e.title,key:t,id:e.title.toLowerCase()},e.title)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"side-navigation",className:"side-nav overflow-hidden"},e))}}]),a}(l.a.Component));var M=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=A.map((function(e,t){return l.a.createElement(u.b,{path:e.url,key:t,exact:"Home"===e.title},e.component)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{basename:"/hotel-website"},l.a.createElement(L,null),l.a.createElement(u.d,null,e,l.a.createElement(u.a,{to:"/"}))))}}]),a}(l.a.Component),T=(a(92),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(M,null)}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.81f5cacc.chunk.js.map
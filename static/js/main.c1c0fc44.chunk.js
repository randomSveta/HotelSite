(this.webpackJsonphotelsite=this.webpackJsonphotelsite||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/hotels-logo.6f76f884.png"},56:function(e,t,a){e.exports=a(95)},62:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/nice.059a7e39.png"},68:function(e,t,a){e.exports=a.p+"static/media/good.41809629.png"},69:function(e,t,a){e.exports=a.p+"static/media/kind.696cd2ac.png"},70:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(51),c=a.n(r),m=(a(61),a(62),a(13)),s=a(14),o=a(15),i=a(16),u=a(21),d=a(12),p=a(17);function h(e){return l.a.createElement(d.c,{className:"dark-bg nav-link-"+e.place,to:e.page.url,exact:"Home"===e.page.title,id:e.page.title.toLowerCase()+"-navlink-"+e.place},e.page.title)}var E=a(96),g=a(97),b=a(98);function N(e){return l.a.createElement(d.b,{className:"relative",to:"/search?city="+e.hotel.city.toLowerCase().replace(" ","-")},l.a.createElement("img",{src:e.hotel.photo,className:"image-size img-fluid overflow-hidden m-0 p-0 relative",alt:e.hotel.city+" photo"}),l.a.createElement("p",{className:"city-name-text gold-bg"},e.hotel.city))}var f=[{id:0,name:"Nice People",city:"Nicecity",adress:"Nicecountry, Nicecity, Nice St., 22",email:"nice_cookie@random.sveta",contacPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(67)},{id:2,name:"Good People",city:"Goodcity",adress:"Goodcountry, Goodcity, Good St., 22",email:"good_cookie@random.sveta",contactPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(68)},{id:3,name:"Kind People",city:"Kindcity",adress:"Kindcountry, Kindcity, Kind St., 22",email:"kind_cookie@random.sveta",contactPhones:{mobilePhone:"+7 (000) 000-00-00",localPhone:"+7 (000) 000-00-00"},roomsNumber:100,photo:a(69)}];a(70);function y(e){var t=f.map((function(e,t){return l.a.createElement(E.a,{className:"row-m-p row-height justify-content-center align-items-center gray-bg",key:t},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(N,{hotel:e})))})),n=f.map((function(e,t){return l.a.createElement("li",{key:t},e.city,": ",t+5)})),r=a(44);return l.a.createElement(b.a,{className:"main-container"},l.a.createElement(E.a,{className:"main-row justify-content-left align-items-start"},l.a.createElement(g.a,{xs:"12",md:"3",className:"text-center col-m-p"},l.a.createElement(E.a,{className:"row-m-p row-height gold-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("h3",null,"choose the city"))),l.a.createElement(E.a,{className:"row-m-p row-height gray-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0 h-100"},l.a.createElement(E.a,{className:"m-0 p-0 h-50 align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(d.b,{id:"go-to-search",className:"",to:"search?city=all"},"Check all hotels"))),l.a.createElement(E.a,{className:"m-0 p-0 bg-white h-50 align-items-center justify-content-center"},l.a.createElement(g.a,{xs:"12",md:"6"},l.a.createElement("p",{className:"m-0 p-0"},"available rooms")),l.a.createElement(g.a,{xs:"12",md:"6"},l.a.createElement("ul",{className:"list-unstyled m-0 p-0 text-left"},n))))),l.a.createElement(E.a,{className:"row-m-p row-height blue-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(d.b,{to:"/",exact:"true"},l.a.createElement("img",{className:"image-size img-fluid overflow-hidden m-0 p-0",src:r,alt:"logo"}))))),l.a.createElement(g.a,{md:"8",className:"text-center col-m-p"},t)))}var w=a(99),v=a(103),x=a(104),j=a(102),k=a(100),O=a(105),D=a(53),C=a(101),G=a(38),S=a.n(G),I=(a(77),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleDayClick=n.handleDayClick.bind(Object(p.a)(n)),n.handleResetClick=n.handleResetClick.bind(Object(p.a)(n)),n.state=n.getInitialState(),n}return Object(s.a)(a,[{key:"getInitialState",value:function(){return{from:void 0,to:void 0}}},{key:"handleDayClick",value:function(e){var t=G.DateUtils.addDayToRange(e,this.state);this.setState(t)}},{key:"handleResetClick",value:function(){this.setState(this.getInitialState())}},{key:"render",value:function(){var e=this.state,t=e.from,a=e.to,n={start:t,end:a};return l.a.createElement("div",{className:"RangeExample"},l.a.createElement("p",null,!t&&!a&&"Select the first day.",t&&!a&&"Select the last day.",t&&a&&"Selected from ".concat(t.toLocaleDateString()," to\n                ").concat(a.toLocaleDateString())," ",t&&a&&l.a.createElement("button",{className:"link",onClick:this.handleResetClick},"Reset")),l.a.createElement(S.a,{className:"Selectable",numberOfMonths:this.props.numberOfMonths,selectedDays:[t,{from:t,to:a}],modifiers:n,onDayClick:this.handleDayClick,day:new Date,fromMonth:new Date,disabledDays:{before:new Date}}))}}]),a}(l.a.Component));I.defaultProps={numberOfMonths:2};var P=I,A=[{id:0,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:1,hotelId:0,roomNumber:2,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:21},{id:2,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:3,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20},{id:4,hotelId:0,roomNumber:1,minGuestsNumber:1,maxGuestsNumber:4,availible:!0,showerInside:!0,price1guest$:20}];function R(e){var t=e.room;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t.id+1),l.a.createElement("td",null,t.hotelId),l.a.createElement("td",null,t.maxGuestsNumber),l.a.createElement("td",null,t.price1guest$)))}var $=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggleDropDownNumber=n.toggleDropDownNumber.bind(Object(p.a)(n)),n.toggleDropDownDate=n.toggleDropDownDate.bind(Object(p.a)(n)),n.state={dropdownNumberOpen:!1,dropdownDateOpen:!1},n}return Object(s.a)(a,[{key:"toggleDropDownNumber",value:function(){this.setState({dropdownNumberOpen:!this.state.dropdownNumberOpen})}},{key:"toggleDropDownDate",value:function(){this.setState({dropdownDateOpen:!this.state.dropdownDateOpen})}},{key:"render",value:function(){var e=A.map((function(e){return l.a.createElement(R,{room:e,key:e.id})}));return l.a.createElement(b.a,{className:"under-nav text-center"},l.a.createElement(E.a,null,l.a.createElement(g.a,{xs:12},l.a.createElement("h1",{className:"text-center"},"Find availible appartments in all our hotels!"))),l.a.createElement(w.a,{className:"row"},l.a.createElement(g.a,{xs:12,sm:7},l.a.createElement(P,null)),l.a.createElement(g.a,{xs:12,sm:3,className:"search-columns"},l.a.createElement(v.a,{addonType:"append",isOpen:this.state.dropdownNumberOpen,toggle:this.toggleDropDownNumber},l.a.createElement(x.a,{caret:!0},"Number of guests"),l.a.createElement(j.a,null,l.a.createElement(k.a,{header:!0},"Adults"),l.a.createElement(k.a,null,"1"),l.a.createElement(k.a,null,"2"),l.a.createElement(k.a,null,"3"),l.a.createElement(k.a,null,"4"),l.a.createElement(k.a,null,"more than 4"),l.a.createElement(k.a,{divider:!0}),l.a.createElement(k.a,{header:!0},"Children from 6 years"),l.a.createElement(k.a,null,"1"),l.a.createElement(k.a,null,"2"),l.a.createElement(k.a,null,"3"),l.a.createElement(k.a,null,"4"),l.a.createElement(k.a,null,"more than 4")))),l.a.createElement(g.a,{sm:2,className:"search-columns"},l.a.createElement(O.a,{addonType:"append"},l.a.createElement(D.a,{color:"secondary"},"Find!")))),l.a.createElement(E.a,null,l.a.createElement(g.a,null,l.a.createElement("h2",null,"All our rooms"))),l.a.createElement(E.a,null,l.a.createElement(g.a,{xs:12},l.a.createElement(C.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Hotel"),l.a.createElement("th",null,"Number of Guests"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e)))))}}]),a}(l.a.Component);var L=function(e){var t=a(44);return l.a.createElement(b.a,{className:"p-0 my-0 mx-auto  container-home"},l.a.createElement(E.a,{className:"m-0 p-0 row-home justify-content-left align-items-start"},l.a.createElement(g.a,{md:"2",className:"text-center col-m-p"},l.a.createElement(E.a,{className:"row-m-p row-height dark-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"A")),l.a.createElement(E.a,{className:"row-m-p row-height beige-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement(d.b,{to:"/",exact:"true"},l.a.createElement("img",{className:"image-size img-fluid overflow-hidden m-0 p-0",src:t,alt:"logo"})))),l.a.createElement(E.a,{className:"row-m-p row-height gold-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"C"))),l.a.createElement(g.a,{md:"9",className:"text-center col-m-p"},l.a.createElement(E.a,{className:"row-m-p justify-content-center row-height align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},l.a.createElement("h1",null,'About "Good Hotels" Group'),l.a.createElement("p",{className:"text-left m-0 p-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper, quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie."))),l.a.createElement(E.a,{className:"row-m-p row-height justify-content-center align-items-center beige-bg"},l.a.createElement(g.a,{xs:"12",md:"3",className:"my-0"},"A"),l.a.createElement(g.a,{xs:"12",md:"3",className:"my-0"},"A"),l.a.createElement(g.a,{xs:"12",md:"3",className:"my-0"},"A")),l.a.createElement(E.a,{className:"row-m-p text-justify justify-content-center align-items-center beige-bg"},l.a.createElement(g.a,{xs:"12",md:"3",className:"col-m-p beige-bg"},"A"),l.a.createElement(g.a,{xs:"12",md:"3",className:"col-m-p beige-bg"},"A"),l.a.createElement(g.a,{xs:"12",md:"3",className:"col-m-p beige-bg"},"A")))))};var F=function(e){return l.a.createElement(b.a,{className:"p-0 my-0 mx-auto  container-home"},l.a.createElement(E.a,{className:"m-0 p-0 row-home justify-content-left align-items-start"},l.a.createElement(g.a,{md:"3",className:"text-center col-m-p"},l.a.createElement(E.a,{className:"row-m-p row-height gold-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"A")),l.a.createElement(E.a,{className:"row-m-p row-height gray-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"B")),l.a.createElement(E.a,{className:"row-m-p row-height blue-bg justify-content-center align-items-center"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"C"))),l.a.createElement(g.a,{md:"8",className:"text-center col-m-p"},l.a.createElement(E.a,{className:"row-m-p row-height justify-content-center align-items-center gray-bg"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"D")),l.a.createElement(E.a,{className:"row-m-p row-height justify-content-center align-items-center gray-bg"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"D")),l.a.createElement(E.a,{className:"row-m-p row-height justify-content-center align-items-center gray-bg"},l.a.createElement(g.a,{xs:"12",className:"m-0 p-0"},"D")))))};function H(e){return l.a.createElement(b.a,null,l.a.createElement(E.a,{id:"row-welcome",className:"justify-content-center align-items-center"},l.a.createElement(g.a,{className:"text-center"},l.a.createElement("h1",null,"Gallery"))))}var K=[{id:0,title:"Home",url:"/",component:l.a.createElement(y,null)},{id:1,title:"Search",url:"/search",component:l.a.createElement($,null)},{id:2,title:"About",url:"/about",component:l.a.createElement(L,null)},{id:3,title:"Gallery",url:"/gallery",component:l.a.createElement(H,null)},{id:4,title:"Contacts",url:"/contacts",component:l.a.createElement(F,null)}];function _(e){return K.map((function(t,a){var n;return"side"===e.place?n=l.a.createElement(h,{page:t,key:a,place:e.place}):"footer"===e.place&&(n=l.a.createElement("li",{className:"list-inline-item m-0 p-0",key:a},l.a.createElement(h,{page:t,place:e.place}))),n}))}a(92);var M=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(p.a)(n)),n.state={isOpen:!1},n}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"side-navigation",className:"side-nav overflow-hidden"},l.a.createElement(_,{place:"side"}),l.a.createElement("button",{id:"login-button",className:"nav-link-side gray-bg"},"Login")))}}]),a}(l.a.Component);a(93);function z(e){return l.a.createElement("footer",{id:"footer",className:"dark-bg text-white"},l.a.createElement(b.a,{className:"main-container"},l.a.createElement(E.a,{className:"main-row-f justify-content-left align-items-center"},l.a.createElement(g.a,{xs:"12",md:"6",className:"col-m-p text-center text-md-left"},l.a.createElement("ul",{className:"list-unstyled list-inline m-0 p-0"},l.a.createElement(_,{place:"footer"}))),l.a.createElement(g.a,{xs:"12",md:"5",className:"col-m-p text-center text-md-right "},l.a.createElement("p",{className:"m-0 p-0"},"good_hotels_group@random.sveta")))))}var B=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=K.map((function(e,t){return l.a.createElement(u.b,{path:e.url,key:t,exact:"Home"===e.title},e.component)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{basename:"/hotel-website"},l.a.createElement(M,null),l.a.createElement(u.d,null,e,l.a.createElement(u.a,{to:"/"})),l.a.createElement(z,null)))}}]),a}(l.a.Component),T=(a(94),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(B,null)}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.c1c0fc44.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(14),c=a.n(r),o=(a(23),a(3)),m=a(15),u=a(6),i=(a(24),"noopener noreferrer");function C(){return n.a.createElement("nav",{className:"social-links"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/bohemnotsradio/",target:"_blank",rel:i},n.a.createElement("i",{className:"fa-lg fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/bohemnotsradio/",target:"_blank",rel:i},n.a.createElement("i",{className:"fa-lg fa fa-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/bohemnotsradio",target:"_blank",rel:i},n.a.createElement("i",{className:"fa-lg fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://soundcloud.com/bohemnotsradio",target:"_blank",rel:i},n.a.createElement("i",{className:"fa-lg fa fa-soundcloud"})))))}function s(){return n.a.createElement("header",{style:{paddingTop:"10%"}})}var d="".concat("https://bohemnotsradio.com","/metadata");function E(){var e=n.a.useState(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=n.a.useState({theme:"dark",customName:"",trackName:"",location:"",imgUrl:null}),c=Object(o.a)(r,2),m=c[0],u=c[1];return n.a.useEffect((function(){var e=setInterval((function(){a||fetch(d).then((function(e){return e.json().then((function(e){var t=f(e);JSON.stringify(t)!==JSON.stringify(m)&&u(t)}))})).finally((function(){return l(!1)}))}),1e3);return function(){return clearInterval(e)}}),[a,m]),m}var f=function(e){return Object.keys(e||{}).sort().reduce((function(t,a){return t[a]=e[a],t}),{})};a(25);function p(){var e=E(),t=n.a.useState(""),a=Object(o.a)(t,2),l=a[0],r=a[1];return n.a.createElement("div",{id:"edit"},n.a.createElement("form",{onSubmit:function(e){var t=e.target;e.preventDefault();var a={customName:t.customName.value,location:t.location.value,imgUrl:t.imgUrl.value,t1Color:t.t1Color.value,t1Background:t.t1Background.value,t2Color:t.t2Color.value,t2Background:t.t2Background.value,actionColor:t.actionColor.value,size:t.size.value,password:t.password.value};fetch(d,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.statusText);r("success")})).catch((function(e){return r(e.message)}))}},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"customName"},"Track Name: ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"customName",defaultValue:e.customName}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"location"},"Location: ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"location",defaultValue:e.location}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"imgUrl"},"Image URL: ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"imgUrl",defaultValue:e.imgUrl}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"t1Color"},"T1 Color: "),n.a.createElement("div",{className:"block",style:{backgroundColor:e.t1Color}})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"t1Color",defaultValue:e.t1Color}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"t2Color"},"T2 Color: "),n.a.createElement("div",{className:"block",style:{backgroundColor:e.t2Color}})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"t2Color",defaultValue:e.t2Color}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"t1Background"},"T1 Background: "),n.a.createElement("div",{className:"block",style:{backgroundColor:e.t1Background}})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"t1Background",defaultValue:e.t1Background}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"t2Background"},"T2 Background: "),n.a.createElement("div",{className:"block",style:{backgroundColor:e.t2Background}})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"t2Background",defaultValue:e.t2Background}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"actionColor"},"Action Color: "),n.a.createElement("div",{className:"block",style:{backgroundColor:e.actionColor}})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"actionColor",defaultValue:e.actionColor}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"size"},"Size in 'rem': ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"size",defaultValue:e.size}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"password"},"Password: ")),n.a.createElement("td",null,n.a.createElement("input",{type:"password",name:"password",defaultValue:""}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{type:"submit",value:"Update"})),n.a.createElement("td",null,l)))),n.a.createElement("br",null)))}var h=new Audio("https://bhmnts.out.airtime.pro/bhmnts_a");function g(){var e=n.a.useState(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],r=n.a.useState(!1),c=Object(o.a)(r,2),m=c[0],u=c[1],i=n.a.useCallback((function(){h.paused&&(window.focus(),h.play().catch((function(){})))}),[]);return n.a.useEffect((function(){return window.addEventListener("online",i),function(){return window.removeEventListener("online",i)}})),n.a.useEffect((function(){a&&(i(),l(!1))}),[a,i]),[!h.paused,function(){h.paused?i():h.pause(),u(!m)}]}a(26);function v(e){var t=g(),a=Object(o.a)(t,2),l=a[0],r=a[1],c=E(),m=c?c.customName||c.trackName:"",u=c?c.location:"",i=c.t1Color||"",C=c.t1Background||"",s=c.t2Color||"",d=c.t2Background||"",f=c.actionColor||"none",p=c.size||10;return n.a.createElement("div",{id:"player"},n.a.createElement("div",{className:"icon",style:{width:"".concat(p,"rem")},onClick:r},l?n.a.createElement(k,{color:f}):n.a.createElement(b,{color:f})),n.a.createElement("div",{id:"player-meta"},n.a.createElement("div",{className:"t t1",style:{color:i,backgroundColor:C}},n.a.createElement("div",{className:"m m1"},m)),n.a.createElement("div",{className:"t t2",style:{color:s,backgroundColor:d}},n.a.createElement("div",null,u))))}var b=function(e){var t=e.color;return n.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 150 60",fill:t},n.a.createElement("path",{d:"M2.55556 0.261558C1.73258 0.614671 0.887949 1.40398 0.411489 2.29715C0.0216573 3.04492 0 3.93809 0 30.0892C0 56.2404 0.0216573 57.1336 0.411489 57.8813C1.19115 59.3353 2.29567 60 3.98494 60C5.06781 60 6.10736 59.5223 10.9369 56.7804C13.7307 55.2018 26.985 47.7657 28.9125 46.7063C29.2807 46.4986 31.0349 45.5224 32.8108 44.5253C34.6084 43.5283 36.3626 42.5521 36.7091 42.3443C37.3372 41.9912 43.2063 38.7094 44.5058 37.9824C44.8739 37.7746 46.8664 36.6738 48.9455 35.5106C54.035 32.7064 54.9013 31.7302 54.4681 29.2792C54.2949 28.2821 53.0604 26.8697 51.8476 26.2258C51.3711 25.9765 49.5519 24.9587 47.7544 23.9617C45.9785 22.9647 44.2242 21.9884 43.856 21.7807C37.9436 18.478 34.2185 16.4009 28.2628 13.0567C24.3428 10.855 20.8343 8.88167 20.4662 8.69473C20.1196 8.48702 17.0876 6.80454 13.7524 4.95589C10.4172 3.10723 7.60171 1.52861 7.47177 1.42475C7.36348 1.34167 6.64879 0.967784 5.9341 0.614671C4.52638 -0.0707838 3.5518 -0.174641 2.55556 0.261558ZM19.5999 16.7956C24.6027 19.5582 28.9991 21.9884 29.3456 22.1961C29.7138 22.4038 30.9699 23.1101 32.1611 23.754C33.3522 24.4187 34.63 25.1041 34.9765 25.3118C40.8024 28.5522 42.1668 29.3207 42.405 29.5492C42.6432 29.7777 42.5783 29.9023 41.9719 30.2346C41.2139 30.6708 38.1385 32.4156 32.8108 35.3859C28.6093 37.7539 26.6385 38.8548 23.7147 40.5165C22.4153 41.2642 19.9247 42.6559 18.1921 43.6322C16.4596 44.6084 13.4925 46.2909 11.5867 47.371C9.68082 48.4719 8.05652 49.3027 7.96989 49.2612C7.77497 49.1573 7.73166 10.6888 7.92657 10.5018C7.99155 10.4395 8.59795 10.7096 9.26933 11.0834C9.96236 11.4573 14.597 14.033 19.5999 16.7956Z"}),n.a.createElement("path",{d:"M88.3772 0.10688C86.9481 0.376776 86.45 1.1657 70.4701 28.0308C61.9171 42.3768 54.8366 54.4806 54.7067 54.9166C54.2303 56.5982 54.9882 58.446 56.5688 59.3595C57.8031 60.0861 59.7951 59.7747 61.0943 58.6536C61.7872 58.093 65.5548 51.9892 70.6433 43.2488C70.9248 42.792 72.5271 40.0723 74.2377 37.228C77.2691 32.1622 77.6372 31.5186 78.59 29.8993C78.8498 29.484 82.2493 23.7539 86.1685 17.1934C93.7471 4.4875 93.877 4.23837 93.2924 2.55671C92.6212 0.584388 90.7806 -0.329107 88.3772 0.10688Z"}),n.a.createElement("path",{d:"M116.552 0.39082C115.491 0.639955 114.202 1.71954 113.899 2.63303C113.697 3.15207 113.646 11.9341 113.697 30.4739C113.773 56.3839 113.798 57.5881 114.227 58.1901C115.668 60.1209 119.18 60.5154 121.251 58.9791C121.807 58.5638 122.338 57.941 122.49 57.505C122.818 56.4669 122.843 3.6711 122.49 2.6538C121.858 0.785284 119.154 -0.232018 116.552 0.39082Z"}),n.a.createElement("path",{d:"M143.865 0.370031C142.829 0.639927 141.49 1.7818 141.187 2.65377C140.833 3.67107 140.858 56.4669 141.187 57.505C141.743 59.1451 144.118 60.1832 146.518 59.851C148.059 59.6434 149.676 58.2939 149.904 57.0482C149.98 56.5292 150.03 44.0517 149.98 29.332C149.904 -0.543467 150.055 2.09321 148.16 0.889062C147.175 0.286986 145.128 0.0378507 143.865 0.370031Z"}))},k=function(e){var t=e.color;return n.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 150 60",fill:t},n.a.createElement("path",{d:"M98.1853 0.345881C97.3654 0.698496 96.5239 1.48669 96.0493 2.3786C95.6609 3.12531 95.6393 4.01722 95.6393 30.1315C95.6393 56.2457 95.6609 57.1376 96.0493 57.8843C96.826 59.3363 97.9264 60 99.6093 60C100.688 60 101.724 59.5229 106.535 56.785C109.318 55.2086 122.523 47.7829 124.443 46.7251C124.81 46.5177 126.558 45.5428 128.327 44.5472C130.118 43.5516 131.865 42.5767 132.211 42.3693C132.836 42.0166 138.683 38.7394 139.978 38.0134C140.345 37.806 142.33 36.7067 144.401 35.5451C149.471 32.745 150.334 31.7701 149.903 29.3225C149.73 28.3269 148.5 26.9164 147.292 26.2734C146.817 26.0245 145.005 25.0082 143.214 24.0126C141.445 23.0169 139.697 22.0421 139.331 21.8346C133.44 18.5367 129.729 16.4624 123.796 13.123C119.891 10.9243 116.395 8.95383 116.029 8.76715C115.683 8.55973 112.663 6.87962 109.34 5.03358C106.017 3.18754 103.212 1.61115 103.083 1.50744C102.975 1.42447 102.263 1.05111 101.551 0.698496C100.149 0.0140083 99.1778 -0.0897019 98.1853 0.345881ZM115.166 16.8565C120.15 19.6152 124.53 22.0421 124.875 22.2495C125.242 22.4569 126.493 23.1621 127.68 23.8051C128.866 24.4689 130.139 25.1534 130.484 25.3608C136.288 28.5965 137.648 29.364 137.885 29.5922C138.122 29.8203 138.058 29.9448 137.453 30.2767C136.698 30.7122 133.635 32.4546 128.327 35.4207C124.141 37.7853 122.178 38.8846 119.265 40.544C117.97 41.2907 115.489 42.6804 113.763 43.6553C112.037 44.6301 109.081 46.3103 107.182 47.3888C105.284 48.4882 103.666 49.3178 103.579 49.2764C103.385 49.1727 103.342 10.7584 103.536 10.5717C103.601 10.5095 104.205 10.7791 104.874 11.1525C105.564 11.5258 110.182 14.0979 115.166 16.8565Z"}),n.a.createElement("path",{d:"M88.0451 0.106752C86.6214 0.376268 86.1252 1.16408 70.2053 27.9912C61.6845 42.317 54.6306 54.4037 54.5011 54.8391C54.0266 56.5184 54.7816 58.3635 56.3563 59.2757C57.5859 60.0013 59.5705 59.6904 60.8648 58.5708C61.5551 58.0111 65.3086 51.9159 70.3779 43.1877C70.6583 42.7316 72.2546 40.0157 73.9588 37.1755C76.9788 32.1169 77.3456 31.4742 78.2947 29.8571C78.5536 29.4424 81.9403 23.7204 85.8448 17.1691C93.3949 4.48119 93.5243 4.23241 92.9419 2.55312C92.2732 0.583587 90.4396 -0.328618 88.0451 0.106752Z"}),n.a.createElement("path",{d:"M2.86257 0.267628C1.80535 0.516411 0.521593 1.59447 0.219532 2.50668C0.0181579 3.02498 -0.0321856 11.7946 0.0181579 30.3082C0.0936731 56.1817 0.118845 57.3841 0.546765 57.9853C1.98155 59.9134 5.48043 60.3073 7.54451 58.7732C8.09829 58.3585 8.6269 57.7366 8.77793 57.3012C9.10516 56.2646 9.13033 3.54327 8.77793 2.52741C8.14863 0.661535 5.45526 -0.35433 2.86257 0.267628Z"}),n.a.createElement("path",{d:"M30.0732 0.246896C29.0412 0.516411 27.7071 1.65667 27.405 2.52741C27.0526 3.54327 27.0778 56.2646 27.405 57.3012C27.9588 58.939 30.325 59.9756 32.7163 59.6439C34.2518 59.4366 35.8627 58.089 36.0893 56.8451C36.1648 56.3268 36.2151 43.8669 36.1648 29.168C36.0893 -0.665312 36.2403 1.96765 34.3524 0.765195C33.3707 0.163968 31.3318 -0.084815 30.0732 0.246896Z"}))};function y(e){var t=e.children;return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},t)}var w=function(){var e=n.a.useState(null),t=Object(o.a)(e,2),a=t[0],l=t[1],r=E(),c=document.getElementsByTagName("body")[0];return r.imgUrl!==a&&(l(r.imgUrl),function(e){var t='url("'.concat(e,'")');c.style.backgroundImage!==t?c.style.backgroundImage=t:e||(c.style.backgroundImage=null)}(r.imgUrl)),n.a.createElement(m.a,{basename:""},n.a.createElement("div",{className:r.theme||"dark"},n.a.createElement(s,null),n.a.createElement(y,null,n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",component:v}),n.a.createElement(u.a,{exact:!0,path:"/edit",component:p}))),n.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.90812980.chunk.js.map
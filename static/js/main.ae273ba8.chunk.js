(this["webpackJsonproofstock-app"]=this["webpackJsonproofstock-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(3),r=a.n(s),o=a(8),c=a(9),i=a(12),m=a(10),d=a(4),u=a(13),h=function(e){var t=e.id,a=["star5-".concat(t),"star4half-".concat(t),"star4-".concat(t),"star3half-".concat(t),"star3-".concat(t),"star2half-".concat(t),"star2-".concat(t),"star1half-".concat(t),"star1-".concat(t),"starhalf-".concat(t)];return n.a.createElement("fieldset",{className:"rating"},n.a.createElement("input",{type:"radio",id:a[0],name:"rating",value:"5"}),n.a.createElement("label",{className:"full",htmlFor:a[0],title:"Awesome - 5 stars"}),n.a.createElement("input",{type:"radio",id:a[1],name:"rating",value:"4 and a half"}),n.a.createElement("label",{className:"half",htmlFor:a[1],title:"Pretty good - 4.5 stars"}),n.a.createElement("input",{type:"radio",id:a[2],name:"rating",value:"4"}),n.a.createElement("label",{className:"full",htmlFor:a[2],title:"Pretty good - 4 stars"}),n.a.createElement("input",{type:"radio",id:a[3],name:"rating",value:"3 and a half"}),n.a.createElement("label",{className:"half",htmlFor:a[3],title:"Meh - 3.5 stars"}),n.a.createElement("input",{type:"radio",id:a[4],name:"rating",value:"3"}),n.a.createElement("label",{className:"full",htmlFor:a[4],title:"Meh - 3 stars"}),n.a.createElement("input",{type:"radio",id:a[5],name:"rating",value:"2 and a half"}),n.a.createElement("label",{className:"half",htmlFor:a[5],title:"Kinda bad - 2.5 stars"}),n.a.createElement("input",{type:"radio",id:a[6],name:"rating",value:"2"}),n.a.createElement("label",{className:"full",htmlFor:a[6],title:"Kinda bad - 2 stars"}),n.a.createElement("input",{type:"radio",id:a[7],name:"rating",value:"1 and a half"}),n.a.createElement("label",{className:"half",htmlFor:a[7],title:"Meh - 1.5 stars"}),n.a.createElement("input",{type:"radio",id:a[8],name:"rating",value:"1"}),n.a.createElement("label",{className:"full",htmlFor:a[8],title:"Sucks big time - 1 star"}),n.a.createElement("input",{type:"radio",id:a[9],name:"rating",value:"half"}),n.a.createElement("label",{className:"half",htmlFor:a[9],title:"Sucks big time - 0.5 stars"}))},p=a(11),g=a.n(p),E=(a(34),a(35),function(e){var t=e.toggleHouseDetailComponent,a=(e.props,e.selectedHouseData),l=a.streetAddress,s=a.cityStateZip,r=[];r=a.imageCollection?a.imageCollection.map((function(e){return n.a.createElement("img",{key:e.id,src:e.url,alt:"img_"})})):[n.a.createElement("img",{key:1,src:"https://picsum.photos/550",alt:"Bedroom 1"}),n.a.createElement("img",{key:2,src:"https://picsum.photos/600",alt:"Bedroom 1"}),n.a.createElement("img",{key:3,src:"https://picsum.photos/700",alt:"Bedroom 1"}),n.a.createElement("img",{key:4,src:"https://picsum.photos/750",alt:"Bedroom 1"}),n.a.createElement("img",{key:5,src:"https://picsum.photos/800",alt:"Bedroom 1"}),n.a.createElement("img",{key:6,src:"https://picsum.photos/850",alt:"Bedroom 1"})],console.log("imagesArray",r);return n.a.createElement("div",null,n.a.createElement("div",{className:"mb-5"},n.a.createElement("a",{href:"#",onClick:function(e){return t()},className:"cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"},"Go Back")),n.a.createElement("div",{className:"flex mb-4"},n.a.createElement("div",{className:"w-3/5"},n.a.createElement("div",{className:"h-128"},n.a.createElement("div",{className:"min-h-full rounded-lg shadow-lg overflow-hidden"},n.a.createElement(g.a,{dots:!0,infinite:!0,arrows:!0,speed:500,slidesToShow:1,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},r)))),n.a.createElement("div",{className:"w-2/5 p-2 text-center"},n.a.createElement("div",{className:"bg-white shadow p-4 rounded w-128"},n.a.createElement("h2",null,"Address"),n.a.createElement("h3",null,l),n.a.createElement("h3",null,s)))))}),b=function(e){return"".concat(e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))},f=function(e){var t=e.props,a=(e.showComponent,e.toggleHouseDetailComponent);if(t){var l=function(e){var t={};if(e){var a=e.id,l=e.address,n=e.financial,s=e.lease,r=e.mainImageUrl,o=e.physical,c=e.score,i=e.resources;t.id=a,t.streetAddress="".concat(l.address1," ").concat(l.address2||""),t.cityStateZip="".concat(e.address.city,", ").concat(e.address.state," ").concat(e.address.zip),t.rentalPrice=n?"$".concat(n.monthlyRent):s?"$".concat(s.leaseSummary.monthlyRent):"N/A",t.imageUrl=r?e.mainImageUrl:"https://picsum.photos/228/145",t.bedBath=o?"".concat(o.bedRooms,"bd, ").concat(o.bathRooms,"ba | ").concat(o.squareFeet,"sqft | Built in ").concat(o.yearBuilt):"2bd,2ba | 1250sqft | Built in 1987",n?(t.listPrice="".concat(n.listPrice),t.monthlyRent="".concat(n.monthlyRent),t.grossYield=Number.parseFloat(1200*t.monthlyRent/t.listPrice).toFixed(2),t.listPrice="$".concat(b(t.listPrice)),t.monthlyRent="$".concat(b(t.monthlyRent))):(t.listPrice="N/A",t.monthlyRent="N/A",t.grossYield="N/A"),c&&(t.score=c),i&&(t.imageCollection=i.photos.map((function(e){return{id:e.id,url:e.url}})))}return t}(t);return n.a.createElement("div",{className:"w-full sm:w-1/2 md:w-1/5 mb-4 px-2"},n.a.createElement("div",{className:"relative border bg-white rounded-lg border overflow-hidden"},n.a.createElement("picture",{className:"block border-b"},n.a.createElement("img",{className:"block",src:l.imageUrl,alt:"Pictures Coming Soon",onClick:function(e){return a(l)}})),n.a.createElement("div",{className:"opacity-50 relative -mt-12"},n.a.createElement("div",{className:"bg-black shadow-lg"},n.a.createElement("div",{className:"ml-1 mt-1 text-lg text-white font-medium"},l.listPrice),n.a.createElement("div",{className:"flex items-baseline"},n.a.createElement("div",{className:"subpixel-antialiased normal-case ml-2 text-white text-xs uppercase font-semibold tracking-wide"},l.bedBath)))),n.a.createElement("div",null,n.a.createElement("div",{className:"grid grid-flow-row grid-cols-2"},n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"w-1/2 h-12 border-r pl-1 border-b"},n.a.createElement("h3",{className:"text-gray-600 text-sm"},"Monthly Rent"),n.a.createElement("p",null,l.monthlyRent)),n.a.createElement("div",{className:"w-1/2 h-12 border-b pl-1"},n.a.createElement("h3",{className:"text-gray-600 text-sm"},"Gross Yield"),n.a.createElement("p",null,l.grossYield,"%"))),n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"w-1/2 h-12 border-r pl-1 border-b"},n.a.createElement("h3",{className:"text-gray-600 text-sm"},"Total Return"),n.a.createElement("p",null,"$580")),n.a.createElement("div",{className:"w-1/2 h-12 border-b pl-1"},n.a.createElement("h3",{className:"text-gray-600 text-sm"},"Neighborhood"),n.a.createElement(h,{key:l.id,id:l.id,score:l.score}))),n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"w-full h-12 pl-1"},n.a.createElement("h3",{className:"text-base leading-tight"},l.streetAddress," ",n.a.createElement("br",null)," ",l.cityStateZip)))))))}return n.a.createElement("h1",null," Loading...")},v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={homesList:[],showComponent:!1,selectedHouseData:null},e.toggleHouseDetailComponent=e.toggleHouseDetailComponent.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dev1-sample.azurewebsites.net/properties.json").then((function(e){return e.json()})).then((function(t){e.setState({homesList:t})})).catch(console.log)}},{key:"toggleHouseDetailComponent",value:function(e){console.log("data:",e),this.setState((function(e){return{showComponent:!e.showComponent}})),this.setState((function(t){return{selectedHouseData:e}}))}},{key:"render",value:function(){var e,t=this,a=this.state,l=a.homesList,s=a.showComponent,r=a.selectedHouseData;return l.properties&&(e=l.properties.map((function(e){return n.a.createElement(f,{key:e.id,props:e,showComponent:s,toggleHouseDetailComponent:t.toggleHouseDetailComponent})}))),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container mx-auto p-8 bg-white"},!s&&n.a.createElement("div",{className:"flex flex-row flex-wrap -mx-2"},e),s&&n.a.createElement(E,{toggleHouseDetailComponent:this.toggleHouseDetailComponent,selectedHouseData:r,props:l})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ae273ba8.chunk.js.map
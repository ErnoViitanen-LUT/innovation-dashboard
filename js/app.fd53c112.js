(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],u=0,b=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(b.length)b.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/innovation-dashboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0ab0":function(t,e,a){"use strict";a("c432")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,r,n,o,l,c,d,u,b=a("5f5b"),f=a("b1e0"),h=(a("2dd8"),a("f9e3"),a("2b0e")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",[a("b-row",{attrs:{lg:"1"}},[a("b-col",[a("b-card",[a("b-card-text",[a("h2",{staticClass:"card-title"},[t._v("Aqualizer Dashboard")])]),a("b-card-text",{staticClass:"italic"},[t._v(t._s(t.randomQuotation))])],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",lg:"4"}},[t.faucets[0]?a("card",{attrs:{title:"Bathroom","text-large":t.faucets[0].dailyUsage.toFixed(3)+" litres"}}):t._e()],1),a("b-col",{attrs:{md:"6",lg:"4"}},[t.faucets[1]?a("card",{attrs:{title:"Kitchen","text-large":t.faucets[1].dailyUsage.toFixed(3)+" litres"}}):t._e()],1),a("b-col",{attrs:{md:"6",lg:"4"}},[t.faucets[2]?a("card",{attrs:{title:"Laundry Room","text-large":t.faucets[2].dailyUsage.toFixed(3)+" litres"}}):t._e()],1),a("b-col",{attrs:{md:"6",lg:"4"}},[a("card",{attrs:{title:"Daily usage","text-large":t.totalDailyUsage+" litres"}})],1),a("b-col",{attrs:{md:"6",lg:"4"}},[a("card",{attrs:{title:"Daily cost","text-large":t.dailyCost+" €"}})],1),a("b-col",{attrs:{md:"6",lg:"4"}},[a("card",{attrs:{title:"Monthly cost (forecast)","text-large":t.monthlyCost+" €"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12",lg:"4"}},[a("b-card",[a("BarChart",{attrs:{chartData:t.dailyData,options:t.dailyOptions}})],1)],1),a("b-col",{attrs:{md:"6",lg:"4"}},[a("b-card",[a("LineChart",{attrs:{chartData:t.dataMixed,options:t.weeklyOptions}})],1)],1),a("b-col",{attrs:{md:"6",lg:"4"}},[a("b-card",[a("PieChart",{attrs:{chartData:t.pieData,options:t.pieOptions}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12",lg:"12"}},[a("b-card",[a("BarChart",{attrs:{chartData:t.monthlyData,options:t.monthlyOptions}})],1)],1)],1)],1)],1)},p=[],j=(a("b0c0"),a("d3b7"),a("159b"),a("b680"),a("1fca")),y=j["e"].reactiveProp,m={extends:j["c"],mixins:[y],props:{chartData:{type:Object,default:null},options:{type:Object,default:{title:{display:!0,text:"Title"}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},x=m,k=a("2877"),v=Object(k["a"])(x,s,r,!1,null,null,null),C=v.exports,w=j["e"].reactiveProp,O={extends:j["a"],mixins:[w],props:{chartData:{type:Object,required:!0},options:{type:Object,default:{title:{display:!0,text:"Bar Chart Title"}}},events:{type:Array,required:!1}},data:function(){return{chart:null}},mounted:function(){this.renderChart(this.chartData,this.options),this.chart=this.$data._chart},methods:{handleEvent:function(t){this.chart.getElementAtEvent(t)[0]._index}}},D=O,_=Object(k["a"])(D,n,o,!1,null,null,null),U=_.exports,W=j["e"].reactiveProp,z={extends:j["d"],mixins:[W],props:{chartData:{type:Object,default:null},options:{type:Object,default:{title:{display:!0,text:"Title"}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},M=z,A=Object(k["a"])(M,l,c,!1,null,null,null),S=A.exports,L=j["e"].reactiveProp,F={extends:j["b"],mixins:[L],props:{chartData:{type:Object,default:null},options:{type:Object,default:{title:{display:!0,text:"Title"}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},P=F,T=Object(k["a"])(P,d,u,!1,null,null,null),E=T.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title}},[a("b-card-text",[a("b-list-group",t._l(this.items,(function(e){return a("b-list-group-item",{key:e.text,staticClass:"d-flex justify-content-between align-items-center"},["danger"===e.type?a("b-icon",{attrs:{icon:"x-square-fill",scale:"1.5",variant:"danger"}}):"success"===e.type?a("b-icon",{attrs:{icon:"check-square",scale:"1.5",variant:"success"}}):"warning"===e.type?a("b-icon",{attrs:{icon:"exclamation-triangle-fill",scale:"1.5",variant:"warning"}}):a("b-icon",{attrs:{icon:"info-circle",scale:"1.5",variant:"info"}}),t._v(" "+t._s(e.text)+" ")],1)})),1)],1)],1)},q=[],J={props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},mounted:function(){}},R=J,B=Object(k["a"])(R,N,q,!1,null,null,null),I=B.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title}},[t.textLarge?a("h2",{staticClass:"card-title"},[t._v(t._s(t.textLarge))]):t._e(),t.text?a("b-card-text",[t._v(t._s(t.text))]):t._e(),t.textItalic?a("b-card-text",{staticClass:"italic"},[t._v(t._s(t.textItalic))]):t._e()],1)},H=[],Z={props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}},text:{type:String,default:""},icon:{type:String,default:""},"text-large":{type:String,default:""},"text-italic":{type:String,default:""}}},K=Z,Q=(a("0ab0"),Object(k["a"])(K,$,H,!1,null,null,null)),G=Q.exports,V=a("d75a"),X=a("7721"),Y=a("589f"),tt=a("fcf8"),et={name:"App",components:{LineChart:C,BarChart:U,DoughnutChart:E,PieChart:S,List:I,Card:G},data:function(){return{quotations:["Thousands have lived without love, not one without water. – W.H.Auden","No Water. No Life. No Blue. No Green. – Sylvia Earle","Water is Life. Don’t Waste It.","Pure Water is the World’s First and Foremost Medicine. – Slovakian Proverb","Water is Life and Clean Water is Means Health. – Audrey Hepburn","Water is the driving force of all nature. – Leonardo da Vinci","When the well is dry, we’ll know the worth of water. – Benjamin Franklin","There is a thin line between using water and wasting water."],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],dataMixed:V,cubicCost:4.2,faucets:[],weeklyOptions:{title:{display:!0,text:"Weekly Usage (litres)"},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{stacked:!0,gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1},dailyOptions:{title:{display:!0,text:"Daily Usage (litres)"},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{stacked:!0,gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1},monthlyOptions:{title:{display:!0,text:"Monthly Usage (litres)"},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{stacked:!0,gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1},pieOptions:{title:{display:!0,text:"Daily Room Comparison (litres)"},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},computed:{mobile:function(){return this.$vuetify.breakpoint.sm},dailyData:function(){if(3===this.faucets.length){var t={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],scales:{x:{stacked:!0},y:{stacked:!0}},datasets:[{backgroundColor:this.backgroundColor[0],borderColor:this.borderColor[0],borderWidth:1,label:this.faucets[0].name,data:this.faucets[0].weeklyUsage},{backgroundColor:this.backgroundColor[1],borderColor:this.borderColor[1],borderWidth:1,label:this.faucets[1].name,data:this.faucets[1].weeklyUsage},{backgroundColor:this.backgroundColor[3],borderColor:this.borderColor[3],borderWidth:1,label:this.faucets[2].name,data:this.faucets[2].weeklyUsage}]};return t}return{}},monthlyData:function(){if(3===this.faucets.length){var t={labels:["January","February","March","April","May","June","July","August","September","November","December"],scales:{x:{stacked:!0},y:{stacked:!0}},datasets:[{backgroundColor:this.backgroundColor[4],borderColor:this.borderColor[4],borderWidth:1,label:this.faucets[0].name,data:this.faucets[0].monthlyUsage},{backgroundColor:this.backgroundColor[2],borderColor:this.borderColor[2],borderWidth:1,label:this.faucets[1].name,data:this.faucets[1].monthlyUsage},{backgroundColor:this.backgroundColor[3],borderColor:this.borderColor[3],borderWidth:1,label:this.faucets[2].name,data:this.faucets[2].monthlyUsage}]};return t}return{}},pieData:function(){if(3===this.faucets.length){var t={labels:[this.faucets[0].name,this.faucets[1].name,this.faucets[2].name],datasets:[{label:"My First Dataset",data:[this.faucets[0].dailyUsage,this.faucets[1].dailyUsage,this.faucets[2].dailyUsage],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]};return t}return{}},randomQuotation:function(){return this.quotations[Math.floor(Math.random()*this.quotations.length)]},totalDailyUsage:function(){var t=0;return this.faucets.forEach((function(e){t+=e.dailyUsage})),t.toFixed(3)},dailyCost:function(){var t=this.totalDailyUsage/1e3*this.cubicCost;return t.toFixed(2)},monthlyCost:function(){var t=30*this.dailyCost;return t.toFixed(2)}},mounted:function(){var t=this;this.fillData(),setInterval((function(){t.openFaucet(t.faucets[Math.floor(Math.random()*t.faucets.length)])}),5e3),setInterval((function(){t.runFaucets()}),500)},methods:{runFaucets:function(){this.faucets.forEach((function(t){t.running&&(t.dailyUsage+=.8)}))},openFaucet:function(t){if(!1===t.running){t.running=!0;var e=Math.floor(10*Math.random());setTimeout((function(){t.running=!1}),1e3*e)}},simulateRandom:function(){var t=Math.floor(3*Math.random()),e=Math.floor(3*Math.random());this.faucets[i].statuslist[t].status=["danger","success","warning"][e],"success"===this.faucets[i].statuslist[t].status&&this.resolvedIncidentsCount++,this.isSimulating&&setTimeout(this.simulateRandom,300)},fillData:function(){this.faucets=[],this.faucets.push(X),this.faucets.push(Y),this.faucets.push(tt)}}},at=et,st=(a("034f"),Object(k["a"])(at,g,p,!1,null,null,null)),rt=st.exports;h["default"].use(b["a"]),h["default"].use(f["a"]),h["default"].config.productionTip=!1,new h["default"]({render:function(t){return t(rt)}}).$mount("#app")},"589f":function(t){t.exports=JSON.parse('{"name":"Kitchen","statustext":"","running":false,"dailyUsage":10.621,"weeklyUsage":[184,221,154,290,162,148,0],"monthlyUsage":[4239,3920,4548,5123,3259,4138,353,4548,5123,3920,10]}')},7721:function(t){t.exports=JSON.parse('{"name":"Bathroom","statustext":"","running":false,"dailyUsage":40.345,"weeklyUsage":[184,221,154,290,162,148,0],"monthlyUsage":[4239,3920,4548,5123,3259,4138,353,4548,5123,3920,10]}')},"85ec":function(t,e,a){},c432:function(t,e,a){},d75a:function(t){t.exports=JSON.parse('{"labels":["Week 43","Week 44","Week 45","Week 46","Week 47","Week 48","Week 49"],"datasets":[{"axis":"y","label":"This year","data":[65,59,80,81,56,55,40],"fill":true,"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],"borderColor":["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],"borderWidth":1},{"label":"Last year","data":[50,50,50,50,60,70,80],"type":"line"}]}')},fcf8:function(t){t.exports=JSON.parse('{"name":"Laundry Room","statustext":"","running":false,"dailyUsage":20.809,"weeklyUsage":[184,221,154,290,162,148,0],"monthlyUsage":[4239,3920,4548,5123,3259,4138,653,4148,4123,3920,40]}')}});
//# sourceMappingURL=app.fd53c112.js.map
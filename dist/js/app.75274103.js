(function(t){function e(e){for(var i,o,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=(a("d3b7"),a("bc3a")),s=a.n(r),o={baseURL:"https://fast-sands-51937.herokuapp.com/"},n=s.a.create(o);n.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=n,window.axios=n,Object.defineProperties(t.prototype,{axios:{get:function(){return n}},$axios:{get:function(){return n}}})},i["a"].use(Plugin);var l=n,c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon"),a("v-app-bar-title",[t._v("Cookie Project")])],1),a("ImagesBoard")],1)],1)},p=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.images_store.length?t._e():a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"11"}},[a("v-card",{staticStyle:{background:"none"},attrs:{tile:"",flat:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.pagesLimit,(function(t){return a("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{cols:6,md:2}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"200",type:"image",loading:!0}})],1)})),1)],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"11"}},[a("v-card",{staticStyle:{background:"none"},attrs:{tile:"",flat:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.images_store,(function(e,i){return a("v-col",{key:i,staticClass:"d-flex child-flex",attrs:{cols:6,md:2}},[a("v-card",{staticClass:"d-flex transition-animate",staticStyle:{cursor:"pointer"},attrs:{tile:"",elevation:"7"},on:{click:function(a){return t.showDialog(e)}}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://lohas.nicoseiga.jp/thumb/"+e.sid+"i","aspect-ratio":"1"}})],1)],1)})),1)],1)],1)],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.total_pages>1,expression:"total_pages > 1"}],staticClass:"px-2",attrs:{cols:"3"}},[a("Pagination",{attrs:{limit:t.pagesLimit,length:t.total_pages,page:t.jumpPage}})],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.total_pages>1,expression:"total_pages > 1"}],staticClass:"px-0 pr-2 text-right hidden-sm-and-down",attrs:{cols:"1"}},[a("v-btn",{attrs:{depressed:"",rounded:"",outlined:"",color:"grey darken-3",height:"40"},on:{click:function(e){t.jumpPage=Number(t.page)>t.total_pages||Number(t.page)<1?t.jumpPage:Number(t.page)}}},[t._v(" 跳转 ")])],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.total_pages>1,expression:"total_pages > 1"}],staticClass:"px-0 hidden-sm-and-down",attrs:{cols:"1"}},[a("v-text-field",{attrs:{solo:"",flat:"",rounded:"",outlined:"",color:"indigo",dense:"",rules:[t.rules.required],type:"number"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-row",{staticClass:"white",staticStyle:{position:"relative"},attrs:{"no-gutters":""}},[a("div",{staticStyle:{position:"absolute",right:"5px",top:"5px","z-index":"100"}},[a("v-btn",{staticClass:"black--text font-weight-thin hidden-md-and-up",staticStyle:{opacity:"0.3","font-size":"20px",height:"35px",width:"35px"},attrs:{fab:"",depressed:"",color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("X")])],1),t.dialog?a("v-card",{staticClass:"d-flex",attrs:{width:"500px",flat:"",tile:""}},[a("v-img",{staticStyle:{position:"absolute",filter:"blur(20px)",height:"100%",width:"100%"},attrs:{src:"https://lohas.nicoseiga.jp/thumb/"+t.dialogData.sid+"i","aspect-ratio":"1"}}),a("v-img",{attrs:{src:t.checkUrl(t.dialogData),"aspect-ratio":"1","lazy-src":"https://lohas.nicoseiga.jp/thumb/"+t.dialogData.sid+"i",contain:""}})],1):t._e(),a("v-card",{staticClass:"hidden-sm-and-down",attrs:{flat:"",width:"300px"}},[a("v-row",{staticClass:"fill-height",attrs:{justify:"start",align:"start","no-gutters":"",dense:""}},[a("v-list",{attrs:{width:"300px"}},t._l(t.listProps,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),"tags"!==e.prop?a("v-list-item-subtitle",{staticClass:"text-div",class:t.jump_tab(e.prop)?"blue--text lighten-3":"",style:{cursor:t.jump_tab(e.prop)?"pointer":""},on:{click:function(a){return t.jumpNewTab(e)}}},[t._v(t._s(t.dialogData[e.prop]))]):a("v-list-item-action-text",t._l(t.dialogData[e.prop],(function(e,i){return a("v-chip",{key:i,staticClass:"ma-1 my-2 white--text",attrs:{color:t.colorList[i%t.colorList.length]}},[a("span",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"200px"}},[t._v(t._s(e))])])})),1)],1)],1)})),1)],1)],1),a("v-card",{staticClass:"hidden-md-and-up",attrs:{flat:"",width:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{justify:"start",align:"start","no-gutters":"",dense:""}},[a("v-list",{attrs:{width:"300px"}},t._l(t.listProps,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),"tags"!==e.prop?a("v-list-item-subtitle",{staticClass:"text-div",class:t.jump_tab(e.prop)?"blue--text lighten-3":"",style:{cursor:t.jump_tab(e.prop)?"pointer":""},on:{click:function(a){return t.jumpNewTab(e)}}},[t._v(t._s(t.dialogData[e.prop]))]):a("v-list-item-action-text",t._l(t.dialogData[e.prop],(function(e,i){return a("v-chip",{key:i,staticClass:"ma-1 my-2 white--text",attrs:{color:t.colorList[i%t.colorList.length]}},[a("span",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"200px"}},[t._v(t._s(e))])])})),1)],1)],1)})),1)],1)],1)],1)],1)],1)},d=[],g=a("5530"),m=(a("8a79"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-pagination",{attrs:{length:t.length,"next-icon":t.nextIcon,"prev-icon":t.prevIcon,page:t.page,"total-visible":t.totalVisible},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})}),f=[],h=(a("a9e3"),"getPageImages"),v="loadPageImages",b="getTotalPages",w="loadTotalPages",x={name:"Pagination",props:{nextIcon:{type:String,required:!1,default:"mdi-chevron-right"},prevIcon:{type:String,required:!1,default:"mdi-chevron-left"},totalVisible:{type:Number,required:!1,default:7},length:{type:Number,required:!1,default:50},limit:{type:Number,required:!1,default:20},page:{type:Number,required:!1,default:1}},watch:{page:function(t){this.$store.state.images=[],this.$store.dispatch(h,{page:t,limit:this.limit})}}},_=x,y=a("2877"),j=a("6544"),P=a.n(j),k=a("891e"),C=Object(y["a"])(_,m,f,!1,null,"16415559",null),V=C.exports;P()(C,{VPagination:k["a"]});var O=a("2f62"),S={name:"ImagesBoard",components:{Pagination:V},data:function(){return{dialog:!1,dialogData:{},listProps:[{prop:"username",title:"作者"},{prop:"title",title:"标题"},{prop:"description",title:"简介"},{prop:"sid",title:"静画id"},{prop:"created",title:"投稿时间"},{prop:"tags",title:"标签"}],colorList:["indigo","orange","primary","green","teal"],pagesLimit:20,rules:{required:function(t){return!!t||"页数我忘记了啊!"}},jumpPage:1,page:1}},methods:{showDialog:function(t){this.dialog=!0,this.dialogData=t},jump_tab:function(t){return"username"===t||"sid"===t},jumpNewTab:function(t){var e="https://seiga.nicovideo.jp";this.jump_tab(t.prop)&&("sid"===t.prop?e+="/seiga/im"+this.dialogData["sid"]:e+="/user/illust/"+this.dialogData["user_id"],window.open(e,"_bank"))},checkUrl:function(t){return""===t.cdn_url||t.cdn_url.endsWith(".text/html")?t.source_url:t.cdn_url}},computed:Object(g["a"])({},Object(O["b"])({images_store:function(t){return t.images},total_pages:function(t){return t.totalPages}})),created:function(){this.$store.dispatch(h,{page:1,limit:this.pagesLimit}),this.$store.dispatch(b,{limit:this.pagesLimit})}},L=S,I=(a("c6f5"),a("8336")),D=a("b0af"),N=a("cc20"),T=a("62ad"),q=a("a523"),$=a("169a"),B=a("adda"),A=a("8860"),M=a("da13"),z=a("5d23"),E=a("0fd9"),U=a("3129"),J=a("8654"),R=Object(y["a"])(L,u,d,!1,null,null,null),F=R.exports;P()(R,{VBtn:I["a"],VCard:D["a"],VChip:N["a"],VCol:T["a"],VContainer:q["a"],VDialog:$["a"],VImg:B["a"],VList:A["a"],VListItem:M["a"],VListItemActionText:z["a"],VListItemContent:z["b"],VListItemSubtitle:z["c"],VListItemTitle:z["d"],VRow:E["a"],VSkeletonLoader:U["a"],VTextField:J["a"]});var W={name:"App",components:{ImagesBoard:F}},X=W,G=a("7496"),H=a("40dc"),K=a("5bc1"),Q=a("bb78"),Y=a("f6c4"),Z=Object(y["a"])(X,c,p,!1,null,null,null),tt=Z.exports;P()(Z,{VApp:G["a"],VAppBar:H["a"],VAppBarNavIcon:K["a"],VAppBarTitle:Q["a"],VMain:Y["a"]});var et=a("8c4f");i["a"].use(et["a"]);var at,it,rt=[],st=new et["a"]({mode:"history",base:"/",routes:rt}),ot=st,nt=a("ade3");i["a"].use(O["a"]);var lt=new O["a"].Store({state:{images:[],totalPages:1},mutations:(at={},Object(nt["a"])(at,v,(function(t,e){t.images=e})),Object(nt["a"])(at,w,(function(t,e){t.totalPages=Math.ceil(e)})),at),actions:(it={},Object(nt["a"])(it,h,(function(t,e){l({url:"/illust?pn="+e["page"]+"&limit="+e["limit"],method:"get"}).then((function(e){return t.commit(v,e.data)}))})),Object(nt["a"])(it,b,(function(t,e){l({url:"/total",method:"get"}).then((function(a){return t.commit(w,a.data.total/e["limit"])}))})),it),modules:{}}),ct=a("f309");i["a"].use(ct["a"]);var pt=new ct["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:ot,store:lt,vuetify:pt,render:function(t){return t(tt)}}).$mount("#app")},c6f5:function(t,e,a){"use strict";a("dc0c")},dc0c:function(t,e,a){}});
//# sourceMappingURL=app.75274103.js.map
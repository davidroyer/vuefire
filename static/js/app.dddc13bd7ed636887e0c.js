webpackJsonp([2,0],[function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var o=n(3),s=e(o),a=n(78),i=e(a),r=n(87),u=e(r),l=n(88),c=e(l),d=n(8),f=n(77),p=e(f);n(66);var m=n(54),h=e(m);n(65);var v=n(79),g=e(v),b=n(23),_=e(b),w=n(80),P=e(w),y=n(81),C=e(y);s.default.use(p.default),s.default.use(c.default),s.default.use(h.default),s.default.use(u.default);var k=(d.store.state,new u.default({mode:"history",base:t,routes:[{path:"/",component:P.default},{path:"*/admin",component:g.default},{path:"*/dashboard",component:_.default},{path:"*/login",component:P.default},{path:"*/logout",component:C.default}]}));new s.default({el:"#app",router:k,render:function(t){return t(i.default)},data:{sharedStore:d.store}})}).call(e,"/")},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(74),s={apiKey:"AIzaSyCNIjlw4gVqGQgSr6pvcHqmWK4eA1KnTyk",authDomain:"vue-firebase-e123d.firebaseapp.com",databaseURL:"https://vue-firebase-e123d.firebaseio.com",storageBucket:"vue-firebase-e123d.appspot.com",messagingSenderId:"121034532316"},a=o.initializeApp(s);t.exports.db=a.database(),t.exports.auth=o.auth();e.store={state:{authorized:null},logUserIn:function(){this.state.authorized=!0},logUserOut:function(){this.state.authorized=!1}}},,,,,,,,,,,,,,,function(t,e,n){var o,s;n(69),o=n(47);var a=n(84);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8);e.default={name:"app",components:{},data:function(){return{authorized:!1,email:"droyer01@gmail.com",password:"Dance4life",posts:[],photo:null,sharedState:o.store.state,menuIsOpen:!1}},firebase:{},created:function(){this.getPosts(),this.authCheck()},mounted:function(){},methods:{handleClick:function(){alert("click")},toggleMenu:function(){this.menuIsOpen=!this.menuIsOpen},login:function(){var t=this.email,e=this.password;console.log("worked"),o.auth.signInWithEmailAndPassword(t,e).catch(function(t){t.code,t.message}),this.$router.push({path:"admin"})},logout:function(){o.auth.signOut().then(function(){},function(t){})},signup:function(){o.auth.createUserWithEmailAndPassword(email,password).catch(function(t){t.code,t.message})},authCheck:function(){var t=this;o.auth.onAuthStateChanged(function(e){e?(console.log("signed in"),t.authorized=!0,o.store.logUserIn()):(console.log("signed out"),o.store.logUserOut(),t.authorized=!1)})},getPosts:function(){}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),a=o(s);e.default={components:{Dashboard:a.default},methods:{logoutClicked:function(){this.$emit("logoutClicked")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),s=(o.db.ref("users"),o.db.ref("posts"));e.default={data:function(){return{authorized:!0,email:"droyer01@gmail.com",password:"Dance4life",photo:null,sharedStore:o.store,edit:null,uploadProgress:0,newImageURL:null,open:!1,createNewPost:!1,newTitle:"",newContent:""}},firebase:{dbPosts:s},methods:{toggle:function(){this.open=!this.open},handleNewPost:function(){this.createNewPost=!0,this.toggle()},handleEditClick:function(t){var e=t;this.edit=e,console.log(t),this.toggle()},cancelEdit:function(){this.open=!1,this.edit=null},cancelNewPost:function(){this.open=!1,this.createNewPost=!1,this.newTitle="",this.newContent=""},saveNewPost:function(t,e){s.push({title:t,content:e}),this.toggle()},deletePost:function(t){s.child(t[".key"]).remove()},handleUpload:function(t){var e=this,n=t.target.files[0],o=firebase.storage().ref("folder1/"+n.name),s=o.put(n);s.on("state_changed",function(t){e.uploadProgress=Math.round(t.bytesTransferred/t.totalBytes*100)},function(t){console.log(t)},function(){console.log(s.snapshot.downloadURL),e.newImageURL=s.snapshot.downloadURL})},addPost:function(){s.push({title:"My Pushed Title 4",content:"my post content 4"})},updatePost:function(t){var e=t.title,n=t.content,o=this;s.child(t[".key"]).set({title:e,content:n},function(t){t?o.$message.error("Oops, this is a error message."):o.$message({message:"Congrats, this is a success message.",type:"success"})})},getPosts:function(){}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){var o,s;n(68),o=n(45);var a=n(83);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,n){var o,s;n(67),o=n(46);var a=n(82);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,n){var o,s;n(71),o=n(48);var a=n(86);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,n){var o,s;n(70),o=n(49);var a=n(85);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("dashboard")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{attrs:{title:"VueFire"}},[n("mu-icon-button",{attrs:{icon:"menu"},on:{click:function(e){t.toggleMenu()}},slot:"left"}),t._v(" "),t.sharedState.authorized?n("mu-flat-button",{key:"admin",attrs:{color:"white",label:"Logout"},on:{click:t.logout},slot:"right"}):n("mu-flat-button",{key:"public",attrs:{color:"white",label:"Login"},on:{click:t.login},slot:"right"})],1),t._v(" "),n("mu-drawer",{attrs:{left:"",open:t.menuIsOpen,width:"280px"},on:{close:function(e){t.toggleMenu()}}},[n("mu-appbar",{attrs:{title:"Muse UI"}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/logout"}},[t._v("Log out")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{path:"/vuefire/admin"},append:""}},[t._v("Admin")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("Log in")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1)]),t._v(" "),n("mu-flat-button",{staticClass:"demo-flat-button",attrs:{label:"Close",backgroundColor:"#eee"},on:{click:function(e){t.menuIsOpen=!1}}})],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"restricted"},[n("mu-list",t._l(t.dbPosts,function(e){return n("mu-list-item",{key:e[".key"],attrs:{title:e.title}},[n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-icon-button",{attrs:{icon:"edit"},on:{click:function(n){t.handleEditClick(e)}}}),t._v(" "),n("mu-icon-button",{attrs:{icon:"delete"},on:{click:function(n){t.deletePost(e)}}})],1)])}))],1),t._v(" "),n("mu-drawer",{attrs:{right:"",open:t.open},on:{close:function(e){t.toggle()}}},[t.edit?n("div",{staticClass:"editPost"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{label:"Post Title"},domProps:{value:t.edit.title},on:{input:function(e){t.edit.title=e}}}),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.content,expression:"edit.content"}],attrs:{label:"Post Content",multiLine:"",rows:3},domProps:{value:t.edit.content},on:{input:function(e){t.edit.content=e}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.updatePost(t.edit)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelEdit}})],1):t._e(),t._v(" "),t.createNewPost?n("div",{staticClass:"createNewPost"},[n("h1",[t._v("New Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{label:"Post Title",labelFloat:""},domProps:{value:t.newTitle},on:{input:function(e){t.newTitle=e}}}),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newContent,expression:"newContent"}],attrs:{label:"Post Content",multiLine:"",rows:3,labelFloat:""},domProps:{value:t.newContent},on:{input:function(e){t.newContent=e}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.saveNewPost(t.newTitle,t.newContent)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelNewPost}})],1):t._e()]),t._v(" "),n("mu-float-button",{staticClass:"addPost",attrs:{icon:"add",secondary:"",mini:""},on:{click:t.handleNewPost}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n  Logout\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n  Login\n")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.dddc13bd7ed636887e0c.js.map
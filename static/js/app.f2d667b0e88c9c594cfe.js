webpackJsonp([2,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(3),s=o(i),a=n(87),r=o(a),l=n(104),d=o(l),c=n(105),u=o(c),f=n(6),h=n(86),m=o(h);n(71);var p=n(59),v=o(p);n(70);var g=n(88),b=o(g),w=n(89),_=o(w),P=n(94),C=o(P),y=n(24),k=o(y),E=n(91),N=o(E),x=n(92),F=o(x);s.default.use(m.default),s.default.use(u.default),s.default.use(v.default),s.default.use(d.default);var T=f.store.state,M=new d.default({mode:"history",base:"/vuefire/",routes:[{path:"/",component:N.default},{path:"*/editor",component:_.default},{path:"*/mobile-editor",component:C.default},{path:"*/admin",component:b.default},{path:"*/dashboard",component:k.default},{path:"*/login",component:N.default},{path:"*/logout",component:F.default}]});M.beforeEach(function(t,e,n){T.mainMenuIsOpen?(T.mainMenuIsOpen=!1,n()):n()}),new s.default({el:"#app",router:M,render:function(t){return t(r.default)},data:{sharedStore:f.store}})},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(83),i={apiKey:"AIzaSyCNIjlw4gVqGQgSr6pvcHqmWK4eA1KnTyk",authDomain:"vue-firebase-e123d.firebaseapp.com",databaseURL:"https://vue-firebase-e123d.firebaseio.com",storageBucket:"vue-firebase-e123d.appspot.com",messagingSenderId:"121034532316"},s=o.initializeApp(i);t.exports.db=s.database(),t.exports.auth=o.auth();e.store={state:{authorized:null,mainMenuIsOpen:!1},logUserIn:function(){this.state.authorized=!0},logUserOut:function(){this.state.authorized=!1}}},,,,,,,,,,,,,,,,,,function(t,e,n){var o,i;n(76),o=n(49);var s=n(99);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6);e.default={name:"app",components:{},data:function(){return{authorized:!1,email:"droyer01@gmail.com",password:"Dance4life",posts:[],photo:null,sharedState:o.store.state,value:""}},firebase:{},created:function(){this.getPosts(),this.authCheck()},mounted:function(){},methods:{routerGo:function(){this.toggleMenu(),this.$router.push({path:"admin"})},handleChange:function(t){this.value=t},handleClick:function(){alert("click")},toggleMenu:function(){this.sharedState.mainMenuIsOpen=!this.sharedState.mainMenuIsOpen},login:function(){var t=this.email,e=this.password;console.log("worked"),o.auth.signInWithEmailAndPassword(t,e).catch(function(t){t.code,t.message}),this.$router.push({path:"admin"})},logout:function(){o.auth.signOut().then(function(){},function(t){})},signup:function(){o.auth.createUserWithEmailAndPassword(email,password).catch(function(t){t.code,t.message})},authCheck:function(){var t=this;o.auth.onAuthStateChanged(function(e){e?(console.log("signed in"),t.authorized=!0,o.store.logUserIn()):(console.log("signed out"),o.store.logUserOut(),t.authorized=!1)})},getPosts:function(){}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(24),s=o(i);e.default={components:{Dashboard:s.default},methods:{logoutClicked:function(){this.$emit("logoutClicked")}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(90),s=o(i);e.default={components:{DashboardEditor:s.default},methods:{logoutClicked:function(){this.$emit("logoutClicked")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=(o.db.ref("users"),o.db.ref("posts"));e.default={data:function(){return{authorized:!0,email:"droyer01@gmail.com",password:"Dance4life",photo:null,sharedStore:o.store,edit:null,uploadProgress:0,newImageURL:null,open:!1,createNewPost:!1,newTitle:"",newContent:""}},components:{},firebase:{dbPosts:i},methods:{testEnter:function(){alert("enter works")},toggle:function(){this.open=!this.open},handleNewPost:function(){this.createNewPost=!0,this.toggle()},handleEditClick:function(t){var e=t;this.edit=e,console.log(t),this.toggle()},cancelEdit:function(){this.open=!1,this.edit=null},cancelNewPost:function(){this.open=!1,this.createNewPost=!1,this.newTitle="",this.newContent=""},saveNewPost:function(t,e){i.push({title:t,content:e}),this.toggle()},deletePost:function(t){i.child(t[".key"]).remove()},handleUpload:function(t){var e=this,n=t.target.files[0],o=firebase.storage().ref("folder1/"+n.name),i=o.put(n);i.on("state_changed",function(t){e.uploadProgress=Math.round(t.bytesTransferred/t.totalBytes*100)},function(t){console.log(t)},function(){console.log(i.snapshot.downloadURL),e.newImageURL=i.snapshot.downloadURL})},addPost:function(){i.push({title:"My Pushed Title 4",content:"my post content 4"})},updatePost:function(t){var e=t.title,n=t.content,o=this;i.child(t[".key"]).set({title:e,content:n},function(t){t?o.$message.error("Oops, this is a error message."):(o.$message({message:"Congrats, this is a success message.",type:"success"}),o.toggle())})},getPosts:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),i=n(6),s=(i.db.ref("users"),i.db.ref("posts"));e.default={data:function(){return{authorized:!0,email:"droyer01@gmail.com",password:"Dance4life",photo:null,sharedStore:i.store,edit:null,uploadProgress:0,newImageURL:null,open:!1,createNewPost:!1,newTitle:"",newContent:"",contentForEditor:"test",htmlForEditor:null}},components:{VueEditor:o.VueEditor},computed:{},firebase:{dbPosts:s},methods:{testFixed:function(){alert("works")},setEditorContent:function(){this.htmlForEditor=this.edit.content},handleUpdatedContent:function(t){this.newContent=t},handleEditedContent:function(t){this.edit.content=t},testEnter:function(){alert("enter works")},toggle:function(){this.open=!this.open},handleNewPost:function(){var t=this;t.createNewPost=!0,t.toggle(),t.$nextTick(function(){t.handleMobileEditing()})},handleEditClick:function(t){var e=this;e.edit=t,e.toggle(),e.$nextTick(function(){e.htmlForEditor=e.edit.content,e.handleMobileEditing()})},handleMobileEditing:function(){var t=document.getElementById("quillWrapper");console.log(t);var e=document.querySelector(".ql-toolbar");e.addEventListener("mousedown",function(t){console.log(t),t.preventDefault()}),e.addEventListener("click",function(t){console.log(t),t.preventDefault()})},cancelEdit:function(){this.open=!1,this.edit=null},cancelNewPost:function(){this.open=!1,this.createNewPost=!1,this.newTitle="",this.newContent=""},saveNewPost:function(t,e){s.push({title:t,content:e}),this.toggle(),this.createNewPost=!1,this.newTitle="",this.newContent=""},deletePost:function(t){s.child(t[".key"]).remove()},handleUpload:function(t){var e=this,n=t.target.files[0],o=firebase.storage().ref("folder1/"+n.name),i=o.put(n);i.on("state_changed",function(t){e.uploadProgress=Math.round(t.bytesTransferred/t.totalBytes*100)},function(t){console.log(t)},function(){console.log(i.snapshot.downloadURL),e.newImageURL=i.snapshot.downloadURL})},addPost:function(){s.push({title:"My Pushed Title 4",content:"my post content 4"})},updatePost:function(t){var e=t.title,n=t.content,o=this;s.child(t[".key"]).set({title:e,content:n},function(t){t?o.$message.error("Oops, this is a error message."):(o.$message({message:"Congrats, this is a success message.",type:"success"}),o.toggle())})},getPosts:function(){}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),i=n(6),s=(i.db.ref("users"),i.db.ref("posts"));e.default={data:function(){return{authorized:!0,email:"droyer01@gmail.com",password:"Dance4life",photo:null,sharedStore:i.store,edit:null,uploadProgress:0,newImageURL:null,open:!1,createNewPost:!1,newTitle:"",newContent:"",contentForEditor:"test",htmlForEditor:null}},components:{VueEditor:o.VueEditor},computed:{},firebase:{dbPosts:s},methods:{testFixed:function(){alert("works")},setEditorContent:function(){this.htmlForEditor=this.edit.content},handleUpdatedContent:function(t){this.newContent=t},handleEditedContent:function(t){this.edit.content=t},testEnter:function(){alert("enter works")},toggle:function(){this.open=!this.open},handleNewPost:function(){var t=this;t.createNewPost=!0,t.toggle(),t.$nextTick(function(){t.handleMobileEditing()})},handleEditClick:function(t){var e=this;e.edit=t,e.toggle(),e.$nextTick(function(){e.htmlForEditor=e.edit.content,e.handleMobileEditing()})},handleMobileEditing:function(){var t=document.getElementById("quillWrapper");console.log(t);var e=document.querySelector(".ql-toolbar");e.addEventListener("mousedown",function(t){console.log(t),t.preventDefault()}),e.addEventListener("click",function(t){console.log(t),t.preventDefault()})},cancelEdit:function(){this.open=!1,this.edit=null},cancelNewPost:function(){this.open=!1,this.createNewPost=!1,this.newTitle="",this.newContent=""},saveNewPost:function(t,e){s.push({title:t,content:e}),this.toggle(),this.createNewPost=!1,this.newTitle="",this.newContent=""},deletePost:function(t){s.child(t[".key"]).remove()},handleUpload:function(t){var e=this,n=t.target.files[0],o=firebase.storage().ref("folder1/"+n.name),i=o.put(n);i.on("state_changed",function(t){e.uploadProgress=Math.round(t.bytesTransferred/t.totalBytes*100)},function(t){console.log(t)},function(){console.log(i.snapshot.downloadURL),e.newImageURL=i.snapshot.downloadURL})},addPost:function(){s.push({title:"My Pushed Title 4",content:"my post content 4"})},updatePost:function(t){var e=t.title,n=t.content,o=this;s.child(t[".key"]).set({title:e,content:n},function(t){t?o.$message.error("Oops, this is a error message."):(o.$message({message:"Congrats, this is a success message.",type:"success"}),o.toggle())})},getPosts:function(){}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),s=n(93);o(s);e.default={data:function(){return{clickScreenHeight:0,mouseScreenHeight:0}},components:{VueEditor:i.VueEditor},mounted:function(){this.getAvailableHeight()},methods:{logoutClicked:function(){this.$emit("logoutClicked")},getAvailableHeight:function(){var t=document.getElementById("quillWrapper");console.log(t);var e=document.querySelector(".ql-toolbar"),n=this;e.addEventListener("mousedown",function(t){t.preventDefault(),n.mouseScreenHeight=window.screen.availHeight}),e.addEventListener("click",function(t){t.preventDefault(),n.clickScreenHeight=window.screen.availHeight})}}}},,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){var o,i;n(75),o=n(46);var s=n(98);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(73),o=n(47);var s=n(96);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(72),o=n(48);var s=n(95);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(74),o=n(50);var s=n(97);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(80),o=n(51);var s=n(103);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(77),o=n(52);var s=n(100);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(78),o=n(53);var s=n(101);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(79),o=n(54);var s=n(102);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("dashboard-editor")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("dashboard")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"restricted"},[n("transition-group",{staticClass:"mu-list",attrs:{name:"list-complete",tag:"div"}},t._l(t.dbPosts,function(e){return n("mu-list-item",{key:e[".key"],staticClass:"list-complete-item",attrs:{title:e.title}},[n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-icon-button",{attrs:{icon:"edit"},on:{click:function(n){t.handleEditClick(e)}}}),t._v(" "),n("mu-icon-button",{attrs:{icon:"delete"},on:{click:function(n){t.deletePost(e)}}})],1)])}))],1),t._v(" "),n("mu-drawer",{attrs:{right:"",open:t.open},on:{close:function(e){t.toggle()}}},[t.edit?n("div",{staticClass:"editPost"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{label:"Post Title"},domProps:{value:t.edit.title},on:{input:function(e){t.edit.title=e}}}),t._v(" "),n("label",[t._v("Post Content")]),t._v(" "),n("vue-editor",{attrs:{"use-save-button":!1,editorContent:t.htmlForEditor},on:{"editor-updated":t.handleEditedContent}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.updatePost(t.edit)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelEdit}})],1):t._e(),t._v(" "),t.createNewPost?n("div",{staticClass:"createNewPost"},[n("h1",[t._v("New Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{label:"Post Title",labelFloat:""},domProps:{value:t.newTitle},on:{input:function(e){t.newTitle=e}}}),t._v(" "),n("vue-editor",{attrs:{"use-save-button":!1},on:{"editor-updated":t.handleUpdatedContent}}),t._v(" "),n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.saveNewPost(t.newTitle,t.newContent)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelNewPost}})],1)],1):t._e()]),t._v(" "),n("mu-float-button",{staticClass:"addPost",attrs:{icon:"add",secondary:""},on:{click:t.handleNewPost}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{attrs:{title:"VueFire"}},[n("mu-icon-button",{attrs:{icon:"menu"},on:{click:function(e){t.toggleMenu()}},slot:"left"}),t._v(" "),t.sharedState.authorized?n("mu-flat-button",{key:"admin",attrs:{color:"white",label:"Logout"},on:{click:t.logout},slot:"right"}):n("mu-flat-button",{key:"public",attrs:{color:"white",label:"Login"},on:{click:t.login},slot:"right"})],1),t._v(" "),n("mu-drawer",{attrs:{left:"",open:t.sharedState.mainMenuIsOpen,width:"280px"},on:{close:function(e){t.toggleMenu()}}},[n("mu-appbar",{attrs:{title:"Menu"}},[n("mu-icon-button",{attrs:{icon:"close"},on:{click:function(e){t.sharedState.mainMenuIsOpen=!1}},slot:"right"})],1),t._v(" "),n("ul",{staticClass:"main-menu"},[n("li",[n("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/logout"}},[t._v("Log out")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{path:"/admin"}}},[t._v("Admin")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/editor"}},[t._v("Editor")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/mobile-editor"}},[t._v("Mobile Editor")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("Log in")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1)])],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"restricted"},[n("transition-group",{staticClass:"mu-list",attrs:{name:"list-complete",tag:"div"}},t._l(t.dbPosts,function(e){return n("mu-list-item",{key:e[".key"],staticClass:"list-complete-item",attrs:{title:e.title}},[n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-icon-button",{attrs:{icon:"edit"},on:{click:function(n){t.handleEditClick(e)}}}),t._v(" "),n("mu-icon-button",{attrs:{icon:"delete"},on:{click:function(n){t.deletePost(e)}}})],1)])}))],1),t._v(" "),n("mu-drawer",{attrs:{right:"",open:t.open},on:{close:function(e){t.toggle()}}},[t.edit?n("div",{staticClass:"editPost"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{label:"Post Title"},domProps:{value:t.edit.title},on:{input:function(e){t.edit.title=e}}}),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.content,expression:"edit.content"}],attrs:{label:"Post Content",multiLine:"",rows:3},domProps:{value:t.edit.content},on:{input:function(e){t.edit.content=e}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.updatePost(t.edit)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelEdit}})],1):t._e(),t._v(" "),t.createNewPost?n("div",{staticClass:"createNewPost"},[n("h1",[t._v("New Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{label:"Post Title",labelFloat:""},domProps:{value:t.newTitle},on:{input:function(e){t.newTitle=e}}}),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newContent,expression:"newContent"}],attrs:{label:"Post Content",multiLine:"",rows:3,labelFloat:""},domProps:{value:t.newContent},on:{input:function(e){t.newContent=e}},nativeOn:{keyup:function(e){t._k(e.keyCode,"enter",13)||(e.preventDefault(),t.saveNewPost(t.newTitle,t.newContent))}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.saveNewPost(t.newTitle,t.newContent)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelNewPost}})],1):t._e()]),t._v(" "),n("mu-float-button",{staticClass:"addPost",attrs:{icon:"add",secondary:""},on:{click:t.handleNewPost}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n  Logout\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"restricted"},[n("transition-group",{staticClass:"mu-list",attrs:{name:"list-complete",tag:"div"}},t._l(t.dbPosts,function(e){return n("mu-list-item",{key:e[".key"],staticClass:"list-complete-item",attrs:{title:e.title}},[n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-icon-button",{attrs:{icon:"edit"},on:{click:function(n){t.handleEditClick(e)}}}),t._v(" "),n("mu-icon-button",{attrs:{icon:"delete"},on:{click:function(n){t.deletePost(e)}}})],1)])}))],1),t._v(" "),n("mu-drawer",{attrs:{right:"",open:t.open},on:{close:function(e){t.toggle()}}},[t.edit?n("div",{staticClass:"editPost"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{label:"Post Title"},domProps:{value:t.edit.title},on:{input:function(e){t.edit.title=e}}}),t._v(" "),n("label",[t._v("Post Content")]),t._v(" "),n("vue-editor",{attrs:{"use-save-button":!1,editorContent:t.htmlForEditor},on:{"editor-updated":t.handleEditedContent}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.updatePost(t.edit)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelEdit}})],1):t._e(),t._v(" "),t.createNewPost?n("div",{staticClass:"createNewPost"},[n("h1",[t._v("New Post")]),t._v(" "),n("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{label:"Post Title",labelFloat:""},domProps:{value:t.newTitle},on:{input:function(e){t.newTitle=e}}}),t._v(" "),n("vue-editor",{attrs:{"use-save-button":!1},on:{"editor-updated":t.handleUpdatedContent}}),t._v(" "),n("div",{staticClass:"icon-button-contaner",slot:"right"},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Save",primary:""},on:{click:function(e){t.saveNewPost(t.newTitle,t.newContent)}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"Cancel",secondary:""},on:{click:t.cancelNewPost}})],1)],1):t._e()]),t._v(" "),n("mu-float-button",{staticClass:"addPost",attrs:{icon:"add",secondary:""},on:{click:t.handleNewPost}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("h3",[t._v("Click: "+t._s(t.clickScreenHeight))]),t._v(" "),n("h3",[t._v("Mouse: "+t._s(t.mouseScreenHeight))]),t._v(" "),n("vue-editor")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n  Login\n")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.f2d667b0e88c9c594cfe.js.map
<template>
  <div id="app">


    <transition-group name="slide" mode="in-out">

      <div class="wrapper" v-if="!sharedState.authorized":key="login">
        <el-button   type="primary" @click="login">Login</el-button>
        <el-button  type="primary" @click="signup">Signup</el-button>
      </div>
        <div class="wrapper" v-else :key="logout">
          <el-button  type="primary"  @click="logout">Logout</el-button>
        </div>

    </transition-group>

    <ul>
       <li>
         <router-link to="/logout">Log out</router-link>

       </li>
        <li>
          <router-link to="/login">Log in</router-link>
        </li>
       <li>
         <router-link to="/dashboard">Dashboard</router-link>

       </li>
    </ul>

    <!-- <ul>
      <li v-for="post in fbPosts">
        {{post.title}}
        {{post['.key']}}
      </li>
    </ul> -->
    <!-- <button type="button" name="button" @click="login">
    Login</button>
    <button type="button" name="button" @click="signup">Sign Up</button>
    <button type="button" name="button" @click="logout">Logout</button> -->





    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>
var config = {
  apiKey: 'AIzaSyCNIjlw4gVqGQgSr6pvcHqmWK4eA1KnTyk',
  authDomain: 'vue-firebase-e123d.firebaseapp.com',
  databaseURL: 'https://vue-firebase-e123d.firebaseio.com',
  storageBucket: 'vue-firebase-e123d.appspot.com',
  messagingSenderId: '121034532316'
}

import {store} from './AppStore.js'
var firebase = require('firebase')
var firebaseApp = firebase.initializeApp(config)

const auth = firebase.auth()



export default {
  name: 'app',
  components: {

  },

  data () {
    return {
      authorized: false,
      email: 'droyer01@gmail.com',
      password: 'Dance4life',
      posts: [],
      photo: null,
      sharedState: store.state
    }
  },

  firebase: {
    // users: usersRef,
    // fbPosts: postsRef
  },

  created() {
    this.getPosts()
    this.authCheck()
  },

  mounted() {

  },


  methods: {
    handleClick() {
      alert('click')
    },

    login() {
      let email = this.email
      let password = this.password
        console.log('worked');
      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },

    logout() {
      let vm = this
      auth.signOut().then(function() {

      }, function(error) {
        // An error happened.
      });
    },

    signup() {
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      })
    },

    authCheck() {
      let vm = this
      auth.onAuthStateChanged(function(user) {

        if (user) {
          console.log('signed in');
          vm.authorized = true
          store.logUserIn()

        } else {
          console.log('signed out');
          store.logUserOut()
          vm.authorized = false
        }
      })
    },



    getPosts() {
      let vm = this
      // postsRef.once('value', function(snap){
      //     vm.posts = snap.val()
      // })
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">*/
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/

}

.slide-enter-active, .slide-leave-active {
  transition: all .4s ease;
  position: absolute;
  top: 0;
}
.slide-enter, .slide-leave-active {
  transition: all .4s ease;
  transform: translateX(-100px);
position: absolute;
top: 0;
  /*opacity: 0;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*right: 0;
  bottom: 0;*/
  width: inherit;
  height: initial;
  /*left: 0;*/
  /*position: absolute;*/
}
.wrapper {
  position: relative;
}
</style>

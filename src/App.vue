<template>
  <div id="app">

    <mu-appbar title="VueFire">
      <mu-icon-button icon='menu' slot="left" @click="toggleMenu()"/>
      <mu-flat-button v-if="!sharedState.authorized" key="public" color="white" label="Login" slot="right" @click="login"/>
      <mu-flat-button v-else key="admin" color="white" label="Logout" slot="right" @click="logout"/>
    </mu-appbar>

    <mu-drawer left :open="sharedState.mainMenuIsOpen" @close="toggleMenu()" width="280px">
      <mu-appbar title="Menu">
       <mu-icon-button icon='close' slot="right" @click="sharedState.mainMenuIsOpen = false"/>
      </mu-appbar>
        <ul class="main-menu">
          <li>
            <router-link to="/" exact>Home</router-link>
          </li>
           <li>
             <router-link to="/logout">Log out</router-link>

           </li>
            <li>
              <router-link :to="{path: '/admin'}">Admin</router-link>
            </li>
            <li>
              <router-link to="/editor">Editor</router-link>
            </li>
            <li>
              <router-link to="/login">Log in</router-link>
            </li>
           <li>
             <router-link to="/dashboard">Dashboard</router-link>
           </li>
        </ul>


    </mu-drawer>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>

// var config = {
//   apiKey: 'AIzaSyCNIjlw4gVqGQgSr6pvcHqmWK4eA1KnTyk',
//   authDomain: 'vue-firebase-e123d.firebaseapp.com',
//   databaseURL: 'https://vue-firebase-e123d.firebaseio.com',
//   storageBucket: 'vue-firebase-e123d.appspot.com',
//   messagingSenderId: '121034532316'
// }

import {store, db, auth} from './AppStore.js'
// import Admin from './components/Admin'
// import Public from './components/Public'
// var firebase = require('firebase')
// var firebaseApp = firebase.initializeApp(config)
// const auth = firebase.auth()



export default {
  name: 'app',
  components: {

    // Public,
    // Admin
  },

  data () {
    return {
      authorized: false,
      email: 'droyer01@gmail.com',
      password: 'Dance4life',
      posts: [],
      photo: null,
      sharedState: store.state,
      value: ''
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
    routerGo() {
      this.toggleMenu()
      this.$router.push({ path: 'admin'})

    },

    handleChange (val) {
      this.value = val
    },

    handleClick() {
      alert('click')
    },

    toggleMenu() {
      this.sharedState.mainMenuIsOpen = !this.sharedState.mainMenuIsOpen
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
      this.$router.push({ path: 'admin'})
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

<style lang="scss">

.main-menu {
  list-style-type: none;
  padding-left: 20px;
  & li {
    margin: 8px 0;

    & a {
      font-size: 16px;
      color: rgba(0,0,0,.87);
      padding: 8px 0;
      display: block;

      &.router-link-active {
        color: #03a9f4;
        font-weight: 600;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
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

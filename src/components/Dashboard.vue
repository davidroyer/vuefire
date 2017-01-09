<template>
  <div class="dashboard">
    <h1>Dashboard is here</h1>
    <label>
      Email
      <input type="text" v-model="email">
    </label>
    <label>
      Password
      <input type="text" v-model="password">
    </label>
    <button type="button" name="button" @click="addPost">
    Add Post</button>
    <img v-if="newImageURL" :src="newImageURL" alt="">
    <label>Upload Photo<input type="file" name="" @change="handleUpload($event)"></label>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="uploadProgress"></el-progress>


    <div class="restricted" v-show="authorized">
      <ul class="post__list">
        <li v-for="post in dbPosts" :key="post['.key']" class="post__item">
          <h3 v-text="post.title"></h3>

          <div v-html="post.content"></div>
          <el-button-group class="post__button-group">
            <el-button type="primary" icon="edit" @click="handleEditClick(post)"></el-button>
            <el-button type="primary" icon="delete"></el-button>
          </el-button-group>
        </li>
      </ul>

<transition name="fade" appear>
  <div v-if="edit" class="editPost">
    <!-- <input type="text" v-model="edit.title"> -->
    <el-input v-model="edit.title"></el-input>
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 20}"
      placeholder="Please input"
      v-model="edit.content">
    </el-input>

    <!-- <textarea rows="8" cols="80" v-model="edit.content"></textarea> -->
    <el-button-group>
      <el-button type="primary" icon="circle-check" @click="updatePost(edit)">Save</el-button>
      <el-button type="warning" icon="circle-close" @click="canceEdit">Cancel</el-button>
    </el-button-group>
  </div>
</transition>
    </div>
  </div>
</template>

<script>

  import {store} from '../AppStore.js'
  import firebase from 'firebase'
  var db = firebase.database()
  var usersRef = db.ref('users')
  var postsRef = db.ref('posts')

export default {
  data () {
    return {
      authorized: true,
      email: 'droyer01@gmail.com',
      password: 'Dance4life',
      photo: null,
      sharedStore: store,
      edit: null,
      uploadProgress: 0,
      newImageURL: null
    }
  },

  firebase: {
    dbPosts: postsRef
  },

  methods: {
    handleEditClick(post) {
      let postToEdit = post
      this.edit = postToEdit
      console.log(post);
    },

    canceEdit() {
      this.edit = null
    },

    handleUpload(event) {
      let vm = this
      let photo = event.target.files[0]
      var storageRef = firebase.storage().ref('folder1/'+ photo.name)
      let uploadTask = storageRef.put(photo)

      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        vm.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, function(error) {
        console.log(error);
      }, function() {
        console.log(uploadTask.snapshot.downloadURL);
        vm.newImageURL = uploadTask.snapshot.downloadURL
      })

    },

    addPost() {
      postsRef.push({
        title: 'My Pushed Title 4',
        content: 'my post content 4'
      })
    },

    updatePost(post) {
      let newTitle = post.title
      let newContent = post.content
      let vm = this
      postsRef.child(post['.key']).set({
        title: newTitle,
        content: newContent
      }, function(error) {
           if (error) {
            vm.$message.error('Oops, this is a error message.');
         } else {
           vm.$message({
             message: 'Congrats, this is a success message.',
             type: 'success'
           });
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
  .restricted {
    display: flex;;
  }
  .post {

    &__list {
      width: 50%;
    }

    &__item {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 1em;
      border-bottom: 1px solid rgba(128, 128, 128, 0.43);
    }

    &__button-group {
      position: absolute;
      right: 0;
      bottom: 15%;
    }
  }

  // Edit Post Section
  .editPost {
    padding: 2em;
    margin: 0 2em 2em;
    width: 50%;
    & > * {
      display: block;
      margin: 1em;

      &:not(button) {
        width: 100%;
      }
    }
  }

</style>

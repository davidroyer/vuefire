<template>
<div class="dashboard">



  <div class="restricted" v-show="authorized">
    <mu-list>
      <mu-list-item v-for="post in dbPosts" :key="post['.key']" :title="post.title">
        <div class="icon-button-contaner" slot="right">
          <mu-icon-button icon="edit" @click="handleEditClick(post)" />
          <mu-icon-button icon="delete" @click="deletePost(post)"/>
        </div>
      </mu-list-item>
    </mu-list>
  </div>

  <mu-drawer right :open="open" @close="toggle()">
    <!-- <mu-appbar title="Muse UI"/> -->

    <div v-if="edit" class="editPost">
      <h1>Edit Post</h1>
      <mu-text-field label="Post Title" v-model="edit.title"/>
      <mu-text-field label="Post Content" multiLine :rows="3" v-model="edit.content"></mu-text-field>
      <mu-raised-button label="Save" class="demo-raised-button" primary @click="updatePost(edit)" />
      <mu-raised-button label="Cancel" class="demo-raised-button" secondary @click="cancelEdit" />
    </div>

    <div v-if="createNewPost" class="createNewPost">
      <h1>New Post</h1>

      <mu-text-field label="Post Title" v-model="newTitle" labelFloat/>
      <mu-text-field label="Post Content" multiLine :rows="3" v-model="newContent" labelFloat></mu-text-field>
      <mu-raised-button label="Save" class="demo-raised-button" primary @click="saveNewPost(newTitle, newContent)" />
      <mu-raised-button label="Cancel" class="demo-raised-button" secondary @click="cancelNewPost" />
    </div>

  </mu-drawer>
 <mu-float-button icon="add" secondary mini class="addPost" @click="handleNewPost"/>
  <!-- <label>
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
  <el-progress :text-inside="true" :stroke-width="18" :percentage="uploadProgress"></el-progress> -->

</div>
</template>

<script>
import {
  store,
  db,
  auth
} from '../AppStore.js'
var usersRef = db.ref('users')
var postsRef = db.ref('posts')

export default {
  data() {
    return {
      authorized: true,
      email: 'droyer01@gmail.com',
      password: 'Dance4life',
      photo: null,
      sharedStore: store,
      edit: null,
      uploadProgress: 0,
      newImageURL: null,
      open: false,
      createNewPost: false,
      newTitle: '',
      newContent: ''

    }
  },

  firebase: {
    dbPosts: postsRef
  },

  methods: {
    toggle() {
      this.open = !this.open
    },

    handleNewPost() {
      this.createNewPost = true
      this.toggle()
    },

    handleEditClick(post) {
      let postToEdit = post
      this.edit = postToEdit
      console.log(post);
      this.toggle()
    },

    cancelEdit() {
      this.open = false
      this.edit = null
    },

    cancelNewPost() {
      this.open = false
      this.createNewPost = false
      this.newTitle = ''
      this.newContent = ''

    },

    saveNewPost(newTitle, newContent) {
      postsRef.push({
        title: newTitle,
        content: newContent
      })
      this.toggle()
    },

    deletePost(post) {
      postsRef.child(post['.key']).remove()
    },

    handleUpload(event) {
      let vm = this
      let photo = event.target.files[0]
      var storageRef = firebase.storage().ref('folder1/' + photo.name)
      let uploadTask = storageRef.put(photo)

      uploadTask.on('state_changed', function(snapshot) {
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

.addPost {
  position: fixed;
    bottom: 20px;
    right: 10px;
}

.mu-item-content {
  width: 90%;
}

.mu-drawer {
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 60%;
  }
}

.restricted {
    display: flex;

    @media (min-width: 900px) {
      width: 40%;
    }
    .mu-item-right {
        right: 25px;
        align-items: flex-start;
    }
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

.createNewPost {
  padding: 1em;
}
// Edit Post Section
.editPost {
    padding: 1em;

    & > * {
        // display: block;
        margin: 1em 0;
        &:not(button) {
            width: 100%;
        }
    }
}

.icon-button-contaner {
    display: flex;
}
</style>

<template>
  <div class="admin">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './Dashboard'
export default {
  components: {
    Dashboard
  },

  beforeRouteLeave (to, from, next) {
    console.log('route fired');
    console.log(this);
    // if (this.menuIsOpen) {
    //   this.toggle()
      next()
    // } else {
    //   next()
    // }
  },

  methods: {
    logoutClicked() {
      this.$emit('logoutClicked')
    }
  }
}
</script>

<style lang="scss">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>

<template>

  <mu-appbar title="Public">
    <mu-flat-button color="white" label="Sign Up" slot="right"/>
    <mu-flat-button color="white" label="Login" slot="right" @click="loginClicked"/>
  </mu-appbar>

</template>

<script>
export default {
  methods: {
    loginClicked() {
      this.$emit('loginClicked')
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

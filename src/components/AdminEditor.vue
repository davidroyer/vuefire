<template>
  <div class="admin">
    <dashboard-editor></dashboard-editor>
  </div>
</template>

<script>
import DashboardEditor from './DashboardEditor'
export default {
  components: {
    DashboardEditor
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

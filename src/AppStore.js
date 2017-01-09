export const store = {
  state: {
    authorized: null
  },

  logUserIn() {
    this.state.authorized = true
  },

  logUserOut() {
    this.state.authorized = false
  }
}

<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <input type="email" v-model="email" placeholder="Enter your e-mail" />
        <input type="password" v-model="password" placeholder="Enter your password" />
        <input type="button" value="Sign in" @click="login()" />
      </div>
      <div class="col-8">
        Right sidebar
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      signInProcessing: false,
      email: '',
      password: ''
    }
  },
  components: {
    // Button
  },
  layout: "not-signed-in",
  methods: {
    async login() {
      this.signInProcessing = true
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$auth.$storage.setUniversal('user', this.$auth.user, true)
        this.$router.push("/dashboard")
      } catch(exception) {
        this.$swal({
          title: "Woops!",
          html: "Wrong e-mail or password",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000
        })
      }
      this.signInProcessing = false
    },
    async signInWithGoogle() {
      try {
        let googleLogin = await this.$auth.loginWith('google')
      } catch(exception) {
        this.$swal({
          title: "Woops!",
          html: "Wrong e-mail or password",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000
        })
      }
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-7">
        <div class="sign-in-box">
          <p>Logo</p>
          <h1>Sign in</h1>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="email">
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>

          <div class="sign-in-button">
            <button class="button login" @click="login()">SIGN IN <img style="margin-left: 20px;" src="/images/login-right.svg" /></button>
          </div>

          <p class="register-text"><a href="#">Sign up</a> if you don't have an account</p>
          <p class="or-hr"><span>OR</span></p>

          <div class="sign-in-other-options">
            <button class="social-sign-in"><img src="/images/google.png" /></button>
            <button class="social-sign-in"><img src="/images/outlook.png" /></button>
          </div>
        </div>
      </div>
      <div class="col-5 login-right-bar">
        <img src="/images/login-dashboard.svg" />
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

<template>
  <div class="container-fluid" id="signInDisplay">
    <div class="row">
      <div class="col-7">
        <div class="sign-in-box">
          <p>Logo</p>
          <h1>Sign up</h1>

          <div class="sign-in-other-options">
            <img @click="signUpWithGoogle()" id="signUpWithGoogle" class="social-sign-in" src="/images/google.png" />
            <img @click="signUpWithOutlook()" class="social-sign-in" src="/images/outlook.png" />
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
  beforeMount() {
    // Check if Google code is in URL
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    // Send the code to the back-end, where the back-end checks if it's correct
    if(code) {
      this.signInProcessing = true
      console.log(code)
    }
  },
  methods: {
    signUpWithGoogle() {
      this.$auth.loginWith('google')
    },
    signUpWithOutlook() {
      this.$auth.loginWith('outlook')
    }
  }
}
</script>

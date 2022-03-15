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
            <button class="button login" @click="login()">SIGN IN</button>
          </div>

          <p class="register-text"><a href="#">Sign up</a> if you don't have an account</p>
          <p class="or-hr"><span>OR</span></p>

          <div class="sign-in-other-options">
            <img id="signInWithGoogle" class="social-sign-in" src="/images/google.png" />
            <img class="social-sign-in" src="/images/outlook.png" />
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
    google.accounts.id.initialize({
      client_id: "936507046323-m9i9j561cfrrit8to7vus5ljilfbc518.apps.googleusercontent.com",
      callback: (response) => {
        console.log(response)
      }
    });
    google.accounts.id.renderButton(
      document.getElementById("signInWithGoogle"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  },
  methods: {
    async login() {
      this.signInProcessing = true
      console.log('NODE_ENV:', process.env.API_URL);
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
    }
  }
}
</script>

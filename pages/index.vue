<template>
  <div class="container-fluid" id="signInDisplay">
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
            <div class="row justify-content-between">
              <div class="col-3 w-auto"><label class="form-label">Password</label></div>
              <div class="col-3 w-auto forgot-link"><NuxtLink to="/recover-password">Forgot Password ?</NuxtLink></div>
            </div>
            <input type="password" class="form-control" v-model="password">
          </div>

          <div class="sign-in-button">
            <button class="button login" @click="login()">SIGN IN</button>
          </div>

          <p class="register-text"><NuxtLink to="/sign-up">Sign up</NuxtLink> if you don't have an account</p>
          <p class="or-hr"><span>OR</span></p>

          <div class="sign-in-other-options">
            <img @click="signInWithGoogle()" id="signInWithGoogle" class="social-sign-in" src="/images/google.png" />
            <img @click="signInWithOutlook()" class="social-sign-in" src="/images/outlook.png" />
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
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  async beforeMount() {
    // Check if Google code is in URL
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    // Send the code to the back-end, where the back-end checks if it's correct
    if(code) {
        this.signInProcessing = true
        await this.$store.dispatch("user/signInWithGoogle", {
            googleCode: code
        })
        console.log(this.$auth.user)
        if(this.user.token) {
          this.$auth.setUser(this.user)
          this.$auth.$storage.setUniversal('user', this.$auth.user, true)
          this.$router.push("/dashboard")
        }
    }

    // google.accounts.id.initialize({
    //   client_id: "936507046323-m9i9j561cfrrit8to7vus5ljilfbc518.apps.googleusercontent.com",
    //   callback: (response) => {
    //     console.log(response)
    //     // Send the code to the back-end, where the back-end checks if it's correct
    //     this.signInProcessing = true
    //   }
    // });
    // google.accounts.id.prompt();
  },
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
    signInWithGoogle() {
      this.$auth.loginWith('google', { params: {
        scope: 'profile email'
      }
      })
    },
    signInWithOutlook() {
      this.$auth.loginWith('outlook')
    }
  }
}
</script>

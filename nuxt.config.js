export default {
    ssr: false,

    head: {
        title: "Todo",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3', crossorigin: 'anonymous' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p', crossorigin: 'anonymous' },
            { src: 'https://accounts.google.com/gsi/client', defer: true, async: true }
        ]
    },

    css: [
        { src: 'assets/scss/style.scss', lang: 'scss' },
    ],

    plugins: [
        { src: '~plugins/vuedraggable.js', ssr: false },
        { src: '~plugins/v-calendar.js', ssr: false }
    ],

    components: true,

    buildModules: [],

    modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "vue-sweetalert2/nuxt"],
    // Outlook: https://github.com/stuartpreston/nuxt-auth-azuread-example/blob/master/nuxt.config.js
    // Google: https://auth.nuxtjs.org/providers/google/
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: "/login", method: "post" },
                    logout: false,
                    user: { url: "/user", method: "get" },
                },
                user: {
                    property: false,
                },
                token: {
                    maxAge: 86400 * 30, // One month
                },
            },
            google: {
                clientId: '936507046323-m9i9j561cfrrit8to7vus5ljilfbc518.apps.googleusercontent.com',
                codeChallengeMethod: '',
                responseType: 'code',
                accessType: 'offline',
                redirectUri: 'http://localhost:3000',
                endpoints: {
                    token: 'http://localhost:5000/google/token',
                    logout: false,
                    user: { url: "/user/google", method: "get" },
                },
                scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.events.readonly', 'https://www.googleapis.com/auth/gmail.readonly'],
            },
            outlook: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize',
                    token: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
                    user: '/user/outlook',
                    logout: false
                },
                token: {
                    property: 'access_token',
                    type: 'Bearer',
                    maxAge: 1800
                },
                refreshToken: {
                    property: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                },
                responseType: 'code',
                grantType: 'authorization_code',
                accessType: 'offline',
                clientId: '6b8c10f5-5025-4ee4-82e7-753d7d3b9f7c',
                codeChallengeMethod: 'S256',
                scope: ['openid', 'email', 'profile', 'https://graph.microsoft.com/calendar.read', 'https://graph.microsoft.com/mail.read'],
                autoLogout: true
            }
        },
        redirect: {
            login: "/",
            logout: "/",
            user: "/",
            callback: "/",
        },
    },

    /*
     ** Environment variables
     */
    env: {
        stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || "pk_test_rHexF1dsPqOyjRf3EYA1YmXh003fzbVUZM",
        API_URL: process.env.API_URL || 'https://todophil.herokuapp.com'
    },

    /*
     ** Nuxt.js axios module
     */
    axios: {
        // baseURL: process.env.API_URL,
        baseURL:'https://todophil.herokuapp.com',
        headers: {
            "Content-Type": "application/json",
        },
    },

    /*
     ** Router settings
     */
    router: {
        linkActiveClass: 'mm-active',
        middleware: ['auth', 'check-access']
    },

    build: {},
}
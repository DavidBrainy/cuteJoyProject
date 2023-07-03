<template>
  <PopupInandOut v-if="value">
    <h1>{{ title }}</h1>

    <form @submit.prevent="handleAuth">
      <!-- Sign In -->
      <div v-if="auth == 'login'">
        <div class="input-field">
          <input type="email" placeholder="Email" v-model="userLogin.email" />
        </div>
        <div class="input-field">
          <input type="password" placeholder="Password" v-model="userLogin.password" />
        </div>
      </div>

      <!-- sign Up -->
      <div v-else>
        <div class="input-field">
          <input type="text" placeholder="Fullname" v-model="registration.name" />
        </div>
        <div class="input-field">
          <input type="email" placeholder="Email" v-model="registration.email" />
        </div>
        <div class="input-field">
          <input type="password" placeholder="Password" v-model="registration.password" />
        </div>
      </div>

      <button class="allSend">Submit</button>
    </form>

    <div class="signUp">
      <p>{{ para }}</p>
      <button @click="toggleAndAuth()" class="btn-signup">{{ btnsign }}</button>
    </div>
  </PopupInandOut>
</template>

<script>
import PopupInandOut from './LogInAndOut.vue'
// import axios from 'axios'

export default {
  name: 'MyHeader',
  components: { PopupInandOut },

  props: ['value', 'registreLoginUser'],

  data() {
    return {
      auth: 'login',
      title: 'SignIn',
      para: "Don't have an account ?",
      btnsign: 'Sign up',
      isSignUp: false,

      registration: {
        name: '',
        email: '',
        password: ''
      },

      userLogin: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    toggleAuth() {
      if (this.auth == 'login') {
        this.auth = 'register'
        this.title = 'SignUp'
        this.btnsign = 'Sign In'
        this.para = 'Have an account ?'
      } else {
        this.auth = 'login'
        this.title = 'SignIn'
        this.btnsign = 'Sign Up'
        this.para = "Don't have an account ?"
      }
    },
    toggleAndAuth() {
      this.toggleSignInAndUp(), this.toggleAuth()
    },

    toggleSignInAndUp() {
      this.isSignUp = !this.isSignUp
    },
    handleAuth() {
      if (this.isSignUp) {
        this.registreLoginUser(this.isSignUp, this.registration)
      } else {
        this.registreLoginUser(this.isSignUp, this.userLogin)
      }
    }
    // registreLoginUser() {
    //   if (this.isSignUp) {
    //     // this is for sign up section

    //     const createUser = {
    //       fullname: this.registration.name,
    //       email: this.registration.email,
    //       password: this.registration.password
    //     }
    //     axios
    //       .post('http://192.168.8.100:4000/api/register', createUser)
    //       .then((res) => {
    //         console.log(res.data)
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //     // console.log(createUser)
    //   } else {
    //     //this is for sign in section
    //     const loginUser = {
    //       email: this.userLogin.email,
    //       password: this.userLogin.password
    //     }
    //     axios
    //       .post('http://192.168.8.100:4000/api/login', loginUser)
    //       .then((res) => {
    //         const token = JSON.stringify(res.data.token)
    //         // console.log(token)
    //         localStorage.setItem('userToken', token)
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })

    //     this.$emit('togglePopup')
    //   }
    // }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  margin-bottom: 50px;
  position: relative;
}

h1::after {
  content: '';
  width: 30px;
  height: 4px;
  border-radius: 4px;
  background-color: gray;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translate(-50%);
}
.input-field {
  background-color: #eaeaea;
  margin: 15px 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 18px 15px;
}
.allSend {
  width: 100%;
  background-color: rgb(59, 58, 58);
  color: white;
  padding: 14px 12px;
  border-radius: 3px;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: background 1s;
  font-weight: bold;
  font-size: 15px;
}

.allSend:hover {
  background: #8b8a8a;
  color: black;
}
.signUp {
  font-size: 15px;
  padding-top: 9px;
  justify-content: center;
  display: flex;
}
.signUp p {
  color: gray;
}
.btn-signup {
  margin-left: 7px;
  font-weight: bold;
  border: 0;
  background: none;
  cursor: pointer;
  color: rgb(29, 28, 28);
  transition: background 1s;
}
</style>

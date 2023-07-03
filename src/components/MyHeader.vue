<template>
  <div>
    <nav>
      <h2 class="logo">COMPANY<span>LOGO</span></h2>
      <ul>
        <!-- <router-link to="/AdminLogin">Home</router-link> -->
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <!-- <user-profile-icon /> -->
      <user-profile-icon v-if="isUser == true" :checkAuth="checkAuth"/>
      <button v-if="isUser == false" @click="$emit('togglePopup')" class="button-1">
        ICON | SIGN IN
      </button>
    </nav>
  </div>
</template>

<script>
import userProfileIcon from './userProfileIcon.vue'
export default {
  components: { userProfileIcon },
  props:['isAuth' ],
  data() {
    return {
      isUser: false
    }
  },
  watch: {
    isAuth(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.checkAuth()
      }
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      const userToken = JSON.parse(localStorage.getItem('userToken'))
      if (userToken) {
        this.isUser = true
      } else {
        this.isUser = false
      }
    }
  }
}
</script>

<style scoped>
nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 95px;
  padding-top: 20px;
  padding-left: 8%;
  padding-right: 10%;
  background-color: #968e8e;
}

.logo {
  color: white;
  font-size: 28px;
}

span {
  color: white;
  font-weight: lighter;
}

nav ul li {
  list-style-type: none;
  display: inline-block;
  padding: 20px 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  color: #302d2d;
  transition: 0.3s;
}

.button-1 {
  border: 2px solid;
  background: none;
  padding: 12px 25px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  transition: 0.4s;
}
.button-1:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>

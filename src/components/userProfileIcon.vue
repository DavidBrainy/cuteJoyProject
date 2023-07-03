<template>
  <button @click="toggleProfileIcon" class="profileIcon">
    <h1>{{ firstLetOfUser }}</h1>
  </button>
  <div class="sub-menu-wrap">
    <div v-if="userProfile" class="sub-menu">
      <div class="user-info">
        <div class="image"></div>
        <div class="name-and-email">
          <h1>{{ userData.name }}</h1>
          <p>{{ userData.email }}</p>
        </div>
      </div>
      <hr />
      <a href="#" class="sub-menu-link">
        <p>My Account</p>
        <span>></span>
      </a>
      <a href="#" class="sub-menu-link">
        <p>Settings Privacy</p>
        <span>></span>
      </a>
      <a href="#" class="sub-menu-link">
        <p>Help & Support</p>
        <span>></span>
      </a>
      <a @click="logUserOut" href="#" class="sub-menu-link">
        <p>Logout</p>
        <span>></span>
      </a>
    </div>
  </div>
</template>

<script>
import { capitalize } from 'vue'

export default {
  name: 'userprofileIcon',
  props:['checkAuth'],

  data() {
    return {
      userProfile: false,
      userData: {},
      firstLetOfUser: ''
    }
  },

  mounted() {
     const userData = JSON.parse(localStorage.getItem('userData'))
     this.userData = userData
    // console.log(userData);

    const username = userData.name
    const firstLetter = username.split('')
    const capUserfirstname = firstLetter[0].toUpperCase()
    this.firstLetOfUser = capUserfirstname

    // console.log(capUserfirstname)
  },

  methods: {
    toggleProfileIcon() {
      if (this.userProfile === false) {
        this.userProfile = true
      } else {
        this.userProfile = false
      }
    },

    logUserOut() {
      localStorage.clear()
      this.checkAuth()

    }
  }
}
</script>

<style scoped>
.profileIcon {
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 50%;
  margin-top: -15px;
  border-color: white;
  cursor: pointer;
}

.profileIcon h1 {
  color: grey;
  font-size: 32px;
}

.sub-menu-wrap {
  position: absolute;
  top: 80%;
  right: 10%;
  width: 320px;
  max-height: 0px;
}

.sub-menu-wrap.open-menu {
  max-height: 400px;
}

.sub-menu {
  background: white;
  padding: 20px;
  margin: 10px;
}

.image {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: gray;
}

.user-info {
  display: flex;
  align-items: center;
}

.sub-menu hr {
  border: 0px;
  height: 1px;
  width: 100%;
  background-color: gray;
  margin: 15px 0 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.name-and-email h1 {
  font-size: 26px;
}
.name-and-email p {
  font-size: 12px;
}

.name-and-email {
  margin-left: 12px;
}

li {
  padding: 5px;
  background-color: white;
  cursor: pointer;
}

li:hover {
  background-color: gray;
  color: white;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  margin: 12px 0;
}

.sub-menu-link p {
  width: 100%;
}

.sub-menu-link span {
  font-size: 22px;
  transition: 0.5s;
}
.sub-menu-link:hover span {
  transform: translateX(5px);
}
.sub-menu-link:hover p {
  font-weight: 600;
}
</style>

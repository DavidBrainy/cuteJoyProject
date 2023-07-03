<template>
  <div class="container">
    <MyPopup :value="value" @togglePopup="toggle" :registreLoginUser="registreLoginUser" />
    <NavHeader @togglePopup="toggle" :isAuth="isAuth"/>
    <Showcase />
    <Review />
    <Products />
    <ImgContainer />
  </div>
</template>

<script>
import Showcase from '../components/Showcase.vue'
import Review from '../components/customerReview.vue'
import Products from '../components/MyProducts.vue'
import ImgContainer from '../components/ImgContainerFooter.vue'
import NavHeader from '../components/MyHeader.vue'
import MyPopup from '../components/MyPopup.vue'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
  components: {
    Showcase,
    Products,
    MyPopup,
    Review,
    ImgContainer,
    NavHeader
  },
  data() {
    return {
      value: false,
      isAuth: false,
      userInfo: {},
    }
  },

  methods: {
    toggle() {
      this.value = !this.value
    },

    registreLoginUser(isSignUp, authInfo) {
      if (isSignUp) {
        // this is for sign up section

        const createUser = {
          fullname: authInfo.name,
          email: authInfo.email,
          password: authInfo.password
        }
        axios
          .post(`${BASE_URL}/api/register`, createUser)
          // .post('http://192.168.8.100:4000/api/register', createUser)
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
        // this.toggle()

      } else {
        //this is for sign in section
        const loginUser = {
          email: authInfo.email,
          password: authInfo.password
        }
        axios
          .post(`${BASE_URL}/api/login`, loginUser)
          .then((res) => {
            const token = JSON.stringify(res.data.token)
            const userData = res.data.user

            localStorage.setItem('userToken', token)
            localStorage.setItem('userData', JSON.stringify(userData))
            this.isAuth = true
            // console.log(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
    
        // this.$emit('togglePopup')
        this.toggle()
      }
    }
  }
}
</script>

<style scoped></style>

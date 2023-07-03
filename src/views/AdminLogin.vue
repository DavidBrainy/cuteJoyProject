<template>
  <div>
    <div class="login">
      <div class="login-session">
        <h1>SignIn</h1>
        <form @submit.prevent="adminSignInPage">
          <div class="input-group">
            <div class="input-field">
              <input type="email" placeholder="Email" v-model="adminSignIn.email" />
            </div>
            <div class="input-field">
              <input type="password" placeholder="Password" v-model="adminSignIn.aPassword" />
            </div>
          </div>
          <button class="btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',

  data() {
    return {
      adminSignIn: {
        email: '',
        aPassword: ''
      }
    }
  },

  methods: {
    adminSignInPage() {
      const adminSignIn = {
        email: this.adminSignIn.email,
        password: this.adminSignIn.aPassword
      }
      console.log(adminSignIn)
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  min-height: 100vh;
  background: #b5aeae;
  position: relative;
}

.login-session {
  width: 90%;
  max-width: 450px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 60px 70px;
  text-align: center;
  border-radius: 10px;
}

.login-session h1 {
  font-size: 30px;
  margin-bottom: 40px;
  color: rgb(65, 63, 63);
}

.input-field {
  background: #d4d3d3;
  margin: 15px 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
}
.btn {
  width: 100%;
  padding: 15px 10px;
  background: #3b3a3a;
  border: 0;
  outline: 0;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: background 1s;
  font-size: 17px;
  font-weight: bold;
}

.btn:hover {
  background: #7e7b7b;
  transition: color 1s;
  color: black;
}
.input-group {
  height: 135px;
}

input {
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 16px 13px;
}
</style>

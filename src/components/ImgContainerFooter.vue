<template>
  <div>
    <div class="container-section">
      <div class="image-section">
        <h1>IMAGE HERE</h1>
      </div>
      <div class="my-form">
        <div class="formall">
          <h1>30% Off</h1>
          <p>For best offer contact with us</p>
          <div class="form-data">
            <input type="text" class="field" placeholder="Fullname" />
            <input type="email" class="field" placeholder="Email" />
            <textarea class="field area" placeholder="Message"></textarea>
            <button class="btn">Send</button>
          </div>
        </div>
      </div>
      <div class="logo-circle">
        <h1>LOGO</h1>
      </div>
    </div>

    <footer>
      <div class="footer-form">
        <p>copy right @ 2023 by davidbrainy</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ImageContainerFooter'
}
</script>

<style scoped>
.container-section {
  position: relative;
  height: 90vh;
  width: 100%;
  background-color: #968e8e;
}

.image-section {
  height: 45vh;
  width: 100%;
  background-color: #e9e8e8;
}
.container-section h1 {
  padding-top: 5%;
  text-align: center;
}

.my-form {
  position: absolute;
  height: 420px;
  width: 300px;
  border-radius: 20px;
  margin-top: -120px;
  margin-left: 200px;
  background-color: white;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}
.logo-circle {
  height: 180px;
  width: 180px;
  margin-top: -100px;
  margin-left: 75%;
  background-color: white;
  border-radius: 100%;
}

.logo-circle h1 {
  font-size: 30px;
  padding-top: 70px;
}

.my-form h1 {
  font-size: 30px;
}

.my-form p {
  padding-left: 50px;
}

.form-data {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
}

.field {
  padding: 0.5rem 1rem;
  background-color: rgba(230, 230, 230, 0.6);
  font-size: 1.1rem;
  border-style: none;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: 0.3s;
}
.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.field:focus {
  background-color: #fff;
  border: 5px;
}

.area {
  min-height: 120px;
  /* width: 100%; */
}

textarea {
  resize: none;
  width: 250px;
}

.btn {
  width: 100%;
  padding: 0.5rem 1rem;
  border-style: none;
  font-size: 1.1rem;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: #302d2d;
  transition: 0.3s;
}

.btn:hover {
  background-color: #968e8e;
  color: #302d2d;
}

footer {
  height: 10vh;
  width: 100%;
  background-color: #968e8e;
}

footer p {
  text-align: right;
  padding-right: 50px;
  color: white;
}
</style>

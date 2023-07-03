<template>
  <div>
    <div id="home" class="header-section">
      <h1>Cute Joy</h1>
      <p>
        Write A short Description about <br />
        the product and the benefits <br />
        <button class="button-2">READ MORE</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadShowcase'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'josefin sans', sans-serif;
}
.header-section {
  height: 94vh;
  width: 100%;
  background-color: #b5aeae;
}
.header-section h1 {
  font-size: 125px;
  font-weight: bold;
  color: white;
  padding-top: 12%;
  padding-left: 9%;
}
.header-section p {
  color: white;
  padding-left: 10%;
  margin-top: -14px;
  font-size: 30px;
}

.button-2 {
  border: none;
  background-color: black;
  padding: 10px 30px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  transition: 0.3s;
  margin-top: 10px;
}
.button-2:hover {
  background-color: rgb(209, 140, 10);
  color: black;
  cursor: pointer;
}
</style>

<template>
  <div>
    <div id='products' class="product-section">
      <h1>OUR PRODUCTS</h1>
      <div class="card-box">
        <div class="card-1">
          <div class="inside-card-1"></div>
        </div>
        <div class="card-2">
          <div class="inside-card-2"></div>
        </div>
        <div class="card-3">
          <div class="inside-card-3"></div>
        </div>
        <div class="card-4">
          <div class="inside-card-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProducts',
  
}
</script>

<style scoped>
.product-section {
  height: 94vh;
  width: 100%;
  background-color: #b5aeae;
}

.product-section h1 {
  padding-top: 4.5%;
  color: white;
  text-align: center;
  font-size: 40px;
}

.card-box {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

.card-1 {
  height: 450px;
  width: 330px;
  background-color: white;
  border-radius: 20% 0 0 0;
}
.card-2 {
  height: 450px;
  width: 330px;
  background-color: white;
}
.card-3 {
  height: 450px;
  width: 330px;
  background-color: white;
}
.card-4 {
  height: 450px;
  width: 330px;
  background-color: white;
  border-radius: 0 20% 0 0;
}

.inside-card-1 {
  width: 330px;
  height: 250px;
  background-color: #d9d9d9;
  border-radius: 20% 0 0 0;
}
.inside-card-2 {
  width: 330px;
  height: 250px;
  background-color: #d9d9d9;
}
.inside-card-3 {
  width: 330px;
  height: 250px;
  background-color: #d9d9d9;
}
.inside-card-4 {
  width: 330px;
  height: 250px;
  background-color: #d9d9d9;
  border-radius: 0 20% 0 0;
}
</style>

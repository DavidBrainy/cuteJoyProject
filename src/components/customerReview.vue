<template>
  <div>
    <div id="about" class="testimony">
      <div class="test-box">
        <div class="left">
          <p>
            Lorem ipsum dolor sit amet <br />
            adipisicing elit. Dolore facere <br />nemo est ducimus aliquam
          </p>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'CustomerReview'
}
</script>

<style scoped>
.testimony {
  height: 94vh;
  width: 100%;
  background-color: #e9e8e8;
}

.test-box {
  padding-top: 7%;
  padding-left: 8%;
  padding-right: 7%;
  display: flex;
  justify-content: space-between;
}

.left {
  height: 450px;
  width: 80%;
  /* background-color: white; */
}

.right {
  height: 450px;
  width: 420px;
  background-color: #d9d9d9;
}

.left p {
  padding-left: 16%;
  padding-top: 22%;
  font-size: 24px;
}
</style>

<template>
  <div class="popup">
    <div class="inner-popup">
      <button @click="$emit('togglePopup')" class="popupclose">X</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-popup {
  position: absolute;
  width: 90%;
  max-width: 450px;
  top: 50%;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  padding: 50px 60px 70px;
  text-align: center;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  /* display: none; */
}
.popupclose {
  margin-right: -300px;
  font-size: 20px;
  border: 0;
  background: none;
  cursor: pointer;
}

.inner-popup h1 {
  /* display: none; */
  font-size: 30px;
  margin-bottom: 60px;
  color: blue;
}

.popupclose:hover {
  color: red;
  transition: 0.4s ease;
}
</style>

<!-- src/components/LoadingSpinner.vue -->
<template>
  <div class="bg">
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner"
};
</script>

<style lang="scss" scoped>
.bg{
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/wood_texture.png");
  background-size: 10%;
  background-repeat: repeat;
  transition: 1s;
  position: fixed;
  z-index: 9998;
}
.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: 1s;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.off{
  opacity: 0;
}
</style>
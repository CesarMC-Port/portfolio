<template>
  <div class="hidden md:flex absolute left-0 top-0 w-full h-full z-[5] bg-transparent">
    <div class="spline-loader" v-if="loading">
      <div class="loaderSpline"></div>
      <div class="message">Cargando escena...</div>
    </div>
    <iframe
      src="https://my.spline.design/stackscopy-OrUPgpPXvTCNAFZzT4iE7fbL/"
      loading="lazy"
      style="position:absolute; left:0; top:70px; width:100%; height:100%; z-index:5"
      @load="loading2 = false"
    ></iframe>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const loading2 = ref(true);
</script>
<style>
  iframe{
    clip-path:polygon(100% 1%, 100% 89%, 84% 89%, 84% 100%, 0 100%, 0 0);
  }
  .spline-loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    color: #fff;
    z-index: 20;
    transition: opacity 400ms ease, visibility 400ms;
    height: 50%;
  }

  .spline-loader .message {
      font-size: 16px;
  }
</style>

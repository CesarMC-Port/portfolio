<template>
  <div class="hidden md:flex spline-wrapper">
    <div class="spline-loader" v-if="loading">
        <div class="loaderSpline"></div>
        <div class="message">Cargando escena...</div>
    </div>
    <iframe
      src="https://my.spline.design/nexbotrobotcharacterconcept-CgMO3IqoiMjBi7PyKazwWDaA/"
      loading="lazy"
      @load="loading = false"
    ></iframe>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    const loading = ref(true);
</script>

<style scoped>
    .spline-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100vh - 60px);
        background: transparent;
    }

    iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100vh - 60px);
        z-index: 5;
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
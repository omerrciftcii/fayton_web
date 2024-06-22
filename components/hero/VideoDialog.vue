<template>
    <div class="video-dialog" v-show="isOpen">
      <div class="dialog-content">
        <video :src="videoSrc" controls autoplay></video>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoSrc: String,
      isOpen: Boolean,
    },
  };
  </script>
  
  <style scoped>
  /* Style the dialog and its content here */
  .video-dialog {
    /* ... */
  }
  </style>
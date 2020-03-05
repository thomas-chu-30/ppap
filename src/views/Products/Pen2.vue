<template>
  <div>
    <p>pen2</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/pen2.jpeg")]
    };
  }
};
</script>

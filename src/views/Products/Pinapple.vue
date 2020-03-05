<template>
  <div>
    <p>pinapple</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/pinapple.jpeg")]
    };
  }
};
</script>

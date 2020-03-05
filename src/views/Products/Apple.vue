<template>
  <div>
    <p>apple</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/apple.png")]
    };
  }
};
</script>

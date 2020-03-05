<template>
  <div>
    <p>pen</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/pen.jpeg")]
    };
  }
};
</script>

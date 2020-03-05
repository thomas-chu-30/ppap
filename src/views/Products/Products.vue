<template>
  <div class="products">
    <h1>this is products header</h1>
    <button @click="pass('home')">back</button>
    <button @click="pass('')">home</button>
    <button @click="pass('pen')">pen</button>
    <button @click="pass('apple')">apple</button>
    <button @click="pass('pen')">pen</button>
    <button @click="pass('pinapple')">pinapple</button>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pass(x) {
      if (x == "home") {
        this.$router.push({ path: "/" });
        return;
      } else {
        this.$router.push({ path: `/Products/${x}` });
      }
    }
  }
};
</script>

<template>
  <div class="home">
    <div>this is home !!!</div>
    <button @click="pass()">let's go shopping</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  methods: {
    pass() {
      this.$router.push({ path: "/Products" });
    }
  }
};
</script>

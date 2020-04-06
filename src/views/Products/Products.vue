<template>
  <div class="products">
    <h1>this is products header</h1>
    <div class="btn-group">
      <div class="btn" :class="{ active: currentActive == 'home' }" @click="pass('home')">
        <p>back</p>
        <div class="wave"></div>
      </div>
      <div class="btn" :class="{ active: currentActive == '' }" @click="pass('')">
        <p>home</p>
        <div class="wave"></div>
      </div>
      <div class="btn" :class="{ active: currentActive == 'pen' }" @click="pass('pen')">
        <p>pen</p>
        <div class="wave"></div>
      </div>
      <div class="btn" :class="{ active: currentActive == 'apple' }" @click="pass('apple')">
        <p>apple</p>
        <div class="wave"></div>
      </div>
      <div class="btn" :class="{ active: currentActive == 'pen2' }" @click="pass('pen2')">
        <p>pen</p>
        <div class="wave"></div>
      </div>
      <div class="btn" :class="{ active: currentActive == 'pinapple' }" @click="pass('pinapple')">
        <p>pinapple</p>
        <div class="wave"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentActive: "",
    };
  },
  methods: {
    pass(x) {
      console.log(x);
      this.currentActive = x;
      console.log(this.currentActive);
      if (x == "home") {
        this.$router.push({ path: "/" });
        return;
      } else {
        this.$router.push({ path: `/Products/${x}` });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  position: relative;
}
@mixin flexCenter() {
  display: flex;
  justify-content: center;
  align-content: center;
}
.btn-group {
  @include flexCenter();
  .btn {
    @include flexCenter();
    height: 50px;
    width: 80px;
    border: 1px solid #ddd;
    overflow: hidden;
    margin: 5px 10px;
    &.active {
      background-color: #3f8efc;
    }
    &:hover {
      border: 1px solid #3f8efc;
      transition: 1s;
      .wave {
        top: 10px;
        transition: 1s;
        background-color: #3f8efc;
      }
      p {
        color: white;
        transition: 1s;
      }
    }
    p {
      line-height: 50px;
      margin: 0px;
      // z-index: 10;
    }
    .wave {
      z-index: -1;
      position: absolute;
      top: 30px;
      height: 120px;
      width: 120px;
      background-color: #ddd;
      border-radius: 40px;
      animation-name: rotate;
      animation-duration: 3s;
      animation-iteration-count: infinite;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>

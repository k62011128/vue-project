<template>
  <div class="wrapper">
    <div class="header">
      <img src="../assets/logo.png" alt="Vue" class="logo">
      <div class="name">Vue3练手项目</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Login',
  components: {},
  setup(props, {emit}) {
  }
});
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  .header{
    font-size: 0;
    display: flex;
    justify-content: center;
    .logo{
      width: 5rem;
      height:  5rem;
      margin-right: 1rem;
    }
    .name{
      font-size: 3rem;
      line-height: 5rem;
    }
  }
}


</style>

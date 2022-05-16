<template>
  <div class="wrapper">
    <div>本项目前端使用的技术栈为Vue3+Sass+TypeScript</div>
    <div @click="go" class="blog">个人博客地址:www.kanami.cn</div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Home',
  components: {},
  setup(props, {emit}) {
    const go = () => {
      open('https://www.kanami.cn')
    }
    return {
      go
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  div{
    height: 3rem;
  }
  .blog {
    color: #8787f6;
    &:hover {
      color: #fa9ee5;
    }
  }
}

</style>

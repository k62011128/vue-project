<template>
  <el-card class="wrapper">
    <el-row v-for="arr in data" :gutter="30" style="width: 100%;" class="row">
      <el-col v-for="item in arr" :span="8">
        <img v-lazy="item.url" :alt="item.name" class="pic">
        <div class="sp">{{item.name}}</div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: 'GoodsPictures',
  components: {},
  setup(props, {emit}) {
    const state = reactive({
      data: [
        [{
          url: require('@/assets/logo.png'),
          name: '懒加载未加载时显示的图标'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
        [{
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: '汉堡'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
        [{
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: '汉堡'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
        [{
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: '汉堡'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
        [{
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: '汉堡'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
        [{
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: '汉堡'
        },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          },
          {
            url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            name: '汉堡'
          }],
      ],

    })
    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  .row{
    line-height: 2rem;
    .pic{
      width: 70%;
    }
    .sp{
      line-height: 1rem;
      margin-bottom: 1rem;
    }
  }

}
</style>

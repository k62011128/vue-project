<template>
  <div id="container">
    <div id="imgUl" :style="styleObject">
      <div id="imgBox">
        <img v-for="pic in picArr" :src="pic">
        <img :src="picArr[0]">
      </div>
    </div>
    <div id="wrapArrow">
      <div id="arrowBox">
        <div id="left"></div>
        <div id="right"></div>
      </div>
    </div>
    <div id="wrapDot">
      <div id="dot">
        <div v-for="pic in picArr"></div>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, ref, toRefs} from "vue";
import {disposeCoordSysRecordIfNeeded} from "echarts/types/src/component/dataZoom/roams";

export default defineComponent({
  name: 'Carousel',
  components: {},
  setup(props, {emit}) {
    const state = reactive({
      picArr: [require('@/assets/pic1.jpeg'), require('@/assets/pic2.jpeg'), require('@/assets/pic3.jpeg'), require('@/assets/pic4.jpeg')],
      transX: 0,
      tsion: true
    })
    const box = ref(null);
    const trans = computed(() => {
      return -(state.transX) * 700
    })
    const styleObject = computed(() => {
      return {
        transform: 'translateX(' + trans.value + 'px)',
        transition: state.tsion ? 'all .5s' : 'none'
      }
    })

    function nxt() {
      state.transX++
      state.tsion = true
      if (state.transX > state.picArr.length) {
        state.tsion = false
        state.transX = 0
      }
    }

    onMounted(() => {
      setInterval(() => {
        nxt()
      }, 3000)
    })
    return {
      ...toRefs(state),
      trans,
      styleObject
    }
  }
});
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  width: 700px;
  height: 400px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;

  #imgUl {
    margin: 0;
    padding: 0;
    width: 700px;
    height: 400px;
    top: 0;

    #imgBox {
      display: flex;

      img {
        width: 700px;
        height: 400px;
      }
    }


  }

  #wrapArrow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    #arrowBox {
      display: flex;
      width: 700px;
      height: 400px;
      align-items: center;

      #left {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        opacity: 0.5;
      }

      #right {
        margin-left: auto;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  #wrapDot {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;

    #dot {
      display: flex;
      width:200px;
      height: 40px;
      justify-content: space-around;
      align-items: center;
      margin:0 auto;

      div {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }


}

</style>

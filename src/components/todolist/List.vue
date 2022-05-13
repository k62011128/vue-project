<template>
  <div>未完成的事件</div>
  <ul>
    <li v-for="(item,index) of arr1" :key="item.id">
      <input type="checkbox" @click="$emit('changeStatus',item)" v-model="item.cekd">{{ item.name }}
      <a @click="$emit('deleteLi',item)">删除</a>
    </li>
  </ul>
  <div>已完成的事件</div>
  <ul>
    <li v-for="(item,index) of arr2" :key="item.id">
      <input type="checkbox" @click="$emit('changeStatus',item)" v-model="item.cekd">{{ item.name }}
      <a @click="$emit('deleteLi',item)">删除</a>
    </li>
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: ' List',
  props: {arr: Array},
  setup(props, {emit}) {
    const state = reactive({})
    const arr1 = computed(() => {
      return props.arr!.filter((item: any) => item.cekd)
    })
    const arr2 = computed(() => {
      return props.arr!.filter((item: any) => !item.cekd)
    })
    return {
      ...toRefs(state),
      arr1,
      arr2
    }
  }

});
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 30px;
}

div {
  line-height: 30px;
}
</style>

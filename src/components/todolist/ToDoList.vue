<template>
  <Input @getNew="getNew"></Input>
  <List :arr="arr" @deleteLi="deleteLi" @changeStatus="changeStatus"></List>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import List from "@/components/todolist/List.vue";
import Input from "@/components/todolist/Input.vue";

export default defineComponent({
  name: ' ToDoList',
  components: {Input, List},
  setup(props, {emit}) {
    const state = reactive({
      arr: [{
        id: 1,
        name: '洗澡',
        cekd: false
      }, {
        id: 2,
        name: '吃饭',
        cekd: false
      }, {
        id: 3,
        name: '睡觉',
        cekd: false
      }, {
        id: 4,
        name: '开香槟',
        cekd: false
      }, {
        id: 5,
        name: '冲浪',
        cekd: false
      }],
      cnt: 5
    })
    const getNew = (e: string) => {
      state.arr.push({id: ++state.cnt, name: e, cekd: false})
    }
    const deleteLi = ({id, name, cekd}: { id: number, name: string, cekd: boolean }) => {
      let index = -1
      for (let i = 0; i <= state.cnt; i++) {
        if (state.arr[i].id === id) {
          index = i;
          break;
        }
      }
      state.arr.splice(index, 1)
    }
    const changeStatus = ({id, name, cekd}: { id: number, name: string, cekd: boolean }) => {
      let index = -1
      for (let i = 0; i <= state.cnt; i++) {
        if (state.arr[i].id === id) {
          index = i;
          break;
        }
      }
      state.arr[index].cekd = !state.arr[index].cekd
    }
    return {
      ...toRefs(state),
      getNew,
      deleteLi,
      changeStatus
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

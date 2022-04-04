<template>
  <Input @change="getNew"></Input>
  <List :arr="arr" @de="deleteElement" @cs="changeStatus"></List>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import List from "@/components/todolist/List.vue";
import Input from "@/components/todolist/Input.vue";

export default defineComponent({
  name: ' ToDoList',
  components: {List, Input},
  data() {
    return {
      arr: [{
        name: '洗澡',
        cekd: false
      }, {
        name: '吃饭',
        cekd: false
      }, {
        name: '睡觉',
        cekd: false
      }, {
        name: '开香槟',
        cekd: false
      }, {
        name: '冲浪',
        cekd: true
      }]
    }
  },
  methods: {
    getNew(val: any) {
      this.arr.push({
        name: val,
        cekd: false
      })
    },
    deleteElement(item: any) {
      let index = this.arr.indexOf(item)
      this.arr.splice(index, 1);
    },
    changeStatus(item: any) {
      let index = this.arr.indexOf(item)
      if (item.cekd === false)
        this.arr[index].cekd = true;
      else
        this.arr[index].cekd = false;
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

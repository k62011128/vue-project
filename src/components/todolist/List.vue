<template>
  <div>未完成的事件</div>
  <ul>
    <li v-for="(item,index) of arr1">
        <input type="checkbox" @click="$emit('cs',item)">{{ item.name }}
        <a @click="$emit('de',item)" >删除</a>
    </li>
  </ul>
  <div>已完成的事件</div>
  <ul>
    <li v-for="(item,index) of arr2">
      <input type="checkbox" @click="$emit('cs',item)">{{ item.name }}
      <a @click="$emit('de',item)">删除</a>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: ' List',
  components: {},
  emits:['de','cs'],
  props: {
    arr: Array
  },
  data() {
    return {
      tr:true,
      fal:false
    }
  },
  computed: {
      arr1(){
        return (this.arr as Array<any>[]).filter((item:any)=>{
          if(item.cekd===false)
          {
            return true
          }
          else
            return false
        })
      },
    arr2(){
      return (this.arr as Array<any>[]).filter((item:any)=>{
        if(item.cekd===true)
        {
          return true
        }
        else
          return false
      })
    }
  }
});
</script>

<style lang="scss" scoped>
li{
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 30px;
}
div{
  line-height: 30px;
}
</style>

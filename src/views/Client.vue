<template>
  <el-card class="wrapper">
    <div class="header">
      <el-button type="primary" class="btn">
        <el-icon class="icon">
          <Plus></Plus>
        </el-icon>
        <span class="txt">解除禁用</span>
      </el-button>
      <el-button type="danger" class="btn">
        <el-icon class="icon">
          <DeleteFilled/>
        </el-icon>
        <span class="txt">禁用账户</span>
      </el-button>
    </div>
    <el-table class="table"
     :data="tableData"
    >
      <el-table-column
          type="selection"
          width="100">
      </el-table-column>
      <el-table-column
          label="昵称"
          prop="clientName"
         >
      </el-table-column>
      <el-table-column
          label="账号id"
          prop="clientId"
         >
      </el-table-column>
      <el-table-column
          label="注册时间"
          prop="registerDate"
         >
      </el-table-column>
      <el-table-column
          label="状态"
          prop="priority"
         >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {Plus, DeleteFilled} from '@element-plus/icons-vue'

export default defineComponent({
  name: 'Client',
  components: {Plus, DeleteFilled},
  setup(props, {emit}) {
    const state = reactive({
      tableData:[
        {
          clientName:"阿斯蒂芬",
          clientId:"123456",
          registerDate:"2022.3.3",
          priority:"正常"
        },
        {
          clientName:"阿斯蒂芬",
          clientId:"123456",
          registerDate:"2022.3.3",
          priority:"正常"
        },
        {
          clientName:"阿斯蒂芬",
          clientId:"123456",
          registerDate:"2022.3.3",
          priority:"正常"
        },
        {
          clientName:"阿斯蒂芬",
          clientId:"123456",
          registerDate:"2022.3.3",
          priority:"正常"
        },
        {
          clientName:"阿斯蒂芬",
          clientId:"123456",
          registerDate:"2022.3.3",
          priority:"正常"
        },
      ]
    })
    onMounted(()=>{

    })
    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  width: 100%;
  flex-direction: column;
   .header{
     display: flex;
     height: 2rem;
     justify-content: left;
     align-items: center;
     .btn{
       display: flex;
       justify-content: center;
       align-items: center;
       .icon{
         width: 0.5rem;
       }
       .txt{
         flex: 1;
         line-height: 0.5rem;
         height: 0.5rem;
       }
     }
   }
  .table{
    flex:1;
  }
;
}
</style>

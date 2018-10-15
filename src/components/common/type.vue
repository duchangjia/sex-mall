<template>
    <div class="">
      <span class="type" v-for="(em,index) in typeArr" :key="index" :class="[em===1?'type_01':em===2?'type_02':'type_03',index!==0?'margin_left':'']">{{em===1?'调情':em===2?'加强':'仿真'}}</span>
    </div>
</template>

<script>
export default {
  name: 'type',
  props: {
    typeArr: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
  .type{
    border-radius: 4px;
    font-size: 24px;
    padding: 5px 11px;
  }
  .margin_left{
    margin-left: 8px;
  }
  .type_01{
    color:#a450f2;
    border: 2px solid #a450f2;
  }
  .type_02{
    color:#13cfdb;
    border: 2px solid #13cfdb;
  }
  .type_03{
    color:#5db8ff;
    border: 2px solid #5db8ff;
  }
  .margin_t{
    margin-top: 40px;
  }
</style>

<template>
  <div>
    <div class="header_pic">
    </div>
    <div class="fix_position box_shadow widthAuto">
      <i class="icon iconfont icon-didian"></i>广州天河区明系小区89号
    </div>
    <h6 class="good_list widthAuto">商品列表</h6>
    <div class="widthAuto goods_content">
      <goods></goods>
    </div>
    <fooder></fooder>
  </div>
</template>

<script>
import Goods from '@/components/common/goods'
import Fooder from '@/components/common/food'
export default {
  name: 'index',
  components: {
    Goods,
    Fooder
  }
}
</script>

<style lang="less" scoped>
.header_pic{
  height: 230px;
  width: 100%;
  background-color: #ccc;
}
.fix_position{
  font-size: 36px;
  line-height: 80px;
  height: 80px;
  background-color: white;
  border-radius: 0 0 8px 8px;
  text-align: center;
  .icon-didian{
    font-size: 40px;
    color: #ff3660;
  }
}
  .good_list{
    font-size: 40px;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    line-height: 100px;
  }
  .goods_content{
    margin-bottom: 118px;
  }
</style>

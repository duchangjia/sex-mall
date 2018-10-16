<template>
<div class="pay-sessect">
  <div class="widthAuto pay_sessect box_shadow">
    <div><i class="icon iconfont icon-ico_commodity_defaul"></i></div>
    <h6 class="pay_text">支付成功，箱门已打开</h6>
    <div class="pay_detail">
      <div class="pay_detail_content">
        <span>订单号</span>
        <span>201808781245</span>
      </div>
      <div class="pay_detail_content">
        <span>支付方式</span>
        <span>支付宝</span>
      </div>
      <div class="pay_detail_content">
        <span>订单金额</span>
        <span>￥132.00</span>
      </div>
    </div>
    <div class="btn pay_sessect_btn">
        返回首页
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pay-sessect'
}
</script>

<style scoped lang="less">
.pay_sessect{
  margin-top: 101px;
  text-align: center;
  padding: 135px 0px;
  border-radius: 4px;
  div{
    i{
      font-size: 150px;
      color: #ff3660;
      line-height: 150px;
    }
  }
  .pay_text{
    font-size: 44px;
    line-height: 44px;
    padding-top: 44px;
    font-weight: normal;
  }
  .pay_detail{
    width: 558px;
    margin: 0 auto;
    color: #666;
    font-size: 30px;
    line-height: 30px;
    padding-top: 124px;
    .pay_detail_content{
      display: flex;
      justify-content: space-between;
      padding-top: 34px;
    }
    .pay_detail_content:nth-child(1){
      padding-top: 0px;
    }
  }
  .pay_sessect_btn{
    width: 340px;
    height: 80px;
    border-radius: 40px;
    margin: 133px auto 0px;
    line-height: 80px;
    font-size: 36px;
  }
}
</style>

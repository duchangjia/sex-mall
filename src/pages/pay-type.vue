<template>
    <div class="pay_type box_shadow widthAuto">
      <h6>支付方式</h6>
      <div class="pay_select">
        <div class="pay">
          <div>
            <i class="icon iconfont icon-zhifubao"></i>
            <span>支付宝</span>
          </div>
          <i class="icon iconfont icon-queding"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pay_type'
}
</script>

<style scoped lang="less">
.pay_type{
  h6{
    border-bottom: #e7e7e7 1px solid;
    font-size: 36px;
    line-height: 100px;
    font-weight: normal;
    padding: 0px 32px;
  }
  .pay_select{
    .pay{
      display: flex;
      font-size: 36px;
      justify-content: space-between;
      div{
        display: -webkit-box;
        -webkit-box-align: center;
        i{
          font-size: 63px;
        }
        span{
        }
      }
      i{
        font-size: 44px;
      }
    }
  }
}
</style>

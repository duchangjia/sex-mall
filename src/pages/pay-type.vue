<template>
    <div class="pay_type">
      <!--<div class="box_shadow widthAuto">
        <h6>支付方式</h6>
        <div class="pay_select">
          <div class="pay">
            <div>
              <i class="icon iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </div>
            <i class="icon iconfont icon-queding maincolor"></i>
          </div>
          <div class="pay">
            <div>
              <i class="icon iconfont icon-weixin-copy weixi"></i>
              <span>微信</span>
            </div>
            <i class="icon iconfont icon-queding"></i>
          </div>
        </div>
      </div>-->
      <div class="box_shadow widthAuto" style="margin-top: 10px">
        <h6>支付方式</h6>
        <div class="pay_select">
          <div class="pay">
            <div>
              <i class="icon iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </div>
            <i class="icon iconfont icon-queding" :class="{'maincolor':paySelect===0}" @click="typeBtnZF"></i>
          </div>
          <div class="pay">
            <div>
              <i class="icon iconfont icon-weixin-copy weixi"></i>
              <span>微信</span>
            </div>
            <i class="icon iconfont icon-queding" :class="{'maincolor':paySelect===1}" @click="typeBtnWX"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pay_type',
  data () {
    return {
      paySelect: 0
    }
  },
  methods: {
    typeBtnZF () {
      this.paySelect = 0
    },
    typeBtnWX () {
      this.paySelect = 1
    }
  }
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
      padding:0px 36px;
      line-height: 110px;
      div{
        display: flex;
        i{
          font-size: 63px;
          color: #01aaed;
        }
        .weixi{
          color: #3ab133;
        }
        span{
          color:#666;
          padding-left:37px;
        }
      }
      i{
        font-size: 44px;
        color:#d1d1d1;
      }
      .maincolor{
        color:#ff3660
      }
    }
  }
}
</style>

<template>
    <div class="pay_type">
      <!--<div class="box_shadow widthAuto">
        <h6>支付方式</h6>
        <div class="pay_select">
          <div class="pay_good">
            <span class="product_pic"></span>
            <span class="product_name">电动仿真器具</span>
            <span class="product_price"><a href="">￥</a>88.88</span>
            <i class="icon iconfont icon-close-b maincolor"></i>
          </div>
          <div class="pay_good">
            <span class="product_pic"></span>
            <span class="product_name">电动仿真器具</span>
            <span class="product_price"><a href="">￥</a>88.88</span>
            <i class="icon iconfont icon-close-b maincolor"></i>
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
      <div class="btn sure_btn">
        确定支付
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
  padding-bottom: 107px;
  h6{
    border-bottom: #e7e7e7 1px solid;
    font-size: 36px;
    line-height: 100px;
    font-weight: normal;
    padding: 0px 32px;
  }
  .sure_btn{
    border-radius: 0;
    height: 107px;
    line-height: 107px;
    font-size: 36px;
    position: fixed;
    width: 100%;
    bottom: 0px;
  }
  .pay_select{
    .pay_good{
      display: flex;
      font-size: 36px;
      justify-content: space-between;
      padding:20px 36px;
      border-bottom: #e7e7e7 1px solid;
      line-height: 100px;
      .product_pic{
        width: 100px;
        height: 100px;
        border: #e7e7e7 1px solid;
        display: block;
        padding-left:0px;
        border-radius: 8px;
      }
      .product_name{
        width: 287px;
      }
      .product_price{
        color:#666;
        a{
          font-size: 26px;
        }
      }
      i{
        font-size: 44px;
        color:#d1d1d1;
      }
    }
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

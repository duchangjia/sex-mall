<template>
  <div class="fooder">
    <div class="widthAuto">
      <div class="fooder_left">合计:
        <span class="common">¥ 0</span>
        <a class="common">（0件商品）</a>
      </div>
      <div class="fooder_right">
        <div class="footer_btn">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food'
}
</script>

<style scoped lang="less">
  .fooder{
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 98px;
    width: 100%;
    background-color: white;
    .fooder_left{
      font-size: 36px;
      float: left;
      line-height: 98px;
      .common{
        font-size: 30px;
      }
      span{
        font-size: 30px;
        color: #ff3660;
      }
      a{
        font-size: 30px;
        color:#666;
      }
    }
    .fooder_right{
      float: right;
      position: relative;
      .footer_btn{
        width:250px;
        height: 124px;
        background-image: url("../../common/images/home_settlement@2x.png");
        background-size: cover;
        position: absolute;
        right: -25px;
        font-size: 30px;
        color:white;
        text-align: center;
        line-height: 108px;
      }
    }
  }
</style>

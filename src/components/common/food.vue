<template>
  <div class="fooder">
    <div class="widthAuto">
      <div class="fooder_left">合计:
        <span class="common">¥ {{price}}</span>
        <a class="common">（{{count}}件商品）</a>
      </div>
      <div class="fooder_right">
        <div class="footer_btn btn" @click="Settlement" v-bind:class="{'disabled':count===0}">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food',
  computed: {
    price () {
      return this.$store.state.cart.price
    },
    count () {
      return this.$store.state.cart.count
    }
  },
  methods: {
    Settlement () {
      if (this.count > 0) {
        this.$router.push({path: 'pay-type'})
      }
    }
  }
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
        width:200px;
        height: 70px;
        margin-top: 14px;
        right: -25px;
      }
      .disabled{
        background: #e5e5e5;
      }
    }
  }
</style>

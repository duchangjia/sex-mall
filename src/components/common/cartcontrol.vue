<template>
    <div class="cartcontrol">
      <i class="icon iconfont icon-jianshao_f" v-if="item.countNum" @click.stop.prevent="reduce(item.price,item.code-1)"></i>
      <span class="text_num" v-if="item.countNum">{{item.countNum}}</span>
      <i class="icon iconfont icon-zengjia" @click.stop.prevent="increase(item.price,item.code-1)"></i>
    </div>
</template>

<script>
export default {
  name: 'cartcontrol',
  props: {
    item: {
      type: Object
    }
  },
  mounted () {
    console.log(this.item)
  },
  methods: {
    increase (price, key) {
      this.$store.commit('INCREASE')
      this.$store.commit('PRICE_INCREASE', Number(price))
      // 添加单个的数据
      if (!this.item.countNum) {
        this.$set(this.item, 'countNum', 1)
      } else {
        this.item.countNum++
      }
    },
    reduce (price, key) {
      this.$store.commit('REDUCE')
      this.$store.commit('PRICE_REDUCE', price)
      this.item.countNum--
    }
  }
}
</script>

<style scoped lang="less">
  .cartcontrol{
    display: flex;
    i{
      font-size: 70px;
      &:before{
        background: -webkit-linear-gradient(180deg, #ff3660, #ff8887);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .text_num{
      font-size: 50px;
      line-height: 70px;
      display: block;
      text-align: center;
      width: 60px;
      color: #111111;
    }
  }
</style>

<template>
  <div>
    <div class="goods box_shadow" @click="linkDetail(item)" v-for="(item,key) in this.goodsList" :key="key" :class="{margin_t:key!==0}">
      <div class="goods_mark">
        <span>{{item.code}}号门</span>
      </div>
      <div class="product_content">
        <div class="pic">
          <img :src="item.url" alt="">
        </div>
        <div class="text">
          <h6 class="text_title">{{item.name}}</h6>
          <p class="text_instr">{{item.instruction}}</p>
          <div class="product_type">
            <type :typeArr="item.type"></type>
          </div>
          <div class="price_text"><span>￥</span>{{item.price}}</div>
          <div class="price_add">
            <cart-control :item="item" v-if="item"></cart-control>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Type from './type'
import CartControl from './cartcontrol'
export default {
  name: 'goods',
  props: {
    goodsList: {
      type: Array
    }
  },
  data () {
    return {
      /* goodsList: [
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188}
      ] */
    }
  },
  components: {
    Type,
    CartControl
  },
  mounted () {
  },
  methods: {
    linkDetail (item) {
      this.$router.push({path: 'detail', query: item})
    }
    /* increase (price, key) {
      this.$store.commit('INCREASE')
      this.$store.commit('PRICE_INCREASE', price)
      console.log(this.goodsList)
      this.goodsList[key].countNum++
    },
    reduce (price, key) {
      this.$store.commit('REDUCE')
      this.$store.commit('PRICE_REDUCE', price)
      this.goodsList[key].countNum--
    } */
  }
}
</script>

<style scoped lang="less">
  .margin_t{
    margin-top: 40px;
  }
  .goods{
    height: 340px;
    width: 658px;
    background-color: white;
    position: relative;
    margin-left: 20px;
    .goods_mark{
      width:170px;
      height: 100px;
      background-image: url("../../common/images/home_label@2x.png");
      background-size: 100%;
      position: absolute;
      top:3px;
      left:-39px;
      font-size: 30px;
      text-align: left;
      span{
        color: white;
        line-height: 90px;
        margin-left: 32px;
      }
    }
    .product_content{
      width: 570px;
      height: 240px;
      margin: 0 auto;
      padding-top: 50px;
      .pic{
        width: 220px;
        height: 240px;
        background-color: white;
        float: left;
        img{
          width: 100%;
          vertical-align:baseline;
        }
      }
      .text{
        float: left;
        height: 100%;
        position: relative;
        padding-left: 30px;
        width: 320px;
        .text_title{
          font-size: 40px;
          text-align: left;
        }
        .text_instr{
          font-size: 30px;
          color:#666;
          line-height: 70px;
          text-align: left;
        }
        .product_type{
          text-align: left;
        }
        .price_text{
          font-size:40px;
          color:#ff3660;
          width: 50%;
          text-align: left;
          position: absolute;
          bottom: 0px;
          span{
            font-size: 30px;
          }
        }
        .price_add{
          background-size: cover;
          position: absolute;
          bottom: -20px;
          right:0px;
        }
      }
    }
  }
</style>

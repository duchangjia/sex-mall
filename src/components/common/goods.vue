<template>
  <div>
    <div class="goods box_shadow" v-for="(item,key) in this.goodsList" :key="key" :class="{margin_t:key!==0}">
      <div class="goods_mark">
        <span>{{key+1}}号门</span>
      </div>
      <div class="product_content">
        <div class="pic">

        </div>
        <div class="text">
          <h6 class="text_title">{{item.name}}</h6>
          <p class="text_instr">{{item.instruction}}</p>
          <div class="product_type">
            <type :typeArr="item.type"></type>
            <!--<span class="type" v-for="(em,index) in item.type" :key="index" :class="[em===1?'type_01':em===2?'type_02':'type_03',index!==0?'margin_left':'']">{{em===1?'调情':em===2?'加强':'仿真'}}</span>-->
            <!--<span class="type type_02">加强</span>
            <span class="type type_03">仿真</span>-->
          </div>
          <div class="price_text"><span>￥</span>188</div>
          <div class="price_add">
            <i class="icon iconfont icon-zengjia"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Type from './type'
export default {
  name: 'goods',
  data () {
    return {
      goodsList: [
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188},
        {name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188}
      ]
    }
  },
  components: {
    Type
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
        line-height: 80px;
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
        background-color: #ccc;
        float: left;
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
          i{
            font-size: 70px;
            &:before{
              background: -webkit-linear-gradient(180deg, #ff3660, #ff8887);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
</style>

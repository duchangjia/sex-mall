<template>
    <div class="detail">
      <!--<div class="detail_header">
        <div class="widthAuto">
          <i class="icon iconfont icon-fanhui"></i>
        </div>
      </div>-->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide,key) in swiperSlides" :key="key"><img :src="slide.url" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="detail_intru box_shadow widthAuto">
        <div class="detail_con">
          <div class="detail_intru_title">
            <div>1号门</div>
            <h6>电动仿真器具</h6>
          </div>
          <div class="type">
            <type :typeArr="type"></type>
          </div>
          <p class="type_intru">它的模样没什么差别，而且更加漂亮功能也更加丰富。由于材质的问题，给女性多重关怀，更充分的情趣。</p>
          <div class="price">
            <span><a>￥</a>128.90</span>
            <div class="btn">加入购物车</div>
          </div>
        </div>
      </div>
      <h6 class="good_list widthAuto">其他商品</h6>
      <div class="widthAuto goods_content">
        <goods></goods>
      </div>
      <fooder></fooder>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import Type from '@/components/common/type'
import Goods from '@/components/common/goods'
import Fooder from '@/components/common/food'
export default {
  name: 'detail',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      },
      swiperSlides: [
        {url: require('../common/images/home_add@2x.png')},
        {url: require('../common/images/home_label@2x.png')},
        {url: require('../common/images/home_location@2x.png')}
      ],
      type: [1, 2]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide,
    Type,
    Goods,
    Fooder
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  /*.detail{
    padding-top: 88px;
  }*/
.detail_header{
  width: 100%;
  height: 88px;
  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 1000;
  line-height: 88px;
    .icon-fanhui{
    font-size: 38px;
  }
}
.good_list{
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  margin-top: 30px;
  line-height: 100px;
}
.detail_intru{
  background-color: white;
  border-radius: 8px;
  .detail_con{
    padding:87px 50px 50px;
    .detail_intru_title{
      width: 100%;
      display: flex;
      div{
        width: 104px;
        height: 44px;
        background: #5d98f9;
        font-size: 28px;
        text-align: center;
        color: white;
        border-radius: 4px;
      }
      h6{
        line-height: 44px;
        font-size: 44px;
        margin-left: 10px;
      }
    }
    .type_intru{
      color: #666;
      font-size: 30px;
      line-height: 44px;
    }
    .price{
      display: flex;
      justify-content: space-between;
      span{
        color: #ff3660;
        font-size: 48px;
        line-height: 124px;
        a{
          font-size: 36px;
        }
      }
      div{
        width: 240px;
        height: 70px;
        font-size: 30px;
        color: white;
        line-height: 70px;
        text-align: center;
        margin-top: 28px;
      }
    }
  }
  .type{
    padding: 29px 0px;
  }
}
.goods_content{
  margin-bottom: 118px;
}

</style>

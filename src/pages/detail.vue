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
            <div>{{item.code}}号门</div>
            <h6>{{item.name}}</h6>
          </div>
          <div class="type">
            <type :typeArr="item.type"></type>
          </div>
          <p class="type_intru">{{item.instruction}}</p>
          <div class="price">
            <span><a>￥</a>{{item.price}}</span>
            <div class="join_cart">
              <!--<a class="btn" style="display: block">加入购物车</a>-->
              <!--加入购物车-->
              <a class="btn" v-show="!item.countNum" style="display: block" @click="addCart">加入购物车</a>
              <cart-control ref="cartControl" :item="item" v-show="item.countNum"></cart-control>
            </div>
          </div>
        </div>
      </div>
      <h6 class="good_list widthAuto">其他商品</h6>
      <div class="widthAuto goods_content">
        <goods :goodsList="goodsList"></goods>
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
import CartControl from '@/components/common/cartcontrol'
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
        {url: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750'},
        {url: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750'},
        {url: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750'}
      ],
      type: [],
      item: {},
      goodsList: [
        {code: 4, name: '电动延时环01', instruction: '球体震动调节兴奋度', type: [1, 2], price: 188, url: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 5, name: '电动延时环02', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 6, name: '电动延时环03', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114'}
      ]
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
    Fooder,
    CartControl
  },
  mounted () {
    this.$nextTick(() => {
      this.item = this.$route.query
    })
  },
  watch: {
    '$route.query.code': {
      deep: true,
      handler: function (newVal, oldVal) {
        this.item = this.$route.query
      }
    }
  },
  methods: {
    addCart () {
      this.$refs.cartControl.increase(this.item.price, this.item.code - 1)
    }
  }
}
</script>

<style lang="less" scoped>
  /*.detail{
    padding-top: 88px;
  }*/
  img{
    width:100%;
  }
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
        line-height: 44px;
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
      .join_cart{
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

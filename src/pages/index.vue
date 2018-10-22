<template>
  <div>
    <div class="header_pic">
      <img src="http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750" alt="">
    </div>
    <div class="fix_position box_shadow widthAuto">
      <i class="icon iconfont icon-didian"></i>广州天河区明系小区89号
    </div>
    <h6 class="good_list widthAuto">商品列表</h6>
    <div class="widthAuto goods_content">
      <goods :goodsList="goodsList"></goods>
    </div>
    <fooder></fooder>
  </div>
</template>

<script>
import Goods from '@/components/common/goods'
import Fooder from '@/components/common/food'
export default {
  name: 'index',
  data () {
    return {
      goodsList: [
        {code: 1, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'},
        {code: 2, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 3, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 3], price: 188, url: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 4, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2], price: 188, url: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 5, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114'},
        {code: 6, name: '电动延时环', instruction: '球体震动调节兴奋度', type: [1, 2, 3], price: 188, url: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114'}
      ]
    }
  },
  components: {
    Goods,
    Fooder
  }
}
</script>

<style lang="less" scoped>
.header_pic{
  height: 230px;
  width: 100%;
  overflow: hidden;
  background-color: #ccc;
  img{
    width: 100%;
  }
}
.fix_position{
  font-size: 36px;
  line-height: 80px;
  height: 80px;
  background-color: white;
  border-radius: 0 0 8px 8px;
  text-align: center;
  .icon-didian{
    font-size: 40px;
    color: #ff3660;
  }
}
  .good_list{
    font-size: 40px;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    line-height: 100px;
  }
  .goods_content{
    margin-bottom: 118px;
  }
</style>

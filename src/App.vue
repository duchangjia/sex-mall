<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
  background-color: #f8f8f8;
  color: #111111;
}
.widthAuto{
  width: 678px;
  margin: 0 auto;
}
.box_shadow{
  box-shadow: 2px 5px 12px 1px #e1e1e1;
}
.swiper-pagination-bullet{
  width: 16px !important;
  height: 16px !important;
}
.swiper-pagination-bullet-active{
  width: 32px !important;
  height: 16px !important;
  background-color: #ff3660!important;
  border-radius: 8px !important;
}
  .btn{
    font-size: 30px;
    color:white;
    text-align: center;
    line-height: 70px;
    background: linear-gradient(to left, #ff3660, #ff8887);
    border-radius: 35px;
  }
</style>

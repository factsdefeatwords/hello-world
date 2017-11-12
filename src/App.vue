<template>

  <div id="mxMobile">
    <head>
      <title>{{title}}</title>
    </head>
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      title:'民信金融',
    }
  },
  components: {
    Loading
  },
  computed: {
    isLoading() {
      this.$store.getters.isLoading;
    }
  },
  created(){
    let vm=this;
    //监听修改title
    bus.$on('changeTitle', function (_title) {
      vm.title=_title;
    })
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';


  html{
    height: 100%;
  }
  body {
    background-color: #fbf9fe;
    text-align: center;
    height: 100%;
    #mxMobile{
      max-width: 10rem;
      margin: auto;
      height: 100%;
    }
  }
  .weui-btn{
    height: 1.17rem;

  }

  .weui-btn_primary{
    background-color: @lightYellow!important;
    color: @mdeepBlue!important;
    border-color: @lightYellow!important;
  }

  .weui-cell{
    font-family:PingFangSC-Regular;
    font-size:0.4rem;
  }
  .weui-cell:before{
    top: auto!important;
    bottom: 0rem!important;
    border-top: 1px solid @lightGrey!important;
    color: @lightGrey!important;
    left: 0.13rem!important;
    right: 0.13rem!important;

  }
  .weui-btn:after{
    border: 0px!important;
  }

  .vux-x-input{
    padding: 0rem 15px!important;
    line-height: 1.14rem;
  }

  .mx-validate{
    padding-left: 0.21rem;
    border-left: 0.03rem solid @lighterBlack;
    color:@mdeepBlue;
  }

  .check-icon{
    width: 100%;
    text-align: left;
    margin-top: 0.41rem;
    color: @lightestBlack;
    line-height: 0.32rem;
    height: 0.32rem;
  }


  .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
    color: @lightYellow!important;
  }
</style>

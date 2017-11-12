<template>
  <div class="">
    <div v-if="page=='succeed'" class="succeed-body">
      <div class="show-coupon-box">
        <img class="show-img" src="../../assets/login/get-coupon.png" alt="">
        <span>{{totalNumber}}元</span>
      </div>
      <h3 class="title">注册成功!</h3>
      <p class="info">恭喜您获得{{totalNumber}}元的新手红包！</p>
      <x-button @click.native="toRealName" type="primary" class="login-button">实名认证 领取{{realNameCoupon}}红包</x-button>
      <span class="home">开始理财</span>
    </div>

    <div v-if="page=='succeedOver'" class="succeed-body">
      <div class="show-coupon-box">
        <img class="show-img" src="../../assets/login/get-coupon.png" alt="">
        <span>{{bankCouponNumber}}元</span>
      </div>
      <h3 class="title">注册成功!</h3>
      <p class="info">恭喜您获得{{bankCouponNumber}}元的新手红包！</p>
      <x-button @click.native="toHome" type="primary" class="login-button">立即开始理财</x-button>
    </div>

    <div v-if="page=='realName'" class="realName-body">
      <div class="title-head">民信金融</div>
      <div class="progress-bar-box">
        <div class="finish"></div>
        <div class=""></div>
      </div>
      <x-input class="name-box" placeholder="请输入姓名" id-type="china-name"></x-input>
      <x-input class="idCard-box" placeholder="请输入身份证号码"></x-input>
      <x-button @click.native="toBankCard" type="primary" class="realName-button">确定</x-button>
      <span class="home">先不实名，去理财</span>
    </div>

    <div v-if="page=='bankCard'" class="bankCard-body">
      <div class="title-head">民信金融</div>
      <div class="progress-bar-box">
        <div class="finish"></div>
        <div class="finish"></div>
      </div>
      <x-input class="name-box" placeholder="请输入您的银行卡号（绑定后同卡进出）" id-type="china-name"></x-input>
      <x-input class="idCard-box" placeholder="请输入您的银行预留手机号码"></x-input>
      <x-input class="validate-box" type="text" placeholder="请输入验证码" v-model="validateCode" :max="6">
        <span slot="right" class="mx-validate">发送验证码</span>
      </x-input>
      <x-button @click.native="toOver" type="primary" class="bankCard-button">确定</x-button>
      <div class="bank-box"><span class="left">支持银行</span><span class="right">先不实名，去理财</span></div>
    </div>


  </div>
</template>

<script>
  import { XButton,XInput } from 'vux'
  export default {
    components: {
      XButton,
      XInput,
    },
    data () {
      return {
        page:'succeed',
        //红包金额
        totalNumber:888,
        //实名红包金额
        realNameCoupon:188,

        //绑卡送红包金额
        bankCouponNumber:188,
      }
    },
    methods: {
      //打开实名认证页面
      toRealName:function(){
        this.page='realName';
        //修改title
        bus.$emit('changeTitle','实名认证');
      },
      //打开绑卡页面
      toBankCard:function(){
        this.page='bankCard';
        //修改title
        bus.$emit('changeTitle','绑定银行卡');
      },

      //打开认证完成页面
      toOver:function(){
        this.page='succeedOver';
        //修改title
        bus.$emit('changeTitle','认证成功');
      },

    },
    created(){

    },
    watch: {
    }
  }
</script>

<style lang="less">
  .succeed-body{
    color: @mdeepBlue;
    .show-coupon-box{
      margin-top: 0.61rem;
      height: 3.63rem;
      text-align: center;
      position: relative;
      .show-img{
        position: absolute;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      span{
        position: relative;
        z-index: 1;
        top: 0.8rem;
        font-size: 0.53rem;
      }
    }
    .title{
      line-height: 0.96rem;
      font-size: 0.67rem;
      margin-top: 0.8rem;
    }
    .info{
      font-size: 0.48rem;
      line-height: 0.67rem;
      margin-top: 0.48rem;
    }
    .login-button{
      margin-top: 1.55rem;
      margin-bottom: 0.69rem;
    }
    .home{
      font-size: 0.43rem;
      line-height: 0.59rem;
      color: @mbrown;
    }
  }

  .realName-body,.bankCard-body{
    .progress-bar-box{
      margin-top: 0.21rem;
      div{
        width: 1.6rem;
        height: 0.11rem;
        display: inline-block;
        background-color: @lightestGrey;
        margin: 0px 0.11rem;
      }
      .finish{
        background-color: @lightYellow;
      }
    }
    .name-box{
      margin-top: 1.28rem;
    }
    .idCard-box{
      margin-top: 0.31rem;
    }
    .validate-box{
      margin-top: 0.31rem;
    }
    .realName-button{
      margin-top: 2.49rem;
      margin-bottom: 0.72rem;
    }
    .bankCard-button{
      margin-top: 1.03rem;
      margin-bottom: 0.72rem;
    }
    .home{
      font-size: 0.43rem;
      line-height: 0.4rem;
      color: @mbrown;
    }
    .bank-box{
      font-size: 0.4rem;
      line-height: 0.4rem;
      .left{
        float: left;
        color: @mdeepBlue;
      }
      .right{
        float: right;
        color: @mbrown;
      }
    }
  }
</style>

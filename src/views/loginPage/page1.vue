<template>
  <div :class="'total-body '+((showPage=='login'||showPage=='smsLogin')?'login-body':'register-body')">
    <img class="login-bg" src="../../assets/login/bg.png" alt="">

    <template v-if="!page||page=='lr'">
      <mxMobileLogin @click="setShowPage('login')" :class="'ani-box slide-login-box '+(showBox=='out'?' out-box':(showBox=='on'?'show-box':''))"></mxMobileLogin>
      <mxMobileRegister @click="setShowPage('register')" :class="'ani-box slide-register-box '+(showBox=='out'?' out-box':(showBox=='on'?'show-box':''))"></mxMobileRegister>
    </template>

    <template v-if="page=='smsLogin'||page=='forget'">
      <mxMobileSmsLogin @click="setShowPage('smsLogin')" :class="'ani-box slide-login-box '+(showBox=='out'?' out-box':(showBox=='on'?'show-box':''))"></mxMobileSmsLogin>
      <mxMobileForget @click="setShowPage('forget')" :class="'ani-box slide-register-box '+(showBox=='out'?' out-box':(showBox=='on'?'show-box':''))"></mxMobileForget>
    </template>

    <template  v-if="page=='succeed'">
      <mxMobileSucceed :class="'ani-box slide-succeed-box '+(showBox=='out'?' out-box':(showBox=='on'?'show-box':''))"></mxMobileSucceed>
    </template>
  </div>
</template>

<script>
  import { default as mxMobileLogin  } from './login';//登录页面
  import { default as mxMobileRegister  } from './register';//注册页面

  import { default as mxMobileSmsLogin  } from './smsLogin';//登录页面
  import { default as mxMobileForget  } from './forget';//注册页面
  import { default as mxMobileSucceed  } from './succeed';//注册成功页面页面
  export default {
    components: {
      mxMobileLogin,
      mxMobileRegister,
      mxMobileSmsLogin,
      mxMobileForget,
      mxMobileSucceed,
    },
    data () {
      return {
        //lr为login&register页面,smsLogin或者forget为smsLogin&forget页面
        page:'lr',

        //当前显示在表层的模块
        showPage:'login',
        //表单盒子显示状态
        showBox:'out',

        showPageReal:{
          login:'登录',
          register:'注册',
          smsLogin:'验证码登录',
          forget:'忘记密码',
          succeed:'注册成功',
        }
      }
    },
    methods: {
      //输入框焦点消失事件传递
      setShowPage:function(key){
        this.showPage=key;

        //广播当前活动页面是哪一个
        bus.$emit('changeLoginPage',key);

        //修改title
        bus.$emit('changeTitle',this.showPageReal[key]);
      },
    },
    created(){


      this.page=this.$route.query.page;

      if(this.page){
        this.showPage=this.page;
        bus.$emit('changeTitle',this.showPageReal[this.page]);
      }

      //初始化的时候把组件显示出来
      let vm=this;
      setTimeout(function(){
        vm.showBox="";
        //广播当前打开的页面
        bus.$emit('changeLoginPage',vm.showPage);
        setTimeout(function(){
          vm.showBox="on";
        },500);
      },100);




    },
  }
</script>

<style lang="less">
  .total-body{
    width: 100%;
    height: 100%;
    background: #E8E9ED;
    position: relative;
    overflow: hidden;
    .login-bg{
      width: 10rem;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    .ani-box{
      background:rgba(255,255,255,1);
      border-radius: 0.08rem;
      position: absolute;
      box-shadow: 0rem 0rem 0.37rem 0.11rem rgba(60, 60, 60, 0.14);
      padding: 0rem 0.37rem;
      box-sizing: border-box;

      .title-head{
        font-size:0.8rem;
        font-family:STSongti-SC-Black;
        color:@mdeepBlue;
        line-height:1.12rem;
        margin-top: 0.8rem;
      }
    }
    .slide-login-box{
      width: 9.15rem;
      height: 10.35rem;
      left: 0.425rem;
      top: 1.09rem;
      z-index: 10;
      transition: all 0.6s cubic-bezier(.33, -0.41, .65, 1.4);
    }
    .slide-register-box{
      left: 0.83rem;
      top: 3.33rem;
      width: 8.34rem;
      height: 9.55rem;
      z-index: 4;
      transition: all 0.7s cubic-bezier(.33, -0.41, .65, 1.4);
    }
    .slide-succeed-box{
      width: 9.15rem;
      height: 11.79rem;
      left: 0.425rem;
      top: 1.07rem;
      z-index: 10;
      transition: all 0.6s cubic-bezier(.33, -0.41, .65, 1.4);
    }
    .out-box{
      top: 12.1rem;
    }
    .show-box{
      transition: all 0.6s cubic-bezier(0.51, -1.05, 0.6, 2.11);
    }
  }
  .register-body{
    .slide-login-box{
      left: 0.83rem;
      width: 8.34rem;
      height: 9.55rem;
      top: 1.07rem;
      z-index: 4;
      transition: all 0.65s cubic-bezier(.33, -0.41, .73, 1.05);
    }
    .slide-register-box{
      width: 9.15rem;
      height: 10.35rem;
      left: 0.425rem;
      top: 2.51rem;
      z-index: 10;
      transition: all 0.6s cubic-bezier(.33, -0.41, .75, .95);
    }
    .out-box{
      top: 12.1rem;
    }
    .show-box{
      transition: all 0.6s cubic-bezier(0.51, -1.05, 0.6, 2.11);
    }
  }
</style>

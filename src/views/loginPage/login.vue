<template>
  <div @click="click" class="">
    <div v-if="page=='login'" class="login-body">
      <div class="title-head">民信金融</div>

      <x-input class="mobile-box" placeholder="请输入手机号码" v-model="mobile" :max="11" is-type="china-mobile"></x-input>
      <x-input class="password-box" :type="showPassword?'text':'password'" placeholder="请输入登录密码" v-model="password" :max="11">
        <img v-if="!showPassword" @click="changePasswordStatus(true);" slot="right" class="password-img" src="../../assets/comment/open-eyes.png">
        <img v-if="showPassword" @click="changePasswordStatus(false);" slot="right" class="password-img" src="../../assets/comment/close-eyes.png">
      </x-input>
      <x-button type="primary" class="login-button">登录</x-button>

      <div class="other-way">
        <div class="to-other"><span @click="goPage('smsLogin')">验证码登录</span></div>
        <div class="to-other"><span @click="goPage('forget')">忘记密码</span></div>
      </div>

    </div>
    <div v-else class="login-back">
      <span>已有账号，马上登录</span>
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
        page:'login',
        mobile:'',
        password:'',

        //是否显示密码
        showPassword:false,
      }
    },
    methods: {
      //把点击事件传播到外部
      click:function(){
        this.$emit('click');
      },

      changePasswordStatus:function(_status){
        this.showPassword=_status;
      },

      goPage:function(_page){
        this.$router.push({name: 'login', query: {page: _page}});
      },
    },
    created(){

      let vm=this;
      //监听修改当前活动页面
      bus.$on('changeLoginPage', function (_page) {
        setTimeout(function(){
          vm.page=_page;
        },300);
      });
    },
    watch: {

    }
  }
</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .login-back{
    position: relative;
    height: 100%;
    span{
      position: absolute;
      top: 0px;
      color: @mbrown;
      font-size:0.4rem;
      margin-top: 0.4rem;
      width: 100%;
      left: 0rem;
    }
  }

  .login-body{
    .mobile-box{
      margin-top:  1.25rem;
    }
    .password-box{
      margin-top: 0.31rem;
      .password-img{
        vertical-align: middle;
        width: 30px;
      }
    }
    .login-button{
      margin-top: 1.48rem;
      margin-bottom: 0.61rem;
    }
    .other-way{
      color:@lighterGrey;
      line-height:0.37rem;
      font-size: 0rem;
      .to-other{
        position: relative;
        right: 0.5em;
        font-size:0.35rem;
        display: inline-block;
        padding: 0rem 0.43rem;
      }
      .to-other:first-of-type{
        font-size:0.35rem;
        border-right: 0.03rem solid @lighterBlack;
      }

    }
  }
</style>

<template>
  <div @click="click" class="">
    <div v-if="page=='register'" class="register-body">
      <div class="title-head">民信金融</div>
      <x-input class="mobile-box" placeholder="请输入手机号码" v-model="mobile" :max="11" is-type="china-mobile"></x-input>
      <x-input class="validate-box" type="text" placeholder="请输入验证码" v-model="validateCode" :max="6">
        <span slot="right" class="mx-validate">发送验证码</span>
      </x-input>
      <x-input class="password-box" :type="showPassword?'text':'password'" placeholder="请设置6～12位数字和字母组成的登录密码" v-model="password" :max="13">
        <img v-if="!showPassword" @click="changePasswordStatus(true);" slot="right" class="password-img" src="../../assets/comment/open-eyes.png">
        <img v-if="showPassword" @click="changePasswordStatus(false);" slot="right" class="password-img" src="../../assets/comment/close-eyes.png">
      </x-input>

      <check-icon :value.sync="check" class="check-icon">我已阅读并同意服务协议和注册协议</check-icon>

      <x-button type="primary" @click.native="register" class="login-button">注册领取888红包</x-button>
    </div>
    <div v-else class="register-back">
      <span>10秒立即注册</span>
    </div>
  </div>
</template>

<script>
  import { XButton,XInput,CheckIcon } from 'vux'
  export default {
    components: {
      XButton,
      XInput,
      CheckIcon,
    },
    data () {
      return {
        page:'register',
        mobile:'',
        validateCode:'',
        password:'',

        check:false,
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
      //注册按钮
      register:function(){
        this.$router.push({name: 'login', query: {page: "succeed"}});
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
  .register-back{
    position: relative;
    height: 100%;
    span{
      position: absolute;
      bottom: 0px;
      color: @mred;
      font-size:0.4rem;
      margin-bottom: 0.4rem;
      width: 100%;
      left: 0rem;
    }
  }
  .register-body{
    .mobile-box{
      margin-top:  0.72rem;
    }
    .validate-box{
      margin-top: 0.31rem;
    }
    .login-button{
      margin-top: 1rem;
      margin-bottom: 0.61rem;
    }
    .password-box{
      margin-top: 0.31rem;
      .password-img{
        vertical-align: middle;
        width: 30px;
      }
    }
    .other-way{
      font-size:0.35rem;
      color:@lighterGrey;
      line-height:0.37rem;
      .to-other{
        display: inline-block;
        width: 2.61rem;
      }
      .to-other:first-of-type{
        border-right: 0.03rem solid @lighterBlack;
      }

    }
  }
</style>

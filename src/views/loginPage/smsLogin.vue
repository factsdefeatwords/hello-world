<template>
  <div @click="click" class="">
    <div v-if="page=='smsLogin'" class="smsLogin-body">
      <div class="title-head">民信金融</div>
      <x-input class="mobile-box" placeholder="请输入手机号码" v-model="mobile" :max="11" is-type="china-mobile"></x-input>
      <x-input class="validate-box" type="text" placeholder="请输入验证码" v-model="validateCode" :max="6">
        <span slot="right" class="mx-validate">发送验证码</span>
      </x-input>
      <x-button type="primary" class="login-button">登录</x-button>
    </div>
    <div v-else class="smsLogin-back">
      <span>验证码快速登录</span>
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
        page:'smsLogin',
        mobile:'',
        validateCode:'',

        //是否显示密码
        showPassword:false,
      }
    },
    methods: {
      //把点击事件传播到外部
      click:function(){
        this.$emit('click');
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
  .smsLogin-back{
    position: relative;
    height: 100%;
    span{
      position: absolute;
      top: 0px;
      color: @mdeepBlue;
      font-size:0.4rem;
      margin-top: 0.4rem;
      width: 100%;
      left: 0rem;
    }
  }

  .smsLogin-body{
    .mobile-box{
      margin-top:  1.25rem;
    }
    .validate-box{
      margin-top: 0.31rem;
    }
    .login-button{
      margin-top: 1.48rem;
      margin-bottom: 0.61rem;
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

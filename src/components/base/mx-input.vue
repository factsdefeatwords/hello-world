<template>
  <span class="mx-input-body">
    <x-input v-model="inputValue"
      :title="title"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :keyboard="keyboard"
      :is-type="isType"
      :min="min"
      :max="max"
      :show-clear="showClear"
      :text-align="textAlign"
      :debounce="debounce"
      :placeholder-align="placeholderAlign"
      :label-width="labelWidth"
      :mask="mask"
      :should-toast-error="shouldToastError">
    </x-input>
  </span>
</template>

<script>
  import { XInput } from 'vux'
  export default {
    name:"mx-input",
    components: {
      XInput,
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: [String, Number],
      name: String,
      readonly: Boolean,
      disabled: Boolean,
      keyboard: String,
      inlineDesc: String,
      isType: [String, Function],
      min: Number,
      max: Number,
      showClear: {
        type: Boolean,
        default: true
      },
      textAlign: String,
      debounce: Number,
      placeholderAlign: String,
      labelWidth: String,
      mask: String,
      shouldToastError: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        inputValue:"",
      }
    },
    created(){
      //初始化的时候把组价预设的值置入input内
      this.inputValue = (this.value === undefined || this.value === null) ? '' : this.value;

    },
    watch: {
      //双向数据绑定
      inputValue(val){
        this.$emit('input',val);
      },
      value(val){
        this.inputChange(val);
      },
    },
  }
</script>

<style class="less" scoped>
  .mx-input-body{

  }
</style>

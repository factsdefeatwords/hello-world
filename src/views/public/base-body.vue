<template>
  <div class="base-body">
    <router-view :key="key"></router-view>
  </div>

</template>

<script>
  export default {
    data () {
      return {
      }
    },
    components: {
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>

<style lang="less">
  .base-body{
    width: 100%;
    height: 100%;
  }
</style>

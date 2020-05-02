<template>
  <div>
    <!-- 进行管理数据：实现双向绑定 -->
    <input
      :type="type"
      :value="value" 
      @input="onInput"
      v-bind="$attrs"
      @blur="onBlur"
    />
  </div>
</template>

<script>
  import emitter from '@/mixins/emitter.js'
  export default {
    inheritAttrs: false, // 关闭特性继承
    mixins: [emitter],
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value);

        // 值发生变化的时候需要进行校验
        // this.$parent.$emit('validate')
        console.log('00000000', this.dispatch())
        this.dispatch('KFormItem', 'validate')
      },
      onBlur() {
        // this.$parent.$emit('validate');
      }
    }
  }
</script>

<style lang="postcss" scoped>

</style>
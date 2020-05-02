<template>
  <div>
    <!-- 是一个容器，需插槽 -->
    <!-- 是传递进来的 -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 错误信息展示 -->
    <p v-if="error" class="error">{{ error }}</p>
    <!-- <p>{{ form.rules[prop] }}</p> -->
  </div>
</template>

<script>
  import Schema from 'async-validator'
  import emitter from '@/mixins/emitter.js'
  export default {
    inject: ['form'],
    mixins: [emitter],
    componentName: 'KFormItem',
    /**
      inject: {
        form2: 'form'
      }

      inject: {
        form2: {
          from: 'form'
          defalt: {}
        }
      }
     */
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted () {
      console.log(this.form.rules[this.prop]);
      console.log(this.prop);
      this.$on('validate', () => {
        this.validate();
      })
      // 判断KForm是否传递prop，是否进行校验
      if (this.prop) {
        // 派发事件通知KForm
       this.dispatch('KForm', 'fomAddField', [this])
      }
    },
    methods: {
      validate() {
        // 执行校验
        // 获取值以及校验规则
        const rules = this.form.rules[this.prop]
        const value = this.form.model[this.prop]
        // 执行校验：使用第三方async-validator
        // 创建描述对象
        const descriptor = {[this.prop]: rules};
        const valudator = new Schema(descriptor)
        return valudator.validate({[this.prop]: value}, errors =>{
          console.log(errors, '---------------')
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    },
  }
</script>

<style lang="postcss" scoped>
.error {
  color: red;
}
</style>
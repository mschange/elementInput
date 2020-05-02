<template>
  <div>
    <!-- 容器： 存放所有的表单项 -->
    <!-- 存储值载体： 保存数据以及校验规则  -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    componentName: 'KForm',
    data() {
      return {
        fields: []
      }
    },
    provide() {
      return {
        // 把当前组件的实例传递下去
        form: this
      }
    },
    props: {
      // 数据模型
      model: {
        type: Object,
        required: true 
      },
      // 校验
      rules: Object
    },
    methods: {
      validate(cb) {
        // 遍历子组件里面的所有FormItem,执行校验规则
        // 全部通过才算通过
        // const tasks = this.$children
        //   .filter(item => item.prop)
        //   .map(item => item.validate());
        
        // 使用mixins降低耦合
         const tasks = this.fields.map(item => item.validate());
        console.log(this.fields, 'fiel')
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false))
      }
    },
    created() {
      this.$on('fomAddField', item => {
        console.log(item, '-------------')
        this.fields.push(item);
        console.log(this)
      })
      console.log(this.fields)
    }
  }
</script>

<style lang="postcss" scoped>

</style>
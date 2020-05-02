<template>
  <div id="app">
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名" prop="username">
        <Kinput v-model="model.username" placeholder="请输入"></Kinput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <Kinput v-model="model.password" placeholder="请输入"></Kinput>
      </KFormItem>
      <KFormItem>
        <button @click="onSubmit">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import Kinput from '@/components/Finput.vue'
import KFormItem from '@/components/KFormItem.vue'
import KForm from '@/components/KForm.vue'
export default {
  name: 'App',
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    }
  },
  components: {
    Kinput,
    KFormItem,
    KForm
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        this.$notice({
          title: '村长喊你来搬砖',
          message: valid ? '校验成功，登录！' : '校验失败，请重试！'
        })
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

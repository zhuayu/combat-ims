<template>
  <div class="login-page" @keyup.enter="submitForm">
    <div class="login-container">
      <h2>IMS 内容管理登录</h2>
      <el-form class="sign-form" :model="signForm" status-icon :rules="rules" ref="signForm">
        <el-form-item prop="phone">
          <el-input type="number" v-model="signForm.phone" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="signForm.password" placeholder="登录密码" auto-complete="off"></el-input>
        </el-form-item>
        <div>
          <el-button class="sign-submit" type="primary" @click="submitForm" :loading="submitLoad">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitLoad: false,
      signForm: {
        phone: '',
        password: '',
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { trigger: 'blur', pattern: /^1[3456789]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
        ],
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      }
    }
  },

  methods: {
    submitForm() {
      this.$refs['signForm'].validate((valid) => {
        if(!valid) return;

        this.submitLoad = true;
        let data = {
          phone   : this.signForm.phone,
          password: this.signForm.password,
        }
        // eslint-disable-next-line
        console.log(data);
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login-page{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container{
    width: 300px;
    padding: 40px;
    border: 1px solid #e4e4e4;
  }

  .sign-submit{
    display: block;
    width: 100%;
  }
}
</style>

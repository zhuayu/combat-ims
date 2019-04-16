<template>
  <div class="login-page" @keyup.enter="submitForm">
    <div class="bg-section">
      <img src="@/assets/login_bg.jpg">
    </div>
    <div class="login-section">
      <div class="header-section">
        <img src="@/assets/login_logo.png">
      </div>
      <div class="login-container">
        <h2 class="login-content-title">极客信息发布管理</h2>
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
  </div>
</template>

<script>
import userModel from '@/models/user'

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
        userModel.login(data).then(res=>{
          if(res.code === 200){
            let token = res.data.token;
            localStorage.setItem('token',token);
            this.$router.replace({ name: 'Article'});
          }else{
            this.$message.error('登录失败，账号密码错误')
            this.submitLoad = false;
          }
        }).catch(()=>{
          this.$message.error('服务器错误，请联系管理员')
          this.submitLoad = false;
        })
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login-page{
  height: 100vh;
  display: flex;

  .bg-section{
    width: 40%;
    height: 100vh;
    font-size: 0;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .login-section{
    position: relative;
    flex: 1;
    padding: 40px 60px;
  }

  .login-container{
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .login-content-title{
      font-size: 30px;
      margin-bottom: 60px;
      font-weight: 500;
    }
  }

  .sign-submit{
    display: block;
    width: 100%;
    background-color: #35b558;
  }
}
</style>

<template>
  <div class="h100">
    <el-container class="h100">
      <el-aside width="270px">
        <Menu :default-active="defaultActive"></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button @click="logout" icon="el-icon-service">退出系统</el-button>
        </el-header>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer>Copyright © 2018 Design by jikexueyuan All Rights Reserved</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'Layout',
  props: {
    defaultActive: String,
  },
  created () {

  },
  methods: {
    logout (){
      localStorage.clear();
      this.$router.replace({ name: 'Login'});
    }
  },
  components: {
    Menu,
  }
}
</script>

<style scoped lang="less">
.h100{
  height: 100vh;
}

.el-header, .el-footer {
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  border-right: 1px solid #e4d4e4;
}

.el-main {
  color: #333;
}

.el-header{
  text-align: right;
  padding-right: 20px;
  line-height: 60px;
  font-size: 18px;
  border-bottom: 1px solid #e4d4e4;
}

.el-footer{
  font-size: 12px;
  color: #333;
  height: 40px!important;
  line-height: 40px;
  letter-spacing: .5px;
  text-align: center;
  border-top: 1px solid #e4d4e4;
  // background-color: #B3C0D1;
}

.el-aside{
  background-color: #fff;
}

</style>

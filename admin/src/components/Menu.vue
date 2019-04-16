<template>
  <div>
    <div class="logo-container">
      <img class="logo" src="~@/assets/login_logo.png">
      <span>信息管理</span>
    </div>
    <el-col>
      <el-menu
        :router="true"
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="/admin/user">
          <i class="el-icon-date"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/classify">
          <i class="el-icon-date"></i>
          <span slot="title">分类管理</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-share"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/article">文章列表</el-menu-item>
            <el-menu-item index="/admin/article/create">新建文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  props: {
    defaultActive: String,
  },
  methods: {
    // eslint-disable-next-line
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    // eslint-disable-next-line
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.logo-container{
  height: 60px;
  line-height: 59px;
  color: #002140;
  font-size: 14px;
  border-bottom: 1px solid #e4e4e4;

  .logo{
    height: 40px;
    margin: 10px 20px;
    vertical-align: middle;
  }
}

.el-menu{
  border-right: 0;
}
</style>

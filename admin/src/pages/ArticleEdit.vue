<template>
  <Layout :default-active="'/article'">
      <div class="pg-main-header">
        <router-link to="/article">返回文章列表</router-link>
      </div>
      <div class="pg-main-body">
        <el-form class="form-container">
          <el-form-item label="标题" label-width="60px">
            <el-input name="title"></el-input>
          </el-form-item>
          <el-form-item label="分类" label-width="60px">
            <el-select placeholder="请选择">
                <el-option
                  v-for="item in classify"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="内容" label-width="60px">
            <el-input
              type="textarea"
              placeholder="请输入内容">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  data () {
    return {
      classify: [{
        id: 1,
        name: '分类一'
      },{
        id: 2,
        name: '分类二'
      }]
    }
  },
  methods: {

  },
  components: {
    Layout
  }
}
</script>

<style lang="less">
  .pg-main-body{
    margin-top: 20px;

    .form-container{
      width: 80%;
    }
  }
</style>

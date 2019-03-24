<template>
  <Layout :default-active="'/article/create'">
      <div class="pg-main-header">
        <router-link to="/article">返回文章列表</router-link>
      </div>
      <div class="pg-main-body">
        <el-form class="form-container">
          <el-form-item label="标题" label-width="60px">
            <el-input name="title" v-model="article.title"></el-input>
          </el-form-item>
          <el-form-item label="分类" label-width="60px">
            <el-select placeholder="请选择" v-model="article.classify_id">
                <el-option
                  v-for="item in classify"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="内容" label-width="60px">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="article.content">
            </el-input>
          </el-form-item>
          <el-form-item label-width="60px">
            <el-button type="primary" @click="handleAdd">新建</el-button>
          </el-form-item>
        </el-form>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import articleModel from '@/models/article'
import classifyModel from '@/models/classify'

export default {
  data () {
    return {
      article: {
        title: '',
        classify_id: null,
        content: ''
      },
      classify: [{
        id: 1,
        name: '123'
      }]
    }
  },
  created () {
    classifyModel.list().then( res => {
      this.classify = res.data;
    })
  },
  methods: {
    handleAdd() {
      let title = this.article.title;
      let classify_id = this.article.classify_id;
      let content = this.article.content;
      if(!title || !classify_id || !content){
        this.$message.error('缺少必要参数')
        return
      }
      articleModel.add({title, classify_id, content}).then(()=>{
        this.$router.push({ path: '/article' });
        this.$message.success('添加成功');
      })
      .catch(()=>{
        this.$message.error('添加失败');
      })
    }
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

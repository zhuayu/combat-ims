<template>
  <Layout :default-active="'/article'">
      <div class="pg-main-header">
        <router-link to="/article/create">新建文章</router-link>
      </div>
      <div class="pg-main-body">
        <el-table
          :data="tableData"
          size="small"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="classify"
            label="分类">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
              <router-link class="button" :to="'/article/edit/' + scope.row.id">编辑</router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
const mookArticleData = [{
  id: 1,
  title: '标题',
  classify: '分类一',
}]
export default {
  data () {
    return {
      tableData: mookArticleData,
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
  }
</style>

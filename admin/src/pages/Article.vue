<template>
  <Layout :default-active="'/admin/article'">
      <div class="pg-main-header">
        <router-link :to="{name: 'ArticleCreate'}">新建文章</router-link>
      </div>
      <div class="pg-main-body">
        <el-table
          :data="tableData"
          size="small"
          style="width: 100%">
          <el-table-column
            label="index">
            <template slot-scope="scope">
              {{scope.$index + 1}}
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="classify_name"
            label="分类">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
              <el-button  type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id)">编辑</el-button>
              <el-button  type="text" icon="el-icon-delete" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import articleModel from '@/models/article'

export default {
  data () {
    return {
      tableData: [],
    }
  },
  created () {
    articleModel.list().then( res => {
      this.tableData = res.data;
    })
  },
  methods: {
    handleEdit (id) {
      this.$router.push({ name: 'ArticleEdit', params: { id } });
    },
    handleDelete (data,index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(()=>{
        return articleModel.delete(data.id)
      })
      .then(()=>{
        this.tableData.splice(index,1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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
  }
</style>

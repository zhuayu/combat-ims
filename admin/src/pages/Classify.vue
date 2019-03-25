<template>
  <Layout :default-active="'/admin/classify'">
      <div class="pg-main-header">
        <el-button type="primary" @click="handleAdd">添加分类</el-button>
        <el-dialog :title="formBoxTitle" :visible="formBoxShow" :show-close="false">
          <el-form >
            <el-form-item label="分类" label-width="60px">
              <el-input name="name" width="200" v-model="formBoxValue"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </div>
        </el-dialog>
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
            prop="name"
            label="分类名称">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
              <el-button  type="text" icon="el-icon-edit" @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
              <el-button  type="text" icon="el-icon-delete" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import classifyModel from '@/models/classify'

export default {
  data () {
    return {
      tableData: [],
      dataIndex: null,
      formBoxID: null,
      formBoxShow: false,
      formBoxTitle: '',
      formBoxValue: '',
    }
  },
  created () {
    classifyModel.list().then( res => {
      this.tableData = res.data;
    })
  },
  methods: {
    handleAdd() {
      this.formBoxShow = true;
      this.formBoxTitle = '添加分类';
      this.formBoxID = '';
      this.formBoxValue = '';
    },
    handleCancel() {
      this.formBoxShow = false;
    },
    handleEdit(data,index) {
      this.dataIndex = index
      this.formBoxTitle = '编辑分类';
      this.formBoxID = data.id;
      this.formBoxValue = data.name;
      this.formBoxShow = true;
    },
    handleSave() {
      let id = this.formBoxID;
      let name = this.formBoxValue;
      let index = this.dataIndex;
      let params = { name };
      if(!name ){
        this.$message.error('缺少必要参数')
        return
      }
      // 修改
      if(id){
        classifyModel.update(id,params)
          .then(() => {
            this.tableData[index].name = name
            this.formBoxShow = false;
            this.$message.success('修改成功');
          })
          .catch(()=>{
            this.formBoxShow = false;
          })
      // 添加
      }else{
        classifyModel.add(params)
          .then(res => {
            let id = res.data.id;
            params.id = id;
            this.tableData.push(params)
            this.formBoxShow = false;
            this.$message.success('添加成功');
          })
          .catch(()=>{
            this.formBoxShow = false;
          })
      }
    },
    handleDelete(data,index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(()=>{
        return classifyModel.delete(data.id)
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

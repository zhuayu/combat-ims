<template>
  <Layout :default-active="'/classify'">
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
              <el-button  type="text" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
const mookClassifyData = [{
  id: 1,
  name: '分类一',
}]
export default {
  data () {
    return {
      tableData: mookClassifyData,
      formBoxID: null,
      formBoxShow: false,
      formBoxTitle: '',
      formBoxValue: '',
    }
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
    handleEdit(data) {
      this.formBoxTitle = '编辑分类';
      this.formBoxID = data.id;
      this.formBoxValue = data.name;
      this.formBoxShow = true;
    },
    handleSave() {

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

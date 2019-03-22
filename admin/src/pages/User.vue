<template>
  <Layout :default-active="'/user'">
      <div class="pg-main-header">
        <el-button type="primary" @click="handleAddUser">添加用户</el-button>
        <el-dialog :title="formBoxTitle" :visible="formBoxShow" :show-close="false">
          <el-form >
            <el-form-item label="姓名" label-width="60px">
              <el-input name="name" width="200" v-model="formBoxValue.name"></el-input>
            </el-form-item>
            <el-form-item label="手机" label-width="60px">
              <el-input name="phone" width="200" v-model="formBoxValue.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="60px">
              <el-input type="password" name="password" width="200" v-model="formBoxValue.password"></el-input>
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
          :data="userData"
          size="small"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
              <el-button  type="text" icon="el-icon-edit" @click="handleEditUser(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
const mookUserData = [{
  id: 1,
  name: 'Jax',
  phone: '13511111111',
  password: '12312313'
}]
export default {
  data () {
    return {
      userData: mookUserData,
      formBoxID: null,
      formBoxShow: false,
      formBoxTitle: '',
      formBoxValue: {
        name: '',
        password: '',
        phone: '',
      },
    }
  },
  methods: {
    handleAddUser() {
      this.formBoxShow = true;
      this.formBoxTitle = '添加用户';
      this.formBoxID = '';
      this.formBoxValue.name = '';
      this.formBoxValue.password = '';
      this.formBoxValue.phone = '';
    },
    handleCancel() {
      this.formBoxShow = false;
    },
    handleEditUser(data) {
      this.formBoxTitle = '编辑用户';
      this.formBoxID = data.id;
      this.formBoxValue.name = data.name;
      this.formBoxValue.password = data.password;
      this.formBoxValue.phone = data.phone;
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

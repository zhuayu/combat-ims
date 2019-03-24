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
              <el-button  type="text" icon="el-icon-edit" @click="handleEditUser(scope.row,scope.$index)">编辑</el-button>
              <el-button  type="text" icon="el-icon-delete" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </Layout>
</template>

<script>
import userModel from '@/models/user'
import Layout from '@/components/Layout'

export default {
  data () {
    return {
      userData: [],
      dataIndex: null,
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
  created () {
    userModel.list().then( res => {
      this.userData = res.data;
    })
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
      this.formBoxID = '';
      this.formBoxValue.name = '';
      this.formBoxValue.password = '';
      this.formBoxValue.phone = '';
    },
    handleEditUser(data,index) {
      this.formBoxTitle = '编辑用户';
      this.formBoxID = data.id;
      this.formBoxValue.name = data.name;
      this.formBoxValue.password = data.password;
      this.formBoxValue.phone = data.phone;
      this.formBoxShow = true;
      this.dataIndex = index
    },
    handleSave() {
      let id = this.formBoxID;
      let name = this.formBoxValue.name;
      let phone = this.formBoxValue.phone;
      let password = this.formBoxValue.password;
      let index = this.dataIndex;
      let params = { name, phone, password }
      if(!name || !phone || !password){
        this.$message.error('缺少必要参数')
        return
      }
      // 修改
      if(id){
        userModel.update(id,params)
          .then(() => {
            this.userData[index].name = name
            this.userData[index].phone = phone
            this.userData[index].password = password
            this.formBoxShow = false;
            this.$message.success('修改成功');
          })
          .catch(()=>{
            this.formBoxShow = false;
          })
      // 添加
      }else{
        userModel.add(params)
          .then(res => {
            let id = res.data.id;
            params.id = id;
            this.userData.push(params)
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
        return userModel.delete(data.id)
      })
      .then(()=>{
        this.userData.splice(index,1)
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

<template>
  <div class="g-verify">
    <div class="m-search">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="用户ID">
          <el-input size="medium" v-model="form.userId" placeholder="用户ID"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input size="medium" v-model="form.username" placeholder="用户昵称"></el-input>
        </el-form-item>
        <el-form-item label="用户院校">
          <el-input size="medium" v-model="form.school" placeholder="用户院校"></el-input>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select size="medium" v-model="form.userType" placeholder="用户状态">
            <el-option label="所有状态" :value="null"></el-option>
            <el-option label="正常用户" :value="0"></el-option>
            <el-option label="新用户" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="this.search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="m-table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="用户ID"
          width="100">
        </el-table-column>
        <el-table-column
          label="用户名"
          width="200">
          <template slot-scope="scope">
            <div class="u-user-info">
              <UserHeader :src="scope.row.header" class="header" :width="42"></UserHeader>
              <span class="username">{{scope.row.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="院校专业">
          <template slot-scope="scope">
            {{scope.row.school}} {{scope.row.grade}} {{scope.row.major}}
          </template>
        </el-table-column>
        <el-table-column
          width="170"
          label="注册时间">
          <template slot-scope="scope">
            {{scope.row.createdAt.replace(/T|Z/g, ' ').split('.')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          width="170"
          label="更新时间">
          <template slot-scope="scope">
            {{scope.row.updatedAt.replace(/T|Z/g, ' ').split('.')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="类型"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.userType === 1" type="success">新用户</el-tag>
            <el-tag v-if="scope.row.userType === 0" type="info">正常用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="showUserDetail(scope.row.id)">查看详情</el-button>
            <el-button type="danger" size="mini" @click="handleClickUser(scope.row.id)">发送消息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="m-controller">
      <div class="u-btn">
      </div>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="this.page"
        :page-count="this.totalPage">
      </el-pagination>
    </div>
    <el-dialog
      title="用户详情"
      :visible.sync="userDetailShow"
      width="500px"
      center>
      <UserDetail :person="this.personDetail"/>
    </el-dialog>
    <el-dialog
      title="发送消息"
      :visible.sync="msgBox"
      width="500px">
      <el-input v-model="message.content" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="send()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getAllUser, getUserDetail, sendMessage } from '@/api/'
import UserHeader from '@/components/UserHeader'
import UserDetail from '@/components/UserDetail'
import { Message } from 'element-ui';
export default {
  data() {
    return {
      page: 1,
      totalPage: 1,
      personDetail: {},
      userDetailShow: false,
      msgBox: false,
      message: {
        id: 0,
        content: ''
      },
      form: {
        userId: '',
        username: '',
        school: '',
        userType: null,
      },
      tableData: [],
    }
  },
  mounted() {
    this.getData(this.page)
  },
  components: {
    UserHeader, UserDetail
  },
  methods: {
    search() {
      this.getData(1)
    },
    async handleCurrentChange(val) {
      this.getData(val)
    },
    async getData(page) {
      const condition = {}
      if (this.form.userId !== '') {
        condition.id = this.form.userId
      }
      if (this.form.username !== '') {
        condition.username = this.form.username
      }
      if (this.form.school !== '') {
        condition.school = this.form.school
      }
      if (this.form.userType !== null) {
        condition.userType = this.form.userType
      }
      const result = await getAllUser(page, 10, condition)
      this.page = page
      this.tableData = result.content.list
      this.totalPage = result.content.totalPage
    },
    async showUserDetail(oId) {
      const result = await getUserDetail(oId)
      if (result.code === 200 && result.content !== null) {
        this.personDetail = result.content
        this.userDetailShow = true
      }
    },
    handleClickUser(id) {
      this.message.id = id
      this.msgBox = true
    },
    cancel() {
      this.message = {
        id: 0,
        content: '',
      }
      this.msgBox = false
    },
    async send() {
      const result = await sendMessage(this.message)
      if (result.code === 200) {
        Message.success('操作成功')
        this.cancel()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.g-verify {
  .m-search {
    border-bottom: 1px solid #DCDFE6;
  }
  .m-hot-table {
    margin-bottom: 40px;
  }
  .m-table {
    min-height: 530px;
  }
  .m-pagination {
    padding: 16px 0;
    text-align: right;
  }
  .m-controller {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
  }
  .u-user-info {
    display: flex;
    align-items: center;
    .username {
      margin-left: 8px;
    }
  }
  .u-controller {
    margin-top: 24px;
    text-align: center;
  }
}
</style>

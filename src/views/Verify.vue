<template>
  <div class="g-verify">
    <div class="m-search">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="用户ID">
          <el-input size="medium" v-model="form.userId" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input size="medium" v-model="form.username" placeholder="用户昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="this.search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="m-table">
      <el-table
        :data="tableData"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
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
          label="注册时间">
          <template slot-scope="scope">
            {{scope.row.createdAt.replace(/T|Z/g, ' ').split('.')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间">
          <template slot-scope="scope">
            {{scope.row.updatedAt.replace(/T|Z/g, ' ').split('.')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="showUserDetail(scope.row.id)">详情</el-button>
            <el-button type="success" size="mini">通过</el-button>
            <el-button type="danger" size="mini">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="m-controller">
      <div class="u-btn">
        <el-button type="primary" size="mini" @click="handleSelectAll">全选</el-button>
        <el-button type="primary" size="mini" @click="handleClearAll">反选</el-button>
        <el-button type="success" size="mini">批量通过</el-button>
      </div>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="this.page"
        :page-count="this.totalPage">
      </el-pagination>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="userDetailShow"
      width="30%"
      center>
      <UserDetail :msg="this.msg"/>
    </el-dialog>
  </div>
</template>
<script>
import { getUnVerifyUser } from '@/api/'
import UserHeader from '@/components/UserHeader'
import UserDetail from '@/components/UserDetail'
export default {
  data() {
    return {
      page: 1,
      totalPage: 1,
      multipleSelection: [],
      msg: 'he',
      userDetailShow: false,
      form: {
        userId: '',
        username: '',
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
    handleSelectAll() {
      for (let i = 0; i < this.tableData.length; i++) {
        this.$refs.multipleTable.toggleRowSelection(this.tableData[i], true)
      }
    },
    handleClearAll() {
      for (let i = 0; i < this.tableData.length; i++) {
        this.$refs.multipleTable.toggleRowSelection(this.tableData[i])
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    search() {
      this.page = 1
      this.getData(this.page)
    },
    async handleCurrentChange(val) {
      this.page = val
      this.getData(this.page)
    },
    async getData(page) {
      const condition = {}
      if (this.form.userId !== '') {
        condition.id = this.form.userId
      }
      if (this.form.username !== '') {
        condition.username = this.form.username
      }
      const result = await getUnVerifyUser(page, 10, condition)
      this.tableData = result.content.list
      this.totalPage = result.content.totalPage
    },
    showUserDetail(oId) {
      this.msg = oId
      this.userDetailShow = true
    }
  }
}
</script>
<style lang="scss" scoped>
.g-verify {
  .m-search {
    border-bottom: 1px solid #DCDFE6;
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
}
</style>

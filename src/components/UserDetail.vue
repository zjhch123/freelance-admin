<template>
  <div class="g-userDetail">
    <main>
      <SimpleRow className="u-row" name="用户名">
        {{person.name}}
      </SimpleRow>
      <SimpleRow className="u-row" name="类型" v-if="person.userType">
        <el-tag v-if="person.userType === 1" type="success">新用户</el-tag>
        <el-tag v-if="person.userType === 0" type="info">正常用户</el-tag>
      </SimpleRow>
      <SimpleRow className="u-row" name="个人照片">
        <UserHeader :src="person.header" :width="52"/>
      </SimpleRow>
      <SimpleRow className="u-row" name="城市">
        {{ person.city }}
      </SimpleRow>
      <SimpleRow className="u-row" name="院校专业">
        {{ person.school }} {{ person.grade }} {{ person.major }}
      </SimpleRow>
      <SimpleRow className="u-row" name="从事职业">
        {{ person.job }}
      </SimpleRow>
      <SimpleRow className="u-row" name="主要作品">
        {{ person.production }}
      </SimpleRow>
      <SimpleRow className="u-row" name="主要职业">
        {{ person.jobs.join(' ') }}
      </SimpleRow>
      <SimpleRow className="u-row" name="代表作品">
        {{ person.productions.join(' ') }}
      </SimpleRow>
      <SimpleRow className="u-row" name="个人介绍">
        <span v-for="(row, i) in person.introduction.split('\n')" :key="i">
          {{row}} <br/>
        </span>
      </SimpleRow>
      <SimpleRow className="u-row" name="提交时间">
        {{person.createdAt.replace(/T|Z/g, ' ').split('.')[0]}}
      </SimpleRow>
      <SimpleRow className="u-row" name="更新时间">
        {{person.updatedAt.replace(/T|Z/g, ' ').split('.')[0]}}
      </SimpleRow>
    </main>
  </div>
</template>
<script>
import SimpleRow from '@/components/SimpleRow'
import UserHeader from '@/components/UserHeader'
export default {
  props: [ 'person' ],
  data() {
    return {
    }
  },
  components: {
    SimpleRow, UserHeader
  }
}
</script>
<style lang="scss" scoped>
.g-userDetail {
  padding-top: 10px;
  margin: auto;
  padding-bottom: 10px;
}
.flexable {
  display: flex;
}
.u-row {
  margin: 12px 0;
}
</style>

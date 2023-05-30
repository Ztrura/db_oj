<template>
<br>
<div class="titlebar">
  <span class="title">SQL OJ</span>
  <slot name="left"></slot>
  <div class="right">
    <slot name="right">登录</slot>
  </div>
</div>
<br>
<el-row :gutter="10">
  <el-col :span="16">
  <div class="table1">
  <el-table :data="ListOfQuestions" height="200" border style="width: 100%">
    <el-table-column prop="number" label="实验号-题号-题目"/>
    <el-table-column prop="date0" label="要求完成时间"/>
    <el-table-column prop="score0" label="分值"/>
    <el-table-column prop="Handed" label="交卷验证"/>
    <el-table-column prop="date1" label="实际完成时间"/>
    <el-table-column prop="score1" label="得分"/>
    <el-table-column prop="state" label="状态"/>
  </el-table>
  </div>
</el-col>
<el-col :span="8">
  <div class="question" style="text-align: left">
  <el-text class="mx-1">将pub用户下的Student_31及数据复制到主用户的表test3_06，删除表中的错误数据，不规范的数据也被认为是那些错误数据。（1）学号不全是数字；（2）出生日期和年龄不一致的(年龄=2012-出生年份)；（3）姓名有空格的或者长度小于2个字的；函数length()返回字符串长度。（4）性别有错误的（只能够是"男"、“女”、空值）；（5）院系名称有空格的、院系名称为空值的；（6）院系名称小于3个字的；（7）班级数据有错误的（需要先找到班级里面的错误）。保留最后全部正确的数据。</el-text>
  </div>
</el-col>
</el-row>
<el-row>
<el-col :span="3">
  <div class="table2">
  <el-table :data="ListOfTables" height="210" border style="width: 100%">
    <el-table-column prop="name" label="常用表及视图"/>
  </el-table>
  </div>
</el-col>
<el-col :span="9">
  <div class="table3">
  <el-table :data="History" height="210" border style="width: 100%">
    <el-table-column prop="date" label="执行时间"/>
    <el-table-column prop="sql" label="历史SQL" />
  </el-table>
  </div>
</el-col>
<el-col :span="9">
  <div class="answer">
  <el-input v-model="input" :rows="11" type="textarea" placeholder="输入SQL语句..."/>
  </div>
</el-col>
<el-col :span="3">
  <div class="buttons">
  <el-row>
  <el-col :span="24">
  <el-button type="primary" style="width: 80%" size="large">执行</el-button>
  </el-col>
  </el-row>
  <br>
  <el-button type="primary" size="large">提交</el-button>
  <el-button type="primary" size="large">回滚</el-button>
  </div>
</el-col>
</el-row>
<el-row>
<div class="others" style="text-align: left">
  <!-- <h4>结果：</h4>
  <h4>详述：</h4> -->
</div>
</el-row>
</template>

<style scoped>
    .titlebar {
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1592df;
        box-shadow: 0 0 5px 5px #1592df;
        color: #fff;
        padding: 0 10px;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .right {
        display: flex;
        align-items: center;
    }
</style>

<!-- <script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'OJView',
  components: {
    Title
  }
}
</script> -->

<script lang="ts" setup>

import { ref } from 'vue'
const input = ref('')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const textarea = ref('')

const ListOfQuestions = [
  {
    number: '1-1:question1',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-2:question2',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-3:question3',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-4:question4',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-5:question5',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-6:question6',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  },
  {
    number: '1-7:question7',
    date0: '2023-05-03',
    score0: '2',
    Handed: '已交卷',
    date1: '2023-05-03',
    score1: '2',
    state: '按时完成'
  }
]

const ListOfTables = [
  {
    name: 'Table0'
  },
  {
    name: 'Table1'
  },
  {
    name: 'Table2'
  },
  {
    name: 'Table3'
  },
  {
    name: 'Table4'
  },
  {
    name: 'Table5'
  },
  {
    name: 'Table6'
  },
  {
    name: 'Table7'
  }
]

const History = [
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  },
  {
    date: '2023-05-03',
    sql: 'create table_1 as select ...'
  }
]
</script>

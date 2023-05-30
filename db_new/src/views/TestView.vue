<template>
<br>
  <el-container class="layout-container-demo" style="height: 670px">
    <el-aside width="230px" style="border: 1px solid #409EFF; border-radius: 20px">
      <el-card style="border: 0px"><b>题目列表</b></el-card>
        <el-menu>
            <el-menu-item-group title="实验一　">
              <el-menu-item index="1-1" @click="new_q('1','1')">第一题</el-menu-item>
              <el-menu-item index="1-2" @click="new_q('1','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验二　">
              <el-menu-item index="2-1" @click="new_q('2','1')">第一题</el-menu-item>
              <el-menu-item index="2-2" @click="new_q('2','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验三　">
              <el-menu-item index="3-1" @click="new_q('3','1')">第一题</el-menu-item>
              <el-menu-item index="3-2" @click="new_q('3','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验四　">
              <el-menu-item index="4-1" @click="new_q('4','1')">第一题</el-menu-item>
              <el-menu-item index="4-2" @click="new_q('4','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验五　">
              <el-menu-item index="5-1" @click="new_q('5','1')">第一题</el-menu-item>
              <el-menu-item index="5-2" @click="new_q('5','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验六　">
              <el-menu-item index="6-1" @click="new_q('6','1')">第一题</el-menu-item>
              <el-menu-item index="6-2" @click="new_q('6','2')">第二题</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验七　">
              <el-menu-item index="7-1" @click="new_q('7','1')">第一题</el-menu-item>
              <el-menu-item index="7-2" @click="new_q('7','2')">第二题</el-menu-item>
            </el-menu-item-group>
        </el-menu>
    </el-aside>

    <el-container>
      <el-aside width="650px">
        <el-container>
          <el-header height="200px">
                <div class="question" style="text-align: left">
                <p><b>题目信息</b></p>
                <p id="qtext"></p>
                </div>
          </el-header>
          <el-main>
            <div class="sin" style="float: left; width: 580px">
            <el-input v-model="sql_input" id="sqlin" :rows="13" type="textarea" placeholder="输入SQL语句..."/>
            </div>
            <div style="margin-left:580px">
            <el-button type="primary" style="width: 50px;height: 69px" @click="sql_run">执行</el-button>
            <br><br>
            <el-button type="primary" style="width: 50px;height: 69px">提交</el-button>
            <br><br>
            <el-button type="primary" style="width: 50px;height: 69px">回滚</el-button>
            <br>
            </div>
          </el-main>
          <el-card shadow="never" class="box-card" style="border: 0px">
            <span>历史记录</span>
            <!-- <div id="hist"><div v-for="h in History" :key="h" class="text item" style="text-align: left"><el-text size="large" truncated>{{ h }}</el-text></div></div> -->
            <el-table :data="History0" height="155" style="width: 100%">
              <el-table-column prop="date" label="执行时间" width="150%" sortable/>
              <el-table-column prop="sql" label="历史sql" show-overflow-tooltip/>
            </el-table>
          </el-card>
        </el-container>
      </el-aside>
      <el-main>
      <br>
        <el-row :gutter="3">
          <el-col :span="24">
            <el-descriptions
              title="　题目状态"
              direction="vertical"
              :column="3"
              border
            >
              <template #extra>
                <el-button type="primary" v-on:click="submit()" id="submit">交卷验证</el-button>
              </template>
              <el-descriptions-item label="题号" label-align="center" align="center"><span id="tihao">x-x</span></el-descriptions-item>
              <el-descriptions-item label="要求完成时间" label-align="center" align="center"><span id="ddl">xxxx-xx-xx</span></el-descriptions-item>
              <el-descriptions-item label="实际完成时间" label-align="center" align="center"><span id="shiji">xxxx-xx-xx</span></el-descriptions-item>
              <el-descriptions-item label="完成状态" label-align="center" align="center"><span id="state">未完成</span></el-descriptions-item>
              <el-descriptions-item label="分值" label-align="center" align="center"><span id="fenzhi">x</span></el-descriptions-item>
              <el-descriptions-item label="得分" label-align="center" align="center">x</el-descriptions-item>
            </el-descriptions>
          </el-col>
        </el-row>
        <br>
        <el-table :data="ListOfTables" height="150" border style="width: 100%" @row-click="clickData">
          <el-table-column prop="name" label="常用表及视图"/>
        </el-table>
        <br>
        <el-table :data="STTable" height="270">
          <el-table-column
            v-for="col in STCol"
            :key="col"
            :prop="col"
            :label="col">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import axios from 'axios'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { response } from 'express'

const sql_input = ref('')

const History0 = ref([])

var STTable = ref([])

var STCol = ref([])

const hkey = true

const ListOfTables = [
  {
    name: 'studs'
  },
  {
    name: 'question'
  },
  {
    name: 'history'
  },
  {
    name: 'submission'
  }
]

function $ (id: string) {
  return document.getElementById(id)
}

// eslint-disable-next-line camelcase
function new_q (lab: number, number: number) {
  // console.log(param1);
  // console.log(param2);

  // $('qtext').innerHTML = qlist[(lab - 1) * 2 + (number - 1)]
  axios.post('http://localhost:3000/api/user/getQuestion', {
    pid: Number(lab - 1) * 2 + Number(number)
  }, {}).then((response) => {
    // console.log(response.data[0].description)
    // console.log(Number(lab - 1) * 2 + Number(number))
    // console.log(response.data[0])
    $('qtext').innerHTML = response.data[0].description
  })

  axios.post('http://localhost:3000/api/user/getTitle', {
    pid: Number(lab - 1) * 2 + Number(number)
  }, {}).then((response) => {
    $('tihao').innerHTML = response.data[0].title
  })

  axios.post('http://localhost:3000/api/user/getDeadline', {
    pid: Number(lab - 1) * 2 + Number(number)
  }, {}).then((response) => {
    // console.log(response.data[0])
    $('ddl').innerHTML = response.data[0].deadline.slice(0, 10)
  })

  axios.post('http://localhost:3000/api/user/getFenzhi', {
    pid: Number(lab - 1) * 2 + Number(number)
  }, {}).then((response) => {
    $('fenzhi').innerHTML = response.data[0].score
  })

}

function refreshHistory () {
  axios.post('http://localhost:3000/api/user/getHistory', {

  }, {}).then((response) => {
    console.log(response.data)
    // console.log(typeof(response.data[0].execute_time))
    console.log(response.data.length)
    let lth = response.data.length;
    History0.value.push({
      date: response.data[lth-1].execute_time.slice(0,10),
      sql: response.data[lth-1].instruction
    });
    // for(var i=0;i<lth;i++){
    //   History0.value.push({
    //     date: response.data[lth-1].execute_time.slice(0,10),
    //     sql: response.data[lth-1].instruction
    //   });
    // }
    // History0.value.push({
    //   date: date,
    //   sql: input
    // })
  })
}

function sql_run () {
  const input = $('sqlin').value
  const now = new Date()
  const yy = now.getFullYear()
  const mm = now.getMonth() + 1
  const dd = now.getDate()
  const date = yy + '-' + mm + '-' + dd
  var executeResult = 'success'
  console.log(now)
  axios.post('http://localhost:3000/api/user/runSQL', {
    date: now,
    sql_sentence: input
  }, {}).then((response) => {
    if (response.data.err) {executeResult = 'fail'}
    console.log(response.data)
    console.log(">>>",response.data[0])
    // console.log(Object.keys(response.data[0]))
    let ob_list = Object.keys(response.data[0])
    console.log(">>>",ob_list)
    let olth = ob_list.length;
    STCol.value=ob_list;
    // pushCol(olth,ob_list);
    console.log("*",STCol)
    STTable.value=response.data;
    console.log(">",STTable)
  })
  axios.post('http://localhost:3000/api/user/addHistory', {
    execute_time: date,
    instruction: input,
    result: executeResult
  }, {}).then((response) => {
    // console.log(response)
  })
  refreshHistory()
}

let key = 1

const State = ['未完成', '已完成']
const StateOfSubmit = ['交卷验证', '答案正确', '答案错误']

function submit () {
  console.log('0')
  if (key==1) {
    $('submit').style.backgroundColor = '#67C23A'
    $('submit').style.borderColor = '#67C23A'
    $('submit').innerHTML = StateOfSubmit[1]
    $('state').innerHTML = State[1]
    const yy = new Date().getFullYear()
    const mm = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) :  (new Date().getMonth() + 1)
    const dd = new Date().getDate()
    $('shiji').innerHTML = yy+'-'+mm+'-'+dd
    key = 2
  } else if(key==2){
    $('submit').style.backgroundColor = '#F56C6C'
    $('submit').style.borderColor = '#F56C6C'
    $('submit').innerHTML = StateOfSubmit[2]
    $('state').innerHTML = State[0]
    $('shiji').innerHTML = "xxxx-xx-xx"
    key = 0
  }
  else {
    $('submit').style.backgroundColor = '#409EFF'
    $('submit').style.borderColor = '#409EFF'
    $('submit').innerHTML = StateOfSubmit[0]
    $('state').innerHTML = State[0]
    $('shiji').innerHTML = "xxxx-xx-xx"
    key = 1
  }
}

function clickData(row, event, column) {
  // console.log(row,  event,  column)
  console.log(row.name)
  // let str = row.name
  axios.post('http://localhost:3000/api/user/getTable', {
    // tname: str.substring(1,str.length-1)
    tname: row.name
  }, {}).then((response) => {
    console.log(response.data)
    let ob_list1 = Object.keys(response.data[0])
    console.log(">>>",ob_list1)
    STCol.value=ob_list1;
    console.log("**",STCol)
    // console.log(">>>")
    STTable.value=response.data;
    console.log(STTable)
  })
}

</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-9);
  background-color: #ffffff;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-9);
  background-color: #ffffff;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-menu-item {
  justify-content: center;
}
.layout-container-demo .el-main {
  padding: 0;
}

::-webkit-scrollbar {
  width: 0px; 
 
}
::-webkit-scrollbar-thumb {
  background-color: #eaecf1;
  border-radius: 3px;
}
</style>

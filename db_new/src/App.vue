<template>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false" direction="rtl" style="background-color: #D7F3FF">
      <el-card shadow="never" style="border: 0px;background-color: #D7F3FF">
        <h2>Welcome to Our Sql Online Judge System</h2>
        <p>
          For the detail code and how to configure this project, <br>
          check out
          <a href="https://github.com/Ztrura/db_project" target="_blank" rel="noopener">our github repository</a>.
        </p>
        <h3>Members</h3>
        <ul>
          <li><a href="https://github.com/Ztrura" target="_blank" rel="noopener">Ztrura</a></li>
          <li><a href="https://github.com/Xufeng-Zhan" target="_blank" rel="noopener">ZXFQWQ</a></li>
          <li><a href="https://github.com/forever-qwq" target="_blank" rel="noopener">青云</a></li>
        </ul>
      </el-card>
  </el-drawer>
  <div class="titlebar" style="height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1999E9;
        border-radius: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        color: #fff;
        margin-bottom: 10px;
        padding: 0 10px">
    <span class="left"></span>
    <span name="title" style="font-size: 20px; font-weight: bold">SQL Online Judge System</span>
    <div class="right" style= "display: flex; align-items: center">
      <span name="right" @click="drawer = true">关于　</span>
    </div>
  </div>
  <el-container class="layout-container-demo" style="height: 670px">
    <el-aside width="230px" style="border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;">
     <!-- border-radius: 20px -->
      <el-card style="border: 0px; border-radius: 0px; background-color: #51BCFF; color: #FFFFFF;font-size: 19px;"><b>题目列表</b></el-card>
      <el-menu style="background-color: #63C3FF">
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
          <el-header height="180px" style="border: 0px; margin-bottom:10px; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset">
                <div class="question" style="text-align: left">
                <!-- <p style="color: #4E91ED"><b>题目信息</b></p> -->
                <p><b>题目信息</b></p>
                <p id="qtext"></p>
                </div>
          </el-header>
          <el-main style="border: 0px; background-color:#fff; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset">
            <!-- <div class="sin" style="border: 0px; float: left; width: 100%"> -->
            <el-input v-model="sql_input" id="sqlin" :rows="13" type="textarea" placeholder="输入SQL语句..."/>
            <!-- </div> -->
            <!-- <div style="border: 0px;margin-left:580px">
            <el-button type="primary" style="width: 50px;height: 69px" @click="sql_run">执行</el-button>
            <br><br>
            <el-button type="primary" style="width: 50px;height: 69px">提交</el-button>
            <br><br>
            <el-button type="primary" style="width: 50px;height: 69px">回滚</el-button>
            <br>
            </div> -->
          </el-main>
          <el-card shadow="never" class="box-card" style="border: 0px; box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; border-radius: 15px; margin-top:10px">
            <span>历史记录</span> 
            <!-- <div id="hist"><div v-for="h in History" :key="h" class="text item" style="text-align: left"><el-text size="large" truncated>{{ h }}</el-text></div></div> -->
            <el-table :data="History0" height="160" style="width: 100%">
              <el-table-column prop="date" label="执行时间" width="150%" sortable/>
              <el-table-column prop="sql" label="历史sql" show-overflow-tooltip/>
            </el-table>
          </el-card>
        </el-container>
      </el-aside>
      <el-main>
        <!-- <el-row :gutter="3">
          <el-col :span="24"> -->
          <div style="background-color:#D7F3FF; border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset">
            <el-descriptions
              direction="vertical"
              :column="3"
              border
              style="border: 0px;"
            >
              <template #extra>
                <el-button round type="primary" style="width:100px;height: 30px;margin-right:77px;margin-top:20px;margin-bottom: 5px;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" @click="sql_run">执 行</el-button>
                <el-button round type="primary" @click="submit()" id="submit" style="width:100px;height: 30px;margin-right: 77px;margin-top:20px;margin-bottom: 5px;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">交卷验证</el-button>
                <el-button round type="primary" style="width:100px;height: 30px;margin-right:60px;margin-top:20px;margin-bottom: 5px;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" @click="">登录</el-button>
              </template>
              <el-descriptions-item label="要求完成时间" label-align="center" align="center"><span id="ddl">xxxx-xx-xx</span></el-descriptions-item>
              <el-descriptions-item label="题号" label-align="center" align="center"><span id="tihao">x-x</span></el-descriptions-item>
              <el-descriptions-item label="实际完成时间" label-align="center" align="center"><span id="shiji">xxxx-xx-xx</span></el-descriptions-item>
              <el-descriptions-item label="分值" label-align="center" align="center"><span id="fenzhi">x</span></el-descriptions-item>
              <el-descriptions-item label="完成状态" label-align="center" align="center"><span id="state">x</span></el-descriptions-item>
              <el-descriptions-item label="得分" label-align="center" align="center"><span id="sscore">0</span></el-descriptions-item>
            </el-descriptions>
            <br>
          </div>
          <!-- </el-col>
        </el-row> -->
        <el-table :data="Tables" height="170" border style="margin-top:10px;width: 100%;border: 0px;box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; border-radius: 15px" @row-click="clickData">
          <el-table-column prop="TABLE_NAME" label="常用表及视图"/>
        </el-table>
        <el-table :data="STTable" height="260" style="margin-top:10px;border: 0px; border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
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

const drawer = ref(false)

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

var Tables=ref([])

function $ (id: string) {
  return document.getElementById(id)
}

var pid = 0
// eslint-disable-next-line camelcase
function new_q (lab: number, number: number) {
  // $('qtext').innerHTML = qlist[(lab - 1) * 2 + (number - 1)]
  pid = Number(lab - 1) * 2 + Number(number)
  axios.post('http://localhost:3000/api/user/getQuestion', {
    pid: pid
  }, {}).then((response) => {
    $('qtext').innerHTML = response.data[0].description
  })

  axios.post('http://localhost:3000/api/user/getTitle', {
    pid: pid
  }, {}).then((response) => {
    $('tihao').innerHTML = response.data[0].title
  })

  axios.post('http://localhost:3000/api/user/getDeadline', {
    pid: pid
  }, {}).then((response) => {
    // console.log(response.data[0])
    $('ddl').innerHTML = response.data[0].deadline.slice(0, 10)
  })

  axios.post('http://localhost:3000/api/user/getFenzhi', {
    pid: pid
  }, {}).then((response) => {
    $('fenzhi').innerHTML = response.data[0].score
  })

  $('shiji').innerHTML = "xxxx-xx-xx"
  $('sscore').innerHTML='0'
  $('state').innerHTML = State[0]
  $('submit').style.backgroundColor = '#409EFF'
  $('submit').style.borderColor = '#409EFF'
  $('submit').innerHTML = StateOfSubmit[0]

  refreshTables()
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

function refreshTables () {
  axios.post('http://localhost:3000/api/user/getAllTables', {

  }, {}).then((response) => {
    // console.log(response.data[0].TABLE_NAME)
    Tables.value=response.data;
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
    console.log("!!!",response)
    if(response.data.hasOwnProperty('affectedRows')){
      if(response.data.affectedRows<0){
        console.log(response.data)
        // console.log("aaaaa")
        STCol.value=Object.keys(response.data[0])
        console.log("*------",STCol)
        STTable.value=response.data;
        console.log(">",STTable)
      }
    }
    else{
      console.log(response.data)
      console.log("aaaaa")
      STCol.value=Object.keys(response.data[0])
      console.log("*------",STCol)
      STTable.value=response.data;
      console.log(">",STTable)
    }

  })
  axios.post('http://localhost:3000/api/user/addHistory', {
    execute_time: date,
    instruction: input,
    result: executeResult
  }, {}).then((response) => {
    // console.log(response)
  })
  console.log('runSQL success')
  refreshHistory()
  console.log('refreshHistory success')
  refreshTables()
}

let key = 1

const State = ['未完成', '已完成']
const StateOfSubmit = ['交卷验证', '答案正确', '答案错误']

function submit () {
  axios.post('http://localhost:3000/api/user/submit', {
    pid: pid
  }, {}).then((response) => {
    console.log(response)
    if(response.data=="success"){
      // console.log("kkk")
      $('submit').style.backgroundColor = '#67C23A'
      $('submit').style.borderColor = '#67C23A'
      $('submit').innerHTML = StateOfSubmit[1]
      $('state').innerHTML = State[1]
      const yy = new Date().getFullYear()
      const mm = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) :  (new Date().getMonth() + 1)
      const dd = new Date().getDate()
      $('shiji').innerHTML = yy+'-'+mm+'-'+dd
      $('sscore').innerHTML='2'
    }else{
      $('submit').style.backgroundColor = '#F56C6C'
      $('submit').style.borderColor = '#F56C6C'
      $('submit').innerHTML = StateOfSubmit[2]
      $('state').innerHTML = State[0]
      $('shiji').innerHTML = "xxxx-xx-xx"
    }
  })
  // if (key==1) {
  //   $('submit').style.backgroundColor = '#67C23A'
  //   $('submit').style.borderColor = '#67C23A'
  //   $('submit').innerHTML = StateOfSubmit[1]
  //   $('state').innerHTML = State[1]
  //   const yy = new Date().getFullYear()
  //   const mm = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) :  (new Date().getMonth() + 1)
  //   const dd = new Date().getDate()
  //   $('shiji').innerHTML = yy+'-'+mm+'-'+dd
  //   key = 2
  // } else if(key==2){
  //   $('submit').style.backgroundColor = '#F56C6C'
  //   $('submit').style.borderColor = '#F56C6C'
  //   $('submit').innerHTML = StateOfSubmit[2]
  //   $('state').innerHTML = State[0]
  //   $('shiji').innerHTML = "xxxx-xx-xx"
  //   key = 0
  // }
  // else {
  //   $('submit').style.backgroundColor = '#409EFF'
  //   $('submit').style.borderColor = '#409EFF'
  //   $('submit').innerHTML = StateOfSubmit[0]
  //   $('state').innerHTML = State[0]
  //   $('shiji').innerHTML = "xxxx-xx-xx"
  //   key = 1
  // }
}

function clickData(row, event, column) {
  // console.log(row,  event,  column)
  console.log(row)
  console.log(row.TABLE_NAME)
  // let str = row.name
  axios.post('http://localhost:3000/api/user/getTable', {
    // tname: str.substring(1,str.length-1)
    tname: row.TABLE_NAME
  }, {}).then((response) => {
    if(response.data.length>0){
      console.log(response.data)
      // let ob_list1 = Object.keys(response.data[0])
      // console.log(">>>",ob_list1)
      // // STCol.value=ob_list1;
      STCol.value=Object.keys(response.data[0])
      console.log("*****",STCol)
      // console.log(">>>")
      STTable.value=response.data;
      console.log(STTable)
    }
  })
}

</script>


<style scoped>
.el-header {
  position: relative;
  background-color: var(--el-color-primary-light-9);
  //background-color: #D62A2A;
  color: var(--el-text-color-primary);
  border: 1px solid #409EFF;
}
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-9);
  background-color: #61C3F5;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 0px;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-menu-item {
  justify-content: center;
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
}
.el-menu-item:hover {
  background-color:#38A3E7;
}
.layout-container-demo .el-main {
  padding: 0;
  //background-color:#afe116;
}

::-webkit-scrollbar {
  width: 0px; 
 
}
::-webkit-scrollbar-thumb {
  background-color: #eaecf1;
  border-radius: 3px;
}
</style>
<style>
    html,body,#app{
      height: 100%;
      //background-color: #536CC7;
      background-color: #61C3F5;
    }
    .el-menu-item-group__title{
      color:#E4F1FE !important;
    }
    .el-descriptions__cell{
      background-color:#D7F3FF !important;
    }
    .el-descriptions__cell.el-descriptions__label{
      color:#00398E !important;
      font-size:18px !important;
    }
    .el-descriptions__cell.el-descriptions__content{
      color:#004AB9 !important;
      font-size:15px !important;
    }
</style>

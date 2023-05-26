<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

     <h1>{{ msg }}</h1>
    <input v-model="sid" placeholder="请输入学号" autocomplete>
    <input v-model="name" placeholder="请输入姓名" autocomplete>
    <input v-model="age" placeholder="请输入年龄" autocomplete>
    <button v-on:click="addUser">提交</button>

    <p>这是查询按钮</p>
        <p>
            <button @click="changeMsg">点击</button>
        </p>

    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        sid: '',
        name: '',
        age: ''
      }
    },
    methods: {
      addUser() {
        var sid = this.sid;
        var name = this.name;
        var age = this.age;
        axios.post('http://localhost:3000/api/user/addUser', {
          sid: sid,
          name: name,
          age: age
        }, {}).then((response) => { console.log(response); })
      },
  
      changeMsg () {
        axios.get('http://localhost:3000/api/user/query').then((response) => {
            console.log(response)
            console.log('--------')
        })
      },
    }

}
</script>

<style>

</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


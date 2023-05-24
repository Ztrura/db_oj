<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/oj">OJ</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/table">Table</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5ba9e9;
}

nav {
  padding: 15px;
  background-color: #1592df;
  box-shadow: 0 0 7px 7px #1592df;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #0860ee;
}
</style>

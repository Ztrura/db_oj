<template>
  <nav>
    <router-link to="/">Home</router-link>
    <span style="color: #9CC6E9"> | </span>
    <router-link to="/test">OJ</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3998E6;
}

nav {
  padding: 15px;
  background-color: #1592df;

}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #0860ee;
}
</style>

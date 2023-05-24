<template>
  <div class="home">
    <!-- <img alt="Logo" src="../img/guang.png"> -->
    <HelloWorld msg="Welcome to Our Sql Online Judge System"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>

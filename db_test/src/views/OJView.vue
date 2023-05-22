<template>
  <div class="oj">
    <h1>This is oj page</h1>
    <OnlineJudge msg="1111"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OnlineJudge from '@/components/OnlineJudge.vue'

export default {
  name: 'OJView',
  components: {
    OnlineJudge
}
}
</script>
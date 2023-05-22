<template>
    <div class="oj">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'OnlineJudge',
  props: {
    msg: String
  }
}
</script>
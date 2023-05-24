<template>
    <div class="titlebar">
      <span class="title">{{ title }}</span>
      <slot name="left"></slot>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

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

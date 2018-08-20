<template>
  <div class="m-userheader">
    <img v-if="src !== null && src !== undefined && src.trim() !== ''" :src="src" class="u-header" :class="className" :style="{width: `${width}px`, height: `${width}px`}"/>
    <span v-else class="u-demo-header" :class="className" :style="{width: `${width}px`, height: `${width}px`}">暂无<br/>头像</span>
  </div>
</template>
<script>
export default {
  props: {
    src: {
    },
    width: {
      type: Number,
      required: true
    },
    className: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.u-demo-header {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.21;
  border-radius: 50%;
  font-size: 12px;
  color: #9c9c9c;
  border: 1px solid #9c9c9c;
  box-sizing: border-box;
  overflow: hidden;
}
.u-header {
  display: block;
  border-radius: 50%;
  overflow: hidden;
}
</style>

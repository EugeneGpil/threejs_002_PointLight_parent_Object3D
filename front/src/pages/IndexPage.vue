<template>
  <q-page class="flex flex-center">
    <canvas class="the-element" ref="canvas"/>
  </q-page>
</template>

<script>
import init from '../app/init'

export default {
  mounted() {
    init(this.$refs.canvas)
  }
}
</script>

<style lang="scss" scoped>
.the-element {
  width: 100%;
  min-height: inherit;
  background-color: black;
}
</style>

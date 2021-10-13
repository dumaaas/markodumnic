<template>
  <div class="main">
    <Sidebar :tabs="tabs" />
    <Content :tabs="tabs" />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  components: {
    Sidebar,
    Content,
  },
  computed: {
    tabs() {
      return this.$store.state.tabs
    },
  },
  watch: {
    tabs() {
      console.log('changed')
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
</style>
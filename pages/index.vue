<template>
  <div class="content">
    <div class="container">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Main from '@/components/Main.vue'

export default {
  components: {
    Header,
    Footer,
    Main,
  },
}
</script>
<style lang="scss">
.content {
  height: 100vh;
  display: flex;
}
.container {
  position: relative;
  margin: auto;
  width: 85%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  overflow: hidden;
  border-radius: 5px;
  background: #222b33;
}
</style>
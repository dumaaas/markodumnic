<template>
  <div class="header">
    <div class="header-circles">
      <div class="circle circle-red"></div>
      <div class="circle circle-yellow"></div>
      <div class="circle circle-green"></div>
    </div>
    <div class="header-title">
      <p>
        {{ activeTab }} - markodumnic
      </p>
    </div>
    <div class="header-nothing">
      
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeTab() {
      return this.$store.state.activeTab
    },
  },
  watch: {
    activeTab() {
      console.log('changedActiveTab', this.activeTab)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0px 10px 0 5px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  height: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-circles {
    .circle {
      margin-right: 3px;
      height: 13px;
      width: 13px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      transform: scale(0.9);

      &.circle-red {
        background: #ed594a;
      }

      &.circle-green {
        background: #5ac05a;
      }

      &.circle-yellow {
        background: #fdd800;
      }
    }
  }

  &-title {
    p {
      font-size: 12px;
    }
  }
}
</style>
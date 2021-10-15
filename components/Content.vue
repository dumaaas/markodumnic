<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header__item" v-for="tab in tabs" :key="tab.name">
        <ContentTitle
          :content="tab"
          v-if="tab.isOpened"
        />
      </div>
    </div>
    <ContentMain :content="mainTab[0]" />
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle.vue'
import ContentMain from '@/components/ContentMain.vue'

export default {
  props: {
    tabs: Array,
  },
  components: {
    ContentTitle,
    ContentMain,
  },
  computed: {
    mainTab() {
      return this.tabs.filter(x => x.isMain === true)
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  gap: 20px;
  overflow: auto;
  &-header {
    width: 100%;
    display: flex;
    &__item {
      width: 100%;
      max-width: 200px;
    }
  }

  &-main {
    padding-top: 20px;
    overflow: auto;
    height: 100%;
  }
}
</style>
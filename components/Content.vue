<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header__item" v-for="tab in tabs" :key="tab.name">
        <ContentTitle
          :content="tab"
          v-if="tab.isOpened"
          @openMainContent="openMainContent"
        />
      </div>
    </div>
    <div class="content-main">
      <div v-for="tab in tabs" :key="tab.name">
        <ContentMain :content="tab" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle.vue'
import ContentMain from '@/components/ContentMain.vue'

export default {
  props: {
    tabs: Array
  },
  components: {
    ContentTitle,
    ContentMain,
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
  }
}
</style>
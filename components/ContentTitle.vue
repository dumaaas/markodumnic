<template>
  <div class="header-item" :class="{ active: content.isMain }">
    <div class="header-item__left" @click="setContentActive(content)">
      <div class="header-item__icon">
        <img :src="require(`~/static/${content.icon}`)" :alt="`icon-${content.icon}`"/>
      </div>
      <div class="header-item__title">
        <div>
          <p>{{ tabSplit(content.name, 0) }}</p>
        </div>
        <div>
          <p class="modifed">{{ tabSplit(content.name, 1) }}</p>
        </div>
      </div>
    </div>
    <div @click="closeTab(content)" class="header-item__remove">x</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    content: String,
  },
  methods: {
    ...mapMutations({
      closeTab: 'closeTab',
      setContentActive: 'setContentActive',
    }),
    tabSplit(tab, i) {
      const tabSplit = tab.split(' ')
      return tabSplit[i]
    },
    openMainContent(content) {
      this.$emit('openMainContent', content)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-item {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  height: 40px;
  align-items: center;
  padding-left: 15px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;

    p {
      &.modifed {
        color: #f5d67b;
        font-size: 14px;
        margin-top: -4px;
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__remove {
    padding-right: 8px;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    line-height: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.active {
    background: #1f282f;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-color: rgb(0, 172, 237);
  }
}
</style>
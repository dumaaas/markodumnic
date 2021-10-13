<template>
  <div
    class="header-item"
    :class="{ active: content.isMain }"
  >
    <div class="header-item__left" @click="setContentActive(content)">
      <div class="header-item__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="15px"
          height="15px"
        >
          <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
          <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
          <path
            fill="#FFF"
            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
          />
          <path
            fill="#EEE"
            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
          />
        </svg>
      </div>
      <div class="header-item__title">
        <p>
          {{ content.name }}
        </p>
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
      setContentActive: 'setContentActive'
    }),
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

  &__left {
    display: flex;
      align-items: center;

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
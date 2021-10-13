<template>
  <div>
    <div class="sidebar-content__title">
      <h2 @click="console()">Explorer</h2>
    </div>
    <div class="sidebar-content__items">
      <div class="explorer">
        <div class="explorer-project" @click="explorerOpened = !explorerOpened">
          <div v-if="!explorerOpened" class="explorer-project__arrow">
            <!-- <fa :icon="['fas', 'sort']" /> -->
          </div>
          <div v-if="!explorerOpened" class="explorer-project__icon">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              width="15px"
              height="15px"
            >
              <path
                d="M20,6h-8l-1.414-1.414C10.211,4.211,9.702,4,9.172,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z"
              />
            </svg>
          </div>
          <div v-if="explorerOpened" class="explorer-project__arrow"></div>
          <div v-if="explorerOpened" class="explorer-project__icon">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              width="15px"
              height="15px"
            >
              <path
                d="M 5 4 C 3.895 4 3 4.895 3 6 L 3 9 L 3 11 L 22 11 L 27 11 L 27 8 C 27 6.895 26.105 6 25 6 L 12.199219 6 L 11.582031 4.9707031 C 11.221031 4.3687031 10.570187 4 9.8671875 4 L 5 4 z M 2.5019531 13 C 1.4929531 13 0.77040625 13.977406 1.0664062 14.941406 L 4.0351562 24.587891 C 4.2941563 25.426891 5.0692656 26 5.9472656 26 L 15 26 L 24.052734 26 C 24.930734 26 25.705844 25.426891 25.964844 24.587891 L 28.933594 14.941406 C 29.229594 13.977406 28.507047 13 27.498047 13 L 15 13 L 2.5019531 13 z"
              />
            </svg>
          </div>
          <div class="explorer-project__title">
            <p>portfolio</p>
          </div>
        </div>
        <div v-if="explorerOpened">
          <div
            v-for="tab in tabs"
            :key="tab"
            @click="addTab(tab)"
            class="explorer-item"
            :class="{ active: activeTab === tab }"
          >
            <div class="explorer-project__icon">
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
            <div class="explorer-project__title">
              <p>{{ tab }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      explorerOpened: false,
      tabs: ['about.md', 'projects.html', 'contact.css', 'resume.pdf'],
    }
  },
  computed: {
    activeTab() {
      return this.$store.state.activeTab
    },
  },
  methods: {
    ...mapMutations({
      addTab: 'addTab',
    }),
  },
  watch: {
    activeTab() {
      console.log('changedActiveTab', this.activeTab)
    },
  },
}
</script>

<style lang="scss" scoped>
.explorer {
  &-project {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 0 6px 0;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    svg {
      fill: #8b949e;
    }
    p {
      color: #8b949e;
      font-size: 13px;
      line-height: 13px;
    }

    &__icon {
      align-items: center;
      display: flex;
    }
  }

  &-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 0 6px 20px;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
    svg {
      fill: #8b949e;
    }
    p {
      color: #8b949e;
      font-size: 13px;
      line-height: 13px;
    }

    &.active {
      background: rgba(0, 0, 0, 0.15);
      p {
        color: #fff
      }
    }
  }
}
</style>
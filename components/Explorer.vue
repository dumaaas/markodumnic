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
            @click="addTab(tab.name)"
            class="explorer-item"
            :class="{ active: activeTab === tab.name }"
          >
            <div class="explorer-project__icon">
              <img
                :src="require(`~/static/${tab.icon}`)"
                :alt="`icon-${tab.icon}`"
              />
            </div>
            <div class="explorer-project__title">
              <p>{{ tab.name }}</p>
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
      tabs: [
        { name: 'about.md', icon: 'md.svg' },
        { name: 'projects.html', icon: 'html.svg' },
        { name: 'contact.css', icon: 'css.svg' },
        { name: 'resume.pdf', icon: 'pdf.svg' },
      ],
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
      
      img {
        width: 13px;
      }
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
        color: #fff;
      }
    }
  }
}
</style>
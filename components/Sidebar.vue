<template>
  <div class="sidebar">
    <div class="sidebar-nav">
      <div
        class="sidebar-nav__icon"
        :class="{ active: isExplorer }"
        @click="openContent('explorer')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 0H7.5L6 1.5V6H1.5L0 7.5V22.5699L1.5 24H13.5699L15 22.5699V18H19.7L21 16.5699V4.5L16.5 0ZM16.5 2.12L18.88 4.5H16.5V2.12ZM13.5 22.5H1.5V7.5H6V16.5699L7.5 18H13.5V22.5ZM19.5 16.5H7.5V1.5H15V6H19.5V16.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        class="sidebar-nav__icon"
        :class="{ active: isSource }"
        @click="openContent('source')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0068 8.22168C21.0102 7.52792 20.8205 6.84689 20.4589 6.25485C20.0972 5.66281 19.5778 5.18315 18.959 4.86957C18.3401 4.556 17.6461 4.42091 16.9549 4.47941C16.2635 4.53793 15.6023 4.78773 15.0448 5.20085C14.4875 5.61397 14.0561 6.17409 13.7991 6.8185C13.5421 7.4629 13.4695 8.16613 13.5896 8.84944C13.7096 9.53274 14.0175 10.1692 14.4787 10.6874C14.94 11.2056 15.5365 11.5852 16.2012 11.7836C15.9558 12.2824 15.5761 12.703 15.1047 12.9979C14.6334 13.2929 14.0892 13.4505 13.5332 13.4532H10.5437C9.43705 13.4571 8.37141 13.8727 7.5543 14.6191V7.39809C8.46162 7.21288 9.26787 6.69737 9.81671 5.95151C10.3656 5.20565 10.6179 4.28256 10.5248 3.36121C10.4317 2.43987 9.99988 1.5859 9.31295 0.964873C8.62602 0.343845 7.73298 0 6.80694 0C5.8809 0 4.98786 0.343845 4.30093 0.964873C3.61401 1.5859 3.18214 2.43987 3.08907 3.36121C2.99599 4.28256 3.24834 5.20565 3.79718 5.95151C4.34602 6.69737 5.15226 7.21288 6.05958 7.39809V16.5159C5.15396 16.6891 4.34302 17.1877 3.77972 17.9176C3.21642 18.6476 2.93971 19.5585 3.00176 20.4785C3.06382 21.3984 3.46036 22.2639 4.11659 22.9115C4.77282 23.5592 5.64338 23.9444 6.56406 23.9944C7.48475 24.0445 8.3919 23.7558 9.11443 23.183C9.83696 22.6102 10.3249 21.7928 10.4862 20.885C10.6476 19.9771 10.4712 19.0417 9.99026 18.255C9.50935 17.4683 8.7572 16.8848 7.87567 16.6145C8.12155 16.1162 8.50145 15.6963 8.97275 15.4019C9.44404 15.1074 9.98806 14.9503 10.5437 14.9479H13.5332C14.4659 14.9436 15.374 14.6486 16.1311 14.1039C16.8882 13.5592 17.4566 12.792 17.7572 11.9091C18.6532 11.7914 19.4761 11.3528 20.0736 10.6748C20.671 9.9968 21.0026 9.12533 21.0068 8.22168ZM4.56487 3.73752C4.56487 3.29408 4.69636 2.8606 4.94272 2.4919C5.18909 2.12319 5.53925 1.83581 5.94893 1.66611C6.35863 1.49642 6.80943 1.45202 7.24435 1.53854C7.67927 1.62504 8.07877 1.83857 8.39233 2.15214C8.70589 2.4657 8.91943 2.8652 9.00594 3.30012C9.09245 3.73504 9.04805 4.18585 8.87835 4.59553C8.70865 5.00521 8.42128 5.35539 8.05257 5.60175C7.68386 5.84811 7.25038 5.9796 6.80694 5.9796C6.2123 5.9796 5.64203 5.74339 5.22155 5.32291C4.80108 4.90245 4.56487 4.33216 4.56487 3.73752ZM9.04902 20.1794C9.04902 20.6229 8.91752 21.0563 8.67116 21.425C8.42479 21.7937 8.07463 22.0811 7.66495 22.2508C7.25526 22.4205 6.80445 22.4649 6.36954 22.3784C5.93461 22.292 5.53512 22.0784 5.22155 21.7648C4.90799 21.4512 4.69446 21.0517 4.60794 20.6169C4.52144 20.1819 4.56583 19.7311 4.73553 19.3214C4.90523 18.9117 5.19261 18.5615 5.56131 18.3152C5.93002 18.0689 6.3635 17.9373 6.80694 17.9373C7.40158 17.9373 7.97186 18.1736 8.39233 18.594C8.8128 19.0145 9.04902 19.5848 9.04902 20.1794ZM17.27 10.4638C16.8265 10.4638 16.3931 10.3322 16.0244 10.0859C15.6557 9.83954 15.3683 9.48937 15.1986 9.07969C15.0289 8.67 14.9844 8.2192 15.0709 7.78427C15.1574 7.34935 15.371 6.94985 15.6846 6.63629C15.9982 6.32273 16.3976 6.10919 16.8325 6.02268C17.2675 5.93617 17.7183 5.98058 18.1279 6.15027C18.5377 6.31997 18.8878 6.60734 19.1342 6.97605C19.3805 7.34476 19.512 7.77823 19.512 8.22168C19.512 8.81632 19.2758 9.3866 18.8554 9.80706C18.4348 10.2275 17.8646 10.4638 17.27 10.4638Z"
            fill="white"
          />
        </svg>
        <div class="source-changes">
          <p>2</p>
        </div>
      </div>
      <div class="sidebar-nav__icon" @click="openContent('github')">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5H9H1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        class="sidebar-nav__icon"
        :class="{ active: isGithub }"
        @click="openContent('github')"
      >
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 24"
          width="24px"
          height="30px"
        >
          <path
            d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
          />
        </svg>
      </div>
      <div class="sidebar-nav__icon">
        <a
          href="https://www.linkedin.com/in/marko-dumni%C4%87-714b72198/"
          target="_blank"
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 24"
            width="24px"
            height="30px"
          >
            <path
              d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="sidebar-content">
      <!-- Github content -->
      <Github v-if="isGithub" class="sidebar-content__wrapper" />
      <!-- Explorer content -->
      <Explorer v-if="isExplorer" class="sidebar-content__wrapper" />
      <SourceControl v-if="isSource" class="sidebar-content__wrapper" />
    </div>
  </div>
</template>

<script>
import Github from '@/components/Github.vue'
import Explorer from '@/components/Explorer.vue'
import SourceControl from '@/components/SourceControl.vue'

export default {
  props: {
    tabs: Array,
  },
  components: {
    Github,
    Explorer,
    SourceControl,
  },
  data() {
    return {
      isExplorer: false,
      isGithub: true,
      isSource: false,
    }
  },
  methods: {
    openContent(content) {
      this.isGithub = false
      this.isExplorer = false
      this.isSource = false
      switch (content) {
        case 'github':
          this.isGithub = true
          break
        case 'explorer':
          this.isExplorer = true
          break
        case 'source':
          this.isSource = true
          break
        default:
          this.isGithub = true
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_mixins.scss';

.sidebar {
  display: flex;
  background: #212830;
  &-nav {
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    height: 100%;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    background: #222b33;
    &__icon {
      position: relative;
      padding: 10px 20px;
      .source-changes {
        cursor: pointer;
        position: absolute;
        width: 17px;
        height: 17px;
        top: 26px;
        right: 16px;
        border-radius: 50%;
        background: darken(#58a6ff, 13%); 
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #fff;
          font-size: 11px;
        }
      }
      svg {
        opacity: 0.6;
        height: 34px;

        transition: all 0.2s ease-out;

        &:hover {
          opacity: 1;
          cursor: pointer;
          transition: all 0.2s ease-in;
        }
      }
      &.active {
        border-left: 2px solid #00aced;
        background: rgba(0, 0, 0, 0.1);
        svg {
          opacity: 1;
        }
      }
    }
  }
  &-content {
    @include breakpoint($xs) {
      display: none;
    }
  }
}
</style>
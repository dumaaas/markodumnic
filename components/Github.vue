<template>
  <div>
    <div class="sidebar-content__title">
      <h2>Repos</h2>
    </div>
    <div class="sidebar-content__items">
      <div class="repo" v-for="repo in repos" :key="repo.name">
        <div class="repo-title">
          <a :href="`https://github.com/dumaaas/${repo.name}`" target="_blank">{{ repo.name }}</a>
        </div>
        <div class="repo-description">
          <p>
            {{ repo.description }}
          </p>
        </div>
        <div class="repo-tech">
          
          <div class="repo-label" v-for="label in repo.labels" :key="label">
            {{ label }}
          </div>
        </div>
        <div class="repo-footer">
          <div class="circle green"></div>
          <div class="repo-footer__title">
            <p>{{ repo.language }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [
        {
          name: 'magic-mobile-cleaning-web',
          description: 'Front-end development of website for "Magic Mobile Cleaning" company built using Vue + Nuxt + Sass.',
          labels: ['vue', 'nuxt', 'frontend', 'javascript', 'css3', 'html5', 'sass'],
          language: 'Vue'
        },
        {
          name: 'html-to-pdf-laravel',
          description: 'Coding several pages then converting them into PDF file using laravel-snappy library.',
          labels: ['laravel', 'laravel-snappy', 'pdf', 'html5', 'css3', 'convertor'],
          language: 'Blade'
        },
        {
          name: 'vue-nuxt-doc',
          description: 'Simple Vue/Nuxt documentation.',
          labels: ['vue', 'nuxt', 'javascript', 'css3', 'html5', 'documentation', 'sass'],
          language: 'Vue'
        },
        {
          name: 'magic-mobile-cleaning-cms',
          description: 'Back-end development of website for "Magic Mobile Cleaning" company built using Strapi headless CMS.',
          labels: ['strapi', 'backend', 'content', 'cms', 'datamanagment', 'headless-cms', 'javascript'],
          language: 'JavaScript'
        },
        {
          name: 'lol-team-generator',
          description: 'Leauge of Legends team generator built using Vue + Nuxt.',
          labels: ['vue', 'nuxt', 'html5', 'css3', 'javascript', 'league-of-legends'],
          language: 'Vue'
        },
        {
          name: 'epcg-bildstudio',
          description: 'Static web page built using TailwindCSS + HTML + jQuery',
          labels: ['tailwindcss', 'html5', 'css3', 'owl-carousel-2', 'animate-css', 'jquery', 'javascript'],
          language: 'CSS'
        },
        {
          name: 'simple-blog-nuxt',
          description: 'A simple, content-focused, minimal blog site built using Nuxt + Vue.',
          labels: ['vue', 'nuxt', 'sass', 'css3', 'html5', 'javascript', 'blog'],
          language: 'Vue'
        },
        {
          name: 'food-app-nuxt',
          description: 'Following Nuxt + Vue course "Building Applications with Vue & Nuxt" by Sarah Drasner.',
          labels: ['vue', 'nuxt', 'javascript', 'sarah-drasner', 'frontendmasters', 'html5', 'css3'],
          language: 'Vue' 
        },
        {
          name: 'asynchronous-javascript',
          description: 'Following Asynchronous JavaScript with async/await course by Marius Schulz.',
          labels: ['async', 'await', 'javascript', 'html5', 'css3'],
          language: 'JavaScript'  
        },
        {
          name: 'from-fundamentals-to-functional-js',
          description: 'Following From Fundamentals to Functional JS v2 course by Bianca Gandolfo.',
          labels: ['javascript', 'css3', 'html5', 'sass'],
          language: 'JavaScript'
        },
        {
          name: 'learn-ES6_ESCMAScript2015',
          description: 'Following Learn ES6 (ESCMAScript 2015) course by John Lindquist.',
          labels: ['javascript', 'css3', 'html5', 'sass'],
          language: 'JavaScript'
        },
        {
          name: 'library-bild-be',
          description: 'Back-end development for the library-bild project (https://github.com/dumaaas/library-bild) built with Laravel framework + MySQL + Blade.',
          labels: ['laravel', 'blade', 'php', 'mysql', 'tailwindcss', 'library'],
          language: 'PHP'
        },
        {
          name: 'library-bild',
          description: 'Front-end development for the ICT Cortex project, intended for high school students to develop a web application for using the online library built with TailwindCSS framework + jQuery + HTML.',
          labels: ['tailwindcss', 'html5', 'css3', 'jquery', 'javascript'],
          language: 'JavaScript'
        },
        {
          name: 'nocobot-scss',
          description: 'Static web page built using Sass + jQuery + HTML.',
          labels: ['sass', 'css3', 'html5', 'jquery', 'javascript'],
          language: 'SCSS'
        },
        {
          name: 'sass-fundamentals',
          description: 'Learning SASS from the beginning following "Sass Fundamentals" course by Mike North.',
          labels: ['sass', 'css3', 'html5'],
          language: 'SCSS'
        },
        {
          name: 'zeleni-signal',
          description: 'Website for driving school Zeleni Signal - Niksic. Built using Tailwind CSS, JavaScript and HTML.',
          labels: ['html5', 'css3', 'tailwindcss', 'javascript', 'animate-css'],
          language: 'CSS'
        },
        {
          name: 'smooth-nav',
          description: 'Smooth navigation built with TailwindCSS + Javascript...',
          labels: ['navigation', 'css3', 'tailwindcss', 'html5', 'javascript', 'animation'],
          language: 'CSS'
        },
        {
          name: 'quiz-react',
          description: 'Quiz with built-in timer built in ReactJS.',
          labels: ['react', 'css3', 'html5', 'animations', 'quiz'],
          language: 'JavaScript'
        },
        {
          name: 'bild-homepage',
          description: 'Speedrun building Bildstudio homepage with TailwindCSS + HTML...',
          labels: ['tailwindcss', 'html5', 'css3', 'animation'],
          language: 'CSS'
        },
        {
          name: 'nilex-tailwindCSS-jQuery',
          description: 'Static web page built using TailwindCSS framework + jQuery + HTML.',
          labels: ['tailwindcss', 'html5', 'css3', 'jquery', 'javascript', 'owl-carousel-2', 'animate-css'],
          language:  'CSS'
        },
        {
          name: 'components-react',
          description: 'Building ID Card, Movie, Book components using ReactJS...',
          labels: ['react', 'javascript', 'css3', 'html5'],
          language: 'JavaScript'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.repo {
  padding: 20px 8px;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
  &-description {
    padding: 10px 0;
    p {
      color: #8b949e;
      font-size: 12px;
      line-height: 12px;
    }
  }

  &-tech {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }

  &-label {
    background: rgba(56, 139, 253, 0.15);
    font-size: 11px;
    line-height: 11px;
    color: #58a6ff;
    padding: 5px 10px;
    border-radius: 15px;
  }

  &-footer {
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    .circle {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;

      &.green {
        background: #41b883;
      }
    }
    &__title {
      p {
        font-size: 11px;
        line-height: 11px;
        color: #8b949e;
      }
    }
  }
}
</style>
<template>
  <div class="main-content">
    <About
      v-if="content.name === 'about.md' && content.isOpened && content.isMain"
    />
    <Resume
      v-if="content.name === 'resume.pdf' && content.isOpened && content.isMain"
    />
    <Contact
      v-if="
        content.name === 'contact.css' && content.isOpened && content.isMain
      "
    />
    <Projects
      v-if="
        content.name === 'projects.html' && content.isOpened && content.isMain
      "
    />
    <ContactChanges
      v-if="
        content.name === 'contact.css M' && content.isOpened && content.isMain
      "
    />
    <AboutChanges
      v-if="
        content.name === 'about.md M' && content.isOpened && content.isMain
      "
    />
  </div>
</template>

<script>
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Contact from '@/components/Contact.vue'
import Projects from '@/components/Projects.vue'
import ContactChanges from '@/components/ContactChanges.vue'

export default {
  components: {
    About,
    Resume,
    Contact,
    Projects,
    ContactChanges,
  },
  props: {
    content: Object,
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  height: 100%;
}
</style>
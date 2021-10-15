<template>
  <div>
    <p>
      I hope you don't have any problems. But if u do you can
      <span @click="openContact('contact')">contact</span> me so we can solve
      them! 🎯
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    openContact(tab) {
      this.$emit('openContact', tab)
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  line-height: 14px;
  font-family: monospace;
  padding-top: 20px;
}
span {
  color: #f5d67b;
  text-decoration: underline;
  cursor: pointer;
}
</style>
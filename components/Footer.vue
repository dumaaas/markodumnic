<template>
  <div class="footer">
    <div class="footer-left">
      <p>built with <span class="emoji"> 💜</span> by dumaaas</p>
    </div>
    <div class="footer-right">
      <div>
        <p class="emoji">🔥</p>
      </div>
      <div>
        <p>Γ Marko Dumnic</p>
      </div>
      <div>
        <p>Spaces: 2</p>
      </div>
      <div>
        <p>• UTF-8</p>
      </div>
      <div>
        <p><span class="emoji">🏠</span> Niksic, Montenegro</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: #222b33;
  padding: 7px 10px;
  color: rgba(103, 136, 158, 0.5);
  width: 100%;
  display: flex;
  align-items: space;
  justify-items: center;
  justify-content: space-between;
  overflow: hidden;
  font: caption;
  font-size: 12px;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;

  p {
    font-size: 12px;
    color: rgba(103, 136, 158, 0.5);
  }

  .emoji {
    opacity: 1;
    color: black;
  }

  &-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 42px;
  }
}
</style>

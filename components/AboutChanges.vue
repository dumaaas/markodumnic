<template>
  <div class="about">
    <div class="content-line">
      <span class="content-line__number"> 1 </span>
      <div class="content-line__text">
        <img src="@/static/me.jpg" alt="profile-photo" />
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 2 </span>
      <div class="content-line__text">
        <h1><span>#</span> Marko Dumnic</h1>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 3 </span>
      <div class="content-line__text">
        <p>Hello,👋🏽 I’m Marko, a junior front-end engineer with lorem ipsum lorem</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 4 </span>
      <div class="content-line__text">
        <p>lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem.</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 5 </span>
      <div class="content-line__text">
        <p>
          Lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem.
        </p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 6 </span>
      <div class="content-line__text">
        <p>
          lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem.
        </p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 7 </span>
      <div class="content-line__text"></div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 8 </span>
      <div class="content-line__text">
        <h4>🏠 Niksic, Montenegro</h4>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 9 </span>
      <div class="content-line__text"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  padding-left: 20px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 7px;
    border: 3px solid rgb(0, 172, 237);
  }

  h1 {
    font-size: 30px;
    line-height: 30px;
    color: #fff;
    font-family: monospace;
    padding: 30px 0;
    span {
      color: rgb(0, 172, 237);
    }
  }

  h4 {
    font-family: monospace;
    color: #8b949e;
  }

  p {
    font-size: 15px;
    font-family: monospace;
    line-height: 15px;
  }
}
</style>
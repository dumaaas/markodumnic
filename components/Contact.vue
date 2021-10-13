<template>
  <div class="contact">
    <div class="content-line">
      <span class="content-line__number"> 1 </span>
      <div class="content-line__text">
        <p class="comment">/*</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 2 </span>
      <div class="content-line__text">
        <p class="comment">*</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 3 </span>
      <div class="content-line__text">
        <p class="comment">* CONTACT</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 4 </span>
      <div class="content-line__text">
        <p class="comment">
          * Feel free to send me an email to my address `markodumnic8@gmail.com`
        </p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 5 </span>
      <div class="content-line__text">
        <p class="comment">* will reply as soon as I get to read the email.</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 6 </span>
      <div class="content-line__text">
        <p class="comment">*</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 7 </span>
      <div class="content-line__text">
        <p class="comment">*/</p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 8 </span>
      <div class="content-line__text"></div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 9 </span>
      <div class="content-line__text"></div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 10 </span>
      <div class="content-line__text">
        <p>
          <i class="brackets">.</i>
          <i class="class">contact</i>
          <i class="brackets"> { </i>
        </p>
      </div>
    </div>
    <div class="content-line conector">
      <span class="content-line__number"> 11 </span>
      <div class="content-line__text bl-1">
        <p>
          <i class="attributes">email:</i>
          <i class="value">markodumnic8@gmail.com;</i>
        </p>
      </div>
    </div>
    <div class="content-line conector">
      <span class="content-line__number"> 12 </span>
      <div class="content-line__text bl-1">
        <p>
          <i class="attributes">phone:</i>
          <i class="value">+38268836393;</i>
        </p>
      </div>
    </div>
    <div class="content-line conector">
      <span class="content-line__number"> 13 </span>
      <div class="content-line__text bl-1">
        <p>
          <i class="attributes">github:</i>
          <i class="value"
            ><a href="https://github.com/dumaaas" target="_blank"
              >https://github.com/dumaaas;</a
            ></i
          >
        </p>
      </div>
    </div>
    <div class="content-line conector">
      <span class="content-line__number"> 14 </span>
      <div class="content-line__text bl-1">
        <p>
          <i class="attributes">linkedin:</i>
          <i class="value"
            ><a
              href="https://www.linkedin.com/in/marko-dumni%C4%87-714b72198/"
              target="_blank"
              >https://linkedin.com/in/marko-dumni%C4%87-714b72198/;</a
            ></i
          >
        </p>
      </div>
    </div>
    <div class="content-line conector">
      <span class="content-line__number"> 15 </span>
      <div class="content-line__text bl-1">
        <p>
          <i class="attributes">location:</i>
          <i class="value">Niksic, Montenegro;</i>
        </p>
      </div>
    </div>
    <div class="content-line">
      <span class="content-line__number"> 16 </span>
      <div class="content-line__text">
        <p>
          <i class="brackets">}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  a {
    color: #ea8151;
    text-decoration: underline;
  }
  .content-line {
    align-items: center;

    &.conector {
      padding: 0;
      .content-line__text {
        padding: 3px 0 3px 15px;
      }
    }

    &:hover {
      background: #1f282f;
    }
  }
  .bl-1 {
    border-left: 1px solid #666666;
  }
  i {
    &.brackets {
      color: #6cdae5;
    }

    &.class {
      color: #f8b84d;
      margin-left: -9px;
    }

    &.attributes {
      color: #b2cad6;
    }
    &.value {
      color: #ea8151;
    }
  }
  p {
    text-align: left;
    font-size: 15px;
    font-family: monospace;
    line-height: 15px;
    &.comment {
      color: #666666;
    }
  }
}
</style>
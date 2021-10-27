<template>
  <div class="contact-changes">
    <div class="contact">
      <div class="contact-code">
        <div class="content-line">
          <span class="content-line__number"> 1 </span>
          <div class="content-line__text"></div>
        </div>
        <div class="content-line old">
          <span class="content-line__number"> 2 </span>
          <div class="content-line__text">
            <p class="comment">Unemployed | 1 project</p>
          </div>
        </div>
        <div class="content-line">
          <span class="content-line__number"> 3 </span>
          <div class="content-line__text"></div>
        </div>
      </div>
    </div>
    <div class="hr-line"></div>
    <div class="contact">
      <div class="contact-code pl-0">
        <div class="content-line">
          <span class="content-line__number"> 1 </span>
          <div class="content-line__text"></div>
        </div>
        <div class="content-line new">
          <span class="content-line__number"> 2 </span>
          <div class="content-line__text">
            <p class="comment">Employed | 40+ projects</p>
          </div>
        </div>
        <div class="content-line">
          <span class="content-line__number"> 3 </span>
          <div class="content-line__text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-changes {
  display: flex;
  height: 100%;
  width: 100%;
  .hr-line {
    height: 100%;
    width: 2px;
    background: rgba(0, 0, 0, 0.11);
    margin: 0 5px;
  }
}
.contact {
  width: 50%;
  height: 100%;
  overflow: auto;
  &-code {
    overflow: auto;
    width: 100%;
    &.pl-0 {
      padding-left: 5px;
    }
    height: 100%;
    padding-left: 20px;
    padding-bottom: 20px;
    a {
      color: #ea8151;
      text-decoration: underline;
    }
    .content-line {
      align-items: center;

      &.old {
        background: rgba(255, 0, 0, 0.4);
        &:hover {
          background: rgba(255, 0, 0, 0.4);
        }
      }

      &.new {
        background: rgba(51, 170, 51, 0.4);
        &:hover {
          background: rgba(51, 170, 51, 0.4);
        }
      }

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
      white-space: nowrap;

      &.comment {
        color: #f5d67b;
      }
    }
  }
  &-form {
    height: 310px;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    &__wrapper {
      padding: 10px 20px;
    }

    &__header {
      display: flex;
      gap: 20px;
      text-transform: uppercase;
      p {
        color: #666666;
        font-size: 14px;
        font-family: monospace;
        cursor: pointer;
      }
      .active {
        padding-bottom: 8px;
        border-bottom: 1px solid #fff;
        p {
          color: #fff;
        }
      }
    }
  }
}
</style>
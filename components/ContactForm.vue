<template>
  <div class="form">
    <form ref="form" @keyup="clearErrors" @submit.prevent>
      <div class="form-row">
        <p>markodumnic:\portfolio\welcome></p>
        <span>Greetings! You can contact me here if you want.</span>
      </div>
      <div class="form-row">
        <p>markodumnic:\portfolio\name></p>
        <input type="text" autofocus v-model="name" name="from_name" autocomplete="false" />
      </div>
      <div class="form-row">
        <p>markodumnic:\portfolio\email></p>
        <input type="text" autofocus v-model="email" name="from_email" autocomplete="false" />
      </div>
      <div class="form-row">
        <p>markodumnic:\portfolio\message></p>
        <input type="text" autofocus v-model="message" name="from_message" autocomplete="false" />
      </div>
      <div class="form-row">
        <p>markodumnic:\portfolio\submit></p>
        <button @click="submit">Send</button>
      </div>
      <div v-if="error" class="form-row">
        <p>
          markodumnic:\portfolio\response> <i class="error">{{ error }}</i>
        </p>
      </div>
      <div v-if="success" class="form-row">
        <p>
          markodumnic:\portfolio\response> <i class="success">{{ success }}</i>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      error: '',
      success: '',
    }
  },
  methods: {
    submit() {
      this.success = ''
      if (this.name === '' || this.email === '' || this.message === '') {
        this.error = 'All fields are required.'
        return
      }
      emailjs
        .sendForm(
          'markodumnic',
          'markodumnicid',
          this.$refs.form,
          'user_z5NqmTk6lre9kzsXeLomX'
        )
        .then(
          (result) => {
            if (result.status === 200) {
              this.success =
                'Thanks for reaching me. I will contact you as soon as possible.'
            }
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    },
    clearErrors() {
      this.error = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding-top: 20px;
  &-row {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-family: monospace;
      line-height: 14px;
      i {
        &.error {
          color: rgb(237, 89, 74);
        }
        &.success {
          color: rgb(90, 192, 90);
        }
      }
    }
    span {
      padding-left: 10px;
      font-size: 14px;
      font-family: monospace;
      line-height: 14px;
      color: #f5d67b;
    }
    button {
      background: transparent;
      border: 1px solid #24374f;
      color: #58a6ff;
      border-radius: 10px;
      padding: 2px 5px;
      margin-left: 10px;
      font-size: 14px;
      font-family: monospace;
      cursor: pointer;

      &:hover {
        background: #24374f;
      }
    }
    &:last-child {
      padding: 3px 0;
    }
  }
}
</style>
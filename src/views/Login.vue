<template>
  <div class="row vh-100 vw-100 row-login">
    <div class="col-md-5 d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>
        <div class="form">
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              autocomplete="off"
              v-model.trim="v$.form.email.$model"
              :class="{ 'is-invalid': v$.form.email.$error}"
            />
          </div>

          <div class="form-group mt-3">
            <label for="password" class="form-label d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small>
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Digite sua senha"
              autocomplete="off"
              v-model.trim="v$.form.password.$model"
              :class="{ error: v$.form.password.$error}"
            />
          </div>

          <div class="col mt-5">
            <button class="btn btn-primary col-12" @click="navigateTo">
              <i class="bi bi-box-arrow-in-right">Entrar</i>
            </button>
            <hr />
            <button class="btn btn-secondary col-12" @click="signIn">
              <i class="bi bi-person-plus-fill">Não tenho conta</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-7 d-flex justify-content-center align-items-center">
      <img class="image-login" src="@/assets/images/login.svg" alt="image-login">
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email} from '@vuelidate/validators'

export default {
  name: "Login",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    navigateTo() {
      this.v$.$touch();
      if(this.v$.$error) {
        return;
      }
      this.$router.push('/home')
    },
    signIn() {
      this.$router.push('/register')
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #f2f2f2;
}

.title-login {
  font-weight: bold;
}

.image-login {
  width: 100%;
  max-width: 600px;
}
</style>

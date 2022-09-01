<template>
  <div class="row vh-100 vw-100 row-register">
    <div class="col-md-7 d-flex justify-content-center align-items-center">
      <img
        class="image-register"
        src="@/assets/images/create.svg"
        alt="image-login"
      />
    </div>
    <div
      class="col-md-5 d-flex justify-content-center align-items-center left-register"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-register">Faça o seu cadastro</h2>
        <div class="form">
          <div class="form-group">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Gabriel"
              autocomplete="off"
              v-model.trim="v$.form.name.$model"
              :class="{ 'is-invalid': v$.form.name.$error}"
            />
          </div>

          <div class="form-group mt-3">
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
            <label for="password" class="form-label"> Senha </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Digite sua senha"
              autocomplete="off"
              v-model.trim="v$.form.password.$model"
              :class="{ 'is-invalid': v$.form.password.$error}"
            />
          </div>

          <div class="form-group mt-3">
            <label for="confirmPassword" class="form-label">Confirme sua senha</label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              autocomplete="off"
              v-model.trim="v$.form.confirmPassword.$model"
              :class="{ 'is-invalid': v$.form.confirmPassword.$error}"
            />
          </div>

          <div class="col mt-5">
            <button class="btn btn-primary col-12" @click="register">
              <i class="bi bi-box-arrow-in-right">Cadastrar</i>
            </button>
            <hr />
            <button class="btn btn-secondary col-12" @click="comeBack">
              <i class="bi bi-box-arrow-in-left">Voltar</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs} from '@vuelidate/validators'

export default {
  name: "Register",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      confirmPassword: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs('form.password')
      },
    },
  },
  methods: {
    register() {
      this.v$.$touch();
      if(this.v$.$error) {
        return;
      }
      this.$router.push("/login");
    },
    comeBack() {
      this.$router.push("/login");
    },
  },
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

.row-register {
  margin-left: 0;
}

.left-register {
  background-color: #f2f2f2;
}

.title-register {
  font-weight: bold;
}

.image-register {
  width: 100%;
  max-width: 600px;
}
</style>

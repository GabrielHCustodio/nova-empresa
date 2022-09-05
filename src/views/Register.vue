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
        <h2 class="text-center mb-3 title-register">Faça o seu cadastro</h2>
        <div class="form">
          <div class="form-group">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Gabriel"
              autocomplete="off"
              v-model.trim="v$.name.$model"
              :class="{ 'is-invalid': v$.name.$error }"
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
              v-model.trim="v$.email.$model"
              :class="{ 'is-invalid': v$.email.$error }"
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
              v-model.trim="v$.password.$model"
              :class="{ 'is-invalid': v$.password.$error }"
            />
          </div>

          <div class="form-group mt-3">
            <label for="repeatPassword" class="form-label"
              >Confirme sua senha</label
            >
            <input
              type="password"
              class="form-control"
              id="repeatPassword"
              placeholder="Confirme sua senha"
              autocomplete="off"
              v-model.trim="v$.repeatPassword.$model"
              :class="{ 'is-invalid': v$.repeatPassword.$error }"
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
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";

export default {
  name: "Register",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
    }
  },
  methods: {
    async register() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }

      let user = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      const userJson = JSON.stringify(user)
      const req = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: userJson
      })

      const res = await req.json()
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
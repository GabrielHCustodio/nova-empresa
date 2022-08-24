<template>
  <div class="row vh-100 vw-100 row-register">
    <div class="col-md-7 d-flex justify-content-center align-items-center">
      <img class="image-register" src="@/assets/images/create.svg" alt="image-login">
    </div>
    <div class="col-md-5 d-flex justify-content-center align-items-center left-register">
      <div class="col-8">
        <h2 class="text-center mb-5 title-register">Faça o seu cadastro</h2>
        <div class="form">
          <div class="form-group">
            <label for="name" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Seu nome"
              autocomplete="off"
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
            />
          </div>

          <div class="form-group mt-3">
            <label for="confirmPassword" class="form-label"> Confirme sua senha </label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              autocomplete="off"
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
export default {
    name: "Register",
    methods: {
        register() {
            this.$router.push('/login')
        },
        comeBack() {
            this.$router.push('/')
        }
    }
}
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
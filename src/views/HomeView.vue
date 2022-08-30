<template>
  <div>
    <nav class="navbar navbar-light bg-light top-menu">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa WebService</a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sair</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/services"
          exact-active-class="active"
        >
          <i class="bi bi-caret-right"></i> Nossos serviços
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/orders"
          exact-active-class="active"
        >
          <i class="bi bi-tags"></i> Minhas ordens
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/new-order"
          exact-active-class="active"
        >
          <i class="bi bi-plus-circle"></i> Criar ordem
        </router-link>
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Escolha um serviço
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.top-menu {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}
.list-group-item {
  border-top: none;
  border-right: none;
  display: flex;
  justify-content: left;
}
.bi {
  width: 20px;
  height: 20px;
}
</style>

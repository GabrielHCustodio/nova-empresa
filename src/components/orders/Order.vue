<template>
  <h3>Detalhes da ordem : ID</h3>
  <ul class="list-group">
    <li class="list-group-item">Serviço</li>
    <li class="list-group-item">Descrição</li>
    <li class="list-group-item">Data de envio</li>
    <li class="list-group-item">Data de finalização</li>
    <li class="list-group-item">Valor</li>
  </ul>
  <div class="col-auto d-flex justify-content-around mt-3">
    <button
      type="button"
      class="btn btn-warning"
      @click="$router.push({ name: 'orders' })"
    >
      Voltar
    </button>
  </div>
</template>

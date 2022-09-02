<template>
  <h3>Detalhes da ordem : {{data.id}}</h3>
  <ul class="list-group">
    <li class="list-group-item">Nome: {{data.name}}</li>
    <li class="list-group-item">Serviço: {{data.service}}</li>
    <li class="list-group-item">Descrição: {{data.descrition}}</li>
    <li class="list-group-item">Data: {{data.data}}</li>
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

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
  name: 'Order',
  mixins: [ApiMixin],
  props: ['id'],
  created() {
    const url = `http://localhost:3000/orders/${this.id}`
    this.getDataApi(url)
  }
}
</script>

<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">SERVIÇO</th>
        <th scope="col">DATA</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in data" :key="d.id">
        <td>{{d.id}}</td>
        <td>{{d.service}}</td>
        <td>{{d.date}}</td>
        <td>
          <router-link :to="{name: 'order', params: { id: d.id } }" class="btn btn-sm btn-primary">
            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
  name: "Orders",
  mixins: [ApiMixin],
  created() {
    const url = "http://localhost:3000/orders"
    this.getDataApi(url)
  }
};
</script>

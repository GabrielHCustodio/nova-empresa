<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap">
    <div v-for="d in data" :key="d.id">
      <div class="card" style="width: 20rem; height: 18rem">
        <img :src="`/img/${d.img}`" class="card-img-top" :alt="d.service" />
        <div class="card-body">
          <h5 class="card-title">{{ d.service }}</h5>
          <router-link :to="{ name: 'service' }" class="btn btn-primary">Saiba mais</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Services",
  mixins: [ApiMixin],
  created() {
    const url = `http://localhost:3000/services`;
    this.getDataApi(url);
  },
};
</script>


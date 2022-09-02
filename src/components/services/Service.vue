<template>
  <div class="card mb-3 d-flex align-items-center">
    <router-link to="/home/services" class="btn-close close"></router-link>
    <img :src="`/img/${data.img}`" class="card-img-top mt-3 image" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ data.service }}</h5>
      <p class="card-text">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Service",
  mixins: [ApiMixin],
  created() {
        const url = `http://localhost:3000/services/${this.$route.params.id}`
        this.getDataApi(url)
    },
  beforeRouteUpdate(to, from, next) {
        const url = `http://localhost:3000/services/${to.params.id}`
        if(to.params.id != undefined) { this.getDataApi(url) }
        next()
    }
};
</script>

<style scoped>
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.image {
  width: 400px;
}
</style>

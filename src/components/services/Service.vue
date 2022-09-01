<template>
  <div class="card mb-3 d-flex align-items-center">
    <router-link to="/home/services" class="btn-close close"></router-link>
    <img src="@/assets/images/001.png" class="card-img-top mt-3 image" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Nome do serviço</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        eligendi tenetur consectetur. Earum culpa, error aut nemo, ducimus
        facilis similique voluptates possimus id tenetur pariatur corrupti quas
        dolores, quia modi!
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Service'
}
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

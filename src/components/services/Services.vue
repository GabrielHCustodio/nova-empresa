<template>
    <div class="d-flex justify-content-between flex-wrap">
        <div class="card mb-3" style="width: 18rem">
        <img src="@/assets/images/001.png" class="card-img-top" alt="software" />
        <div class="card-body">
            <h5 class="card-title">Softwares</h5>
            <router-link :to="{name: 'service'}" class="btn btn-primary">Saiba mais</router-link>
        </div>
        </div>

    <div class="card mb-3" style="width: 18rem">
      <img src="@/assets/images/002.png" class="card-img-top" alt="landing" />
      <div class="card-body">
        <h5 class="card-title">Landing Page</h5>
         <router-link :to="{name: 'service'}" class="btn btn-primary">Saiba mais</router-link>
      </div>
    </div>

    <div class="card mb-3" style="width: 18rem">
      <img src="@/assets/images/003.png" class="card-img-top" alt="apps" />
      <div class="card-body">
        <h5 class="card-title">Aplicativos</h5>
         <router-link :to="{name: 'service'}" class="btn btn-primary">Saiba mais</router-link>
      </div>
    </div>

    <div class="card mb-3" style="width: 18rem">
      <img src="@/assets/images/004.png" class="card-img-top" alt="e-commerce" />
      <div class="card-body">
        <h5 class="card-title">E-commerce</h5>
         <router-link :to="{name: 'service'}" class="btn btn-primary">Saiba mais</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

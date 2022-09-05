<template>
  <form class="row g-3">
    <div class="col-md-4">
      <label class="form-label">NOME DO SERVIÇO</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="v$.name.$model"
        :class="{ 'is-invalid': v$.name.$error }"
      />
    </div>
    <div class="col-md-3">
      <label class="form-label">DATA</label>
      <input
        type="date"
        class="form-control"
        v-model.trim="v$.date.$model"
        :class="{ 'is-invalid': v$.date.$error }"
      />
    </div>
    <div class="col-md-4">
      <label class="form-label">SERVIÇO</label>
      <select
        class="form-select"
        required
        v-model.trim="v$.typeService.$model"
        :class="{ 'is-invalid': v$.typeService.$error }"
      >
        <option selected disabled value="">Escolha um serviço...</option>
        <option value="Software de sistemas">Software de sistemas</option>
        <option value="Website institucional">Website institucional</option>
        <option value="Software de aplicativos">Software de aplicativos</option>
        <option value="E-commerce">E-commerce</option>
      </select>
    </div>
    <div class="col-11">
      <div class="form-floating">
        <textarea
          class="form-control"
          style="height: 100px"
          v-model.trim="v$.description.$model"
          :class="{ 'is-invalid': v$.description.$error }"
        ></textarea>
        <label>Descrição do serviço...</label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" @click="createdService">Criar serviço</button>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "NewOrder",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
      name: "",
      date: "",
      typeService: "",
      description: "",
  }),
  validations: {
      name: {
        required,
        minLength: minLength(3),
      },
      date: {
        required,
      },
      typeService: {
        required,
      },
      description: {
        required,
        maxLength: maxLength(200),
    },
  },
  methods: {
    async createdService() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }
      
      let pedidos = {
        name: this.name,
        date: this.date,
        service: this.typeService,
        description: this.description,
      };

      const pedidoJson = JSON.stringify(pedidos);
      const req = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: pedidoJson,
      });

      const res = await req.json();

      this.$router.push({name: 'orders'})
    },
  },
};
</script>
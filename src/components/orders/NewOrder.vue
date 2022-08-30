<template>
  <form class="row g-3">
    <div class="col-md-4">
      <label class="form-label">NOME</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="v$.service.name.$model"
        :class="{ 'is-invalid': v$.service.name.$error }"
      />
    </div>
    <div class="col-md-4">
      <label class="form-label">CPF</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="v$.service.cpf.$model"
        :class="{ 'is-invalid': v$.service.cpf.$error }"
      />
    </div>
    <div class="col-md-3">
      <label class="form-label">Data</label>
      <input
        type="date"
        class="form-control"
        v-model.trim="v$.service.date.$model"
        :class="{ 'is-invalid': v$.service.date.$error }"
      />
    </div>
    <div class="col-md-3">
      <label class="form-label">SERVIÇO</label>
      <select
        class="form-select"
        required
        v-model.trim="v$.service.typeService.$model"
        :class="{ 'is-invalid': v$.service.typeService.$error }"
      >
        <option selected disabled value="">Escolha um serviço...</option>
        <option value="1">Serviço 1</option>
        <option value="2">Serviço 2</option>
        <option value="3">Serviço 3</option>
        <option value="4">Serviço 4</option>
      </select>
    </div>
    <div class="col-11">
      <div class="form-floating">
        <textarea
          class="form-control"
          style="height: 100px"
          v-model.trim="v$.service.description.$model"
          :class="{ 'is-invalid': v$.service.description.$error }"
        ></textarea>
        <label>Descrição do serviço...</label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit" @click="createdService">
        Criar serviço
      </button>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "NewService",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    service: {
      name: "",
      cpf: "",
      date: "",
      typeService: "",
      description: "",
    },
  }),
  validations: {
    service: {
      name: {
        required,
        minLength: minLength(3),
      },
      cpf: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11)
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
  },
  methods: {
    createdService() {},
  },
};
</script>

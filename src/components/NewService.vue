<template>
  <form class="row g-3">
    <div class="col-md-4">
      <label class="form-label">NOME</label>
      <input type="text" class="form-control" required v-model="service.name" />
    </div>
    <div class="col-md-4">
      <label class="form-label">CPF</label>
      <input type="text" class="form-control" required v-model="service.cpf" />
    </div>
    <div class="col-md-3">
      <label class="form-label">Data</label>
      <input type="date" class="form-control" required v-model="service.date" />
    </div>
    <div class="col-md-3">
      <label class="form-label">SERVIÇO</label>
      <select class="form-select" required v-model="service.typeService">
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
          required
          style="height: 100px"
          v-model="service.description"
        ></textarea>
        <label>Descrição do serviço...</label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit" @click="createdService">Criar serviço</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewService",
  data: () => ({
    service: {
        name: '',
        cpf: '',
        date: '',
        typeService: '',
        description: ''
    }
  }),
  methods: {
    createdService() {}
  }
};
</script>

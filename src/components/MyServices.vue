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
      <tr>
        <td>1</td>
        <td>Website</td>
        <td>20/04/2022</td>
        <td>
          <router-link to="/home/services" class="btn btn-sm btn-primary">
            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
          </router-link>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Landing Page</td>
        <td>14/07/2022</td>
        <td>
          <router-link to="/home/services" class="btn btn-sm btn-primary">
            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Services",
};
</script>

<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa WebService</a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Acessar</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-3 mt-5" id="sidebar">
          <ul class="navbar-nav link">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#section_1' }">Quem Somos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#section_2' }">Serviços</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#section_3' }">Objetivos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#section_4' }">Parceiros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#section_5' }">Contatos</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-9" id="informations">
          <div class="row mt-5 p-5 bg-light">
            <div class="col">
              <h3 id="section_1">Quem somos...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas posuere luctus elit, et blandit neque pulvinar a. Nunc
                id consectetur ipsum. Sed dignissim turpis quis fringilla
                pretium. Sed bibendum faucibus ex, tincidunt aliquet mauris
                commodo accumsan. Vivamus commodo risus quis euismod tempus.
                Donec non hendrerit quam. Vivamus laoreet lacus sed neque
                tristique pulvinar. Vestibulum in maximus dolor. Mauris
                efficitur libero quis placerat placerat.
              </p>
            </div>
          </div>

          <div class="row mt-5 p-5 bg-light">
            <div class="col">
              <h3 id="section_2">Serviços...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas posuere luctus elit, et blandit neque pulvinar a. Nunc
                id consectetur ipsum. Sed dignissim turpis quis fringilla
                pretium. Sed bibendum faucibus ex, tincidunt aliquet mauris
                commodo accumsan. Vivamus commodo risus quis euismod tempus.
                Donec non hendrerit quam. Vivamus laoreet lacus sed neque
                tristique pulvinar. Vestibulum in maximus dolor. Mauris
                efficitur libero quis placerat placerat.
              </p>
            </div>
          </div>

          <div class="row mt-5 p-5 bg-light">
            <div class="col">
              <h3 id="section_3">Objetivos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas posuere luctus elit, et blandit neque pulvinar a. Nunc
                id consectetur ipsum. Sed dignissim turpis quis fringilla
                pretium. Sed bibendum faucibus ex, tincidunt aliquet mauris
                commodo accumsan. Vivamus commodo risus quis euismod tempus.
                Donec non hendrerit quam. Vivamus laoreet lacus sed neque
                tristique pulvinar. Vestibulum in maximus dolor. Mauris
                efficitur libero quis placerat placerat.
              </p>
            </div>
          </div>

          <div class="row mt-5 p-5 bg-light">
            <div class="col">
              <h3 id="section_4">Parceiros</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas posuere luctus elit, et blandit neque pulvinar a. Nunc
                id consectetur ipsum. Sed dignissim turpis quis fringilla
                pretium. Sed bibendum faucibus ex, tincidunt aliquet mauris
                commodo accumsan. Vivamus commodo risus quis euismod tempus.
                Donec non hendrerit quam. Vivamus laoreet lacus sed neque
                tristique pulvinar. Vestibulum in maximus dolor. Mauris
                efficitur libero quis placerat placerat.
              </p>
            </div>
          </div>

          <div class="row mt-5 mb-5 p-5 bg-light">
            <div class="col">
              <h3 id="section_5">Contato</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas posuere luctus elit, et blandit neque pulvinar a. Nunc
                id consectetur ipsum. Sed dignissim turpis quis fringilla
                pretium. Sed bibendum faucibus ex, tincidunt aliquet mauris
                commodo accumsan. Vivamus commodo risus quis euismod tempus.
                Donec non hendrerit quam. Vivamus laoreet lacus sed neque
                tristique pulvinar. Vestibulum in maximus dolor. Mauris
                efficitur libero quis placerat placerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
#sidebar {
  position: sticky;
  top: 0;
  height: 300px;
}
</style>
<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa WebService</a>

        <ul class="navbar-nav links">
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Acessar</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-3">
          <ul
            class="navbar-nav link pl-20 align-items-start justify-content-center"
          >
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_1' }"
                >Quem Somos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_2' }"
                >Serviços</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_3' }"
                >Objetivos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_3' }"
                >Parceiros</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_3' }"
                >Contatos</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-9">
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
              <h3 id="section_1">Serviços...</h3>
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
              <h3 id="section_1">Objetivos</h3>
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
              <h3 id="section_1">Parceiros</h3>
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
              <h3 id="section_1">Contato</h3>
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

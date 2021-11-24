<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <!-- Image and text -->

      <a class="navbar-brand" href="#">
        <img
          src="@/assets/fipu_logo.png"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active p-1">
            <router-link to="/">Home</router-link>
          </li>

          <li class="nav-item p-1">
            <router-link to="/login">Login</router-link>
          </li>

          <li class="nav-item p-1">
            <router-link to="/signup">Signup</router-link>
          </li>
        </ul>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pretraga"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

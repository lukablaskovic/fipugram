<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <!-- Image and text -->

      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/fipu_logo.png"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </router-link>
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
          <li v-show="!store.currentUser" class="nav-item p-1">
            <router-link to="/login">Prijavi se</router-link>
          </li>

          <li v-show="!store.currentUser" class="nav-item p-1">
            <router-link to="/signup">Registriraj se</router-link>
          </li>

          <li v-show="store.currentUser" class="nav-item p-1">
            <a href="#" @click.prevent="logout()">Odjava</a>
          </li>
        </ul>

        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="form-inline my-2 my-lg-0">
              <input
                v-model="store.searchTerm"
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
<script>
import store from "@/store";

import { getAuth, onAuthStateChanged, signOut } from "@/firebase";

const auth = getAuth();

import router from "@/router";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("LOGGED IN: " + user.email);
    store.currentUser = user.email;
    console.log("store.currentUser:", store.currentUser);
  } else {
    console.log("NO USER");
    store.currentUser = null;
    console.log("store.currentUser:", store.currentUser);

    if (router.name !== "Login") {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      signOut(auth).then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>

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

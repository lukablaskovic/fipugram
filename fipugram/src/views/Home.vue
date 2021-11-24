<template>
  <div class="home">
    <div class="jumbotron">
      <img alt="Vue logo" src="../assets/logo.png" />
      <p class="lead">
        Ovo je Fipugram aplikacija izrađena za potrebe kolegija Programsko
        Inženjerstvo
      </p>
      <hr class="my-4" />
      <p>aplikacija izrađena u Vue.js-u</p>
      <p class="lead">
        <a class="btn btn-success btn-lg" href="/signup" role="button"
          >Registriraj se</a
        >
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

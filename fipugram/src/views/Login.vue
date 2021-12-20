<template>
  <div class="about">
    <h1>Molimo prijavite se za nastanak</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email adresa</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Vaš email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary mt-2">
              Prijava
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        //Koristi lambda/arrow funkcije u kombinaciji sa .then kako bi se sacuvao this iz parent konteksta
        .then((result) => {
          console.log("Uspješna prijava", result);
          //Replace koristi prilikom logina, push za sve ostale stvari
          this.$router.replace({ name: "Home" });
        })
        .catch(function (e) {
          console.error("greska");
        });
    },
  },
};
</script>

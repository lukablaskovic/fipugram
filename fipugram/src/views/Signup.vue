<template>
  <div class="about">
    <h1>Molimo registrirajte se za početak korištenja aplikacije</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email and password with anyone
              else.</small
            >
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
                placeholder="Vaša lozinka"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Potvrdi lozinku</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Potvrda lozinke"
              />
            </div>
            <span v-if="password != passwordRepeat" class="text-danger"
              >Lozinke se ne podudaraju!</span
            >
            <br />
            <button type="button" @click="signup" class="btn btn-success mt-2">
              Registriraj se!
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "@/firebase";
export default {
  name: "Signup",
  data() {
    //Ovo je funkcija!
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    //Ovo je objekt u kojem se definiraju metode
    signup() {
      if (this.password !== this.passwordRepeat) {
        return;
      } else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            console.log("Uspjesna registracija!");
          })
          .catch((error) => {
            console.log("Doslo je do greske!", error);
          });
      }
    },
  },
};
</script>

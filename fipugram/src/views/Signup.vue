<template>
  <div class="about">
    <h1>Signup now!</h1>
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
              <label for="exampleInputEmail1">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Confirm password</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Confirm Password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-success mt-2">
              Submit
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
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          console.log("Uspjesna registracija!");
        })
        .catch((error) => {
          console.log("Doslo je do gresk!", error);
        });
    },
  },
};
</script>

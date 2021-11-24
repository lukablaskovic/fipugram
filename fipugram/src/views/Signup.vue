<template>
  <div class="about">
    <h1>Signup now!</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Surname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your surname"
              />
            </div>
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email and password with anyone
              else.</small
            >
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
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
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" class="btn btn-success mt-2">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

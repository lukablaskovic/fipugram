<template>
  <div class="d-flex flex-column">
    <div class="p-0 h-50">
      <nav class="navbar navbar-expand">
        <div class="container-fluid nav-item">
          <a class="navbar-brand" href="#">
            <img
              src="https://picsum.photos/300"
              alt=""
              width="40"
              height="40"
              class="d-inline-block rounded-circle m-2"
            />
            <div class="float-end p-2 text-start">
              <span>random.person</span>
              <br />
              <span class="text-muted txt-small">Novi na instagramu</span>
            </div>
          </a>
        </div>
        <div class="button nav-item">
          <a class="txt-small" href="#">Prati</a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
//JS kod
export default {
  name: "InstagramCard",
};
</script>
<style scoped>
a {
  font-size: small;
  font-weight: bold;
}
.txt-small {
  font-size: 0.7rem;
}
a:link {
  text-decoration: none;
}
</style>

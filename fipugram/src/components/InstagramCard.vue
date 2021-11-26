<template>
  <div class="row">
    <div class="card p-0 mb-3">
      <div class="card-header p-0">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://picsum.photos/200"
                alt=""
                width="40"
                height="40"
                class="d-inline-block rounded-circle m-2"
              />
              autor
            </a>
            <a href="#">
              <img class="w-25" src="@/assets/more.png" alt="" />
            </a>
          </div>
        </nav>
      </div>
      <div class="card-body p-0">
        <img class="card-img-top" :src="info" alt="" />
      </div>

      <div class="container">
        <div class="d-flex flex-row">
          <div class="justify-content-start m-1">
            <img src="@/assets/heart.png" alt="" width="35" height="35" />
          </div>
          <div class="justify-content-start m-1">
            <img src="@/assets/chat.png" alt="" width="35" height="35" />
          </div>
          <div class="justify-content-start m-1">
            <img src="@/assets/send.png" alt="" width="35" height="35" />
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="justify-content-start mb-2"><b>Sviđa mi se: 891</b></div>
        </div>
        <div class="d-flex flex-row">
          <div class="justify-content-start mb-2">
            <b>random.person</b> I love this!
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="justify-content-start text-muted txt-small">
            PRIJE 1 DAN
          </div>
        </div>
        <hr />

        <div class="d-flex flex-row">
          <div class="justify-content-start mb-2 text-muted">
            <img src="@/assets/smile.png" alt="" width="30" height="30" />
            Komentiraj...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//JS kod
export default {
  props: ["info"],
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
</style>

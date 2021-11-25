<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-5">
      <div class="container-fluid p-2 mb-4 stories">
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
        <InstagramStory />
      </div>
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
    </div>

    <div class="col-3 mt-2 d-none d-xl-block">
      <b class="text-muted">Mi vam predlažemo</b>
      <div class="float-end">Pogledajte sve</div>
      <div class="float-none">
        <InstagramRecommend />
        <InstagramRecommend />
        <InstagramRecommend />
        <InstagramRecommend />
        <InstagramRecommend />
        <p class="text-muted">@2021 FIPUGRAM</p>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import InstagramCard from "../components/InstagramCard.vue";
import InstagramStory from "../components/InstagramStory.vue";
import InstagramRecommend from "../components/InstagramRecommend.vue";
export default {
  name: "Home",
  components: {
    InstagramCard,
    InstagramStory,
    InstagramRecommend,
  },
};
</script>
<style scoped>
.stories {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  margin-left: 0px;
  white-space: nowrap;
  position: relative;
  overflow-x: hidden scroll;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.03);
}

.stories div {
  float: none;
  margin: 0 0.25%;
  display: inline-block;
  zoom: 1;
}
</style>

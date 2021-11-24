<template>
  <InstagramStory />

  <div class="row">
    <div class="col-3"></div>
    <div class="col-5">
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
      <InstagramCard />
    </div>
    <div class="col-4 text-muted"><b>Mi vam predlažemo</b></div>
  </div>
</template>

<script>
// @ is an alias to /src

import InstagramCard from "../components/InstagramCard.vue";
import InstagramStory from "../components/InstagramStory.vue";
export default {
  name: "Home",
  components: {
    InstagramCard,
    InstagramStory,
  },
};
</script>

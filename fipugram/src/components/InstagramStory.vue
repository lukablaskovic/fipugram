<template>
  <div class="c-story" style="width: 100px">
    <img
      class="rounded-circle p-1 m-1 border border-danger border-3"
      :src="info.url"
      alt=""
      width="75"
    />
    <br />
    <p class="text-center txt-small">{{ info.author }}</p>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "InstagramStory",
};
</script>

<style lang="scss">
.txt-small {
  font-size: 0.7rem;
}
</style>

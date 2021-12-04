<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-5">
      <div class="container-fluid p-2 mb-4 stories">
        <InstagramStory
          v-for="story in stories"
          :key="story.url"
          :info="story"
        />
      </div>
      <InstagramCard
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-3 mt-2 d-none d-xl-block">
      <b class="text-muted">Mi vam predlažemo</b>
      <div class="float-end">Pogledajte sve</div>
      <InstagramRecommend
        v-for="recommendation in recommendations"
        :key="recommendation.url"
        :info="recommendation"
      />
      <p class="text-muted">@2021 FIPUGRAM</p>
      <!-- Ime prezime zadatak iz videa -->
      <form class="form-inline my-2 my-lg-0">
        <input
          v-model="ime"
          class="form-control me-2"
          type="search"
          placeholder="Unesite ime"
          aria-label="ime"
        />
      </form>
      <form class="form-inline my-2 my-lg-0">
        <input
          v-model="prezime"
          class="form-control me-2"
          type="search"
          placeholder="Unesite prezime"
          aria-label="prezime"
        />
      </form>
      <p>Rezultat: {{ nameSurname }}</p>
      <!-- Ime prezime zadatak iz videa -->
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import InstagramCard from "../components/InstagramCard.vue";
import InstagramStory from "../components/InstagramStory.vue";
import InstagramRecommend from "../components/InstagramRecommend.vue";
import store from "@/store";
let cards = [];
let stories = [];
let recommendations = [];
cards = [
  {
    url: "https://picsum.photos/500",
    description: "having a nice day",
    likes: "500",
    time: "one hour ago",
    user: "franko_frankovic",
    user_url: "https://picsum.photos/700",
  },
  {
    url: "https://picsum.photos/600",
    description: "wow look at this",
    likes: "120",
    time: "two minutes ago",
    user: "pets.lovers",
    user_url: "https://picsum.photos/600",
  },
  {
    url: "https://picsum.photos/700",
    description: "thats the way i like it",
    likes: "40",
    time: "few minutes ago",
    user: "beatiful_landscapes",
    user_url: "https://picsum.photos/500",
  },
];
stories = [
  {
    url: "https://picsum.photos/700",
    author: "matija.matkovic",
  },
  {
    url: "https://picsum.photos/600",
    author: "pero.peric123",
  },
  {
    url: "https://picsum.photos/500",
    author: "elon.musk",
  },
  {
    url: "https://picsum.photos/400",
    author: "jeff.bezos",
  },
];
recommendations = [
  {
    url: "https://picsum.photos/400",
    user: "official.fender",
  },
  {
    url: "https://picsum.photos/300",
    user: "patrik_patrikovic",
  },
  {
    url: "https://picsum.photos/200",
    user: "gordan.perkovic",
  },
  {
    url: "https://picsum.photos/100",
    user: "stjepan_ivancic505",
  },
];
let ime = "";
let prezime = "";
export default {
  name: "Home",
  data: function () {
    return {
      cards,
      recommendations,
      stories,
      store,
      ime,
      prezime,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter(
        (card) =>
          card.description.includes(termin) || card.user.includes(termin)
      );
    },
    //Ime prezime zadatak iz videa
    nameSurname() {
      let termin0 = this.ime;
      let termin1 = this.prezime;
      return termin0 + " " + termin1;
    },
  },
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

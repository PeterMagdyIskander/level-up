<template>
  <div>
    <button @click="signIn">
      Start Game
    </button>
  </div>
</template>

<script>
import router from '@/router';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: "LoginPage",
  computed: mapGetters(['getUser', 'getQuests', mapActions]),
  methods: {
    ...mapActions(['login', 'setQuests']),
    signIn() {
      this.login();
      this.setQuests();
    }
  },
  watch: {
    getUser: {
      deep: true,
      handler(newVal) {
        if (newVal.role === "") {
          router.push('/ChooseYourHero');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  padding: 250px 0;
  button {
    all: unset;
    font-family: 'pressstart2p';
    color: #f4ee80;
    font-size: 3rem;
    text-shadow: 0 5px #a14759;
  }
}
</style>

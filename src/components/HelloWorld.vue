<template>
  <div>
    <button @click="login">
      Start Game
    </button>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: mapGetters(['getUser', mapActions]),
  methods: {
    ...mapActions(['login']),
  }
};
</script>

<style lang="scss" scoped>
button {
  all: unset;
  font-family: 'pressstart2p';
  color:#f4ee80;
  font-size: 3rem;
  text-shadow:0 5px #a14759;
}
</style>

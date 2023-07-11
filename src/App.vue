<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { initialize } from '@/firebase';
const { firebaseApp, firestore, auth } = initialize();
export default {

}
</script>
<style lang="scss">
#app {
  height: 100vh;
  background-image: linear-gradient(#252a52 .1em, transparent .1em), linear-gradient(90deg, #252a52 .1em, transparent .1em);
  background-size: 2em 2em;
  background-color: #17182d;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

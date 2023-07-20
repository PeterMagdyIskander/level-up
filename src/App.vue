<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ChooseYourHero">Choose your hero</router-link> |
    <router-link to="/QuestCenter">Quest Center</router-link> |
    <router-link to="/Attack">Attack</router-link> |
    <router-link to="/Defend">Defend</router-link>
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
html,body{
  height: 100%;
  background-image: linear-gradient(#252a52 .1em, transparent .1em), linear-gradient(90deg, #252a52 .1em, transparent .1em);
  background-size: 2em 2em;
  background-color: #17182d !important;
  text-align: center;
  >*{
    
  color:#FFF;
  }
}
#app {
  padding: 15px;
}

nav {

  a {
    font-weight: bold;
    color: #FFF;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div class="home">
    <LoginPage v-if="getUser==null"/>
    <home-screen v-else></home-screen>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '@/components/LoginPage.vue'
import { mapGetters } from 'vuex';
import HomeScreen from '../components/Base/HomeScreen.vue'
export default {
  name: 'HomeView',
  components: {
    LoginPage,
    HomeScreen
  },
  computed: mapGetters(['getUser']),
}
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
}
</style>

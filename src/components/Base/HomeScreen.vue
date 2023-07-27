<template>
    <div class="home-container">
        <h1 class="title">Level up</h1>
        {{ getUser.level }}
        <img class="planet-img" v-if="getUser.teamId === 'Dynamis'" src="@/assets/dynamis-planet.svg" alt="dynamis planet">
        <img class="planet-img" v-if="getUser.teamId === 'Lumos'" src="@/assets/lumos-planet.svg" alt="lumos planet">
        <img class="planet-img" v-if="getUser.teamId === 'Kalos'" src="@/assets/kalos-planet.svg" alt="kalos planet">
        <img class="planet-img" v-if="getUser.teamId === 'Astro'" src="@/assets/astro-planet.svg" alt="astro planet">
        
        <h1 class="planet-title" :class="getUser.teamId">{{ getUser.teamId }}</h1>
        <!-- <div class="level-container">
            <div class="level-container-level" :style="{ width: (getUser.exp / getUser.maxExp) * 100 + '%' }"></div>
        </div> -->
        <div class="health-section">
            <div class="health-section-container">
                <div class="health-section-container-health"
                    :style="{ width: (myTeamData.health / myTeamData.maxHealth) * 100 + '%' }">
                </div>
            </div>
            <h3>{{ myTeamData.health + " / " + myTeamData.maxHealth }}</h3>
        </div>
        <div class="navigation-section">
            <div class="navigation-section-item">
                <img src="@/assets/attack-icon.svg" alt="attack-icon">
            </div>
            <div class="navigation-section-item">🕵️</div>
            <div class="navigation-section-item">📚</div>
        </div>
        <img class="levelup-img" src="@/assets/levelup-icon.svg" alt="dynamis planet">
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

import { collection, getFirestore, onSnapshot, doc } from 'firebase/firestore';
export default {
    name: "home-screen",
    computed: mapGetters(['getUser']),
    data() {
        return {
            myTeamData: {}
        }
    },
    mounted() {
        const firestore = getFirestore();
        const teamCollectionReference = collection(firestore, 'teams');
        const myTeam = doc(teamCollectionReference, this.getUser.teamId)
        onSnapshot(myTeam, snapshot => {
            this.myTeamData = { ...snapshot.data() };
        })
    }
}
</script>

<style lang="scss">
.home-container{
    padding: 10px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.title {
    font-family: 'pressstart2p';
    color: #f4ee80;
    text-shadow: 0 5px #a14759;
}

.planet-img {
    height: 250px;
}

.planet-title {
    font-family: 'pressstart2p';

    &.Dynamis {
        color: #b56ba1;
        text-shadow: 0 3px #222951;
    }

    &.Lumos {
        color: #ffb11c;
        text-shadow: 3px 3px #e85629;
    }

    &.Kalos {
        color: #6aae64;
        text-shadow: 0 3px #125b85;
    }

    &.Astro {
        color: #327cc1;
        text-shadow: 0 3px #4a3584;
    }
}

.health-section {
    &-container {
        width: 80%;
        height: 30px;
        border: 2px solid #3F8898;
        border-radius: 6px;
        padding: 5px;
        margin: 20px auto;

        &-health {
            height: 100%;
            background-color: #3F8898;
            border: 2px solid #3F8898;
            border-radius: 6px;
        }
    }

    h3 {
        font-family: 'pressstart2p';
    }
}

.navigation-section {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 25px;

    &-item {
        width: 70px;
        height: 45px;
        border: 2px solid #F5F5F5;
        background-color: #3F8898;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.75rem;
    }
}
.levelup-img{
    width: 70px;
}
</style>
<template>
    <div class="home-container">
        <div class="header-container">
            <p class="logo">Level Up</p>
            <p class="title">Hi {{ getUser.name }}</p>
        </div>
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
            <div class="navigation-section-item" @click="navigateTo('/Battelfield')">
                <img v-if="getUser.role === 'ATTACKER'" src="@/assets/attack-icon.svg" alt="attack-icon">
                <img v-if="getUser.role === 'DEFENDER'" src="@/assets/defend-icon.svg" alt="defend-icon">
                <img v-if="getUser.role === 'HEALER'" src="@/assets/heal-icon.svg" alt="heal-icon">
            </div>
            <div class="navigation-section-item" @click="navigateTo('/QuestCenter')">
                <img src="@/assets/quest-center-icon.svg" alt="quest-center-icon">

            </div>
            <div class="navigation-section-item" @click="navigateTo('//MyQuest')">
                <img src="@/assets/my-quest-icon.svg" alt="my-quest-icon">
            </div>
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
    },
    methods: {
        navigateTo(to) {
            this.$router.push(to);
        }
    }
}
</script>

<style lang="scss" scoped>
.home-container {
    padding-bottom: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
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

.levelup-img {
    width: 70px;
}

.header-container {
    width: 100%;
    height: 150px;
    background-color: #162041;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    & .logo {
        font-family: 'pressstart2p';
        color: #f4ee80;
        text-shadow: 1px 2px #a14759;
        font-size: 2rem;
    }

    & .title {
        font-family: 'pressstart2p';
        font-size: 18px;
    }
}
</style>
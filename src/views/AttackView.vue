<template>
    <div class="container">
        <!-- {{ getUser }}
        <div class="team-container" v-for="team in allOtherTeams" :key="team.id" @click="attackTeam(team.id)">
            <h1>{{ team }}</h1>
        </div> -->
        <div id="NW">
            <BaseContainer :teamId="'Astro'" :selected="true"></BaseContainer>
        </div>
        <div id="NE">
            <BaseContainer :teamId="'Kalos'" :selected="false"></BaseContainer>
        </div>
        <div id="SW">
            <BaseContainer :teamId="'Lumos'" :selected="false"></BaseContainer>
        </div>
        <div id="SE">
            <BaseContainer :teamId="'Dynamis'" :selected="false"></BaseContainer>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import router from '@/router';
import BaseContainer from '@/components/Base/BaseContainer.vue';
export default {
    name: "attack-view",
    computed: mapGetters(['getUser']),
    components: {
        BaseContainer
    },
    data() {
        return {
            allOtherTeams: [],
        }
    },
    mounted() {
        const firestore = getFirestore();
        const teamCollectionReference = collection(firestore, 'teams');
        onSnapshot(teamCollectionReference, snapshot => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.allOtherTeams = [...data.filter(team => team.id != this.getUser.teamId)]
        })
    }, methods: {
        attackTeam(team) {
            router.push(`/Attack/${team}`)
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    height: 100%;
}

#NW {
    position: fixed;
    width: 50%;
    height: 40%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

#NE {
    position: fixed;
    width: 50%;
    height: 40%;
    top: 0;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

#SW {
    position: fixed;
    width: 50%;
    height: 40%;
    top: 40%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

#SE {
    position: fixed;
    width: 50%;
    height: 40%;
    top: 40%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

#SE,
#SW {
    border-top: 1px solid #3E8898;
}

#NE,
#SE {
    border-left: 1px solid #3E8898;
}
</style>
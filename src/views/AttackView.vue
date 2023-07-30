<template>
    <div class="container">
        <!-- {{ getUser }}
        <div class="team-container" v-for="team in allOtherTeams" :key="team.id" @click="attackTeam(team.id)">
            <h1>{{ team }}</h1>
        </div> -->
        <div id="NW"></div>
        <div id="NE"></div>
        <div id="SW"></div>
        <div id="SE"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import router from '@/router';

export default {
    name: "attack-view",
    computed: mapGetters(['getUser']),
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
    height: 30%;
    top: 0;
    left: 0;
}

#NE {
    position: fixed;
    width: 50%;
    height: 30%;
    top: 0;
    left: 50%;
}

#SW {
    position: fixed;
    width: 50%;
    height: 30%;
    top: 30%;
    left: 0;
}

#SE {
    position: fixed;
    width: 50%;
    height: 30%;
    top: 30%;
    left: 50%;
}

#SE,
#SW {
    border-top: 1px solid #3E8898;
}

#NE,
#SE {
    border-left: 1px solid #3E8898;
}</style>
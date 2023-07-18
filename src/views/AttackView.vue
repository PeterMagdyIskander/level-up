<template>
    <div class="container">
        {{ getUser }}
        <div class="team-container" v-for="team in allOtherTeams" :key="team.id" @click="attackTeam(team.id)">
            <h1>{{ team }}</h1>
        </div>
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
            this.allOtherTeams = [...data.filter(team => team.id != this.getUser.team)]
            console.log(this.allOtherTeams)
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

.team-container {
}
</style>
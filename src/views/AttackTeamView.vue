<template>
    <div>
        {{ teamData.health }} / {{ teamData.maxHealth }}
        <skills @dealDmg="dealDmg"></skills>
    </div>
</template>

<script>
import { collection, doc, getFirestore, onSnapshot, updateDoc, increment } from 'firebase/firestore';

import skills from '@/components/Skills/SkillsContainer.vue';
export default {
    name: "attack-team-view",
    components: {
        skills,
    },
    data() {
        return {
            teamData: {},
        }
    },
    created() {
        const firestore = getFirestore();
        const teamCollectionReference = collection(firestore, 'teams');
        const teamDoc = doc(teamCollectionReference, this.$route.params.id)
        onSnapshot(teamDoc, snapshot => {
            this.teamData = { ...snapshot.data() };
            console.log(this.teamData)
        })
    },
    methods: {
        dealDmg(dmg) {
            const firestore = getFirestore();
            const teamCollectionReference = collection(firestore, 'teams');
            const teamDoc = doc(teamCollectionReference, this.$route.params.id)
            updateDoc(teamDoc, {
                health: increment(dmg*-1)
            })
        }
    }
}
</script>
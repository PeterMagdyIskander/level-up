<template>
    <div>
        <div v-if="isAttacker">
            {{ enemyTeamData.dmgBlock }}
            <br />
            {{ enemyTeamData.health }} / {{ enemyTeamData.maxHealth }}
        </div>
        <div v-else>
            {{ myTeamData.health }} / {{ myTeamData.maxHealth }}
        </div>
        <skills @dealPoints="dealPoints"></skills>
    </div>
</template>

<script>
import { collection, doc, getFirestore, onSnapshot, updateDoc, increment } from 'firebase/firestore';
import { mapGetters } from 'vuex';
import skills from '@/components/Skills/SkillsContainer.vue';
export default {
    name: "attack-team-view",
    components: {
        skills,
    },
    data() {
        return {
            enemyTeamData: {},
            myTeamData: {},
            isAttacker: true,
        }
    },
    computed: mapGetters(['getUser']),
    created() {
        this.isAttacker = this.getUser.role === "ATTACKER";
        const firestore = getFirestore();
        const teamCollectionReference = collection(firestore, 'teams');
        switch (this.getUser.role) {
            case "ATTACKER":
                const enemyTeamDoc = doc(teamCollectionReference, this.$route.params.id)
                onSnapshot(enemyTeamDoc, snapshot => {
                    this.enemyTeamData = { ...snapshot.data() };
                })
            default:
                const myTeamDoc = doc(teamCollectionReference, this.getUser.teamId)
                onSnapshot(myTeamDoc, snapshot => {
                    this.myTeamData = { ...snapshot.data() };
                })
                break;
        }
    },
    methods: {
        dealPoints(points) {
            const firestore = getFirestore();
            const teamCollectionReference = collection(firestore, 'teams');
            const myTeamDoc = doc(teamCollectionReference, this.getUser.teamId)
            switch (this.getUser.role) {
                case "ATTACKER":
                    const enemyTeamDoc = doc(teamCollectionReference, this.$route.params.id)
                    let myDmg = points * this.myTeamData.dmgMultiplier * this.enemyTeamData.dmgReduction;
                    let block = this.enemyTeamData.dmgBlock;

                    if (myDmg > block) {
                        myDmg = (myDmg - block) * -1;
                        block *= -1;
                    } else if (myDmg < block) {
                        block = (myDmg - block) * -1;
                        myDmg = 0;
                    } else {
                        block = myDmg * -1
                        myDmg = 0;
                    }
                    updateDoc(enemyTeamDoc, {
                        health: increment(myDmg),
                        dmgBlock: increment(block)
                    })
                    break;
                case "HEALER":
                    updateDoc(myTeamDoc, {
                        health: increment(points)
                    })
                    break;
                case "DEFENDER":
                    updateDoc(myTeamDoc, {
                        dmgBlock: increment(points)
                    })
                    break;
            }


        }
    }
}
</script>
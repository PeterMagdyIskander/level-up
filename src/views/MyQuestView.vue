<template>
    <div>
       <QuestMoreInfo :title="'My Quest'" :quest="quest"></QuestMoreInfo>
        <input type="password" v-model="password">
        <button @click="submit">Submit Quest</button>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { collection, doc, getFirestore, updateDoc, increment } from 'firebase/firestore';
import router from '@/router';
import QuestMoreInfo from '@/components/Quest/QuestMoreInfo.vue';
export default {
    name: "my-quest",
    computed: mapGetters(['getUser', 'getQuests']),
    components:{
        QuestMoreInfo
    },
    data() {
        return {
            quest: {},

            password: ""
        }
    },
    created() {
        this.quest = this.getQuests.filter(quest => quest.id === this.getUser.assignedQuestId)[0];
    },
    methods: {
        ...mapActions(['updateUser']),
        submit() {
            const firestore = getFirestore();
            const userCollectionReference = collection(firestore, 'users');
            const questCollectionReference = collection(firestore, 'quests');
            const userDoc = doc(userCollectionReference, this.getUser.uid)
            const questDoc = doc(questCollectionReference, this.getUser.assignedQuestId)
            if (this.getUser.role === this.quest.role) {
                updateDoc(userDoc, { assignedQuestId: "", exp: increment(this.quest.exp), gold: increment(this.quest.gold) })
            } else {
                updateDoc(userDoc, { assignedQuestId: "", exp: increment(this.quest.exp / 2), gold: increment(this.quest.gold / 2) })
            }
            let updatedUser = this.getUser;
            updatedUser.assignedQuestId = "";
            this.updateUser(updatedUser);
            updateDoc(questDoc, { status: "CLOSED" })
            router.push("/QuestCenter")

        }
    }
}
</script>
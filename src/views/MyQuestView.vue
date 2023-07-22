<template>
    <div>
        {{ quest }}
        <input type="password" v-model="password">
        <button @click="submit">Submit Quest</button>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { collection, doc, getFirestore, updateDoc, increment } from 'firebase/firestore';
import router from '@/router';
export default {
    name: "my-quest",
    computed: mapGetters(['getUser', 'getQuests']),
    data() {
        return {
            quest: {},
          
            password: ""
        }
    },
    created() {
        this.quest = this.getQuests.filter(quest => quest.id === this.getUser.assignedQuestId);
    },
    methods: {
        ...mapActions(['updateUser']),
        submit() {
            const firestore = getFirestore();
            const userCollectionReference = collection(firestore, 'users');
            const questCollectionReference = collection(firestore, 'quests');
            const userDoc = doc(userCollectionReference, this.getUser.uid)
            const questDoc = doc(questCollectionReference, this.getUser.assignedQuestId)
            updateDoc(userDoc, { assignedQuestId: "", exp: increment(this.quest[0].exp), gold: increment(this.quest[0].gold) })
            let updatedUser = this.getUser;
            updatedUser.assignedQuestId = "";
            this.updateUser(updatedUser);
            updateDoc(questDoc, { status: "CLOSED" })
            router.push("/QuestCenter")

        }
    }
}
</script>
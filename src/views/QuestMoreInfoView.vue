<template>
    <div>
        {{ quest }}
        <button @click="accept">Start Quest</button>
        <button @click="decline">X</button>
    </div>
</template>
<script>
import router from '@/router'
import { mapGetters, mapActions } from 'vuex';
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';

export default {
    name: "quest-more-info-view",
    data() {
        return {
            quest: {

            }
        }
    },
    computed: mapGetters(['getUser', 'getQuests']),
    created() {
        this.quest = this.getQuests.filter(quest => quest.id === this.$route.params.id);
    },
    methods: {
        ...mapActions(['updateUser']),
        accept() {
            const firestore = getFirestore();
            const userCollectionReference = collection(firestore, 'users');
            const questCollectionReference = collection(firestore, 'quests');
            const userDoc = doc(userCollectionReference, this.getUser.uid)
            const questDoc = doc(questCollectionReference, this.$route.params.id)
            if (this.getUser.assignedQuestId === "") {
                updateDoc(userDoc, { assignedQuestId: this.$route.params.id })
                let updatedUser = this.getUser;
                updatedUser.assignedQuestId = this.$route.params.id;
                this.updateUser(updatedUser);
                updateDoc(questDoc, { assignedTo: this.$route.params.id })

            }
        },
        decline() {
            router.push(`/QuestCenter`)
        }
    }
}
</script>
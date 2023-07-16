<template>
    <div>
        <button @click="show('ATTACKER')" :class="{ active: showingRole === 'ATTACKER' }">ATTACKER</button>
        <button @click="show('DEFENDER')" :class="{ active: showingRole === 'DEFENDER' }">DEFENDER</button>
        <button @click="show('HEALER')" :class="{ active: showingRole === 'HEALER' }">HEALER</button>
        <quest-card v-for="quest in questList" :key="quest.id" :title="quest.title" :id="quest.id"></quest-card>
    </div>
</template>
<script>
import QuestCard from "@/components/Quest/QuestCard.vue"

import { mapGetters } from 'vuex';
export default {
    name: "quest-center-view",
    components: { QuestCard },
    computed: mapGetters(['getQuests']),
    data() {
        return {
            questList: [],
            showingRole: "DEFENDER"
        }
    },
    methods: {
        show(role) {
            this.showingRole = role;
            this.questList = this.getQuests.filter(quest => quest.role === this.showingRole && quest.assignedTo === "")
        }
    },
    created() {
        this.questList = this.getQuests.filter(quest => quest.role === this.showingRole && quest.assignedTo === "")
    }
}
</script> 
<style lang="scss" scoped>
.active {
    color: red;
}
</style>
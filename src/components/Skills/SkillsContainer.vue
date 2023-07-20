<template>
    <div class="skills-container">
        <skill-container v-for="skill in skills" :key="skill.name" :skillImg="skill.img" :skillName="skill.name"
            :skillPoints="skill.points" @dealPoints="dealPoints">
        </skill-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import skillContainer from './skillContainer.vue';
export default {
    name: "skills",
    components: {
        skillContainer
    },
    data() {
        return {
            attackerSkills: [
                {
                    img: "🗡",
                    name: "edrab",
                    points: 10,
                },
                {
                    img: "💣",
                    name: "kompela",
                    points: 10,
                },
                {
                    img: "⚔️",
                    name: "edrab/ni",
                    points: 10,
                },
            ],
            defenderSkills: [
                {
                    img: "🔒",
                    name: "sok 3aleh",
                    points: 10,
                },
                {
                    img: "🚫",
                    name: "stop",
                    points: 10,
                },
                {
                    img: "🛡",
                    name: "bara yad",
                    points: 10,
                },
            ],
            healerSkills: [
                {
                    img: "🩹",
                    name: "sticker",
                    points: 10,
                },
                {
                    img: "💊",
                    name: "lebosa",
                    points: 10,
                },
                {
                    img: "🩺",
                    name: "alloo?",
                    points: 10,
                },
            ],
        }
    },
    computed: {
        ...mapGetters(['getUser']),
        skills() {
            switch (this.getUser.role) {
                case "ATTACKER":
                    return this.attackerSkills;
                case "DEFENDER":
                    return this.defenderSkills;
                case "HEALER":
                    return this.healerSkills;
            }
        }
    },
    methods: {
        dealPoints(points) {
            this.$emit('dealPoints', points)
        }
    }
}
</script>

<style lang="scss">
.skills-container {
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
}
</style>
<template>
    <div class="skills-container">
        <skill-container v-for="skill in skills" :key="skill.name" :skillImg="skill.img" :skillName="skill.name"
            :skillPoints="skill.points" @dealPoints="dealPoints" :active="getUser.level >= skill.neededLevel">
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
            skills: [
                {

                    name: "Skill 1",
                    points: 10,
                    neededLevel: 1
                },
                {
                    name: "Skill 2",
                    points: 10,
                    neededLevel: 1
                },
                {
                    name: "Skill 3",
                    points: 10,
                    neededLevel: 1
                },
            ],
        }
    },
    computed: {
        ...mapGetters(['getUser']),
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
    background-color: #162041;
    width: 100%;
    padding: 11px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    position: absolute;
    bottom: -175px;
}
</style>
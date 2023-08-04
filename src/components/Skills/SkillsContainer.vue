<template>
    <div class="skills-container">
        <skill-container v-for="skill in skills" :key="skill.name" :skillImg="skill.img" :skillName="skill.name"
            :skillPoints="skill.points" @dealPoints="dealPoints" :active="isSkillActive(skill.neededLevel)">
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
                    neededLevel: 3
                },
                {
                    name: "Skill 3",
                    points: 10,
                    neededLevel: 5
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
        },
        addHours(date, hours) {
            date.setHours(date.getHours() + hours);

            return date;
        },
        isSkillActive(neededLevel) {
            let dateNow = new Date();
            let userTimeStamp = this.getUser.timeStamp;
            if (userTimeStamp == null)
                userTimeStamp = new Date();
            return this.getUser.level >= neededLevel && dateNow >= this.addHours(new Date(userTimeStamp), 1);
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
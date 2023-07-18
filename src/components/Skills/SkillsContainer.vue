<template>
    <div class="skills-container">
        <skill-container v-for="skill in skills" :key="skill.name" :skillImg="skill.img" :skillName="skill.name"
            :skillDmg="skill.attackDamage" @dealDmg="dealDmg">
        </skill-container>
    </div>
</template>

<script>
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
                    img: "🗡",
                    name: "edrab",
                    attackDamage: 10,
                },
                {
                    img: "💣",
                    name: "kompela",
                    attackDamage: 10,
                },
                {
                    img: "⚔️",
                    name: "edrab/ni",
                    attackDamage: 10,
                },
            ]
        }
    },
    methods: {
        dealDmg(dmg) {
            this.$emit('dealDmg', dmg)
        }
    }
}
</script>

<style lang="scss">
.skills-container {
    margin-top: 120%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
}
</style>
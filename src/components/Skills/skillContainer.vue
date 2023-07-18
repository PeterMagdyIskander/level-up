<template>
    <div class="skill-container" @click="dealDmg">
        <h1>{{ skillImg }}</h1>
        <h6>{{ skillName }}</h6>
    </div>
</template>
<script>
export default {
    name: "skill-container",
    props: {
        skillImg: {
            type: String,
            required: true,
        },
        skillName: {
            type: String,
            required: true,
        },
        skillDmg: {
            type: Number,
            required: true,
        }
    },
    methods: {
        dealDmg() {
            this.$emit('dealDmg',this.skillDmg)
        }
    }
}
</script>
<style lang="scss" scoped>
.skill-container {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #f4ee80;
    box-shadow: 2px 2px #a14759;

}
</style>

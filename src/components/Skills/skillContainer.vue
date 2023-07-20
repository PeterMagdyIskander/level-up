<template>
    <div class="skill-container" @click="dealPoints">
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
        skillPoints: {
            type: Number,
            required: true,
        }
    },
    methods: {
        dealPoints() {
            this.$emit('dealPoints',this.skillPoints)
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
    h6{
        color: #f4ee80;
        font-size: 1rem;
        text-shadow: 0 2px #a14759;
        font-family: 'pressstart2p';
    }

}
</style>

<template>
    <div class="card-container" @click="reroute">
        <img src="@/assets/arrow-right.svg" alt="arrow pointing right">
        <p>{{ title }}</p>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: "quest-card",
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    methods: {
        reroute() {
            router.push(`/QuestCenter/${this.id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    padding: 0;
    margin: 0;
}

.card-container {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 10px;
    height:30px;
    cursor: pointer;
    img{
        width: 18px;
    }
}
</style>
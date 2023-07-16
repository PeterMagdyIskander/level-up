<template>
    <div class="heros">
        <hero :imgSrc="'buttercup2.png'" :title="'Buttercup'"></hero>
        <hero :imgSrc="'blossom.png'" :title="'Blossom'"></hero>
        <hero :imgSrc="'bubbles.png'" :title="'Bubbles'"></hero>
    </div>
</template>    
<script>
import Hero from '@/components/Hero.vue'
export default {
    components: { Hero },
    name: "choose-your-hero-view"
}
</script>

<style lang="scss" scoped>
.heros{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
</style>
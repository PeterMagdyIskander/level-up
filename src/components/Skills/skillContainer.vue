<template>
    <div class="skill-container" @click="dealPoints">
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
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        dealPoints() {
            if(this.active){
                this.$emit('dealPoints',this.skillPoints)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.skill-container {
    padding: 12px 8px;
    cursor:pointer;
    background-color: #3E8898;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 0px 6px #0000003B;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    h6{
        padding: 0;
        margin: 0;
        color: #E5E5E5;
        font-size: 11px;
        font-family: 'pressstart2p';
    }

}
</style>

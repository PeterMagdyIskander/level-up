<template>
    <div class="quest-info-container">
        <div class="header-container">
            <p class="logo">Level Up</p>
            <p class="title">{{ title }}</p>
        </div>
        <p class="title">
            Quest Details
        </p>
        <div class="quest-info-container-details">
            <p class="title">{{ quest.title }}</p>
            <p class="sub-title">Task: {{ quest.description }}</p>
            <div class="more-info">
                <p>Difficulty</p>
                <p>{{ quest.difficulty }}</p>
            </div>
            <div class="more-info">
                <p>Gold</p>
                <p>{{ quest.gold }}</p>
            </div>
            <div class="more-info">
                <p>EXP</p>
                <p>{{ quest.exp }}</p>
            </div>
            <div class="more-info">
                <p>Role</p>
                <p>{{ quest.role }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "quest-more-info",
    props: {
        title: {
            type: String,
            required: true,
        },
        quest: {
            type: Object,
            required: true,
            default: {},
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    padding: 0;
    margin: 0;
}

.quest-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 26px;
    text-align: center;
    &-details {
        width: 100%;
        background-color: #162041;
        padding: 35px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    & .sub-title {
        font-size: 14px;
        font-family: 'ptmono';
    }
}

.header-container {
    width: 100%;
    height: 150px;
    background-color: #162041;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;

    & .logo {
        font-family: 'pressstart2p';
        color: #f4ee80;
        text-shadow: 1px 2px #a14759;
        font-size: 14px;
    }
}

.more-info {
    width: 100%;
    display: flex;
    column-gap: 30px;
    margin: 7px 0;
    & p:nth-child(1) {
        width: 162px;
        font-family: 'pressstart2p';
        font-size: 18px;
        color: #F09455;
        text-align: center;
    }
    & p:nth-child(2) {
        font-family: 'ptmono';
        font-size: 18px;
    }
}

.title {
    font-family: 'pressstart2p';
    font-size: 18px;
}

.icon {
    font-family: 'pressstart2p';
    color: #F09455;
}
</style>
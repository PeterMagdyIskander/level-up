<template>
    <div class="roles-container">
        <div class="header-container">
            <p class="logo">Level Up</p>
            <p class="title">Roles</p>
        </div>
        <div class="know-your-role">
            <p class="title">Know Your Role</p>
            <img v-if="getUser.role === 'ATTACKER'" src="@/assets/attack-icon.svg" alt="attack-icon">
            <img v-if="getUser.role === 'DEFENDER'" src="@/assets/defend-icon.svg" alt="defend-icon">
            <img v-if="getUser.role === 'HEALER'" src="@/assets/heal-icon.svg" alt="heal-icon">
            <p class="role">{{ getUser.role }}</p>

        </div>
        <div class="info">
            <div class="info-desc">
                <div class="health-section">

                    <div class="health-section-container">
                        <div class="health-section-container-health" :style="{ width: '80%' }">
                        </div>
                    </div>
                    <h3>{{ 3200 + " / " + 4000 }}</h3>
                    <p><span>✋</span> 23</p>
                </div>
            </div>

            <p class="info-title" v-if="getUser.role === 'HEALER'">Your role affects your team's health</p>
            <p class="info-title" v-if="getUser.role === 'DEFENDER'">Your role affects your team's block</p>
            <p class="info-title" v-if="getUser.role === 'ATTACKER'">Your role affects an enemy team's health</p>
        </div>
        <div class="skills" v-for="(skill, index) in skills" :key="index">
            <p class="skills-title">Skill {{ index + 1 }} <span>unlocked at level {{ skill.neededLevel }}</span></p>
            <p class="skills-desc"> what is does: {{ skill.desc }}</p>
        </div>
        <img class="levelup-img" src="@/assets/levelup-icon.svg" alt="dynamis planet">
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    name: "roles-view",
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
    data() {
        return {
            healerSkills: [
                {
                    neededLevel: 1,
                    desc: "lorem20"
                },
                {
                    neededLevel: 3,
                    desc: "lorem20"
                },
                {
                    neededLevel: 5,
                    desc: "lorem20"
                }
            ],
            defenderSkills: [
                {
                    neededLevel: 1,
                    desc: "lorem20"
                },
                {
                    neededLevel: 3,
                    desc: "lorem20"
                },
                {
                    neededLevel: 5,
                    desc: "lorem20"
                }
            ],
            attackerSkills: [
                {
                    neededLevel: 1,
                    desc: "lorem20"
                },
                {
                    neededLevel: 3,
                    desc: "lorem20"
                },
                {
                    neededLevel: 5,
                    desc: "lorem20"
                }
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
p {
    padding: 0;
    margin: 0;
}

.roles-container {
    height: 100%;
    width: 100%;
    text-align: center;
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
    margin-bottom: 20px;

    & .logo {
        font-family: 'pressstart2p';
        color: #f4ee80;
        text-shadow: 1px 2px #a14759;
        font-size: 14px;
    }

    & .title {
        font-family: 'pressstart2p';
        font-size: 18px;

    }
}

.know-your-role {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    & .title {
        font-family: 'ptmono';
        font-size: 20px;

    }

    img {
        width: 50px;
    }

    & .role {
        font-family: 'pressstart2p';
        font-size: 18px;

    }
}

.info {
    width: 90%;
    padding: 20px 14px;
    background-color: #162041;
    border: 1px solid #F5F5F5;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 25px;
    margin: 12px auto;

    &-desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 12px;
        width: 80%;

        .health-section {
            text-align: center;

            &-container {
                width: 100%;
                height: 20px;
                border: 2px solid #3F8898;
                border-radius: 6px;
                padding: 5px;
                margin: 20px auto;

                &-health {
                    height: 100%;
                    background-color: #3F8898;
                    border: 2px solid #3F8898;
                    border-radius: 6px;
                }
            }

            h3 {
                font-family: 'pressstart2p';
                font-size: 11px;
            }

            p {
                font-family: 'pressstart2p';
                font-size: 11px;

                span {
                    font-size: 18px;
                }
            }
        }

    }

    &-title {
        font-family: 'ptmono';
        font-size: 13px;
        color: #E5E5E5;
    }
}

.skills {
    width: 90%;
    min-height: 110px;
    padding: 9px 18px;
    background-color: #162041;
    margin: 12px auto;

    &-title {
        font-family: 'pressstart2p';
        color: #FEE969;
        font-size: 11px;
        margin-bottom: 11px;
    }

    &-desc {

        font-family: 'ptmono';
        font-size: 11px;
        color: #F5F5F5;
    }

    span {
        font-family: 'ptmono';
        color: #FEE969;
        font-size: 11px;
    }
}
.levelup-img {
    width: 70px;
    margin: 50px 0;
}
</style>
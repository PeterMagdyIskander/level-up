<template>
    <div class="attendance-container">
        <input type="text" v-model="searchText">
        <div v-if="users.length" class="drop-down">
            <div class="drop-down-item" v-for="user in searchUsers" :key="user.id" @click="selectUser(user.id)">
                {{ user.name }}
            </div>
        </div>
        <button @click="addAttendance">Add Attendance</button>
        <div class="drop-down-item">
            {{ selectedUserName }}
        </div>
    </div>
</template>
<script>
import { collection, getFirestore, onSnapshot, doc, updateDoc, increment } from 'firebase/firestore';

export default {
    name: "attendance-view",
    data() {
        return {
            searchText: "",
            users: [
            ],
            selectedUser: "",
            selectedUserName: ""
        }
    },
    computed: {
        searchUsers() {
            if (this.searchText === "") {
                return this.users
            }
            let searchResult = this.users.filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
            return searchResult
        },
    },
    created() {
        const firestore = getFirestore();
        const usersCollectionReference = collection(firestore, 'users');
        onSnapshot(usersCollectionReference, snapshot => {
            this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        })
    },
    methods: {
        selectUser(user) {
            this.selectedUser = user;
            this.selectedUserName = this.users.filter(user => user.id === this.selectedUser)[0].name
        },
        addAttendance() {
            const firestore = getFirestore();
            const userCollectionReference = collection(firestore, 'users');
            const userDoc = doc(userCollectionReference, this.selectedUser);
            const teamCollectionReference = collection(firestore, 'teams');
            const myTeamDoc = doc(teamCollectionReference, this.getUser.teamId)
            updateDoc(userDoc, {
                gold: increment(10),
                exp: increment(10),
            })
            const myTeam = doc(teamCollectionReference, this.getUser.teamId)
            onSnapshot(myTeam, snapshot => {
                this.myTeamData = { ...snapshot.data() };
            })
            if (this.myTeamData.maxHealth <= this.myTeamData.health + 10) {
                updateDoc(myTeamDoc, {
                    health: this.myTeamData.health + 10,
                    maxHealth: this.myTeamData.health + 10,
                })
            } else {
                updateDoc(myTeamDoc, {
                    health: increment(10),
                })
            }
            alert("Attendance points reflected successfuly!")
            this.selectUser = "";
            this.selectedUserName = "";
        }

    }
}
</script>

<style lang="scss" scoped>
.attendance-container {
    text-align: center;
    padding: 50px;
}

.drop-down {
    height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 30px;

    &-item {
        width: 100%;
        padding: 5px;
        margin: 5px;
        font-size: 14px;
        font-family: 'ptmono';
    }
}
</style>
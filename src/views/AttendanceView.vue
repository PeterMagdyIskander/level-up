<template>
    <div>
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
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

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
            //do points for attendance
        }

    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    padding: 50px;
}

.drop-down {
    height: 300px;
    
    &-item {
        width: 100%;
        padding: 5px;
        margin: 5px;
        font-size: 14px;
        font-family: 'ptmono';
    }
}
</style>
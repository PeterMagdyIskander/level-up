<template>
    <div class="hero-container" @click="chooseHero">
        <img :src="require(`../assets/${imgSrc}`)" :alt="title" />
        <p class="hero-container-name">{{ title }}</p>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
export default {
    name: "hero",
    props: {
        imgSrc: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: ""
        }
    },
    computed: mapGetters(['getUser']),
    methods: {
        ...mapActions(['updateUser']),
        chooseHero() {
            const firestore = getFirestore();
            const userCollectionReference = collection(firestore, 'users');
            console.log(this.getUser)
            const userDoc = doc(userCollectionReference, this.getUser.uid)
            updateDoc(userDoc, { role: this.title })
            let updatedUser = this.getUser;
            updatedUser.role = this.title;
            this.updateUser(updatedUser);
        }
    }

}
</script>
<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.hero-container {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    img {
        width: 50px;
        object-fit: contain;
    }

    &-name {
        color: #f4ee80;
        font-size: 1rem;
        text-shadow: 0 2px #a14759;
        font-family: 'pressstart2p';
    }

    border: 2px solid #f4ee80;
    box-shadow: 2px 2px #a14759;
}
</style>
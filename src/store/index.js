import { createStore } from 'vuex'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
export default createStore({
  state: {
    user: null,
    quests: [],
  },
  getters: {
    getUser: (state) => state.user,
    getQuests: (state) => state.quests
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    setQuests: (state, quests) => (state.quests = quests)
  },
  actions: {
    login({ commit }) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then(res => {
        let shouldLevelUp=false;
        let nextExp=0;
        let nextLevel=0;
        const firestore = getFirestore();
        const userCollectionReference = collection(firestore, 'users');
        const userDoc = doc(userCollectionReference, res.user.uid)
        onSnapshot(userDoc, snapshot => {
          let computeLevel = {
            0:20,
            1: 25,
            2: 35,
            3: 50,
            4: 70,
            5: 95,
            6: 125,
            7: 155,
            8: 200,
            9: 250,
            10: 300,
            11: 350,
            12: 350,
            13: 350,
          }

          const data = snapshot.data();
          let user = {
            uid: res.user.uid
            , ...data
          }
          if(user.exp>=computeLevel[user.level]){
            shouldLevelUp=true;
            nextLevel=user.level+1;
            nextExp=user.exp-computeLevel[user.level];
            updateDoc(userDoc,{level:nextLevel,exp:nextExp})
          }
          console.log("im hereeee")
          commit('setUser', user)
        })
      }).catch(err => {
        console.log(err)
      })
    },
    updateUser({ commit }, user) {
      commit('setUser', user);
    },
    setQuests({ commit }) {
      const firestore = getFirestore();
      const questsCollectionReference = collection(firestore, 'quests');
      onSnapshot(questsCollectionReference, snapshot => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        commit('setQuests', data)
      })
    }
  },
  modules: {
  }
})

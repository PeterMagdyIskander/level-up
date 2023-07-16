import { createStore } from 'vuex'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot } from 'firebase/firestore';
export default createStore({
  state: {
    user: {

    },
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
        const firestore = getFirestore();
        const userCollectionReference = collection(firestore, 'users');
        const userDoc = doc(userCollectionReference, res.user.uid)
        let user = {
          uid: res.user.uid
        }
        onSnapshot(userDoc, snapshot => {
          const data = snapshot.data();
          user.name = data.name;
          user.role = data.role;
          user.assignedQuestId = data.assignedQuestId;
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

import { createStore } from 'vuex'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { collection, doc,getFirestore, onSnapshot } from 'firebase/firestore';
export default createStore({
  state: {
    user: {

    }
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    setUser: (state, user) => (state.user = user)
  },
  actions: {
    login({ commit }) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then(res => {
        const firestore=getFirestore();
        const userCollectionReference=collection(firestore,'users');
        const userDoc=doc(userCollectionReference,res.user.uid)
        let user={
          uid:res.user.uid
        }
        onSnapshot(userDoc,snapshot=>{
          const data=snapshot.data();
          user.name=data.name;
          user.role=data.role;
          commit('setUser',user)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})

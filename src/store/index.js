import { createStore } from 'vuex'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot, updateDoc, setDoc, increment } from 'firebase/firestore';
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
        let shouldLevelUp = false;
        let nextExp = 0;
        let nextLevel = 0;
        const firestore = getFirestore();
        const userCollectionReference = collection(firestore, 'users');

        let allUsers = [];
        let newUser = false;
        onSnapshot(userCollectionReference, snapshot => {
          allUsers = snapshot.docs.map(doc => doc.id);
          if (!allUsers.includes(res.user.uid)) {
            newUser = true;
            setDoc(doc(firestore, "users", res.user.uid), {
              assignedQuestId: "",
              attackAmp:1,
              blockAmp:1,
              healAmp:1,
              exp: 0,
              gold: 0,
              level: 0,
              name: res.user.displayName,
              role: "HEALER",
              teamId: "Dynamis",
              timeStamp: new Date().toISOString(),
            }, { merge: true });
            let user = {
              uid: res.user.uid,
              assignedQuestId: "",
              attackAmp:1,
              blockAmp:1,
              healAmp:1,
              exp: 0,
              gold: 0,
              level: 0,
              name: res.user.displayName,
              role: "HEALER",
              teamId: "Dynamis",
              timeStamp: new Date().toISOString(),
            }
            commit('setUser', user)
          }
        })
        if (!newUser) {
          const userDoc = doc(userCollectionReference, res.user.uid)
          onSnapshot(userDoc, snapshot => {
            let computeLevel = {
              0: {
                neededExp: 20,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              1: {
                neededExp: 25,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              2: {
                neededExp: 35,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              3: {
                neededExp: 50,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              4: {
                neededExp: 70,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              5: {
                neededExp: 95,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              6: {
                neededExp: 125,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              7: {
                neededExp: 155,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              8: {
                neededExp: 200,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              9: {
                neededExp: 250,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              10: {
                neededExp: 300,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              11: {
                neededExp: 350,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              12: {
                neededExp: 350,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
              13: {
                neededExp: 350,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              },
            }

            const data = snapshot.data();
            let user = {
              uid: res.user.uid
              , ...data
            }
            if (user.exp >= computeLevel[user.level].neededExp) {
              shouldLevelUp = true;
              nextLevel = user.level + 1;
              nextExp = user.exp - computeLevel[user.level].neededExp;
              updateDoc(userDoc, { level: nextLevel, exp: nextExp, healAmp: increment(computeLevel[user.level].healAmp), blockAmp: increment(computeLevel[user.level].blockAmp), attackAmp: increment(computeLevel[user.level].attackAmp) })
            }
            commit('setUser', user)
          })
        }
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

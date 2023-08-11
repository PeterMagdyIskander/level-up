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
            let userDB = {
              "evan20012@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              },
              "samueladel960@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              },
              "andrewhany718@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              },
              "martinmaged72@gmail.com": {
                role: "Attacker",
                team: "Kalos"
              },
              "claratadros@gmail.com": {
                role: "Healer",
                team: "Kalos"
              },
              "miret.mm11@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "rafikghazarian249@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "youstinanabil78@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "sandywael640@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "emymaged595@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "sossana.moneeb.sh@gmail.com": {
                role: "attacker",
                team: "Kalos"
              },
              "kevinwaeil21@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "lodymarcos2005@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "imagehany@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "logymaher10@gmail.com": {
                role: "Healer",
                team: "Lumos"
              },
              "magdyjoseph09@gmail.com": {
                role: "Healer",
                team: "Lumos"
              },
              "marymagdykamal@gmail.com": {
                role: "Healer",
                team: "Dynamis"
              },
              "tonyakmalstudy111@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "martintarek211@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "cloudiae9@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "farahwahid79@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "dodzmagdykamal@gmail.com": {
                role: "Healer",
                team: "Lumos"
              },
              "balymagdy11@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "monicaemil39@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "sarahsherif2002@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "karimsameh003@gmail.com": {
                role: "Healer",
                team: "Kalos"
              },
              "nardeen.makhlouf@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "karenbassem91@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "mitiray12@gmail.com": {
                role: "Healer",
                team: "Astro"
              },
              "patrickk.nashed@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "jessysaber6@gmail.com": {
                role: "Healer",
                team: "Astro"
              },
              "johnmalak133@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "bimennagy16@gmail.com": {
                role: "Healer",
                team: "Kalos"
              },
              "ramymourad23@gmail.com": {
                role: "attacker",
                team: "Kalos"
              },
              "merolaboles4@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "koko.george456@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "samehraafat1231@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "lanaemil1999@gmail.com": {
                role: "Healer",
                team: "Astro"
              },
              "gloryraafat@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "joyhelmy.tla@gmail.com": {
                role: "Healer",
                team: "Lumos"
              },
              "maykelgorge315@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "mariemagdi6@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "jyoutham@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "georgeyoutham@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "assermedhat59@gmail.com": {
                role: "Defender",
                team: "Lumos"
              },
              "amymageda@gmail.com": {
                role: "Healer",
                team: "Astro"
              },
              "sandyjoseph6006@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "anne.hanyy@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "markdoha2017@gmail.com": {
                role: "Attacker",
                team: "Astro"
              },
              "davidmhamdi@gmail.com": {
                role: "Healer",
                team: "Dynamis"
              },
              "fadysamehwilliam@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              },
              "oliviam8080@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "jona123669@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              },
              "joellenachaat@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "demyan.helmy132@gmail.com": {
                role: "Healer",
                team: "Dynamis"
              },
              "juliehelmy2211@gmail.com": {
                role: "Healer",
                team: "Dynamis"
              },
              "nardinewageh@gmail.com": {
                role: "Defender",
                team: "Dynamis"
              },
              "fadixbishara@gmail.com": {
                role: "Defender",
                team: "Astro"
              },
              "christyadeln@gmail.com": {
                role: "Attacker",
                team: "Kalos"
              },
              "dannyjv24@gmail.com": {
                role: "Attacker",
                team: "Kalos"
              },
              "carolk.nashed@gmail.com": {
                role: "Healer",
                team: "Lumos"
              },
              "youssmoury@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "johnkokiraafat@gmail.com": {
                role: "Attacker",
                team: "Kalos"
              },
              "mariamelhenawy849@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "erenyhenawy55@gmail.com": {
                role: "Defender",
                team: "Kalos"
              },
              "davidwagih650@gmail.com": {
                role: "Attacker",
                team: "Lumos"
              },
              "miratef71@gmail.com": {
                role: "Healer",
                team: "Astro"
              },
              "petermagdyiskander@gmail.com": {
                role: "Attacker",
                team: "Dynamis"
              }
            }
            console.log(res.user.email)
            setDoc(doc(firestore, "users", res.user.uid), {
              assignedQuestId: "",
              attackAmp: 1,
              blockAmp: 1,
              healAmp: 1,
              exp: 0,
              gold: 0,
              level: 0,
              name: res.user.displayName,
              role: userDB[res.user.email].role.toUpperCase(),
              teamId: userDB[res.user.email].team,
              timeStamp: "2023-08-09T18:05:35.146Z",
            }, { merge: true });
            let user = {
              uid: res.user.uid,
              assignedQuestId: "",
              attackAmp: 1,
              blockAmp: 1,
              healAmp: 1,
              exp: 0,
              gold: 0,
              level: 0,
              name: res.user.displayName,
              role: userDB[res.user.email].role.toUpperCase(),
              teamId: userDB[res.user.email].team,
              timeStamp: "2023-08-09T18:05:35.146Z",
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
              14: {
                neededExp: 35000000,
                attackAmp: 0.5,
                healAmp: 0.5,
                blockAmp: 0.5
              }
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

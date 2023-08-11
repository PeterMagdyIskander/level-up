let roles = {
    0: "HEALER",
    1: "ATTACKER",
    2: "DEFENDER"
}
let difficulty = {
    0: "EASY",
    1: "MEDIUM",
    2: "HARD"
}
let status = {
    0: "OPEN",
    1: "STARTED",
    2: "DONE"
}
let team = {
    id: "Radiant",
    members: [12345
        , 12346
        , 12347],
    health: 5000,
    currentHealth: 5000,
    incomingDamageMultiplier: 1,
    outGoingDamageMultiplier: 1,
    shield: 0,
}
let player = {
    id: 12345,
    name: "bito",
    role: 0,
    level: 1,
    exp: 0,
    gold: 0,
    questId: "qwerty",//since this is not an empty string this means i have an active quest and can't accept anymore quests

}
let quest = {
    id: "qwerty",
    name: "ست الحبايب يا حبيبه",
    difficulty: 2,
    description: "امك اسمها ايه؟",
    role: 2,
    reward: {
        exp: 123,
        gold: 1234
    },
    owner: 12345,
    status: 1
}


let allQuests = [

    {
        title: "Seba7a laps",
        description: "Mara raye7 rage3",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Seba7a laps",
        description: "Mareteen raye7 rage3",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Seba7a laps",
        description: "Talat marat raye7 rage3",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Gary",
        description: "Mal3ab el kora lafeten",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Gary",
        description: "Mal3ab el kora arba3 lafat",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Gary",
        description: "Mal3ab el kora set lafat",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Da3't",
        description: "10 da3't",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Da3't",
        description: "20 da3't",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Da3't",
        description: "40 da3't",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Batn",
        description: "20 batn",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Batn",
        description: "30 batn",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Batn",
        description: "40 batn",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Squats",
        description: "30 squats",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Squats",
        description: "45 squats",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Squats",
        description: "60 squats",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Plank",
        description: "Plank for 1.5 minutes",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Plank",
        description: "Plank for 2.5 minutes",
        gold: 30,
        exp: 30,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Plank",
        description: "Plank for 3.5 minutes",
        gold: 50,
        exp: 50,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Nat 7abl",
        description: "Not el 7abl 30 mara",
        gold: 15,
        exp: 15,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Nat 7abl",
        description: "Not el 7abl 50 mara",
        gold: 30,
        exp: 30,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Nat 7abl",
        description: "Not el 7abl 70 mara",
        gold: 50,
        exp: 50,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "3o2la",
        description: "5 3o2la",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "3o2la",
        description: "10 3o2la",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "3o2la",
        description: "15 3o2la",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Lunges",
        description: "15 lunges",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Lunges",
        description: "25 lunges",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Lunges",
        description: "35 lunges",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shelni oba7",
        description: "Sheel 7ad w egry beh al3ab el kora",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shikabala",
        description: "Natat el kora 20 mara",
        gold: 15,
        exp: 15,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shikabala",
        description: "Natat el kora 40 mara",
        gold: 30,
        exp: 30,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shikabala",
        description: "Natat el kora 60 mara",
        gold: 50,
        exp: 50,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "SUIIIIIII",
        description: "Natat el kora 3ala rasak 5 mara",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "SUIIIIIII",
        description: "Natat el kora 3ala rasak 10 mara",
        gold: 15,
        exp: 15,
        difficulty: 5,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "SUIIIIIII",
        description: "Natat el kora 3ala rasak 15 mara",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Hand stand",
        description: "Hold for 30 seconds",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Hand stand",
        description: "Hold for 60 seconds",
        gold: 30,
        exp: 30,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Hand stand",
        description: "Hold for 90 seconds",
        gold: 50,
        exp: 50,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Biceps curls (10 kilo)",
        description: "10 reps",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Biceps curls (10 kilo)",
        description: "15 reps",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Biceps curls (10 kilo)",
        description: "20 reps",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shoulder lateral press (10 kilo)",
        description: "10 reps",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shoulder lateral press (10 kilo)",
        description: "15 reps",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Shoulder lateral press (10 kilo)",
        description: "20 reps",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Deadlift (25 kilo)",
        description: "10 reps",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Deadlift (25 kilo)",
        description: "15 reps",
        gold: 15,
        exp: 15,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Deadlift (25 kilo)",
        description: "20 reps",
        gold: 20,
        exp: 20,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "9 esta3ed",
        description: "El mal3ab mara bel 3ard",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "9 esta3ed",
        description: "El mal3ab mariteen bel 3ard",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "9 esta3ed",
        description: "El mal3ab talat marat bel 3ard",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Jumping jacks",
        description: "30 reps",
        gold: 15,
        exp: 15,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Jumping jacks",
        description: "60 reps",
        gold: 45,
        exp: 45,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Jumping jacks",
        description: "90 reps",
        gold: 65,
        exp: 65,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Bench press (12.5 kilo)",
        description: "15 reps",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Bench press (12.5 kilo)",
        description: "20 reps",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Bench press (12.5 kilo)",
        description: "25 reps",
        gold: 25,
        exp: 25,
        difficulty: 3,
        role: "attacker",
        assignedTo: [],
    },
    {
        title: "Kan as3'ar ra3i dawood",
        description: "E7faz mazmoor 1",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Kan as3'ar ra3i dawood tany",
        description: "E7faz mazmoor 23",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Welad rez2",
        description: "E7faz asbat esra2il el 12",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Welad el malek",
        description: "E7faz talamiz yasou3",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Leltak msh hat3ady",
        description: "Meen ra2yes el kahana wa2t mo7akmet yasou3?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Awl wa7ed wasal",
        description: "Eh awel engil etkatab?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El talat forsan",
        description: "Ool talat molok l mamlaket fares fi fatret mabin el 3ahdin?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Mazzika",
        description: "Min kotab el mazameer?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Mousaaaa?",
        description: "Mousa katab mazmoor kam?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "The end",
        description: "Eh hya kalemat yasou3 3al salib?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "66 sefr",
        description: "Ool el 66 sefr kolohom?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "3aks e3kas",
        description: "Eh as3'ar w atwal sefr fel ketab?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Asma2 Allah el 7osna",
        description: "Ool 5 alkab aw asma2 l Allah fel ketab el mokadas?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Asma2 el kanayes el 7osna",
        description: "Ool el 7 kanayes betoo3 sefr el ro2ya?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Ana meen",
        description: "Emoji quiz",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El arn el tamen",
        description: "Meen anbya2 el karn el tamen (8)?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Na3am ya sayedy",
        description: "Sama3 set kodah?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Paul",
        description: "Ool 15 balad saferhom el rasol Boules",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Masr om el donia w hateb2a ad el donia",
        description: "Ool el darabt el 3ashr?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "5",
        description: "Streak of 5",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Romans",
        description: "E7faz romya 5:1-11",
        gold: 50,
        exp: 50,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Men zaman",
        description: "Ool 5 nebwat et7a2a2o fi shakhs yasou3?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Moloook",
        description: "Ool 10 molok fi mamlaket yahouza?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Welad el ma7zoza",
        description: "Ool 5 belad zarhom yasou3?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Erza3",
        description: "Ool 5 ma3loomat 3an shakhsya ketabya?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "5 tany",
        description: "Ool 5 shakhsyat banoo mazba7 lel rab w eh keset kol mara?",
        gold: 30,
        exp: 30,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "7 ayam mashakel",
        description: "Ozkor tartib ayam el khal2?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "3askar fel mo3askar",
        description: "Ozkor talat 7orob l sha3b Israel men awl ma kharago men masr le7ad ma dakhalo el ard?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Anbya2 el karn",
        description: "Ozkor anbya2 el karn el sabe3?",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Tiba",
        description: "Ozkor tawtweebat mata 5?",
        gold: 25,
        exp: 25,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Youssef Ya32oub",
        description: "E7faz ya32oub 1?",
        gold: 50,
        exp: 50,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El rakam el sery",
        description: "Password challenge?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Youssef Ya32oub",
        description: "2e2ra resalet ya32oub kolaha ma3 ka2ed?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Agmad Sefr (Ra2y Peter Magdy)",
        description: "Talat mo3gezat fi sefr you7ana bas?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El talat anagil",
        description: "Talat mo3gezat fi asfar (Matta, Mor2os, Luka)",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Luka",
        description: "5 amthal men amthal el masi7 fi Luka bas?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Matta",
        description: "3 amthal men amthal el masi7 fi Matta bas?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "7 kanayes",
        description: "Ekteb molakhas resaltin men rasayel el kanayes el sab3a el fi sefr el ro2ya?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "XO",
        description: "Eksab best XO ma3 ka2ed fi 7agat fel ketab el mokadas?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "30 sanya mamno3at",
        description: "Ta7ady el talatin sanya",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "30 fel 3ahd el adim",
        description: "Ekteb 5 ayat fi el 3ahd el adim fi 30 sanya",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "30 fel 3ahd el gedid",
        description: "Ekteb 5 ayat fi el 3ahd el gedid fi 30 sanya",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "5 ma3lomat",
        description: "5 ma3lomat 3an skakhsya ketabya",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Akmel",
        description: "kamel el aya",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El 7ob el 7ob, el shoo2 el shoo2",
        description: "e7faz koronthos el ola 13",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "3afya zoo2",
        description: "Oool 5 kesas setat 3amalo far2 fel ketab el mokadas?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "1000 set + ?",
        description: "Meen katab Amthal ma3 Soliman?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El mamlaka el mota7ida el esra2ilya",
        description: "Ekteb molakhas keset enkisam el mamlaka?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "El masi7 kam",
        description: "Ekteb kesa 3an yasou3 ba3d el keyama?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Ektebaas",
        description: "Ool ektbas men el 3ahd el adim fel gedid msh fi el anagil?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Ektebaas",
        description: "Ool ektbas men el 3ahd el adim fel gedid msh fi el anagil?",
        gold: 20,
        exp: 20,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Taranim",
        description: "Ool 10 taranim mabnya 3ala nosos ketabya?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Merakez?",
        description: "Lakhas dars ketab el naharda el sob7?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Fala7",
        description: "E7ky masal el zare3 beshakl mo3aser?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Etkhayel",
        description: "Ektb kesa takhayolya leshakhsya ma3 yasou3 msh maktoba fel ketab el mokadas?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Youssef",
        description: "Ektb molakhas 3an 7aya youssef fi 2 paragraphs?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Daniel",
        description: "Ektb molakhas 3an 7aya daniel fi 2 paragraphs?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Tarkeeez",
        description: "Lakhas wa3za men wa3azat el mo2tamar fi wara2a bel ketir?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "3azama 3ala el gabal",
        description: "Eh aktar mawadi3 men el maw3eza 3ala el gaba Ya32oob etkalem 3anha fel resala?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Asteer",
        description: "Ektb molakhas 3an 7aya Asteer fi 2 paragraphs?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Genesis",
        description: "Ektb kesa men sefr el takween?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "A3mal",
        description: "Ektb kesa men sefr a3mal el rosol?",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Ya32oub 2",
        description: "Lakhas et3alemt eh men resalet Ya32oub",
        gold: 30,
        exp: 30,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
]

let defenderQuests = [
    {
        title: "Matching",
        description: "Etsawar ma3 7ad labes nafs loonak",
        gold: 10,
        exp: 10,
        difficulty: 1,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Nader Seif Aldin",
        description: "E3ml interview ma3 7ad akbar menak",
        gold: 25,
        exp: 25,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Mona el Shazli",
        description: "E3ml interview ma3 ka2eda w ka2ed",
        gold: 35,
        exp: 35,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Tiktok",
        description: "E3ml tktok 3ala o3'nya ma3 wa7ed msh sa7bak",
        gold: 35,
        exp: 35,
        difficulty: 3,
        role: "healer",
        assignedTo: [],
    },
    {
        title: "Pinssss",
        description: "Gama3 wa7ed men kol fari2 w etsawaro bel pins beta3etko",
        gold: 25,
        exp: 25,
        difficulty: 2,
        role: "healer",
        assignedTo: [],
    },
]
// import { collection, addDoc } from "firebase/firestore"; 
// attackerQuests.forEach(quest => {
//     addDoc(collection(firestore, "quests"), quest)
// })


let user = {
    "evan20012@gmail.com": {
        role: "Attacker",
        team: "Dynamis"
    },
    "samueladel960@gmail.com": {
        role: "Attacker",
        team: "Dynamis"
    },
    "Andrewhany718@gmail.com": {
        role: "Attacker",
        team: "Dynamis"
    },
    "Martinmaged72@gmail.com": {
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
    "Rafikghazarian249@gmail.com": {
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
    "Magdyjoseph09@gmail.com": {
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
    "Cloudiae9@gmail.com": {
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
    "Karenbassem91@gmail.com": {
        role: "Defender",
        team: "Dynamis"
    },
    "Mitiray12@gmail.com": {
        role: "Healer",
        team: "Astro"
    },
    "patrickk.nashed@gmail.com": {
        role: "Attacker",
        team: "Astro"
    },
    "Jessysaber6@gmail.com": {
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
    "Joyhelmy.tla@gmail.com": {
        role: "Healer",
        team: "Lumos"
    },
    "Maykelgorge315@gmail.com": {
        role: "Defender",
        team: "Kalos"
    },
    "mariemagdi6@gmail.com": {
        role: "Attacker",
        team: "Astro"
    },
    "Jyoutham@gmail.com": {
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
    "Markdoha2017@gmail.com": {
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
    "Nardinewageh@gmail.com": {
        role: "Defender",
        team: "Dynamis"
    },
    "Fadixbishara@gmail.com": {
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
    "Youssmoury@gmail.com": {
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
    "Erenyhenawy55@gmail.com": {
        role: "Defender",
        team: "Kalos"
    },
    "davidwagih650@gmail.com": {
        role: "Attacker",
        team: "Lumos"
    },
    "Miratef71@gmail.com": {
        role: "Healer",
        team: "Astro"
    },
}
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
let status={
    0:"OPEN",
    1:"STARTED",
    2:"DONE"
}
let team = {
    id: "Radiant",
    members: [12345
        , 12346
        , 12347],
    health: 5000,
    currentHealth: 5000,
    incomingDamageMultiplier:1,
    outGoingDamageMultiplier:1,
    shield:0,
}
let player = {
    id: 12345,
    name: "bito",
    role: 0,
    level: 1,
    exp: 0,
    gold: 0,
    questId:"qwerty",//since this is not an empty string this means i have an active quest and can't accept anymore quests

}
let quest = {
    id: "qwerty",
    name:"ست الحبايب يا حبيبه",
    difficulty: 2,
    description: "امك اسمها ايه؟",
    role:2,
    reward: {
        exp: 123,
        gold: 1234
    },
    owner:12345,
    status:1
}
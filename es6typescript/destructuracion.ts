let avengers = {
    nick: "Samuel Jackson",
    ironman: "Robert Downey JR",
    vision: "Paul Bettany"

}
// let nick = avengers.nick;
// let ironman = avengers.ironman;
// let vision = avengers.vision;

//  Destructuración :
// let { nick, ironman, vision } = avengers;
let { nick, ironman: warmachine, vision } = avengers;
console.log(nick);
console.log(warmachine);
console.log(vision);
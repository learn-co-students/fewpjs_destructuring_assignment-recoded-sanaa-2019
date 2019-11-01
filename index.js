const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const animalsSound = {
  moo : 'cow',
  neigh:'horse',
  baa:'sheep',
  oink:'pig',
  cluck:'chicken'
};
const moo = animalsSound.moo;
const neigh = animalsSound.neigh;
const baa = animalsSound.baa;
const oink = animalsSound.oink;
const cluck = animalsSound.cluck;

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const animalsName = {
  Bessie:'cow',
  Dolly:'sheep',
  Babe:'pig',
  Little:'chicken'
};
const Bessie = animalsName.Bessie;
const Dolly = animalsName.Dolly;
const Babe = animalsName.Babe;
const Little = animalsName.Little;


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

// Arrays
const animalsColor = {
  black_and_white:'cow',
  black:'sheep',
  pink:'pig'
};
const black_and_white = animalsColor.black_and_white;
const black = animalsColor.black;
const pink = animalsColor.pink;

// 4. Use destructuring to assign appropriate variables using the color names.
const rainbowColor = {
  red:'red',
  orange:'orange',
  yellow:'yellow',
  green : 'green',
  blue:'blue',
  indigo:'indigo',
  violet:'violet'
};
const red=rainbowColor.red;
const orange=rainbowColor.orange;
const yellow=rainbowColor.yellow;
const green=rainbowColor.green;
const blue=rainbowColor.blue;
const indigo=rainbowColor.indigo;
const violet=rainbowColor.violet;
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const rainbowColorInLetter = ["red","orange","yellow","green","blue","indigo","violet"]
const  [r,o,y,g,b, ,v]=rainbowColorInLetter





// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const rainbowColorIndigo = ["indigo"]
const  [indg]=rainbowColorIndigo
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const person={
  name: "Kermit",
  color: "green",
  song: "The Rainbow Connection",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};
const name=person.name;
const color=person.color;
const song=person.song;
const job=person.job;
const partner=person.partner;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const kermit={
  song_2:"Moving Right Along",
  song_4: "I Hope That Something Better Comes Along",
  k_job:"Host of The Muppet Show",
  k_partner:"Miss Piggy"
};
const song_2=kermit.song_2;
const song_4=kermit.song_4;
const k_job=kermit.k_job;
const k_partner=kermit.k_partner;

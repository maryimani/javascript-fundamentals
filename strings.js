let animal = "dog";                                             
console.log(animal.length);
let animals = "donkey";
console.log(animals.length);


// access individual characters in a String.
console.log(animal[2])

// stringsyntax is variablename.method()
let msg = "i am queen";
console.log(msg)
let yellMsg = msg.toUpperCase();
console.log(yellMsg);

let angry="LeaVe ME aloNE"
angry.toLowerCase();
console.log(angry);
let lower=angry.toLowerCase();
console.log(lower);

let greeting="  leave me alone plz  "
console.log(greeting);
 let leave=greeting.trim();
console.log(leave)
// console.log(greeting.trim());

let tvShow = "catdog";
let show = tvShow.indexOf("d");
// let show2 = tvShow.indexOf("g");
// let show3 = tvShow.indexOf("z")
// console.log(show);
// console.log(show2);
//  console.log(show3);
console.log(tvShow.indexOf("dog"))

// slice
let str="lokichoggio";
console.log(str);
let partOfStr = str.slice(2, 6);
console.log(partOfStr);

// replace and replaceAll
let annoyinglaugh = "teeheee so funny! teeheee!";
console.log(annoyinglaugh);
let goodlaugh = annoyinglaugh.replaceAll("teeheee" , "haahaa");
console.log(goodlaugh);

// includes,endsWith, startsWith, lastIndexOf
let firstname ="maryfaith";
let names = firstname.includes("r");
console.log(names);
let names2 = firstname.endsWith("h");
console.log(names2);
let name3= firstname.lastIndexOf("a")
console.log(name3)

let song="london calling";
let upper=song.toUpperCase();
console.log(upper);

// let park = "Yellowstone";
// const index= park.indexOf(Stone);
// console.log(index);

// repeat
let myName = "mary\nfaith";
console.log(myName);

let intro = "hello 'world'";
console.log(intro);

let intro2 = "hello \ 'world'";
console.log(intro2);
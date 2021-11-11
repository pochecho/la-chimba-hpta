var name = "Sergio";

var names = ["Sergio", "JuanMa", "Nizo"];

// console.log(name);
// console.log(names);

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// i = 0;

// while(i <= 5){
//     //Intructions
//     console.log(i);
//     i = i + 1;
// }

// i = 0;
// console.log(names[0]);
// console.log(names[1]);
// console.log(names.length);
// while (i < names.length) {
//   console.log(names[i]);
//   i = i + 1;
// }

/*
While's elements for arrays

1. control variable (CV) = i = 0
2. escape condition (EC) = i < names.length
3. Increment (I) = i = i + 1

CV
while(EC){
    <<INSTRUCTIONS>>
    I
}

for(CV; EC; I){
    <<INSTRUCTIONS>>
}

*/

// i = i + 1 === i++
// i = i - 1 === i--

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// console.log(i);

// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element);
// }

//enviroment == scope == ambiente

// const casi igual que let
// es un let pero que no deja modificar
// var >> let >> const

// const a = 0;
// console.log(a);

function printData (arraies){
    for(let k = 0; k < arraies.length; k++){
        const array = arraies[k];
        console.log(array);
    }
}

const teams = ["Once Caldas", "Cucos FC", "Tolima", "Barcelona"];

const aliases = new Array();
aliases.push("Tiro Fijo");
aliases.push("JJ");
aliases.push("Popeye");
aliases.push("El patrón");


printData(teams);
printData(aliases);
/*

for(CV; EC; I){
    <<INSTRUCTIONS>>
}

*/

/*

CV = let i = 0;
EC = i < teams.length
I =  i++

INSTRUCTIONS
const team = teams[i];
console.log(team);

*/
// for (let i = 0; i < teams.length; i++) {
//     const team = teams[i];
//     console.log(team);
// }

/*

CV = let j = 0;
EC = j < aliases.length
I =  j++

INSTRUCTIONS
const ali = aliases[j];
console.log(ali);

*/

// for (let j = 0; j < aliases.length; j++) {
//     const alias = aliases[j];
//     console.log(ali);
// }

/*

    Primer for Teams
    CV = let i = 0;
    EC = i < teams.length
    I =  i++

    INSTRUCTIONS
    const team = teams[i];
    console.log(team);

    Segundo for Aliases
    CV = let j = 0;
    EC = j < aliases.length
    I =  j++

    INSTRUCTIONS
    const alias = aliases[j];
    console.log(ali);


General for
CV = let k = 0;
EC = k < arraies.length
I =  k++

INSTRUCTIONS
const array = arraies[k];
console.log(array);


for(CV; EC; I){
    <<INSTRUCTIONS>>
}

for(let k = 0; k < array.length; k++){
    const array = arraies[k];
    console.log(array);
}
*/
/*

Ud tiene dos arreglos que guardan la información de la edad de personas y otro que guarda la población de ciudades.

const population = [120000, 5645566,65465465,45646546,64874588,8514465];
const ages = [12,56,4,12,45,78,63,5,35];

Es decir population[0] indica que en la ciudad X (No importa el nombre de la misma) hay un total de 120.000 habitantes, y la persona
en la posición 0, o sea, ages[0] tiene una edad de 12 años.

El ejercicio consiste en imprimir las ciudades que tienen una población mayor a 200.000 habitantes y las personas que sean mayores
de edad.

Temas

Funciones
Ciclos
Condicionales
Declaración de variables
Scope
Comparaciones

*/


const population = [120000, 5645566,65465465,45646546,64874588,8514465];
const ages = [12,56,4,12,45,78,63,5,35];

// if (population > 120000){
//     for(let j = 0; j < population.length; j++)
//     console.log(population);
// }else {
//     (population <= 120000)
//     for(let j = 0; j < population; j++)
//     console.log(population);
// }

// for(let i = 0; i < population.length; i++){
//     if(population[i] > 120000){
//         console.log(population[i]);
//     }
// }
// for(let j = 0; j < ages.length; j++){
//     if(ages[j] > 18){
//         console.log(ages[j]);
//     }
// }

function printByCondition(objects, l){
    // console.log(objects.length, l);
    for(let k = 0; k < objects.length; k++){
        if(objects[k] > l){
            console.log(objects[k]);
         }
    }
}
printByCondition(population, 120000);
printByCondition(ages, 18);











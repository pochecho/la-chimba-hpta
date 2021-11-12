/**
 * POO = Programación Orientada a objetos
 * OOP = Object Oriented Programming
 *
 * class            => CREA => objects
 * Tipo de objeto   => CREA => objetos
 */

//Definir un tipo de dato nuevo, o sea, una clase en este caso.
class Person {
  age;
  name;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// class Aluminium {
//   x;
//   y;
//   z;
// }
// class Iron {
//   x;
//   y;
//   z;
//   pureza;
// }

// fundir(aluminio, metal, presionAS, purezametal){
//     c = new Metal(aluminio, metal)
//     c.resistencia = 120000
//     c.maleabilidad = 123
// }
// const bullet = new Aluminium();
// const body = new Body();

// if(body.x === bullet.x && body.y === bullet.y && body.z === bullet.z) {
//     console.log("Colisión");
//     markHit();
// }

/**
 * Esta función imprime las personas
 * que sean mayores de edad.
 *
 * @param {*} people Arreglo de personas a evaluar
 */
function printMajorPerson(people) {
  for (let k = 0; k < people.length; k++) {
    if (people[k].age >= 18) {
      console.log(people[k]);
    }
  }
}

const juanMa = new Person("JuanMa", 25);
const salome = new Person("Salomé", 15);

const people = [juanMa, salome];

printMajorPerson(people);

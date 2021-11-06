/*
Strong typing

    Java
    C

*/

/*
Weak typing

    Python
    Javascript
    PHP
    Typescript
    Go
    Dart
*/

/*
    Numbers
    
    Int = Integer
    Float = Decimal
    Double = Big Decimal
*/

/*
    Strings
    
    Char = One character ''
    String = "sfsdfsa"
*/

/*
    Boolean
    
    True, 1, Positive, Good = true
    False, 0, Negative, Bad = false
*/

/*
    Integer examples

        Age
        Amount of computer to send
        Amount of ball in a tenis tournament

    Float/Double examples

        Building a platform
        Distance
        Age
        Percent

    String examples

        Names
        Places
        Food
        Id

    Boolean examples

        !Sex
        !Gender
        Does the sun rise?


Console printing = console.log(PARAMETERS)

*/

age = 25;
name = "Juan Manuel";
gender = true;
address = "Puertas del Sol";

genderString = "";

// "true" == true -> Verdadero Solo valida datos
// "true" === true -> Falso Valida datos y el tipo

if (gender === true) {
  //Afirmative
  genderString = "Masculino";
} else {
  //Negative
  genderString = "Femenino";
}

console.log(name, genderString, age, address);

//node '.\lessons\L001 - Introduction\data-types.js'

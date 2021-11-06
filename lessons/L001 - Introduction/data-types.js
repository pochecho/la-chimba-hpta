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

language = "est";

/* Available languages
    esperanto = est
    español = es
    inglés = en
*/

if (gender === true) {
  //Afirmative
  if (language === "en") {
    genderString = "Man";
  } else {
    if (language === "es") {
      genderString = "Masculino";
    } else {
      genderString = "viro";
    }
  }
} else {
  //Negative
  if (language === "en") {
    genderString = "Woman";
  } else {
    if (language === "es") {
      genderString = "Femenino";
    } else {
      genderString = "virino";
    }
  }
}

console.log(name, genderString, age, address);

//node '.\lessons\L001 - Introduction\data-types.js'

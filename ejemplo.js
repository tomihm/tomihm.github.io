var num1 =10;
var num2 =5;

var resta =num1-num2;

console.log('la resta es: '+ resta)

var disivion = num1/num2;

console.log('la division es: '+ disivion)

var multiplicacion = num1*num2;

console.log('la multiplicacion es: '+ multiplicacion)


//ejercicio 2//

var numero1 = Number(prompt('ingrese un numero'));
var numero2 = Number(prompt('ingrese otro numero'));

if ( isNaN(numero1) || isNaN(numero2)){
    console.log('Error: ingrese un numero valido');
}
else if (numero1 <= 0 || numero2 <= 0){
    console.log('Error: ingrese un numero mayor a 0');
}
else{
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
    console.log('la suma es: '+ suma);
    console.log('la resta es: '+ resta);
    console.log('la multiplicacion es: '+ multiplicacion);
    console.log('la division es: '+ division);
}

//ejercicio 3//


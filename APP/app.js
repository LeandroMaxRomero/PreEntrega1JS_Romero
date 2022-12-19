

//*  SE LE SOLICITA AL USUARIO EL NOMBRE, EL GÉNERO, LA ALTURA, EL PESO Y LA EDAD.

let nombre = prompt("Ingrese su nombre");
let genero = prompt("Ingrese F si su género es femenino, o M si su género es masculino");
let altura = parseFloat(prompt("Ingrese su altura en centímetros"));
let peso = parseFloat(prompt("Ingrese su peso en kilos"));
let edad = parseInt(prompt("Ingrese su edad en años"));

//* CREO UN OBJETO A TRAVES DE UNA CLASE PARA GENERAR UNA CALCULADORA DE TASA METABOLICA BASAL (TMB).
class Calculador_tmb{
    constructor(nombre, genero, altura, peso, edad){
        this.nombre = nombre; 
        this.genero = genero;
        this.altura =altura; 
        this.peso = peso; 
        this.edad = edad;
        this.tasa = 0; 
    }

    //* CREO UN MÉTODO PARA CALCULAR LA TASA METABOLICA BASAL 
       
    calcular_tasa(){

    //* ECUACION DE HARRIS BENEDICT PARA CALCULAR LA TMB

    if(genero == "F" || genero == "f"){
        this.tasa = 655.1 + (9.56 * peso) + (1.845 * altura) - (4.6756 * edad);
    }
    else if(genero == "M" || genero == "m"){
        this.tasa = 66.473 + (13.75 * peso) + (5.0033 * altura) - (6.755 * edad);
    }
    else{
        alert("Refrescar la página e ingresar M o F en el género");
    }
    return this.tasa;
    }
}

//* CREO UNA INSTANCIA DE OBJETO Y LA GUARDO EN UNA VARIABLE.
let usuario = new Calculador_tmb(nombre, genero, altura, peso, edad);


//* LLAMO AL MÉTODO 'CALCULAR_TASA' Y LE ASIGNO A UNA VARIABLE QUE ME DEVUELVE EL VALOR DE LA TASA DE DICHO USUARIO.
let TMB = usuario.calcular_tasa();

//!DE ESTE MODO YA OBTUVE LA "TMB". CONTINUO SOLICITANDO DATOS SOBRE ACTIVIDAD FÍSICA. 

//* SOLICITO EL REGISTRO DE ACTIVIDAD FÍSICA.
let dias_ejercicio = 0;

for(let i = 1; i < 8; i = i + 1){
    
    //*SE UTILIZA UN CONTADOR PARA LOS DÍAS QUE SE REALIZÓ EJERCICIO.

    ejercicio = prompt("Dia " + i + ": ¿Ha realizado ejercicio físico de al menos 40 minutos durante el día " + i + "? Responder con SI o NO");
    
    if(ejercicio == "SI" || ejercicio == "Si" || ejercicio == "si"){
        dias_ejercicio == dias_ejercicio++;
    }   
}
console.log("Días de ejercicio en una semana: ", dias_ejercicio);

//! YA OBTUVE EL DATO "DIAS_EJERCICIO".
//! CONTINUO OPERANDO LA "TMB" CON "DIAS_EJERCICIO". 

//* INGESTA IDEAL EN FUNCIÓN A LOS DÍAS DE EJERCICIOS FÍSICA UTILIZANDO LA TMB.
let ingesta_ideal = 0;

//? Ejercitación nula
if(dias_ejercicio < 1){
    ingesta_ideal = TMB * 1.2;
}
//? Ejercitación ligera
else if(dias_ejercicio <= 2){
    ingesta_ideal = TMB * 1.375;
}
//? Ejercitación moderada
else if(dias_ejercicio <= 5){
    ingesta_ideal = TMB * 1.55;
}
//? Ejercitación fuerte
else{
    ingesta_ideal = TMB * 1.725;
}

//! DE ESTA MANERA OBTENGO "INGESTA_IDEAL". SE UTILIZARÁ LUEGO PARA COMPARAR CON LA INGESTA REAL DE KILOCALORIAS.



//* SOLICITO LAS KILOCALORÍAS CONSUMIDAS DEL USUARIO DE LOS ÚLTIMOS 7 DÍAS.

let kilocalorias_acumuladas = 0;

for(let i = 1; i < 8; i = i + 1){
    //* Se utiliza un acumulador para las kilocalorías diarias consumidas.
    
    kilocalorias = parseInt(prompt("Día " + i + ": Ingresar kilocalorías consumidas durante el día " + i));
    
    kilocalorias_acumuladas = kilocalorias + kilocalorias_acumuladas;
    
    //* Imprimimos en consola la acumulación de ambos valores.
    console.log(kilocalorias_acumuladas, "kilocalorías consumidas hasta el día ", i);
}


//* DIFERENCIA ENTRE CONSUMO DE KILOCALORIAS E INGESTA IDEAL

//* Primero busco el promedio de kilocalorías diarias consumidas
const promedio_kilocalorias = kilocalorias_acumuladas/7;

//* Luego le resto la ingesta ideal para ver si hay exceso o déficit calórico
const diferencia_kilocalorias = promedio_kilocalorias - ingesta_ideal;

//* Dependiendo el resultado, imprimo en consola. A su vez, envío un alert al usuario con una sugerencia basada en los resultados.
if(diferencia_kilocalorias > 50){
    console.log("Exceso promedio de kilocalorías diarias: ", diferencia_kilocalorias);
    
    alert(nombre + ": Debe disminuir un promedio de " + Math.round(diferencia_kilocalorias) + " kilocalorías diarias para mantener su peso");
}
else if(diferencia_kilocalorias < 50){
    console.log("Déficit calórico promedio diario de: ", diferencia_kilocalorias);

    alert(nombre + ": Debe aumentar un promedio de " + Math.round(-diferencia_kilocalorias) + " kilocalorías diarias para mantener su peso");
}
else{
    console.log("Ingesta ideal para mantener el peso");

    alert(nombre, ": Continue con el mismo promedio diario de kilocalorías consumidas.");
}

//? PARA LA OBTENCIÓN DE LAS KILOCALORÍAS SE UTILIZARÁN OBJETOS DENTRO DE ARRAYS EN LA PÁGINA "DIETA.HTML" A TRAVÉS DE OPCIONES DE UN FORMULARIO.
//! ESTO ES UN SIMULADOR SIN "PROMPTS". CON EL USO DEL DOM SE PODRÁ USAR DE MANERA CORRECTA.

//! Se utilizarán métodos para sumar las kilocalorías de los objetos seleccionados por los usuarios.

//* PRIMERO CREO 3 ARRAYS CON OBJETOS QUE CONTENGAN OPCIONES DE MENU.

let desayuno = [{producto: "café", kilocalorias: 1, check: true},
                {producto: "leche", kilocalorias: 61, check: false},
                {producto: "té", kilocalorias: 1, check: false},
                {producto: "mate", kilocalorias: 62, check: false},
                {producto: "galletas", kilocalorias: 488, check: true},
                {producto: "alfajor", kilocalorias: 400, check: false},
                {producto: "bizcochuelo", kilocalorias: 289, check: false}
];

let almuerzo = [{producto: "carne de ternera", kilocalorias: 248, check: false},
                {producto: "pollo", kilocalorias: 219, check: false},
                {producto: "cerdo", kilocalorias: 196, check: true},
                {producto: "papa", kilocalorias: 77, check: false},
                {producto: "lechuga", kilocalorias: 15, check: false},
                {producto: "tomate", kilocalorias: 18, check: false},
                {producto: "limonada", kilocalorias: 50, check: true},
                {producto: "jugo de naranja", kilocalorias: 46, check: false}
];

let cena = [{producto:"pizza con queso", kilocalorias: 267, check: false},
            {producto: "merluza", kilocalorias: 71, check: false},
            {producto: "ravioles", kilocalorias: 77, check: true},
            {producto: "empanadas de J y Q", kilocalorias: 160, check: false},
            {producto: "hamburguesa", kilocalorias: 254, check: false},
            {producto: "vino malbec", kilocalorias: 82, check: true},
            {producto: "helado", kilocalorias: 215, check: false},

];

//* CREO UN ARRAY VACIO EN EL QUE SE CARGARÁ CON LAS OPCIONES DE MENÚ SELECCIONADAS POR EL USUARIO

let dieta_diaria = [];

//* UTILIZO 3 "FOR..OF" PARA RECORRER LOS ARRAYS Y VOLCARLOS EN EL NUEVO ARRAY "DIETA_DIARIA".

for(let menu of desayuno){
    if (menu.check == true){
        dieta_diaria.push(menu);
    }
}
for(let menu of almuerzo){
    if (menu.check == true){
        dieta_diaria.push(menu);
    }
}
for(let menu of cena){
    if (menu.check == true){
        dieta_diaria.push(menu);
    }
}
//* IMPRIMO EN CONSOLA EL NUEVO ARRAY PARA VISUALIZAR LAS SELECCIONES DEL USUARIO.
console.log(dieta_diaria);

let suma_calorias_diarias = 0;
for(let calorias of dieta_diaria){
    suma_calorias_diarias = suma_calorias_diarias + calorias.kilocalorias;
}
console.log( "Calorías diarias registradas" + suma_calorias_diarias);
alert("Tus kilocalorías diarias registradas son: " + suma_calorias_diarias);

//* Aparte de las opciones brindadas por la página. El usuario tendrá la capacidad de agregar productos consumidos a su registro.
//! Esto se hará a través del uso del DOM y de eventos, para que el usuario pueda crear objetos, agregarlos a las listas y eliminarlos en caso de ser necesario.



// A TRAVÉS DE UNA FUNCIÓN CALCULO LA TASA METABÓLICA BASAL (TMB) DEL USUARIO.
// COMO DATOS, SE LE SOLICITA EL GÉNERO, LA ALTURA, EL PESO Y LA EDAD.
// UTILIZAMOS LA ECUACIÓN DE HARRIS-BENEDICT.

function tasaMetabolicaBasal(){    
    let genero_usuario = prompt("Ingrese F si su género es femenino, o M si su género es masculino");
    let altura_usuario = parseFloat(prompt("Ingrese su altura en centímetros"));
    let peso_usuario = parseFloat(prompt("Ingrese su peso en kilos"));
    let edad_usuario = parseInt(prompt("Ingrese su edad en años"));
    let tasa_metabolica_basal = 0;

    if(genero_usuario == "F"){
        tasa_metabolica_basal = 655.1 + (9.56 * peso_usuario) + (1.845 * altura_usuario) - (4.6756 * edad_usuario);
    }
    else if(genero_usuario == "M"){
        tasa_metabolica_basal = 66.473 + (13.75 * peso_usuario) + (5.0033 * altura_usuario) - (6.755 * edad_usuario);
    }
    else{
        alert("Refrescar la página e ingresar M o F en el género");
    }
    return tasa_metabolica_basal;
}
// LLAMO A LA FUNCIÓN DECLARADA PARA OBTENER LA TMB DEL USUARIO.
let TMB = tasaMetabolicaBasal();


//SOLICITO EL REGISTRO DE ACTIVIDAD FÍSICA Y KILOCALORÍAS CONSUMIDAS DEL USUARIO DE LOS ÚLTIMOS 7 DÍAS.
let kilocalorias_acumuladas = 0;
let dias_ejercicio = 0;

for(let i = 1; i < 8; i = i + 1){
    
    //Se utiliza un contador para los días que se realizó ejercicio.

    ejercicio = prompt("Dia " + i + ": ¿Ha realizado ejercicio físico de al menos 40 minutos durante el día " + i + "? Responder con SI o NO");
    
    if(ejercicio == "SI" || ejercicio == "Si" || ejercicio == "si"){
        dias_ejercicio == dias_ejercicio++;
    }
    
    //Se utiliza un acumulador para las kilocalorías diarias consumidas.
    
    kilocalorias = parseInt(prompt("Día " + i + ": Ingresar kilocalorías consumidas durante el día " + i));
    
    kilocalorias_acumuladas = kilocalorias + kilocalorias_acumuladas;
    
    //Imprimimos en consola la acumulación de ambos valores.
    console.log(dias_ejercicio, "días de ejercicio y ", kilocalorias_acumuladas, "kilocalorías consumidas hasta el día ", i);
}


//INGESTA IDEAL EN FUNCIÓN A LOS DÍAS DE EJERCICIOS FÍSICA UTILIZANDO LA TMB.
let ingesta_ideal = 0;

// Ejercitación nula
if(dias_ejercicio < 1){
    ingesta_ideal = TMB * 1.2;
}
// Ejercitación ligera
else if(dias_ejercicio <= 2){
    ingesta_ideal = TMB * 1.375;
}
// Ejercitación moderada
else if(dias_ejercicio <= 5){
    ingesta_ideal = TMB * 1.55;
}
//Ejercitación fuerte
else{
    ingesta_ideal = TMB * 1.725;
}


// DIFERENCIA ENTRE CONSUMO DE KILOCALORIAS E INGESTA IDEAL

//Primero busco el promedio de kilocalorías diarias consumidas
let promedio_kilocalorias = kilocalorias_acumuladas/7;

// Luego le resto la ingesta ideal para ver si hay exceso o déficit calórico
let diferencia_kilocalorias = promedio_kilocalorias - ingesta_ideal;

//Dependiendo el resultado, imprimo en consola. A su vez, envío un alert al usuario con una sugerencia basada en los resultados.
if(diferencia_kilocalorias > 0){
    console.log("Exceso promedio de kilocalorías diarias: ", diferencia_kilocalorias);
    
    alert("Debe disminuir un promedio de " + Math.round(diferencia_kilocalorias) + " kilocalorías diarias para mantener su peso");
}
else if(diferencia_kilocalorias < 0){
    console.log("Déficit calórico promedio diario de: ", diferencia_kilocalorias);

    alert("Debe aumentar un promedio de " + Math.round(-diferencia_kilocalorias) + " kilocalorías diarias para mantener su peso");
}
else{
    console.log("Ingesta ideal para mantener el peso");

    alert("Continue con el mismo promedio diario de kilocalorías consumidas.");
}

// Me tomé el atrevimiento de usar un Math.round para los alert. Busqué en Google la manera de redondear un número, y encontré esa opción. No sé si sea la mejor de todas.

//El trabajo se realizó con las herramientas aprendidas hasta la clase 4. Su falta de eficiencia y optimización en cuanto a experiencia de usuario y procesos algorítmicos mejorarán en las futuras entregas.


//* Capturo el botón "Agregar"
let boton_dieta = document.getElementById("boton_dieta");

//* Creo un evento "click" para este botón
boton_dieta.addEventListener("click", function(e){

    e.preventDefault();

    //* Guardo en variables los datos solicitados al usuario.
    let producto_dieta = document.getElementById("producto_dieta").value;
    let producto_kilocalorias = document.getElementById("producto_kilocalorias").value;
    let producto_consumido = document.getElementById("producto_consumido").value;
    
    //* Realizo calculos para crear una nueva variable
    let suma_kilocalorias_por_producto = parseInt((producto_kilocalorias/100) * producto_consumido);
    
    //! Guardo valores necesarios en LocalStorage
    //* Creo un objeto a través de un constructor

    function ValoresProductos (producto, calorias){
        this.producto = producto;
        this.calorias = calorias;
    }

    let valores_calorias = new ValoresProductos(producto_dieta, suma_kilocalorias_por_producto);

    //* Convierto el objeto a JSON
    let valores_JSON = JSON.stringify(valores_calorias);

    //* Guardo en el localStorage
    localStorage.setItem("valores", valores_JSON);

    //* Recupero los datos del localStorage
    let valores_dieta = localStorage.getItem("valores");

    //* Parseo el texto JSON
    valores_dieta = JSON.parse(valores_dieta);

    //! Los datos del storage los muestro en el DOM.

    //! FALTA CORREGIR ALMACENAMIENTO DE DATOS EN EL LOCALSTORAGE
    
    //* Capturo la lista que quiero construir.
    let lista_dieta = document.getElementById("lista_dieta");

    //* Creo un elemento "li" para adherir a la lista.
    let li_dieta = document.createElement("li");

    //* Agrego al HTML un elemento "li" con los datos cargados y un botón para borrar.
    li_dieta.innerHTML = `<b>${valores_dieta.producto}</b> - Kilocalorías ingeridas con este producto: <b>${valores_dieta.calorias}</b>  <button class="boton_quitar">Quitar de la lista</button>`;

    //* Agrego este elemento hijo al elemento padre "lista_dieta".
    lista_dieta.append(li_dieta);

    //! Botones de eliminación
    //* Declaro una variable para todos los botones de eliminación.
    let botones_quitar = document.querySelectorAll(".boton_quitar");

    //* Utilizo un for..of para recorrer todos los botones y le aplico una función.
    for(let boton of botones_quitar){
        boton.addEventListener("click", borrar_producto);
    }
    
    //* Dicha función utiliza el elemento "e" y "target" para identificar al botón seleccionado.
    function borrar_producto(e){
        //* declaro al nodo hijo (botón) y padre (li) para aplicar la eliminación del nodo padre.
        let hijo = e.target;
        let padre = hijo.parentNode;
    
        //* Elimino al nodo padre.
        padre.remove();
    }

    //! Sumar calorias totales
    
    //! FALTA CORREGIR ERROR DE PLANTEO DE PROBLEMA

    let suma_kilocalorias_consumidas = document.getElementById("suma_kilocalorias_consumidas");
    let suma_total = suma_kilocalorias_por_producto ++;

    let suma_total_kilocalorias = document.createElement("h4");
    suma_total_kilocalorias.innerHTML = suma_total + " kilocalorías";
    


    suma_kilocalorias_consumidas.append(suma_total_kilocalorias);

})



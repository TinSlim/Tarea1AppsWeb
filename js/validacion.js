var meses_31_dias = ["01","03","05","07","08","10","12"];
var meses_30_dias = ["02","04","06","09","11"];

var corregir_mensaje = "";

function valida_region(id_region){
    var region = document.getElementById(id_region);
    var region_actual = region.value;
    if (region_actual == ''  || region_actual == -1){
        //alert("Seleccione una región");
        // Caso cuando no es correcta la región
        corregir_mensaje += "<li> Seleccione una región </li>"
        return false;
    }
    return true;
    
}

function valida_comuna(id_comuna){
    var comuna = document.getElementById(id_comuna);
    var comuna_actual = comuna.value;
    if (comuna_actual == ''  || comuna_actual == -1){
        alert("Seleccione una comuna");
        // Caso cuando no es correcta la comuna
        return false;
    }
    return true;
    
}

function valida_sector(id_sector){
    var sector = document.getElementById(id_sector);
    var sector_actual = sector.value;
    var regex = /^[A-z]+(\s[A-z]+)*/; // Revisar regex
    var largo_sector = sector_actual.length;
    // No se escribió un sector, ok pues es OPCIONAL
    if (sector_actual == ""){
        return true;
    }
    if (largo_sector > 200){
        alert("Sector escrito supera los 100 carácteres");
        return false;
    }
    if (!regex.test(sector_actual)){ // TODO Ver esta reestricción
        alert("El sector solo puede contener letras");
        return false;
    }
    return true;
}

function validar_nombre(id_nombre) {
    var nombre = document.getElementById(id_nombre);
    var nombre_actual = nombre.value;
    var largo_nombre = nombre_actual.length;
    var regex = /^(([A-ZÜÑÁÉÍÓÚ]+([a-záéíóúüñ]*))(\s[A-ZÜÑÁÉÍÓÚ]+([a-záéíóúüñ]*))*)/; // Nombres con caracteres especiales
    if (nombre_actual == "") {
        alert("Ingrese un nombre")
        return false;
    }
    else if (largo_nombre > 100) {
        alert("Largo no válido");
        return false;
    }
    else if (!regex.text(nombre_actual)) {
        alert("Formato no válido");
        return false;
    }
    return true;
}

function validar_email(id_correo) {
    var correo = document.getElementById(id_correo);
    var correo_actual = correo.value;
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ // TODO revisar este regex después

    if (correo_actual == ""){
        alert("Ingrese su email");
        return false;
    }
    else if (!regex.test(correo_actual)){
        alert("El correo electrónico es inválido");
        return false;
    }
    return true;
}

function validar_celular(id_celular) {
    var celular = document.getElementById(id_celular);
    var celular_actual = celular.value;
    var regex = /^\+569\d{8}/; // Numeros de chile
    if (celular_actual == ""){
        return true; // No escribió celular
    }
    else if (!regex.test(celular_actual)){
        alert("El número de celular es inválido")
        return false;
    }
    return true;
}

function validar_fecha(id_fecha) { // Formato año-mes-diahora:minuto 2000-09-1112:11
    var fecha = document.getElementById(id_fecha)
    var fecha_actual = fecha.value;
    var regex = /\d{4}-((0[1-9])|(1[0-2]))-(([0-2][1-9])|(3[01]))(([01][0-9])|(2[0-4])):(([0-5][0-9])|(60))/; // regex fecha

    alert(fecha_actual);
    if (fecha_actual == "") {
        corregir_mensaje += "<li> Ingrese una fecha </li>"
        return false;
    }
    if (!regex.test(fecha_actual)) {
        corregir_mensaje += "<li> Fecha Inválida </li>"
        return false;
    }
    anho = fecha_actual.substring(0,4)
    mes = fecha_actual.substring(5,7)
    dia = fecha_actual.substring(8,10)
    anho_numero = parseInt(anho);
    // Febrero
    if ((mes == "02") && (parseInt(dia)<=29) ){
        if (dia == "29") {
            if ((((anho_numero % 4 == 0) && (anho_numero % 100 != 0 )) || (anho_numero % 400 == 0))) {
                return true;
            }
            alert("Fecha inválida")
            return false;
        }
        return true;
    }
    else if ((mes in meses_30_dias) && (dia=="31")){
        alert("Fecha inválida")
        return false;
    }
    return true;
}

function validar_tipo(clase_tipo) {
    var tipos_lista = document.getElementsByClassName(clase_tipo);
    var cantidad_tipos = tipos_lista.length;
    for (tipo of tipos_lista) {
        tipo_actual = tipo.value;
        if (tipo_actual == ''  || tipo_actual == -1){
            if (cantidad_tipos > 1) {
                alert("Seleccione tipo en todos los avistamientos");
            }
            else {
                alert("Seleccione un tipo")
            }
            return false;
        }
    }
    return true;
}

function validar_estado(clase_estado) {
    var estados_lista = document.getElementsByClassName(clase_estado);
    var cantidad_estados = estado_lista.length;
    for (estado of estados_lista) {
        estado_actual = estado.value;
        if (estado_actual == ''  || estado_actual == -1){
            if (cantidad_estados > 1) {
                alert("Seleccione estado en todos los avistamientos");
            }
            else {
                alert("Seleccione un estado")
            }
            return false;
        }
    }
    return true;
}

function mostrar_notificacion() {
    var notificacion = document.getElementById("notificacion-formulario");
    notificacion.classList.remove('is-hidden');
}

function esconder_notificacion() {
    var notificacion = document.getElementById("notificacion-formulario");
    notificacion.classList.add('is-hidden');
    corregir_mensaje = "";
}

function agregar_correcciones() {
    var nodo_notificacion = document.getElementById("notificacion-formato");
    nodo_notificacion.innerHTML = corregir_mensaje;
}

function validar_todo () {
    corregir_mensaje = "";
    validacion_fecha = validar_fecha("dia-hora-avistamiento");
    var resultado =  validacion_fecha;
    //validar_tipo("tipo-avistamiento");
    
    
    if (!resultado) {
        agregar_correcciones();
        mostrar_notificacion();

    }
    return false;
}



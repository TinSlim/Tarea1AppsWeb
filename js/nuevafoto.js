
contadores = [1]
counter_bichos = 0

/**
 * Añade otro input de archivo para el avistamiento del nodo.
 * @param {*} node Nodo del botón para agregar nueva imagen.
 * @param {*} number Número del avistamiento del formulario.
 */

function add_photo(node,number) {
    contadores[number] += 1;
    if (contadores[number] <= 5) {
        var new_node = document.createElement("div");
        new_node.setAttribute("class", "field");
        new_node.innerHTML = `
            <div class="file has-name">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume" onchange="filename_change(this)">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span class="file-name">
                        Nombre del Archivo                                                  
                    </span>
                </label>
            </div>
`
        node.parentNode.getElementsByClassName("archivos")[0].appendChild(new_node);
    }
}


/**
 * Cambia el nombre que aparece en el input de archivo por el archivo ingresado.
 * @param {*} node Nodo del input de tipo archivo.
 */
function filename_change(node) {
    node.parentNode.getElementsByClassName("file-name")[0].innerHTML = node.files[0].name;
};


/**
 * Añade un nuevo avistamiento de insecto.
 * @param {*} node Nodo del botón para agregar un nuevo avistamiento.
 */
function add_new_bug(node) {
    counter_bichos += 1;
    contadores[counter_bichos] = 1;
    var new_node = document.createElement("div");
    new_node.setAttribute("class", "block");
    new_node.innerHTML =`
            <h2 class="title">Información de Avistamiento:</h2>
            <div class="field">
                <label class="label">Día hora:</label>
                <input class="input" type="text">
            </div>
            <div class="field">
                <label class="label">Tipo:</label>
                <div class="select">
                <select class="tipo-avistamiento" value="tipo-avistamiento">
                  <option value=""> Seleccione un tipo </option>
                  <option value="nose"> No sé </option>
                  <option value="insecto"> Insecto </option>
                  <option value="aracnido"> Arácnido </option>
                  <option value="miriapodo"> Miriápodo </option>
                </select>
              </div>
            </div>
            <div class="field">
                <label class="label">Estado:</label>
                <input class="input" type="text">
            </div>
            <div class="archivos">
              <div class="field">
                <div class="file has-name">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" onchange="filename_change(this)">
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choose a file…
                        </span>
                        </span>
                        <span class="file-name">
                          Nombre del Archivo                                                  
                        </span>
                    </label>
                </div>
              </div>
            </div>
            <button class="button mt-4" type="button" onclick="add_photo(this,${counter_bichos})">
              Agregar otra foto
            </button>`
    node.parentNode.getElementsByClassName("avistamientos")[0].appendChild(new_node);
}

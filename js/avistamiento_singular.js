
function show_modal(node) {
    new_parent = node.parentNode;
    modal = new_parent.getElementsByClassName("modal")[0];
    modal.classList.add('is-active')
}

function hide_modal(node) {
    modal = node.parentNode;
    modal.classList.remove('is-active')
}

/**
 * Esconde el modal que aparece al querer enviar el formulario.
 * @param {} node Nodo del botón para cerrar el modal del formulario.
 */
function hide_modal_form(node) {
    modal = node.parentNode.parentNode.parentNode.parentNode;
    modal.classList.remove('is-active')
}

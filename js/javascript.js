window.onload = function () {
    var primerParrafo = document.getElementById("titulo");

    var btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
    btnCambiarTitulo.onclick = CambiarTitulo;

    function CambiarTitulo() {
        primerParrafo.innerHTML = document.getElementById("txtNuevoTitulo").value;
    }
}
function mostrarDetalhes(id) {
    var detalhes = document.getElementById(id);
    if (detalhes.style.display !== "block") {
        detalhes.style.display = "block";
    } else {
        detalhes.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const imagenesPequenas = document.querySelectorAll(".small");
    const modal = document.getElementById("modal");
    const imagenAmpliada = document.getElementById("imagen_ampliada");
    const cerrarModal = document.getElementById("cerrar");

    imagenesPequenas.forEach((imagenPequena) => {
        imagenPequena.addEventListener("click", () => {
            modal.style.display = "block";
            imagenAmpliada.src = imagenPequena.querySelector("img").src;
        });
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });
});

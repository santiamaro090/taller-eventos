document.addEventListener("DOMContentLoaded",() => {
    const soydiv = document.getElementById("soydiv");
    const boton = document.querySelector("button");

    soydiv.addEventListener("click",() => {
        alert("Hola! Soy el div");
    });

       boton.addEventListener("click", (event) => {
        event.stopPropagation(); // se usa stopPorpagation para detener al evento en ese mismo momento, de esta forma no intercede el div al darle click al boton saludar
        alert("Hola!");
    });
});

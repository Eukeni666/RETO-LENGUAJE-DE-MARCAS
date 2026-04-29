const autoresMisApuntes = new Set(["1", "3", "5", "7", "9"]);

function obtenerAutor(apunte) {
  return apunte.querySelector(".apunte__autor")?.textContent.trim() ?? "";
}

function alternarMisApuntes(event) {
  const enlace = event.currentTarget;
  const apuntes = document.querySelectorAll(".apunte");

  if (!apuntes.length) {
    return;
  }

  event.preventDefault();

  const filtroActivo = enlace.getAttribute("aria-pressed") === "true";
  const activarFiltro = !filtroActivo;

  apuntes.forEach((apunte) => {
    const esMio = autoresMisApuntes.has(obtenerAutor(apunte));
    apunte.hidden = activarFiltro && !esMio;
  });

  enlace.setAttribute("aria-pressed", String(activarFiltro));
  enlace.classList.toggle("nav__enlace--activo", activarFiltro);
}

document.querySelectorAll("[data-filtro-mis-apuntes]").forEach((enlace) => {
  enlace.setAttribute("aria-pressed", "false");
  enlace.addEventListener("click", alternarMisApuntes);
});

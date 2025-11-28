document.addEventListener("DOMContentLoaded", function () {

  /* ---- AÑO (solo si existe el span en la página) ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- MENÚ HAMBURGUESA ---- */
  const burgerButtons = document.querySelectorAll("#burger");
  const menus = document.querySelectorAll("#menu");

  // Cada página tendrá su propio botón/menu; agregamos listeners seguros.
  burgerButtons.forEach((btn, idx) => {
    const menu = menus[idx] || document.getElementById("menu");
    if (!menu) return;

    btn.addEventListener("click", () => {
      const isActive = menu.classList.toggle("active");
      btn.setAttribute("aria-expanded", String(isActive));
    });
  });

  // Al hacer click en un enlace del menú en mobile, cerrar el menú
  document.addEventListener("click", (e) => {
    // Si clic en enlace de menú, cerramos todos los menus activos
    if (e.target.matches("#menu a")) {
      document.querySelectorAll("#menu.active").forEach(m => m.classList.remove("active"));
      document.querySelectorAll("#burger").forEach(b => b.setAttribute("aria-expanded", "false"));
    }
  });

  /* ---- FORMULARIO DE CONTACTO ---- */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!nameInput || !emailInput || !messageInput || !status) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        status.textContent = "Completá todos los campos.";
        return;
      }

      const mail = `mailto:francobustos819@gmail.com?subject=Contacto desde portfolio&body=${encodeURIComponent(
        'Nombre: ' + name + '\nEmail: ' + email + '\n\n' + message
      )}`;

      // Abrir cliente de correo
      window.location.href = mail;
      status.textContent = "Abriendo cliente de correo...";
    });
  }

});
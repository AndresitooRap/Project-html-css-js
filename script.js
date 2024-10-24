$(document).ready(function () {
    $(".nav-link").on("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const target = $(this).attr("href"); // Obtiene el id de la sección

      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500
      ); // Duración de 3000 ms
    });
  });
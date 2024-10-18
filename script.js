var elmnt = document.getElementById("home");

function scrollToTop() {
  elmnt.scrollIntoView(true);
}






const cardsData = [
  {
    title: "Cuidado Diurno",
    text: "Ofrecemos un servicio de cuidado diurno donde las mascotas pueden socializar y jugar en un entorno seguro y controlado, bajo supervisión constante.",
  },
  {
    title: "Alojamiento Nocturno",
    text: "Proporcionamos alojamiento cómodo y seguro para mascotas durante la noche, asegurando que tengan un lugar acogedor para descansar.",
  },
  {
    title: "Paseos y Ejercicio",
    text: "Ofrecemos paseos regulares para perros y sesiones de ejercicio, ayudando a mantener a las mascotas activas y saludables mientras están en nuestra guardería.",
  },
  {
    title: "Alimentación Personalizada",
    text: "Nos aseguramos de que cada mascota reciba la alimentación adecuada según sus necesidades dietéticas y preferencias, proporcionando comidas equilibradas y saludables.",
  },
  {
    title: "Socialización Controlada",
    text: " Organizamos sesiones de socialización para perros y gatos, permitiéndoles interactuar de manera segura con otras mascotas y desarrollar habilidades sociales.",
  },
  {
    title: "Cuidado de Aves",
    text: "Ofrecemos servicios especializados para el cuidado de pájaros, incluyendo atención a su dieta, espacio adecuado y enriquecimiento ambiental.",
  },
  {
    title: "Atención Médica Básica",
    text: "Proporcionamos atención médica básica, como la administración de medicamentos y control de salud, asegurando que las mascotas estén bien atendidas.",
  },
  {
    title: "Baños y AcicalamientO",
    text: "Ofrecemos servicios de baño y acicalamiento para mantener a las mascotas limpias y bien cuidadas, utilizando productos adecuados para cada especie.",
  },
  {
    title: "Asesoría para Dueños",
    text: "Proporcionamos asesoramiento a los dueños sobre el comportamiento y cuidado de sus mascotas, ofreciendo tips sobre adiestramiento y bienestar general.",
  },
];

const container = document.getElementById("card-container");
cardsData.forEach((card) => {
  const cardHTML = `
        <div class="col-4" style="padding-top: 10px; padding-bottom: 10px; height: auto">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.text}</p>
                    
                </div>
            </div>
        </div>
    `;
  container.innerHTML += cardHTML;
});

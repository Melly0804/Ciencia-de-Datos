const casos = [
  {
    nombre: "Cuenca alta",
    categoria: "ambiente",
    valor: 86,
    lectura: "Concentra los cambios más fuertes del conjunto."
  },
  {
    nombre: "Corredor central",
    categoria: "movilidad",
    valor: 72,
    lectura: "Muestra una presión sostenida en horas pico."
  },
  {
    nombre: "Red barrial",
    categoria: "cultura",
    valor: 48,
    lectura: "Tiene menor magnitud, pero alta presencia territorial."
  },
  {
    nombre: "Borde urbano",
    categoria: "ambiente",
    valor: 38,
    lectura: "Permite ver una transición entre usos del suelo."
  },
  {
    nombre: "Sistema integrado",
    categoria: "movilidad",
    valor: 64,
    lectura: "Conecta varios puntos críticos de la comparación."
  },
  {
    nombre: "Equipamientos",
    categoria: "cultura",
    valor: 29,
    lectura: "Ayuda a identificar brechas de acceso."
  }
];

const categoria = document.querySelector("#filtro-categoria");
const minimo = document.querySelector("#filtro-minimo");
const valorMinimo = document.querySelector("#valor-minimo");
const tarjetas = document.querySelector("#tarjetas");
const conteo = document.querySelector("#conteo");
const lectura = document.querySelector("#lectura");

function filtrarCasos() {
  const categoriaSeleccionada = categoria.value;
  const minimoSeleccionado = Number(minimo.value);

  return casos.filter((caso) => {
    const coincideCategoria = categoriaSeleccionada === "todas" || caso.categoria === categoriaSeleccionada;
    const superaMinimo = caso.valor >= minimoSeleccionado;

    return coincideCategoria && superaMinimo;
  });
}

function pintarTarjetas(casosFiltrados) {
  if (casosFiltrados.length === 0) {
    tarjetas.innerHTML = '<p class="vacio">No hay casos para esta combinación de filtros.</p>';
    return;
  }

  tarjetas.innerHTML = casosFiltrados
    .map((caso) => `
      <article class="tarjeta">
        <div>
          <p class="etiqueta">${caso.categoria}</p>
          <h3>${caso.nombre}</h3>
          <p>${caso.lectura}</p>
        </div>
        <strong class="valor">${caso.valor}</strong>
      </article>
    `)
    .join("");
}

function actualizarLectura(casosFiltrados) {
  conteo.textContent = `${casosFiltrados.length} ${casosFiltrados.length === 1 ? "caso" : "casos"}`;

  if (casosFiltrados.length === 0) {
    lectura.textContent = "La selección actual no devuelve resultados. Revisa si el valor mínimo es demasiado alto.";
    return;
  }

  const mayor = [...casosFiltrados].sort((a, b) => b.valor - a.valor)[0];
  lectura.textContent = `${mayor.nombre} tiene el valor más alto dentro de la selección actual. Usa este texto para convertir la interacción en una lectura narrativa.`;
}

function actualizarInterfaz() {
  const casosFiltrados = filtrarCasos();
  valorMinimo.textContent = minimo.value;
  pintarTarjetas(casosFiltrados);
  actualizarLectura(casosFiltrados);
}

categoria.addEventListener("change", actualizarInterfaz);
minimo.addEventListener("input", actualizarInterfaz);

actualizarInterfaz();

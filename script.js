const e = document.querySelector("#filtro-categoria");
const t = document.querySelector("#resultado-titulo");
const r = document.querySelector("#resultado");

const recomendaciones = [
  {
    usuario: 1,
    canciones: [
      "Me Rehúso — Urbano / reguetón — score: 12.34",
      "DtMF — Urbano / reguetón — score: 4.05",
      "Everybody Wants To Rule The World — Rock — score: 3.13",
      "WRONG — Hip-hop / trap — score: 2.72"
    ]
  },
  {
    usuario: 2,
    canciones: [
      "Heroes (we could be) — Electrónica — score: 7.58",
      "Hard Work Pays Off — Hip-hop / trap — score: 5.35",
      "Around the World — Electrónica — score: 3.78",
      "Man I Need — Soul — score: 3.21",
      "Die With A Smile — Pop — score: 2.61"
    ]
  },
  {
    usuario: 3,
    canciones: [
      "I'm an Albatraoz — Electrónica — score: 10.73",
      "Stateside — Pop — score: 6.09"
    ]
  },
  {
    usuario: 4,
    canciones: [
      "Sweet Child O Mine — Rock — score: 3.61"
    ]
  },
  {
    usuario: 5,
    canciones: [
      "Me Rehúso — Urbano / reguetón — score: 11.48",
      "I'm an Albatraoz — Electrónica — score: 7.80",
      "Ya Borracho — Regional mexicano — score: 7.68"
    ]
  },
  {
    usuario: 6,
    canciones: [
      "Around the World — Electrónica — score: 6.88",
      "Highway to Hell — Rock — score: 6.87",
      "In Da Getto — Urbano / reguetón — score: 3.30",
      "Ya Borracho — Regional mexicano — score: 3.27"
    ]
  },
  {
    usuario: 7,
    canciones: [
      "Die With A Smile — Pop — score: 4.20",
      "Pvta Luna — Regional mexicano — score: 3.53",
      "Goddard Song — Hip-hop / trap — score: 3.24",
      "Topanga — Hip-hop / trap — score: 3.19"
    ]
  },
  {
    usuario: 8,
    canciones: [
      "Highway to Hell — Rock — score: 11.35",
      "Have You Ever Seen The Rain — Rock — score: 7.70",
      "Outside — Electrónica — score: 7.42",
      "Heroes (we could be) — Electrónica — score: 3.76",
      "Play Hard — Electrónica — score: 3.61"
    ]
  },
  {
    usuario: 9,
    canciones: [
      "Llamado de emergencia — Urbano / reguetón — score: 22.29",
      "Outside — Electrónica — score: 14.17",
      "Have You Ever Seen The Rain — Rock — score: 11.51",
      "Me Rehúso — Urbano / reguetón — score: 8.32",
      "Cuando No Era Cantante — Urbano / reguetón — score: 7.78"
    ]
  },
  {
    usuario: 10,
    canciones: [
      "Play Hard — Electrónica — score: 3.61",
      "Highway to Hell — Rock — score: 3.61",
      "Around the World — Electrónica — score: 3.55",
      "Outside — Electrónica — score: 3.01",
      "Heroes (we could be) — Electrónica — score: 2.82"
    ]
  },
  {
    usuario: 11,
    canciones: [
      "Have You Ever Seen The Rain — Rock — score: 7.70",
      "Heroes (we could be) — Electrónica — score: 3.76"
    ]
  },
  {
    usuario: 12,
    canciones: []
  },
  {
    usuario: 13,
    canciones: [
      "dao — Regional mexicano — score: 4.35",
      "In Da Getto — Urbano / reguetón — score: 4.13"
    ]
  },
  {
    usuario: 14,
    canciones: [
      "Llamado de emergencia — Urbano / reguetón — score: 30.85",
      "Around the World — Electrónica — score: 7.01",
      "Die With A Smile — Pop — score: 5.96",
      "Play Hard — Electrónica — score: 3.61",
      "I'm an Albatraoz — Electrónica — score: 2.99"
    ]
  },
  {
    usuario: 15,
    canciones: []
  },
  {
    usuario: 16,
    canciones: [
      "Cuando No Era Cantante — Urbano / reguetón — score: 3.91"
    ]
  },
  {
    usuario: 17,
    canciones: [
      "Highway to Hell — Rock — score: 6.43",
      "In Da Getto — Urbano / reguetón — score: 3.30",
      "Llamado de emergencia — Urbano / reguetón — score: 3.24"
    ]
  },
  {
    usuario: 18,
    canciones: []
  },
  {
    usuario: 19,
    canciones: []
  },
  {
    usuario: 20,
    canciones: [
      "dao — Regional mexicano — score: 6.49",
      "Highway to Hell — Rock — score: 5.92",
      "Play Hard — Electrónica — score: 3.55",
      "Outside — Electrónica — score: 3.23",
      "I'm an Albatraoz — Electrónica — score: 3.02"
    ]
  },
  {
    usuario: 21,
    canciones: [
      "dao — Regional mexicano — score: 15.56",
      "APT — Pop — score: 8.30",
      "Play Hard — Electrónica — score: 3.61",
      "Highway to Hell — Rock — score: 3.61"
    ]
  },
  {
    usuario: 22,
    canciones: [
      "Cuando No Era Cantante — Urbano / reguetón — score: 11.75",
      "COQUETA — Regional mexicano — score: 8.07",
      "dao — Regional mexicano — score: 3.97",
      "Play Hard — Electrónica — score: 3.61",
      "Ya Borracho — Regional mexicano — score: 3.59"
    ]
  },
  {
    usuario: 23,
    canciones: [
      "Llamado de emergencia — Urbano / reguetón — score: 8.07",
      "Cuando No Era Cantante — Urbano / reguetón — score: 4.21",
      "So Easy (To Fall In Love) — Soul — score: 3.60",
      "Around the World — Electrónica — score: 3.55",
      "Man I Need — Soul — score: 3.21"
    ]
  },
  {
    usuario: 24,
    canciones: [
      "Me Rehúso — Urbano / reguetón — score: 8.20",
      "In Da Getto — Urbano / reguetón — score: 7.75",
      "APT — Pop — score: 7.51",
      "Todo Lo Fue — Regional mexicano — score: 3.53",
      "Die With A Smile — Pop — score: 3.46"
    ]
  },
  {
    usuario: 25,
    canciones: [
      "DtMF — Urbano / reguetón — score: 11.30",
      "Around the World — Electrónica — score: 3.78",
      "In Da Getto — Urbano / reguetón — score: 3.62",
      "Goddard Song — Hip-hop / trap — score: 3.40",
      "let it breathe — Hip-hop / trap — score: 2.54"
    ]
  },
  {
    usuario: 26,
    canciones: [
      "COQUETA — Regional mexicano — score: 11.30",
      "let it breathe — Hip-hop / trap — score: 3.58",
      "In Da Getto — Urbano / reguetón — score: 3.30",
      "Cuando No Era Cantante — Urbano / reguetón — score: 3.13",
      "WRONG — Hip-hop / trap — score: 2.97"
    ]
  },
  {
    usuario: 27,
    canciones: [
      "Die With A Smile — Pop — score: 4.20",
      "Goddard Song — Hip-hop / trap — score: 3.24"
    ]
  },
  {
    usuario: 28,
    canciones: [
      "let it breathe — Hip-hop / trap — score: 6.94",
      "WRONG — Hip-hop / trap — score: 6.38",
      "Hard Work Pays Off — Hip-hop / trap — score: 5.93",
      "dao — Regional mexicano — score: 3.95",
      "DtMF — Urbano / reguetón — score: 3.91"
    ]
  },
  {
    usuario: 29,
    canciones: [
      "Everybody Wants To Rule The World — Rock — score: 11.56",
      "Outside — Electrónica — score: 10.82",
      "DtMF — Urbano / reguetón — score: 8.22",
      "In Da Getto — Urbano / reguetón — score: 3.59"
    ]
  },
  {
    usuario: 30,
    canciones: [
      "COQUETA — Regional mexicano — score: 11.23",
      "dao — Regional mexicano — score: 7.38",
      "DtMF — Urbano / reguetón — score: 4.17",
      "Around the World — Electrónica — score: 3.78",
      "Topanga — Hip-hop / trap — score: 3.19"
    ]
  }
];

const listaRecomendaciones = recomendaciones
  .map((dato) => {
    if (dato.canciones.length === 0) {
      return `
        <details>
          <summary>Usuario ${dato.usuario}</summary>
          <p>Sin recomendaciones por calificaciones insuficientes con rating mayor o igual a 4.</p>
        </details>
      `;
    }

    return `
      <details>
        <summary>Usuario ${dato.usuario}</summary>
        <ul>
          ${dato.canciones.map((cancion) => `<li>${cancion}</li>`).join("")}
        </ul>
      </details>
    `;
  })
  .join("");

const c = {
  metodologia: {
    titulo: "Metodología",
    texto: `
      <p>
        La investigación se basó en una encuesta de 30 canciones, donde cada participante calificó las canciones en una escala del 0 al 5. En esta escala, 0 significaba “no la conozco” y 5 representaba una canción favorita. Para evitar sesgos en el análisis, los valores 0 fueron convertidos en NaN, ya que una persona que no conoce una canción no necesariamente la considera mala. De esta forma, las canciones desconocidas no afectaron negativamente el promedio.
      </p>
    `
  },

  generos: {
    titulo: "Géneros cubiertos",
    texto: `
      <p>
        La encuesta incluyó canciones de distintos géneros musicales, entre ellos pop, soul, rock clásico, reggaetón, regional mexicano, hip-hop, trap y música electrónica.
      </p>
    `
  },

  muestra: {
    titulo: "Muestra",
    texto: `
      <p>
        La muestra estuvo formada por 30 respondentes. La mayoría pertenece al rango de 18 a 29 años y utiliza plataformas de streaming como principal medio para escuchar música.
      </p>
    `
  },

  resultados: {
    titulo: "Resultados generales",
    texto: `
      <p>
        El promedio global entre las 30 canciones fue de aproximadamente 3.54 sobre 5. Entre las mejor valoradas destacaron Sweet Child O' Mine, DtMF, In Da Getto, Everybody Wants To Rule The World, COQUETA y Highway to Hell.
      </p>
    `
  },

  reconocimiento: {
    titulo: "Reconocimiento vs. valoración",
    texto: `
      <p>
        Uno de los hallazgos más importantes fue que las canciones más conocidas no necesariamente fueron las mejor calificadas. Esto demuestra que popularidad y preferencia no siempre coinciden.
      </p>
    `
  },

  hallazgos: {
    titulo: "Hallazgos principales",
    texto: `
      <p>
        Pop y reggaetón aparecen como algunos de los géneros más escuchados, aunque el análisis también mostró una valoración alta hacia canciones clásicas y propuestas menos populares.
      </p>
    `
  },

  "genero-encuestado": {
    titulo: "Diferencias por género del encuestado",
    texto: `
      <p>
        Se observaron diferencias en la valoración de algunos géneros: algunos grupos tendieron a valorar más el rock clásico, mientras que otros mostraron mayor afinidad por soul, regional o música urbana.
      </p>
    `
  },

  region: {
    titulo: "Diferencias por región",
    texto: `
      <p>
        Algunas regiones presentaron puntajes más altos en canciones específicas, aunque esto debe interpretarse con precaución por el tamaño reducido de ciertos grupos.
      </p>
    `
  },

  correlaciones: {
    titulo: "Correlaciones entre canciones",
    texto: `
      <p>
        El análisis de correlación permitió detectar agrupaciones de canciones que tienden a gustar al mismo tipo de oyente, mostrando afinidades y contrastes entre estilos musicales.
      </p>
    `
  },

  "rock-urbano": {
    titulo: "Perfil rock vs. urbano",
    texto: `
      <p>
        Los oyentes con perfil rock valoraron más ciertas canciones alternativas o clásicas, mientras que los oyentes urbanos mostraron mayor afinidad por canciones bailables, reggaetón y EDM.
      </p>
    `
  },

  "recomendaciones-usuario": {
    titulo: "Recomendaciones por usuario",
    texto: `
      <p>
        El sistema generó recomendaciones personalizadas para cada usuario a partir de sus calificaciones. Cuando un usuario no tenía suficientes canciones con rating mayor o igual a 4, no se generaron recomendaciones.
      </p>

      <p>
        Esto permite ver qué canciones fueron sugeridas según patrones de usuarios parecidos y no únicamente por género musical.
      </p>

      ${listaRecomendaciones}
    `
  },

  "genero-musical": {
    titulo: "Género musical",
    texto: `
      <p>
        En la mayoría de los casos, el recomendador sí tiende a sugerir canciones del mismo género que las canciones que el usuario calificó alto. Por ejemplo, el usuario 8, que escucha Rock, recibió principalmente Rock y Electrónica. De forma similar, el usuario 28, que tiene preferencia por Hip-hop, recibió casi puro Hip-hop/trap.
      </p>

      <p>
        Sin embargo, no siempre ocurre así. Aparecen recomendaciones inesperadas con frecuencia, porque el algoritmo no entiende la música en sí, sino los patrones de comportamiento. Si los mismos usuarios que calificaron bien una canción de Rock también calificaron bien una canción urbana, el modelo puede relacionarlas aunque musicalmente no sean parecidas.
      </p>

      <p>
        Un caso claro es My Demons, de Rock alternativo, que puede llevar a recomendaciones de Hip-hop/trap y Pop. Esto demuestra que el sistema trabaja con similitudes entre usuarios, no con características musicales reales como ritmo, instrumentos o letra.
      </p>

      <p>
        También se observa un sesgo de popularidad. Canciones más conocidas o con más calificaciones, como Llamado de emergencia o DtMF, aparecen recomendadas para muchos usuarios distintos. Esto provoca que las canciones populares se sigan recomendando más, mientras que canciones menos conocidas pueden quedar ocultas.
      </p>

      <p>
        En conclusión, el algoritmo no entiende la música, entiende a las personas. Su lógica es: “usuarios parecidos a ti también escucharon esto”. Esto lo hace útil, pero también limitado, porque reproduce gustos mayoritarios y puede ignorar canciones de nicho aunque sean buenas opciones para ciertos usuarios.
      </p>
    `
  },

  conclusion: {
    titulo: "Conclusión",
    texto: `
      <p>
        La encuesta muestra que conocer una canción y realmente disfrutarla son cosas distintas. La exposición ayuda al reconocimiento, pero la valoración depende mucho más de la conexión individual con cada estilo.
      </p>

      <p>
        Además, el sistema de recomendación permite observar cómo los gustos de los usuarios pueden relacionarse entre sí. Sin embargo, también presenta limitaciones, como el sesgo hacia canciones populares y la exclusión de usuarios con pocas calificaciones altas.
      </p>
    `
  }
};

function ver() {
  const v = e.value;
  t.textContent = c[v].titulo;
  r.innerHTML = c[v].texto;
}

ver();
e.addEventListener("change", ver);
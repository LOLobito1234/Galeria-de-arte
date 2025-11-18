export default function Artista() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center tracking-wider">
        Sobre la artista
      </h1>

      {/* Bio principal */}
      <p className="text-lg leading-relaxed text-gray-800 mb-12">
        <strong>Nadia Judith Reyes Morales (2003)</strong> es una artista visual originaria de Guerrero y formada en la Facultad de Artes y Diseño de la UNAM. 
        Su trabajo explora la memoria afectiva, el perdón, la identidad y las fracturas emocionales que se gestan en la infancia. A través de paletas cálidas, 
        realismo nostálgico e intermedialidad, genera imágenes que dialogan entre lo vulnerable, lo íntimo y lo doloroso, creando espacios de introspección emocional.
      </p>

      <p className="text-lg leading-relaxed text-gray-800 mb-12">
        Ha desarrollado proyectos vinculados a la maternidad, la adopción y las dinámicas de pertenencia, articulando procesos de investigación y trabajo comunitario. 
        Ha participado en exposiciones colectivas e individuales en espacios como Galería Aguafuerte, Casa del Virrey de Mendoza, TACO A.C., 
        y el STC Metro de la Ciudad de México. 
        En 2025 fue seleccionada como beneficiaria de <strong>PECDA Guerrero 2025–2026</strong> con el proyecto: 
        <em> “¿Hijas de quién? Visión de la mujer adoptada, sentido de pertenencia y reconciliación”.</em>
      </p>

      {/* Secciones resumidas */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3">Educación</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Licenciatura en Artes Visuales – FAD UNAM (2021–2025)</li>
            <li>Curso de pensamiento e investigación gráfica – TACO (2022)</li>
            <li>Seminario MUAC: Lógica de la identidad y la paradoja (2023)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-3">Experiencia</h3>
          <ul className="text-gray-700 space-y-2">
            <li>Asistente de Laureana Toledo (2022)</li>
            <li>Becaria en Tilma LAB Arte y Diseño (2023–2024)</li>
            <li>Maestra en Centros de Artes y Oficios (2025)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-red-500 mb-3">Exposiciones destacadas</h4>
          <ul className="text-gray-700 space-y-2">
            <li>Donde las mariposas guardan sus alas – Individual (2025)</li>
            <li>Tras el desamor maternal – Individual (2025)</li>
            <li>Galería Aguafuerte (2024)</li>
            <li>Casa del Virrey de Mendoza (2024)</li>
            <li>TACO A.C. (2023)</li>
            <li>STC Metro Coyoacán (2024)</li>
          </ul>
        </div>

        <div>
          <h5 className="text-2xl font-bold text-red-500 mb-3">Publicaciones</h5>
          <ul className="text-gray-700 space-y-2">
            <li>
              <em>El fértil</em> — Fotografía de portada  
              <br />Pretextos Literarios por Escrito (2022)
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}

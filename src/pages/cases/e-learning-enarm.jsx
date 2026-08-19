// Agrega este pequeño componente al inicio de legal-tracker.jsx
const ZoomImage = ({ src, alt, setLightboxSrc }) => (
    <div 
      onClick={() => setLightboxSrc(src)}
      className="my-8 w-full overflow-hidden rounded-2xl cursor-zoom-in hover:shadow-xl transition-shadow"
    >
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
  
  import React from 'react';
  import { CaseStudyTemplate } from '../../components/CaseStudyTemplate';
  import enarmHero from '../../assets/case-studies/enarm.png';
  import enarmFinal1 from '../../assets/case-studies/enarm-final-1.png';
  import enarmFinal2 from '../../assets/case-studies/enarm-final-2.png';
  import enarmFinal3 from '../../assets/case-studies/enarm-final-3.png';
  import enarmFinal4 from '../../assets/case-studies/enarm-final-4.png';
  import enarmFinal5 from '../../assets/case-studies/enarm-final-5.png';
  import enarmFinal6 from '../../assets/case-studies/enarm-final-6.png';
  import enarmInfArq from '../../assets/case-studies/enarm-ia.png';
  import enarmPersonas from '../../assets/case-studies/enarm-personas.png';
  import enarmProgress from '../../assets/case-studies/enarm-progress.png';
  import enarmSimulators from '../../assets/case-studies/enarm-simulators.png';
  import enarmSketches from '../../assets/case-studies/enarm-sketches.png';
  import enarmUserFlows from '../../assets/case-studies/enarm-user-flows.png';
  
  export default function LegalCaseStudy({ setLightboxSrc }) {
    return (
      <CaseStudyTemplate
        category="E-LEARNING · ED-TECH"
        title="Plataforma de Estudio de Especialidades Médicas"
        subtitle="Cómo un enfoque UX transformó una plataforma obsoleta en una experiencia de aprendizaje flexible y autogestionable."
        heroImage={enarmHero} // pasamos la variable entre llaves, sin comillas
        role="Produtc Designer"
        timeline="4 meses (MVP) · 2022"
        services="UX Research · Prototyping · User Testing"
      >
      {/* Bloque de NDA colocado justo al inicio del contenido */}
      <div className="p-6 sm:p-8 bg-[#e3e0cf] rounded-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl select-none" role="img" aria-label="Warning">
              ⚠️
            </span>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
              Spanish Version — English Available Upon Request
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              This case study is written in Spanish. If you need an English version, please contact me and I'll be happy to share it with you.
              </p>
              <a 
            href="mailto:alura.gonzalez@gmail.com?subject=Requesting%20access%20to%20English%20Version%20ENARM%20Case%20Study" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3a7dc9] hover:text-[#2a5a8f] whitespace-nowrap transition-colors"
          >
            Request English version →
          </a>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Introducción</h2>
          <p className="leading-relaxed">
          En el mundo actual altamente competitivo, la eficiencia y flexibilidad de los procesos es esencial para mejorar el nivel de calidad de aquel atributo que nos coloque en la posición adecuada para llevar a cabo nuestras metas profesionales y personales.</p>  
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]">Plataforma ENARM,</span> líder en la preparación para El Examen Nacional de Aspirantes a Residencias Médicas (ENARM) en México, reconoce la necesidad de aprovechar su vasta experiencia dentro de la preparación para este examen y decide focalizar sus esfuerzos en lo que compete a la mejora de su experiencia educativa.</p>
          <p className="leading-relaxed">
          Este caso de estudio profundiza en el viaje de Plataforma ENARM embarcándose en un proyecto para desarrollar un software de aprendizaje en línea. El objetivo principal del software era reducir el acompañamiento 1:1 entre personal de soporte al cliente y estudiantes, así como mejorar la eficiencia y eficacia general de la experiencia asíncrona a lo largo del proceso de aprendizaje. Al implementar un enfoque centrado en el usuario, Plataforma ENARM pretendía dotar a los estudiantes de su plataforma una guía para la autogestión de contenidos densos dentro de un marco de tiempo definido. La solución simplificaría sus tareas, mejoraría la experiencia de aprendizaje y disminuiría la tasa de contacto 1:1 con personal de soporte al cliente.</p> 
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Descubriendo la Historia detrás del Proyecto</h2>
          <p className="leading-relaxed">
          El proceso de diseño de la plataforma se enfoca en optimizar la experiencia de aprendizaje, mejorar la eficiencia y relevancia de los contenidos presentados bajo una situación en específica, y agilizar la comunicación entre los actores involucrados. Cada uno de estos aspectos fueron meticulosamente considerados para alinear los requerimientos específicos de Plataforma ENARM.</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Conocer al cliente, primer paso
          </h3>
          <p className="leading-relaxed">
          Plataforma ENARM es una compañía que ofrece el curso online más completo de entrenamiento para aprobar con éxito el examen ENARM. El equipo está integrado por más de 20 médicos especialistas en casi todas las áreas de la medicina.</p>
          <p className="leading-relaxed">
          Plataforma ENARM cuenta con múltiples sistemas de aprendizaje, es decir, su contenido multimedia se adapta a las distintas preferencias de aprendizaje. Se cuenta con vídeo-clases, resúmenes, mini resúmenes, flash cards, cuadros comparativos, esquemas, tips, y más.</p>
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]">El porcentaje de aceptación de sus alumnos rebasan el 80%,</span> de los cuales 8 de cada 10 acreditan su pase a la residencia desde el primer intento.</p>
          <p className="leading-relaxed">
          La compañía se enfrentaba a un reto de crecimiento el cual demandaba la actualización del sistema, así como sus flujos de trabajo, ya que contaban con un onboarding lento y lleno de fricciones. Cada vez que se incorporaba un estudiante a la experiencia de aprendizaje, se vivía una situación frustrante entre el equipo de soporte al cliente y el estudiante. Sin mencionar carencias técnicas como la versión móvil y la consulta offline de los recursos de aprendizaje.</p>
          <p className="leading-relaxed">
          La meta colectiva era desarrollar la Plataforma de Aprendizaje ENARM que pudiera evolucionar en una experiencia dinámica y flexible alineada tanto a los esfuerzos directivos existentes como a la visión a la que se pretende llegar.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Mi Proceso de Diseño</h2>
          <p className="leading-relaxed">
          Abrazo y acepto el proceso de design thinking porque me permite crear soluciones que realmente resuenan en los usuarios. Siguiendo este enfoque iterativo y centrado en el ser humano, puedo empatizar con los usuarios, descubrir sus necesidades no satisfechas y definir el planteamiento del problema con claridad.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Empatizar:</span> Me sumerjo en la perspectiva del usuario, realizando investigaciones y entrevistas para obtener una visión profunda de sus necesidades, motivaciones y puntos débiles.</li>
      <li><span className="font-bold text-[#1a1a1a]">Definir:</span> Formulo los hallazgos de la investigación en un enunciado claro del problema que captura el desafío del usuario y establece una dirección enfocada para el proceso de diseño.</li>
      <li><span className="font-bold text-[#1a1a1a]">Idear:</span> Genero una amplia gama de ideas creativas sin juzgar, fomentando la lluvia de ideas y la colaboración para explorar posibles soluciones.</li>
      <li><span className="font-bold text-[#1a1a1a]">Prototipar: </span> Transformo las ideas en representaciones tangibles, construyendo prototipos de baja/alta fidelidad que permiten pruebas y refinamientos iterativos.</li>
      <li><span className="font-bold text-[#1a1a1a]">Testear:</span> Recopilo comentarios de los usuarios a través de pruebas de prototipos, observo sus interacciones e incorporo sus conocimientos para perfeccionar aún más los diseños.</li>
      <li><span className="font-bold text-[#1a1a1a]">Iterar:</span> Vuelvo repetidamente a los pasos anteriores, perfeccionando y mejorando el diseño en función de los comentarios y conocimientos de los usuarios.</li>
      <li><span className="font-bold text-[#1a1a1a]">Implementar:</span> Finalizo el diseño para la implementación, considerando la viabilidad técnica, la escalabilidad y la aceptación del usuario, y lo preparo para el lanzamiento.</li>
      <li><span className="font-bold text-[#1a1a1a]">Evaluar:</span> Evalúo el impacto y el éxito de la solución implementada, recopilando comentarios y datos para medir su efectividad e identificar áreas de mejora adicional.</li>
    </ul>
    </section>
  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">El Proyecto de Plataforma ENARM</h2>
        <p className="leading-relaxed">
        Este estudio de caso detalla cómo la aplicación ayudó al cliente a identificar y abordar de manera proactiva posibles brechas en la interacción vivida entre el estudiante y la plataforma, al mismo tiempo que mejoró la eficiencia y eficacia general de las operaciones de soporte al cliente.</p>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Comenzamos identificando los problemas
          </h3>
        <p className="leading-relaxed">
        Mi fase de investigación implicó hablar con los usuarios finales y las partes interesadas para identificar los puntos débiles y los desafíos que enfrentaban en su trabajo diario y con la plataforma. A continuación un pequeño resumen sobre algunas de las ideas clave que descubrí.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Software obsoleto:</span> Muchos empleados de soporte al cliente se sentían frustrados por el software obsoleto que utilizaban. Este sistema estaba estructurado bajo un sitio web de Wordpress, el cual era torpe y difícil de navegar.</li>
      <li><span className="font-bold text-[#1a1a1a]">Mala experiencia de usuario:</span> En consecuencia, muchos empleados y estudiantes descubrieron que el software existente tenía una mala UX. El diseño era a menudo confuso y contrario a la intuición.</li>
      <li><span className="font-bold text-[#1a1a1a]">Se muestran demasiados elementos en la pantalla:</span> Muchos estudiantes se sintieron abrumados por la cantidad de información que se les presentaba en una sola pantalla.</li>
      <li><span className="font-bold text-[#1a1a1a]">Flujo principal desorganizado y sin contexto:</span> Muchos estudiantes tenían que depender de hojas de cálculo o archivos PDF obsoletos para mantener registro de su avance en el proceso de aprendizaje.</li>
    </ul>
        </section>


        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Superar los desafíos del proyecto</h2>
          <p className="leading-relaxed">
          Diseñar una aplicación de aprendizaje para los estudiantes, abordar con características y funcionalidades necesarias la situación con soporte al cliente, mientras se contemplan los requerimientos técnicos, fue una tarea compleja y desafiante. Enfrenté varios obstáculos a lo largo del proceso de diseño, que iban desde equilibrar las expectativas de las partes interesadas con las necesidades del usuario final hasta la integración con contenido y sistema existente.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Equilibrar las expectativas de los agentes directivos y las necesidades del usuario final:</span> Programé reuniones periódicas con las partes interesadas para comunicar mis decisiones de diseño y recopilar sus comentarios. También creé una base de datos con reseñas de usuarios que habían utilizado su plataforma para comunicar a las partes interesadas dónde se encontraban los puntos débiles de la experiencia.</li>
      <li><span className="font-bold text-[#1a1a1a]">Simplificando flujos confusos:</span> Creé múltiples versiones de la arquitectura de la información y las cotejé con pruebas con usuarios para ver cuál era la más efectiva.</li>
      <li><span className="font-bold text-[#1a1a1a]">Integración con sistema y contenido existente:</span> Colaboré estrechamente con el equipo de desarrollo para garantizar que la plataforma pudiera integrarse eficazmente al sistema.</li>
      <li><span className="font-bold text-[#1a1a1a]">Cumplir plazos ajustados:</span> Prioricé las funciones clave y trabajé en estrecha colaboración con el equipo de desarrollo para asegurarme de que pudieran entregar el código de manera rápida y eficiente.</li>
    </ul>
        </section>
  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Definir el público objetivo
          </h2>
          <p className="leading-relaxed">
          Definir el público objetivo de una plataforma e-learning implica identificar los grupos de usuarios clave y comprender sus características, necesidades y objetivos. Así es como abordé la definición del público objetivo y el desarrollo de personas para este proyecto.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Aportes de los agentes directivos:</span> Colaboré con los agentes directivos, incluidos parte del personal médico y el personal de soporte al cliente, para recopilar sus conocimientos y perspectivas sobre los usuarios principales de la aplicación.</li>
      <li><span className="font-bold text-[#1a1a1a]">Investigación de usuarios:</span> Realicé métodos de investigación cualitativa, como entrevistas, grupos focales y observaciones digitales, para conocer el contexto de los estudiantes de este tipo de plataformas.</li>
    </ul>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Creando user personas
          </h3>
          <p className="leading-relaxed">
          La cantidad de personas creadas depende de la complejidad del panorama de usuarios y de los distintos grupos de usuarios identificados durante la fase de investigación. En este proyecto de plataforma e-learning, desarrollé tres personas que representan diferentes perfiles de interacción con la plataforma.</p>
        </section>

        <ZoomImage src={enarmPersonas} alt="Enarm Personas" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        La importancia de la investigación de usuarios
          </h2>
          <p className="leading-relaxed">
          La fase de investigación de usuarios jugó un papel fundamental en el desarrollo de la Plataforma ENARM. Comprender las necesidades, preferencias y puntos débiles de los estudiantes fue crucial para crear un diseño centrado en el usuario que mejorara su eficiencia y experiencia general.</p>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Realizar investigaciones de usuarios y centrarse en la recopilación de datos
          </h3>
          <p className="leading-relaxed">
          Llevé a cabo varios métodos de investigación cualitativa para recopilar información e informar el diseño de la lógica de los flujos de la plataforma.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Encuestas:</span> Se llevaron a cabo para recopilar comentarios sobre la experiencia utilizada actualmente.</li>
      <li><span className="font-bold text-[#1a1a1a]">Observación Digital:</span> Generé una base de datos a partir de reseñas compartidas en redes sociales sobre la experiencia de haber utilizado Plataforma ENARM y otras soluciones de la competencia.</li>
      <li><span className="font-bold text-[#1a1a1a]">Grupos focales:</span> Organicé un pequeño grupo focal con los integrantes de soporte al cliente. Como moderadora, guié las discusiones, permitiendo a los participantes expresar abiertamente sus experiencias, puntos débiles y sugerencias.</li>
    </ul>
        </section>


        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Construyendo una arquitectura de información adecuada
          </h2>
          <p className="leading-relaxed">
          El éxito de nuestra plataforma de educación en línea que se adecúe a distintos ritmos de estudio depende en gran medida de una arquitectura de información bien diseñada que satisfaga las necesidades de nuestros usuarios finales.</p>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Creación de arquitectura de información y flujo de usuarios
          </h3>
          <p className="leading-relaxed">
          Para asegurarme de que la aplicación fuera intuitiva y fácil de usar, creé esquemas de arquitectura de información y flujos de usuarios. El esquema proporcionó una vista de alto nivel de toda la plataforma. Los flujos de usuarios desglosaron tareas e interacciones específicas de los usuarios, mostrando cómo los usuarios se moverían a través de la plataforma y lograrían sus objetivos.</p>
        </section>

        <ZoomImage src={enarmInfArq} alt="Enarm Information Architecture" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmUserFlows} alt="Enarm User Flows" setLightboxSrc={setLightboxSrc} />
       
       <section className="space-y-4 pt-6">
       <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
       Sesión de lluvia de ideas y primeros bocetos
          </h2>
          <p className="leading-relaxed">
          Una vez que tuve una lista definitiva de las funcionalidades clave y los flujos de usuarios, comencé a esbozar el diseño y la interfaz de usuario de la plataforma. Los bocetos eran dibujos rápidos y aproximados que capturaban el layout y la estructura básicos de la plataforma.</p>
      <p className="leading-relaxed">
      Después de algunas sesiones de lluvia de ideas internas con el líder de desarrollo, decidimos la estructura final de la plataforma, luego la discutimos con los agentes directivos y continuamos con los wireframes de alta fidelidad.</p>
        </section>
  
        <ZoomImage src={enarmSketches} alt="Enarm Sketches" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Preparando los wireframes
          </h2>
          <p className="leading-relaxed">
          Una vez que tuve una comprensión clara del espacio problemático y las necesidades del usuario, comencé a esbozar diseños potenciales para la aplicación. Estos bocetos me ayudaron a explorar diferentes ideas y conceptos, y a obtener comentarios de las partes interesadas.</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Ant Design como sistema de diseño
          </h3>
          <p className="leading-relaxed">
          Para la realización de este proyecto se trabajó bajo el sistema de diseño <span className="font-bold text-[#1a1a1a]">Ant Design.</span> Este Sistema de Diseño agilizó la implementación con el equipo de desarrollo gracias a sus bibliotecas de Componentes React UI de gran calidad. Además aceleró la etapa de ideación de los wireframes de alta fidelidad ya que se pudo experimentar con componentes existentes.</p>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Los Prototipos</h2>
          <p className="leading-relaxed">
          Una vez que tuve una idea aproximada del diseño, comencé a crear prototipos que mostraban el diseño y la estructura básica de cada pantalla. Estos wireframes me ayudaron a refinar aún más el diseño y obtener comentarios de los usuarios finales.</p>
          <p className="leading-relaxed">
          Los wireframes mostraban el diseño más detallado de cada pantalla, incluido el color, la tipografía y otros elementos visuales propios de la marca de Plataforma ENARM. El prototipo permitió a las partes interesadas y a los usuarios interactuar con la aplicación y probar el diseño en un entorno más realista.</p>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Realización de sesiones de prueba de usuarios</h2>
          <p className="leading-relaxed">
          Uno de los pasos más importantes en mi proceso de diseño fue la prueba de usuario. Sin embargo, debido a la naturaleza remota de mi trabajo, realizar sesiones de prueba de usuarios en persona no era una opción. En lugar de eso, tuve que idear una forma de realizar sesiones de prueba de usuarios remotos que generaran hallazgos y comentarios valiosos.</p>
          <p className="leading-relaxed">
          Para probar el prototipo con los usuarios finales, realicé sesiones de prueba individuales de usabilidad. Primero, recluté participantes para las sesiones de prueba de usuarios. Me comuniqué con estudiantes que estaban activos en la plataforma.</p>
          <p className="leading-relaxed">
          A continuación, creé un plan de prueba y un guión que describían las tareas que quería que completaran los usuarios y las preguntas que quería hacerles. Me aseguré de mantener las tareas y preguntas lo más objetivas y específicas posible para minimizar el sesgo en la retroalimentación.</p>
          <p className="leading-relaxed">
          Para realizar las sesiones, utilicé una combinación de software de videoconferencia y herramientas para compartir pantalla. Mientras los usuarios compartían pantalla, yo solicitaba que completaran las tareas, observaba y hacía preguntas.</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Hallazgos
          </h3>
          <p className="leading-relaxed">
          En general, si bien realizar sesiones de prueba de usuarios remotas presentó algunos desafíos, como dificultades técnicas y dificultad para leer el lenguaje corporal y las expresiones faciales, pude adaptarme y crear un proceso que arrojó información valiosa de los usuarios. Esto me permitió crear una plataforma de aprendizaje optimizada para las necesidades de los estudiantes así como para el personal de soporte al cliente.</p>
          <p className="leading-relaxed">
          El resultado de las pruebas proporcionó información valiosa y recomendaciones para futuras mejoras, que se incorporaron al diseño del producto final.</p>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Diseño de producto final</h2>
          <p className="leading-relaxed">
          Después de algunas iteraciones y rondas de comentarios, la plataforma finalmente estuvo lista para su lanzamiento. El producto final incluyó todas las características y funcionalidades descritas en la documentación y la hoja de ruta del producto, así como un diseño optimizado para los estudiantes y personal de soporte al cliente. La plataforma era fácil de usar e intuitiva, lo que facilitaba a los usuarios encontrar y gestionar el denso contenido bajo un tiempo determinado.</p>
        </section>
       
        <ZoomImage src={enarmFinal1} alt="Enarm Final 1" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmFinal2} alt="Enarm Final 2" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmFinal3} alt="Enarm Final 3" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmFinal4} alt="Enarm Final 4" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmFinal5} alt="Enarm Final 5" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={enarmFinal6} alt="Enarm Final 6" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Registro de avance semiautomatizado</h2>
          <p className="leading-relaxed">
          El registro de avance permite al usuario conocer cuál ha sido su avance en un marco de tiempo. También le brinda la posibilidad de hacer cálculos sencillos para adaptar y personalizar su ritmo de aprendizaje.</p>
          <p className="leading-relaxed">
          En el caso particular de este proyecto, se introdujo una funcionalidad de registro de avance que se adaptó a los requerimientos técnicos y alcances en cuestiones de tiempo y recursos. Este sistema de registro se propuso como semiautomatizado porque requiere que el estudiante ingrese como completado un campo de un módulo checklist que, a su vez, comunica al estado global de la aplicación qué contenido se ha revisado hasta ese momento y, por ende, el avance obtenido.</p>
          <p className="leading-relaxed">
          Esta funcionalidad permite a los usuarios refinar su ritmo de estudio, adaptarse a posibles interrupciones o variables en el marco del tiempo, y también proporciona una sensación de progreso para fomentar el compromiso de terminar la tarea completamente.</p>

        </section>
       
        <ZoomImage src={enarmProgress} alt="Enarm Progress" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Simuladores y Retroalimentación</h2>
          <p className="leading-relaxed">
          Los simuladores permiten a los estudiantes tener una experiencia más cercana a la realidad de lo que vivirán al momento de realizar el examen ENARM. Las cualidades de este examen consisten en responder correctamente el mayor número de preguntas posibles bajo un tiempo estipulado. Los estudiantes, por ende, se encuentran trabajando bajo presión por lo que entre más se familiarice con simulaciones al hecho, más le será sencillo afrontar esta experiencia exitosamente.</p>
          <p className="leading-relaxed">
          Este proyecto contaba con un gran número de simuladores que, aunque en términos de contenido estaban bien estructurados, sí se trabajó en la optimización de las interacciones y en su interfaz, para que fuera más intuitiva y semejante a la experiencia real.</p>
          <p className="leading-relaxed">
          Cada simulador, y cada intento del estudiante en el simulador genera una retroalimentación. Aquí se propuso una funcionalidad de registro y digestión de intentos para que el estudiante pudiera comparar los resultados obtenidos a lo largo de sus intentos.</p>

        </section>
       
        <ZoomImage src={enarmSimulators} alt="Enarm Simulators" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Midiendo el éxito</h2>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Métricas clave
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Informe de mejora de la eficiencia:</span> Disminución del tiempo promedio de procesamiento y menor tasa de demanda de los estudiantes para apropiarse de la experiencia de la plataforma (onboarding).</li>
      <li><span className="font-bold text-[#1a1a1a]">Análisis de mejora de la productividad:</span> Reducción de tiempo en finalización de casos, lo que indica que la plataforma facilitó una gestión de dudas más rápida y eficiente.</li>
      <li><span className="font-bold text-[#1a1a1a]">Evaluación de la satisfacción del estudiante:</span> Incluye datos de encuestas de comentarios del usuario y Net Promoter Score (NPS), que demuestran mejores experiencias y satisfacción general con el proceso de aprendizaje.</li>
      <li><span className="font-bold text-[#1a1a1a]">Métricas de Evaluación de Impacto Financiero:</span> Reducción de costos por parte del equipo de soporte al cliente, mostrando la eficacia de la plataforma para maximizar los resultados financieros al disminuir las tareas 1:1 y fomentar automatizaciones.</li>
    </ul>

        </section>
       
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Pensamientos finales</h2>
          <p className="leading-relaxed">
          Estos resultados validan la eficacia de la plataforma para lograr los objetivos del proyecto y destacan su contribución al éxito general de los distintos esfuerzos de esta plataforma de aprendizaje.</p>
          <p className="leading-relaxed">
          Me enorgullece confirmar que a partir de una inversión en la experiencia centrada en el usuario, se puede combatir un objetivo de negocio con éxito, en donde por medio de una buena experiencia de usuario distintos agentes pueden realizar sus tareas y alcanzar sus metas de una forma más amena, amigable y flexible.</p>

        </section>

        {/* Bloque de NDA colocado justo al inicio del contenido */}
      <div className="my-12 p-6 sm:p-8 bg-[#e3e0cf] rounded-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl select-none" role="img" aria-label="Warning">
              ⚠️
            </span>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
              Spanish Version — English Available Upon Request
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              This case study is presented in Spanish, as it was originally developed for a Mexican client. However, an English version is available for international recruiters and teams.
              </p>
              <a 
            href="mailto:alura.gonzalez@gmail.com?subject=Requesting%20access%20to%20English%20Version%20ENARM%20Case%20Study" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3a7dc9] hover:text-[#2a5a8f] whitespace-nowrap transition-colors"
          >
            Request English version →
          </a>
            </div>
          </div>
        </div>

      </CaseStudyTemplate>
    );
  }
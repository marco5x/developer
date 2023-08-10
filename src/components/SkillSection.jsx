import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiAstro,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { Arrow } from "./Arrow";

export const SkillSection = () => {
  return (
    <div className="max-w-6xl mx-auto sm:py-12 pt-28 pb-12" id="tech">
      <p className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl dark:text-white ">
        Habilidades Técnicas
      </p>
      <div className="flex flex-wrap justify-center pt-6 sm:pt-2">
        <div
          className="skill-card"
          title="HTML no es un lenguaje de programación; es un lenguaje de marcado que define la estructura de tu contenido. HTML consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera "
        >
          <SiHtml5 color="#e06a46" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Html5</p>
        </div>
        <div
          className="skill-card"
          title="Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios"
        >
          <SiCss3 color="#2962ff" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Css3</p>
        </div>
        <div
          className="skill-card"
          title="Astro es el marco web todo en uno diseñado para la velocidad. Extraiga su contenido desde cualquier lugar e impleméntelo en todas partes, todo impulsado por sus componentes y bibliotecas de interfaz de usuario favoritos. Astro optimiza su sitio web como ningún otro marco puede. Aproveche la arquitectura frontend única de cero JS de Astro para desbloquear tasas de conversión más altas con un mejor SEO"
        >
          <SiAstro color="#272829" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Astro</p>
        </div>
        <div
          className="skill-card"
          title="JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrad"
        >
          <SiJavascript color="#e8d535" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-xl font-semibold text-center">
            Javascript (ES6)
          </p>
        </div>
        <div
          className="skill-card"
          title="Tailwind CSS es un framework CSS que proporciona una serie de utilidades de bajo nivel que nos permite crear diseños completamente personalizados en base a la composición de clases"
        >
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            TailwindCSS
          </p>
        </div>
        <div
          className="skill-card"
          title="ReactJS es una librería de JavaScript para crear interfaces de usuario con componentes reutilizables. Fue creada por Facebook y es mantenida por la comunidad de software libre. React no es un framework completo, sino que se puede usar con otras bibliotecas para desarrollar aplicaciones web o móviles."
        >
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            React (Hooks)
          </p>
        </div>
        <div
          className="skill-card"
          title="El marco de ReactJs recomendado para la web, utilizado por algunas de las empresas más grandes del mundo; le permite crear aplicaciones web de pila completa al ampliar las últimas funciones de React e integrar potentes herramientas de JavaScript basadas en Rust para las compilaciones más rápidas"
        >
          <SiNextdotjs color="#272829" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">NextJs</p>
        </div>
        <div
          className="skill-card"
          title="Un contenedor de estado predecible para aplicaciones JavaScript. Sencillo, obstinado, poderoso y eficaz"
        >
          <SiRedux color="#7a4ac0" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            Redux (Toolkit)
          </p>
        </div>
        <div
          className="skill-card"
          title="Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome."
        >
          <FaNodeJs color="#026e00" className="mx-auto text-4xl" />{" "}
          <p className="mt-6 sm:text-2xl font-semibold text-center">NodeJs</p>
        </div>
        <div
          className="skill-card"
          title="Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles"
        >
          <SiExpress color="#259dff" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            ExpressJs
          </p>
        </div>
        <div
          className="skill-card"
          title="Firebase es una plataforma de desarrollo de apps que te ayuda a compilar y desarrollar las apps y los juegos que les encantan a los usuarios. Con el respaldo de Google y la confianza de millones de empresas de todo el mundo"
        >
          <SiFirebase color="#ffcb2f" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Firebase</p>
        </div>
        <div
          className="skill-card"
          title="La base de datos relacional de código abierto más avanzada y usada del mundo"
        >
          <SiPostgresql color="#336791" className="mx-auto text-4xl" />{" "}
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            PostgreSql (15)
          </p>
        </div>
      </div>
      <Arrow />
    </div>
  );
};

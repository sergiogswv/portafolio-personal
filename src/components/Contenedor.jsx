import Presentation from "./Presentation";
import Career from "./Career";
import Experience from "./Experience";
import Skills from "./Skills";

const Contenedor = ({ modo, contenido }) => {
  return (
    <div className="w-full h-screen">
      {contenido === "skills" ? (
        <Skills modo={modo} />
      ) : contenido === "career" ? (
        <Career modo={modo} />
      ) : contenido === "experience" ? (
        <Experience modo={modo} />
      ) : (
        <Presentation modo={modo} />
      )}
    </div>
  );
};

export default Contenedor;

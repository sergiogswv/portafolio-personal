import SkillsImage from "../img/skills.png";
import Objectives from "../img/objetives.png";

const Skills = ({ modo }) => {
  return (
    <>
      {/**titulo */}
      <h1
        className={`${
          modo ? "text-gray-500" : "text-yellow-300"
        } text-4xl font-bold text-center pt-10`}
      >
        Objetivos y Habilidades
      </h1>
      <div className="w-96 h-6 md:w-3/5 bg-purple-400 mt-2 mb-2 rounded-r-lg"></div>
      {/**Contenido interno */}
      <div className="md:flex md:justify-between">
        <div
          className={`md:w-11/12 rounded-3xl shadow-gray-700 shadow-md m-10 ${
            modo ? "bg-white" : "bg-amber-500"
          }`}
        >
          <div className="pb-2 w-9/12 md:flex md:justify-between text-left">
            <p
              className={`absolute md:relative p-5 text-xl md:text-2xl font-black md:font-bold md:p-10 ${
                modo ? "text-gray-500" : "text-black"
              }`}
            >
              Aspiro a desarrollar mis aptitudes en una gran empresa de renombre
              asi como ambiciono extender mis competencias en el área que me
              apasiona
            </p>
          </div>
          <img
            src={Objectives}
            alt="Objetivos"
            className="relative opacity-30 md:opacity-100"
          />
        </div>

        <div
          className={`md:w-11/12 rounded-3xl shadow-gray-700 shadow-md m-10 ${
            modo ? "bg-white" : "bg-amber-500"
          }`}
        >
          <div className="pb-2 w-11/12 md:flex md:justify-between">
            <ol
              className={`absolute md:relative p-5 text-xl md:text-2xl font-bold md:p-6 ${
                modo ? "text-gray-500" : "text-black"
              }`}
            >
              <li>Trabajo en Equipo</li>
              <li>Confianza</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Capacidad de actualizar los conocimientos</li>
              <li>Capacidad de análisis</li>
            </ol>
          </div>
          <img
            src={SkillsImage}
            alt="Habilidades"
            className="relative opacity-30 md:opacity-100"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;

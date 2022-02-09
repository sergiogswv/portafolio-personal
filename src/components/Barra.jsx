import Home from "../img/home-img.svg";
import School from "../img/school-img.svg";
import Work from "../img/work-img.svg";
import Objective from "../img/obj-img.svg";

import Light from "../img/light-img.svg";
import Dark from "../img/dark-img.svg";

const Barra = ({ contenido, setContenido, modo, setModo }) => {
  return (
    <div className="flex justify-between md:block rounded-b-xl h-20 bg-purple-400 md:min-h-screen md:rounded-xl md:-ml-5 md:p-10">
      <div className="flex gap-8 ml-11 pt-5 md:h-5/6 md:pt-40 md:grid md:grid-rows-5 md:relative md:ml-5">
        <div
          className={`rounded-3xl w-12 h-12 cursor-pointer hover:bg-purple-300 ${
            contenido === "presentation" ? "bg-purple-600" : "bg-purple-400"
          }  `}
        >
          <img
            src={Home}
            alt="Home"
            className="w-16 hover:opacity-80"
            onClick={() => setContenido("presentation")}
          />
        </div>
        <div
          className={`rounded-3xl w-12 h-12 cursor-pointer hover:bg-purple-300 ${
            contenido === "career" ? "bg-purple-600" : "bg-purple-400"
          }  `}
        >
          <img
            src={School}
            alt="School"
            className="w-16 hover:opacity-80"
            onClick={() => setContenido("career")}
          />
        </div>
        <div
          className={`rounded-3xl w-12 h-12 cursor-pointer hover:bg-purple-300 ${
            contenido === "experience" ? "bg-purple-600" : "bg-purple-400"
          }  `}
        >
          <img
            src={Work}
            alt="Work"
            className="w-16 hover:opacity-80"
            onClick={() => setContenido("experience")}
          />
        </div>
        <div
          className={`rounded-3xl w-12 h-12 cursor-pointer hover:bg-purple-300 ${
            contenido === "skills" ? "bg-purple-600" : "bg-purple-400"
          }  `}
        >
          <img
            src={Objective}
            alt="Objective"
            className="w-16 hover:opacity-80"
            onClick={() => setContenido("skills")}
          />
        </div>
      </div>

      <div className=" mr-6 pt-6 md:w-1/6 md:pt-16">
        <div className="w-8 h-8 cursor-pointer md:absolute md:ml-7">
          <img
            src={modo ? Light : Dark}
            alt="Home"
            className="w-24 hover:opacity-75"
            onClick={() => setModo(!modo)}
          />
        </div>
      </div>
    </div>
  );
};

export default Barra;

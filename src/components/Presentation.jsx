import Code from "../img/code-img.png";
import Git from "../img/git-img.png";
import GitDark from "../img/git2-img.png";
import Hex from "../img/hex-img.png";

const Presentation = ({ modo }) => {
  return (
    <div className="w-full md:items-center md:flex md:justify-between ">
      {/**imagen mia */}
      <div className="pt-5 md:w-1/2 md:pt-40 grid justify-items-center">
        <img src={Hex} alt="Hex" className="w-4/6 object-cover " />
      </div>

      {/**Contenido descripcion */}
      <div className="pt-5 md:w-1/2 md:pt-28">
        <h1
          className={`${
            modo ? "text-gray-500" : "text-yellow-300"
          } text-2xl text-center md:text-left md:text-4xl lg:text-6xl font-bold`}
        >
          Hola. Soy Desarrollador Web y Analista de IT
        </h1>

        {/**linea divisora */}
        <div className=" rounded-r-md  md:rounded-none w-96 h-6 bg-purple-400 mt-2 mb-2"></div>

        {/**Saludo */}
        <div className={`${modo ? "text-black" : "text-white"}`}>
          <h4 className="text-xl text-center md:text-left md:text-2xl lg:text-4xl pt-10">
            Me llamo Sergio y este es mi Portafolio Web
          </h4>
          <h3 className="text-xl text-center md:text-left md:text-2xl lg:text-4xl  pt-5">
            Bienvenido(a)!
          </h3>

          <div className="grid grid-cols-2 pt-10 justify-items-center ">
            <img src={Code} alt="Code" className="w-20 lg:w-24" />

            {modo ? (
              <img
                src={Git}
                alt="Git"
                className="w-20 lg:w-24 cursor-pointer"
              />
            ) : (
              <img
                src={GitDark}
                alt="Git"
                className="w-20 lg:w-24 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

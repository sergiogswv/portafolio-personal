import React from "react";

const Experience = ({ modo }) => {
  return (
    <>
      {/**titulo */}
      <h1
        className={`${
          modo ? "text-gray-500" : "text-yellow-300"
        } text-4xl font-bold text-center pt-10`}
      >
        Experiencia Laboral
      </h1>
      {/**linea divisoria */}
      <div className="w-96 h-6 md:w-3/5 bg-purple-400 mt-2 mb-2 rounded-r-lg"></div>

      {/**Contenido */}
      <div className="md:grid md:grid-cols-3 md:gap-3 m-3 justify-between md:pt-20 pt-5">
        {/**tres columnas */}
        {/**1 */}
        <div
          className={`md:w-10/12 rounded-3xl shadow-gray-700 shadow-md ${
            modo ? "bg-white" : "bg-amber-500"
          }`}
        >
          <div className="md:pt-10 pl-5 md:h-32">
            {/**titulo contenido */}
            <h3
              className={`font-black md:text-xl text-3xl ${
                modo ? "text-black" : "text-white"
              }`}
            >
              Compañia de Procesamiento Mexicana
            </h3>
            <p className={`text-xs ${modo ? "text-black" : "text-white"}`}>
              (2014-2016)
            </p>
          </div>
          {/**Contenido interno */}
          <div className="pt-5 md:pt-10 pl-5 w-11/12">
            <ol
              className={`text-xl md:font-bold md:mb-10 ${
                modo ? "text-gray-500 " : "text-black"
              }`}
            >
              <li className="mb-1">
                Data Stage (Generacion y procesamiento de archivos)
              </li>
              <li className="mb-1">Soporte Técnico</li>
            </ol>
          </div>
        </div>

        {/**2 */}

        <div
          className={`md:w-10/12 rounded-3xl shadow-gray-700 shadow-md ${
            modo ? "bg-white" : "bg-amber-500"
          }`}
        >
          <div className="md:pt-10 pl-5 md:h-32">
            {/**titulo contenido */}
            <h3
              className={`font-black md:text-xl text-3xl ${
                modo ? "text-black" : "text-white"
              }`}
            >
              Escuela Libre de Homeopatía de México
            </h3>
            <p className={`text-xs ${modo ? "text-black" : "text-white"}`}>
              (2016-2019)
            </p>
          </div>
          {/**Contenido interno */}
          <div className="pt-5 md:pt-10 pl-5 w-11/12">
            <ol
              className={`text-xl md:font-bold md:mb-10 ${
                modo ? "text-gray-500 " : "text-black"
              }`}
            >
              <li className="mb-1">
                Encargado del área de Sistema (Creación y Actualización de
                Pag.Web, Soporte técnico, Cableado)
              </li>
            </ol>
          </div>
        </div>

        <div
          className={`md:w-10/12 rounded-3xl shadow-gray-700 shadow-md ${
            modo ? "bg-white" : "bg-amber-500"
          }`}
        >
          <div className="md:pt-10 pl-5 md:h-32">
            {/**titulo contenido */}
            <h3
              className={`text-6xl font-black md:text-4xl ${
                modo ? "text-black" : "text-white"
              }`}
            >
              Nadro
            </h3>
            <p className={`text-xs ${modo ? "text-black" : "text-white"}`}>
              (2019-Actual)
            </p>
          </div>
          {/**Contenido interno */}
          <div className="pt-5 md:pt-10 pl-5 w-11/12">
            <ol
              className={`text-xl md:font-bold md:mb-10 ${
                modo ? "text-gray-500 " : "text-black"
              }`}
            >
              <li className="mb-">
                Analista de IT (Analista de datos, Integraciones a WS con nuevos
                clientes, Conciliaciones con Autoservicios, etc)
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/**columna independiente */}
      <div
        className={`md:w-11/12 md:rounded-3xl shadow-gray-700 shadow-md md:m-10 ${
          modo ? "bg-white" : "bg-amber-500"
        }`}
      >
        <div className="pl-5">
          <h3
            className={`font-black text-4xl ${
              modo ? "text-black" : "text-white"
            }`}
          >
            Trabajo de Freelance:
          </h3>
        </div>
        <div className=" pl-5 pb-2 w-11/12 md:flex md:justify-between">
          <a href="http://escuelalibredehomeopatia.com.mx">
            <p
              className={`font-bold ${modo ? "text-gray-500 " : "text-black"}`}
            >
              escuelalibredehomeopatia.com.mx (React - Gatsby / DatoCMS)
            </p>
          </a>
          <p className="font-bold">(2020)</p>
        </div>
      </div>
    </>
  );
};

export default Experience;

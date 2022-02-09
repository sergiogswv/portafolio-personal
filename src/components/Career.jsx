import CodeReact from "../img/react-img.png";
import CodeSQL from "../img/sql-img.png";
import Office from "../img/office-img.png";
import Graphql from "../img/graphql-img.png";
import Laptop from "../img/lap-img.jpg";

const Career = ({ modo }) => {
  return (
    <>
      {/**titulo */}
      <h1
        className={`${
          modo ? "text-gray-500" : "text-yellow-300"
        } text-4xl font-bold text-center pt-10`}
      >
        Universidad Nacional Autonoma de México
      </h1>

      {/**linea divisoria */}
      <div className="w-96 h-6 md:w-3/5 bg-purple-400 mt-2 mb-2 rounded-r-lg"></div>
      {/**Contenido */}

      <div className="block w-full pt-10 md:flex md:justify-between md:pt-20">
        {/**laptop */}
        <div className="md:w-1/2 md:grid md:justify-items-center">
          <img
            src={Laptop}
            alt="Hex"
            className="md:w-3/4 md:h-5/6 md:object-cover rounded-3xl"
          />
        </div>
        {/**Conocimientos */}
        <div className="md:w-1/2">
          <h4
            className={`text-xl md:text-2xl ${
              modo ? "text-black" : "text-white"
            }`}
          >
            Carrera: Ingeniería en Computación 2012-2019
          </h4>
          <h2
            className={`${
              modo ? "text-gray-500" : "text-yellow-300"
            } text-gray-400 text-4xl font-bold pt-5 md:text-left text-center`}
          >
            Conocimientos
          </h2>

          <div
            className={`pt-2 justify-items-center ${
              modo ? "text-black" : "text-white"
            }`}
          >
            <div className="flex justify-start mt-5">
              <img src={CodeReact} alt="CodeReact" className="w-10 h-10" />
              <p className="text-3xl ml-2">React (Gatsby/DatoCMS)</p>
            </div>
            <div className="flex justify-start mt-5">
              <img src={CodeSQL} alt="CodeSQL" className="w-10 h-10 " />
              <p className="text-3xl ml-2">SQL</p>
            </div>
            <div className="flex justify-start mt-5">
              <img src={Office} alt="Office" className="w-10 h-10 " />
              <p className="text-3xl ml-2">Office</p>
            </div>
            <div className="flex justify-start mt-5">
              <img src={Graphql} alt="Graphql" className="w-10 h-10 " />
              <p className="text-3xl ml-2">Graphql</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

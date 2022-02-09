import { useState } from "react";

import Barra from "./Barra";
import Contenedor from "./Contenedor";

const Layout = () => {
  const [modo, setModo] = useState(true);
  const [contenido, setContenido] = useState("presentation");

  return (
    <div
      className={`block w-full md:flex md:justify-start ${
        modo ? "bg-gray-50" : "bg-black"
      } `}
    >
      <Barra
        contenido={contenido}
        setContenido={setContenido}
        modo={modo}
        setModo={setModo}
      />
      <Contenedor contenido={contenido} modo={modo} />
    </div>
  );
};

export default Layout;

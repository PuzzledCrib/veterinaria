import React from "react";
import Encabezado from "./Encabezado";
import AgregarCita from "./AgregarCita";
import ListaCita from "./ListaCita";

import Provider from "./Provider";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Encabezado title="Veterinary" />
          <div className="row">
            <div className="col">
              <AgregarCita />
            </div>
            <div className="col">
              <ListaCita />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import Cita from "./Cita";
import Context from "./Context";

const ListaCita = () => {
  return (
    <Context.Consumer>
      {({citas, addCita, removeCita}) => {
        return (
          <div className="card">
            <div className="card-body">
              <div className="form-inline  col-sm d-flex p-2  justify-content-center align-items-center">
                <h5>MANAGE APOINTMENTS</h5>
              </div>
              <ul className="list-group">
                {citas.length > 0 ? (
                  citas.map((cita) => {
                    return (
                      <Cita key={cita.id} cita={cita}/>
                    );
                  })
                ) : (
                  <li className="list-group-item border-0">
                    <p>There aren't appointments</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default ListaCita;

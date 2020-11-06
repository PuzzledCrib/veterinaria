import React from "react";
import Context from "./Context";

const Cita = (props) => {
  const {
    id,
    inputPetName,
    inputOwnerName,
    inputDate,
    inputTime,
    inputSymptoms,
  } = props.cita;

  return (
    <Context.Consumer>
        {/* Es lo mismo que decir context.removeCita */}
      {({removeCita}) => {
        return (
          <li className="list-group-item border-0">
            <h5>
              <p className="my-1">{inputPetName}</p>
            </h5>
            <p className="my-1">Owner: {inputOwnerName}</p>
            <p className="my-1">Date: {inputDate}</p>
            <p className="my-1">Time: {inputTime}</p>
            <p className="my-1">Symptoms: {inputSymptoms}</p>
            <button
              type="button"
              onClick={() => removeCita(id)}
              className="btn btn-remove m-3"
            >
              REMOVE
            </button>
          </li>
        );
      }}
    </Context.Consumer>
  );
};

export default Cita;

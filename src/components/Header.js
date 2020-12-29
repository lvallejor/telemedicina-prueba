import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row card bg-transparent mb-5 pt-5 pb-5">
          <input
            className="mx-3"
            type="text"
            className="form-control"
            placeholder="Buscar un medicamento"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Header;

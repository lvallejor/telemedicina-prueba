import React from "react";

const FarmaciasNoticias = () => {
  return (
    <div className="container my-3 ml-3">
      <div className="row">
        <div className="card farmanoticia">
          <div className="col-6 ">
            <p>Farmacias cercanas</p>
          </div>
        </div>

        <div className="card farmanoticia">
          <div className="col-6 ">
            <p>Noticias</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmaciasNoticias;

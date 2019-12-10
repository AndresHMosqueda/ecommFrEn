import React, { Fragment } from 'react';


function Galery(props) {
    return (
        <div>
            <Fragment>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-12 div-pic-1 puntero">
                                    <p className="pic-titulo">  Hola </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm6 div-pic-2 puntero">
                                    <p className="pic-titulo"> Hola </p>
                                </div>
                                <div className="col-sm6 div-pic-2 puntero">
                                    <p className="pic-titulo">Hola  </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm6 div-pic-2 puntero">
                                    <p className="pic-titulo">Hola  </p>
                                </div>
                                <div className="col-sm6 div-pic-2 puntero">
                                    <p className="pic-titulo">Hola  </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 div-pic-1 puntero" >
                                    <p className="pic-titulo">Hola  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        </div>
    );
}

export default Galery;
import React, { Fragment } from 'react';


function Galery(props) {
    return (
        <div className="mb-5">
            <Fragment>
                <div className="container">
                    <h2 className="text-info mb-4"> Savings for everyone</h2>
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="row">
                                <div className="col-md-12 div-pic-1 p-0 puntero">

                                    <img width="555" height="300" alt="Image1" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/09/xbox-one-s-all-digital.png?itok=SYGSepLg" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 div-pic-1 p-0 puntero" >
                                    <img width="555" height="300" alt="Image2" src="https://q-cf.bstatic.com/images/hotel/max1280x900/689/68923620.jpg" />
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-12 div-pic-1 p-0  puntero" >
                                    <img width="555" height="300" alt="Image3" src="https://www.korkys.ie/Content/Images/uploaded/Blog%20Images/Korky's%20Black%20Boot%20Heels.jpg" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 div-pic-1 p-0  puntero" >
                                    <img width="555" height="300" alt="Image4" src="https://cdn.pixabay.com/photo/2019/01/24/11/43/christmas-3952345_960_720.jpg" />
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
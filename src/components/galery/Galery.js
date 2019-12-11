import React, { Fragment } from 'react';


function Galery(props) {
    return (
        <div className="mb-5">
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="row">
                                <div className="col-md-12 div-pic-1 p-0 puntero">
                                    
                                    <img width="555" height="300" alt="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzkM2orBXWvf7e2BqSPfZVu4foIj08jPkDpoLz7-bLlWmuI7A&s" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm6 div-pic-2 puntero">
                                {/* <img width="555" height="200" alt="Image" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxb-y5FNMyQlt1Fv7siPPnuRNh4KrVs4RVhqgOqb_yXWOuZnjOZxYtLRrld-uqygTN7HX0nx5aPg4eZIWxqMhKSfc3r73zqiUT_m_UDLlrabPxJIm4Q4sbfQ&usqp=CAE" /> */}
                                </div>
                                <div className="col-sm6 div-pic-2 puntero">
                                {/* <img width="555" height="200" alt="Image" src="https://cdn.pixabay.com/photo/2019/01/24/11/43/christmas-3952345_960_720.jpg" /> */}
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm6 div-pic-2 puntero">
                                {/* <img width="555" height="200" alt="Image" src="https://cdn.pixabay.com/photo/2019/01/24/11/43/christmas-3952345_960_720.jpg" /> */}
                                </div>
                                <div className="col-sm6 div-pic-2 puntero">
                                {/* <img width="555" height="200" alt="Image" src="https://target.scene7.com/is/image/Target/GUEST_cc020cbe-00c6-49ed-858f-40b0e6c0ebdf?wid=325&hei=325&qlt=80&fmt=webp" /> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 div-pic-1 puntero" >
                                <img width="535" height="300" alt="Image" src="https://cdn.pixabay.com/photo/2019/01/24/11/43/christmas-3952345_960_720.jpg" />
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
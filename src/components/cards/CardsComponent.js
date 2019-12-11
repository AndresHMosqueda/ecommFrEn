import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function CardsComponent({ info }) {

    console.log('La informacion', info)
    if (info.length === 0) return null;

    // {`info[0].images[0].${base-url}/${primary}`}
    return (
        <Fragment>

                    
                    <div className="col-4 mb-3">
                        <div className="card">
                            <img src="{`info.images[0].base-url.primary`}" className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title"> {info.title}</h5>
                                <p className="card-text">{info.description}</p>
                                <p><span>Regular price: ${info.list_price.price}  </span></p>
                                <p><span>Sale ${info.offer_price.price}  </span></p>
                                <p className="card-text">{info.availability_status}</p>
                                <Link to="/productDetail">
                                    <button className="btn btn-outline-primary mt-2 mb-2">View Product</button>
                                </Link>
                                <button className="btn btn-outline-info right-align mt-2 ml-3 mb-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                

        </Fragment>
    );
}

export default CardsComponent;
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import addItem from '../../helpers/cartHelper';

function CardsComponent({ info }) {

    const [redirect, setRedirect] = useState(false)

    if (info.length === 0) return null;

    let img = `${info.images[0].base_url}${info.images[0].primary} `;

    const handleAddButton = () => {
        addItem(info, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />
        }
    }

    return (

        <Fragment>
            <div className="container col-sm-3 col-md-4 mb-5">

                <div className="card">
                    {shouldRedirect(redirect)}
                    <img src={img} className="card-img-top" width="190" height="250" alt="Image1" />
                    <div className="card-body">
                        <h5 className="card-title"> {info.title}</h5>
                        <p className="card-text">{info.description}</p>
                        <p><span className="badge badge-primary">Regular price: ${info.list_price.price}  </span></p>
                        <p><span className="badge badge-danger">Sale ${info.offer_price.price}  </span></p>
                        <p className="card-text">{info.availability_status}</p>
                        <Link to={`/productDetail/${info.representative_child_part_number}`}>
                            <button className="btn btn-outline-primary mt-2 mb-2">View Product</button>
                        </Link>
                        <button onClick={handleAddButton} className="btn btn-outline-info right-align mt-2 ml-3 mb-2">Add to Cart</button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default CardsComponent;
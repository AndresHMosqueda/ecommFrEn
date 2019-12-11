import React, { useState, useEffect, Fragment } from 'react';
import { getCart } from '../../helpers/cartHelper';
import { Link } from 'react-router-dom';


function CartComponent() {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getCart())
    }, [])

    const showItems = items => {
        return (
            <div className="container  ">
                <h2 className="text-success">Your cart has {`${items.length}`} items</h2>
                <hr />
                {/* {items.map((info, i) => (<CardCartComponent key={i} info={info} />))} */}
            </div>
        )
    }

    const noItemsMessage = () => (
        <h2>Your cart is empty. <hr/>  <Link to="/"> Continue Shopping </Link>
        </h2>
    )

    return (
        <Fragment>
            <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>
            </div>
        </Fragment>
    );
}

export default CartComponent;
import React, { Fragment } from 'react';
import Galery from '../galery/Galery';
import CardsComponent from '../cards/CardsComponent';

function homeComponent(props) {

   

    return (
        <Fragment>
            <div className="container">
                <Galery />
                <CardsComponent />
            </div>
        </Fragment>
    );
}

export default homeComponent;
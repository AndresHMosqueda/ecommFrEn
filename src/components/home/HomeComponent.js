import React, { Fragment } from 'react';
import Galery from '../galery/Galery';
import RequestAPI from '../../helpers/requestAPI';

function homeComponent(props) {

   

    return (
        <Fragment>
            <div className="container">
                <Galery />
                <RequestAPI/>
            </div>
        </Fragment>
    );
}

export default homeComponent;
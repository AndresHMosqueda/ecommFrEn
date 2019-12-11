import React, { Fragment } from 'react';

function Jumbotron() {
    return (
        <Fragment>
            <div className="jumbotron text-center rounded bg-danger text-white bg-gradient-danger margin-top-5 container">
                <h1 className="display-4">Get yours gifts in time for Christmas!</h1>
                <h4>Oder by December 13 with standard shipping.</h4>
                <h4>Order by December 15 with express shipping.</h4>
            </div>
        </Fragment>
    );
}

export default Jumbotron;
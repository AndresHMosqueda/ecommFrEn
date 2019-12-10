import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchProductComponent from '../searchProduct/SearchProductComponent';

function Navbar(props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item is-active">
                            <Link to="/" className="nav-link">Home<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item is-active">
                            <Link to="/productDetail" className="nav-link" >ProductDetail<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    <SearchProductComponent/>
                </div>
            </nav>
        </Fragment>
    );
}

export default withRouter(Navbar);
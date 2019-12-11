import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import homeComponent from '../components/home/HomeComponent';
import Navbar from '../components/navbar/Navbar'
import Jumbotron from '../components/jumbotron/Jumbotron';
import Footer from '../components/footer/Footer';
import CartComponent from '../components/cart/CartComponent';


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Jumbotron/>
            <Switch>
                
                <Route path="/" exact component={homeComponent} />
                <Route path="/cart" exact component={CartComponent} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;
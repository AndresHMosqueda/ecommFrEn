import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import productDetail from '../components/product/ProductDetail'
import homeComponent from '../components/home/HomeComponent';
import Navbar from '../components/navbar/Navbar'
import Jumbotron from '../components/jumbotron/Jumbotron';
import Footer from '../components/footer/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Jumbotron/>
            <Switch>
                <Route path="/productDetail" exact component={productDetail} />
                <Route path="/" exact component={homeComponent} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;
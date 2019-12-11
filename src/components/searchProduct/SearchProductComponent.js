import React, { useState } from 'react';
import Axios from 'axios';
import {BASE_URL} from '../../index'

function SearchProductComponent(props) {

    const [searchPr, addSearchPr] = useState({
        product: ''
    })

    const handleState = e => {
        addSearchPr({
            ...searchPr,
            [e.target.name]: e.target.value
        })
    }

    //Request products from API
    const getAPIProducts = async searchPr => {

        console.log(searchPr);
        const url = `${BASE_URL}`;
        const result = await Axios(url)
        addSearchPr(result.data.search_response.items.Item)

    }

    const handleSubmit = e => {

        e.preventDefault()
        getAPIProducts(searchPr)

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" name="product" onChange={handleState} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchProductComponent;
import React, { useState, useEffect } from 'react';
import {BASE_URL} from '../index'

import Axios from 'axios';
import CardsComponent from '../components/cards/CardsComponent';

function RequestAPI(props) {

    const [info, addInfo] = useState([])

    //Request products from API
    const getAPI = async () => {
        const url = `${BASE_URL}`
        const result = await Axios(url)
        addInfo(result.data.search_response.items.Item)
    }
    useEffect(() => { getAPI() }, []
    )

    return (
        <div className="container-fluid">
            <h2 className="mb-4 text-success"> Best Sellers </h2>
            <div className="row">
                {info.map((info, index) => (
                    <CardsComponent colNum="col-md-4 col-xs-6" key={index} info={info} />
                ))}
            </div>

        </div>
    );
}

export default RequestAPI;
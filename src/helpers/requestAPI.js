import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import CardsComponent from '../components/cards/CardsComponent';

function RequestAPI(props) {

    const [info, addInfo] = useState([])

    //Request products from API
    const getAPI = async () => {
        const url = 'http://localhost:8000/api'

        const result = await Axios(url)

        addInfo(result.data.search_response.items.Item)
    }

    useEffect(() => { getAPI() }, []
    )


    return (
        <div className="container-fluid">
            <h2 className="mb-4"> Best Sellers </h2>
            <div className="row">
                {info.map((info, index) => (
                    <CardsComponent colNum="col-md-4 col-xs-6" key={index} info={info} />
                ))}
            </div>

        </div>
    );
}

export default RequestAPI;
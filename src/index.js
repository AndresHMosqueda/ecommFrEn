import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/Routes';

export const BASE_URL = 'https://deploy.andreshm94.now.sh/api/hello'


ReactDOM.render(<Routes />, document.getElementById('root'));

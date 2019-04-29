import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Cuerpo from './components/cuerpo/cuerpo';


const Root = (
    <Provider store={store}>
        <Cuerpo>
        </Cuerpo>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

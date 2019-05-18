import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
if(module.hot){
    module.hot.accept('./App',()=> {
        const NextApp = require('./App').default
        ReactDOM.render(
        <Provider store={store}>
            <NextApp/>
        </Provider>,document.getElementById('root'))
    })
}


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import rrfConfig from './config/rrfConfig'

// extra arguments so that in postActions we can add the getFirebase and getFirestore in the return argument
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(
            thunk.withExtraArgument({getFirebase, getFirestore})
        ),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, rrfConfig)
    )
)

// Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

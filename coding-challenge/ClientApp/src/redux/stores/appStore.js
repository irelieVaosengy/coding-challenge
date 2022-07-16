import { configureStore } from '@reduxjs/toolkit'
import appReducer from "../reducers/appReducer";
import logger from 'redux-logger'

const reducer = {
    appReducer: appReducer
}

const preloadedState = {
    technologies: [],
    awesomeNinja: {},
    searchKeyWords: ''
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})
export default store

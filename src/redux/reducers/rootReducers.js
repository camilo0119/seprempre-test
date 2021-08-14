import {combineReducers} from 'redux';
import { loadingReducer } from './loadingReducer';

export const rootReducers = combineReducers({
    ui: loadingReducer
})
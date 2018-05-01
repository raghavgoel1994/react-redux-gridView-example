import { combineReducers } from 'redux';
import imagereducer from './imageReducers';

const allReducers = combineReducers({
    imagereducers: imagereducer
});
export default allReducers;
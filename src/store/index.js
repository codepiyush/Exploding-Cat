import { createStore } from 'redux';
import myreducer from '../reducer/reducer'
console.log(myreducer)
const store = createStore(myreducer);
export default store;

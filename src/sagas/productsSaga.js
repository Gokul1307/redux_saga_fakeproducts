import {takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";

//this saga/generator function watches for the trigger of the action mentioned 
export default function* productsSaga(){
    yield takeLatest("API_CALL_REQUEST_PRODUCTS", productsWorkerSaga);
}

//api call
function fetchProduct(){
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/products/1"
    });
}


//once the above trigger happens this below gen function gets triggered
function* productsWorkerSaga(){
    try{
        const response = yield(call(fetchProduct));
        const products = response.data.title;

        //dispatch an event that says we got a success response

        yield put({type: "API_CALL_RECIEVE_PRODUCTS", products})
    }

    catch(error){yield put({type: "API_CALL_FAILURE", error})}
    
}
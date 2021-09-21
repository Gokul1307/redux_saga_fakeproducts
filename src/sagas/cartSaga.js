import {takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";

//this saga/generator function watches for the trigger of the action mentioned 
export default function* cartSaga(){
    yield takeLatest("API_CALL_REQUEST_CART", cartWorkerSaga);
}

//api call
function fetchCart(){
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/carts/1"
    });
}


//once the above trigger happens this below gen function gets triggered
function* cartWorkerSaga(){
    try{
        const response = yield(call(fetchCart))
        const cart = JSON.stringify(response.data)

        //dispatch an event that says we got a success response

        yield put({type: "API_CALL_RECIEVE_CART", cart})
    }

    catch(error){yield put({type: "API_CALL_FAILURE", error})}
    
}
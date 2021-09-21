import {takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";

//this saga/generator function watches for the trigger of the action mentioned 
export default function* tokenSaga(){
    yield takeLatest("API_CALL_REQUEST_TOKEN", tokenWorkerSaga);
}

//api call
function fetchToken(){
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}


//once the above trigger happens this below generator function gets triggered
function* tokenWorkerSaga(){
    try{
        const response = yield(call(fetchToken))
        const token = response.data.message;

        //dispatch an event that says we got a success response

        yield put({type: "API_CALL_RECIEVE_TOKEN", token})
    }

    catch(error){yield put({type: "API_CALL_FAILURE", error})}
    
}
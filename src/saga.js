import {takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";

//this saga/generator function watches for the trigger of the action mentioned 
export default function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

//api call
function fetchDog(){
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}


//once the above trigger happens this below gen function gets triggered
function* workerSaga(){
    try{
        const response = yield(call(fetchDog))
        const dog = response.data.message;

        //dispatch an event that says we got a success response

        yield put({type: "API_CALL_SUCCESS", dog})
    }

    catch(error){yield put({type: "API_CALL_FAILURE", error})}
    
}
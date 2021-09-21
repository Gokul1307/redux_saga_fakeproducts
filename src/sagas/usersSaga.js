import {takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";

//this saga/generator function watches for the trigger of the action mentioned 
export default function* userSaga(){
    yield takeLatest("API_CALL_REQUEST_USER", userWorkerSaga);
}

//api call
function fetchUser(){
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/users/1"
    });
}


//once the above trigger happens this below gen function gets triggered
function* userWorkerSaga(){
    try{
        const response = yield(call(fetchUser))
        const user = response.data.name.firstname;

        //dispatch an event that says we got a success response

        yield put({type: "API_CALL_RECIEVE_USER", user})
    }

    catch(error){yield put({type: "API_CALL_FAILURE", error})}
    
}
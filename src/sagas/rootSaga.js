import { all, fork } from "redux-saga/effects"
import productsSaga from './productsSaga';
import cartSaga from './cartSaga';
import usersSaga from './usersSaga';
import tokenSaga from './productsSaga';

export default function* rootSaga () {
    yield all([
        fork(productsSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(cartSaga),
        fork(usersSaga),
        fork(tokenSaga)
    ]);
}

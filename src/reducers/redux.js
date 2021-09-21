//product action types
import API_CALL_REQUEST_PRODUCTS from "../actions/productActions/apiCallRequestProducts";
import API_CALL_RECIEVE_PRODUCTS from "../actions/productActions/apiCallRecieveProducts";
//cart action types
import API_CALL_REQUEST_CART from "../actions/cartActions/apiCallRequestCart";
import API_CALL_RECIEVE_CART from "../actions/cartActions/apiCallRecieveCart";
//cart action types
import API_CALL_REQUEST_USER from "../actions/userActions/apiCallRequestUser";
import API_CALL_RECIEVE_USER from "../actions/userActions/apiCallRecieveUser";
//cart action types

//call failure action
import API_CALL_FAILURE from "../actions/apiCallFailure";

//INITIAL STATE OF THE APP

const initialState = {
    productfetching: false,
    cartfetching: false,
    userfetching: false,
    tokenfetching: false,
    products: null,
    cart: null,
    user: null,
    token: null,
    error: null
}

//reducer
export function reducer(state=initialState, action) {
    switch(action.type) {
        
        case API_CALL_REQUEST_PRODUCTS:
            return {...state, productfetching:true, error: null };
        case API_CALL_RECIEVE_PRODUCTS:
            return {...state, productfetching:false, products: action.products };

        case API_CALL_REQUEST_CART:
            return {...state, cartfetching:true, error: null };
        case API_CALL_RECIEVE_CART:
            return {...state, cartfetching:false, cart: action.cart };

        case API_CALL_REQUEST_USER:
            return {...state, userfetching:true, error: null };
        case API_CALL_RECIEVE_USER:
            return {...state, userfetching:false, user: action.user };

        case API_CALL_FAILURE:
            return {...state, fetching: false, dog: null, error: action.error};
        default:
            return state;
    }
}
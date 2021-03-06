import { combineReducers } from "redux";

const initialState = {

}

function web3(state = initialState, action) {

    switch (action.type) {

        case 'WEB3_LOADED':
            return { ...state, connection: action.connection }
        case 'WEB3_ACCOUNT_LOADED':
            return { ...state, account: action.account }
        default:
            return state
    }
}

function token(state = initialState, action) {

    switch (action.type) {
        case 'TOKEN_LOADED':
            return { ...state, contract: action.contract }
        default:
            return state
    }
}

function exchange(state = initialState, action) {

    switch (action.type) {
        case 'EXCHANGE_LOADED':
            return { ...state, contract: action.contract }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    web3,
    token,
    exchange
});

export default rootReducer
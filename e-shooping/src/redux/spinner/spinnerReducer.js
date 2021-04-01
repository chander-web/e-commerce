import { START_LOADING, STOP_LOADING } from "./spinnerType"

const intialState = {
    loaderStatus: false
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case START_LOADING:
            return { loaderStatus: true }
        case STOP_LOADING:
            return { loaderStatus: false }
        default: return state;
    }
}

export default reducer
import { START_LOADING, status, STOP_LOADING } from "./spinnerType"


export const startLoading = () => {
    return {
        type: START_LOADING,
        status: status.TRUE
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING,
        status: status.FALSE
    }
}
const INITIAL_STATE = {
    email_id : '',
    refreshTime: null,
    loading: false,
}

export default (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case 'EMAIL_ID':
            return { ...state, email_id: action.payload }
            case 'REFRESH_TIME':
            return { ...state, refreshTime: action.payload }
            case 'LOADING_INBOX ':
            return { ...state, loading: action.payload }
        default:
            return state
    }
}
const INITIAL_STATE = {
    email_id : '',
    refreshTime: false,
    getInboxFn : null
}

export default (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case 'EMAIL_ID':
            return { ...state, email_id: action.payload }
            case 'REFRESH_TIME':
            return { ...state, refreshTime: action.payload }
            case 'GET_INBOX_FN':
            return { ...state, getInboxFn: action.payload }
        default:
            return state
    }
}
const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNOUT_SUCESS':
            console.log('logout success')
            return {
                ...state,
                authError: null
            }     
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        default: 
            return state
    }
}

export default authReducer
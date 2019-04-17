const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            console.log('logout error')
            return {
                ...state,
                authError: 'Logout failed'
            }
        case 'SIGNOUT_SUCESS':
            console.log('logout success')
            return {
                ...state,
                authError: null
            }            
        default: 
            return state
    }
}

export default authReducer
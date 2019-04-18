const initState = {
    posts: [
    //     {id: 1, title: 'First Post', content: '', user: 'KJG'},
    //     {id: 2, title: 'Refactor', content: '', user: 'Kage'},
    //     {id: 3, title: 'Eat Ice Cream', content: '', user: 'Stranger'}
    ],
    postError: null
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST': 
            console.log(`created post`, action.post)
            return state
        case 'CREATE_POST_ERROR':
            console.log(`Create Post Error`, action.err)
            return {
                ...state,
                postError: action.err.message
            }
        default:
            return state
    }
}

export default postReducer
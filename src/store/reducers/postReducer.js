const initState = {
    posts: [
        {id: 1, title: 'First Post', user: 'KJG'},
        {id: 2, title: 'Refactor', user: 'Kage'},
        {id: 3, title: 'Eat Ice Cream', user: 'Stranger'}
    ]
}

const postReducer = (state = initState, action) => {
    return state
}

export default postReducer
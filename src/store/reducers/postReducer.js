const initState = {
    posts: [
        {id: 1, title: 'First Post', user: 'KJG'},
        {id: 2, title: 'Refactor', user: 'Kage'},
        {id: 3, title: 'Eat Ice Cream', user: 'Stranger'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST': 
            console.log(`created post`, action.post)
            break
        default:
            console.log('post reducer');
    }
    return state
}

export default postReducer
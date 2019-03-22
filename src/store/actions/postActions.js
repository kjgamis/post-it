export const createPost = (post) => {
    return (dispatch, getState) => {
        // make asyc call to database 
        dispatch({
            type: 'CREATE_POST',
            post
        })
    }
}
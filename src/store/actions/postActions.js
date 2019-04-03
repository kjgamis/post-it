export const createPost = (post) => {
    // dispatch is the function that dispatches an action to the reducer 
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyc call to database 
        dispatch({
            type: 'CREATE_POST',
            post
        }) 
    }
}
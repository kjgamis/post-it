export const createPost = (post) => {
    // dispatch is the function that dispatches an action to the reducer 
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyc call to database 
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        firestore.collection('posts').add({
            ...post,
            user:  `${profile.firstname} ${profile.lastname}`,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_POST',
                post
            }) 
        }).catch((err) => {
            dispatch({
                type: 'CREATE_POST_ERROR',
                err
            })
        })
    }
}
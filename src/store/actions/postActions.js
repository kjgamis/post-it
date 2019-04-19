export const createPost = (post) => {
    // dispatch is the function that dispatches an action to the reducer 
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyc call to database 
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const userId = getState().firebase.auth.uid
        firestore.collection('posts').add({
            ...post,
            userFirstname:  profile.firstname,
            userLastname: profile.lastname,
            userId: userId,
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
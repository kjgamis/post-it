// react-redux-firebase options
const rrfConfig = {    
    userProfile: 'users', // firebase root where user profiles are stored
    attachAuthIsReady: true, // attaches auth is ready promise to store
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
}

export default rrfConfig
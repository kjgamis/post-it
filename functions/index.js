const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// parameter is the payload defined in cloud function
const createNotification = notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
}

exports.postCreated = functions.firestore
    .document('/posts/{postId}')
    .onCreate(doc => {
        const post = doc.data()
        // Get an object representing the document
        // e.g. {
        //     content: "Learn, study, practice",
        //     createdAt: "April 18, 2019 at 12:34:04 AM UTC-4",
        //     title: "Code and Cry",
        //     userFirstname: "Kay",
        //     userId: "vH2tJWOThWbcF9ELeyIQTpbhiv22",
        //     userLastname: "Game"
        // }
        
        const notification = {
            content: 'added a new post',
            user: `${post.userFirstname} ${post.userLastname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users').doc(user.uid).get()
            .then(doc => {
                const newUser = doc.data()

                const notification = {
                    content: 'joined the party',
                    user: `${newUser.firstname} ${newUser.lastname}`,
                    time: admin.firestore.FieldValue.serverTimestamp() 
                }

                return createNotification(notification)
            })
    });

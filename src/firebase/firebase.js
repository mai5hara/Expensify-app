import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STRAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };





// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // })

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {

// //     })
// // });

// // database.ref('expenses').push({
// //     description: 'car',
// //     note: 'red',
// //     amount: 100000,
// //     createdAt: 20200404
// // });




// // database.ref('notes/-M-ht-rHjU2hZYW9Kzhk').remove();

// // database.ref('notes').push({
// //     title: 'To Do',
// //     body: 'React Native, Angular, Python'
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: '761asa',
// //     title: 'Another note',
// //     body: 'This is my note'
// // }];

// // database.ref('notes').set(notes);
// // database.ref('notes/12').set(notes);


// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title}  at ${val.job.company}.`);
// // });

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     })

// // database.ref().set({
// //     name: 'Mai Gohara',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title:'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Vancouver',
// //         country: 'Canada'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         console.log('Did not remove data', e);
// //     });
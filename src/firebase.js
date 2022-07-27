import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
firebase.initializeApp({
  apiKey: 'AIzaSyCutIsVEO1wu0NsAd8VRNGvKO163KC0YbY',
  authDomain: 'videoresume-auth.firebaseapp.com',
  projectId: 'videoresume-auth',
  storageBucket: 'videoresume-auth.appspot.com',
  messagingSenderId: '526255973514',
  appId: '1:526255973514:web:0d8103391234a2386d7973',
  // apiKey: "AIzaSyAO2YKow2mqAvTEW0DRb3cdeel0EA-2134",
  // authDomain: "insta-reels-48dbc.firebaseapp.com",
  // projectId: "insta-reels-48dbc",
  // storageBucket: "insta-reels-48dbc.appspot.com",
  // messagingSenderId: "503607298316",
  // appId: "1:503607298316:web:ea294a8b29620acd5fa129"
});
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments: firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
};
// 1. get firebase storage
export const storage = firebase.storage();
export default firebase;

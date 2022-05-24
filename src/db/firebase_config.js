import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFmj9gfOY7vVVSkIia3scABnDPQjXHrHI',
  authDomain: 'book-app-erozgaar.firebaseapp.com',
  projectId: 'book-app-erozgaar',
  storageBucket: 'book-app-erozgaar.appspot.com',
  messagingSenderId: '398694089971',
  appId: '1:398694089971:web:5b2597823c017c2ab96386',
  measurementId: 'G-2VS6PGP7F0',
};

// firebase ke liescence shuda invokation is needed only one time
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

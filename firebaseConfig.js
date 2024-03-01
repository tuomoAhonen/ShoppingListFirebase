import {initializeApp} from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyBr5M3pbje0ixzX-IVgVsTIN7_CqgtvVsI',
	authDomain: 'shoppinglistfirebase-acbc8.firebaseapp.com',
	databaseURL: 'https://shoppinglistfirebase-acbc8-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'shoppinglistfirebase-acbc8',
	storageBucket: 'shoppinglistfirebase-acbc8.appspot.com',
	messagingSenderId: '926685907602',
	appId: '1:926685907602:web:25c430a34b7839e8edf44b',
	//measurementId: 'G-measurement-id',
};

export const firebaseApp = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

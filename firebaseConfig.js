import {initializeApp} from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
//console.log(FB_DATABASEURL);

const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_FB_APIKEY,
	authDomain: process.env.EXPO_PUBLIC_FB_AUTHDOMAIN,
	databaseURL: process.env.EXPO_PUBLIC_FB_DATABASEURL,
	projectId: process.env.EXPO_PUBLIC_FB_PROJECTID,
	storageBucket: process.env.EXPO_PUBLIC_FB_STORAGEBUCKET,
	messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGINGSENDERID,
	appId: process.env.EXPO_PUBLIC_FB_APPID,
	//measurementId: 'G-measurement-id',
};

export const firebaseApp = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

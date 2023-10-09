import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

export default function Firebase() {

	const firebaseConfig = {
		apiKey: "AIzaSyB3XJNRifwGImY9jamAoYVp70whgEs_x5E",
		authDomain: "wetech-228fc.firebaseapp.com",
		databaseURL: "https://wetech-228fc-default-rtdb.firebaseio.com",
		projectId: "wetech-228fc",
		storageBucket: "wetech-228fc.appspot.com",
		messagingSenderId: "543313979712",
		appId: "1:543313979712:web:562912e12c7f6ceb4a32a5",
		measurementId: "G-XEP2EWCWDN"
	};
	
	firebase.initializeApp(firebaseConfig);

	return (
		<></>
	)
}

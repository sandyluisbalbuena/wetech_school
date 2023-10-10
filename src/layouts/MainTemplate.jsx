import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useDataStore } from '../context/DataStoreContext';
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

export default function MainTemplate() {
	const { theme, userData, setUserData } = useDataStore();
	const [ user ] = useAuthState(firebase.auth());

	useEffect(() => {
		if ( user ) {
			const userRef = firebase.database().ref(`users/${user.uid}`);
			userRef.on('value', (snapshot) => {
				const userDataFromDB = snapshot.val();
				if (userDataFromDB) {
					const userDataWithUID = { ...userDataFromDB, userId: user.uid };
					setUserData(userDataWithUID);
				}
			});
		}
	}, [ user ]);

	return (
		<main data-theme={ theme } className='bg-base-100 flex flex-col min-h-screen overflow-x-hidden'>
			<Navbar user={ user?userData:null }/>
			<div className='flex-1 m-auto mt-20 mb-5 select-none'>
				<Outlet />
			</div>
			<LoginForm />
			<Footer />
		</main>
	)
}

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useDataStore } from "../context/DataStoreContext";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

export default function MainTemplate() {
	const { theme, userData, setUserData } = useDataStore();
	const [user] = useAuthState(firebase.auth());
	const location = useLocation();

	useEffect(() => {
		if (user) {
			const userRef = firebase.database().ref(`users/${user.uid}`);
			userRef.on("value", (snapshot) => {
				const userDataFromDB = snapshot.val();
				if (userDataFromDB) {
					const userDataWithUID = { ...userDataFromDB, userId: user.uid };
					setUserData(userDataWithUID);
				}
			});
		}
	}, [user]);

	return (
		<main
			data-theme={theme}
			className="bg-base-100 flex flex-col min-h-screen overflow-x-hidden"
		>
			<Navbar user={user ? userData : null} />
			<div className="flex-1 m-auto mt-20 mb-5 select-none">
				<img
					loading="lazy"
					className={`fixed -left-25 top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname.includes("profile") ? "opacity-100" : "opacity-0"
					}`}
					src="./assets/images/profile-big.avif"
				/>
				<img
					loading="lazy"
					className={`fixed -left-25 top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname.includes("course") ? "opacity-100" : "opacity-0"
					}`}
					src="./assets/images/course-big.avif"
				/>
				<img
					loading="lazy"
					className={`fixed -left-25 top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname.includes("activity") ? "opacity-100" : "opacity-0"
					}`}
					src="./assets/images/activity-big.avif"
				/>
				<img
					loading="lazy"
					className={`fixed -left-25 top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname.includes("about") ? "opacity-100" : "opacity-0"
					}`}
					src="./assets/images/about-big.avif"
				/>
				<img
					loading="lazy"
					className={`fixed -left-25 top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname.includes("dashboard")
							? "opacity-100"
							: "opacity-0"
					}`}
					src="./assets/images/course-big.avif"
				/>
				<img
					loading="lazy"
					className={`fixed top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
						location.pathname == "/" ? "opacity-100" : "opacity-0"
					}`}
					src="./assets/images/about-big.avif"
				/>
				<Outlet />
			</div>
			<LoginForm />
			<Footer />
		</main>
	);
}

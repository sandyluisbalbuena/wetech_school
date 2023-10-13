import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDataStore } from '../context/DataStoreContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom';

export default function SubTemplate() {
	const { userData } = useDataStore()
	const navigate = useNavigate()
	const location = useLocation()
	
	useEffect(() => {
		if(!userData){
			if(localStorage.getItem('isLoggedIn')=='false'){
				navigate('/');
				toast.error('You must sign in first!')
			}
		}
	}, [userData])

	return (
		<>
			{/* Use CSS to style your images for smooth transitions */}
			<img
				loading="lazy"
				className={`fixed top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
					location.pathname.includes('profile') ? 'opacity-100' : 'opacity-0'
				}`}
				src="./assets/images/profile-big.avif"
			/>
			<img
				loading="lazy"
				className={`fixed top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
					location.pathname.includes('course') ? 'opacity-100' : 'opacity-0'
				}`}
				src="./assets/images/course-big.avif"
			/>
			<img
				loading="lazy"
				className={`fixed top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
					location.pathname.includes('activity') ? 'opacity-100' : 'opacity-0'
				}`}
				src="./assets/images/activity-big.avif"
			/>
			<img
				loading="lazy"
				className={`fixed top-0 z-0 mask mask-parallelogram h-screen transition-opacity duration-1000 ${
					location.pathname.includes('about') ? 'opacity-100' : 'opacity-0'
				}`}
				src="./assets/images/about-big.avif"
			/>

			<div className="m-2 lg:m-5">
				<Outlet user={userData} />
			</div>
		</>

	)
}

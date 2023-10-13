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
			{ location.pathname.includes('profile')&&<img loading='lazy' className='fixed top-0 z-0 mask mask-parallelogram h-screen animate__animated animate__fadeIn' src="./assets/images/profile-big.avif" alt="" /> }
			{ location.pathname.includes('course')&&<img loading='lazy' className='fixed top-0 z-0 mask mask-parallelogram h-screen animate__animated animate__fadeIn' src="./assets/images/course-big.avif" alt="" /> }
			{ location.pathname.includes('activity')&&<img loading='lazy' className='fixed top-0 z-0 mask mask-parallelogram h-screen animate__animated animate__fadeIn' src="./assets/images/activity.avif" alt="" /> }
			{ location.pathname.includes('about')&&<img loading='lazy' className='fixed top-0 z-0 mask mask-parallelogram h-screen animate__animated animate__fadeIn' src="./assets/images/about-big" alt="" /> }
			
			<div className='m-2 lg:m-5'>
				<Outlet user={ userData }/>
			</div>
		</>
	)
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDataStore } from '../context/DataStoreContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function SubTemplate() {
	const { userData } = useDataStore()
	const navigate = useNavigate()
	



	useEffect(() => {
		if(!userData){
			if(localStorage.getItem('isLoggedIn')=='false'){
				navigate('/');
				toast.error('You must sign in first!')
			}
		}
	}, [userData])

	return (
		<div className='m-2 lg:m-5'>
			<Outlet user={ userData }/>
		</div>
	)
}

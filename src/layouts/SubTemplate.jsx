import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SubTemplate() {
	return (
		<div className='m-2 lg:m-5'>
			<Outlet />
		</div>
	)
}

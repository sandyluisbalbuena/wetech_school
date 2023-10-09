import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import firebase from 'firebase/compat/app'
import { BiMenu } from 'react-icons/bi';
import { useDataStore } from '../context/DataStoreContext';
import { toast } from 'react-hot-toast'

export default function Navbar({ user }) {
	const { setTheme, themes, theme:myCurrentTheme, setModalLoginState  } = useDataStore();

	const handleClick = (theme) => {
		localStorage.setItem('localTheme', theme)
		setTheme(theme);
	}

	// const openModal = () => {
	// 	setModalState(true)
	// }

	const openModalLogin = () => {
		setModalLoginState(true)
	}

	const handleLogout = () => {
		toast.promise(
			firebase.auth().signOut(),
			{
				loading: 'Connecting...',
				success: <b>User Logout!</b>,
				error: <b>Something went wrong.</b>,
			}
		);
	}

	return (
		<div className="navbar bg-base-300 z-10 fixed bg-opacity-95 px-0 md:px-5">
			<div className="flex-1">
				<Link to='/' className="btn btn-ghost normal-case text-xl">WeTech</Link>
			</div>

			{/* <div className="hidden md:flex flex-none">
				<Link to='/' className="btn btn-ghost normal-case text-sm">Services</Link>
			</div> */}

			<div className="hidden md:flex flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>
								Themes
							</summary>
							<ul className="mt-10 p-2 mx-1 h-40 overflow-auto rounded-sm bg-base-200 shadow-md shadow-primary">
								{themes.map((theme)=>(
									<li className={`w-full uppercase  ${myCurrentTheme==theme?'bg-base-300':''}`} key={ theme } onClick={() => handleClick(theme)} ><a>{ theme }</a></li>
								))}
							</ul>
						</details>  
					</li>
				</ul>
				
				
				{user?(
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn bg-base-100 btn-circle avatar">
							<div className="w-8 rounded-full">
								<img src={ '/assets/img/userIconsV2/'+user.image+'.png' }/>
							</div>
						</label>
						<ul tabIndex={0} className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-sm bg-base-200 w-fit">
							<li><a onClick={ handleLogout }>Logout</a></li>
						</ul>
					</div>
				):(
					<button onClick={openModalLogin} className="btn btn-ghost btn-sm">
						Sign In
					</button>
				)}					

			</div>
		</div>
	)
}

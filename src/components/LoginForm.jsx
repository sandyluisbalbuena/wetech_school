import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { AiOutlineClose } from 'react-icons/ai'
import { BiLogoGmail } from "react-icons/bi";
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDataStore } from '../context/DataStoreContext'

export default function LoginForm() {
	const { modalLoginState, setModalLoginState } = useDataStore()
	const [ email, setEmail ] = useState(null)
	const [ username, setUsername ] = useState(null)
	const [ password, setPassword ] = useState(null)
	const [ repassword, setRePassword ] = useState(null)
	const [ register, setRegister ] = useState(false)

	const googleProvider = new GoogleAuthProvider()	

	const closeModal = () => {
		setModalLoginState(false)
	}

	const handleRegister = async () => {
		if (!email || !password || !repassword || !username ) {
				toast.error('All field must filled')
			return;
		}
	
		if (password !== repassword) {
				toast.error('Password and Repeat Password must be the same!')
			return;
		}
	
		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password);
			const userId = firebase.auth().currentUser.uid;
			const role = 'user';
			const image = 'pikachu';
			const userRef = firebase.database().ref(`users/${userId}`);
			userRef.set({
				username,
				email,
				role,
				image
			});
			closeModal()
			toast.success('User successfully register!')
		} catch (error) {
			console.log(error)
		}
	};

	const handleLogin = async () => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			closeModal()
			toast.success('User Successfully Login!')
			localStorage.setItem('isLoggedIn', true)

		} catch (error) {
			toast.error(error.message.replace('Firebase: ', ''))
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(firebase.auth(), googleProvider);
			const user = firebase.auth().currentUser;
			const userId = user.uid;
			const image = 'pikachu';
			const email = user.email;
			const username = user.displayName;
			const role = 'user';
			const userRef = firebase.database().ref(`users/${userId}`);
			
			userRef.set({ 
				username,
				email,
				role,
				image
			});

			closeModal()
			toast.success('User Successfully Login!')
		} catch (error) {
			toast.error(error.message.replace('Firebase: ', ''))
		}
	};

	const handleLoginWithGoogle = () => {

		const provider = new firebase.auth.GoogleAuthProvider();

		toast.promise(
			firebase.auth().signInWithPopup(provider),
			{
				loading: 'Connecting...',
				success: <b>User Successfully Login!</b>,
				error: <b>Something went wrong.</b>,
			},
		).then(()=>closeModal())
	};


	return (
		<dialog className={`modal ${modalLoginState?'modal-open':null} backdrop-blur-sm`}>
		
			<div className="modal-box w-11/12 max-w-5xl overflow-hidden shadow-md shadow-secondary">
				<div className='flex justify-end'>
					<button onClick={closeModal} className='btn btn-ghost btn-sm justify-self-end'>
						<AiOutlineClose />
					</button>
				</div>

				{register?(
					<div className='flex flex-col gap-2'>
						<div className='flex-grow'>
							<h3 className="font-bold text-lg mb-3">Register</h3>
							<div className="form-control w-full">
								<input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" className="input input-bordered w-full my-2" required/>
								<input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered w-full my-2" required/>
								<input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered w-full my-2" required/>
								<input onChange={(e)=>setRePassword(e.target.value)} type="password" placeholder="Repeat Password" className="input input-bordered w-full my-2" required/>
								<button onClick={handleRegister} className='btn btn-base-200'>Register</button>
							</div>
						</div>

						{/* <div className='divider'>OR</div>
						<div className='flex-grow'>
							<h3 className="font-bold text-lg mb-3">Continue using</h3>
							<div className='w-full'>
								<button onClick={signInWithGoogle} className='btn btn-base-200 w-full my-2'>
									<BiLogoGmail />
									<span>GMAIL</span>
								</button>
							</div>
						</div> */}

						<span className='my-2 text-xs'>Already have an account? <a onClick={()=>setRegister(false)} className='hover:text-white hover:cursor-pointer'>Log in</a></span>
					</div>
				):(
					<div className='flex flex-col gap-2'>
						<div className='flex-grow'>
							<h3 className="font-bold text-lg mb-3">Log in</h3>
							<div className="form-control w-full">
								<input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered w-full my-2" required/>
								<input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered w-full my-2" required/>
								<button onClick={handleLogin} className='btn btn-base-200'>Log in</button>
							</div>
						</div>

						{/* <div className='divider'>OR</div>
						<div className='flex-grow'>
							<h3 className="font-bold text-lg mb-3">Continue using</h3>
							<div className='w-full'>
								<button onClick={handleLoginWithGoogle} className='btn btn-base-200 w-full my-2'>
									<BiLogoGmail />
									<span>GMAIL</span>
								</button>
							</div>
						</div> */}

						<span className='my-2 text-xs'>Don't have an account? <a onClick={()=>setRegister(true)} className='hover:text-white hover:cursor-pointer'>Register</a></span>
					</div>
				)}
				
			</div>
		</dialog>
	)
}

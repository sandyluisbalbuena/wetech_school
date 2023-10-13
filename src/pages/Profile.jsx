import React from 'react'
import { motion } from "framer-motion";
import { useDataStore } from '../context/DataStoreContext';
import SplideProfileComponent from '../components/SplideProfileComponent';

export default function Profile() {
	const { userData } = useDataStore()

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2
			}
		}
	};
	
	const item = {
		hidden: { x: 500, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1
		}
	};


	return (
		<motion.ul
			className="container"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<div className='grid grid-cols-4 gap-10'>
				<div className='col-span-1'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								<figure className='p-10' ><img className='h-full rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png" alt="Shoes" /></figure>
								<div className="card-body">
									<h2 className="card-title text-md">{ userData?.username }</h2>
									<p className='text-xs'><span className='font-bold uppercase'>batch#</span>{ userData?.batch }</p>
								</div>
							</div>
						</div>
					</motion.li>
				</div>
				
				<div className='col-span-3'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								{/* <figure><img src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure> */}
								<div className="card-body h-full">
									{userData?(
										<SplideProfileComponent user={ userData } />
									):null}
								</div>
							</div>
						</div>
					</motion.li>
				</div>
			</div>
		</motion.ul>
	)
}

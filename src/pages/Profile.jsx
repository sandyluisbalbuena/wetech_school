import React from 'react'
import { motion } from "framer-motion";

export default function Profile() {

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
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
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
			<div className='grid grid-cols-4 gap-10 '>
				<div className='col-span-1'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200 shadow-md shadow-primary">
								<figure><img className='h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png" alt="Shoes" /></figure>
								<div className="card-body">
									<h2 className="card-title">Shoes!</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
								</div>
							</div>
						</div>
					</motion.li>
				</div>
				
				<div className='col-span-3'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200 shadow-md shadow-primary">
								{/* <figure><img src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure> */}
								<div className="card-body">
									<h2 className="card-title">Shoes!</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
								</div>
							</div>
						</div>
					</motion.li>
				</div>
			</div>
		</motion.ul>
	)
}

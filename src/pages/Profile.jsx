import React from "react";
import { motion } from "framer-motion";
import { useDataStore } from "../context/DataStoreContext";
import SplideProfileComponent from "../components/SplideProfileComponent";

export default function Profile() {
	const { userData } = useDataStore();

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { x: 500, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<motion.ul
			className="container"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<div className="grid grid-cols-4 gap-10">
				<div className="col-span-1">
					<motion.li className="item" variants={item}>
						<div className="my-10 h-[50vh]">
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								{userData ? (
									<>
										{/* <figure className='p-10 h-full' ><img className='h-full rounded-md' src={"./assets/avatars/"+userData?.image+".png"} alt="Shoes" /></figure> */}
										<figure className="p-5 h-full">
											<img
												className="h-full rounded-md"
												src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${userData?.lvl}.png`}
												alt="Shoes"
											/>
										</figure>
										<div className="card-body">
											<h2 className="card-title text-md capitalize">
												{userData?.firstname +
													" " +
													userData?.middlename +
													" " +
													userData?.lastname}
											</h2>
											<p className="text-xs">
												<span className="font-bold uppercase">batch#</span>
												{userData?.batch}
											</p>
										</div>
									</>
								) : null}
							</div>
						</div>
					</motion.li>
				</div>

				<div className="col-span-3">
					<motion.li className="item" variants={item}>
						<div className="my-10 h-[50vh]">
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								<div className="card-body h-full">
									{userData ? <SplideProfileComponent user={userData} /> : null}
								</div>
							</div>
						</div>
					</motion.li>
				</div>
			</div>
		</motion.ul>
	);
}

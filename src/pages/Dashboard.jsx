import React from "react";
import { motion } from "framer-motion";
import SplideDashboardComponent from "../components/SplideDashboardComponent";
import { useDataStore } from "../context/DataStoreContext";

export default function Dashboard() {
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
			<div className="grid grid-cols-4 gap-10 ">
				<div className="col-span-1">
					<motion.li className="item" variants={item}>
						<div className="my-10 h-[50vh]">
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								<figure>
									<img
										className="rounded-md w-full h-full"
										src="./assets/logo/logo1.png"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title text-md"></h2>
								</div>
							</div>
						</div>
					</motion.li>
				</div>

				<div className="col-span-3">
					<motion.li className="item" variants={item}>
						<div className="my-10 h-[50vh]">
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								<div className="card-body h-full">
									{userData ? (
										<SplideDashboardComponent user={userData} />
									) : null}
								</div>
							</div>
						</div>
					</motion.li>
				</div>
			</div>
		</motion.ul>
	);
}

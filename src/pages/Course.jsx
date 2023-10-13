import React from 'react'
import { motion } from "framer-motion"
import SplideCourseComponent from '../components/SplideCourseComponent';
import { useDataStore } from '../context/DataStoreContext';
import { useQuery } from '@tanstack/react-query';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function Course() {

	const { selectedUnit } = useDataStore()
	const database = firebase.database();


	const gettingUnitById = async () => {
		const unitsRef = database.ref('units').child(selectedUnit);
	
		try {
		const snapshot = await unitsRef.once('value');
		const unitData = snapshot.val();
	
		if (unitData) {
			return {
			id: selectedUnit,
			...unitData,
			};
		} else {
			throw new Error('Unit not found');
		}
		} catch (error) {
			throw error;
		}
	};



	const gettingScheduleById = async (sid) => {
		const schedulesRef = database.ref('schedules').child(sid);
	
		try {
			const snapshot = await schedulesRef.once('value');
			const scheduleData = snapshot.val();
		
			if (unitData) {
				return {
				id: sid,
				...scheduleData,
				};
			} else {
				throw new Error('Schedule not found');
			}
		} catch (error) {
			throw error;
		}
	};

	const { data:unitData } = useQuery({ queryKey:['gettingUnitById', selectedUnit], queryFn:gettingUnitById, enabled: !!selectedUnit }) 
	const scheduleId = unitData?.scheduleId
	const { data:scheduleData, isLoading } = useQuery({ queryKey:['gettingScheduleById', scheduleId], queryFn:()=>gettingScheduleById(scheduleId), enabled: !!scheduleId }) 

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
			<div className='grid grid-cols-4 gap-10 '>
				<div className='col-span-1'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								{!isLoading?(
									<>
										<figure className='p-10'>
											<img className='h-full rounded-md' src={"./assets/images/"+unitData.name+".png"} alt="Shoes" />
										</figure>
										<div className="card-body">
											<h2 className="card-title text-md"></h2>
											<p className='flex justify-between items-center'>
												<p className='text-xs'>
												<span className='font-bold uppercase'>Start: </span>
												{ scheduleData.start }
												</p>
												<p className='text-xs'>
												<span className='font-bold uppercase'>End: </span>
												{ scheduleData.end }
												</p>
											</p>
											<p className='flex justify-between items-center'>
												<p className='text-xs'>
												<span className='font-bold uppercase'>unit#</span>
												{ unitData.id }
												</p>
												<button className='btn btn-primary btn-sm'>Add</button>
											</p>
										</div>
									</>
								):null}
							</div>
						</div>
					</motion.li>
				</div>
				
				<div className='col-span-3'>
					<motion.li className="item" variants={item}>
						<div className='my-10 h-[50vh]'>
							<div className="card h-full w-full bg-base-200/95 shadow-md shadow-primary rounded-md">
								<div className="card-body h-full">
									<SplideCourseComponent />
								</div>
							</div>
						</div>
					</motion.li>
				</div>
			</div>
		</motion.ul>
	)
}

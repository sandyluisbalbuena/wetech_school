import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMediaQuery } from '@react-hook/media-query';
import 'animate.css';

export default function SplideCourseComponent() {

	const isSmallScreen = useMediaQuery('(max-width: 640px)');
	const isMediumScreen = useMediaQuery('(max-width: 768px)');
	const perPage = isSmallScreen ? 2 : (isMediumScreen ? 4 : 5);

	const items = [
		"courses",
		"batchmates",
		"activities",
	]

	return (
		<div className='h-full'>
		<Splide
			options={{
				type: 'loop',
				gap: '40px',
				arrows: true,
				focus:"center",
				pagination: false,
				perPage: 1,
			}}
		>
			{items.map((item, index)=>(
				<SplideSlide key={ index }>
					<div className='h-[50vh] relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary rounded-md px-5'>
						<p className='me-2 text-4xl lg:text-4xl text-base-100 font-semibold uppercase absolute top-0 left-0 w-full h-full flex justify-center mt-2'>{ item }</p>
						<div className='grid grid-cols-6 gap-12 mx-10 py-20'>

							{item == 'batchmates'?(
								<>
								{[1,2,3,4,5,6,7,8,9,10,11,12].map((mate)=>(
									<div key={ mate } className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer">
										<div className="card-body">
											<img className='h-full' loading='lazy' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png" alt="Shoes" />
										</div>
									</div>
								))}
								</>
							):(
								<>
									{item == 'courses'?(
										<>
											{['C++','Web'].map((unit)=>(
												<div className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer">
													<div className="card-body">
														<h2 className="card-title font-extrabold uppercase text-2xl text-center text-blue-700">{ unit }</h2>
													</div>
												</div>
											))}
										</>
									):(
										<>
											{[1,2,3,4,5,6,7,8,9,10,11,12].map((activity)=>(
												<div className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer">
													<div className="card-body">
														<h2 className="card-title font-extrabold uppercase text-1xl text-center text-blue-700">Act{ activity }</h2>
													</div>
												</div>
											))}
										</>
									)}
								</>
							)}

						</div>
					</div>
				</SplideSlide>
			))}
		</Splide>
		</div>
	)
}

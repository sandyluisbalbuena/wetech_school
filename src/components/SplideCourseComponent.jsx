import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMediaQuery } from '@react-hook/media-query';
import 'animate.css';

export default function SplideCourseComponent() {

	const isSmallScreen = useMediaQuery('(max-width: 640px)');
	const isMediumScreen = useMediaQuery('(max-width: 768px)');
	const perPage = isSmallScreen ? 2 : (isMediumScreen ? 4 : 5);

	const items = [
		"batchmates",
		"course",
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
					<div className='h-[50vh] relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary rounded-md hover:scale-y-105  transition-transform duration-200 px-5'>
						{/* <img src={ nav[0] } className='h-full mask mask-parallelogram brightness-50 hover:brightness-100 ' alt={ nav[1] }/> */}
						<p className='me-2 text-4xl lg:text-4xl text-base-100 font-semibold uppercase absolute top-0 left-0 w-full h-full flex justify-center mt-2'>{ item }</p>
						<div className='grid grid-cols-6'>
							
						</div>
					</div>
				</SplideSlide>
			))}
		</Splide>
		</div>
	)
}

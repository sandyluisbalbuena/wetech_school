import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useMediaQuery } from '@react-hook/media-query';
import { Link } from 'react-router-dom';
import 'animate.css';

export default function SplideComponent() {

	const isSmallScreen = useMediaQuery('(max-width: 640px)');
	const isMediumScreen = useMediaQuery('(max-width: 768px)');
	const perPage = isSmallScreen ? 2 : (isMediumScreen ? 4 : 5);

	const navs = [
		["https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","profile"],
		["https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60","course"],
		// ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","events"],
		["https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60","activity"],
		["https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","about"],
		// ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","about"],
	]
	
	return (
		<Splide
		options={{
			type: 'loop',
			gap: isSmallScreen?"50px":"100px",
			drag: "free",
			arrows: false,
			// focus:"center",
			pagination: false,
			perPage: perPage,
			autoScroll: {
				pauseOnHover: true,
				pauseOnFocus: false,
				rewind: false,
				speed: .3
			}
		}}

		extensions={{ AutoScroll }}
		>
			{navs.map((nav, index)=>(
				<SplideSlide key={index} >
					<Link to={ '/'+nav[1] }>
						<div className='animate__animated animate__fadeIn  relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary rounded-md hover:scale-105  transition-transform duration-200 px-5'>
							<img src={ nav[0] } className='h-full mask mask-parallelogram brightness-50 hover:brightness-100 ' alt={ nav[1] }/>
							<p className='me-2 text-4xl lg:text-8xl text-base-100 font-semibold uppercase absolute top-0 left-0 w-full h-full flex items-center justify-center'>{nav[1]}</p>
						</div>
					</Link>
				</SplideSlide>
			))}
		</Splide>
	)
}

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from "framer-motion";


export default function SplideComponent() {

	const isSmallScreen = useMediaQuery('(max-width: 640px)');
	const isMediumScreen = useMediaQuery('(max-width: 768px)');
	const perPage = isSmallScreen ? 2 : (isMediumScreen ? 4 : 5);

	const imageUrls = [
		"https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
	]

	// const container = {
	// 	// hidden: { opacity: 1, scale: 0 },
	// 	visible: {
	// 		// opacity: 1,
	// 		scale: 1,
	// 		transition: {
	// 			delayChildren: 0.3,
	// 			staggerChildren: 0.2
	// 		}
	// 	}
	// };

	// const item = {
	// 	hidden: { y: 20, opacity: 0 },
	// 	visible: {
	// 		y: 0,
	// 		opacity: 1
	// 	}
	// };

	return (
		<Splide
		options={{
			type: "loop",
			gap: "90px",
			// drag: "free",
			arrows: false,
			focus:"center",
			pagination: false,
			perPage: perPage,
			// autoScroll: {
			// 	pauseOnHover: true,
			// 	pauseOnFocus: false,
			// 	rewind: false,
			// 	speed: .2
			// }
		}}
		// extensions={{ AutoScroll }}
		>
			{imageUrls.map((imageUrl, index)=>(
				<SplideSlide key={index}>
					<img src={ imageUrl } className='h-[50vh] mask mask-squircle' alt="Image 2"/>
				</SplideSlide>
			))}
		</Splide>
	)
}

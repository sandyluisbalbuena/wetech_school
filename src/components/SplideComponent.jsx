import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useMediaQuery } from "@react-hook/media-query";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { useState } from "react";

export default function SplideComponent() {
	const navigate = useNavigate();

	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery("(max-width: 768px)");
	const perPage = isSmallScreen ? 2 : isMediumScreen ? 4 : 5;
	const { pageAnimation, setPageAnimation } = useState("");

	const navs = [
		["./assets/images/profile-small.avif", "profile"],
		// ["./assets/images/course-small.avif","course"],
		// ["./assets/images/activity-small.avif", "activity"],
		["./assets/images/about-small.avif", "about"],
		// ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","about"],
	];

	const handleNavClick = (navItem) => {
		// setPageAnimation(navItem)
		// setTimeout(() => {
		navigate(navItem);
		// }, 1000);
	};

	return (
		<Splide
			options={{
				type: "loop",
				gap: isSmallScreen ? "50px" : "100px",
				drag: "free",
				arrows: false,
				// focus:"center",
				pagination: false,
				perPage: perPage,
				autoScroll: {
					pauseOnHover: true,
					pauseOnFocus: false,
					rewind: true,
					speed: 0.4,
				},
			}}
			extensions={{ AutoScroll }}
		>
			{navs.map((nav, index) => (
				<SplideSlide
					key={index}
					className="hover:cursor-pointer bg-transparent"
				>
					<div
						onClick={() => handleNavClick(nav[1])}
						className={`animate__animated animate__fadeIn relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary hover:scale-105 rounded-md transition-transform duration-200 px-5`}
					>
						<img
							src={nav[0]}
							className="h-full mask mask-parallelogram brightness-50 hover:brightness-100 "
							alt={nav[1]}
						/>
						<p className="me-2 text-4xl lg:text-8xl text-base-100 font-semibold uppercase absolute top-0 left-0 w-full h-full flex items-center justify-center">
							{nav[1]}
						</p>
					</div>
				</SplideSlide> //hahhahahahah
			))}
		</Splide>
	);
}

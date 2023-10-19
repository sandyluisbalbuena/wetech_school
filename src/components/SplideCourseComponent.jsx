import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "@react-hook/media-query";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useQuery } from "@tanstack/react-query";
import { useDataStore } from "../context/DataStoreContext";

export default function SplideCourseComponent() {
	const { setSelectedUnit } = useDataStore();

	const fetchingCourse = async () => {
		// const batchValue = user.batch;
		const database = firebase.database();
		const coursesRef = database.ref("units");

		try {
			const snapshot = await coursesRef.once("value");
			const coursesData = snapshot.val();

			if (coursesData) {
				const coursesArray = Object.entries(coursesData).map(
					([id, course]) => ({
						id,
						...course,
					})
				);
				return coursesArray;
			} else {
				return [];
			}
		} catch (error) {
			throw error;
		}
	};

	const { data: units, isLoading } = useQuery({
		queryKey: ["fetchingCourse"],
		queryFn: fetchingCourse,
		refetchInterval: 60000,
	});

	console.log(units);

	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery("(max-width: 768px)");
	const perPage = isSmallScreen ? 2 : isMediumScreen ? 4 : 5;

	return (
		<div className="h-full">
			<div className="h-[50vh] relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary rounded-md px-5">
				<div className="grid grid-cols-6 gap-12 mx-10 py-20">
					{!isLoading ? (
						<>
							{units.map((unit) => (
								<div
									onClick={() => setSelectedUnit(unit.id)}
									key={unit.id}
									className="card animate__animated animate__fadeIn bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer tooltip"
									data-tip={unit.name}
								>
									<div className="card-body p-2">
										<img
											className="h-full"
											loading="lazy"
											src={"./assets/images/" + unit.name + ".png"}
											alt="Shoes"
										/>
									</div>
								</div>
							))}
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}

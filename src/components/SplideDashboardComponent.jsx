import React from "react";
import { useId } from "react";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "@react-hook/media-query";
import { useQuery } from "@tanstack/react-query";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default function SplideDashboardComponent({ user }) {
	const splideRef = useRef();

	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery("(max-width: 768px)");
	const perPage = isSmallScreen ? 2 : isMediumScreen ? 4 : 5;
	const items = ["students"];

	const fetchingStudents = async () => {
		const database = firebase.database();
		const usersRef = database.ref("users");

		try {
			const snapshot = await usersRef.once("value");
			const usersData = snapshot.val();
			return usersData;
		} catch (error) {
			throw error;
		}
	};

	const { data: students, isLoading: studentsIsLoading } = useQuery({
		queryKey: ["fetchingStudents", user.username],
		queryFn: fetchingStudents,
		refetchInterval: 60000,
	});

	console.log(students);

	return (
		<div className="h-full">
			<Splide
				options={{
					type: "slide",
					gap: "40px",
					arrows: true,
					focus: "center",
					pagination: false,
					perPage: 1,
				}}
			>
				{items.map((item) => (
					<SplideSlide key={useId()}>
						<div className="h-[50vh] relative shadow-md shadow-secondary m-2 lg:m-5 bg-primary rounded-md px-5">
							<p className="me-2 text-4xl lg:text-4xl text-base-100 font-semibold uppercase absolute top-0 left-0 w-full h-full flex justify-center mt-2">
								{item}
							</p>

							{item == "batchmates" ? (
								<>
									<Splide
										options={{
											type: "slide",
											gap: "40px",
											arrows: false,
											pagination: false,
											perPage: 1,
											drag: false,
										}}
										ref={splideRef}
									>
										{!batchesIsLoading ? (
											<>
												{batches.map((batch, index) => (
													<SplideSlide key={index}>
														<div className="grid grid-cols-6 gap-16 mx-10 py-20">
															{batch.map((mate) => (
																<div
																	key={mate.username}
																	className="card animate__animated animate__fadeIn bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer tooltip capitalize"
																	data-tip={mate.firstname}
																>
																	<div className="card-body p-2">
																		<img
																			className="h-full"
																			loading="lazy"
																			src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${
																				mate?.lvl.toString().length <= 3
																					? "0".repeat(
																							3 - mate?.lvl.toString().length
																					  ) + mate?.lvl
																					: mate?.lvl.toString()
																			}.png`}
																			alt="Shoes"
																		/>
																	</div>
																</div>
															))}
														</div>
													</SplideSlide>
												))}
											</>
										) : (
											<>
												{[1, 2, 3, 4, 5, 6].map((mate) => (
													<div
														key={mate + "random"}
														className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
													>
														<div className="card-body">
															<img
																className="h-full"
																loading="lazy"
																src={"./assets/avatars/" + mate?.image + ".png"}
																alt="Shoes"
															/>
														</div>
													</div>
												))}
											</>
										)}
									</Splide>
								</>
							) : null}

							{/* {item == "courses" ? (
								<div className="grid grid-cols-6 gap-12 mx-10 py-20">
									{["C++", "Web"].map((unit) => (
										<div
											key={unit}
											className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
										>
											<div className="card-body">
												<h2 className="card-title font-extrabold uppercase text-2xl text-center text-blue-700">
													{unit}
												</h2>
											</div>
										</div>
									))}
								</div>
							) : null}

							{item == "activities" ? (
								<div className="grid grid-cols-6 gap-12 mx-10 py-20">
									{[1].map((activity) => (
										<div
											key={activity}
											className="card animate__animated animate__fadeIn animate__delay-1s bg-base-100 w-full h-full shadow-xl mx-5 rounded-md hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
										>
											<div className="card-body">
												<h2 className="card-title font-extrabold uppercase text-1xl text-center text-blue-700">
													Act{activity}
												</h2>
											</div>
										</div>
									))}
								</div>
							) : null}

							{item == "schedule" ? (
								<div className="grid grid-cols-1 gap-12 mx-10 py-20">
									{!scheduleIsLoading ? (
										<div className="card card-side bg-base-100 shadow-xl rounded-md">
											<figure>
												<img
													src={`./assets/images/${schedules.unitInfo.name}.png`}
													alt="Movie"
													className="p-5 m-5 w-[10vw] h-full"
												/>
											</figure>
											<div className="card-body">
												<h2 className="card-title uppercase">
													{schedules.unitInfo.name}
												</h2>
												<hr />
												<p className="uppercase text-xs">
													<span className="font-bold">Time: </span>
													{schedules.scheduleInfo.start} -{" "}
													{schedules.scheduleInfo.end}
													<br />
													<span className="font-bold">Day: </span>
													{schedules.dayInfo.name}
												</p>
											
											</div>
										</div>
									) : null}
								</div>
							) : null} */}
						</div>
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
}

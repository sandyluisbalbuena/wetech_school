import React, { createContext, useContext, useState } from 'react';

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
	const [ theme, setTheme ] = useState(
		localStorage.getItem('localTheme') || 'cupcake'
	);
	const [ modalLoginState, setModalLoginState ] = useState(false)
	const [ userData, setUserData ] = useState(null)
	const [ selectedUnit, setSelectedUnit ] = useState(null)

	const themes = [
		"light",
		"dark",
		"cupcake",
		"bumblebee",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"cyberpunk",
		"valentine",
		"halloween",
		"garden",
		"forest",
		"aqua",
		"lofi",
		"pastel",
		"fantasy",
		"wireframe",
		"black",
		"luxury",
		"dracula",
		"cmyk",
		"autumn",
		"business",
		"acid",
		"lemonade",
		"night",
		"coffee",
		"winter",
	];

	return (
		<DataStoreContext.Provider value={{ 
			theme, 
			setTheme, 
			themes, 
			modalLoginState, 
			setModalLoginState, 
			userData, 
			setUserData,
			selectedUnit,
			setSelectedUnit,
		}}>
			{children}
		</DataStoreContext.Provider>
	);
}

export function useDataStore() {
	return useContext(DataStoreContext);
}

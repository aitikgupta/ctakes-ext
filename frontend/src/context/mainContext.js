import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
	const [toggle, setToggle] = useState(false);




	return (
		<MainContext.Provider
			value={{
				toggle:[toggle, setToggle]
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

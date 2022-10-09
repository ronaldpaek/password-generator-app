import { createContext, useState, useContext } from 'react';

export const PasswordContextProvider = ({ children }) => {
	const [password, setPassword] = useState('P4$5W0rD!');

	return (
		<PasswordContext.Provider value={{ password, setPassword }}>
			{children}
		</PasswordContext.Provider>
	);
};

const PasswordContext = createContext(null);

export const usePasswordContext = () => useContext(PasswordContext);

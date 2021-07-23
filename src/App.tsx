import { UserContextProvider } from './contexts/authContext';
import { Routes } from './Routes';

import './styles/global.scss';

export function App() {
	return (
		<UserContextProvider>
			<Routes />
		</UserContextProvider>
	);
}
	
	
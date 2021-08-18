import { UserContextProvider } from './contexts/authContext';
import { Routes } from './Routes';

import './assets/scss/global.scss';

export function App() {
	return (
		<UserContextProvider>
			<Routes />
		</UserContextProvider>
	);
}
	
	
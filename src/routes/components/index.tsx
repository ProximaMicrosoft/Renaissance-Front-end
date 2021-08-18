import { Redirect, Route } from "react-router-dom";
import { getStorage } from "../../utils/storage";


export function PrivateRoute({...props}) {
	return(
		getStorage('userData') ? <Route {...props} /> :  <Redirect to="/login"/>
	);
}
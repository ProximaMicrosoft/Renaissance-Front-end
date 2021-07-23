import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({...props}) {
    const context = useAuth();

	return(
		context?.user ? <Route {...props} /> :  <Redirect to="/"/>
	);
}
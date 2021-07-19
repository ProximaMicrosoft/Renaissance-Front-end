import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

export function PrivateRoute({...props}) {
	return(
		isAuthenticated ? <Route {...props} /> :  <Redirect to="/"/>
	);
}

export function PublicRoute({...props}) {
    return(
        isAuthenticated ? <Redirect to="/home"/> : <Route {...props} />
    );
}
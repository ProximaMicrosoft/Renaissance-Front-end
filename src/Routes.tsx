import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PublicRoute } from "./components/CustomRoutes";

import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/NotFound";
import { adminRoutes } from "./routes/AdminRoutes";
import { clientRoutes } from "./routes/ClientRoutes";

export function Routes() {
    function checkRole() {
        const user: UserProps = JSON.parse(localStorage.getItem('userData') || '[]');
        
        if(user.role === "ADMIN") {
            return adminRoutes;
        } else {
            return clientRoutes;
        }
    }

    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/" component={Login}/>

                {checkRole()}

                <Route path="/" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
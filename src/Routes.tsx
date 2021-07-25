import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MenuContextProvider } from "./contexts/menuContext";

import { useAuth } from "./hooks/useAuth";

import { AdminRoutes } from "./routes/AdminRoutes";
import { ClientRoutes } from "./routes/ClientRoutes";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/NotFound";


export function Routes() {
    const context = useAuth();

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>

                <MenuContextProvider>
                    {context?.user?.role === 'ADMIN' ? <AdminRoutes /> : <ClientRoutes />}
                </MenuContextProvider>

                <Route path="/" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
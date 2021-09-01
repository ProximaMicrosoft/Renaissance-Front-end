import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MenuContextProvider } from "./contexts/menuContext";

import { useAuth } from "./hooks/useAuth";

import { AdminRoutes } from "./routes/AdminRoutes";
import { ClientRoutes } from "./routes/ClientRoutes";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/NotFound";
import { LogoutContextProvider } from "./contexts/logoutContext";
import { ResetPassword } from "./pages/ResetPassword";


export function Routes() {
    const context = useAuth();

    return(
        <BrowserRouter>
                
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/forgot-password" component={ResetPassword}/>
                
                <MenuContextProvider>
                    <LogoutContextProvider>
                        {context?.user?.role === 'ADMIN' ? <AdminRoutes /> : <ClientRoutes />}
                    </LogoutContextProvider>
                </MenuContextProvider>

                <Route path="/" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
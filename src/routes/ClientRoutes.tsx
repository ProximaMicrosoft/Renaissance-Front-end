import { PrivateRoute } from "./components";

import { Home } from "../pages/Client/Home";
import { MyData } from "../pages/Client/MyData";
import { Reserves } from "../pages/Client/Reserves";
import { ChangeEmail } from "../pages/Client/MyData/Email";
import { Documents } from "../pages/Client/Documents";
import { DeleteReserveContextProvider } from "../contexts/deleteReserveContext";


export function ClientRoutes() {
    return(
        <>
            <PrivateRoute exact path="/" component={Home} />
            <DeleteReserveContextProvider>
                <PrivateRoute exact path="/reserves" component={Reserves} />
            </DeleteReserveContextProvider>
            <PrivateRoute exact path="/mydata" component={MyData} />
            <PrivateRoute exact path="/change-email" component={ChangeEmail} />
            <PrivateRoute exact path="/documents" component={Documents} />
        </>
    );
    
}
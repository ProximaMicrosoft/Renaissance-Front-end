import { PrivateRoute } from "../components/CustomRoutes";

import { Home } from "../pages/Client/Home";
import { MyData } from "../pages/Client/MyData";
import { Reserves } from "../pages/Client/Reserves";

export function ClientRoutes() {
    return(
        <>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/reserves" component={Reserves} />
            <PrivateRoute exact path="/mydata" component={MyData} />
        </>
    );
    
}
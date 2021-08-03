import { PrivateRoute } from "../components/CustomRoutes";

import { Home } from "../pages/Client/Home";
import { CondoRules } from "../pages/Client/Home/CondoRules";
import { LostAndFound } from "../pages/Client/Home/LostAndFound";
import { MyData } from "../pages/Client/Home/Profile/MyData";
import { Reserves } from "../pages/Client/Home/Reserves";
import { Visitors } from "../pages/Client/Home/Visitors";

export function ClientRoutes() {
    return(
        <>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/rules" component={CondoRules} />
            <PrivateRoute exact path="/lostandfound" component={LostAndFound} />
            <PrivateRoute exact path="/reserves" component={Reserves} />
            <PrivateRoute exact path="/visitors" component={Visitors} />
            <PrivateRoute exact path="/mydata" component={MyData} />
        </>
    );
    
}
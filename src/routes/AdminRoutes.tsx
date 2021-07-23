import { PrivateRoute } from "../components/CustomRoutes";

import { AdminHome } from "../pages/Admin/Home";
import { AdminCondoRules } from "../pages/Admin/Home/CondoRules";
import { AdminLostAndFounds } from "../pages/Admin/Home/LostAndFounds";
import { AdminRegisterResident } from "../pages/Admin/Home/RegisterResident";
import { AdminReserves } from "../pages/Admin/Home/Reserves";
import { AdminVisitors } from "../pages/Admin/Home/Visitors";

export function AdminRoutes() {
    return(
        <>
            <PrivateRoute exact path="/home" component={AdminHome} />
            <PrivateRoute exact path="/rules" component={AdminCondoRules} />
            <PrivateRoute exact path="/lostandfound" component={AdminLostAndFounds} />
            <PrivateRoute exact path="/register" component={AdminRegisterResident} />
            <PrivateRoute exact path="/visitors" component={AdminVisitors} />
            <PrivateRoute exact path="/reserves" component={AdminReserves} />
        </>
    )
}
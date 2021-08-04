import { PrivateRoute } from "../components/CustomRoutes";

import { AdminHome } from "../pages/Admin/Home";
import { AdminRegisterResident } from "../pages/Admin/RegisterResident";
import { AdminReserves } from "../pages/Admin/Reserves";

export function AdminRoutes() {
    return(
        <>
            <PrivateRoute exact path="/home" component={AdminHome} />
            <PrivateRoute exact path="/register" component={AdminRegisterResident} />
            <PrivateRoute exact path="/reserves" component={AdminReserves} />
        </>
    )
}
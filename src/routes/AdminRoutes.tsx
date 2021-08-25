import { PrivateRoute } from "./components";

import { AdminHome } from "../pages/Admin/Home";
import { AdminRegisterResident } from "../pages/Admin/RegisterResident";
import { AdminReserves } from "../pages/Admin/Reserves";
import { AdminDocuments } from "../pages/Admin/Documents";

export function AdminRoutes() {
    return(
        <>
            <PrivateRoute exact path="/" component={AdminHome} />
            <PrivateRoute exact path="/register" component={AdminRegisterResident} />
            <PrivateRoute exact path="/reserves" component={AdminReserves} />
            <PrivateRoute exact path="/documents" component={AdminDocuments} />
        </>
    )
}
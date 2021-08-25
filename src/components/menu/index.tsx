import { Offcanvas } from "react-bootstrap";

import { ConfirmModal } from "../modal/confirm";
import { MenuContent } from "./menuContent";

import { useLogout } from "../../hooks/useLogout";
import { useMenu } from "../../hooks/useMenu";
import { AdminMenuContent } from "./AdminMenuContent";


export function Menu() {
    const menuContext = useMenu();
    const logoutContext = useLogout();

    return(
        <>
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <MenuContent />
            </Offcanvas>  

            <ConfirmModal 
                show={logoutContext.show}
                onHide={() => logoutContext.setShow(false)}
                title="Deseja sair do aplicativo?"
                description="Você terá que informar seu e-mail e senha para entrar novamente."
            >
                <button className="btn-confirm" type="button" onClick={() => logoutContext.setShow(false)}>
                    Não
                </button>

                <button className="btn-confirm yes" type="button" onClick={() => logoutContext.logout()}>
                    Sim
                </button>
            </ConfirmModal>
        </>
    );
}

export function AdminMenu() {
    const menuContext = useMenu();
    const logoutContext = useLogout();

    return(
        <>
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <AdminMenuContent />
            </Offcanvas>  

            <ConfirmModal 
                show={logoutContext.show}
                onHide={() => logoutContext.setShow(false)}
                title="Deseja sair do aplicativo?"
                description="Você terá que informar seu e-mail e senha para entrar novamente."
            >
                <button className="btn-confirm" type="button" onClick={() => logoutContext.setShow(false)}>
                    Não
                </button>

                <button className="btn-confirm yes" type="button" onClick={() => logoutContext.logout()}>
                    Sim
                </button>
            </ConfirmModal>
        </>
    );
}
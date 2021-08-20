import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { removeStorage } from "../utils/storage";

interface LogoutContextProps {
    show: boolean;
    setShow: (value: boolean) => void;
    logout: () => void;
}

export const LogoutContext = createContext<LogoutContextProps>({} as LogoutContextProps);



export function LogoutContextProvider({children}: JSX.ElementChildrenAttribute) {
    const authContext = useAuth();

    const [show, setShow] = useState(false);

    function logout() {
        authContext.setUser({} as UserProps);
        removeStorage("userData");
        window.location.reload();
    }

    return(
        <LogoutContext.Provider value={{ show, setShow, logout }}>
            {children}
        </LogoutContext.Provider>
    );
}


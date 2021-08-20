import { useContext } from "react";
import { LogoutContext } from "../contexts/logoutContext";

export function useLogout() {
    const value = useContext(LogoutContext);
    return value;
}
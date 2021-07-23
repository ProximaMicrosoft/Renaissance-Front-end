import { useContext } from "react";
import { MenuContext } from "../contexts/menuContext";


export function useMenu() {
    const value = useContext(MenuContext);
    return value;
}
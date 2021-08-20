import { createContext, useState } from "react";

interface MenuContextProps {
    show: boolean;
    setShow: (value: boolean) => void;
}

export const MenuContext = createContext<MenuContextProps>({} as MenuContextProps);

export function MenuContextProvider({children}: JSX.ElementChildrenAttribute) {
    const [show, setShow] = useState(false);

    return(
        <MenuContext.Provider value={{ show, setShow }}>
            {children}
        </MenuContext.Provider>
    );
}


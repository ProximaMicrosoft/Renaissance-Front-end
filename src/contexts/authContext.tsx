import { createContext, useState } from "react";
import { getStorage } from "../utils/storage";

interface UserContextProps {
    user: UserProps;
    setUser: (user: UserProps) => void;
}

export const AuthContext = createContext({} as UserContextProps);

export function UserContextProvider({children}: JSX.ElementChildrenAttribute) {
    const [user, setUser] = useState<UserProps>(getStorage('userData'));

    return(
        <AuthContext.Provider value={{ user, setUser }}> 
            {children}
        </AuthContext.Provider>
    );
}


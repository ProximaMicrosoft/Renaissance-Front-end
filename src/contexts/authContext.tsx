import { createContext, useState } from "react";

interface UserContextProps {
    user: UserProps | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}

export const AuthContext = createContext<UserContextProps>({} as UserContextProps);

export function UserContextProvider({children}: JSX.ElementChildrenAttribute) {
    const [user, setUser] = useState<UserProps>();

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}


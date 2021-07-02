import { createContext, ReactNode, useEffect } from "react";
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';


type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({})

export function AuthContextProvider(props: AuthContextProviderProps) {
    const history = useHistory();

    
    useEffect(() => {
        const cookie = new Cookies();
        
        !!cookie.get('uid') || history.push('/');
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return(
        <AuthContext.Provider value={Cookies}>
            {props.children}
        </AuthContext.Provider>
    );
}
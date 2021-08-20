import { createContext, useState } from "react";
import { deleteReserve } from "../services/reserves";

interface DeleteReserveContextProps {
    show: boolean;
    setShow: (value: boolean) => void;
    reserveId: number;
    setReserveId: (value: number) => void;
    handleDeleteReserve: (reserveId: number) => void;
}

export const DeleteReserveContext = createContext<DeleteReserveContextProps>({} as DeleteReserveContextProps);

export function DeleteReserveContextProvider({children}: JSX.ElementChildrenAttribute) {

    const [show, setShow] = useState(false);
    const [reserveId, setReserveId] = useState(0);

    function handleDeleteReserve(reserveId: number) {
        deleteReserve(reserveId).then(() => setShow(false))
    }

    return(
        <DeleteReserveContext.Provider value={{ show, setShow, reserveId, setReserveId, handleDeleteReserve }}>
            {children}
        </DeleteReserveContext.Provider>
    );
}


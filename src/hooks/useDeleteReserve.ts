import { useContext } from "react";
import { DeleteReserveContext } from "../contexts/deleteReserveContext";

export function useDeleteReserve() {
    const value = useContext(DeleteReserveContext);
    return value;
}
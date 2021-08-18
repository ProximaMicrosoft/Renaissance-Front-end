import { AxiosResponse } from "axios";
import { api } from "./_api";

type UserReservesProps = {
    id: number;
    data: string;
    horario: number;
    name: string;
    espacos_id: number;
}

type GeneralReservesProps = {
    id: number;
    data: string;
    horario: number;
    name: string;
    espacos_id: number;
}

type IndisponibleReservesProps = {
    id: number;
    data: string;
    horario: number;
    name: string;
    espacos_id: number;
}

export async function getUserReserves(user_Id: number): Promise<AxiosResponse<UserReservesProps[]>> {
    return await api.get(`/reservasjoin/${user_Id}`);
}

export async function getGeneralReserves(): Promise<AxiosResponse<GeneralReservesProps[]>> {
    return await api.get('/reservas');
}

export async function getIndisponibleReserves(place_id: number): Promise<AxiosResponse<IndisponibleReservesProps[]>> {
    return await api.get(`/horariosindisponiveis/${place_id}`);
}

export async function createReserve(data: string, horario: number, espacos_id: number, usuario_id: number): Promise<AxiosResponse<UserReservesProps[]>> {
    return await api.post('/reservas', {
        data,
        horario,
        espacos_id,
        usuario_id
    });
}

export async function deleteReserve(reserve_Id: number) {
    return await api.delete(`/reservas/${reserve_Id}`);
}


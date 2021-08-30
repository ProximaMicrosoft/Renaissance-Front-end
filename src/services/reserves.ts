import { AxiosResponse } from "axios";
import { api } from "./_api";

type UserReservesProps = {
    id: number;
    data: string;
    horario: number;
    name: string;
    espacos_id: number;
}

export type GeneralReservesProps = {
    id: number;
    data: string;
    horario: number;
    name: string;
    espacos_id: number;
    numeroapartamento: number;
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

export async function getGeneralReserves(id_espaco: number, dateTarget: string ): Promise<AxiosResponse<GeneralReservesProps[][]>> {
    const date = dateTarget.split("/"); 
    const dateTodayFormated = `${date[2]}-${date[1]}-${date[0]}`;
    const inicialDate = `${dateTodayFormated} 00:00:00+00`;
    const finalDate = `${dateTodayFormated} 23:00:00+00`;

    return await api.post('/reservasadmin', {
        data_inicial: inicialDate,
        data_final: finalDate,
        id_espaco: id_espaco
    });
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


import { AxiosResponse } from "axios";
import { api } from "./_api";

interface LoginProps {
    resposta: string;
    user: UserProps; 
}

export async function login(email: string, password: string) {
    const value: AxiosResponse<LoginProps> = await api.post('/login', {
        email,
        password
    });
    return value;
}

export async function sendLinkToResetPassword(email: string) {
    return await api.post('/enviaremailtoken', {
        email
    })
}

export async function redefinePassword(token: string, newPassword: string) {
    return api.post(`/recuperaremailtoken/${token}`, {
        senha: newPassword
    })
}

export async function createUser(name: string, email: string, password: string, numerotelefone: string, numeroapartamento: number, cpf: string, datanascimento:string) {
    return await api.post('/usuario', {
        name,
        email,
        password,
        numerotelefone,
        cpf,
        datanascimento,
        numeroapartamento,
        role: "USER"
    });
}

export async function getGeneralUsers() {
    return await api.get('/usuario');
}

export async function updateUser(id: number, value: any) {
    return await api.put(`/usuario/${id}`, {
        value
    })
}

export async function deleteUser(id: number) {
    return await api.delete(`/usuario/${id}`);
}

/// <reference types="react-scripts" />



type UserProps = {
    id: number,
    name: string,
    email: string,
    password: string,
    cpf: string,
    datanascimento: string,
    token: string,
    numeroapartamento: number,
    numerotelefone: string,
    role: string,
    created_at: string,
    updated_at: string
}

interface LoginResponse {
    resposta: string;
    user: UserProps;
}
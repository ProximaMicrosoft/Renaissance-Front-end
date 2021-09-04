import { AxiosResponse } from "axios";
import { api } from "./_api";

export type GetDocumentsProps = {
    id: number,
    arquivo: string
}

export function getDocuments(): Promise<AxiosResponse<GetDocumentsProps[]>> {
    return api.get('/regras')
}

export function uploadDocument(formData: FormData) {
    return api.post('/regras', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function deleteDocument(idDocument: number) {
    return api.delete(`/regras/${idDocument}`)
}
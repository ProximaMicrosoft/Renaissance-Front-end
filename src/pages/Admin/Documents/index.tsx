import { useEffect, useState } from 'react';
import {  Tabs, Tab, Spinner } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { AdminMenu } from '../../../components/menu';

import {ReactComponent as DocumentIcon} from '../../../assets/icons/documents-admin.svg';
import {ReactComponent as UploadIcon} from '../../../assets/icons/upload.svg';

import { deleteDocument, getDocuments, GetDocumentsProps, uploadDocument } from '../../../services/documents';

import './styles.scss';


export function AdminDocuments() { 

    const [documents, setDocuments] = useState<GetDocumentsProps[]>([]);
   
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getDocuments().then(e => setDocuments(e.data))
    }, [documents])

    async function handleAddDocument(file: any) {
        setIsLoading(true);

        const formData = new FormData();

        formData.append('arquivo', file);
        
        uploadDocument(formData)
            .then(() => {
                alert('Arquivo enviado com sucesso');
                documents.length > 0 && deleteDocument(documents[0].id);
                setIsLoading(false);
            })
            .catch(() => {
                alert('Ocorreu um erro ao enviar o arquivo');
                setIsLoading(false);
            })
    }

    return(
        <div id="container">
            <header className="header-functions">
                <NavBar />
            </header>
 
            <Tabs defaultActiveKey="documents" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="documents" title="Documentos" className=".nav-link active">
                    <div id="tab-content">
                        <div className="document-item">
                            <div className="content">
                                <DocumentIcon />

                                <div>
                                    <h5>Regras do condomínio</h5>
                                    {isLoading && <Spinner animation="border" variant="success" />}
                                </div>
                            </div>

                            <label htmlFor="rules" >
                                <UploadIcon />
                            </label>
                            <input 
                                hidden 
                                type="file" 
                                name="rules" 
                                id="rules" 
                                accept=".pdf" 
                                onChange={(e) => {
                                    if(e.currentTarget.files !== null) {
                                        handleAddDocument(e.currentTarget.files[0]);
                                    }
                                }}/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
            <AdminMenu />
        </div>
    );
}
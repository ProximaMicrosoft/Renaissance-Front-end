import { useState } from 'react';
import {  Tabs, Tab, Spinner } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { AdminMenu } from '../../../components/menu';

import {ReactComponent as DocumentIcon} from '../../../assets/icons/documents-admin.svg';
import {ReactComponent as UploadIcon} from '../../../assets/icons/upload.svg';

import { api } from '../../../services/_api';

import './styles.scss';

export function AdminDocuments() { 
    const [docName, setDocName] = useState('');
    const [file, setFile] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    
    async function addDocuments() {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('arquivo', file);

        api.post('/regras', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
                setIsLoading(false);
                alert('Arquivo enviado com sucesso');
                
            })
            .catch(() => {
                setIsLoading(false);
                setDocName('');
                alert('Não foi possivel realizar upload do arquivo');
            });
        
        const inputFile: HTMLInputElement | null = document.querySelector("input")
        if(inputFile !== null)
            inputFile.value = '';
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
                                    <i>
                                        <h5 className="docName">{docName.replace("C:\\fakepath\\", "")}</h5>
                                        {isLoading && <Spinner animation="border" variant="success" />}
                                    </i>
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
                                    setDocName(e.currentTarget.value)
                                    e.currentTarget.files !== null && setFile(e.currentTarget.files[0]);
                                    console.log(e.currentTarget.files)
                                    addDocuments();
                                }}/>
                        </div>
                        
                        <div className="document-item">
                            <div className="content">
                                <DocumentIcon />

                                <h5>Comunicado dd/mm</h5>
                            </div>

                            <label htmlFor="release">
                                <UploadIcon />
                            </label>
                            <input hidden type="file" name="release" id="release"/>
                        </div>

                        <div className="document-item">
                            <div className="content">
                                <DocumentIcon />

                                <h5>Ata Reunião dd/mm</h5>
                            </div>

                            <label htmlFor="protocol">
                                <UploadIcon />
                            </label>
                            <input hidden type="file" name="protocol" id="protocol"/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
            <AdminMenu />
        </div>
    );
}
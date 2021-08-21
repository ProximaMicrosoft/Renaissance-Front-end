import {  Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { Menu } from '../../../components/menu';

import {ReactComponent as DocumentIcon} from '../../../assets/icons/documents.svg';
import downloandIcon from '../../../assets/icons/downloand.svg';

import { api } from '../../../services/_api';

import './styles.scss';

export function Documents() { 
    async function getDocuments() {
        api.get('/regras')
            .then((res) => {
                let blob = new Blob([res.data.arquivo], {
                    type: 'application/pdf'
                });
                let url = window.URL.createObjectURL(blob)
                window.open(url);
            })
            .catch(function(error) {
                console.log(error)
            });
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

                                <h5>Regras do condomínio</h5>
                            </div>

                            <button type="button" onClick={() => getDocuments()}>
                                <img src={downloandIcon} alt="Baixar Regras do condomínio" />
                            </button>
                        </div>
                        
                        <div className="document-item">
                            <div className="content">
                                <DocumentIcon />

                                <h5>Comunicado dd/mm</h5>
                            </div>

                            <button type="button" onClick={() => getDocuments()}>
                                <img src={downloandIcon} alt="Baixar Regras do condomínio" />
                            </button>
                        </div>

                        <div className="document-item">
                            <div className="content">
                                <DocumentIcon />

                                <h5>Ata Reunião dd/mm</h5>
                            </div>

                            <button type="button" onClick={() => getDocuments()}>
                                <img src={downloandIcon} alt="Baixar Regras do condomínio" />
                            </button>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
            <Menu />
        </div>
    );
}
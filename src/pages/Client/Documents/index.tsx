import {  Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { Menu } from '../../../components/menu';

import {ReactComponent as DocumentIcon} from '../../../assets/icons/documents.svg';
import downloandIcon from '../../../assets/icons/downloand.svg';

import { api } from '../../../services/_api';

import './styles.scss';
import { useEffect, useState } from 'react';

export function Documents() { 
    const [condoRules, setCondoRules] = useState('');

    useEffect(() => {
        async function getDocuments() {
            api.get('/regras')
                .then((res) => {
                    setCondoRules(res.data[0].arquivo);
                })
                .catch(() => {
                    alert('Não foi possível efetuar o download');
                });
        }
        getDocuments();
    }, [])

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

                            <a href={condoRules} download>
                                <img 
                                    src={downloandIcon} 
                                    alt="Baixar a do condomínio" 
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
            <Menu />
        </div>
    );
}
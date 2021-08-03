import { useHistory } from 'react-router-dom';
import { Offcanvas, Tabs, Tab } from 'react-bootstrap';

import { OffcanvasContent } from '../../../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';

import { useMenu } from '../../../../../hooks/useMenu';

import hamburguerIcon from '../../../../../assets/hamburguer.svg';
import returnIcon from '../../../../../assets/arrow-left.svg';
import user from '../../../../../assets/profile_user.svg';
import condo from '../../../../../assets/profile_condo.svg';
import cpf from '../../../../../assets/profile_cpf.svg';
import born from '../../../../../assets/profile_calendar.svg';
import email from '../../../../../assets/profile_email.svg';
import password from '../../../../../assets/profile_password.svg';
import phone from '../../../../../assets/profile_phone.svg';

import './styles.scss';

export function MyData() {  
    const menuContext = useMenu();
    const history = useHistory();

    return(
        <div id="container">
            <header className="header-functions">
                <div id="nav-icons">
                    <img src={returnIcon} onClick={() => history.goBack()} alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" className="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>
            </header>
 
            <Tabs defaultActiveKey="my-data" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="my-data" title="Meus dados">
                    <div id="tab-content">
                        <ul className="disabled-inputs">
                            <li>
                                <img src={user} alt="Nome completo" />
                                <h3>Antônio Guilherme do Nascimento Pereira</h3>
                            </li>

                            <li>
                                <img src={condo} alt="Condomínio" />
                                <h3>Apt 40-B</h3>
                            </li>

                            <li>
                                <img src={cpf} alt="CPF" />
                                <h3>301.404.200-79</h3>
                            </li>

                            <li>
                                <img src={born} alt="Data de nascimento" />
                                <h3>20/03/2000</h3>
                            </li>
                        </ul>

                        <ul className="editable-inputs">
                            <li>
                                <img src={email} alt="E-mail" />
                                <h3>antonioguilhermeinfo@gmail.com</h3>
                            </li>

                            <li>
                                <img src={password} alt="Senha" />
                                <h3>**********</h3>
                            </li>

                            <li>
                                <img src={phone} alt="Número de telefone" />
                                <h3>(85) 98810-0510</h3>
                            </li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>

        </div>
    );
}
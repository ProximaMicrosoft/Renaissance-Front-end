import { Offcanvas, Tabs, Tab } from 'react-bootstrap';

import { MenuContent } from '../../../components/menu/menuContent';
import NavBar from '../../../components/navBar';

import { useMenu } from '../../../hooks/useMenu';
import { useAuth } from '../../../hooks/useAuth';

import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import condo from '../../../assets/icons/condo.svg';
import cpf from '../../../assets/icons/cpf.svg';
import born from '../../../assets/icons/calendar_profile.svg';
import email from '../../../assets/icons/email.svg';
import password from '../../../assets/icons/password.svg';
import phone from '../../../assets/icons/phone.svg';

import './styles.scss';

export function MyData() {  
    const menuContext = useMenu();
    const authContext = useAuth();

    return(
        <div id="container">
            <header className="header-functions">
                <NavBar />
            </header>
 
            <Tabs defaultActiveKey="my-data" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="my-data" title="Meus dados" className=".nav-link active">
                    <div id="tab-content">
                        <ul className="disabled-inputs">
                            <li className="user">
                                <UserIcon />
                                <h3>{authContext.user?.name}</h3>
                            </li>

                            <li>
                                <img src={condo} alt="Condomínio" />
                                <h3>Apt {authContext.user?.numeroapartamento}</h3>
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
                                <h3>{authContext.user?.email}</h3>
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
                <MenuContent />
            </Offcanvas>

        </div>
    );
}
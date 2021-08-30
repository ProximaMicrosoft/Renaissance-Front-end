import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {  Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { Menu } from '../../../components/menu';
import { InputModal } from '../../../components/modal/input';

import { useAuth } from '../../../hooks/useAuth';

import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import {ReactComponent as CondoIcon} from '../../../assets/icons/condo.svg';
import {ReactComponent as CpfIcon} from '../../../assets/icons/cpf.svg';
import {ReactComponent as BornIcon} from '../../../assets/icons/calendar_profile.svg';
import {ReactComponent as EmailIcon} from '../../../assets/icons/email.svg';
import {ReactComponent as PasswordIcon} from '../../../assets/icons/password.svg';
import {ReactComponent as PhoneIcon} from '../../../assets/icons/phone.svg';

import './styles.scss';


export function MyData() {  
    const authContext = useAuth();
    const history = useHistory();
    const [emailModal, setEmailModal] = useState(false);
    const [password, setPassword] = useState('');

    function confirmPasswordToChangeEmail(e: FormEvent) {
        e.preventDefault();
    
        if(authContext.user.password === password) {
            setEmailModal(false);
            history.push('/change-email')
        }
    }
 
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
                                <CondoIcon />
                                <h3>Apt {authContext.user?.numeroapartamento}</h3>
                            </li>

                            <li>
                                <CpfIcon />
                                <h3>{authContext.user.cpf}</h3>
                            </li>

                            <li>
                                <BornIcon />
                                <h3>{authContext.user.datanascimento}</h3>
                            </li>
                        </ul>

                        <ul className="editable-inputs">
                            <li onClick={() => setEmailModal(true)}>
                                <EmailIcon />
                                <h3>{authContext.user?.email}</h3>
                            </li>

                            <li>
                                <PasswordIcon />
                                <h3>**********</h3>
                            </li>

                            <li>
                                <PhoneIcon />
                                <h3>{authContext.user.numerotelefone}</h3>
                            </li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            
            <Menu />

            <InputModal 
                show={emailModal}
                onHide={() => setEmailModal(false)}
                title="Alterar e-mail"
                description="Confirme sua senha para alterar o seu e-mail de cadastro."
            >
                <form onSubmit={confirmPasswordToChangeEmail}>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        placeholder="Senha atual aqui"
                        
                        />
                    <button type="submit">Confirmar senha</button>
                </form>
            </InputModal>
        </div>
    );
}
import { FormEvent, useEffect, useState } from 'react';
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
import { api } from '../../../services/_api';
import { sendLinkToResetPassword } from '../../../services/user';
import { AlertModal } from '../../../components/modal/alert';


export function MyData() {  
    const authContext = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [emailModal, setEmailModal] = useState(false);
    const [password, setPassword] = useState('');
    const [phoneModal, setphoneModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [forgottenPasswordModalShow, setForgottenPasswordModalShow] = useState(false);
    const [linkSent, setLinkSent] = useState(false);

    useEffect(() => {
        const layout: HTMLDivElement | null = document.querySelector('#container')
        if(layout !== null) 
            layout.style.height = `${window.screen.height}px`
    }, []);

    function confirmPasswordToChangeEmail(e: FormEvent) {
        e.preventDefault();
    
        if(authContext.user.password === password) {
            setEmailModal(false);
            history.push('/change-email')
        }
    }

    async function resetPhone(e: FormEvent) {
        e.preventDefault();

        await api.put(`/usuario/${authContext.user.id}`, {
            numerotelefone: phoneNumber
        }).then(() => {
            alert('Numero de telefone alterado com sucesso')
            authContext.user.numerotelefone = phoneNumber;
            setphoneModal(false)
        })
        .catch(() => {
            alert('Nao foi possivel alterar o número de telefone')
            setphoneModal(false);
        })
        
    }

    function handleForgottenPassword(e: FormEvent) {
        e.preventDefault();

        sendLinkToResetPassword(email)
            .then(() => {
                setForgottenPasswordModalShow(false);
                setLinkSent(true);
            }).catch(() => {
                alert("O e-mail digitado não existe ou está incorreto.")
            })        
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

                            <li onClick={() => setForgottenPasswordModalShow(true)}>
                                <PasswordIcon />
                                <h3>**********</h3>
                            </li>

                            <li onClick={() => setphoneModal(true)}>
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

            <InputModal 
                show={forgottenPasswordModalShow}
                onHide={() => setForgottenPasswordModalShow(false)}
                title="Recuperar senha"
                description="Um link para recuperar sua senha será enviado para o seu e-mail de cadastro atual"
            >
                <form onSubmit={handleForgottenPassword}>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        placeholder="E-mail de cadastro"
                        onChange={e => setEmail(e.currentTarget.value)}
                        />
                    <button type="submit">Enviar e-mail</button>
                </form>
            </InputModal>

            <InputModal 
                show={phoneModal}
                onHide={() => setphoneModal(false)}
                title="Alterar telefone"
                description="Digite seu novo número de telefone para altera-lo. Com DDD e o 9 na frente."
            >
                <form onSubmit={resetPhone}>
                    <input 
                        type="number" 
                        name="phone" 
                        id="phone" 
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.currentTarget.value)}
                        placeholder="Novo número"
                        
                        />
                    <button type="submit">Confirmar número</button>
                </form>
            </InputModal>

            <AlertModal 
                isCheck={true}
                show={linkSent}
                onHide={() => setLinkSent(false)}
                title="Link enviado"
                description="Verifique seu e-mail para alterar sua senha atual"
            />
        </div>
    );
}
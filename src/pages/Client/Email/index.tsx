import { FormEvent, useState } from 'react';
import {  Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { Menu } from '../../../components/menu';

import { useAuth } from '../../../hooks/useAuth';

import email from '../../../assets/icons/email.svg';

import './styles.scss';
import { AlertModal } from '../../../components/modal/alert';
import { ButtonSubmit } from '../../../components/buttonSubmit';
import { api } from '../../../services/_api';

export function ChangeEmail() {  
    const authContext = useAuth();

    const [newEmail, setNewEmail] = useState('')
    const [newEmailRepeated, setNewEmailRepeated] = useState('');
    const [confirmationEmailModal, setConfirmationEmailModal] = useState(false)

    async function validateEmail(e: FormEvent) {
        e.preventDefault();

        if(newEmail === newEmailRepeated){
            await api.put(`/usuario/${authContext.user.id}`, {
                newEmail
            }).then(() => setConfirmationEmailModal(true))
        } 
    }

    return(
        <div id="container">
            <header className="header-functions">
                <NavBar />
            </header>
 
            <Tabs defaultActiveKey="e-mail" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="e-mail" title="Alterar e-mail" className=".nav-link active">
                    <div id="tab-content">
                        <form onSubmit={validateEmail}>
                            <div className="field-group">
                                <fieldset>
                                    <img src={email} alt="E-mail" />
                                    <input 
                                        type="email" id="email"
                                        value={newEmail}
                                        onChange={e => setNewEmail(e.currentTarget.value)}
                                        placeholder="Novo e-mail" 
                                    />
                                </fieldset>

                                <fieldset>
                                    <img src={email} alt="E-mail" />
                                    <input 
                                        type="email" id="email"
                                        value={newEmailRepeated}
                                        onChange={e => setNewEmailRepeated(e.currentTarget.value)}
                                        placeholder="Repetir novo e-mail" 
                                    />
                                </fieldset>
                            </div>
                            
                            <ButtonSubmit 
                                loading={false}
                                text="Confirmar novo e-mail"
                            />
                        </form>
                    </div>
                </Tab>
            </Tabs>
            
            <Menu />

            <AlertModal 
                isCheck={true}
                show={confirmationEmailModal}
                onHide={() => setConfirmationEmailModal(false)}
                title="E-mail alterado"
                description="Seu e-mail foi alterado com sucesso"
            />
        </div>
    );
}
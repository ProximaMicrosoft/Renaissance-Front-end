import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {  Tabs, Tab } from 'react-bootstrap';

import { ButtonSubmit } from '../../components/buttonSubmit';

import passwordIcon from '../../assets/icons/password.svg';

import { redefinePassword } from '../../services/user';

import './styles.scss';

export function ResetPassword() { 
    const history = useHistory(); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const layout: HTMLDivElement | null = document.querySelector('#container')
        if(layout !== null) 
            layout.style.height = `${window.screen.height}px`
    }, []);

    async function handleRedefinePassword(e: FormEvent) {
        e.preventDefault();
        const token = window.location.pathname.replace("/forgot-password/", "");
        
        if(password === confirmPassword){
            redefinePassword(token, password)
                .then(() => {
                    alert('Senha redefinida com sucesso');
                    history.push('/');
                })
        } else {
            alert('suas senhas não batem, digite novamente sua nova senha')
        }
    }

    return(
        <div id="container">
            <header className="header-functions">
                
            </header>
 
            <Tabs defaultActiveKey="password" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="password" title="Alterar senha" className=".nav-link active">
                    <div id="tab-content">
                        <form onSubmit={handleRedefinePassword}>
                                <div className="field-group">
                                    <fieldset>
                                        <img src={passwordIcon} alt="Nova Senha" />
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            value={password} 
                                            placeholder="Digite sua nova senha"
                                            onChange={e => setPassword(e.currentTarget.value)}
                                        />
                                    </fieldset>

                                    <fieldset>
                                        <img src={passwordIcon} alt="Confirmar nova senha" />
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            value={confirmPassword} 
                                            placeholder="Confirme sua nova senha"
                                            onChange={e => setConfirmPassword(e.currentTarget.value)}
                                        />
                                    </fieldset>
                                </div>
                                
                                <ButtonSubmit 
                                    loading={false}
                                    text="Confirmar nova senha"
                                />
                            </form>
                        </div>
                </Tab>
            </Tabs>
            
        </div>
    );
}
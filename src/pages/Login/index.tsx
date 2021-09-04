import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonSubmit } from '../../components/buttonSubmit';
import { AlertModal } from '../../components/modal/alert';

import { useAuth } from '../../hooks/useAuth';

import logoIcon from '../../assets/icons/logo.svg';
import eyeIcon from '../../assets/icons/eye.svg';
import eyeClosedIcon from '../../assets/icons/eye-off.svg';

import { login, sendLinkToResetPassword } from '../../services/user';

import { getStorage, saveStorage } from '../../utils/storage';

import './styles.scss';
import { InputModal } from '../../components/modal/input';


export function Login() {
    const history = useHistory();
    const authContext = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckboxMarked, setIsCheckboxMarked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [lightPasswordField, setLightPasswordField] = useState(false);
    const [forgottenPasswordModalShow, setForgottenPasswordModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);
    const [linkSent, setLinkSent] = useState(false);

    //corrige quebra no layout quando teclado sobe
    useEffect(() => {
        const layout: HTMLDivElement | null = document.querySelector('#container-login')
        if(layout !== null) 
            layout.style.height = `${window.screen.height}px`
    }, [])
    
    // verifica se o usuário já estava logado
    useEffect(() => {
        if(getStorage("userData")) { 
            authContext.setUser(getStorage("userData"));
            console.log(getStorage('userData')); 
            history.push('/');
        }

        // eslint-disable-next-line
    }, [])

    function handleLogin(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        login(email, password)
            .then((e) => {
                authContext.setUser(e.data.user)
                isCheckboxMarked && saveStorage("userData", e.data.user);
                history.push('/');
            })
            .catch(() => {
                window.alert('Credenciais incorretas, digite novamente ou entre em contato com o administrador.');
                setIsLoading(false);
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
        <div id="container-login">
            <div id="title_login">
                <img src={logoIcon} alt="Renaissance Logo" />
            </div>

            <main>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
 
                    <div id="content-top">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            inputMode="email"
                            value={email}
                            onChange={e => setEmail(e.currentTarget.value)}
                            
                        />
                        
                        <div className={`password-field ${lightPasswordField ? 'light' : ''}`}>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                name="password" 
                                id="password" 
                                autoComplete="current-password"
                                placeholder="Senha"
                                value={password}
                                onBlur={() => setLightPasswordField(false)}
                                onFocus={() => setLightPasswordField(true)}
                                onChange={e => setPassword(e.currentTarget.value)}
                            />
                            
                            <div id="showPassword">
                                <img 
                                    src={showPassword ? eyeIcon : eyeClosedIcon} 
                                    alt="Mostrar/ocultar senha" 
                                    onClick={() => setShowPassword(showPassword ? false : true)}
                                />
                            </div>
                        </div>
                        

                        <div id="continueConnected">
                            <div>
                                <input 
                                    type="checkbox" 
                                    checked={isCheckboxMarked} 
                                    onChange={() => setIsCheckboxMarked(isCheckboxMarked ? false : true)} 
                                    name="connected" 
                                    id="connected" 
                                />
                            </div>
                            <h5>Manter-me conectado</h5>
                        </div>
                    </div>
                    
                    <div id="content-bottom">
                        <ButtonSubmit loading={isLoading} text="Entrar"/>

                        <button 
                            type="button" className="modal-button"
                            onClick={() => setForgottenPasswordModalShow(true)}
                        >Esqueci minha senha</button>
                    </div>
                 
                    <div id="unregister">
                        Não possui cadastro?
                        <button 
                            type="button" 
                            className="modal-button" 
                            onClick={() => setRegisterModalShow(true)}
                        >
                            Clique Aqui
                        </button>
                    </div>
                </form>
            </main>

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

            <AlertModal 
                isCheck={false}
                show={registerModalShow}
                onHide={() => setRegisterModalShow(false)}
                title="Fale com o adm!"
                description="Para realizar seu cadastro fale com o administrador do seu condomínio"
            />

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
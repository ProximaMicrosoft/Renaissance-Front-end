import { FormEvent, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { ButtonSubmit } from '../../components/buttonSubmit';
import { AlertModal } from '../../components/modal/alert';

import { useAuth } from '../../hooks/useAuth';

import logoIcon from '../../assets/icons/logo.svg';
import eyeIcon from '../../assets/icons/eye.svg';
import eyeClosedIcon from '../../assets/icons/eye-off.svg';

import { login } from '../../services/user';

import { getStorage, saveStorage } from '../../utils/storage';

import './styles.scss';


export function Login() {
    const history = useHistory();
    const authContext = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckboxMarked, setIsCheckboxMarked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [lightPasswordField, setLightPasswordField] = useState(false);
    const [modalShow, setModalShow] = useState(false);

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

                        <Link to="/a">Esqueci minha senha</Link>
                    </div>
                 
                    <div id="unregister">
                        Não possui cadastro?<a type="button" onClick={() => setModalShow(true)}>Clique Aqui</a>
                    </div>
                </form>
            </main>

            <AlertModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <h3>Fale com o administrador do seu condomínio para realizar seu cadastro</h3>
                
            </AlertModal>
        </div>

        
    );
}
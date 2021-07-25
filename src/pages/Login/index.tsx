import { FormEvent, useEffect, useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// import { Link } from '../../components/Link/Link';

import { AxiosResponse } from 'axios';
import { Spinner } from 'react-bootstrap';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';
import eye from '../../assets/eye-outline.svg';
import eyeClosed from '../../assets/eye-off-outline.svg';

import './styles.scss';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const history = useHistory();
    const context = useAuth();

    // verifica se o usuário já estava logado
    useEffect(() => {
        if(localStorage.getItem('userData') !== null) { 
            const user = localStorage.getItem('userData')

            typeof(user) === 'string' && context?.setUser(JSON.parse(user))

            history.push('/home')
        }
        // eslint-disable-next-line
    }, [])

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        setLoading(true);

        try{
            const loginResponse: AxiosResponse<LoginResponse> = await api.post('/login', {
                email,
                password
            })

            context?.setUser(loginResponse.data.user);

            if(check) 
                localStorage.setItem("userData", JSON.stringify(loginResponse.data.user));

            history.push('/home');
        } catch {
            window.alert('Credenciais incorretas, digite novamente ou entre em contato com o administrador.');

            setLoading(false);
        }
    }

    return(
        <div id="content">
            <div id="title_login">
                <img src={logoImg} alt="Renaissance Logo" />
                <h3>RENAISSANCE</h3>
            </div>

            <form onSubmit={handleLogin}>
                <div id="content-top">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                    
                    <div id="password-field">
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password" 
                            id="password" 
                            autoComplete="current-password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={e => setPassword(e.currentTarget.value)}
                        />
                        
                        <div id="showPassword">
                            <img 
                                src={showPassword ? eye : eyeClosed} 
                                alt="Mostrar/ocultar senha" 
                                onClick={() => setShowPassword(showPassword ? false : true)}
                            />
                        </div>
                    </div>
                    

                    <div id="continueConnected">
                        <div>
                            <input 
                                type="checkbox" 
                                checked={check} 
                                onChange={() => setCheck(check ? false : true)} 
                                name="connected" 
                                id="connected" 
                            />
                        </div>
                        <h3>Manter-me conectado neste dispositivo</h3>
                    </div>
                </div>
                
                <div id="content-bottom">
                    <button 
                    type="submit" 
                    id="submit" >
                        {loading ? <Spinner animation="border" variant="light" /> : "Entrar"}
                    </button>

                    <div id="actions">
                        <Link to="/a">
                            <p>Esqueci minha senha</p>
                        </Link>

                        <div>
                            <p>
                                Não possui cadastro? 
                            </p>
                            <Link to="/">
                                <p>Clique Aqui</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

            
        </div>
    );
}
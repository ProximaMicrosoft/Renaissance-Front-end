import { FormEvent, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Link } from '../../components/Link/Link';

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

    //verifica se o usuário já estava logado
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
        const loginResponse: AxiosResponse<LoginResponse> = await api.post('/login', {
            email,
            password
        })
        setLoading(false);
        if(loginResponse.status === 200) {
            context?.setUser(loginResponse.data.user);

            if(check) 
                localStorage.setItem("userData", JSON.stringify(loginResponse.data.user))
            
            
            history.push('/home');
        } else {
            alert('Credenciais incorretas, digite novamente ou entre em contato com o administrador.')
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
                        required
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                    
                    <fieldset>
                        <input 
                            required
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
                    </fieldset>
                    

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
                        Manter-me conectado neste dispositivo
                    </div>
                </div>
                
                <div id="content-bottom">
                    <button 
                    type="submit" 
                    id="submit" >
                        {loading ? <Spinner animation="border" variant="light" /> : 'Entrar'}
                    </button>

                    <div id="actions">
                        <Link to="/a">
                            Esqueci minha senha
                        </Link>

                        <div>
                            <p>
                                Não possui cadastro? 
                            </p>
                            <Link to="/">
                                Clique Aqui
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

            
        </div>
    );
}
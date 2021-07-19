import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AxiosResponse } from 'axios';
import { api } from '../../services/api';
import { login } from '../../services/auth';
import './styles.scss';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        const loginResponse: AxiosResponse<LoginResponse> = await api.post('/login', {
            email,
            password
        })

        if(loginResponse.status === 200) { 
            // login(loginResponse.data.user.token, loginResponse.data.user);
            login('token temporário', loginResponse.data.user);
            history.push('/home');
        } else {
            alert('Credenciais incorretas, digite novamente ou entre em contato com o administrador.')
        }
    }

    return(
        <div id="content">
            <div className="title_login">
                <h3>Renaissance</h3>
                <h1>Login</h1>
            </div>

            <form onSubmit={handleLogin}>
                <div id="formContent">
                    <fieldset>
                        <h4>Email</h4>
                        <input 
                        required
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}/>
                    </fieldset>

                    <fieldset>
                        <h4>Senha</h4>
                        <input 
                        required
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}/>
                    </fieldset>

                    <div id="continueConnected">
                        <input type="checkbox" name="connected" id="connected" />
                        Continuar conectado
                    </div>
                    

                    <input type="submit" id="submit" value="Entrar" />
                </div>
            </form>
        </div>
    );
}
import { FormEvent,  useEffect,  useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import Cookies from 'universal-cookie';

import './styles.scss';


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const cookie = new Cookies(); 
    const history = useHistory();

    useEffect(() => {
        !!cookie.get('uid') && history.push('/home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleSignIn(e: FormEvent) {
        e.preventDefault();

        const login = await api.post('/', {
            email,
            password
        })
        cookie.set('uid', login.data);
        history.push('/home');
    }

    return(
        <div className="content">
            <form onSubmit={handleSignIn}>
                <fieldset>
                    <h3>Email</h3>
                    <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                </fieldset>
                
                <fieldset>
                    <h3>Senha</h3>
                    <input type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                </fieldset>
                
                <input type="submit" value="logar" id="logar"/>
            </form>
        </div>
    );
}
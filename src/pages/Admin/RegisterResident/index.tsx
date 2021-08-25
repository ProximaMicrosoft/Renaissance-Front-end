import { FormEvent, ReactNode, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
 
import userIcon from '../../../assets/icons/user.svg';

import './styles.scss';

// import { AlertModal } from '../../../components/modal/alert';
import { Menu } from '../../../components/menu';
// import { ConfirmModal } from '../../../components/modal/confirm';
import { ButtonSubmit } from '../../../components/buttonSubmit';
import { createUser, getGeneralUsers } from '../../../services/user';

export function AdminRegisterResident() {  
    const [name, setName] = useState('');
    const [apt, setApt] = useState<number>(0);
    const [cpf, setCpf] = useState('');
    const [born, setBorn] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [listUsers, setListUsers] = useState<ReactNode[]>()

    function listingUsers() {
        let aux: ReactNode[] = [];

        getGeneralUsers().then(e => {
            const USERS = e.data

            for(let i = 0; i < USERS.length; i++) {
                aux.push(
                    <div className="user">
                        <img src={userIcon} alt={USERS[i].name} />
                        <div className="info-user">
                            <h5>{USERS[i].name}</h5>
                            <h5>Apt. {USERS[i].numeroapartamento}</h5>
                        </div>
                    </div>
                )
            }
        })

        setListUsers(aux);
    }

    function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        if(password === confirmPassword){
            createUser(name, email, password, phone, apt, cpf, born)
                .then(() => alert("Usuário cadastrado com sucesso"))
                .catch(() => alert("Falha ao cadastrar usuário"))
        } else {
            alert('Senhas diferentes, por favor, digite novamente sua senha')
        }
    }

    return(
        <div id="container">
            <header>
                <NavBar />
            </header>
 
            <Tabs 
                defaultActiveKey="create-user" 
                id="uncontrolled-tab-example" 
                className="mb-3" 
                onSelect={
                    (v) => (v==="list-users") && 
                    listingUsers()
                }
            >
                <Tab eventKey="create-user" title="Cadastrar morador" >
                    <div id="tab-content">
                        <form onSubmit={handleCreateUser} autoComplete="off">
                            <fieldset>
                                <img src={userIcon} alt="Nome" />
                                <input 
                                    type="text" 
                                    id="name"
                                    value={name}
                                    required
                                    autoComplete="off"
                                    onChange={e => setName(e.currentTarget.value)}
                                    placeholder="Nome" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="Apartamento" />
                                <input 
                                    type="number" 
                                    id="name"
                                    required
                                    autoComplete="off"
                                    onChange={e => setApt(parseInt(e.currentTarget.value))}
                                    placeholder="Número do apartamento" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="Cpf" />
                                <input 
                                    type="text" 
                                    id="cpf"
                                    value={cpf}
                                    required
                                    autoComplete="off"
                                    onChange={e => setCpf(e.currentTarget.value)}
                                    placeholder="CPF" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="Data de nascimento" />
                                <input 
                                    type="text" 
                                    id="born"
                                    value={born}
                                    required
                                    autoComplete="off"
                                    onChange={e => setBorn(e.currentTarget.value)}
                                    placeholder="Data de Nascimento" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="Telefone" />
                                <input 
                                    type="text" 
                                    id="phone"
                                    value={phone}
                                    required
                                    autoComplete="off"
                                    onChange={e => setPhone(e.currentTarget.value)}
                                    placeholder="Telefone p/ contato" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="Email" />
                                <input 
                                    type="email" 
                                    id="email"
                                    value={email}
                                    required
                                    autoComplete="off"
                                    onChange={e => setEmail(e.currentTarget.value)}
                                    placeholder="E-mail" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="senha" />
                                <input 
                                    type="password" 
                                    id="password"
                                    value={password}
                                    required
                                    autoComplete="off"
                                    onChange={e => setPassword(e.currentTarget.value)}
                                    placeholder="Senha" 
                                />
                            </fieldset>

                            <fieldset>
                                <img src={userIcon} alt="senha" />
                                <input 
                                    type="password" 
                                    id="password"
                                    value={confirmPassword}
                                    required
                                    autoComplete="off"
                                    onChange={e => setConfirmPassword(e.currentTarget.value)}
                                    placeholder="Confirmar Senha" 
                                />
                            </fieldset>
                            
                            <ButtonSubmit 
                                loading={false}
                                text="Confirmar cadastro"
                            />
                        </form>
                    </div>
                </Tab>

                <Tab eventKey="list-users" title="Moradores cadastrados" onClick={() => listingUsers()}>
                    <div id="tab-content">
                        <ul className="listing">
                            {listUsers}
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            
 
            <Menu />
        </div>
    );
}
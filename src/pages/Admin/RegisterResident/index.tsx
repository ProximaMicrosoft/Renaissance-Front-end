import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { AdminMenu } from '../../../components/menu';
import { ButtonSubmit } from '../../../components/buttonSubmit';
import NavBar from '../../../components/navBar';
 
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import {ReactComponent as CondoIcon} from '../../../assets/icons/condo.svg';
import {ReactComponent as CpfIcon} from '../../../assets/icons/cpf.svg';
import {ReactComponent as BornIcon} from '../../../assets/icons/calendar_profile.svg';
import {ReactComponent as EmailIcon} from '../../../assets/icons/email.svg';
import {ReactComponent as PasswordIcon} from '../../../assets/icons/password.svg';
import {ReactComponent as PhoneIcon} from '../../../assets/icons/phone.svg';


import { createUser, getGeneralUsers } from '../../../services/user';

import './styles.scss';
import { validateBorn, validateCpf, validatePhone } from '../../../utils/validation';

export function AdminRegisterResident() {  
    const [name, setName] = useState('');
    const [apt, setApt] = useState<number>(0);
    const [cpf, setCpf] = useState('');
    const [born, setBorn] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [listUsers, setListUsers] = useState<ReactNode[]>();

    useEffect(() => {
        const layout: HTMLDivElement | null = document.querySelector('.container-register')
        const tabContent: HTMLDivElement | null = document.querySelector('#tab-content')
        if(layout !== null && tabContent !== null) {
            layout.style.height = `${window.screen.height}px`;
            tabContent.style.height = `${window.screen.height*0.82}px`;
        }
            
    }, [])

    function listingUsers() {
        let aux: ReactNode[] = [];

        getGeneralUsers().then(e => {
            const USERS = e.data

            for(let i = 0; i < USERS.length; i++) {
                aux.push(
                    <div className="user">
                        <UserIcon />
                        <div className="info-user">
                            <h3>{USERS[i].name}</h3>
                            <h5>Apt. {USERS[i].numeroapartamento}</h5> 
                        </div>
                    </div>
                )
            }

            setListUsers(aux);
        })
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
        <div className="container-register">
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
                                <UserIcon />
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
                                <CondoIcon />
                                <input 
                                    type="number" 
                                    inputMode="numeric"
                                    id="name"
                                    required
                                    autoComplete="off"
                                    onChange={e => setApt(parseInt(e.currentTarget.value))}
                                    placeholder="Número do apartamento" 
                                />
                            </fieldset>

                            <fieldset>
                                <CpfIcon />
                                <input 
                                    type="text" 
                                    id="cpf"
                                    inputMode="numeric"
                                    value={validateCpf(cpf)}
                                    required
                                    autoComplete="off"
                                    onChange={e => setCpf(e.currentTarget.value)}
                                    placeholder="CPF" 
                                />
                            </fieldset>

                            <fieldset>
                                <BornIcon />
                                <input 
                                    type="text" 
                                    inputMode="numeric"
                                    id="born"
                                    value={validateBorn(born)}
                                    required
                                    autoComplete="off"
                                    onChange={e => setBorn(e.currentTarget.value)}
                                    placeholder="Data de Nascimento" 
                                />
                            </fieldset>

                            <fieldset>
                                <PhoneIcon />
                                <input 
                                    type="text" 
                                    inputMode="tel"
                                    id="phone"
                                    value={validatePhone(phone)}
                                    required
                                    autoComplete="off"
                                    onChange={e => setPhone(e.currentTarget.value)}
                                    placeholder="Telefone p/ contato" 
                                />
                            </fieldset>

                            <fieldset>
                                <EmailIcon />
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
                                <PasswordIcon />
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
                                <PasswordIcon />
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
            
 
            <AdminMenu />
        </div>
    );
}
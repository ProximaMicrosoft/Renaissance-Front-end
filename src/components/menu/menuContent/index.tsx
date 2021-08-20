import { Link } from 'react-router-dom';

import { useMenu } from '../../../hooks/useMenu';
import { useLogout } from '../../../hooks/useLogout';

import HamburguerIcon from '../../../assets/icons/hamburguer.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import {ReactComponent as CalendarIcon} from '../../../assets/icons/calendar.svg';
import {ReactComponent as DocumentsIcon} from '../../../assets/icons/documents.svg';
import outIcon from '../../../assets/icons/go-out.svg'

import './styles.scss';


export function MenuContent() {
    const menuContext = useMenu();
    const logoutContext = useLogout();

    return(
        <div id="offcanvasContainer">
            <header> 
                <button className="item-button" onClick={() => menuContext.setShow(false)}>
                    <div id="content-button">
                        <h3>MENU</h3>
                        <img src={HamburguerIcon} alt="Menu"/>
                    </div>
                </button>
            </header>
            <main>
                <Link to="/">
                    <button className="item-button" onClick={() => menuContext.setShow(false)}>
                        <div id="content-button">
                            <h3>Página Inicial</h3>
                            <img src={HomeIcon} alt="Home"/>
                        </div>
                    </button>
                    
                </Link>

                <div id="profile">
                    <Link to="/mydata">
                        <button className="item-button" onClick={() => menuContext.setShow(false)}>
                            <div id="content-button">
                                <h3>Meus dados</h3>
                                <UserIcon/>
                            </div>
                        </button>
                    </Link>

                    <Link to="/reserves">
                        <button className="item-button" onClick={() => menuContext.setShow(false)}>
                            <div id="content-button">
                                <h3>Reservas</h3>
                                <CalendarIcon/>
                            </div>
                        </button>
                    </Link>

                    <Link to="/rules">
                        <button className="item-button" onClick={() => menuContext.setShow(false)}>
                            <div id="content-button">
                                <h3>Documentos </h3>
                                <DocumentsIcon/>
                            </div>
                        </button>
                    </Link>
                </div>

                
            </main>

            <footer>
                <button 
                    className="item-button" 
                    onClick={() => {
                        menuContext.setShow(false);
                        logoutContext.setShow(true);
                    }}>
                    <div id="content-button">
                        <h3>Sair</h3>
                        <img src={outIcon} alt="Sair"/>
                    </div>
                </button>
            </footer>
        </div> 
    ); 
}
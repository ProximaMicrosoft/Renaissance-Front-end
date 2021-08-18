import { Offcanvas } from 'react-bootstrap';

import { ButtonNavigation } from '../../../components/buttonNavigation';

import { useMenu } from '../../../hooks/useMenu';

import hamburguerIcon from '../../../assets/icons/hamburguer.svg';
import returnIcon from '../../../assets/icons/arrow-left.svg';
import icon from '../../../assets/icons/user.svg';

import './styles.scss';
import { MenuContent } from '../../../components/menu/menuContent';

export function AdminHome() {       
    const menuContext = useMenu();

    return(
        <div id="container">
            <header>
                <div id="nav-icons">
                    <img src={returnIcon} id="return-icon" alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>

                <div id="title">
                    <h5>Bem-vindo, ADM</h5>
                </div>
            </header>

            <main>
                <ButtonNavigation img={icon} title="Cadastrar condômino" path="/register"/>

                <ButtonNavigation img={icon} title="Reservas" path="/reserves"/>

                <ButtonNavigation img={icon}title="Visitantes" path="/visitors"/>

                <ButtonNavigation img={icon} title="Achados e Perdidos" path="/lostandfound"/>

                <ButtonNavigation img={icon} title="Regras do condomínio" path="/rules"/>
            </main> 
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <MenuContent />
            </Offcanvas>

        </div>
    );
}
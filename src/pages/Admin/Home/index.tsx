import { Offcanvas } from 'react-bootstrap';

import { ButtonNavigation } from '../../../components/ButtonNavigation/ButtonNavigation';
import { OffcanvasContent } from '../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';

import { useMenu } from '../../../hooks/useMenu';

import hamburguerIcon from '../../../assets/hamburguer.svg';
import returnIcon from '../../../assets/arrow-left.svg';
import icon from '../../../assets/user.svg';

import './styles.scss';

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
                <ButtonNavigation image={icon} title="Cadastrar condômino" path="/register"/>

                <ButtonNavigation image={icon} title="Reservas" path="/reserves"/>

                <ButtonNavigation image={icon}title="Visitantes" path="/visitors"/>

                <ButtonNavigation image={icon} title="Achados e Perdidos" path="/lostandfound"/>

                <ButtonNavigation image={icon} title="Regras do condomínio" path="/rules"/>
            </main> 
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>

        </div>
    );
}
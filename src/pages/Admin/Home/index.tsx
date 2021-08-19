import { Offcanvas } from 'react-bootstrap';

import { ButtonNavigation } from '../../../components/buttonNavigation';
import { MenuContent } from '../../../components/menu/menuContent';
import NavBar from '../../../components/navBar';

import { useAuth } from '../../../hooks/useAuth';
import { useMenu } from '../../../hooks/useMenu';

import myDataIcon from '../../../assets/icons/user.svg';
import reservesIcon from '../../../assets/icons/calendar.svg';
import documentsIcon from '../../../assets/icons/documents.svg';

import './styles.scss';

export function AdminHome() {       
    const authContext = useAuth();
    const menuContext = useMenu();

    console.log(authContext.user.name)

    return( 
        <div id="container-home">
            <header>
                <NavBar home/>

                <div id="title">
                    <h5>Bem-vindo, ADM</h5>
                </div>
            </header>

            <main>      
                <ButtonNavigation img={myDataIcon} title="Meus dados" path="/mydata"/>

                <ButtonNavigation img={reservesIcon} title="Reservas" path="/reserves"/>

                <ButtonNavigation img={documentsIcon}title="Regras do condomínio" path="/rules"/>
            </main> 
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <MenuContent />
            </Offcanvas>  
        </div>
    );
}
import { Offcanvas } from 'react-bootstrap';

import { ButtonNavigation } from '../../../components/ButtonNavigation/ButtonNavigation';
import { OffcanvasContent } from '../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';

import { useAuth } from '../../../hooks/useAuth';
import { useMenu } from '../../../hooks/useMenu';

import hamburguerIcon from '../../../assets/hamburguer.svg';
import returnIcon from '../../../assets/arrow-left.svg';
import myDataIcon from '../../../assets/user.svg';
import reservesIcon from '../../../assets/calendar.svg';
import documentsIcon from '../../../assets/documents.svg';

import { getFirstName } from '../../../utils/getFirstName';

import './styles.scss';

export function Home() {       
    const authContext = useAuth();
    const menuContext = useMenu();

    return( 
        <div id="container-home">
            <header>
                <div id="nav-icons">
                    <img src={returnIcon} id="return-icon" alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>

                <div id="title">
                    <h5>Bem-vindo, {getFirstName(authContext.user?.name)}</h5>
                </div>
            </header>

            <main>      
                <ButtonNavigation image={myDataIcon} title="Meus dados" path="/mydata"/>

                <ButtonNavigation image={reservesIcon} title="Reservas" path="/reserves"/>

                <ButtonNavigation image={documentsIcon}title="Regras do condomínio" path="/rules"/>
            </main> 
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>  

        </div>
    );
}
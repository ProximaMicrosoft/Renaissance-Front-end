import { ButtonNavigation } from '../../../components/buttonNavigation';
import NavBar from '../../../components/navBar';
import { Menu } from '../../../components/menu';

import { useAuth } from '../../../hooks/useAuth';

import myDataIcon from '../../../assets/icons/user.svg';
import reservesIcon from '../../../assets/icons/calendar.svg';
import documentsIcon from '../../../assets/icons/documents.svg';

import { getFirstName } from '../../../utils/name';

import './styles.scss';

export function Home() {       
    const authContext = useAuth();

    return( 
        <div id="container-home">
            <header>
                <NavBar home/>

                <div id="title">
                    <h5>Bem-vindo, {getFirstName(authContext.user.name)}</h5>
                </div>
            </header>

            <main>      
                <ButtonNavigation img={myDataIcon} title="Meus dados" path="/mydata"/>

                <ButtonNavigation img={reservesIcon} title="Reservas" path="/reserves"/>

                <ButtonNavigation img={documentsIcon}title="Regras do condomínio" path="/documents"/>
            </main> 
 
            <Menu />
        </div>
    );
}
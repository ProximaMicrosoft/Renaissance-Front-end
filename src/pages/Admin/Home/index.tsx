import { ButtonNavigation } from '../../../components/buttonNavigation';
import NavBar from '../../../components/navBar';
import { AdminMenu } from '../../../components/menu';

import addUserIcon from '../../../assets/icons/add-user.svg';
import reservesIcon from '../../../assets/icons/calendar-admin.svg';
import documentsIcon from '../../../assets/icons/documents-admin.svg';

import './styles.scss';

export function AdminHome() {       
    return( 
        <div id="container-home"> 
            <header>
                <NavBar home/>

                <div id="title">
                    <h5>Bem-vindo, ADM</h5>
                </div>
            </header>

            <main>      
                <ButtonNavigation img={addUserIcon} title="Cadastrar morador" path="/register"/>

                <ButtonNavigation img={reservesIcon} title="Ver Reservas" path="/reserves"/>

                <ButtonNavigation img={documentsIcon} title="Documentos oficiais" path="/documents"/>
            </main> 
 
            <AdminMenu />
        </div>
    );
}
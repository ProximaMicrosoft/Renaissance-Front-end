import { ButtonNavigation } from '../../../components/ButtonNavigation/ButtonNavigation';
import './styles.scss';

 
export function AdminHome() {   
    return(
        <div id="container">
            <div className="title_main">
                <div id="title-group">
                    <h5>Olá,</h5>
                    <h1>Fulano</h1>
                </div>
                <h1>Home</h1>
            </div>

            <div id="menu-items">
                <div id="items">
                    <ButtonNavigation image="I" title="Cadastrar condômino" path="/register"/>

                    <ButtonNavigation image="I" title="Reservas" path="/reserves"/>
                
                    <ButtonNavigation image="I" title="Visitantes" path="/visitors"/>

                    <ButtonNavigation image="I" title="Achados e Perdidos" path="/lostandfound"/>

                    <ButtonNavigation image="I" title="Regras do condomínio" path="/rules"/>
                </div>
            </div>
        </div>
    );
}
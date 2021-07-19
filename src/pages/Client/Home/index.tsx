import thumb from '../../../assets/nick.png';
import { ButtonNavigation } from '../../../components/ButtonNavigation';

import './styles.scss';


export function Home() {   
    return(
        <div id="container">
            <div className="title_main">
                <div id="title-group">
                    <h5>Olá,</h5>
                    <h1>Fulano</h1>
                </div>
                <img src={thumb} alt="Meu perfil" />
            </div>

            <div id="menu-items">
                <div id="items">
                    <ButtonNavigation image="I" title="Reservas" path="/reserves"/>

                    <ButtonNavigation image="I" title="Visitantes" path="/visitors"/>

                    <ButtonNavigation image="I" title="Achados e Perdidos" path="/lostandfound"/>

                    <ButtonNavigation image="I" title="Regras do condomínio" path="/rules"/>

                    <ButtonNavigation image="I" title="Meus dados" path="/mydata"/>

                    <ButtonNavigation image="I" title="Minhas reservas" path="/myreserves"/>

                    <ButtonNavigation image="I" title="Minhas visitas" path="/myvisitors"/>
                </div>
            </div>
        </div>
    );
}
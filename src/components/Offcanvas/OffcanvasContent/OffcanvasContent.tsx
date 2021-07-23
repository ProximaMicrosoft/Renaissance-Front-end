import { OffcanvasItem } from '../OffcanvasItem/OffcanvasItem';

import hamburguer from '../../../assets/hamburguer.svg';
import home from '../../../assets/home.svg';
import user from '../../../assets/user.svg';
import calendar from '../../../assets/calendar.svg';
import visitants from '../../../assets/visitants.svg';
import documents from '../../../assets/documents.svg';
import out from '../../../assets/out.svg';

import './styles.scss';
import { useMenu } from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

export function OffcanvasContent() {
    const menuContext = useMenu();

    return(
        <div id="offcanvasContainer">
            <header> 
                <div id="header-content">
                    <div id="button-content">
                        <h3>MENU</h3>
                        
                        <img src={hamburguer} alt="MENU" onClick={() => menuContext.setShow(false)}/>
                        
                    </div>
                </div>
            </header>
            <main>
                <Link to="/home">
                    <OffcanvasItem title="Página Inicial" src={home}/>
                </Link>

                <div id="profile">
                    <Link to="/mydata">
                        <OffcanvasItem title="Meus dados" src={user}/>
                    </Link>

                    <Link to="/myreserves">
                    <OffcanvasItem title="Minhas reservas" src={calendar}/>
                    </Link>

                    <Link to="/myvisitors">
                        <OffcanvasItem title="Meus visitantes" src={visitants}/>
                    </Link>
                </div>

                <Link to="/rules">
                    <OffcanvasItem title="Documentos" src={documents}/>
                </Link>
            </main>
            <footer>
                <OffcanvasItem title="Sair" src={out}/>
            </footer>
        </div> 
    );
}
import { useHistory } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

import { OffcanvasContent } from '../../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';

import { useAuth } from '../../../../hooks/useAuth';
import { useMenu } from '../../../../hooks/useMenu';

import hamburguerIcon from '../../../../assets/hamburguer.svg';
import returnIcon from '../../../../assets/arrow-left.svg';

import { getFirstName } from '../../../../utils/getFirstName';

import './styles.scss';


export function Visitors() {       
    const authContext = useAuth();
    const menuContext = useMenu();
    const history = useHistory();

    return(
        <div id="container">
            <header>
                <div id="nav-icons">
                    <img src={returnIcon} onClick={() => history.goBack()} alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>

                <div id="title">
                    <h5>Bem-vindo, {getFirstName(authContext.user?.name)}</h5>
                </div>
            </header>

            <main>
                
            </main> 
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>

        </div>
    );
}
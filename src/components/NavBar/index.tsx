import { useHistory } from 'react-router-dom';

import hamburguerIcon from '../../assets/icons/hamburguer.svg';
import returnIcon from '../../assets/icons/arrow-left.svg';

import { useMenu } from '../../hooks/useMenu';

import './styles.scss';


type NavBarProps = {
    home?: boolean;
}

export default function NavBar(props: NavBarProps) {
    const menuContext = useMenu();
    const history = useHistory();

    return (
        <nav className={`nav-bar ${props.home && "home"}`}>
            <img src={returnIcon} id="return-icon" alt="Retornar para a página anterior" onClick={() => history.goBack()}/>
            <img src={hamburguerIcon} alt="abrir menu  lateral" 
            id="hamburguer" onClick={() => menuContext.setShow(true)}
            />
        </nav>
    );
}
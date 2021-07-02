import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/UseAuth';

import './styles.scss';


export function Home() {   
    useAuth();  

    return(
        <div id="content">
            <h1>Olá, nome</h1> 

            <Link to="home/reservar">
                <Button color="primary">Reservas</Button>
            </Link>
            <Button color="secondary">Achados e Perdidos</Button>
            <Button color="success">Meus Dados</Button>
            <Button color="warning">Visitantes</Button>
            <Button color="danger">Regras do condomínio</Button>
        </div>
    );
}
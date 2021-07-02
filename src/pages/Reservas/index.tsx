import { Button } from 'reactstrap';

import { useAuth } from '../../hooks/UseAuth';

import './styles.scss';


export function Reservar() {     
    useAuth();
    
    return(
        <div id="content">
            <Button color="primary">Piscina</Button>
            <Button color="secondary">Academia</Button>
        </div>
    );
}
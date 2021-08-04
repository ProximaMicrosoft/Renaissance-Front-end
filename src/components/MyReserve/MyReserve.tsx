import trashIcon from '../../assets/trash.svg';
import { api } from '../../services/api';

import './styles.scss';

type MyReserveProps = {
    id: number
    src: string;
    place: string;
    data: string;
    schedule: number;
}

export function MyReserve(props: MyReserveProps) {
    async function deleteReserve() {
        await api.delete(`reservas/${props.id}`)
        window.alert('Reserva deletada com sucesso')
    }

    return(
        <div className="reserve-item">
            <div id="reserves-info">
                <img src={props.src} alt={props.place} />

                <div id="info-text">
                    <h3>{props.place}</h3>
                    <div id="data">
                        <h5>{props.data},</h5>
                        <h5>{`${props.schedule}:00 - ${props.schedule+1}:00`}h</h5>
                    </div>
                </div>
            </div>
            
            <img src={trashIcon} alt="Excluir reserva" onClick={() => deleteReserve()}/>
        </div>
    );
}
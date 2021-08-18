import trashIcon from '../../../../../assets/icons/trash.svg';

import { rules } from '../../../../../constants/places';

import { deleteReserve } from '../../../../../services/reserves';

import './styles.scss';


type ReserveitemProps = {
    reserveId: number
    placeId: number;
    data: string;
    schedule: number;
}

export function ReserveItem(props: ReserveitemProps) {
    const PLACE_INDEX = props.placeId-1;

    function handleDeleteReserve() {
        deleteReserve(props.reserveId).then(() => window.alert("Reserva excluída com sucesso"))
    }

    return( 
        <div className="reserve-item">
            <div id="reserves-info">
                {rules[PLACE_INDEX].iconLocal}

                <div id="info-text">
                    <h3>{rules[PLACE_INDEX].nameLocal}</h3>
                    <div id="data">
                        <h5>{props.data},</h5>
                        <h5>{`${props.schedule}:00 - ${props.schedule+1}:00`}h</h5>
                    </div>
                </div>
            </div>
            
            <img src={trashIcon} alt="Excluir reserva" onClick={() => handleDeleteReserve()}/>
        </div>
    );
}
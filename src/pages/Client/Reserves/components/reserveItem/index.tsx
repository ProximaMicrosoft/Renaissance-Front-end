import trashIcon from '../../../../../assets/icons/trash.svg';

import { rules } from '../../../../../constants/places';
import { useDeleteReserve } from '../../../../../hooks/useDeleteReserve';

import './styles.scss';


type ReserveitemProps = {
    reserveId: number
    placeId: number;
    data: string;
    schedule: number;
}

export function ReserveItem(props: ReserveitemProps) {
    const PLACE_INDEX = rules.map((v) => v.idLocal === props.placeId).indexOf(true);
    const deleteReserveContext = useDeleteReserve();    

    function openModalForDeletion() {
        deleteReserveContext.setReserveId(props.reserveId);
        deleteReserveContext.setShow(true);
    }

    return( 
        <div className="reserve-item">
            <div id="reserves-info">
                {rules[PLACE_INDEX].iconLocal}

                <div id="info-text">
                    <h3>{rules[PLACE_INDEX].nameLocal}</h3>
                    <div id="data">
                        <h5>{props.data},</h5>
                        <h5>{`${props.schedule}:00 - ${props.schedule}:50`}h</h5>
                    </div>
                </div>
            </div>
            
            <img src={trashIcon} alt="Excluir reserva" onClick={() => openModalForDeletion()}/>
        </div>
    );
}
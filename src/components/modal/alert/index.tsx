import { ReactNode } from 'react';
import { Modal } from 'react-bootstrap';
import atemptIcon from '../../../assets/icons/atempt.svg';
import './styles.scss';

export function AlertModal(props: any, children: ReactNode) {
    return ( 
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
                
            <Modal.Body>
                {children}
                <img src={atemptIcon} alt="Atenção" />
            </Modal.Body>

        </Modal>
    );
}
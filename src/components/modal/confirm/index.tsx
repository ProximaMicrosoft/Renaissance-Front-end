import { Modal } from 'react-bootstrap';
import { AbstractModalHeaderProps } from 'react-bootstrap/esm/AbstractModalHeader';
import './styles.scss';

interface ConfirmModalProps extends AbstractModalHeaderProps {
    show: boolean;
    title: string;
    description: string;
}

export function ConfirmModal(props: ConfirmModalProps) {
    return ( 
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
                
            <Modal.Body>
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
            </Modal.Body>

            <Modal.Footer bsPrefix="confirm-modal-footer">
                {props.children}
            </Modal.Footer>
        </Modal>
    );
}
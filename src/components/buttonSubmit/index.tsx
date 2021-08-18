import { Spinner } from "react-bootstrap";

import './styles.scss';

interface ButtonSubmitProps {
    text: string;
    loading: boolean;
}

export function ButtonSubmit(props: ButtonSubmitProps) {
    return (
        <button type="submit" className="submitButton">
            {props.loading ? <Spinner animation="border" variant="light" /> : props.text}
        </button>
    );
}
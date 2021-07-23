import { useHistory } from "react-router-dom"

import './styles.scss';

export function Link({children}: any, to: string) {
    const history = useHistory();

    return(
        <button onClick={() => history.push(to)}>{children}</button>
    );
}
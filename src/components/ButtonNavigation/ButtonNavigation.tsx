import { useHistory } from 'react-router-dom';

import './styles.scss';

type ButtonNavigationProps = {
    image: string;
    title: string;
    path: string;
}

export function ButtonNavigation(props: ButtonNavigationProps) {
    const history = useHistory();
 
    return (
            <button type="button" id="button-nav" onClick={() => history.push(props.path)}>
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
            </button>
        
    );
}
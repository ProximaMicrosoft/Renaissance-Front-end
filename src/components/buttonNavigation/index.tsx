import { useHistory } from 'react-router-dom';

import './styles.scss';

type ButtonNavigationProps = {
    img: string;
    title: string;
    path: string;
}

export function ButtonNavigation(props: ButtonNavigationProps) {
    const history = useHistory();
 
    return (
            <button type="button" id="button-nav" onClick={() => history.push(props.path)}>
                <img src={props.img} alt={props.title} />
                <h3>{props.title}</h3>
            </button>
        
    );
}
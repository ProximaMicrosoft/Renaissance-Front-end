import { useMenu } from '../../../hooks/useMenu';
import './styles.scss';

type OffcanvasItemProps = {
    title: string;
    src: string;
}

export function OffcanvasItem(props: OffcanvasItemProps) {
    const menuContext = useMenu();

    return(
        <button id="item-button" onClick={() => menuContext.setShow(false)}>
            <div id="content-button">
                <h3>{props.title}</h3>
                <img src={props.src} alt={props.title} />
            </div>
        </button>
    );
}
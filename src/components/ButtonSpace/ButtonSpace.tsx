import './styles.scss';

type ButtonSpaceProps = {
    image: string;
    title: string;
}

export function ButtonSpace(props: ButtonSpaceProps) {
    return(
        <button id="space-button">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
        </button>
    );
}
import { Link } from "react-router-dom";

type ButtonNavigationProps = {
    image?: string;
    title?: string;
    path: string;
}

export function ButtonNavigation(props: ButtonNavigationProps) {
    return (
        <Link to={props.path}>
            <button>
                <h1>{props.image}</h1>
                <h3>{props.title}</h3>
            </button>
        </Link>
    );
}
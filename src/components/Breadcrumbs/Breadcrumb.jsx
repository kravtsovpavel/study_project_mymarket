import './Breadcrumb.css';
import { Link } from "react-router-dom";

function Breadcrumb(props) {
    const { href, article } = props;

    return (
        <>
            <Link to={ href } className="nav__article">{ article }</Link>
        </>
    )
}

export default Breadcrumb;
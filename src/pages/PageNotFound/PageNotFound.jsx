import './PageNotFound.css';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function PageNotFound () {
    return (
        <>
            <Header />
            <div className="container">
                <h2 className="page-not-found__title">404</h2>
                <p className="page-not-found__content">Такой страницы нет!</p>
                <Link className="page-not-found__link" to="/product">Перейти на страницу товара</Link>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound;
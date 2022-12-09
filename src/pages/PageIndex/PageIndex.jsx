import './PageIndex.css';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


function PageIndex () {
    return (
        <>
            <Header />
            <div className="container">
                <p className="page-index__content">Здесь должно быть содержимое главной страницы.<br />
                Но в рамках курса главная страница  используется лишь<br />
                в демонстрационных целях</p>
                <Link className="page-index__link" to="/product">Перейти на страницу товара</Link>
            </div>
            <Footer />
        </>
    )
}

export default PageIndex;
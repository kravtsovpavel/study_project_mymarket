import './Breadcrumbs.css';
import Breadcrumb from './Breadcrumb';

function Breadcrumbs() {

    const breadcrumbs = [
        {
            id: 1,
            href: "/",
            article: 'Электроника'
        },
        {
            id: 2,
            href: "/",
            article: 'Смартфоны и гаджеты'
        },
        {
            id: 3,
            href: "/",
            article: 'Мобильные телефоны'
        },
        {
            id: 4,
            href: "/",
            article: 'Apple'
        },
    ]

    return(
    <nav className="nav">
        <div className="nav__wrapper">
            {breadcrumbs.map((item) => {
                return <Breadcrumb key={item.id} href={item.href} article={item.article} />
            })}
        </div>        
    </nav>
    )
}

export default Breadcrumbs;
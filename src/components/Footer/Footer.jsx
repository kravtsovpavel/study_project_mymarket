import styles from './Footer.module.css';
import { useCurrentDate } from "@kundinos/react-hooks";
import { Link } from "react-router-dom";

function Footer() { 

    const currentDate = useCurrentDate();
    const fullYear = currentDate.getFullYear();

    return (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <strong><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> «<span className={styles.span}>Мой</span>Маркет», 2018-{fullYear}.</strong><br /> Для уточнения информации звоните по номеру <a href="tel:+7 900 000 0000">+7 900 000 0000</a>,<br /> а предложения по сотрудничеству отправляйте на почту <a href="mailto:partner@mymarket.com">partner@mymarket.com</a>
            </div>
            <div className={styles.link}>
                <Link to='/product'>Наверх</Link>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
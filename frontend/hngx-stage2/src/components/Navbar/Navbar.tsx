import styles from './Navbar.module.css';
import logoIcon from '../../assets/logo-icon.png'
import logoTitle from '../../assets/ticz.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logoIcon} alt='Logo Icon' className={styles.logoIcon} />
                <img src={logoTitle} alt='Logo Title' className={styles.logoTitle} />
            </div>
            <div className={styles.navItems}>
                <a href="#" className={`${styles.item} ${styles.active}`}>Events</a>
                <a href="#" className={styles.item}>My Tickets</a>
                <a href="#" className={styles.item}>About Projects</a>
            </div>
            <div className={styles.ticket}>My Tickets <FaLongArrowAltRight /></div>
        </div>
    );
}

export default Navbar;
import Button from '../Button/Button';
import styles from './TicketReady.module.css';

const TicketReady = () => {
    return (
        <div className={styles.ticketContainer}>
            <div className={styles.step}>
                <div className={styles.title}>
                    <h2>Ready</h2>
                    <p>Step 3/3</p>
                </div>
                <div className={styles.stepBar}>
                    <div className={styles.fill}>
                    </div>
                </div>
            </div>
            <div className={styles.pageTitle}>
                <h2>Your Ticket is Booked!</h2>
                <p>You can download or Check your email for a copy</p>
            </div>

            <div className={styles.ticketCard}>
                <div className={styles.ticketBody}>
                    <h3>Techember Fest "25</h3>
                    <p>04 Rumens road, Ikoyi, Lagos</p>
                    <p>March 15, 2025 |  7:00 PM</p>
                </div>
                <div className={styles.divider}></div>
            </div>


            <div className={styles.buttonContainer}>
                <Button 
                    text="Download Ticket"
                    className={styles.button}
                   
                />
                <Button 
                    text="Book Another Ticket"
                   
                />
            </div>
        </div>
    )
}

export default TicketReady;
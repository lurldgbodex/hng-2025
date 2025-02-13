import { GrLocationPin } from 'react-icons/gr';
import styles from './TicketSelection.module.css';
import { SetStateAction, useState } from 'react';
import Button from '../Button/Button';

const TicketSelection = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    }
    return (
        <div className={styles.ticketSelection}>
            <div className={styles.step}>
                <div className={styles.title}>
                    <h2>Ticket Selection</h2>
                    <p>Step 1/3</p>
                </div>
                <div className={styles.stepBar}>
                    <div className={styles.fill}>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.selectionBanner}>
                    <div className={styles.content}>
                    <h2>Techember Fest "25</h2>
                    <p className={styles.bannerTexts}>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                    <div className={styles.location}>
                        <p><GrLocationPin /> [Event Location]</p>
                        <p>March 15, 2025 | 7:00 PM </p>
                    </div>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.ticketType}>
                    <h3>Select Ticket Type:</h3>
                    <div className={styles.typeContainer}>
                        <div className={`${styles.type} ${styles.active}`}>
                            <h3>Free</h3>
                            <div>
                                <p className={styles.uppercase}>Regular Access</p>
                                <p className={styles.numb}>20/52</p>
                            </div>
                            
                        </div>
                        <div className={styles.type}>
                            <h3>$150</h3>
                            <div>
                                <p className={styles.uppercase}>Vip Access</p>
                                <p className={styles.numb}>20/52</p>
                            </div>
                        </div>
                        <div className={styles.type}>
                            <h3>$150</h3>
                            <div>
                                <p className={styles.uppercase}>vvip Access</p>
                                <p className={styles.numb}>20/52</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ticketNumber}>
                    <p>Number of Tickets</p>
                    <select id='options' value={selectedOption} onChange={handleChange} className={styles.selectSection}>
                        <option selected value='1'>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value='4'>4</option>
                        <option value="5">5</option>
                        <option value='6'>6</option>
                        <option value="7">7</option>
                        <option value='8'>8</option>
                    </select>
                </div>
                <div className={styles.buttonContainer}>
                    <Button 
                        text="Next"
                        className={styles.button}
                    />
                    <Button 
                        text="Cancel"
                    />
                </div>
            </div>
        </div>
    )
}

export default TicketSelection;
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './TicketReady.module.css';
import barCode from '../../assets/bar-code.png';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';


const TicketReady = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState<{
        name: string;
        email: string;
        ticketType: string;
        noOfTicket: string;
        specialRequest: string;
        image: string;
    }>({
        name: '',
        email: '',
        ticketType: '',
        noOfTicket: '',
        specialRequest: '',
        image: '',
    });

    useEffect(() => {
       const formDataString = localStorage.getItem('formData');
       const formData = formDataString ? JSON.parse(formDataString) : {};

       const ticketType = localStorage.getItem('selectedTicket') || 'VIP';
       const noOfTicket = localStorage.getItem('noOfTickets') || '1';

       setUserData({
            name: formData.name || 'John Doe',
            email: formData.email || 'johndoe@mail.com',
            image: formData.imageUrl || '#',
            specialRequest: formData.project || 'nill ?',
            ticketType,
            noOfTicket,
       });
    }, []);

    const handleDownload = () => {
        const ticketCard = document.querySelector(`.${styles.ticketCard}`) as HTMLElement;

        if (!ticketCard || !(ticketCard instanceof HTMLElement)) return;

        html2canvas(ticketCard, { scale: 2 }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'ticket.png'
            link.click();
        });
    }

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
                    <div className={styles.ticketheader}>
                        <h3>Techember Fest "25</h3>
                        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p>March 15, 2025 |  7:00 PM</p>
                    </div>
                    <div className={styles.imageBox}>
                        <img src={userData.image} alt='Profile Image' className={styles.profile} />
                    </div>
                    <div className={styles.table}>
                        <div className= {styles.row}>
                            <div className={styles.data}>
                                <p className={styles.dataTitle}>Enter your name</p>
                                <p className={styles.hvalue}>{userData.name}</p>
                            </div>
                            <div className={styles.data}>
                                <p className={styles.dataTitle}>Enter your email</p>
                                <p className={styles.hvalue}>{userData.email}</p>
                            </div>
                        </div>
                        <div className= {styles.row}>
                            <div className={styles.data}>
                                <p className={styles.dataTitle}>Ticket Type</p>
                                <p>{userData.ticketType}</p>
                            </div>
                            <div className={styles.data}>
                                <p className={styles.dataTitle}>Ticket For :</p>
                                <p>{userData.noOfTicket}</p>
                            </div>
                        </div>
                        <div className={styles.request}>
                            <p className={styles.dataTitle}>Special request?</p>
                            <p className={styles.rvalue}>{userData.specialRequest}</p>
                        </div>
                    </div>
                    
                </div>
                <img src={barCode} alt='Bar Codde' className={styles.barCode} />
            </div>


            <div className={styles.buttonContainer}>
                <Button 
                    text="Download Ticket"
                    className={styles.button}
                    onClick={handleDownload}
                />
                <Button 
                    text="Book Another Ticket"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}

export default TicketReady;
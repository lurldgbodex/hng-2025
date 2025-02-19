import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './AttendeeDetails.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import axios from 'axios';

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET =import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

const AttendeeDetails = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const emailPlaceholder: string = 'hello@avioflagos.io';
    const projectPlaceholder: string = 'Textarea';

    const [formData, setFormData] = useState({
        name: '',
        email: emailPlaceholder,
        project: projectPlaceholder,
        imageUrl: '',
    });

    const [loading, setLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        project: '',
        imageUrl: '',
    });

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setErrors((prev) => ({
            ...prev,
            imageUrl: '',
        }))

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData);
            setFormData((prev) => ({
                ...prev,
                imageUrl: response.data.secure_url,
            }));

        } catch (error) {
            setErrors((prev) => ({
                ...prev,
                imageUrl:"failed to upload image. please try again.",
            }));
        } finally {
            setLoading(false);
        }
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', project: '', imageUrl: ''};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email) || formData.email === emailPlaceholder) {
            newErrors.email = 'Enter a valid email.';
            isValid = false;
        }

        if (!formData.project.trim() || formData.project === projectPlaceholder) {
            newErrors.project = 'Project details are required.';
            isValid = false;
        }

        if (!formData.imageUrl) {
            newErrors.imageUrl = 'Profile photo is required.'
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            navigate('/ticket');
        
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }

    return (
        <div className={styles.attendeeContainer}>
        <div className={styles.step}>
            <div className={styles.title}>
                <h2>Attendee Details</h2>
                <p>Step 2/3</p>
            </div>
            <div className={styles.stepBar}>
                <div className={styles.fill}>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <div className={styles.uploadImageContainer}>
                <h3>Upload Profile Photo</h3>
                <div className={styles.imageBoxBack}>
                    <div className={styles.imageBox} onClick={handleImageBoxClick}>
                        {loading ? (
                            <p>Uploading...</p>
                            ) :
                            formData.imageUrl ? (
                            <img 
                                src={formData.imageUrl} 
                                alt="Uploaded Profile" 
                                className={styles.uploadedImage} 
                            
                            />
                        ) : (
                            <>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.7639 14.816C25.1812 10.2267 21.2505 6.66669 16.5052 6.66669C12.8305 6.66669 9.63854 8.81469 8.18121 12.2C5.31721 13.056 3.17188 15.76 3.17188 18.6667C3.17188 22.3427 6.16254 25.3334 9.83854 25.3334H11.1719V22.6667H9.83854C7.63321 22.6667 5.83854 20.872 5.83854 18.6667C5.83854 16.7947 7.43721 14.9907 9.40254 14.6454L10.1772 14.5094L10.4332 13.7654C11.3705 11.0307 13.6972 9.33335 16.5052 9.33335C20.1812 9.33335 23.1719 12.324 23.1719 16V17.3334H24.5052C25.9759 17.3334 27.1719 18.5294 27.1719 20C27.1719 21.4707 25.9759 22.6667 24.5052 22.6667H21.8385V25.3334H24.5052C27.4465 25.3334 29.8385 22.9414 29.8385 20C29.837 18.8047 29.4347 17.6444 28.696 16.7047C27.9574 15.7649 26.925 15.0999 25.7639 14.816Z" fill="#FAFAFA"/>
                                    <path d="M17.8385 18.6667V13.3334H15.1719V18.6667H11.1719L16.5052 25.3334L21.8385 18.6667H17.8385Z" fill="#FAFAFA"/>
                                </svg>
                                <p>Drag & drop or click to upload</p>
                            </>
                        )}
                        </div>
                        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
                    </div>
                    {errors.imageUrl && <p className={styles.error}>{errors.imageUrl}</p>}
                </div>
            <div className={styles.divider}></div>
            <div className={styles.form}>
                <label htmlFor='name'>Enter your name</label>
                <input 
                    id='name'
                    name='name' 
                    type='text'
                    value={formData.name}
                    onChange={handleChange} 
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.form}>
                <label htmlFor='email'>Enter your email *</label>
                <div className={styles.inputWrapper}>
                    <FaRegEnvelope  className={styles.icon} />
                    <input 
                        id='email' 
                        name='email'
                        type='email' 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.form}>
            <label className={styles.responsiveLabel} htmlFor="project"></label>
                <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                ></textarea>
                {errors.project && <p className={styles.error}>{errors.project}</p>}
            </div>
           
            <div className={styles.buttonContainer}>
                <Button 
                    text="Get My Free Ticket"
                    className={styles.button}
                    onClick={handleSubmit}
                />
                <Button 
                    text="Back"
                    onClick={() => navigate(-1)}
                />
            </div>
        </div>
    </div>
    )
}

export default AttendeeDetails;
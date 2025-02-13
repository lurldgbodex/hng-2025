import { ButtonHTMLAttributes } from "react";
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

const Button = ({ text, className, ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${className || ""}`} {...props}>
            {text}
        </button>
    );
}

export default Button;
'use client';
import styles from './Button.module.css';
interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    name?: string;
    className?: string;
}
export default function Button({ onClick, disabled, name, className }: ButtonProps) {

    const classNames = `${styles.button} ${className}`.trim();
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames}
        >
            {name}
        </button>)
}
'use client';
import styles from './Card.module.css';


interface CardProps {
    name: string;
    icon: string;
    color: string;
    onClick?: () => void;
}
export default function Card({ name, icon, color, onClick }: CardProps) {


    return (
        <button className={styles.container} onClick={onClick}>
            <div className={styles.imageContainer}>
                <img
                    src={icon}
                    alt={name}
                    style={{
                        width: '64px',
                        height: '64px',
                        filter: `fill(${color})`
                    }}
                />
            </div>
            <h3 className={styles.toolName}>{name}</h3>
        </button>
    );
}
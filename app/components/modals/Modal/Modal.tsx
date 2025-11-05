'use client';
import styles from './Modal.module.css';
import { useRef } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: Props) {

    const overlayRef = useRef<HTMLDivElement | null>(null);
    if (!isOpen) return null;
    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
            onMouseDown={(e) => {
                // fecha ao clicar fora do conteúdo
                if (e.target === overlayRef.current) onClose();
            }}
            aria-modal="true"
        >
            <div className={styles.content}>
                <div className={styles.closeRow}>
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
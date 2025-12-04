'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import styles from './BaseModal.module.css';

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export const BaseModal = ({ isOpen, onClose, children, title }: BaseModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling

            // GSAP Animation
            if (modalRef.current && overlayRef.current) {
                gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
                gsap.fromTo(modalRef.current,
                    { opacity: 0, scale: 0.95, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' }
                );
            }

        } else {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Check if document is defined (client-side)
    if (typeof document === 'undefined') return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose} ref={overlayRef}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                {title && <h2 id="modal-title" className={styles.title}>{title}</h2>}
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

"use client";



import NextImage from 'next/image';
import { BaseModal } from './BaseModal';
import styles from './WhatsAppModal.module.css';

interface WhatsAppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WhatsAppModal = ({ isOpen, onClose }: WhatsAppModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.sidebar}></div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>whatsapp us</h2>
                        <p className={styles.subheading}>
                            Scan the QR code to chat with us via your smartphone.
                        </p>
                    </div>
                </div>

                <div className={styles.qrSection}>
                    <NextImage
                        src="/qr-code.png"
                        alt="WhatsApp QR Code"
                        className={styles.qr}
                        width={200}
                        height={200}
                    />
                </div>

                <div className={styles.divider}></div>

                <a href="https://web.whatsapp.com" className={styles.desktopLink} target="_blank" rel="noopener noreferrer">
                    Chat via desktop
                </a>
            </div>
        </BaseModal>
    );
};

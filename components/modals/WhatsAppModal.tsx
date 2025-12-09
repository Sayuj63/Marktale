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
                        src="/images/whatsapp_qrcode.png"
                        alt="WhatsApp QR Code"
                        className={styles.qr}
                        width={200}
                        height={200}
                    />
                </div>

                <div className={styles.divider}></div>

                <div className={styles.phoneSection}>
                    <p className={styles.phoneLabel}>Or call us directly:</p>
                    <a href="tel:+918587870707" className={styles.phoneNumber}>
                        +91 85878 70707
                    </a>
                </div>

                <a href="https://wa.me/918587870707" className={styles.desktopLink} target="_blank" rel="noopener noreferrer">
                    Chat via WhatsApp
                </a>
            </div>
        </BaseModal>
    );
};

"use client";



import { useState, useEffect } from 'react';
import { WorkModal } from '@/components/modals/WorkModal';
import { WhatsAppModal } from '@/components/modals/WhatsAppModal';
import styles from './Header.module.css';
import { setupColorInversion } from '@/lib/headerColorInversion';


export const Header = () => {
    const [workModalOpen, setWorkModalOpen] = useState(false);
    const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

    useEffect(() => {
        // Initialize color inversion logic
        // This will automatically find all sections with data-theme attribute
        // and update header color based on scroll position.
        const cleanup = setupColorInversion();

        // Note: setupColorInversion doesn't currently return a cleanup function in the lib,
        // but it's good practice if we add it later. For now, GSAP ScrollTrigger handles cleanup on refresh usually.
        // But let's make sure we import it.
    }, []);

    return (
        <>
            <header className={styles.header}>
                <button
                    onClick={() => setWorkModalOpen(true)}
                    className={styles.workIcon}
                    aria-label="View projects"
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    <span className="ml-2 font-bold hidden md:inline">PROJECTS</span>
                </button>

                <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    MARKTALE
                </div>

                <button
                    onClick={() => setWhatsappModalOpen(true)}
                    className={styles.whatsappIcon}
                    aria-label="Contact via WhatsApp"
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </header>

            <WorkModal isOpen={workModalOpen} onClose={() => setWorkModalOpen(false)} />
            <WhatsAppModal isOpen={whatsappModalOpen} onClose={() => setWhatsappModalOpen(false)} />
        </>
    );
};

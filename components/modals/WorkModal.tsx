'use client';

import NextImage from 'next/image';
import { BaseModal } from './BaseModal';
import styles from './WorkModal.module.css';

interface WorkProject {
    id: string;
    title: string;
    category: string;
    image: string;
}

const workProjects: WorkProject[] = [
    {
        id: '1',
        title: 'Project 1',
        category: 'Digital Marketing',
        image: '/images/project1.jpeg'
    },
    {
        id: '2',
        title: 'Project 2',
        category: 'Brand Strategy',
        image: '/images/project2.jpeg'
    },
    {
        id: '3',
        title: 'Project 3',
        category: 'Social Media',
        image: '/images/project3.jpeg'
    },
    {
        id: '4',
        title: 'Project 4',
        category: 'Web Design',
        image: '/images/project4.jpeg'
    },
    {
        id: '5',
        title: 'Project 5',
        category: 'Content Creation',
        image: '/images/project5.jpeg'
    },
];

interface WorkModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WorkModal = ({ isOpen, onClose }: WorkModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Our Work">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {workProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <NextImage
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                                width={400}
                                height={400}
                            />
                            <div className={styles.projectInfo}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.viewAllBtn}>
                    All our work
                </button>
            </div>
        </BaseModal>
    );
};

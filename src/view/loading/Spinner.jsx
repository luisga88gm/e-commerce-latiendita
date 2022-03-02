import React from 'react'
import { ImSpinner } from 'react-icons/im';
import styles from '../../styles/Spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner className={styles.spinning} size={60} />
        </div>
    )
}
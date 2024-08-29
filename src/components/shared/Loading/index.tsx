import styles from './style.module.css';

interface ILoadingProps {
    color: 'primary' | 'secondary' | 'white';
}

const Loading = ({ color }: ILoadingProps) => {
    return (
        <svg className={`${styles.svg} ${color === 'primary' && styles.primary} ${color === 'secondary' && styles.secondary} ${color === 'white' && styles.white}`} viewBox="25 25 50 50">
            <circle className={styles.circle} r="20" cy="50" cx="50"></circle>
        </svg>
    );
}

export { Loading };

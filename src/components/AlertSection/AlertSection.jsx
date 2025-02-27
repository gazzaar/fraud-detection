// import './AlertSection.css';
import styles from './AlertSection.module.css';

const AlertSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Fraud Alerts</h3>
      </div>
      <div className={styles.list}>{/* Alert items will go here */}</div>
    </div>
  );
};

export default AlertSection;

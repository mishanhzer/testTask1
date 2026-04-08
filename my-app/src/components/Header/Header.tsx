import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.text}>📋 УПРАВЛЕНИЕ ЗАДАЧАМИ </span>
      </header>
    </div>
  )
}
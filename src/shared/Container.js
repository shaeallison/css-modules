import styles from './container.module.scss'

const Container = (props) =>  {
  const {children} = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container

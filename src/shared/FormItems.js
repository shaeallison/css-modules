import styles from './formItems.module.scss'
import {Text} from './'

const FormItems = (props) =>  {
  const {label, type, required, id, help, error} = props

  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} type={type} required={required}/>
      {help !== null &&
        <Text as='span' style='help'>{help}</Text>
      }
      <Text as='span' style='error'>{error}</Text>
    </div>
  )
}

export default FormItems

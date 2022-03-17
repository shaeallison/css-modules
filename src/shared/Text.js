import styles from './text.module.scss'

const Text = (props) => {
  const {as, style, children} = props
  const CustomTag = `${as}`

  return (
    <>
      {style === 'help' &&
        <CustomTag className={styles.help}>{children}</CustomTag>
      }

      {style === 'legend' &&
        <CustomTag className={styles.legend}>{children}</CustomTag>
      }

      {style === 'error' &&
        <CustomTag className={styles.error}>{children}</CustomTag>
      }
    </>
  )
}

export default Text

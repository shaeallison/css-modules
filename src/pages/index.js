import styles from './layout.module.scss'
import {Grid, Column, Card} from '../shared'

const gutters = [
  {breakpoint: null, size: '0'},
]

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Grid gutter={gutters}>
        <Column
          as='sidebar'
          gutter={gutters}
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'md', size: '3'},
          ]}
          key='sidebar-col'>
            <div className={styles.sidebarContent}>
              Sidebar Content
            </div>
        </Column>
        <Column
          as='main'
          gutter={gutters}
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'md', size: '9'},
          ]}
          key='main-col'>
            <div className={styles.mainContent}>
              <h1 className={styles.title}>My Account</h1>
              <Card/>
            </div>
        </Column>
      </Grid>
    </div>
  )
}

export default Layout

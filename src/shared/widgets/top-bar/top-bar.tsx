import type { FC } from 'react'

import styles from './top-bar.module.css'

const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <h1 className={styles.logo}>Code Metrics Lab</h1>
      {/*<Search placeholder='Поиск' enterButton />*/}
      {/*<Button type='primary' icon={<UploadOutlined />}>*/}
      {/*  Загрузка*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  style={{ width: 50 }}*/}
      {/*  type='default'*/}
      {/*  icon={<BellOutlined />}*/}
      {/*></Button>*/}
      {/*<Avatar style={{ width: 50 }} icon={<UserOutlined />} />*/}
    </div>
  )
}

export default TopBar

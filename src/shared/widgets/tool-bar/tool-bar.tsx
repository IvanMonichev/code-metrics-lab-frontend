import { MenuOutlined } from '@ant-design/icons'
import { Breadcrumb, Button } from 'antd'

import styles from './tool-bar.module.css'

const items = [
  {
    title: 'Home'
  },
  {
    title: 'Application Center',
    href: ''
  },
  {
    title: 'Application List',
    href: ''
  },
  {
    title: 'An Application'
  }
]

const ToolBar = () => {
  return (
    <div className={styles.toolBar}>
      <Button icon={<MenuOutlined />} type='text' size='middle' />
      <Breadcrumb items={items} separator='>' />
    </div>
  )
}

export default ToolBar

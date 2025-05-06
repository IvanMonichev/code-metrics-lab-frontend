import { PathName } from '@/constants/path-name.constant'
import { PathRoute } from '@/constants/path-route.constant'
import { MenuOutlined } from '@ant-design/icons'
import { Breadcrumb, Button } from 'antd'
import { Link, useLocation } from 'react-router'
import styles from './tool-bar.module.css'

const breadcrumbNameMap: Record<string, string> = {
  [PathRoute.Home]: PathName.Home,
  [PathRoute.Experiment]: PathName.Experiment
}

const ToolBar = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const title =
      breadcrumbNameMap[url] || decodeURIComponent(pathSnippets[index])
    return {
      title:
        index === pathSnippets.length - 1 ? (
          title
        ) : (
          <Link to={url}>{title}</Link>
        )
    }
  })

  const breadcrumbItems = [
    {
      title: (
        <Link to={PathRoute.Home}>{breadcrumbNameMap[PathRoute.Home]}</Link>
      )
    },
    ...extraBreadcrumbItems
  ]

  return (
    <div className={styles.toolBar}>
      <Button
        icon={<MenuOutlined />}
        type='text'
        size='middle'
        className={styles.menuButton}
      />
      <Breadcrumb
        items={breadcrumbItems}
        separator='>'
        className={styles.breadcrumb}
      />
    </div>
  )
}

export default ToolBar

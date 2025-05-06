import { PathName } from '@/constants/path-name.constant'
import { PathRoute } from '@/constants/path-route.constant'
import { ExperimentOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import type { FC } from 'react'
import { Link, useLocation } from 'react-router'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: PathRoute.Home,
    icon: <HomeOutlined />,
    label: <Link to={PathRoute.Home}>{PathName.Home}</Link>
  },
  {
    key: PathRoute.Experiment,
    icon: <ExperimentOutlined />,
    label: <Link to={PathRoute.Experiment}>{PathName.Experiment}</Link>
  }
]

const NavBar: FC = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <Menu mode='vertical' items={items} selectedKeys={[location.pathname]} />
  )
}

export default NavBar

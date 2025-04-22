import Layout from '@/shared/core/layout'
import {
  AppstoreOutlined,
  BellOutlined,
  InboxOutlined,
  MailOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Avatar, Button, Flex, Menu, MenuProps, Upload } from 'antd'
import Search from 'antd/es/input/Search'
import type { FC } from 'react'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One'
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two'
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' }
    ]
  }
]
const { LeftBar, Header, Page, Content } = Layout

const Home: FC = () => {
  return (
    <Page>
      <Header title='Заголвок страницы'>
        <Flex gap={8}>
          <Search placeholder='Поиск' enterButton />
          <Button type='primary' icon={<UploadOutlined />}>
            Загрузка
          </Button>
          <Button
            style={{ width: 50 }}
            type='default'
            icon={<BellOutlined />}
          ></Button>
          <Avatar style={{ width: 50 }} icon={<UserOutlined />} />
        </Flex>
      </Header>
      <LeftBar>
        <Flex gap={20} vertical={true}>
          <div style={{ height: 65 }}></div>
          <Menu mode='vertical' items={items} />
        </Flex>
      </LeftBar>
      <Content>
        <Flex
          align='center'
          style={{ width: '100%', height: '100%' }}
          justify='center'
        >
          <Upload.Dragger
            name='file'
            multiple={true}
            style={{ width: '500px', height: '450px' }}
          >
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>
              Нажмите или перетащите файл в эту область, чтобы загрузить
            </p>
          </Upload.Dragger>
        </Flex>
      </Content>
    </Page>
  )
}

export default Home

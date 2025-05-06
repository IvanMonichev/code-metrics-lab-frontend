import Page from '@/shared/layouts/page/page'
import Panel from '@/shared/layouts/panel/panel'
import ToolBar from '@/shared/widgets/tool-bar/tool-bar'
import TopBar from '@/shared/widgets/top-bar/top-bar'
import {
  AppstoreOutlined,
  InboxOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu, MenuProps, Upload } from 'antd'
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
const { LeftBar, Header, Content } = Page

const Home: FC = () => {
  return (
    <Page>
      <Header>
        <TopBar />
        <ToolBar />
      </Header>
      <LeftBar>
        <Menu mode='vertical' items={items} />
      </LeftBar>
      <Content>
        <Panel.Container>
          <Panel title={'Загрузка файла'}>
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
          </Panel>
        </Panel.Container>
      </Content>
    </Page>
  )
}

export default Home

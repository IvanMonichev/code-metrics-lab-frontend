import Page from '@/shared/layouts/page/page'
import Panel from '@/shared/layouts/panel/panel'
import NavBar from '@/shared/widgets/nav-bar/nav-bar'
import ToolBar from '@/shared/widgets/tool-bar/tool-bar'
import TopBar from '@/shared/widgets/top-bar/top-bar'
import type { FC } from 'react'
import { Outlet } from 'react-router'

const { LeftBar, Header, Content } = Page

const Home: FC = () => {
  return (
    <Page>
      <Header>
        <TopBar />
        <ToolBar />
      </Header>
      <LeftBar>
        <NavBar />
      </LeftBar>
      <Content>
        <Panel.Container>
          <Outlet />
        </Panel.Container>
      </Content>
    </Page>
  )
}

export default Home

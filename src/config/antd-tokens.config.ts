import { ThemeConfig } from 'antd'

export const antdTokens: ThemeConfig = {
  token: {
    colorPrimary: '#B70404',
    colorBorder: '#808080',
    borderRadius: 0
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    },
    Button: {},
    Menu: {
      itemBg: '#fff',
      activeBarHeight: 0,
      activeBarBorderWidth: 0
    },
    Upload: {
      actionsColor: '#fff'
    }
  }
}

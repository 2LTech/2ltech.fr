import type { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#98d2e1'
  },
  components: {
    Layout: {
      bodyBg: '#ffffff',
      headerBg: '#ffffff',
      footerBg: '#98d2e1'
    },
    Menu: {
      activeBarHeight: 0,
      horizontalItemHoverBg: 'rgba(152, 210, 225, 0.25)'
    }
  }
}

export default theme

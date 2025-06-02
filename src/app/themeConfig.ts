import type { ThemeConfig } from 'antd'

// oak color: #795549
//            #ffc059
// blue color: #79daeb
// pink color:#f450fc
// rgba(244, 80, 252, 0.25)

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#79daeb',
    colorPrimaryHover: 'rgba(244, 80, 252, 0.25)'
  },
  components: {
    Layout: {
      bodyBg: '#ffffff',
      headerBg: '#ffffff',
      footerBg: '#79daeb'
    },
    Menu: {
      activeBarHeight: 0,
      horizontalItemHoverBg: 'rgba(244, 80, 252, 0.25)'
    }
  }
}

export default theme

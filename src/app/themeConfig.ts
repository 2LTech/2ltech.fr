import type { ThemeConfig } from 'antd'

// oak color: #795549
//            #ffc059
// blue color: #79daeb
// pink color:#f450fc
// rgba(244, 80, 252, 0.25)

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#087e8b',
    colorPrimaryHover: '#cc4a54',
    colorPrimaryActive: '#055f69',
    colorLink: '#087e8b',
    colorText: '#18242a',
    colorTextSecondary: '#5b6970',
    colorBgLayout: '#f7fbfc',
    colorBgContainer: '#ffffff',
    colorBorder: 'rgba(8, 126, 139, 0.16)',
    borderRadius: 8,
    boxShadow:
      '0 18px 50px rgba(24, 36, 42, 0.10), 0 4px 14px rgba(24, 36, 42, 0.06)',
    controlHeight: 42
  },
  components: {
    Button: {
      primaryShadow: '0 12px 26px rgba(8, 126, 139, 0.24)',
      borderRadius: 8
    },
    Card: {
      borderRadiusLG: 8,
      boxShadowTertiary:
        '0 18px 42px rgba(24, 36, 42, 0.08), 0 2px 10px rgba(24, 36, 42, 0.05)'
    },
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'rgba(255, 255, 255, 0.86)',
      footerBg: '#11252c'
    },
    Menu: {
      activeBarHeight: 0,
      horizontalItemHoverBg: 'rgba(8, 126, 139, 0.08)',
      horizontalItemSelectedBg: 'rgba(8, 126, 139, 0.10)',
      horizontalItemSelectedColor: '#087e8b',
      itemColor: '#31434b',
      itemHoverColor: '#087e8b',
      itemBorderRadius: 8
    }
  }
}

export default theme

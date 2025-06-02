import {
  ApiOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  ProductOutlined,
  ShopOutlined,
  TeamOutlined
} from '@ant-design/icons'

const menuItems = [
  {
    key: 'home',
    label: 'Accueil',
    icon: <HomeOutlined />,
    href: '/'
  },
  {
    key: 'dev',
    label: 'Développement',
    icon: <ApiOutlined />,
    href: '/developpement'
  },
  {
    key: 'dep',
    label: 'Dépannage',
    icon: <MedicineBoxOutlined />,
    href: '/depannage'
  },
  {
    key: 'install',
    label: 'Installation',
    icon: <ProductOutlined />,
    href: '/installation'
  },
  {
    key: 'apropos',
    label: 'À propos',
    icon: <TeamOutlined />,
    href: '/apropos'
  },
  {
    key: 'contact',
    label: 'Contact',
    icon: <ShopOutlined />,
    href: '/contact'
  }
]

export type MenuItem = (typeof menuItems)[number]

export default menuItems

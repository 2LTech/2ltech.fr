import {
  ApiOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons'

export interface MenuItem {
  key: string
  label: string
  icon: React.ReactElement
  href: string
}

const menuItems: MenuItem[] = [
  {
    key: 'home',
    label: 'Accueil',
    icon: <HomeOutlined />,
    href: '/',
  },
  {
    key: 'dev',
    label: 'Développement',
    icon: <ApiOutlined />,
    href: '/developpement',
  },
  {
    key: 'dep',
    label: 'Dépannage',
    icon: <MedicineBoxOutlined />,
    href: '/depannage',
  },
  {
    key: 'apropos',
    label: 'À propos',
    icon: <TeamOutlined />,
    href: '/apropos',
  },
  {
    key: 'contact',
    label: 'Contact',
    icon: <ShopOutlined />,
    href: '/contact',
  },
]

export default menuItems

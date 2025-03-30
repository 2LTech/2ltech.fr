import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

export interface ContactItem {
  key: string
  label: string
  icon: React.ReactElement
  href: string
  blank?: boolean
}

const contactItems: ContactItem[] = [
  {
    key: 'address',
    label: '1 avenue Belair, 19260 Treignac',
    icon: <HomeOutlined />,
    href: 'https://maps.app.goo.gl/kfM2rLTJkSPD4nxk8',
    blank: true,
  },
  {
    key: 'mail',
    label: 'contact@2ltech.fr',
    icon: <MailOutlined />,
    href: 'mailto:contact@2ltech.fr',
  },
  {
    key: 'phone',
    label: '07........',
    icon: <PhoneOutlined />,
    href: 'tel:07........',
  },
]

export default contactItems

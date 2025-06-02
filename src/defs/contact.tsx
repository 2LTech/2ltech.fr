import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'

const contactItems = [
  {
    key: 'address',
    label: '1 avenue Belair, 19260 Treignac',
    icon: <HomeOutlined />,
    href: 'https://maps.app.goo.gl/kfM2rLTJkSPD4nxk8',
    blank: true
  },
  {
    key: 'mail',
    label: 'contact@2ltech.fr',
    icon: <MailOutlined />,
    href: 'mailto:contact@2ltech.fr'
  },
  {
    key: 'phone',
    label: '07 43 10 28 86',
    icon: <PhoneOutlined />,
    href: 'tel:0743102886'
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: <WhatsAppOutlined />,
    href: 'https://wa.me/33743102886',
    blank: true
  }
]

export type ContactItem = (typeof contactItems)[number]

export default contactItems

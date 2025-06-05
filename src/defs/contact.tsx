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
    blank: true,
    extra: (
      <div
        style={{
          aspectRatio: '1.5',
          lineHeight: '50%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <iframe
          title="Carte - 1 avenue Bel Air, 19260 Treignac"
          src="https://www.openstreetmap.org/export/embed.html?bbox=1.7920321226119995%2C45.53298638004849%2C1.795572638511658%2C45.534684865022115&amp;layer=mapnik&amp;marker=45.53383562894745%2C1.7938023805618286"
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #79daeb'
          }}
        />
        <br />
        <a
          href="https://www.openstreetmap.org/?mlat=45.533836&amp;mlon=1.793802#map=19/45.533836/1.793802"
          target="_blank"
          style={{ fontSize: '75%', textAlign: 'right' }}
        >
          Afficher une carte plus grande
        </a>
      </div>
    )
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

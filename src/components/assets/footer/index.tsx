import Link from 'next/link'
import Image from 'next/image'
import { Button, Descriptions, Divider, Layout } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

import menuItems from '@/defs/menu'
import contactItems from '@/defs/contact'

import packageJson from '../../../../package.json'

import styles from './index.module.css'

/**
 * Footer
 * @returns Footer
 */
const Footer = () => (
  <Layout.Footer className={styles.footer}>
    <div>
      <Descriptions
        colon={false}
        classNames={{
          content: styles.descriptionContent
        }}
        layout="vertical"
        items={[
          {
            key: 'logo',
            label: (
              <Link className={styles.descriptionLabel} href={'/'}>
                <Image src="/logo.png" width={50} height={50} alt="Logo" />
                2LTech
              </Link>
            ),
            children: [
              <Button key={'legal'} type="primary" href={'/legal'}>
                Mentions légales
              </Button>,
              <Button key={'cgu'} type="primary" href={'/cgu'}>
                Conditions générales d&apos;utilisation
              </Button>,
              <Button key={'privacy'} type="primary" href={'/privacy'}>
                Politique de confidentialité
              </Button>
            ]
          },
          {
            key: 'links',
            label: <div className={styles.descriptionLabel}>Quick links</div>,
            children: menuItems.map((item) => (
              <Button
                key={item.key}
                type="primary"
                icon={item.icon}
                href={item.href}
              >
                {item.label}
              </Button>
            ))
          },
          {
            key: 'contact',
            label: <div className={styles.descriptionLabel}>Contact</div>,
            children: contactItems.map((item) => (
              <Button
                key={item.key}
                type="primary"
                icon={item.icon}
                href={item.href}
                target={item.blank ? '_blank' : '_self'}
              >
                {item.label}
              </Button>
            ))
          }
        ]}
      />
    </div>
    <Divider className={styles.divider} />
    <div className={styles.legal}>
      <div>
        &copy;{new Date().getFullYear()}{' '}
        <Link href="https://2ltech.fr/">2LTech</Link>. Tous droits réservés.
      </div>
      <div className={styles.smallHidden}>Version {packageJson.version}</div>
      <div>
        Conçu avec <HeartOutlined style={{ color: '#B01E28' }} /> par{' '}
        <Link href="https://2ltech.fr/">2LTech</Link>
      </div>
    </div>
  </Layout.Footer>
)

export default Footer

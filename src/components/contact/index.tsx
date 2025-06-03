import Link from 'next/link'
import { Card, Space } from 'antd'

import contactItems from '@/defs/contact'

import SubHeader from '@/components/assets/subHeader'

import styles from './index.module.css'

/**
 * Contact
 * @returns Contact
 */
const Contact = () => (
  <div className={styles.content}>
    <SubHeader title="Pour nous contacter" />

    <Space
      wrap
      className={styles.cards}
      classNames={{ item: styles.cardsItem }}
      size="large"
    >
      {contactItems.map((contact) => (
        <Card key={contact.key} extra={contact.icon}>
          <Link href={contact.href} target={contact.blank ? '_blank' : '_self'}>
            {contact.label}
          </Link>
          {contact.extra ? (
            <div className={styles.extra}>{contact.extra}</div>
          ) : null}
        </Card>
      ))}
    </Space>
  </div>
)

export default Contact

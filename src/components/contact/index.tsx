import Link from 'next/link'
import { Card } from 'antd'

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

    <div className={styles.cards}>
      {contactItems.map((contact) => (
        <Card key={contact.key} extra={contact.icon} className={styles.card}>
          <Link href={contact.href} target={contact.blank ? '_blank' : '_self'}>
            {contact.label}
          </Link>
        </Card>
      ))}
    </div>
  </div>
)

export default Contact

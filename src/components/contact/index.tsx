import Link from 'next/link'
import { Card, Masonry } from 'antd'

import contactItems from '@/defs/contact'

import SubHeader from '@/components/assets/subHeader'
import { RestrictedContent } from '@/components/assets/framework/content'

import styles from './index.module.css'

/**
 * Contact
 * @returns Contact
 */
const Contact = () => (
  <>
    <SubHeader title="Pour nous contacter" />

    <RestrictedContent>
      <Masonry
        columns={{ xs: 1, md: 2 }}
        gutter={16}
        items={contactItems.map((contact, index) => ({
          key: contact.key,
          data: index,
          children: (
            <Card extra={contact.icon} title={contact.text}>
              <Link
                href={contact.href}
                target={contact.blank ? '_blank' : '_self'}
              >
                {contact.label}
              </Link>
              {contact.extra ? (
                <div className={styles.extra}>{contact.extra}</div>
              ) : null}
            </Card>
          )
        }))}
      />
    </RestrictedContent>
  </>
)

export default Contact

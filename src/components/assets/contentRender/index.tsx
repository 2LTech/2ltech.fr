import Link from 'next/link'
import { Button, List } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import menuItems from '@/defs/menu'

import styles from './index.module.css'

/**
 * Interface
 */
export interface ContentItem {
  key: string
  title: React.ReactElement | string
  subTitle: React.ReactElement | string
  content: React.ReactElement | string
  extra?: React.ReactElement
}

// Contact
const contact = menuItems.find((item) => item.key === 'contact')!

// Footer
export const footer = (
  <div className={styles.footer}>
    <Button type="primary" href={contact.href} icon={contact.icon}>
      {contact.label}
    </Button>
  </div>
)

/**
 * Content render
 * @param item Item
 * @returns Render
 */
export const contentRender = (item: ContentItem) => (
  <List.Item
    classNames={{ extra: styles.listItemExtra }}
    className={styles.listItem}
    key={item.key}
    extra={item.extra}
  >
    <a className={styles.anchor} id={item.key} />
    <List.Item.Meta title={item.title} description={item.subTitle} />
    {item.content}
  </List.Item>
)

/**
 * Content render mini
 * @param page Page
 * @param item Item
 * @returns Render
 */
export const contentRenderMini = (page: string, item: ContentItem) => (
  <List.Item
    classNames={{ extra: styles.listItemExtraMini }}
    className={styles.listItemMini}
    key={item.key}
    extra={item.extra}
  >
    <List.Item.Meta
      title={item.title}
      description={
        <>
          {item.subTitle}{' '}
          <Link href={`${page}/#${item.key}`}>
            <ArrowRightOutlined />
          </Link>
        </>
      }
    />
  </List.Item>
)

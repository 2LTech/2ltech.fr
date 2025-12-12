import { Button } from 'antd'

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

export interface Props {
  items: ContentItem[]
}

// Contact
const contact = menuItems.find((item) => item.key === 'contact')!

const MyList: React.FunctionComponent<Props> = ({ items }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.key} className={styles.item}>
          <a className={styles.anchor} id={item.key}>
            {item.key}
          </a>
          <div className={styles.itemText}>
            <h1>{item.title}</h1>
            <h3>{item.subTitle}</h3>
            <p>{item.content}</p>
          </div>
          <div className={styles.itemExtra}>{item.extra}</div>
        </li>
      ))}
    </ul>

    <Button type="primary" href={contact.href} icon={contact.icon}>
      {contact.label}
    </Button>
  </div>
)

export default MyList

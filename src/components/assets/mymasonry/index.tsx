import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, Masonry } from 'antd'
import Link from 'next/link'

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
  page: string
  items: ContentItem[]
}

const MyMasonry: React.FunctionComponent<Props> = ({ page, items }) => (
  <Masonry
    className={styles.masonry}
    columns={{ xs: 1, md: 2 }}
    gutter={16}
    items={items.map((item, index) => ({
      key: item.key,
      data: index,
      children: (
        <Card
          classNames={{
            extra: styles.extra,
            actions: styles.actions
          }}
          hoverable
          extra={item.extra}
          title={item.title}
          actions={[
            <Link href={`${page}/#${item.key}`}>
              <Button type="primary">
                <ArrowRightOutlined />
              </Button>
            </Link>
          ]}
        >
          {item.subTitle}
        </Card>
      )
    }))}
  />
)

export default MyMasonry

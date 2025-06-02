import { Layout, Typography } from 'antd'

import styles from './index.module.css'

/**
 * Props
 */
export interface Props {
  title?: React.ReactElement | string
  subTitle?: React.ReactElement | string
  description?: React.ReactElement | string
}

/**
 * Sub header
 * @param props Props
 * @returns SubHeader
 */
const SubHeader: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  description
}) => (
  <Layout className={styles.layout}>
    <Layout.Content className={styles.content}>
      {title ? <Typography.Title level={1}>{title}</Typography.Title> : null}
      {subTitle ? (
        <Typography.Title level={3}>{subTitle}</Typography.Title>
      ) : null}
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
    </Layout.Content>
  </Layout>
)

export default SubHeader

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
  <div className={styles.container}>
    <div className={styles.content}>
      {title ? <Typography.Title level={1}>{title}</Typography.Title> : null}
      {subTitle ? (
        <Typography.Title level={3}>{subTitle}</Typography.Title>
      ) : null}
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
    </div>
  </div>
)

export default SubHeader

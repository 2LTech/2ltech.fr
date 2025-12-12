import { Layout } from 'antd'

import styles from './index.module.css'

/**
 * Props
 */
export interface Props {
  children: React.ReactElement | React.ReactElement[]
}

/**
 * Content
 * @param props Props
 * @returns Content
 */
const Content: React.FunctionComponent<Props> = ({ children }) => {
  return <Layout.Content className={styles.content}>{children}</Layout.Content>
}

export const RestrictedContent: React.FunctionComponent<Props> = ({
  children
}) => {
  return (
    <Layout.Content className={styles.restrictedContent}>
      <div className={styles.restrictedContentText}>{children}</div>
    </Layout.Content>
  )
}

export default Content

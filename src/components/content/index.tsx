import { Layout } from 'antd'

import Footer from '../footer'

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
  return (
    <Layout.Content className={styles.content}>
      {children}

      <Footer />
    </Layout.Content>
  )
}

export default Content

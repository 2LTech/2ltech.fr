import { Button, Layout, Typography } from 'antd'

import styles from './index.module.css'

const SubHeader = () => (
  <Layout className={styles.layout}>
    <Layout.Content className={styles.content}>
      <Typography.Title level={1}>Title</Typography.Title>
      <Typography.Title level={3}>Sub title</Typography.Title>
      <Button type='primary'>Coucou</Button>
    </Layout.Content>
  </Layout>
)

export default SubHeader

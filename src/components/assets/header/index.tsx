import Link from 'next/link'
import Image from 'next/image'
import { Layout, Typography } from 'antd'

import styles from './index.module.css'

/**
 * Header
 * @returns Header
 */
const Header = () => {
  /**
   * Render
   */
  return (
    <Layout.Header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={64} height={64} />
        <Typography.Text strong>2LTech</Typography.Text>
      </Link>
    </Layout.Header>
  )
}

export default Header

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Layout, Menu } from 'antd'

import menuItems from '@/defs/menu'

import styles from './index.module.css'

/**
 * Interfaces
 */
export interface MenuInfo {
  key: string
}

/**
 * Header
 * @returns Header
 */
const Header = () => {
  // Router
  const router = useRouter()

  /**
   * On click
   * @param e Menu event
   */
  const onClick = useCallback(
    (e: MenuInfo) => {
      const key = e.key
      const item = menuItems.find((item) => item.key === key)

      if (item?.href) router.push(item.href)
    },
    [router]
  )

  /**
   * Render
   */
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
        </Link>

        <Menu
          className={styles.menu}
          mode="horizontal"
          items={menuItems}
          onClick={onClick}
        />
      </div>
      <div className={styles.border} />
    </Layout.Header>
  )
}

export default Header

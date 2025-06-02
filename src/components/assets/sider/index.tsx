import { useCallback } from 'react'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/navigation'

import menuItems from '@/defs/menu'

import styles from './index.module.css'

/**
 * Interfaces
 */
export interface MenuInfo {
  key: string
}

/**
 * Sider
 * @returns Sider
 */
const Sider = () => {
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
    <Layout.Sider
      className={styles.sider}
      breakpoint="md"
      collapsedWidth={0}
      zeroWidthTriggerStyle={{
        background: '#79daeb',
        top: '12px',
        zIndex: 5
      }}
    >
      <Menu className={styles.menu} items={menuItems} onClick={onClick} />
    </Layout.Sider>
  )
}

export default Sider

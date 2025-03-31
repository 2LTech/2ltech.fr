import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Layout, Menu, MenuProps, Typography } from 'antd'

import menuItems from '../../defs/menu'

import styles from './index.module.css'

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
  const onClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    const item = menuItems.find((item) => item.key === key)

    if (item?.href) router.push(item.href)
  }

  /**
   * Render
   */
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo-nobackground.png" alt="Logo" width={64} height={64} />
        <Typography.Text strong>2LTech</Typography.Text>
      </div>
      <Menu
        mode="horizontal"
        className={styles.menu}
        items={menuItems}
        onClick={onClick}
      />
    </Layout.Header>
  )
}

export default Header

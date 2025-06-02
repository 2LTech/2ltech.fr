import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, List, Space, Typography } from 'antd'

import menuItems from '@/defs/menu'

import SubHeader from '@/components/assets/subHeader'
import Divider from '@/components/assets/divider'
import { contentRenderMini } from '@/components/assets/contentRender'

import { contents as devContents } from '@/components/developpement'
import { contents as depContents } from '@/components/depannage'
import { contents as installContents } from '@/components/install'

import styles from './index.module.css'

/**
 * Home
 * @returns Home
 */
const Home = () => {
  // Links
  const dev = useMemo(() => menuItems.find((item) => item.key === 'dev'), [])
  const dep = useMemo(() => menuItems.find((item) => item.key === 'dep'), [])
  const install = useMemo(
    () => menuItems.find((item) => item.key === 'install'),
    []
  )

  /**
   * Render
   */
  return (
    <div>
      <SubHeader
        title={
          <div className={styles.subHeaderTitle}>
            <Image src="/logo.png" alt="Logo" width={150} height={150} /> 2LTech
          </div>
        }
        subTitle="Développement web, dépannage informatique,
		installation réseau et bien plus encore"
        description={
          <Space wrap>
            {dev ? (
              <Button
                type="primary"
                size="large"
                icon={dev.icon}
                href={dev.href}
              >
                {dev.label}
              </Button>
            ) : null}
            {dep ? (
              <Button
                type="primary"
                size="large"
                icon={dep.icon}
                href={dep.href}
              >
                {dep.label}
              </Button>
            ) : null}
            {install ? (
              <Button
                type="primary"
                size="large"
                icon={install.icon}
                href={install.href}
              >
                {install.label}
              </Button>
            ) : null}
          </Space>
        }
      />

      {dev ? (
        <div className={styles.content}>
          <Link href={dev.href}>
            <Typography.Title level={3}>{dev.label}</Typography.Title>
          </Link>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={devContents}
            renderItem={(item) => contentRenderMini(dev.href, item)}
          />
        </div>
      ) : null}

      <Divider />

      {dep ? (
        <div className={styles.content}>
          <Link href={dep.href}>
            <Typography.Title level={3}>{dep.label}</Typography.Title>
          </Link>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={depContents}
            renderItem={(item) => contentRenderMini(dep.href, item)}
          />
        </div>
      ) : null}

      <Divider />

      {install ? (
        <div className={styles.content}>
          <Link href={install.href}>
            <Typography.Title level={3}>{install.label}</Typography.Title>
          </Link>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={installContents}
            renderItem={(item) => contentRenderMini(install.href, item)}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Home

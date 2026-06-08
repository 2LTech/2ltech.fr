import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Space, Typography } from 'antd'

import menuItems from '@/defs/menu'

import { RestrictedContent } from '@/components/assets/framework/content'

import SubHeader from '@/components/assets/subHeader'
import Divider from '@/components/assets/divider'
import MyMasonry from '@/components/assets/mymasonry'

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
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
            <span>2LTech</span>
          </div>
        }
        subTitle="Des solutions web, informatique et réseau claires, fiables et pensées pour durer."
        description={
          <div className={styles.heroPanel}>
            <Space wrap className={styles.subHeaderDescription}>
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

            <div className={styles.metrics}>
              <div>
                <strong>{devContents.length}</strong>
                <span>expertises web et code</span>
              </div>
              <div>
                <strong>{depContents.length}</strong>
                <span>services de dépannage</span>
              </div>
              <div>
                <strong>{installContents.length}</strong>
                <span>installations réseau et serveur</span>
              </div>
            </div>
          </div>
        }
      />

      {dev ? (
        <RestrictedContent>
          <div className={styles.sectionHeader}>
            <Link href={dev.href}>
              <Typography.Title level={3}>{dev.label}</Typography.Title>
            </Link>
            <Typography.Paragraph>
              Sites vitrines, applications métier et calcul scientifique avec
              une approche pragmatique.
            </Typography.Paragraph>
          </div>
          <MyMasonry page={dev.href} items={devContents} />
        </RestrictedContent>
      ) : null}

      <Divider />

      {dep ? (
        <RestrictedContent>
          <div className={styles.sectionHeader}>
            <Link href={dep.href}>
              <Typography.Title level={3}>{dep.label}</Typography.Title>
            </Link>
            <Typography.Paragraph>
              Diagnostic, récupération, périphériques et matériel pour retrouver
              un poste de travail serein.
            </Typography.Paragraph>
          </div>
          <MyMasonry page={dep.href} items={depContents} />
        </RestrictedContent>
      ) : null}

      <Divider />

      {install ? (
        <RestrictedContent>
          <div className={styles.sectionHeader}>
            <Link href={install.href}>
              <Typography.Title level={3}>{install.label}</Typography.Title>
            </Link>
            <Typography.Paragraph>
              Réseaux, serveurs et clusters configurés proprement, du petit
              bureau aux besoins plus techniques.
            </Typography.Paragraph>
          </div>
          <MyMasonry page={install.href} items={installContents} />
        </RestrictedContent>
      ) : null}
    </div>
  )
}

export default Home

'use client'

import { ConfigProvider, Layout, Typography } from 'antd'

import theme from './themeConfig'

import Header from '../components/header'
import Content from '../components/content'

import styles from './page.module.css'
import Image from 'next/image'

const NotFound = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <div className={styles.content404}>
          <Typography.Title level={1}>Erreur 404</Typography.Title>
          <Typography.Title level={3}>
            La page que vous cherchez n'existe pas
          </Typography.Title>
          <Typography.Text>
            <Image src='/mushroom.jpg' width={100} height={100} alt='' />
            Pas non plus un champignon par ici...
          </Typography.Text>
        </div>
      </Content>
    </Layout>
  </ConfigProvider>
)

export default NotFound

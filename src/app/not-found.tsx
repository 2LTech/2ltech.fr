'use client'

import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import NotFound from '@/components/notFound'

import styles from './page.module.css'

/**
 * Not found
 * @returns NotFound
 */
const NotFoundPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <NotFound />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default NotFoundPage

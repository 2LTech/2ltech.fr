'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import Dev from '@/components/developpement'

import styles from '../page.module.css'

/**
 * Dev
 * @returns DeVPage
 */
const DevPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Dev />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default DevPage

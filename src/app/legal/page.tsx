'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import Legal from '@/components/assets/legal'

import styles from '../page.module.css'

/**
 * Legal
 * @returns LegalPage
 */
const LegalPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Legal />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default LegalPage

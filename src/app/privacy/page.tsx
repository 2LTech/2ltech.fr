'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import Privacy from '@/components/assets/privacy'

import styles from '../page.module.css'

/**
 * Privacy
 * @returns PrivacyPage
 */
const PrivacyPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Privacy />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default PrivacyPage

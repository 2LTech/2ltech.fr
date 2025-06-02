'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import Install from '@/components/install'

import styles from '../page.module.css'

/**
 * Install
 * @returns InstallPage
 */
const InstallPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Install />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default InstallPage

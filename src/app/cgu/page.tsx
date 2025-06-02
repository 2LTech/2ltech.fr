'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import CGU from '@/components/assets/cgu'

import styles from '../page.module.css'

/**
 * CGU
 * @returns CGUPage
 */
const CGUPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <CGU />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default CGUPage

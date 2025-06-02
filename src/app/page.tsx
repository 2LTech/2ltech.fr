'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import Home from '@/components/home'

import styles from './page.module.css'

/**
 * Home page
 * @returns HomePage
 */
const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Home />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default HomePage

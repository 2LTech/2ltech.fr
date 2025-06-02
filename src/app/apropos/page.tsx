'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Sider from '@/components/assets/sider'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import About from '@/components/about'

import styles from '../page.module.css'

/**
 * À props
 * @returns AboutPage
 */
const AboutPage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.mainLayout} hasSider>
      <Sider />
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <About />
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>
)

export default AboutPage

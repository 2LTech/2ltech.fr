'use client'

import { ConfigProvider, Layout } from 'antd'

import theme from '@/app/themeConfig'

import Footer from '@/components/assets/framework/footer'
import Header from '@/components/assets/framework/header'
import Content from '@/components/assets/framework/content'

export interface Props {
  children: React.ReactElement
}

const Framework: React.FunctionComponent<Props> = ({ children }) => (
  <ConfigProvider theme={theme}>
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  </ConfigProvider>
)

export default Framework

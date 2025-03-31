'use client'

import React from 'react'
import { ConfigProvider, Layout } from 'antd'

import theme from './themeConfig'
import Header from '../components/header'
import Content from '../components/content'
import SubHeader from '../components/subHeader'

import styles from './page.module.css'

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <SubHeader />

        <div style={{ padding: '50px' }}>
          <p>
            Lorem ipsum dolor sit amet. In neque fuga et sunt corrupti in
            quisquam dolor et maiores tenetur qui nisi voluptatem est ullam
            dolore. Cum laudantium voluptatem aut enim minima ut omnis provident
            eum culpa nostrum. Et unde asperiores et magni Quis et reiciendis
            nulla qui voluptas quas eos voluptatem ducimus. Est molestiae
            obcaecati nam vero neque et doloribus excepturi qui facere dolorum
            ut voluptatem tenetur et modi veniam.{' '}
          </p>
          <p>
            Ut ipsam voluptatem qui officia tenetur et modi provident aut vitae
            esse et repellendus nisi non dolores reprehenderit. Qui quia
            aspernatur ab eius totam non eaque quaerat ab placeat sunt At
            placeat recusandae? Aut recusandae dolor et esse voluptas quo
            molestiae quia aut illum placeat aut praesentium velit quo eveniet
            aliquid est blanditiis quia. Eum nihil reiciendis sit perferendis
            enim aut reprehenderit deserunt in dignissimos eaque et ratione quae
            ut libero quis quo alias galisum.{' '}
          </p>
          <p>
            Ut doloremque galisum nam quasi nihil qui internos officia. Ut
            assumenda numquam et officiis ipsum ut voluptatum internos aut sint
            culpa.{' '}
          </p>
          <p>
            Est laborum adipisci sit velit corrupti ea animi labore aut eius
            libero eum magni laborum. Et molestiae ullam 33 galisum internos ut
            autem consectetur quo cumque explicabo ab vero tenetur et incidunt
            ullam. Eum assumenda galisum ea nihil corporis et eveniet
            numquam.{' '}
          </p>
          <p>
            Sit quod adipisci et blanditiis nihil hic consequatur repellat ut
            sint asperiores et ullam aliquid et ducimus sunt. Aut error corporis
            ea esse vero in obcaecati quia aut earum eveniet. Eum quae atque rem
            quia quasi At nostrum soluta! 33 molestias quaerat et ratione atque
            ut voluptatem doloremque est minima inventore et repellendus
            blanditiis id deleniti praesentium.{' '}
          </p>
          <p>
            Aut suscipit nemo et vero omnis est repudiandae unde est quas
            dolore. Qui placeat quae qui maxime dolores aut Quis doloribus et
            veniam deleniti est minus consequatur.{' '}
          </p>
          <p>
            Aut odit corrupti ea ipsam dignissimos et facilis facilis qui fugiat
            quam? Qui perspiciatis porro eum voluptatem autem et voluptate odio.
            Sed repudiandae veritatis aut expedita harum ut saepe iste non
            dolores veniam qui quasi sint et amet iste et dolorum consequatur.
            Eum aperiam odit ad corporis ipsa aut blanditiis itaque est
            perferendis sint in quos iste aut eius beatae.{' '}
          </p>
          <p>
            Sit eius quis sit dolorem aliquid et esse nihil qui omnis dolorem
            vel minima reiciendis ab autem autem. Quo impedit repellat et
            voluptas dignissimos quo molestiae eligendi At eligendi assumenda
            qui quasi omnis aut nesciunt aliquam qui quia unde! Eum sequi animi
            aut quibusdam autem et praesentium voluptate qui voluptate animi rem
            omnis praesentium id nesciunt dolore. Quo voluptatibus eaque quo
            illo temporibus eos odio nihil.{' '}
          </p>
          <p>
            Aut autem porro et aspernatur quam 33 galisum quia est internos
            iusto. Id omnis nihil a minima placeat et dolor voluptas non galisum
            voluptatem. Ut voluptatum quia id doloribus dolores ut laudantium
            nihil nam quidem consectetur ut natus molestiae.{' '}
          </p>
          <p>
            Aut accusamus amet rem esse aliquid est ullam autem et reiciendis
            similique eos atque assumenda. Est excepturi vitae est inventore
            tempore nam explicabo impedit. Ea internos iure non eaque ipsam aut
            dolorem dolores aut eaque tempora.{' '}
          </p>
          <p>
            Aut repellendus quis qui facere aliquid est minima eligendi et
            voluptas galisum vel placeat quia. Ut sunt fugiat non sint labore ad
            distinctio quibusdam ut rerum magnam non ipsam exercitationem. A
            voluptate totam sit ratione ratione vel quasi ratione aut tempore
            consectetur ut fuga voluptatem 33 voluptatem error aut fugiat
            delectus.{' '}
          </p>
          <p>
            Eos repellat rerum ea ratione provident eum sunt nisi sit pariatur
            inventore. Ut expedita asperiores est provident consequuntur sit
            iusto dignissimos est quidem nesciunt aut incidunt quia id modi
            omnis?{' '}
          </p>
        </div>
      </Content>
    </Layout>
  </ConfigProvider>
)

export default HomePage

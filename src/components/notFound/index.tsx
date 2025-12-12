import Image from 'next/image'
import { Typography } from 'antd'

import { RestrictedContent } from '@/components/assets/framework/content'

import styles from './index.module.css'

/**
 * 404
 * @returns NotFound
 */
const NotFound = () => (
  <RestrictedContent>
    <div className={styles.content}>
      <Typography.Title level={1}>Erreur 404</Typography.Title>
      <Typography.Title level={3}>
        La page que vous cherchez n&apos;existe pas
      </Typography.Title>
      <Typography.Text>
        <Image src="/mushroom.jpg" width={100} height={100} alt="" />
        Pas non plus un champignon par ici...
      </Typography.Text>
    </div>
  </RestrictedContent>
)

export default NotFound

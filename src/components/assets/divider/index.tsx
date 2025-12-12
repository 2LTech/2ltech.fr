import Image from 'next/image'

import styles from './index.module.css'

/**
 * Divider
 * @returns Divider
 */
const Divider = () => (
  <div className={styles.divider}>
    <div className={styles.border1} />
    <Image
      className={styles.image}
      src="/logo.png"
      alt=""
      width={50}
      height={50}
    />
    <div className={styles.border2} />
  </div>
)

export default Divider

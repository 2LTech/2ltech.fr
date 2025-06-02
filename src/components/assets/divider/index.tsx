import Image from 'next/image'

import styles from './index.module.css'

/**
 * Divider
 * @returns Divider
 */
const Divider = () => (
  <div className={styles.divider}>
    <Image
      className={styles.image}
      src="/logo.png"
      alt=""
      width={50}
      height={50}
    />
  </div>
)

export default Divider

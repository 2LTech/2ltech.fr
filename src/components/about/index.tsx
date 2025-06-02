import { Typography } from 'antd'
import Link from 'next/link'

import SubHeader from '@/components/assets/subHeader'

import styles from './index.module.css'

/**
 * About
 * @returns About
 */
const About = () => {
  return (
    <div>
      <SubHeader title={'À propos de moi'} />

      <Typography.Paragraph className={styles.content}>
        Après une doctorat en Mathématiques Appliquées et une dizaine
        d&apos;années en start-up, il était temps pour moi de voler de mes
        propres ailes.
        <br />
        <br />
        Durant ces années, j&apos;ai acquis de solides compétences dans des
        domaines très variés des mathématiques et de l&apos;informatique :
        résolution de problèmes multi-physiques (mécanique, fluide, magnétisme,
        son, ...), conception et écriture d&apos;algorithmes, développement
        logiciel, gestion de projet, configuration, gestion et supervision de
        parc informatique, choix du matériel informatique / réseau, ...
        <br />
        <br />
        <Link href="/contact">Contactez-moi</Link> pour toute demande et nous
        pourrons prendre le temps d&apos;en discuter de vive voix.
      </Typography.Paragraph>
    </div>
  )
}

export default About

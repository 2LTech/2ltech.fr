import Image from 'next/image'
import { List } from 'antd'

import SubHeader from '@/components/assets/subHeader'
import {
  ContentItem,
  contentRender,
  footer
} from '@/components/assets/contentRender'

// Content
export const contents: ContentItem[] = [
  {
    key: 'desktop',
    title: 'Dépannage informatique',
    subTitle: 'Ordinateur de bureau et PC portable',
    content: (
      <>
        Dépannage et récupération de données sur les systèmes
        d&apos;exploitation Windows, MacOS et Linux.
      </>
    ),
    extra: <Image src="desktop.png" alt="" width={128} height={128} />
  },
  {
    key: 'build',
    title: 'Assemblage PC',
    subTitle: <>Assemblage sur mesure d&apos;ordinateur de bureau</>,
    content: (
      <>
        Assemblage d&apos;ordinateur de bureau selon les besoins : bureautique,
        montage vidéo, gaming, ...
      </>
    ),
    extra: <Image src="build.png" alt="" width={128} height={128} />
  },
  {
    key: 'device',
    title: 'Périphériques',
    subTitle: 'Installation et dépannage des périphériques',
    content: (
      <>
        Installation et dépannage d&apos;imprimante, webcam, clavier, souri,
        système de stockage, ...
      </>
    ),
    extra: <Image src="device.png" alt="" width={128} height={128} />
  },
  {
    key: 'network',
    title: 'Réseau',
    subTitle: 'Installation et paramétrage réseau',
    content: (
      <>
        Installation et paramétrage de box internet, stockage réseau (NAS), ...
        <br />
        Accès depuis internet et protocoles de sécurité.
      </>
    ),
    extra: <Image src="network.png" alt="" width={128} height={128} />
  }
]

/**
 * Depannage
 * @returns Depannage
 */
const Depannage = () => (
  <div>
    <SubHeader title="Dépannage" />
    <List
      itemLayout="vertical"
      size="large"
      dataSource={contents}
      renderItem={contentRender}
      footer={footer}
    />
  </div>
)

export default Depannage

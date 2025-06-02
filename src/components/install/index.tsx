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
    key: 'network',
    title: 'Réseau',
    subTitle: 'Installation réseau',
    content: (
      <>
        De la simple box à l&apos;installation réseau avec stockage, points
        d&apos;accès, caméras, sérrures connectées, ...
      </>
    ),
    extra: <Image src="network2.png" alt="" width={128} height={128} />
  },
  {
    key: 'server',
    title: 'Serveur',
    subTitle: 'Installation et gestion de serveur',
    content:
      'Installation et gestion de serveur de toute taille, de la Raspberry Pi aux armoires en Rack',
    extra: <Image src="server.png" alt="" width={128} height={128} />
  },
  {
    key: 'cluster',
    title: 'Cluster de calcul',
    subTitle: 'Installation et gestion de cluster de calcul',
    content:
      'Installation et gestion de station de travail ou de cluster de calcul fonctionnant en parallèle avec accès spécifiques et gestionnaire et ordonnanceur de tâches.',
    extra: <Image src="cluster.png" alt="" width={128} height={128} />
  }
]

/**
 * Install
 * @returns Install
 */
const Install = () => (
  <div>
    <SubHeader title="Installation" />
    <List
      itemLayout="vertical"
      size="large"
      dataSource={contents}
      renderItem={contentRender}
      footer={footer}
    />
  </div>
)

export default Install

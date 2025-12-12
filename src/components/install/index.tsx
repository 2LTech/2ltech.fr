import Image from 'next/image'
import { List } from 'antd'

import { RestrictedContent } from '@/components/assets/framework/content'

import SubHeader from '@/components/assets/subHeader'
import MyList, { ContentItem } from '@/components/assets/mylist'

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
  <>
    <SubHeader title="Installation" />
    <RestrictedContent>
      <MyList items={contents} />
    </RestrictedContent>
  </>
)

export default Install

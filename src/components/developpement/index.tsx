import Link from 'next/link'
import Image from 'next/image'

import { RestrictedContent } from '@/components/assets/framework/content'

import SubHeader from '@/components/assets/subHeader'
import MyList, { ContentItem } from '@/components/assets/mylist'

// Content
export const contents: ContentItem[] = [
  {
    key: 'web',
    title: 'Site internet',
    subTitle: 'Développement de site web professionnel',
    content: (
      <>
        Création d&apos;un site web vitrine sur mesure, adapté aux mobiles.
        <br />
        Site «Carte de visite» d&apos;une page ou site internet complet selon
        vos besoins.
      </>
    ),
    extra: <Image src="/web.png" alt="" width={128} height={128} />
  },
  {
    key: 'app',
    title: 'Application web',
    subTitle: "Développement d'application web",
    content: (
      <>
        Création et gestion d&apos;application web, incluant l&apos;interface
        utilisateur (<i>front end</i>), la partie serveur (<i>back end</i>), une
        eventuelle base de données, des services spécifiques sur le serveur, le
        déploiement, ...
      </>
    ),
    extra: <Image src="/webapp.png" alt="" width={128} height={128} />
  },
  {
    key: 'code',
    title: 'Code',
    subTitle: 'Code de calculs et algorithmes',
    content: (
      <>
        Code de calcul spécifique en C/C++, Fortran, Python, ...
        <br />
        Script NodeJS, shell, powershell, ...
        <br />
        <Link href="https://www.npmjs.com/search?q=%402ltech" target="_blank">
          NPM packages
        </Link>
      </>
    ),
    extra: <Image src="/code.png" alt="" width={128} height={128} />
  },
  {
    key: 'simulation',
    title: 'Simulation numérique',
    subTitle: 'Simulation numérique de problème physique',
    content: (
      <>
        Mécanique du solide, mécanique des fluides, éléctromagnétisme, ...
        <br />
        Résolution du problème en volumes finis ou éléments finis, codage
        possible sur{' '}
        <Link href="https://freefem.org/" target="_blank">
          FreeFEM
        </Link>
        ,{' '}
        <Link href="https://www.openfoam.com/" target="_blank">
          OpenFOAM
        </Link>
        ,{' '}
        <Link href="https://code-aster.org/" target="_blank">
          CodeAster
        </Link>
        , ...
      </>
    ),
    extra: <Image src="/simulation.png" alt="" width={128} height={128} />
  }
]

/**
 * Developpement
 * @returns Developpement
 */
const Developpement = () => (
  <>
    <SubHeader title="Développement" />
    <RestrictedContent>
      <MyList items={contents} />
    </RestrictedContent>
  </>
)

export default Developpement

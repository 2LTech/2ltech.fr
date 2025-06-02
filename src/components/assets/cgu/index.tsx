import Link from 'next/link'
import { Typography } from 'antd'

import styles from './index.module.css'

// Mail
const mail = <a href="mailto:contact@2ltech.fr">contact@2ltech.fr</a>

/**
 * CGU
 * @returns CGU
 */
const CGU = () => (
  <div className={styles.content}>
    <Typography.Title level={3}>
      Conditions générales d&apos;utilisation
    </Typography.Title>
    <Typography.Text italic>En vigueur au 02/06/2025</Typography.Text>

    <Typography.Paragraph>
      <br />
      Les présentes conditions générales d&apos;utilisation (dites « CGU ») ont
      pour objet l&apos;encadrement juridique des modalités de mise à
      disposition du site et des services par 2LTech et de définir les
      conditions d’accès et d’utilisation des services par « l&apos;Utilisateur
      ».
      <br />
      Les présentes CGU sont accessibles sur le site à la rubrique «Conditions
      générales d&apos;utilisation».
    </Typography.Paragraph>

    <Typography.Title level={5}>
      Article 1 : Les mentions légales
    </Typography.Title>
    <Typography.Paragraph id="article1">
      L&apos;édition du site 2ltech.fr est assurée par la Société SARL 2LTech au
      capital de 5000 euros, immatriculée au RCS de Brive sous le numéro
      940870108, dont le siège social est situé au 1 avenue Bel Air 19260
      Treignac.
      <ul>
        <li>
          Numéro de téléphone : <a href="tel:0743102886">0743102886</a>
        </li>
        <li>Adresse e-mail : {mail}</li>
      </ul>
      Le Directeur de la publication est : Garnotel Simon
      <br />
      Numéro de TVA intracommunautaire : FR61940870108.
      <br />
      <br />
      L&apos;hébergeur du site 2ltech.fr est la société OVH SAS, dont le siège
      social est situé au 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1,
      avec le numéro de téléphone : 1007.
    </Typography.Paragraph>

    <Typography.Title level={5}>ARTICLE 2 : Accès au site</Typography.Title>
    <Typography.Paragraph>
      Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant
      un accès à Internet. Tous les frais supportés par l&apos;Utilisateur pour
      accéder au service (matériel informatique, logiciels, connexion Internet,
      etc.) sont à sa charge.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 3 : Collecte des données
    </Typography.Title>
    <Typography.Paragraph>
      Le site assure à l&apos;Utilisateur une collecte et un traitement
      d&apos;informations personnelles dans le respect de la vie privée
      conformément à la loi n°78-17 du 6 janvier 1978 relative à
      l&apos;informatique, aux fichiers et aux libertés.
      <br />
      En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
      l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification,
      de suppression et d&apos;opposition de ses données personnelles.
      L&apos;Utilisateur exerce ce droit :
      <ul>
        <li>Par email à l&apos;adresse email : {mail}</li>
        <li>
          Par voie postale à l&apos;adresse : SARL 2LTech, 1 avenue Bel Air
          19260 Treignac
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 4 : Propriété intellectuelle
    </Typography.Title>
    <Typography.Paragraph>
      Les marques, logos, signes ainsi que tous les contenus du site (textes,
      images, son, ...) font l&apos;objet d&apos;une protection par le Code de
      la propriété intellectuelle et plus particulièrement par le droit
      d&apos;auteur.
      <br />
      L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site
      pour toute reproduction, publication, copie des différents contenus. Il
      s&apos;engage à une utilisation des contenus du site dans un cadre
      strictement privé, toute utilisation à des fins commerciales et
      publicitaires est strictement interdite.
      <br />
      Toute représentation totale ou partielle de ce site par quelque procédé
      que ce soit, sans l’autorisation expresse de l’exploitant du site Internet
      constituerait une contrefaçon sanctionnée par l’article L 335-2 et
      suivants du Code de la propriété intellectuelle.
      <br />
      Il est rappelé conformément à l’article L122-5 du Code de propriété
      intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu
      protégé doit citer l’auteur et sa source.
    </Typography.Paragraph>

    <Typography.Title level={5}>ARTICLE 5 : Responsabilité</Typography.Title>
    <Typography.Paragraph>
      Les sources des informations diffusées sur le site 2ltech.fr sont réputées
      fiables mais le site ne garantit pas qu’il soit exempt de défauts,
      d’erreurs ou d’omissions.
      <br />
      <br />
      Les informations communiquées sont présentées à titre indicatif et général
      sans valeur contractuelle. Malgré des mises à jour régulières, le site
      2ltech.fr ne peut être tenu responsable de la modification des
      dispositions administratives et juridiques survenant après la publication.
      De même, le site ne peut être tenue responsable de l’utilisation et de
      l’interprétation de l’information contenue dans ce site.
      <br />
      Le site 2ltech.fr ne peut être tenu pour responsable d’éventuels virus qui
      pourraient infecter l’ordinateur ou tout matériel informatique de
      l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement
      provenant de ce site.
      <br />
      <br />
      La responsabilité du site ne peut être engagée en cas de force majeure ou
      du fait imprévisible et insurmontable d&apos;un tiers.
    </Typography.Paragraph>

    <Typography.Title level={5}>ARTICLE 6 : Liens hypertextes</Typography.Title>
    <Typography.Paragraph>
      Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est
      informé qu’en cliquant sur ces liens, il sortira du site 2ltech.fr. Ce
      dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent
      ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
    </Typography.Paragraph>

    <Typography.Title level={5}>ARTICLE 7 : Cookies</Typography.Title>
    <Typography.Paragraph>
      L’Utilisateur est informé que lors de ses visites sur le site, un cookie
      peut s’installer automatiquement sur son logiciel de navigation.
      <br />
      <br />
      Les cookies sont de petits fichiers stockés temporairement sur le disque
      dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont
      nécessaires à l’utilisation du site 2ltech.fr. Les cookies ne contiennent
      pas d’information personnelle et ne peuvent pas être utilisés pour
      identifier quelqu’un. Un cookie contient un identifiant unique, généré
      aléatoirement et donc anonyme. Certains cookies expirent à la fin de la
      visite de l’Utilisateur, d’autres restent.
      <br />
      <br />
      L’information contenue dans les cookies est utilisée pour améliorer le
      site 2ltech.fr.
      <br />
      <br />
      En naviguant sur le site, L’Utilisateur les accepte.
      <br />
      L’Utilisateur doit toutefois donner son consentement quant à l’utilisation
      de certains cookies.
      <br />
      A défaut d’acceptation, l’Utilisateur est informé que certaines
      fonctionnalités ou pages risquent de lui être refusées.
      <br />
      L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des
      paramètres figurant au sein de son logiciel de navigation.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 8 : Droit applicable et juridiction compétente
    </Typography.Title>
    <Typography.Paragraph>
      La législation française s&apos;applique au présent contrat. En cas
      d&apos;absence de résolution amiable d&apos;un litige né entre les
      parties, les tribunaux français seront seuls compétents pour en connaître.
      Pour toute question relative à l’application des présentes CGU, vous
      pouvez joindre l’éditeur aux coordonnées inscrites à l’
      <Link href="#article1">ARTICLE 1</Link>.
    </Typography.Paragraph>
  </div>
)

export default CGU

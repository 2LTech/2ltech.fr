import Link from 'next/link'
import { Typography } from 'antd'

import styles from './index.module.css'

// Tel
const tel = <a href="tel:0743102886">0743102886</a>
// Mail
const mail = <a href="mailto:contact@2ltech.fr">contact@2ltech.fr</a>

/**
 * Privacy
 * @returns Privacy
 */
const Privacy = () => (
  <div className={styles.content}>
    <Typography.Title level={3}>Politique de confidentialité</Typography.Title>
    <Typography.Text>2LTech.fr</Typography.Text>

    <Typography.Title level={5}>ARTICLE 1 : PRÉAMBULE</Typography.Title>
    <Typography.Paragraph>
      La présente politique de confidentialité a pour but d’informer les
      utilisateurs du site :
      <ul>
        <li>
          Sur la manière dont sont collectées leurs données personnelles. Sont
          considérées comme des données personnelles, toute information
          permettant d’identifier un utilisateur. A ce titre, il peut s’agir :
          de ses noms et prénoms, de son âge, de son adresse postale ou email,
          de sa localisation ou encore de son adresse IP (liste non-exhaustive)
          ;
        </li>
        <li>Sur les droits dont ils disposent concernant ces données ;</li>
        <li>
          Sur la personne responsable du traitement des données à caractère
          personnel collectées et traitées ;
        </li>
        <li>Sur les destinataires de ces données personnelles ;</li>
        <li>Sur la politique du site en matière de cookies.</li>
      </ul>
      Cette politique complète les <Link href="/legal">Mentions Légales</Link>{' '}
      et les <Link href="/cgu">Conditions Générales d’Utilisation</Link>{' '}
      consultables par les utilisateurs.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES
      PERSONNELLES
    </Typography.Title>
    <Typography.Paragraph>
      Conformément à l’article 5 du Règlement européen 2016/679, les données à
      caractère personnel sont :
      <ul>
        <li>
          Traitées de manière licite, loyale et transparente au regard de la
          personne concernée ;
        </li>
        <li>
          Collectées pour des finalités déterminées (cf. Article 3.1 des
          présentes), explicites et légitimes, et ne pas être traitées
          ultérieurement d&apos;une manière incompatible avec ces finalités ;
        </li>
        <li>
          Adéquates, pertinentes et limitées à ce qui est nécessaire au regard
          des finalités pour lesquelles elles sont traitées ;
        </li>
        <li>
          Exactes et, si nécessaire, tenues à jour. Toutes les mesures
          raisonnables doivent être prises pour que les données à caractère
          personnel qui sont inexactes, eu égard aux finalités pour lesquelles
          elles sont traitées, soient effacées ou rectifiées sans tarder ;
        </li>
        <li>
          Conservées sous une forme permettant l&apos;identification des
          personnes concernées pendant une durée n&apos;excédant pas celle
          nécessaire au regard des finalités pour lesquelles elles sont traitées
          ;
        </li>
        <li>
          Traitées de façon à garantir une sécurité appropriée des données
          collectées, y compris la protection contre le traitement non autorisé
          ou illicite et contre la perte, la destruction ou les dégâts
          d&apos;origine accidentelle, à l&apos;aide de mesures techniques ou
          organisationnelles appropriées.
        </li>
      </ul>
      <br />
      Le traitement n&apos;est licite que si, et dans la mesure où, au moins une
      des conditions suivantes est remplie :
      <ul>
        <li>
          La personne concernée a consenti au traitement de ses données à
          caractère personnel pour une ou plusieurs finalités spécifiques ;
        </li>
        <li>
          Le traitement est nécessaire à l&apos;exécution d&apos;un contrat
          auquel la personne concernée est partie ou à l&apos;exécution de
          mesures précontractuelles prises à la demande de celle-ci ;
        </li>
        <li>
          Le traitement est nécessaire au respect d&apos;une obligation légale à
          laquelle le responsable du traitement est soumis ;
        </li>
        <li>
          Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la
          personne concernée ou d&apos;une autre personne physique ;
        </li>
        <li>
          Le traitement est nécessaire à l&apos;exécution d&apos;une mission
          d&apos;intérêt public ou relevant de l&apos;exercice de
          l&apos;autorité publique dont est investi le responsable du traitement
          ;
        </li>
        <li>
          Le traitement est nécessaire aux fins des intérêts légitimes
          poursuivis par le responsable du traitement ou par un tiers, à moins
          que ne prévalent les intérêts ou les libertés et droits fondamentaux
          de la personne concernée qui exigent une protection des données à
          caractère personnel, notamment lorsque la personne concernée est un
          enfant.
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE
      CADRE DE LA NAVIGATION SUR LE SITE
    </Typography.Title>
    <Typography.Text strong>Article 3.1 : Données collectées</Typography.Text>
    <Typography.Paragraph>
      Les données personnelles collectées dans le cadre de notre activité sont
      les suivantes :
      <ul>
        <li>Aucune</li>
      </ul>
      La collecte et le traitement de ces données répond à aux finalités
      suivantes :
      <ul>
        <li>Aucune</li>
      </ul>
    </Typography.Paragraph>

    <Typography.Text strong>
      Article 3.2 : Mode de collecte des données{' '}
    </Typography.Text>
    <Typography.Paragraph>
      Lorsque vous utilisez notre site, sont automatiquement collectées les
      données suivantes :
      <ul>
        <li>Aucune</li>
      </ul>
      D’autres données personnelles sont collectées lorsque vous effectuez les
      opérations suivantes sur la plateforme :
      <ul>
        <li>Aucune</li>
      </ul>
    </Typography.Paragraph>

    <Typography.Paragraph>
      Elles sont conservées par le responsable du traitement dans des conditions
      raisonnables de sécurité, pour une durée de : Aucune.
      <br />
      La société est susceptible de conserver certaines données à caractère
      personnel au-delà des délais annoncés ci-dessus afin de remplir ses
      obligations légales ou réglementaires.
    </Typography.Paragraph>

    <Typography.Text strong>
      Article 3.3 : Hébergement des données{' '}
    </Typography.Text>
    <Typography.Paragraph>
      Le site 2LTech.fr est hébergé par la société OVH SAS, dont le siège social
      est situé au 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1, avec le
      numéro de téléphone : 1007.
    </Typography.Paragraph>

    <Typography.Text strong>
      Article 3.4 : Transmission des données à des tiers
    </Typography.Text>
    <Typography.Paragraph>
      Les données ne peuvent pas être transmises à de quelconques partenaires.
    </Typography.Paragraph>

    <Typography.Text strong>
      Article 3.5 : Politique en matière de cookies
    </Typography.Text>
    <Typography.Paragraph>
      Un cookies est un petit fichier stocké sur le disque dur d’un utilisateur
      par un site. Il permet de collecter des données concernant les habitudes
      de navigation et les interactions de l’utilisateur avec le site.
      <br />
      Nous utilisons les types de cookies suivants sur notre site :
      <ul>
        <li>
          Cookies fonctionnels. Nous les utilisons pour mémoriser toutes les
          sélections que vous faites sur notre site afin qu’elles soient
          sauvegardées pour vos prochaines visites.
        </li>
      </ul>
      Vous pouvez choisir d’être averti chaque fois qu’un cookie est transmis ou
      de désactiver complètement les cookies en modifiant les paramètres de
      votre navigateur Internet. Cependant, veuillez noter que cela pourrait
      affecter certaines fonctionnalités du site et diminuer la qualité de votre
      expérience utilisateur.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA
      PROTECTION DES DONNÉES
    </Typography.Title>
    <Typography.Text strong>
      Article 4.1 : Le responsable du traitement des données
    </Typography.Text>
    <Typography.Paragraph>
      Les données à caractère personnelles sont collectées par 2LTech, SARL au
      capital de 5000€, dont le numéro d’immatriculation est le R.C.S. Brive 940
      870 108.
      <br />
      Le responsable du traitement des données à caractère personnel peut être
      contacté de la manière suivante : Par courrier à l’adresse : 1 avenue Bel
      Air 19260 Treignac; Par téléphone, au {tel}; Par mail : {mail}.
    </Typography.Paragraph>

    <Typography.Text strong>
      Article 4.2 : Le délégué à la protection des données
    </Typography.Text>
    <Typography.Paragraph>
      Le délégué à la protection des données de l’entreprise ou du responsable
      est : Garnotel Simon, 1 avenue Bel Air 19260 Treignac, {tel}, {mail}.
      <br />
      Si vous estimez, après nous avoir contactés, que vos droits “Informatique
      et Libertés”, ne sont pas respectés, vous pouvez adresser une information
      à la CNIL.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 5 : LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE
      TRAITEMENT DES DONNÉES
    </Typography.Title>
    <Typography.Paragraph>
      Tout utilisateur concerné par le traitement de ses données personnelles
      peut se prévaloir des droits suivants, en application du règlement
      européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6
      janvier 1978) :
      <ul>
        <li>
          Droit d’accès, de rectification et droit à l’effacement des données
          (posés respectivement aux articles 15, 16 et 17 du RGPD) ;
        </li>

        <li>Droit à la portabilité des données (article 20 du RGPD) ;</li>

        <li>
          Droit à la limitation (article 18 du RGPD) et à l’opposition du
          traitement des données (article 21 du RGPD) ;
        </li>

        <li>
          Droit de ne pas faire l’objet d’une décision fondée exclusivement sur
          un procédé automatisé ;
        </li>

        <li>Droit de déterminer le sort des données après la mort ;</li>

        <li>
          Droit de saisir l’autorité de contrôle compétente (article 77 du
          RGPD).
        </li>
      </ul>
      Pour exercer vos droits, veuillez adresser votre courrier à SARL 2LTech, 1
      avenue Bel Air 19260 Treignac ou par mail à {mail}.
      <br />
      Afin que le responsable du traitement des données puisse faire droit à sa
      demande, l’utilisateur peut être tenu de lui communiquer certaines
      informations telles que : ses noms et prénoms, son adresse e-mail ainsi
      que son numéro de compte, d’espace personnel ou d’abonné.
      <br />
      Consultez le site{' '}
      <Link href="https://cnil.fr/fr" target="_blank">
        cnil.fr
      </Link>{' '}
      pour plus d’informations sur vos droits.
    </Typography.Paragraph>

    <Typography.Title level={5}>
      ARTICLE 6 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ
    </Typography.Title>
    <Typography.Paragraph>
      L’éditeur du site 2LTech.fr se réserve le droit de pouvoir modifier la
      présente Politique à tout moment afin d’assurer aux utilisateurs du site
      sa conformité avec le droit en vigueur.
      <br />
      Les éventuelles modifications ne sauraient avoir d’incidence sur les
      achats antérieurement effectués sur le site, lesquels restent soumis à la
      Politique en vigueur au moment de l’achat et telle qu’acceptée par
      l’utilisateur lors de la validation de l’achat.
      <br />
      L’utilisateur est invité à prendre connaissance de cette Politique à
      chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en
      prévenir formellement.
      <br />
      La présente politique, éditée le 02 juin 2025, a été mise à jour le 02
      juin 2025.
    </Typography.Paragraph>
  </div>
)

export default Privacy

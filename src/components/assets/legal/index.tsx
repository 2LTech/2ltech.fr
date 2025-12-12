import { Typography } from 'antd'

import { RestrictedContent } from '@/components/assets/framework/content'

/**
 * Legal
 * @returns Legal
 */
const Legal = () => (
  <RestrictedContent>
    <Typography.Title level={3}>Mentions Légales</Typography.Title>
    <Typography.Paragraph>
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
      la confiance en l&apos;économie numérique, il est précisé aux utilisateurs
      du site 2LTech l&apos;identité des différents intervenants dans le cadre
      de sa réalisation et de son suivi.
    </Typography.Paragraph>

    <Typography.Title level={5}>Edition du site </Typography.Title>
    <Typography.Paragraph>
      Le présent site, accessible à l’URL 2ltech.fr (le « Site »), est édité par
      :
      <br />
      SARL 2LTech , société au capital de 5000 euros, inscrite au R.C.S. de
      BRIVE sous le numéro R.C.S. Brive 940 870 108, dont le siège social est
      situé au 1 avenue Bel Air 19260 Treignac, représenté(e) par Simon Garnotel
      dûment habilité.
      <br />
      Le numéro individuel TVA de l’éditeur est : FR61940870108.
    </Typography.Paragraph>

    <Typography.Title level={5}>Hébergement</Typography.Title>
    <Typography.Paragraph>
      Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP
      80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).
    </Typography.Paragraph>

    <Typography.Title level={5}>Directeur de publication</Typography.Title>
    <Typography.Paragraph>
      Le Directeur de la publication du Site est Simon Garnotel.
    </Typography.Paragraph>

    <Typography.Title level={5}>Nous contacter</Typography.Title>
    <Typography.Paragraph>
      <ul>
        <li>
          Par téléphone : <a href="tel:+33743102886">+33743102886</a>
        </li>
        <li>
          Par email : <a href="mailto:contact@2ltech.fr">contact@2ltech.fr</a>
        </li>
        <li>Par courrier : SARL 2LTech, 1 avenue Bel Air, 19260 Treignac</li>
      </ul>
    </Typography.Paragraph>

    <Typography.Title level={5}>Données personnelles</Typography.Title>
    <Typography.Paragraph>
      Le traitement de vos données à caractère personnel est régi par notre
      Charte du respect de la vie privée, disponible depuis la section «Charte
      de Protection des Données Personnelles», conformément au Règlement Général
      sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
    </Typography.Paragraph>
  </RestrictedContent>
)

export default Legal

import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"


const PrivacyPolicy = () => {
    return (
        <>
            <Navbar header={ true } shop={ true } Homelink="home" />

            <Container>
                <div className="policy">
                    <h1>Politique de confidentialité de Care Inc Sarl</h1>

                    <p>Chez Care Inc Sarl, accessible depuis <a href="https://careincsarl.com/">https://careincsarl.com/</a>, l'une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient des types d'informations qui sont collectées et enregistrées par Care Inc Sarl et comment nous les utilisons.</p>
                    <p>Si vous avez des questions supplémentaires ou souhaitez plus d'informations sur notre politique de confidentialité, n'hésitez pas à nous contacter.</p>
                    <p>Cette politique de confidentialité s'applique uniquement à nos activités en ligne et est valable pour les visiteurs de notre site Web en ce qui concerne les informations qu'ils ont partagées et/ou collectées dans Care Inc Sarl. Cette politique ne s'applique pas aux informations collectées hors ligne ou via des canaux autres que ce site Web.</p>
                    <h5>Consentement</h5>
                    <p>En utilisant notre site Web, vous consentez par la présente à notre politique de confidentialité et acceptez ses conditions.</p>

                    <h5>Informations que nous collectons</h5>
                    <p>
                        Les informations personnelles que vous êtes invité à fournir, et les raisons pour lesquelles vous êtes invité à les fournir, vous seront précisées au moment où nous vous demanderons de fournir vos informations personnelles.<br />
                        Si vous nous contactez directement, nous pouvons recevoir des informations supplémentaires vous concernant telles que votre nom, votre adresse e-mail, votre numéro de téléphone, le contenu du message et/ou des pièces jointes que vous pouvez nous envoyer, et toute autre information que vous pouvez choisir de fournir.<br />
                        Lorsque vous créez un compte, nous pouvons vous demander vos coordonnées, y compris des éléments tels que le nom, le nom de l'entreprise, l'adresse, l'adresse e-mail et le numéro de téléphone.
                    </p>

                    <h5>Comment nous utilisons vos informations</h5>
                    <p>Nous utilisons les informations que nous recueillons de diverses manières, notamment pour :</p>
                    <p>Fournir, exploiter et maintenir notre site Web <br />
                        Améliorer, personnaliser et développer notre site Web <br />
                        Comprendre et analyser la façon dont vous utilisez notre site Web <br />
                        Développer de nouveaux produits, services, caractéristiques et fonctionnalités <br />
                        Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires, y compris pour le service client, pour vous fournir des mises à jour et d'autres informations relatives au site Web, et à des fins de marketing et de promotion <br />
                        Vous envoyer des e-mails <br />
                        Détecter et prévenir la fraude <br />
                        Fichiers journaux <br />
                        Care Inc Sarl suit une procédure standard d'utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu'ils visitent des sites Web. Toutes les sociétés d'hébergement le font et font partie de l'analyse des services d'hébergement. Les informations collectées par les fichiers journaux incluent les adresses IP (protocole Internet), le type de navigateur, le fournisseur d'accès Internet (FAI), l'horodatage, les pages de renvoi/sortie et éventuellement le nombre de clics. Ceux-ci ne sont liés à aucune information personnellement identifiable. Le but de l'information est d'analyser les tendances, d'administrer le site, de suivre le mouvement des utilisateurs sur le site Web et de recueillir des informations démographiques.
                    </p>

                    <h5>Politiques de confidentialité des partenaires publicitaires</h5>
                    <p>Vous pouvez consulter cette liste pour trouver la politique de confidentialité de chacun des partenaires publicitaires de Care Inc Sarl.<br />

                        Les serveurs publicitaires ou réseaux publicitaires tiers utilisent des technologies telles que les cookies, JavaScript ou les balises Web qui sont utilisées dans leurs publicités et liens respectifs qui apparaissent sur Care Inc Sarl, qui sont envoyés directement au navigateur des utilisateurs. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l'efficacité de leurs campagnes publicitaires et/ou pour personnaliser le contenu publicitaire que vous voyez sur les sites Web que vous visitez.<br />

                        Notez que Care Inc Sarl n'a aucun accès ni aucun contrôle sur ces cookies qui sont utilisés par des annonceurs tiers.</p>

                    <h5>Politiques de confidentialité des tiers</h5>
                    <p>La politique de confidentialité de Care Inc Sarl ne s'applique pas aux autres annonceurs ou sites Web. Ainsi, nous vous conseillons de consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour des informations plus détaillées. Il peut inclure leurs pratiques et instructions sur la façon de se retirer de certaines options.<br />

                        Vous pouvez choisir de désactiver les cookies via les options de votre navigateur. Pour connaître des informations plus détaillées sur la gestion des cookies avec des navigateurs Web spécifiques, vous pouvez les trouver sur les sites Web respectifs des navigateurs.<br />

                        Droits de confidentialité CCPA (Ne vendez pas mes informations personnelles)<br />
                        En vertu du CCPA, entre autres droits, les consommateurs californiens ont le droit de :<br />

                        Demander qu'une entreprise qui collecte les données personnelles d'un consommateur divulgue les catégories et les éléments spécifiques de données personnelles qu'une entreprise a collectées sur les consommateurs.<br />

                        Demander à une entreprise de supprimer toutes les données personnelles sur le consommateur qu'une entreprise a collectées.<br />

                        Demander qu'une entreprise qui vend les données personnelles d'un consommateur ne vende pas les données personnelles du consommateur.<br />

                        Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.</p>
                    <h5>Droits de protection des données GDPR</h5>
                    <p>Nous souhaitons nous assurer que vous êtes pleinement conscient de tous vos droits en matière de protection des données. Chaque utilisateur a droit à ce qui suit :.<br />

                        Le droit d'accès – Vous avez le droit de demander des copies de vos données personnelles. Nous pouvons vous facturer une somme modique pour ce service.<br />

                        Le droit de rectification – Vous avez le droit de nous demander de corriger toute information que vous jugez inexacte. Vous avez également le droit de demander que nous complétions les informations que vous pensez être</p>

                </div>
            </Container>
            <Footer />

        </>
    )
}
export default PrivacyPolicy
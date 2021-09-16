import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Projekte und Piloten',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    link: 'showcase',
    description: (
      <>
        Übersicht über die Projekte.
      </>
    ),
  },
  {
    title: 'Tutorial',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    link: 'docs/intro',
    description: (
      <>
        So verbinden Sie als Teilnehmer der Pilotphase Ihr Angebot
      </>
    ),
  },
  {
    title: 'FAQs',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    link: 'faq',
    description: (
      <>
        Häufig gestellte Fragen
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
            className="button button--secondary button--sm"
            to={useBaseUrl(link)}>
            mehr
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

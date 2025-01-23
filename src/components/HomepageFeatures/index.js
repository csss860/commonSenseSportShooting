import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A common sense solution...',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg')
      .default,
    description: (
      <>Are you tired of your neighborhood sounding like a war-zone?</>
    ),
  },
  {
    title: 'Let your representatives know that enough is enough...',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg')
      .default,
    description: (
      <>
        With more and more of our neighbors taking to the local
        forests to shoot their guns conflicts of interest are arising
        and safety is not being considered at all...
      </>
    ),
  },
  {
    title: 'The time to act is now!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg')
      .default,
    description: (
      <>
        Homes are being hit by errant bullets, people are living in
        fear in their neighborhoods, and nothing seems to be getting
        done to solve this problem. Until now...
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

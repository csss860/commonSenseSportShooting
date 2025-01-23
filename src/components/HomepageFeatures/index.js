import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A common sense solution...',
    Svg: require('@site/static/img/mountainClouds.svg').default,
    description: (
      <>
        Are you tired of your neighborhood sounding like a war-zone?
      </>
    ),
  },
  {
    title: 'Let your representatives know that enough is enough...',
    Svg: require('@site/static/img/mountainSun.svg').default,
    description: (
      <>
        It does not make any sense, that an activity as dangerous as
        target shooting is allowed with zero safety protocols or even
        a permitting process...
      </>
    ),
  },
  {
    title: 'The time to act is now!',
    Svg: require('@site/static/img/mountainTrees.svg').default,
    description: (
      <>
        The aim of this bill is to engender some common sense for
        those who believe their second amendment rights supersede
        their neighbors rights to life and the pursuit of happiness
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

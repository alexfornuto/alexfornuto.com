import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'About Me',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img: '/img/alexfornuto.jpg',
    description: (
      <>
        I'm Alex Fornuto, a technical writer originally from southern New Jersey.
        I run Linux, play guitar, and will correct your grammar on Twitter.
      </>
    ),
  },
  {
    title: 'Working with me',
    Svg: require('@site/static/img/coworking.svg').default,
    description: (
      <>
        A guide on how I communicate and work, borrowed from <nbsp/>
        <Link to="https://workwithme.guide/">WorkWithMe.guide</Link>
      </>
    ),
    link: '/workwithme'
  },
  {
    title: 'GitHub Stats',
    extImg: 'https://github-readme-stats.vercel.app/api?username=alexfornuto&show_icons=true&hide_title=true&&card_width=200px',
    description: (
      <>
        Not that they mean anything, there are better code repositories
      </>
    ),
    //imgOnly: true
    
  },
  /*{
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function Feature({Svg, title, description, link, img, extImg, imgOnly}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link || null}>
      <div className="text--center">
        {Svg ?
          <Svg className={styles.featureSvg} role="img" />
          : img?
          <img className={styles.featureSvg} src={useBaseUrl(img)}/>
          : extImg?
          <img  src={extImg} height="200"/>
          : null}
      </div>
      </Link>
      {!imgOnly?
      <div className="text--center padding-horiz--md">
        <Link to={link || null}>
        <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
      :null}
      
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

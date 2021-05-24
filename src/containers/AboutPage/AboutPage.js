import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Avita',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Own less - live more</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>What if you could earn passive income by just renting out your items?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Each yoga practitioner is an individual, and each one of us needs different care.
                Working together with an experienced yoga teacher offers the possibility to rise
                our practise to a whole new level.
              </h2>

              <p>
                Whether it is the alignment of asanas or being able to set the focus of the class,
                we all have our own struggles and goals. Some of these cannot be addressed in a
                regular class of twenty yogis. Working together with the experienced yoga teachers
                from Avita, you can together create just the right class for you.
              </p>

              <h3 className={css.subtitle}>Are you a yoga teacher?</h3>

              <p>
                Avita offers you a platform through which you can reach thousands of yoga
                practitioners. Offering private yoga classes through Yogatime offers you a
                possibility to grow your customer base and earn some extra income on top of your
                regular classes.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink>.

              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;

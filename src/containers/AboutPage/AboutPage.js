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
        description: 'About Unicorns',
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
                Don’t stress about buying, selling, repairing…  Just rent it for any amount hours/days. We deliver it to to your door and pick it up when you are done.
              </h2>

              <p>
                This is more convenient, more sustainable and you have a greater selection of products you can change between. It's better for you, for the people renting out and for the environment.
              </p>

              <h3 className={css.subtitle}>Do you want to rent out your own things?</h3>

              <p>
                Sign up. Take some pictures of the products you want to rent. That's it. When someone books your product, we pick it up and deliver it back to you when they are done. No hassle - simple passive income.
              </p>
              <p>
                Curious to get to know us more? Check out our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> page.

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

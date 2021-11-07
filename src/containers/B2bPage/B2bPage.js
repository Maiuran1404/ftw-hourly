import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage } from '..';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import Navbar from '../Navbar/Navbar';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  Button,
} from '../../components';

import css from './B2bPage.module.css';
import image from './about-us-1056.jpg';

const B2bPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Mona"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'B2bPage',
        description: 'Mona Business',
        name: 'Mona Business',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <Navbar />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Rental infrastructure for every business</h1>
          <h4 className={css.pageSubtitle}> We do insurance, delivery and marketing so you can focus <br /> on getting more money from your existing inventory  </h4>
          <br />
          <button className={css.ctaButton}>Sign up</button>
          <div className={css.contentWrapper}>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage >
  );
};

export default B2bPage;

import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './B2bPage.module.css';
import image from './about-us-1056.jpg';

const B2bPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="B2b Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'B2bPage',
        description: 'B2b Unicorns',
        name: 'B2b page',
      }}
    >
      <LayoutSingleColumn>
        {/* <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar> */}

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Rental infrastructure for every business</h1>
          <div className={css.contentWrapper}>

          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default B2bPage;

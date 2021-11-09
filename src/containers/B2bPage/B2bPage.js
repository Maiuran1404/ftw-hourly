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

import { Widget, PopupButton, SliderButton, Popover, Sidetab } from '@typeform/embed-react'

import retailone from './retailone.jpeg';
import retailtwo from './retailtwo.jpeg';
import retailthree from './retailthree.jpeg';
import example from './example.png';
import delivery from './delivery.png';
import insurance from './insurance.png';
import marketfront from './marketfront.png';

import css from './B2bPage.module.css';
import { Link } from 'react-router-dom';

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
          <button className={css.ctaButton} >Sign up</button>
          <PopupButton id="gnijvcG0" style={{ padding: 12, fontSize: 16 }} size={80}>
            click to open in popup
      </PopupButton>

          <br /><br />


          <div className={css.photos}>
            <img className={css.photoone} src={retailone}></img> <br />
            <img className={css.photoone} src={retailtwo}></img>
            <img className={css.photoone} src={retailthree}></img>
          </div>

          <br />
          <br />
          <br />

          <img className={css.photoexample} src={example}></img>

          <br />
          <h3 className={css.contentSubtitle}>Be better than your competition</h3>
          <h2 className={css.contentTitle}>Mona is built to help you grow</h2>
          <br />

          <div className={css.contentBoxes}>
            <div>
              <img className={css.photoone} src={delivery}></img> <br />
              <h3 className={css.contentSubtitle}>Delivery and pick up</h3>
              <p className={css.contentParagraph}>Mona delivers to the customer and picks
the item up when she is done using it. </p>
            </div>

            <div>
              <img className={css.photoone} src={insurance}></img>
              <h3 className={css.contentSubtitle}>Insurance</h3>
              <p className={css.contentParagraph}>Everything is fully insured. Don’t worry about any damages/theft. </p>
            </div>

            <div>
              <img className={css.photoone} src={marketfront}></img>
              <h3 className={css.contentSubtitle}>Marketfront</h3>
              <p className={css.contentParagraph}> You have your own marketfront
where you can build your brand.  </p>
            </div>

            <h2>Get the right plan for your growth</h2>
            <div className={css.pricingHeader}>
            </div>

            <div>

            </div>
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

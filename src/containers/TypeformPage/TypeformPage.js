import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { Helmet } from "react-helmet";

import css from './TypeformPage.module.css';

const TypeformPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <>
      <div id="wrapper" data-tf-widget="gnijvcG0" data-tf-inline-on-mobile ></div>

      <Helmet>
        <script src="//embed.typeform.com/next/embed.js"></script>


      </Helmet>
    </>

  );
};

export default TypeformPage;

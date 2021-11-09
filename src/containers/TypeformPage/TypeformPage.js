import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { Helmet } from "react-helmet";
const helmet = require('helmet')

import css from './TypeformPage.module.css';

const TypeformPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);


  // prettier-ignore
  return (

    <>
      <div data-tf-widget="gnijvcG0"></div>
      <script src="//embed.typeform.com/next/embed.js"></script>

    </>

  );
};

export default TypeformPage;

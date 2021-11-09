import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { Helmet } from "react-helmet";
const helmet = require('helmet')

import css from './TypeformPage.module.css';

const TypeformPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'https://checkout.stripe.com'],
      frameSrc: ["'self'", 'https://checkout.stripe.com'],
      childSrc: ["'self'", 'https://checkout.stripe.com'],
      scriptSrc: ["'self'", 'https://checkout.stripe.com'],
      styleSrc: [
        "'self'",
        'https://fonts.googleapis.com',
        'https://checkout.stripe.com',
      ],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'https://*.stripe.com', 'https://res.cloudinary.com'],
      baseUri: ["'self'"],
    },
  })

  // prettier-ignore
  return (

    <>
      <meta http-equiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">

      </meta>
      <div id="wrapper" data-tf-widget="gnijvcG0" data-tf-inline-on-mobile ></div>

      <Helmet>
        <script src="//embed.typeform.com/next/embed.js"></script>


      </Helmet>


    </>

  );
};

export default TypeformPage;

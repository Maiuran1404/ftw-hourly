const helmet = require('helmet');

const dev = process.env.REACT_APP_ENV === 'development';
const self = "'self'";
const unsafeInline = "'unsafe-inline'";
const unsafeEval = "'unsafe-eval'";
const data = 'data:';
const blob = 'blob:';
const devImagesMaybe = dev ? ['*.localhost:8000'] : [];
const baseUrl = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL || 'https://flex-api.sharetribe.com';

// Default CSP whitelist.
//
// NOTE: Do not change these in the customizations, make custom
// additions within the exported function in the bottom of this file.
const defaultDirectives = {
  baseUri: [self],
  defaultSrc: [self],
  childSrc: [blob],
  connectSrc: [
    self,
    baseUrl,
    'maps.googleapis.com',
    '*.tiles.mapbox.com',
    'api.mapbox.com',
    'events.mapbox.com',

    // Google Analytics
    'www.googletagmanager.com',
    'https://www.googletagmanager.com/gtag/js?id=G-TW0ZFZBQYG',
    'www.google-analytics.com',
    'stats.g.doubleclick.net',
    'https://js.intercomcdn.com/frame-modern.812aa270.js',
    'sentry.io',
    'https://o694656.ingest.sentry.io',
    '*.stripe.com',
    'https://static.hotjar.com/c/hotjar-2419018.js?sv=6',
    'https://widget.intercom.io/widget/zyktpfju',
    'wss://nexus-websocket-a.intercom.io',
    'https://api-iam.intercom.io/messenger/web/ping',
    'https://api-iam.intercom.io/*',
    'https://js.intercomcdn.com/vendor-modern.e2013c7e.js',
    'https://api-iam.intercom.io/messenger/web/metrics',
    'https://js.intercomcdn.com/*',
    'https://js.intercomcdn.com/frame-modern.812aa270.js',
    'https://ws3.hotjar.com',
    'wss://ws8.hotjar.com',
    'https://ws15.hotjar.com',
    '*.hotjar.com'
  ],
  fontSrc: [self, data, 'assets-sharetribecom.sharetribe.com', 'fonts.gstatic.com', 'https://js.intercomcdn.com/fonts/proximanova-semibold.46e3f047.woff'],
  frameSrc: [self, '*.stripe.com', 'https://widget.intercom.io/widget/zyktpfju', 'https://js.intercomcdn.com/frame-modern.812aa270.js'],
  imgSrc: [
    self,
    data,
    blob,
    ...devImagesMaybe,
    '*.imgix.net',
    'sharetribe.imgix.net', // Safari 9.1 didn't recognize asterisk rule.

    // Styleguide placeholder images
    'lorempixel.com',
    'via.placeholder.com',

    'api.mapbox.com',
    'maps.googleapis.com',
    '*.gstatic.com',
    '*.googleapis.com',
    '*.ggpht.com',

    // Google Analytics
    'www.googletagmanager.com',
    'https://www.googletagmanager.com/gtag/js?id=G-TW0ZFZBQYG',
    'https://js.intercomcdn.com/frame-modern.812aa270.js',
    'www.google.com',
    'www.google-analytics.com',
    'stats.g.doubleclick.net',
    'https://o694656.ingest.sentry.io',
    '*.stripe.com',
    'https://static.hotjar.com/c/hotjar-2419018.js?sv=6',
    'https://widget.intercom.io/widget/zyktpfju',
    'https://api-iam.intercom.io/messenger/web/ping',
    'https://api-iam.intercom.io/*',
    'wss://nexus-websocket-a.intercom.io',
    'https://js.intercomcdn.com/vendor-modern.e2013c7e.js',
    'https://api-iam.intercom.io/messenger/web/metrics',
    'https://js.intercomcdn.com/*',
    'https://js.intercomcdn.com/frame-modern.812aa270.js'
  ],
  scriptSrc: [
    self,
    unsafeInline,
    unsafeEval,
    data,
    'https://www.googletagmanager.com',
    'https://www.googletagmanager.com/gtag/js?id=G-TW0ZFZBQYG',
    'https://js.intercomcdn.com/frame-modern.812aa270.js',
    'maps.googleapis.com',
    'api.mapbox.com',
    '*.google-analytics.com',
    'https://o694656.ingest.sentry.io',
    'https://connect.facebook.net',
    'js.stripe.com',
    'https://static.hotjar.com/c/hotjar-2419018.js?sv=6',
    'https://widget.intercom.io/widget/zyktpfju',
    'https://api-iam.intercom.io/messenger/web/ping',
    'https://api-iam.intercom.io/',
    'https://js.intercomcdn.com/vendor-modern.e2013c7e.js',
    'wss://nexus-websocket-a.intercom.io/*',
    'https://api-iam.intercom.io/messenger/web/metrics',
    'https://js.intercomcdn.com/frame-modern.812aa270.js',
    'https://js.intercomcdn.com/*',
    'https://script.hotjar.com'
  ],
  styleSrc: [self, unsafeInline, 'fonts.googleapis.com', 'api.mapbox.com', 'https://widget.intercom.io/widget/zyktpfju', 'https://js.intercomcdn.com/frame-modern.812aa270.js'],
};

/**
 * Middleware for creating a Content Security Policy
 *
 * @param {String} reportUri URL where the browser will POST the
 * policy violation reports
 *
 * @param {Boolean} enforceSsl When SSL is enforced, all mixed content
 * is blocked/reported by the policy
 *
 * @param {Boolean} reportOnly In the report mode, requests are only
 * reported to the report URL instead of blocked
 */
module.exports = (reportUri, enforceSsl, reportOnly) => {
  // ================ START CUSTOM CSP URLs ================ //

  // Add custom CSP whitelisted URLs here. See commented example
  // below. For format specs and examples, see:
  // https://content-security-policy.com/

  // Example: extend default img directive with custom domain
  // const { imgSrc = [self] } = defaultDirectives;
  // const exampleImgSrc = imgSrc.concat('my-custom-domain.example.com');

  const customDirectives = {
    // Example: Add custom directive override
    // imgSrc: exampleImgSrc,
  };

  // ================ END CUSTOM CSP URLs ================ //

  // Helmet v4 expects every value to be iterable so strings or booleans are not supported directly
  // If we want to add block-all-mixed-content directive we need to add empty array to directives
  // See Helmet's default directives:
  // https://github.com/helmetjs/helmet/blob/bdb09348c17c78698b0c94f0f6cc6b3968cd43f9/middlewares/content-security-policy/index.ts#L51

  const directives = Object.assign({ reportUri: [reportUri] }, defaultDirectives, customDirectives);
  if (enforceSsl) {
    directives.blockAllMixedContent = [];
  }

  // See: https://helmetjs.github.io/docs/csp/
  return helmet.contentSecurityPolicy({
    directives,
    reportOnly,
  });
};

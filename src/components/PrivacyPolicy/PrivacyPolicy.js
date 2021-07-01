import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: June 2, 2021</p>

      <p>
        Thank you for using Unicorns! 
        
        <br/> <br/>
        Unicorns exists to help build connections between people and make the world more open, inclusive and sustainable. In short—to build a world where anyone can belong anywhere. We are a community built on trust. A fundamental part of earning that trust means being clear about how we use your information and protect your human right to privacy.
        <br/> <br/>
This Privacy Policy describes how Unicorns, Inc. and its affiliates (“we,” “us,” or “Unicorns”), process personal information that we collect through the Unicorns Platform. Depending on where you live and what you are doing on the Unicorns Platform, the supplemental privacy pages listed below may apply to you. Please follow the links and review the supplemental information provided there with information about how we process personal information for those regions and services.
      </p>

      <h2>1 Information needed to use the Unicorns Platform.</h2>
      <p>
      We collect personal information about you when you use the Unicorns Platform. Without it, we may not be able to provide you with all services requested. This information includes:

Contact Information, Account, Profile Information. Such as your first name, last name, phone number, postal address, email address, date of birth, and profile photo, some of which will depend on the features you use.
      </p>

      <h2>2 Information you choose to give us.</h2>
      <p>
      You can choose to provide us with additional personal information. This information may include:

Additional Profile Information. Such as gender, preferred language(s), city, and personal description. Some of this information as indicated in your account settings is part of your public profile page and will be publicly visible.
Address Book Contact Information. Address book contacts you import or enter manually.
Other Information. Such as when you fill in a form, add information to your account, respond to surveys, post to community forums, participate in promotions, communicate with our customer care team and other Members, or share your experience with us. This may include health information if you choose to share it with us.
      </p>

      <h2>3 Information Automatically Collected by Using the Unicorns Platform and our Payment Services.</h2>
      <p>
      When you use the Unicorns Platform and Payment Services, we automatically collect personal information. This information may include:

Geo-location Information. Such as precise or approximate location determined from your IP address or mobile device’s GPS depending on your device settings. We may also collect this information when you’re not using the app if you enable this through your settings or device permissions.
Usage Information. Such as the pages or content you view, searches for Listings, bookings you have made, and other actions on the Unicorns Platform.
Log Data and Device Information. Such as details about how you’ve used the Unicorns Platform (including if you clicked on links to third party applications), IP address, access dates and times, hardware and software information, device information, device event information, unique identifiers, crash data, cookie data, and the pages you’ve viewed or engaged with before or after using the Unicorns Platform. We may collect this information even if you haven’t created an Unicorns account or logged in.
Cookies and Similar Technologies as described in our Cookie Policy.
Payment Transaction Information. Such as payment instrument used, date and time, payment amount, payment instrument expiration date and billing postcode, PayPal email address, IBAN information, your address and other related transaction details.
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;

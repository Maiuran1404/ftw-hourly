import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: June 2, 2021</p>

      <p>
        Thank you for using Avita!
        <br /><br />
        These Terms of Service (“Terms”) are a binding legal agreement between you and Avita that govern your use of the websites, applications, and other offerings from Avita (collectively, the “Avita Platform”). When used in these Terms, “Avita,” “we,” “us,” or “our” refers to the Avita entity with whom you are contracting.
        <br /><br />
The Avita Platform offers an online venue that enables users (“Members”) to publish, offer, search for, and book services. Members who publish and offer services are “Hosts” and Members who search for, book, or use services are “Guests.” Hosts offer products ("products"). You must register an account to access and use many features of the Avita Platform, and must keep your account information accurate. As the provider of the Avita Platform, Avita does not own, control, offer or manage any Listings or Host Services. Avita is not a party to the contracts concluded directly between Hosts and Guests, nor is Avita a broker or insurer. Avita is not acting as an agent in any capacity for any Member, except as specified in the Payments Terms of Service (“Payment Terms”).
<br /><br />
We maintain other terms and policies that supplement these Terms like our Privacy Policy, which describes our collection and use of personal data, and our Payments Terms, which govern any payment services provided to Members by the Avita payment entities ("Avita Payments").
<br /><br />
If you Host, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Host Services.
      </p>

      <h2>1: Our Mission & Responsibility.</h2>
      <p>
        Our mission is to create a world where you own less and live more.
        From sports equipment to cameras to houseboats, browse through millions of Listings
        to find the ones that fit the way you like to live. Learn more about a Listing
        by reviewing the description and photos, the Host profile, and Guest reviews.
        If you have questions, just message the Host.
      </p>

      <h2>2 Your Responsibilities as a Guest.</h2>
      <p>
        You are responsible and liable for your own acts and omissions and are also responsible for the
        acts and omissions of anyone you invite to join in using any Product.
        For example, this means: (i) you are responsible for leaving
        a product in the condition it was in when you received it,
        and (ii) you must act with integrity, treat others with respect, and comply with applicable
        laws at all times.
      </p>

      <h2>3 Your Responsibilities as a Host</h2>
      <p>
        You are responsible and liable for your own acts and omissions and are also responsible for
        the acts and omissions of anyone you allow to participate in providing your Host Services.
        You are responsible for setting your price and establishing rules and requirements for your Listing.
        You must describe any and all fees and charges in your Listing description and may not collect any
        additional fees or charges outside the Avita Platform except those expressly authorized by our Offline Fee Policy.
        Do not encourage Guests to create third-party accounts, submit reviews, provide their contact information,
        or take other actions outside the Avita Platform in violation of our Off-Platform Policy.
      </p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;

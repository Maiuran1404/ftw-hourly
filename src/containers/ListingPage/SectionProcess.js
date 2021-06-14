import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';
import CourierImage from '../../assets/courier.png';
import VanImage from '../../assets/van.png';
import PackageImage from '../../assets/package.png';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionProcess = props => {
  const { description } = props;
  return description ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.processTitle" />
      </h2>
      <p className={css.description}>
        <b> Book item &nbsp; </b>
        <img src={PackageImage} alt={'Icons made by  Freepik (https://www.freepik.com) fromwww.flaticon.com'} height={40} width={40} />
        <br />
        Check the availability of the item, book it, and make a secure payment right away.
        <br /> <br />

        <b> We deliver it to your address &nbsp; </b>
        <img src={CourierImage} alt={'Icons made by  Freepik (https://www.freepik.com) fromwww.flaticon.com'} height={40} width={40} />
        <br />
        Use your product for as long as you booked. We'll handle the delivery and pick up, so you can focus on enjoying the product.
        <br /> <br />

        <b> We pick it up when time is up &nbsp;</b>
        <img src={VanImage} alt={'Icons made by  Freepik (https://www.freepik.com) fromwww.flaticon.com'} height={40} width={40} />
        <br />
        Use your product for as long as you booked. We'll handle the delivery and pick up, so you can focus on enjoying the product.
        <br /> <br />


      </p>
    </div>
  ) : null;
};

export default SectionProcess;

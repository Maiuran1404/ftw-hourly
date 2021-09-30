import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import camera from './images/camera.jpeg';
import electronics from './images/electronics.jpeg';
import instruments from './images/instruments.jpeg';
import lego from './images/lego.jpeg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Camera',
          camera,
          's?address=Oslo%2C%20Norway&bounds=60.1351069980695%2C10.951387977184%2C59.8093320107807%2C10.489163013591&pub_category=film_photography'
        )}
        {locationLink(
          'Electronics',
          electronics,
          's?address=Oslo%2C%20Norway&bounds=60.1351069980695%2C10.951387977184%2C59.8093320107807%2C10.489163013591&pub_category=film_photography'
        )}
        {locationLink(
          'Instruments',
          instruments,
          's?address=Oslo%2C%20Norway&bounds=60.1351069980695%2C10.951387977184%2C59.8093320107807%2C10.489163013591&pub_category=film_photography'
        )}
        {locationLink(
          'Lego',
          lego,
          's?address=Oslo%2C%20Norway&bounds=60.1351069980695%2C10.951387977184%2C59.8093320107807%2C10.489163013591&pub_category=film_photography'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;

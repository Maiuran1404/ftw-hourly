import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './ReviewFeed.module.css';

// import nyImage from './images/ny-yogi.jpg';
// import laImage from './images/la-yogi.jpg';
// import sfImage from './images/sf-yogi.jpg';

class LocationImage extends Component {
    render() {
        const { alt, ...rest } = this.props;
        return <img alt={alt} {...rest} />;
    }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const reviewLink = (name, searchQuery) => {
    const nameText = <span className={css.locationName}>{name}</span>;
    return (
        <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
            {/* <div className={css.imageWrapper}>
                <div className={css.aspectWrapper}>
                    <LazyImage src={image} alt={name} className={css.locationImage} />
                </div>
            </div> */}
            <div className={css.imageWrapper}>
                <p>
                    Fantastisk opplevelse og alt fungerte perfekt
                </p>
                <p>{name}</p>
            </div>
        </NamedLink>
    );
};

const ReviewFeed = props => {
    const { rootClassName, className } = props;

    const classes = classNames(rootClassName || css.root, className);

    return (
        <div className={classes}>
            {/* <div className={css.title}>
                <FormattedMessage id="ReviewFeed.title" />
            </div>

            <div className={css.Reviews}>
                {reviewLink('Bruker1', "rentunicorns.com")}
                {reviewLink('Bruker2', "rentunicorns.com")}
                {reviewLink('Bruker2', "rentunicorns.com")}
            </div> */}
        </div>
    );
};

ReviewFeed.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

ReviewFeed.propTypes = {
    rootClassName: string,
    className: string,
};

export default ReviewFeed;

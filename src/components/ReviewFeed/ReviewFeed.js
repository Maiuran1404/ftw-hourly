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

const locationLink = (name, author, searchQuery) => {
    const nameText = <span className={css.locationName}>{name}</span>;
    return (
        <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
            {/* <div className={css.imageWrapper}>
                <div className={css.aspectWrapper}>
                    <LazyImage src={image} alt={name} className={css.locationImage} />
                </div>
            </div> */}

            <div className={css.linkText}>
                <FormattedMessage
                    id="SectionLocations.listingsInLocation"
                    values={{ location: nameText }}
                />
                <p>{author}</p>
            </div>
        </NamedLink>
    );
};

const ReviewFeed = props => {
    const { rootClassName, className } = props;

    const classes = classNames(rootClassName || css.root, className);

    return (
        <div className={classes}>
            <div className={css.title}>
                <FormattedMessage id="ReviewFeed.title" />
            </div>
            <div className={css.locations}>
                {locationLink(
                    'I was gonna have the party of a lifetime, but then our sound system broke down. In two hours (🤯) they were able to deliver a new sounboks, and the party was saved. Lovely service, faster delivery than I thought was possible, and all at an affordable price. Can not recommend enough!',
                    //nyImage,
                    '- Jacob Langmoen',
                    's?address=Oslo%2C%20Oslo%2C%20Norway&bounds=59.99150957%2C10.88047726%2C59.84719282%2C10.67399192'
                )}
                {locationLink(
                    'Kapp/Gjærsaw Hitachi, I will take that one 😇 Super service. I have already recommended you to many of my friends',
                    //laImage,
                    '- Knutsen',
                    's?address=Oslo%2C%20Oslo%2C%20Norway&bounds=59.99150957%2C10.88047726%2C59.84719282%2C10.67399192'
                )}
            </div>
            {/* <div className={css.locations}>
                {locationLink(

                )}
                {locationLink(
                    'Kapp/Gjærsaw Hitachi, I will take that one 😇 Super service. I have already recommended you to many of my friends',
                    //laImage,
                    '- Knutsen',
                    's?address=Oslo%2C%20Oslo%2C%20Norway&bounds=59.99150957%2C10.88047726%2C59.84719282%2C10.67399192'
                )}
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

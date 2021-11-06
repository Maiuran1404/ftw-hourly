import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import classNames from 'classnames';
import { intlShape, injectIntl } from '../../util/reactIntl';
import { Form, LocationAutocompleteInput } from '../../components';
import { createResourceLocatorString, pathByRouteName } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import { NamedLink } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';
import css from './HeroSearch.module.css';

const identity = v => v;

class HeroSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {

        // const { currentSearchParams } = this.props;
        // const keywords = values.keywords;
        // const { history } = this.props;
        // const searchParams = {
        //     ...currentSearchParams,
        //     keywords,
        // };
        //history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, 'bike'));
        console.log(e);
        window.open('s?keywords=' + e.target.value, '');

    }

    render() {

        return (
            <div className={css.wrapper}>
                <div className={css.first}>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            //value={this.state.value}
                            placeholder="Camera, Speaker, Bike.."
                            className={css.searchbox} />
                    </form>
                </div>
                <div className={css.second}>
                    <NamedLink
                        name="SearchPage"
                        to={{
                            search:
                                'address=Oslo%2C%20Norway&bounds=60.1351069980695%2C10.951387977184%2C59.8093320107807%2C10.489163013591',
                        }}
                        onClick={this.handleSubmit}
                        className={css.heroButton}
                    >
                        <FormattedMessage id="SectionHero.browseButton" />
                    </NamedLink>
                </div>
            </div>
            // <input
            //     className={
            //         // isMobile
            //         //     ? css.mobileInputRoot
            //         //     : 
            //         css.desktopInputRoot
            //     }
            //     //{...input}
            //     id="keyword-search"
            //     ref={this.searchInput}
            //     type="text"
            //     placeholder="test"
            //     // {intl.formatMessage({
            //     //     id: 'HeroSearch.placeholder',
            //     // })}
            //     autoComplete="off"
            // />
        );
    }
}

const { func, string, bool } = PropTypes;

HeroSearchComponent.defaultProps = {
    rootClassName: null,
    className: null,
    desktopInputRoot: null,
    isMobile: false,
};

HeroSearchComponent.propTypes = {
    rootClassName: string,
    className: string,
    desktopInputRoot: string,
    handleSubmit: func.isRequired,
    isMobile: bool,

    // from injectIntl
    intl: intlShape.isRequired,
};

const HeroSearch = injectIntl(HeroSearchComponent);

export default HeroSearch;

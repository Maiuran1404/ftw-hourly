import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
    ExternalLink,
} from '../../components';

import css from './FaqPage.module.css';
// import image from './about-us-1056.jpg';

const AboutPage = () => {
    const { siteTwitterHandle, siteFacebookPage } = config;
    const siteTwitterPage = twitterPageURL(siteTwitterHandle);

    // prettier-ignore
    return (
        <StaticPage
            title="About Us"
            schema={{
                '@context': 'http://schema.org',
                '@type': 'AboutPage',
                description: 'About Avita',
                name: 'About page',
            }}
        >
            <LayoutSingleColumn>
                <LayoutWrapperTopbar>
                    <TopbarContainer />
                </LayoutWrapperTopbar>

                <LayoutWrapperMain className={css.staticPageWrapper}>
                    <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
                    {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}


                    <div className={css.contentWrapper}>
                        <div className={css.contentSide}>
                            <h2>How does deliveries work?</h2>
                        </div>

                        <div className={css.contentMain}>

                            <p>
                                We pick up and deliver! 🤓 Our courier picks up the item from the door of the person renting out, 10 minutes
                                before the delivery is due.
                                The courier delivers the item to the person renting it and when the time is up, we pick it up and
                                deliver it back to your door within 10 minutes of the end-time.
                            </p>

                        </div>
                    </div>

                    <div className={css.contentWrapper}>
                        <div className={css.contentSide}>
                            <h2>What if someone damages an item I rent out?</h2>
                        </div>

                        <div className={css.contentMain}>

                            <p>
                                You are fully insured up to €1'000 EUR! 🥳 (We are working to increase that limit!).
                                So if anything gets damaged, we will pick it up and get it repaired or replaced
                                and get it back to you as quickly as possible.
                                You don't need to do anywhere. We will take care of everything!
                            </p>

                        </div>
                    </div>

                    <div className={css.contentWrapper}>
                        <div className={css.contentSide}>
                            <h2>Any other quesionts?</h2>
                        </div>

                        <div className={css.contentMain}>

                            <p>
                                Chat with us now! 🥰 Just click on the purple button to the right.
                                We are building this as we speak and would love to make this product
                                amazing for you!
                            </p>

                        </div>
                    </div>

                </LayoutWrapperMain>

                <LayoutWrapperFooter>
                    <Footer />
                </LayoutWrapperFooter>
            </LayoutSingleColumn>
        </StaticPage>
    );
};

export default AboutPage;

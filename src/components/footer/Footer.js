import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Fragment>
            <footer mt-4>
                <div className="footer-gray">
                    <div className="footer-custom">
                        <div className="footer-lists">
                            <div className="footer-list-wrap">
                                <h6 className="ftr-hdr">Order Toll Free</h6>
                                <ul className="ftr-links-sub">
                                    <li>100-00-0000</li>
                                </ul>
                                <h6 className="ftr-hdr">International</h6>
                                <ul className="ftr-links-sub">
                                    <li><Link to="/" >United States</Link></li>

                                </ul>
                            </div>

                            <div className="footer-list-wrap">
                                <h6 className="ftr-hdr">Customer Service</h6>
                                <ul className="ftr-links-sub">
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/">Ordering</Link></li>
                                    <li><Link to="/">Shipping &amp; Delivery</Link></li>
                                    <li><Link to="/">Returns</Link></li>
                                    <li><Link to="/">International Orders</Link></li>
                                    <li><Link to="/">Gift Cards</Link></li>
                                    <li><Link to="/">FAQs</Link></li>
                                </ul>
                            </div>
                            <div className="footer-list-wrap">
                                <h6 className="ftr-hdr">About Us</h6>
                                <ul className="ftr-links-sub">
                                    <li><Link to="/">Our Company</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                    <li><Link to="/">Artist Rising</Link></li>
                                    <li><Link to="/">Business &amp; Trade Sales</Link></li>
                                    <li><Link to="/">Affiliate Program</Link></li>
                                    <li><Link to="/"><strong>Shop Our Catalog</strong></Link></li>
                                    <li><Link to="/">ART.COM BLOG</Link></li>
                                </ul>
                            </div>

                            <div className="footer-list-wrap">
                                <h6 className="ftr-hdr">My Account</h6>
                                <ul className="ftr-links-sub">

                                    <li className="ftr-Login"><span className="link login-trigger">Access My Account</span></li>
                                    <li><span className="link">Track My Order</span></li>

                                    <li className="ftr-Login"><span className="link ftr-access-my-account">Access My Account</span></li>
                                    <li><span className="link">Track My Order</span></li>

                                </ul>
                            </div>

                        </div>

                        <div className="footer-email">
                            <h6 className="ftr-hdr">Sign up for exclusive offers and inspiration</h6>
                            <div id="ftr-email" className="ftr-email-form">
                                <form id="ftrEmailForm">
                                    <div className="error">Please enter Link valid email address</div>
                                    <input type="text" name="email_address_" id="ftrEmailInput" className="input" placeholder="Enter email address" />
                                    <input type="submit" className="button" value="SUBMIT" />
                                    <input type="hidden" name="country_iso2" value="" />
                                    <input type="hidden" name="language_iso2" value="en" />
                                    <input type="hidden" name="site_domain" value="test" />
                                    <input type="hidden" name="email_acq_source" value="01-000001" />
                                    <input type="hidden" name="email_acq_date" value="" id="ftr-email-date" />
                                    <input type="hidden" name="brand_id" value="ART" />
                                    <input type="hidden" name="_ri_" value="XYZ" />
                                </form>
                            </div>

                            <div className="ftr-email-privacy-policy"></div>
                        </div>

                        <div className="footer-social">
                            <h6 className="ftr-hdr">Follow Us</h6>
                            <ul>
                                <li>
                                    <Link to="/" title="Facebook" >
                                        <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" title="Google+" >
                                        <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" target="_blank">
                                        <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png" />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" to="/">
                                        <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" title="Twitter">
                                        <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-legal">
                            <p>&copy; TestInc. All Rights Reserved. | <Link to="/" >Privacy Policy</Link> | <Link to="/">Terms of Use</Link> | <Link to="/">Terms of Sale</Link></p>
                            <p>Test, Test, and Photos [to] test are trademarks or registered trademarks of Test </p>
                            <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </Fragment>
    );
}

export default Footer;
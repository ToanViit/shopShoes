import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="my-5">
                <footer className="footer" style={{ width: '100%' }}>
                    <div className="container">
                        <div className="footer-container">
                            <div className="footer-menu">
                                <h4 className="text_title">NAME BRAND</h4>
                                <ul className="dropdown-menu">
                                    <li>Questions regarding products, orders, returns or other matters should be addressed to:</li>
                                    <li>E-mail: Online@shoethebear.com</li>
                                    <li>Phone: +45 38 40 04 44</li>
                                    <li>Monday-Thursday: 9:00-15</li>
                                    <li>Friday: 9:00-14:00 CET</li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h4 className="text_title">INFORMATION</h4>
                                <ul className="dropdown-menu">
                                    <li>About Shoe The Bear</li>
                                    <li>FAQ</li>
                                    <li>Size guide</li>
                                    <li>Refund Policy</li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h4 className="text_title">CONTACT</h4>
                                <ul className="dropdown-menu">
                                    <li>B2B login</li>
                                    <li>B2B - Retailer</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h4 className="text_title">SOCIAL</h4>
                                <ul className="dropdown-menu">
                                    <li>Contact</li>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-menu">
                            <h4 className="text_title">SIGN UP FOR OUR NEWSLETTER</h4>
                            <ul className="dropdown-menu">
                                <li>Sign up for our newsletter and you'll be first in line for special offers, competitions, news, and offers.</li>
                                <li className="emailBtn_parent">
                                    <div className="flex emailBtn">
                                        <input placeholder="Email" className="" type="email" />
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true" focusable="false" role="presentation" className="icon icon-email"
                                            viewBox="0 0 64 64" width="64" height="64">
                                            <path
                                                d="M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68"
                                                stroke="#000000" fill="none" strokeWidth="2px"></path>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid--footerBottom">
                            <span>© 2024 SHOE THE BEAR - COM</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

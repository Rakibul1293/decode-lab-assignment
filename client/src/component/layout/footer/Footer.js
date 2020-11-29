import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <section id="footer-section" className="pt-5">
            <div className="row">
                <div className="col-md-12">
                    <footer className="d-flex justify-content-end">
                        <p style={props.firstFooterTextColor} onClick={(e) => props.handleMainContent(e)}>Solutions</p>
                        <div className="right-bar"></div>
                        <p style={props.secondFooterTextColor} onClick={(e) => props.handleMainContent(e)}>Services</p>
                        <div className="right-bar"></div>
                        <p style={props.thirdFooterTextColor} onClick={(e) => props.handleMainContent(e)}>Consulting</p>
                        <div className="right-bar"></div>
                        <p style={props.fourthFooterTextColor} onClick={(e) => props.handleMainContent(e)}>Training</p>
                    </footer>
                </div>
            </div>
        </section>
    );
}

export default Footer;

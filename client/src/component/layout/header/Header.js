import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <section id="header-section" className="pt-5 pb-5">
            <div className="row">
                <div className="col-md-12">
                    <header className="d-flex justify-content-between">
                        <p onClick={(e) => props.handleMainContent(e)}>Data & Technology</p>
                        <div className="first-circle" style={props.firstCircleColor} onClick={(e) => props.handleMainContent(e)}></div>

                        <p onClick={(e) => props.handleMainContent(e)}>Accounting & Finance</p>
                        <div className="second-circle" style={props.secondCircleColor} onClick={(e) => props.handleMainContent(e)}></div>

                        <p onClick={(e) => props.handleMainContent(e)}>Ecommerce</p>
                        <div className="third-circle" style={props.thirdCircleColor} onClick={(e) => props.handleMainContent(e)}></div>

                        <p onClick={(e) => props.handleMainContent(e)}>Modern Web App</p>
                        <div className="fourth-circle" style={props.fourthCircleColor} onClick={(e) => props.handleMainContent(e)}></div>
                    </header>
                    <div className="border-bottom"></div>
                </div>
            </div>
        </section>
    );
}

export default Header;

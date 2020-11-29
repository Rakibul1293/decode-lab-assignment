import React from 'react';
import DataTechnology from './dataTechnology/DataTechnology';
import AccountingFinance from './accountingFinance/AccountingFinance';
import Ecommerce from './ecommerce/Ecommerce';
import ModernWebApp from './modernWebApp/ModernWebApp';

const Main = (props) => {
    return (
        <>
            {
                props.nameOfTab === "Data & Technology" || props.nameOfClass === "first-circle" || props.nameOfFooterTab === "Solutions" ? <DataTechnology /> : ""
            }

            {
                props.nameOfTab === "Accounting & Finance" || props.nameOfClass === "second-circle" || props.nameOfFooterTab === "Services" ? <AccountingFinance /> : ""
            }

            {
                props.nameOfTab === "Ecommerce" || props.nameOfClass === "third-circle" || props.nameOfFooterTab === "Consulting" ? <Ecommerce /> : ""
            }

            {
                props.nameOfTab === "Modern Web App" || props.nameOfClass === "fourth-circle" || props.nameOfFooterTab === "Training" ? <ModernWebApp /> : ""
            }
        </>
    );
}

export default Main;

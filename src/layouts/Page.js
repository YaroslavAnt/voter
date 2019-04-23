import React from 'react';

import './Page.scss'
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Page = (props) => (
    <div className="page flexbox">
        <Sidebar />
        <div className="flexbox col grow">
            <Header pageName={props.pageName} />
            <main>{props.children}</main>
            <Footer />
        </div>
    </div>
);

export default Page;
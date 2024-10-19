import React from 'react';
import Accordion from "../../components/Accordion/accordion";
import Header from "../../components/Header/header";
import Banner from '../../components/Banner/banner';
import Footer from '../../components/Footer/Footer';
import { about } from "../../data/apropos";
import './about.scss'

function About() {
    const aboutItems = about.map((item) => ({
        title: item.name,
        content: item.content,
    }));

    return (
        <>

                <Header />
                <div>
                    <div className='about-banner-container'>
                        <Banner />
                    </div>
                    <Accordion items={aboutItems} />
                </div>
                <Footer />

        </>
    );
}

export default About;

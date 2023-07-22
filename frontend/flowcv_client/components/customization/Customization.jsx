import React from "react";
import Templates from "./components/Templates";
import Layout from "./components/Layout";
import Colors from "./components/Colors";
import Spacing from "./components/Spacing";
import Font from "./components/Font";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Name from "./components/Name";
import Job from "./components/Job";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Date from "./components/Date";
import Skills from "./components/Skills";
import Language from "./components/Language";
import Interest from "./components/Interest";
import Certificate from "./components/Certificates";
import Education from "./components/Education";
import ProfessionalExperience from "./components/ProfessionalExp";

const Customization = () => {
    return (
        <>
            <Templates />
            <Layout />
            <Colors />
            <Spacing />
            <Font />
            <Heading />
            <Header />
            <Name />
            <Job />
            <Photo />
            <Footer />
            <Date />
            <Skills />
            <Language />
            <Interest />
            <Certificate />
            <Education />
            <ProfessionalExperience />
        </>
    );
};

export default Customization;

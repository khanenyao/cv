import React from 'react';
import School from 'material-ui/svg-icons/social/school';
import Settings from 'material-ui/svg-icons/action/settings';
import Work from 'material-ui/svg-icons/action/work';
import Language from 'material-ui/svg-icons/action/language';
import Assignment from 'material-ui/svg-icons/action/assignment';

import Header from '../../../components/Header';
import Body from '../../../components/Body';
import Section from '../../../components/Section';

import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import SkillCategory from '../components/SkillCategory';
import Projects from '../components/Projects';
import StepController from './StepController';

const styles = {
    section: {
        maxWidth: 500,
    },
    iconE: {
        fontSize: 26,
        fill: '#009688',
        color: '#009688',
    },
    body: {
        marginTop: 160
    }
};

const Root = (_, context) => (
    <div>
        <Header />
        <Body style={styles.body}>
            <Section label={'Education'} style={styles.section} icon={<School style={styles.iconE} />}>
                <StepController>
                    <Education
                        date={'2013 - 2017'}
                        school={'University of Pardubice'}
                        faculty={'Faculty of Electrical Engineering and Informatics'}
                        degree={'Bachelor of Information Technology'}
                        workName={'Design and implementation of an application for localization of rolling stock using Raspberry Pi and a web service.'}
                        workUrl={'https://dk.upce.cz/handle/10195/68089'}
                        mediaName={'Presentation'}
                        mediaUrl={'https://drive.google.com/open?id=1oHe_5vwDGZa8foiLa1ZOB8aIPMWPkQ8N'}
                    />
                    <Education
                        date={'2012 - 2013'}
                        school={'Charles University in Prague'}
                        faculty={'Institute for Language and Preparatory Studies'}
                        degree={'Full Year Czech Course, B2 Level'}
                    />
                </StepController>
            </Section>
            <Section label={'Experience'} icon={<Work style={styles.iconE} />}>
                <Experience
                    date={'2015 - CURRENT'}
                    company={{ name: 'CGI CS&EE', url: 'https://www.cgi.com/en/ceska-republika' }}
                    position={'Analyst Programmer'}
                />
            </Section>
            <Section label={'Projects'} icon={<Assignment style={styles.iconE} />}>
                <Projects
                    projects={[
                        {
                            fromYear: '2017',
                            toYear: 'current',
                            description: 'For more than a year I have been working on a financial project as a JavaScript developer. Our team is developing a web application which is based on React and managed on Liferay CMS. On this project I have got a lot of new knowledge from my colleagues and ability to work in a big team located across differents cities.',
                        },
                        {
                            fromYear: '2016',
                            toYear: '2016',
                            description: 'I was designing a prototype for competition. The target was to create a web application using Vaadin framework for planning transport service with the ability to display all events on a timeline (in the past and in the feature). Based on system requirements I had created a database model encompassing main business functions and after that I worked on the web application.',
                        },
                        {
                            fromYear: '2016',
                            toYear: '2016',
                            description: 'My first web development project. I was working on an internal project which was designed for employees of our company. Development was carried in Java using JSP and CMS Liferay.',
                        },
                        {
                            fromYear: '2015',
                            toYear: '2016',
                            description: `When I joined CGI team I started my work in integration team who were adding WSO2 ESB support for one well-known Czech company. I implemented a solution for parsing XLS data from email and then converting it to XML using XSLT templates and validation by XSD.`,
                        },
                    ]}
                />
            </Section>
            <Section label={'Skills'} icon={<Settings style={styles.iconE} />}>
                <Skills>
                    <SkillCategory
                        categoryName={'Actively using'}
                        skills={["React", "Redux", "Material-UI", "Yarn / npm", "JavaScript", "Java", "SQL", "HTML", "CSS", "UML", "JSON", "REST"]}
                    />
                    <SkillCategory
                        categoryName={'Good grasp'}
                        skills={["Swift", "C", "C++", "C#", "JavaFX", "Ramda js"]}
                    />
                    <SkillCategory
                        categoryName={'Some experience'}
                        skills={["Liferay", "Vaadin", "React Native", "Electron", "iOS App Development", "Android App Development", "Spring Boot"]}
                    />
                    <SkillCategory
                        categoryName={'Operating systems'}
                        skills={["Mac OS", "Linux", "Windows"]}
                    />
                </Skills>
            </Section>
            <Section label={'Languages'} icon={<Language style={styles.iconE} />}>
                <Languages
                    languages={[{
                        language: 'English',
                        proficiency: 'Professional working proficiency'
                    }, {
                        language: 'Czech',
                        proficiency: 'Full professional proficiency'
                    }, {
                        language: 'Russian',
                        proficiency: 'Native'
                    }]}
                />
            </Section>
        </Body>
    </div>
);

export default Root;
